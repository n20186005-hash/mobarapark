export const park = {
  name: "茂原公園",
  guideName: "茂原公園ガイド",
  tagline: "桜と弁天湖、四季を歩く。",
  address: "〒297-0029 千葉県茂原市高師1325-1",
  admission: "入園無料",
  stationWalk: "JR茂原駅から徒歩約30分",
  stationBus: "JR茂原駅からバス約7分、西町停留所から徒歩約10分",
  outerPath: "外周園路 約1km",
  area: "160,829㎡",
  coordinates: { latitude: 35.43058, longitude: 140.28228 },
  officialUrl: "https://www.city.mobara.chiba.jp/promotion/0000001554.html",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=35.43058,140.28228",
} as const;

export const parking = [
  {
    name: "第1駐車場",
    note: "弁天湖に最も近く、初めての来園や車いす利用に便利。",
    capacity: "普通車82台・軽2台",
    accessible: "身障者用3台",
    bus: "大型バス4台",
    walk: "弁天湖まで約2分",
  },
  {
    name: "第2駐車場",
    note: "第2広場や園路をゆっくり巡るコースに向いています。",
    capacity: "普通車55台・軽3台",
    accessible: "身障者用2台",
    bus: "大型バス3台",
    walk: "弁天湖まで約8分",
  },
  {
    name: "中部駐車場",
    note: "第1駐車場が満車のときの選択肢。場所を先に確認しておくと安心です。",
    capacity: "普通車20台程度",
    accessible: "記載なし",
    bus: "利用不可",
    walk: "公園入口まで約7分",
  },
] as const;

export const sources = [
  {
    label: "茂原市｜茂原公園",
    url: "https://www.city.mobara.chiba.jp/promotion/0000001554.html",
  },
  {
    label: "千葉県公式観光サイト｜茂原公園",
    url: "https://maruchiba.jp/spot/detail_10644.html",
  },
] as const;
