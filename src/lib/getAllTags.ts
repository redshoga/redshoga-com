import { getAllBlogs } from "./getAllBlogs";

export const getAllTags = async () => {
  const blog = await getAllBlogs();
  const tags = [
    ...new Set(blog.flatMap((blog) => blog.data.tags || [])),
  ].sort();
  return tags.map((tag) => ({
    name: tag,
    count: blog.filter((blog) => blog.data.tags?.includes(tag)).length,
    blogs: blog
      .filter((blog) => blog.data.tags?.includes(tag))
      .sort(
        (a, b) =>
          new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
      ),
  }));
};
