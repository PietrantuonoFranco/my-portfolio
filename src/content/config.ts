import { defineCollection, z } from "astro:content";

const aboutMe = defineCollection ({
  schema: z.object ({
    greet: z.object ({
      es: z.string(),
      en: z.string(),
    }),
    title: z.object ({
      es: z.string(),
      en: z.string(),
    }),
    description: z.object ({
      es: z.string(),
      en: z.string(),
    }),
    img: z.string().url(),
  })
})

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.object({
      es: z.string(),
      en: z.string(),
    }),
    technologiesNames: z.array(z.string()),
    webSiteUrl: z.string().url().nullable(),
    repositoryUrl: z.string().url().nullable(),
    img: z.string().url(),
  }),
});

const technologies = defineCollection({
  schema: z.object({
    name: z.string(),
    svg: z.string(),
  }),
});

export const collections = { aboutMe, projects, technologies };