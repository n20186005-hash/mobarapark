export type Route = {
  id: "lakeside" | "photo" | "culture";
  number: string;
  name: string;
  subtitle: string;
  time: string;
  distance: string;
  difficulty: string;
  recommended: string;
  stops: string[];
  note: string;
  color: string;
};

export const routes: Route[] = [
  {
    id: "lakeside",
    number: "01",
    name: "湖畔ゆっくりコース",
    subtitle: "赤い橋と水辺を、無理なくひと巡り。",
    time: "45–60分",
    distance: "約1.0km",
    difficulty: "やさしい",
    recommended: "初めて・親子・シニア",
    stops: ["第1駐車場", "弁天橋", "弁天堂", "八橋", "第1広場"],
    note: "湖畔中心。ベビーカーは山側の散策路を避け、舗装された園路を選ぶと安心です。",
    color: "#b64b40",
  },
  {
    id: "photo",
    number: "02",
    name: "桜と眺望コース",
    subtitle: "湖面の光から、高台の景色へ。",
    time: "約90分",
    distance: "約1.8km",
    difficulty: "ほどよい",
    recommended: "写真・季節の花・カップル",
    stops: ["湖南岸", "弁天橋", "八橋", "北側散策路", "展望デッキ"],
    note: "展望デッキへは坂と階段があります。雨上がりは足元に注意してください。",
    color: "#667e76",
  },
  {
    id: "culture",
    number: "03",
    name: "公園と文化コース",
    subtitle: "自然と美術、まちの記憶をつなぐ。",
    time: "120–150分",
    distance: "約2.4km",
    difficulty: "しっかり",
    recommended: "半日滞在・文化・再訪",
    stops: ["弁天湖", "第2広場", "美術館・郷土資料館", "展望広場", "藻原寺方面"],
    note: "施設の開館日・時間は出発前に公式情報を確認してください。",
    color: "#8b6c52",
  },
];
