// @ts-check

import { defineConfig } from 'astro/config';
import config from './src/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: config.company.url,

  integrations: [
    tailwind(),
    react(),
    mdx(),
    keystatic(),
    icon({
      include: {
        lucide: ['*'],
      },
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(), 
    }),
  ],

  output: 'hybrid',

  server: {
    host: true,
  },

  vite: {
    build: {
      sourcemap: true,
    },
    ssr: {
      noExternal: ['@astrojs/image'],
    },
  },
});
