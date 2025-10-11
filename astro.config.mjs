import { defineConfig } from 'astro/config';
import path from 'path';
import sitemap from '@astrojs/sitemap'; // 🆕 adiciona o plugin de sitemap

export default defineConfig({
  // 🌐 endereço oficial do site (troque pelo seu domínio real)
  site: 'https://ronaldoquadrado.com',

  // 🗺️ gera automaticamente sitemap.xml
  integrations: [sitemap()],

  // 🔧 suas configurações anteriores continuam valendo
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@data': path.resolve('./src/data'),
      },
    },
  },
});
