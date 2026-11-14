import json,sys
from openpyxl import load_workbook
src=sys.argv[1];out=sys.argv[2]
wb=load_workbook(src,data_only=True);ws=wb["Меню"];cs=wb["Категории"]
def s(v): return None if v is None or str(v).strip()=="" else str(v).strip()
def num(v):
    return None if v is None or str(v).strip()=="" else (int(v) if float(v)==int(float(v)) else float(v))
catlist=[];ids={}
for i,r in enumerate(cs.iter_rows(min_row=2,values_only=True)):
    if not s(r[0]): continue
    c=dict(id="c%d"%(i+1),name=s(r[0]));subs=[x.strip() for x in (s(r[1]) or "").split(";") if x.strip()]
    if subs:c["subs"]=subs
    if s(r[2]):c["note"]=s(r[2])
    catlist.append(c);ids[c["name"]]=c["id"]
dishes={};order=[];hid=set()
for r in ws.iter_rows(min_row=2,values_only=True):
    no=num(r[0])
    if no is None: continue
    if no not in dishes:
        b=[]
        for x in (s(r[15]) or "").replace(";",",").split(","):
            x=x.strip().lower()
            if x in("топ","top","хит"):b.append("hit")
            elif x=="new":b.append("new")
            elif x.startswith("остр"):b.append("spicy")
        d=dict(id="dish-%d"%no,cat=ids[s(r[1])],name=s(r[3]),variants=[])
        for k,v in (("sub",s(r[2])),("img",s(r[13])),("desc",s(r[11])),("note",s(r[12]))):
            if v:d[k]=v
        if b:d["badges"]=b
        if s(r[18]):d["rec"]=dict(t=s(r[18]),i={"вино":"wine"}.get((s(r[19]) or "").lower(),"def"))
        if (s(r[16]) or "").lower() in("да","yes","1"):d["soldout"]=True
        if (s(r[17]) or "").lower() in("да","yes","1"):hid.add(no)
        dishes[no]=d;order.append(no)
    v=dict(p=num(r[6]))
    if s(r[4]):v["label"]=s(r[4])
    if num(r[5]):v["w"]=num(r[5])
    for k,i in (("kcal",7),("prot",8),("fat",9),("carb",10)):
        if num(r[i]) is not None:v[k]=num(r[i])
    if s(r[14]):v["img"]=s(r[14])
    dishes[no]["variants"].append(v)
order=[k for k in order if k not in hid]
st=[]
if "Истории" in wb.sheetnames:
    for r in wb["Истории"].iter_rows(min_row=2,values_only=True):
        if not s(r[0]) or (s(r[3]) or "").lower() in("да","yes","1"):continue
        sl=[]
        for x in (s(r[2]) or "").split(";"):
            q=[y.strip() for y in x.split("|")]
            if q[0]:
                it=dict(img=q[0])
                if len(q)>1 and q[1]:it["url"]=q[1]
                if len(q)>2 and q[2]:it["label"]=q[2]
                sl.append(it)
        if sl:st.append(dict(name=s(r[0]),cover=s(r[1]) or sl[0]["img"],slides=sl))
js="// Данные меню. Генерируются из Tami_menu.xlsx — правьте таблицу, а не этот файл.\nwindow.MENU="+json.dumps(dict(categories=catlist,dishes=[dishes[k] for k in order],stories=st),ensure_ascii=False,indent=1)+";\n"
open(out,"w",encoding="utf-8").write(js)
print(len(catlist),"categories",len(order),"dishes")
