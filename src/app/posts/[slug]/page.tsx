import { PostPage } from "@/components/pages/PostPage";
import { serviceConfig } from "@/constants/serviceConfig";
import { posts } from "@/posts";
import { notFound } from "next/navigation";

const findPost = (slug: string) => {
  return posts.find((post) => post.slug === slug);
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = findPost(params.slug);
  if (!post) return notFound();
  return {
    title: `${post.title} | ${serviceConfig.title}`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = findPost(params.slug);
  if (!post) return notFound();
  return <PostPage post={post} />;
}
