// @ts-check

import { defineConfig } from 'astro/config';

// Import configurations and integrations
import config from './src/config';
import sitemap  from '@astrojs/sitemap';

// Import configurations and integrationsbun
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Basic site configuration
  site: config.company.url,
  base: '/unknown-active', // Replace 'unknown-active' with your actual repository name

  // Integrations (grouped by functionality)
  integrations: [
    tailwind(),
    react(),
    mdx(),
    keystatic(),
    icon({
      include: {
        lucide: ['*'], // Include all icons from the Lucide set
      },
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(), // Dynamically set lastmod to current time
    }),
  ],

  // Output configuration
  output: 'hybrid', // Allows server-side rendering and static generation

  // Server configuration
  server: {
    host: true, // Allows binding to all network interfaces
  },

  // Vite-specific configurations for build and SSR
  vite: {
    build: {
      sourcemap: true, // Enable sourcemaps for better debugging
    },
    ssr: {
      noExternal: ['@astrojs/image'], // Exclude specific dependencies from SSR externalization
    },
  },

  // HTTP headers for security
  headers: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:;",
    'X-Content-Type-Options': 'nosniff', // Prevent content type sniffing
    'X-Frame-Options': 'DENY', // Prevent clickjacking
    'X-XSS-Protection': '1; mode=block', // Protect against cross-site scripting
    'Referrer-Policy': 'strict-origin-when-cross-origin', // Ensure proper referrer information is sent
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()', // Block unnecessary permissions
  },
});
