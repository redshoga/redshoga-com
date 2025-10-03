import { getCollection } from "astro:content";

export const getAllBlogs = async () => {
  return (await getCollection("blogs", ({ data }) => !data.draft)).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
};
