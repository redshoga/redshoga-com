import { ReactNode } from "react";

export type Post = {
  title: string;
  slug: string;
  date: Date;
  content: ReactNode;
};
