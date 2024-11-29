// @ts-check

import { defineConfig } from 'astro/config';
import config from './src/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

import keystatic from '@keystatic/astro';
import icon from "astro-icon";

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: config.company.url,
  integrations: [tailwind(), markdoc(), react(), keystatic({
    experimental: {
      astro: true
    },
    admin: {
      // Enable admin UI
      path: '/keystatic'
    }
  }), icon({
    include: {
      lucide: ["*"], // Only include the icons we need
    },
  }), mdx(), sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  })],
  output: 'hybrid',
  server: {
    host: true
  },
  vite: {
    build: {
      sourcemap: true,
    },
    ssr: {
      noExternal: ['@astrojs/image'],
    }
  },
  headers: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:;",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  }
});