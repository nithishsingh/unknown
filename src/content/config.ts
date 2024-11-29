import { defineCollection, z } from 'astro:content';

// Define hero settings schema
const heroSettingsSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  ctaText: z.string(),
  ctaLink: z.string(),
  stats: z.object({
    projects: z.string(),
    clients: z.string(),
    experience: z.string()
  })
});

// Define hero slide schema with updated image path validation
const heroSlideSchema = z.object({
  title: z.string(),
  image: z.string().refine((path) => path.startsWith('/src/images/'), {
    message: 'Image path must start with /src/images/'
  }),
  serviceTitle: z.string(),
  serviceDescription: z.string(),
  icon: z.string(),
  link: z.string().startsWith('/'),
  order: z.number().min(1)
});

// Define service schema
const serviceSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  link: z.string().startsWith('/'),
  order: z.number().min(1),
  content: z.string().optional()
});

// Define blog post schema
const blogPostSchema = z.object({
  title: z.string(),
  publishedDate: z.string().or(z.date()),
  author: z.string(),
  excerpt: z.string(),
  featured: z.boolean().default(false),
  image: z.string().optional(),
  content: z.string().optional()
});

export const collections = {
  'hero': defineCollection({
    type: 'content',
    schema: heroSettingsSchema,
  }),
  'hero-slides': defineCollection({
    type: 'content',
    schema: heroSlideSchema,
  }),
  'services': defineCollection({
    type: 'content',
    schema: serviceSchema,
  }),
  'blog-posts': defineCollection({
    type: 'content',
    schema: blogPostSchema,
  })
};