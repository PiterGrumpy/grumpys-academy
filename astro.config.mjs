import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  markdown: {
    // Los bloques de código usan los tokens de global.css en lugar de estilos inline.
    syntaxHighlight: false,
  },
});
