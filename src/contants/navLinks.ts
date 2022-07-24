export const navLinks: {
  title: string;
  href: string;
  active: (currentPath: string) => boolean;
}[] = [
  {
    title: "Article",
    href: "/",
    active: (currentPath: string) => !!currentPath.match(/^\/$/),
  },
  {
    title: "Account",
    href: "/account",
    active: (currentPath: string) => !!currentPath.match(/^\/account$/),
  },
  {
    title: "Resume",
    href: "/resume",
    active: (currentPath: string) => !!currentPath.match(/^\/resume$/),
  },
];
