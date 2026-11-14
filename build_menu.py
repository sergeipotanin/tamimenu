# Сборка menu.js из Excel-таблицы меню.
# Использование: python3 build_menu.py Tami_menu.xlsx menu.js
import json, sys
from openpyxl import load_workbook

src, out = sys.argv[1], sys.argv[2]
YES = ("да", "yes", "1")


def s(v):
    return None if v is None or str(v).strip() == "" else str(v).strip()


def num(v):
    if v is None or str(v).strip() == "":
        return None
    f = float(v)
    return int(f) if f == int(f) else f


def yes(v):
    return (s(v) or "").lower() in YES


wb = load_workbook(src, data_only=True)
ws, cs = wb["Меню"], wb["Категории"]

# ---- категории
cats, ids = [], {}
for i, r in enumerate(cs.iter_rows(min_row=2, values_only=True)):
    if not s(r[0]):
        continue
    c = dict(id="c%d" % (i + 1), name=s(r[0]))
    subs = [x.strip() for x in (s(r[1]) or "").split(";") if x.strip()]
    if subs:
        c["subs"] = subs
    if s(r[2]):
        c["note"] = s(r[2])
    cats.append(c)
    ids[c["name"]] = c["id"]

# ---- блюда
dishes, order, hid = {}, [], set()
last = 0


def process(r):
    global last
    r = list(r) + [None] * (24 - len(r))   # на случай, если в таблице нет последних колонок
    raw = r[0]
    if isinstance(raw, str) and raw.strip().lower() in YES:
        # «да» случайно попало в колонку «№»: считаем пометкой «Скрыть»
        no = last + 1
        hid.add(no)
    else:
        no = num(raw)
    if no is None:
        return
    last = no
    if no not in dishes:
        b = []
        for x in (s(r[15]) or "").replace(";", ",").split(","):
            x = x.strip().lower()
            if x in ("топ", "top", "хит"):
                b.append("hit")
            elif x == "new":
                b.append("new")
            elif x.startswith("остр"):
                b.append("spicy")
        if s(r[1]) not in ids:
            raise ValueError("категория «%s» не найдена на листе «Категории»" % s(r[1]))
        d = dict(id="dish-%d" % no, cat=ids[s(r[1])], name=s(r[3]), variants=[])
        for k, v in (("sub", s(r[2])), ("img", s(r[13])), ("desc", s(r[11])), ("note", s(r[12]))):
            if v:
                d[k] = v
        if b:
            d["badges"] = b
        if s(r[18]):
            d["rec"] = dict(t=s(r[18]), i={"вино": "wine"}.get((s(r[19]) or "").lower(), "def"))
        if yes(r[16]):
            d["soldout"] = True
        if yes(r[17]):
            hid.add(no)
        dishes[no] = d
        order.append(no)
    v = dict(p=num(r[6]))
    if s(r[4]):
        v["label"] = s(r[4])
    if num(r[5]):
        v["w"] = num(r[5])
    for k, i in (("kcal", 7), ("prot", 8), ("fat", 9), ("carb", 10)):
        if num(r[i]) is not None:
            v[k] = num(r[i])
    if s(r[14]):
        v["img"] = s(r[14])
    dishes[no]["variants"].append(v)


for i, r in enumerate(ws.iter_rows(min_row=2, values_only=True), 2):
    try:
        process(r)
    except Exception as e:
        print("ОШИБКА в листе «Меню», строка %d: %s" % (i, e))
        sys.exit(1)

order = [k for k in order if k not in hid]
# категория, в которой все блюда скрыты, на сайте не показывается
cats = [c for c in cats if any(dishes[k]["cat"] == c["id"] for k in order)]

# ---- истории
st = []
if "Истории" in wb.sheetnames:
    for i, r in enumerate(wb["Истории"].iter_rows(min_row=2, values_only=True), 2):
        try:
            r = list(r) + [None] * (8 - len(r))
            if not s(r[0]) or yes(r[3]):
                continue
            sl = []
            for x in (s(r[2]) or "").split(";"):
                q = [y.strip() for y in x.split("|")]
                if q[0]:
                    it = dict(img=q[0])
                    if len(q) > 1 and q[1]:
                        it["url"] = q[1]
                    if len(q) > 2 and q[2]:
                        it["label"] = q[2]
                    sl.append(it)
            if sl:
                st.append(dict(name=s(r[0]), cover=s(r[1]) or sl[0]["img"], slides=sl))
        except Exception as e:
            print("ОШИБКА в листе «Истории», строка %d: %s" % (i, e))
            sys.exit(1)

js = ("// Данные меню. Генерируются из таблицы Excel — правьте таблицу, а не этот файл.\nwindow.MENU="
      + json.dumps(dict(categories=cats, dishes=[dishes[k] for k in order], stories=st), ensure_ascii=False, indent=1) + ";\n")
open(out, "w", encoding="utf-8").write(js)
print(len(cats), "categories", len(order), "dishes", len(st), "stories")
