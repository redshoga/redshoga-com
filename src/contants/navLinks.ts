export const navLinks: {
  label: string;
  href: string;
  active: (path: string) => boolean;
}[] = [
  {
    label: "HOT TOPIC",
    href: "/",
    active: (path) => !!path.match(/^\/$/),
  },
  {
    label: "GALLERY",
    href: "/gallery",
    active: (path) => !!path.match(/^\/gallery$/),
  },
];
