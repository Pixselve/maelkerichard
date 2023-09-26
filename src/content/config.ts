import { z, defineCollection } from "astro:content";

const timelineCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      logo: image().optional(),
      title: z.string(),
      start: z.date({ coerce: true }),
      type: z.string(),
      end: z.date({ coerce: true }).optional(),
      ranking: z.string().optional(),
    }),
});
export const collections = {
  timeline: timelineCollection,
};
