import React from "react";
import { TitleLogo } from "../commons/TitleLogo";
import { Post } from "@/posts/index.type";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};

export const PostPage = (props: Props) => {
  return (
    <div className="flex flex-col">
      <main>
        <article className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{props.post.title}</h1>
          <div className="text-sm text-gray-500 mb-12 flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold group hover:opacity-50"
            >
              <Image
                src="/profile/icon.png"
                alt=""
                width={"28"}
                height={"28"}
                className="rounded-full"
              />
              <span className="group-hover:underline">redshoga</span>
            </Link>
            {props.post.date.toLocaleDateString()}に投稿
          </div>
          <div className="prose">{props.post.content}</div>
        </article>
      </main>
      <footer className="mt-32">
        <TitleLogo variant="compact" />
      </footer>
    </div>
  );
};
