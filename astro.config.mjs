// @ts-check

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

import keystatic from '@keystatic/astro';
import icon from "astro-icon";

import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), markdoc(), react(), keystatic(), icon({
    include: {
      lucide: ["*"], // Only include the icons we need
    },
  }), mdx()],
  output: 'hybrid',
  server: {
    host: true
  }
});