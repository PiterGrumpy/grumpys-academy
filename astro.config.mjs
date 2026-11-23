import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  markdown: {
    // Resaltado nativo de Astro con paletas para tema claro y oscuro.
    shikiConfig: {
      themes: {
        light: 'github-light-high-contrast',
        dark: 'github-dark-high-contrast',
      },
      defaultColor: false,
    },
  },
});
