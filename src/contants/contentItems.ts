type Tag = "ブログ" | "技術ブログ" | "リポジトリ" | "絵" | "サービス" | "記念";

const createLink = (imageName: string) => `/content-thumbnails/${imageName}`;

export const contentItems: {
  url: string;
  tags: Tag[];
  title: string;
  overview: string;
  createdAt: Date;
  imgHref?: string;
}[] = [
  {
    url: "https://zenn.dev/redshoga/articles/ca28db8afd6b44",
    tags: ["技術ブログ"],
    title: "テキストに隠し情報を埋め込むnpmモジュールを公開しました",
    overview: "テキストデータに見えない情報を埋め込める電子透かし",
    createdAt: new Date("2021/03/09"),
  },
  {
    url: "https://qiita.com/redshoga/items/bc30a43c87997bb22c95",
    tags: ["技術ブログ"],
    title: "Next.jsの自分なりのベストプラクティスを6点紹介する",
    overview: "当時のNext.jsのプラクティスまとめ",
    createdAt: new Date("2020/12/18"),
  },
  {
    url: "https://qiita.com/redshoga/items/b86ffa26d2290c4464fb",
    tags: ["技術ブログ"],
    title: "Nuxt + TSのテンプレを作った + 自分なりのおすすめの設定",
    overview: "当時のNuxtのプラクティスまとめ",
    createdAt: new Date("2019/12/19"),
  },
  {
    url: "https://qiita.com/redshoga/items/8f8579a60a8e5ed49d6d",
    tags: ["技術ブログ"],
    title: "マウスカーソルを操ってめちゃくちゃイライラさせるUXを作ってみた",
    overview: "マウスカーソルによるユーザ体験のコントロール",
    createdAt: new Date("2018/12/14"),
  },
  {
    url: "https://qiita.com/redshoga/items/986c07abb6d38766588b",
    tags: ["技術ブログ"],
    title:
      "LGTMすると現場猫が「ヨシ!」してくれるGitHub Actionsをつくった + Tips",
    overview: "ネタ記事",
    createdAt: new Date("2019/12/17"),
  },
  {
    url: "https://twitter.com/redshoga/status/1578388341950582784",
    tags: ["記念"],
    title: "Splatoon3 S+10 記念ツイート",
    overview: "うれしい",
    createdAt: new Date("2022/10/07"),
    imgHref: createLink("S+10.jpeg"),
  },
  {
    url: "https://github.com/redshoga/redshoga-com",
    tags: ["リポジトリ"],
    title: "redshoga-com",
    overview: "このサイトのリポジトリ",
    createdAt: new Date("2022/10/20"),
    imgHref: createLink("redshoga-com.png"),
  },
  {
    url: "http://todonuts.vercel.app/",
    tags: ["サービス"],
    title: "ToDonuts",
    overview: "シンプルなTodoアプリ",
    createdAt: new Date("2022/10/16"),
    imgHref: createLink("todonuts.png"),
  },
  {
    url: "https://github.com/redshoga/next-msw-playwright-example",
    tags: ["リポジトリ"],
    title: "next-msw-playwright-example",
    overview: "Next.jsとmswとPlaywrightを用いたE2Eのサンプル",
    createdAt: new Date("2022/10/13"),
  },
  {
    url: "https://github.com/redshoga/multi-services-example",
    tags: ["リポジトリ"],
    title: "multi-services-example",
    overview:
      "Next.jsをMiddlewareを用いてお手軽なマルチテナントアプリとして展開するサンプル",
    createdAt: new Date("2022/09/21"),
  },
];
