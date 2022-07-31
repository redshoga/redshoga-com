export const navLinks: {
  title: string;
  href: string;
  active: (currentPath: string) => boolean;
  useMarkdown: boolean;
}[] = [
  {
    title: "記事",
    href: "/",
    active: (currentPath: string) => !!currentPath.match(/^\/$/),
    useMarkdown: false,
  },
  {
    title: "アカウント",
    href: "/account",
    active: (currentPath: string) => !!currentPath.match(/^\/account$/),
    useMarkdown: true,
  },
  {
    title: "経歴",
    href: "/resume",
    active: (currentPath: string) => !!currentPath.match(/^\/resume$/),
    useMarkdown: true,
  },
  // TODO: コンテンツとページを用意する
  // {
  //   title: "作品",
  //   href: "/work",
  //   active: (currentPath: string) => !!currentPath.match(/^\/work$/),
  //   useMarkdown: false,
  // },
];
