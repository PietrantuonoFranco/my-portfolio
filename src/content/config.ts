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
    members:  z.array(z.string()),
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

const softSkills = defineCollection({
  schema: z.object({
    en: z.object({
      name: z.string(),
      skills: z.array(z.string()),
    }),
    es: z.object({
      name: z.string(),
      skills: z.array(z.string()),
    }),
  }),
});

const hardSkills = defineCollection({
  schema: z.object({
      name: z.object({
        en: z.string(),
        es: z.string()
      }),
  }),
});

const stack = defineCollection({
  schema: z.object({
    technologiesNames: z.array(z.string()),
  }),
});

const technologies = defineCollection({
  schema: z.object({
    name: z.string(),
    svg: z.string(),
  }),
});

const educationEvents = defineCollection({
  schema: z.object({
    en: z.object({
      date: z.string(),
      title: z.string(),
      description: z.string(),
      location: z.string(),
    }),
      
    es: z.object({
      date: z.string(),
      title: z.string(),
      description: z.string(),
      location: z.string(),
    }),
  })
});

export const collections = { aboutMe, projects, softSkills, hardSkills, stack, technologies, educationEvents };