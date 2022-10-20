const createLink = (imageName: string) => `/gallery-images/${imageName}`;

export const galleryImages: {
  title: string;
  url: string;
  imageHref: string;
  createdAt: Date;
}[] = [
  {
    title: "ニャッキ",
    url: "https://www.instagram.com/p/B3mFQpAAl7x/",
    imageHref: createLink("2019-10-14-nyakki.jpeg"),
    createdAt: new Date("2019/10/14"),
  },
  {
    title: "CGのチュートリアルで作ったドーナツ",
    url: "https://www.instagram.com/p/B3gKH8rg6md/",
    imageHref: createLink("2019-10-12-donuts.jpeg"),
    createdAt: new Date("2019/10/12"),
  },
  {
    title: "ニャッキ",
    url: "https://www.instagram.com/p/BunPhDNAMzL/",
    imageHref: createLink("2019-03-05-water.jpeg"),
    createdAt: new Date("2019/03/05"),
  },
];
