export {};

// リテラル型とユニオン型を組み合わせることもできる

let dayOfTheWeek: "日" | "月" | "火" | "水" | "木" | "金" | "土" | "31" = "日";

dayOfTheWeek = "月";

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
