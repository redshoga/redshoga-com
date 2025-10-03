import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogs = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blogs,
};
