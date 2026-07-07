import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jeffersonrbatistav.github.io',
  base: '/imperioW/',
  vite: {
    plugins: [tailwindcss()],
  },
});
