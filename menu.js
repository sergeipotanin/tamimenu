// Данные меню. Генерируются из таблицы Excel — правьте таблицу, а не этот файл.
window.MENU={
 "categories": [
  {
   "id": "c1",
   "name": "Стартеры"
  },
  {
   "id": "c2",
   "name": "Пельмени",
   "subs": [
    "Соусы к пельменям"
   ],
   "note": "Пельмени можем пожарить бесплатно"
  },
  {
   "id": "c3",
   "name": "Салаты"
  },
  {
   "id": "c4",
   "name": "Супы"
  },
  {
   "id": "c5",
   "name": "Боулы"
  },
  {
   "id": "c6",
   "name": "Лапша"
  },
  {
   "id": "c7",
   "name": "Токпокки"
  },
  {
   "id": "c8",
   "name": "Жареный рис"
  },
  {
   "id": "c9",
   "name": "Гонконгские вафли",
   "subs": [
    "Сытные",
    "Сладкие"
   ]
  },
  {
   "id": "c10",
   "name": "Десерты"
  }
 ],
 "dishes": [
  {
   "id": "dish-3",
   "cat": "c1",
   "name": "Татаки из тунца с соусом понзу-терияки",
   "variants": [
    {
     "p": 650,
     "w": 150,
     "kcal": 211,
     "prot": 24,
     "fat": 11,
     "carb": 4
    }
   ],
   "img": "tataki",
   "badges": [
    "hit"
   ],
   "rec": {
    "t": "К этому блюду рекомендуем вино",
    "i": "wine"
   }
  },
  {
   "id": "dish-5",
   "cat": "c1",
   "name": "Тако суши сет",
   "variants": [
    {
     "p": 650,
     "w": 180,
     "kcal": 476,
     "prot": 19,
     "fat": 16,
     "carb": 64
    }
   ],
   "img": "takosushi",
   "rec": {
    "t": "К этому блюду рекомендуем вино",
    "i": "wine"
   }
  },
  {
   "id": "dish-7",
   "cat": "c1",
   "name": "Хэнд-ролл на выбор",
   "variants": [
    {
     "p": 200,
     "label": "С тунцом",
     "w": 70,
     "kcal": 89,
     "prot": 6,
     "fat": 5,
     "carb": 5,
     "img": "tuna"
    },
    {
     "p": 200,
     "label": "С креветкой",
     "w": 70,
     "kcal": 107,
     "prot": 5,
     "fat": 7,
     "carb": 6,
     "img": "shrimp"
    },
    {
     "p": 260,
     "label": "С лососем",
     "w": 70,
     "kcal": 90,
     "prot": 4,
     "fat": 6,
     "carb": 5,
     "img": "salomon"
    }
   ],
   "img": "handroll",
   "rec": {
    "t": "К этому блюду рекомендуем вино",
    "i": "wine"
   }
  },
  {
   "id": "dish-9",
   "cat": "c1",
   "name": "Батат фри",
   "variants": [
    {
     "p": 350,
     "w": 140,
     "kcal": 352,
     "prot": 3,
     "fat": 12,
     "carb": 58
    }
   ],
   "img": "batat",
   "rec": {
    "t": "К этому блюду рекомендуем вино",
    "i": "wine"
   }
  },
  {
   "id": "dish-10",
   "cat": "c1",
   "name": "Куриный поп-корн",
   "variants": [
    {
     "p": 470,
     "w": 200,
     "kcal": 503,
     "prot": 25,
     "fat": 19,
     "carb": 58
    }
   ],
   "img": "popcorn",
   "note": "Можем сделать поострее",
   "badges": [
    "hit"
   ],
   "rec": {
    "t": "К этому блюду рекомендуем вино",
    "i": "wine"
   }
  },
  {
   "id": "dish-11",
   "cat": "c2",
   "name": "Димсамы с креветкой и белой рыбой в соусе Том ям",
   "variants": [
    {
     "p": 390,
     "label": "4 шт",
     "kcal": 479,
     "prot": 18,
     "fat": 15,
     "carb": 68
    },
    {
     "p": 660,
     "label": "8 шт",
     "kcal": 958,
     "prot": 36,
     "fat": 30,
     "carb": 136
    }
   ],
   "img": "dimsams"
  },
  {
   "id": "dish-12",
   "cat": "c2",
   "name": "Дамплинги с говядиной и свининой",
   "variants": [
    {
     "p": 390,
     "label": "5 шт",
     "kcal": 520,
     "prot": 16,
     "fat": 24,
     "carb": 60
    },
    {
     "p": 590,
     "label": "10 шт",
     "kcal": 1040,
     "prot": 32,
     "fat": 48,
     "carb": 120
    }
   ],
   "img": "dampling"
  },
  {
   "id": "dish-13",
   "cat": "c2",
   "name": "Вонтоны фри с креветкой и свининой",
   "variants": [
    {
     "p": 390,
     "label": "5 шт",
     "kcal": 524,
     "prot": 18,
     "fat": 24,
     "carb": 59
    },
    {
     "p": 630,
     "label": "10 шт",
     "kcal": 1048,
     "prot": 36,
     "fat": 48,
     "carb": 118
    }
   ],
   "img": "votons"
  },
  {
   "id": "dish-14",
   "cat": "c2",
   "name": "Гёдза с курицей",
   "variants": [
    {
     "p": 370,
     "label": "5 шт",
     "kcal": 527,
     "prot": 20,
     "fat": 23,
     "carb": 60
    },
    {
     "p": 570,
     "label": "10 шт",
     "kcal": 1054,
     "prot": 40,
     "fat": 46,
     "carb": 120
    }
   ],
   "img": "gizda"
  },
  {
   "id": "dish-15",
   "cat": "c2",
   "name": "Соево-кунжутный",
   "variants": [
    {
     "p": 90,
     "w": 50,
     "kcal": 228,
     "prot": 1,
     "fat": 20,
     "carb": 11
    }
   ],
   "sub": "Соусы к пельменям",
   "img": "sous2"
  },
  {
   "id": "dish-16",
   "cat": "c2",
   "name": "Кокосовая сметана",
   "variants": [
    {
     "p": 90,
     "w": 50,
     "kcal": 51,
     "prot": 1,
     "fat": 3,
     "carb": 5
    }
   ],
   "sub": "Соусы к пельменям",
   "img": "sous1"
  },
  {
   "id": "dish-17",
   "cat": "c3",
   "name": "Хрустящий баклажан с муссом фета",
   "variants": [
    {
     "p": 490,
     "w": 250,
     "kcal": 386,
     "prot": 7,
     "fat": 26,
     "carb": 31
    }
   ],
   "img": "baklagan",
   "badges": [
    "hit"
   ]
  },
  {
   "id": "dish-18",
   "cat": "c3",
   "name": "Балийский Цезарь с курицей",
   "variants": [
    {
     "p": 580,
     "w": 240,
     "kcal": 574,
     "prot": 23,
     "fat": 38,
     "carb": 35
    }
   ],
   "img": "balichiken"
  },
  {
   "id": "dish-21",
   "cat": "c3",
   "name": "Балийский Цезарь с креветкой",
   "variants": [
    {
     "p": 620,
     "w": 210,
     "kcal": 419,
     "prot": 15,
     "fat": 27,
     "carb": 29
    }
   ],
   "img": "balishrimp"
  },
  {
   "id": "dish-20",
   "cat": "c3",
   "name": "Салат с манго-карри и креветками",
   "variants": [
    {
     "p": 560,
     "w": 250,
     "kcal": 163,
     "prot": 6,
     "fat": 11,
     "carb": 10
    }
   ],
   "img": "saladmango"
  },
  {
   "id": "dish-22",
   "cat": "c4",
   "name": "Том ям",
   "variants": [
    {
     "p": 720,
     "w": 670,
     "kcal": 520,
     "prot": 28,
     "fat": 24,
     "carb": 48
    }
   ],
   "img": "tomym"
  },
  {
   "id": "dish-25",
   "cat": "c4",
   "name": "Сырный рамен с томленой говядиной",
   "variants": [
    {
     "p": 720,
     "w": 570,
     "kcal": 700,
     "prot": 44,
     "fat": 40,
     "carb": 41
    }
   ],
   "img": "ramencow",
   "badges": [
    "hit"
   ]
  },
  {
   "id": "dish-26",
   "cat": "c4",
   "name": "Сливочный рамен с томленым цыпленком",
   "variants": [
    {
     "p": 640,
     "w": 570,
     "kcal": 369,
     "prot": 16,
     "fat": 21,
     "carb": 29
    }
   ],
   "img": "ramencream"
  },
  {
   "id": "dish-27",
   "cat": "c4",
   "name": "Ореховый рамен с креветками и пряным маслом",
   "variants": [
    {
     "p": 720,
     "w": 550,
     "kcal": 532,
     "prot": 26,
     "fat": 32,
     "carb": 35
    }
   ],
   "img": "ramennuts"
  },
  {
   "id": "dish-28",
   "cat": "c5",
   "name": "Имбирный цыпленок с пряным терияки",
   "variants": [
    {
     "p": 630,
     "w": 330,
     "kcal": 462,
     "prot": 12,
     "fat": 26,
     "carb": 45
    }
   ],
   "img": "bowlimbir"
  },
  {
   "id": "dish-29",
   "cat": "c5",
   "name": "Лосось с авокадо и соусом понзу",
   "variants": [
    {
     "p": 690,
     "w": 350,
     "kcal": 452,
     "prot": 12,
     "fat": 24,
     "carb": 47
    }
   ],
   "img": "bowlsalamon"
  },
  {
   "id": "dish-30",
   "cat": "c5",
   "name": "Пибимпаб с маринованными овощами и курицей",
   "variants": [
    {
     "p": 530,
     "w": 350,
     "kcal": 361,
     "prot": 18,
     "fat": 17,
     "carb": 34
    }
   ],
   "img": "pibimpab"
  },
  {
   "id": "dish-33",
   "cat": "c5",
   "name": "Тунец с авокадо, манго и соусом никкей",
   "variants": [
    {
     "p": 690,
     "w": 360,
     "kcal": 437,
     "prot": 16,
     "fat": 21,
     "carb": 46
    }
   ],
   "img": "bowltuna"
  },
  {
   "id": "dish-36",
   "cat": "c6",
   "name": "Кацу удон с японским карри",
   "variants": [
    {
     "p": 590,
     "w": 330,
     "kcal": 400,
     "prot": 17,
     "fat": 20,
     "carb": 38
    }
   ],
   "img": "katsyudon"
  },
  {
   "id": "dish-37",
   "cat": "c6",
   "name": "Пад тай с креветкой",
   "variants": [
    {
     "p": 740,
     "w": 350,
     "kcal": 413,
     "prot": 15,
     "fat": 25,
     "carb": 32
    }
   ],
   "img": "pugtaishrimp"
  },
  {
   "id": "dish-42",
   "cat": "c7",
   "name": "Токпокки сырные с копчеными колбасками",
   "variants": [
    {
     "p": 720,
     "w": 280,
     "kcal": 530,
     "prot": 18,
     "fat": 42,
     "carb": 20
    }
   ],
   "img": "tokpokkikolbask"
  },
  {
   "id": "dish-43",
   "cat": "c7",
   "name": "Токпокки с креветками в кокосовом соусе биск",
   "variants": [
    {
     "p": 770,
     "w": 330,
     "kcal": 355,
     "prot": 17,
     "fat": 23,
     "carb": 20
    }
   ],
   "img": "tokpokkishrimp"
  },
  {
   "id": "dish-46",
   "cat": "c8",
   "name": "Жареный рис с креветками",
   "variants": [
    {
     "p": 680,
     "w": 350,
     "kcal": 622,
     "prot": 13,
     "fat": 46,
     "carb": 39
    }
   ],
   "img": "riceshrimp",
   "badges": [
    "hit"
   ]
  },
  {
   "id": "dish-47",
   "cat": "c8",
   "name": "Цыпленок кунг пао с кокосовой сметаной",
   "variants": [
    {
     "p": 520,
     "w": 380,
     "kcal": 615,
     "prot": 27,
     "fat": 35,
     "carb": 48
    }
   ],
   "img": "chikenkungpao"
  },
  {
   "id": "dish-49",
   "cat": "c9",
   "name": "Вафля с копченым лососем и творожным сыром",
   "variants": [
    {
     "p": 560,
     "w": 280,
     "kcal": 684,
     "prot": 17,
     "fat": 40,
     "carb": 64
    }
   ],
   "sub": "Сытные",
   "img": "bubblessalamon",
   "badges": [
    "hit"
   ]
  },
  {
   "id": "dish-54",
   "cat": "c9",
   "name": "Вафля «Дубайская» с мороженым",
   "variants": [
    {
     "p": 520,
     "w": 280,
     "kcal": 945,
     "prot": 12,
     "fat": 33,
     "carb": 150
    }
   ],
   "sub": "Сладкие",
   "img": "bubblesdubai",
   "badges": [
    "hit"
   ]
  },
  {
   "id": "dish-55",
   "cat": "c9",
   "name": "Вафля с клубникой и шоколадным соусом",
   "variants": [
    {
     "p": 460,
     "w": 250,
     "kcal": 476,
     "prot": 7,
     "fat": 16,
     "carb": 76
    }
   ],
   "sub": "Сладкие",
   "img": "bubblesstrewberry"
  },
  {
   "id": "dish-56",
   "cat": "c10",
   "name": "Чизкейк с матчей, манго и арахисом мисо",
   "variants": [
    {
     "p": 390,
     "w": 150,
     "kcal": 537,
     "prot": 6,
     "fat": 37,
     "carb": 45
    }
   ],
   "img": "cheesecake"
  },
  {
   "id": "dish-57",
   "cat": "c10",
   "name": "Мункейк",
   "variants": [
    {
     "p": 420,
     "label": "Вишнёвый",
     "w": 150,
     "kcal": 492,
     "prot": 8,
     "fat": 35,
     "carb": 36
    },
    {
     "p": 420,
     "label": "Шоколадный",
     "w": 150,
     "kcal": 402,
     "prot": 6,
     "fat": 26,
     "carb": 36
    }
   ],
   "img": "mooncake"
  },
  {
   "id": "dish-58",
   "cat": "c10",
   "name": "Панна-Котик",
   "variants": [
    {
     "p": 370,
     "w": 150,
     "kcal": 261,
     "prot": 6,
     "fat": 9,
     "carb": 39
    }
   ],
   "img": "panacat"
  },
  {
   "id": "dish-59",
   "cat": "c10",
   "name": "Моти",
   "variants": [
    {
     "p": 290,
     "w": 70,
     "kcal": 194,
     "prot": 3,
     "fat": 10,
     "carb": 23
    }
   ],
   "img": "moti"
  }
 ],
 "stories": [
  {
   "name": "Акция",
   "cover": "sale-1",
   "slides": [
    {
     "img": "sale-1"
    },
    {
     "img": "sale-2"
    }
   ]
  },
  {
   "name": "Система лояльности",
   "cover": "loyalty-1",
   "slides": [
    {
     "img": "loyalty-1",
     "url": "https://injoy.getmeback.ru/wallet/frontend#/wallet/android",
     "label": "Получить карту"
    }
   ]
  },
  {
   "name": "6й Ланч Free",
   "cover": "news-1",
   "slides": [
    {
     "img": "news-1"
    }
   ]
  }
 ]
};
