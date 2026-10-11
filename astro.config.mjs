// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Adresse, unter der der Blog später erreichbar ist.
// Bei GitHub Pages: https://<benutzername>.github.io/<repository-name>
export default defineConfig({
  site: 'https://dermold.github.io',
  base: '/blog',
  integrations: [sitemap()],
});
