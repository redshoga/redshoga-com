import React from "react";
import { TitleLogo } from "../commons/TitleLogo";
import { ServiceIcons } from "../commons/ServiceIcons";
import { PostThumbnail } from "../commons/PostThumbnail";
import { posts } from "@/posts";

export const TopPage = () => {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-8 items-center">
        <TitleLogo variant="full" />
        <nav>
          <ServiceIcons />
        </nav>
      </header>
      <main className="flex flex-col items-center gap-4">
        {posts.map((post) => (
          <PostThumbnail
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </main>
    </div>
  );
};
