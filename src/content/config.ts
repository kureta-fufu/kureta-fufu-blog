import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['travel', 'life', 'real-estate']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    youtube: z.string().optional(), // YouTube動画ID
    affiliate: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
