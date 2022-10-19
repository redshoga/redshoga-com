type Tag = "ブログ" | "ネタ";

export const contentItems: {
  url: string;
  tags: Tag[];
  title: string;
  overview: string;
  createdAt: Date;
}[] = [
  {
    title: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら",
    overview: "sample sample sample sample sample",
    createdAt: new Date("5000/07/12"),
    url: "https://example.com",
    tags: ["ブログ"],
  },
  {
    title: "sample3",
    overview: "sample",
    createdAt: new Date("2021/07/12"),
    url: "https://example.com",
    tags: ["ネタ"],
  },
  {
    title: "sample2",
    overview: "sample",
    createdAt: new Date("2024/07/12"),
    url: "https://example.com",
    tags: ["ブログ"],
  },
  {
    title: "sample1",
    overview: "sample",
    createdAt: new Date("3000/07/12"),
    url: "hoge",
    tags: ["ブログ", "ネタ"],
  },
];
