import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap'; // デプロイ後に有効化

// https://astro.build/config
// ★ デプロイ後、site の値を実際のURLに変更してください
export default defineConfig({
  site: 'https://kureta-fufu.pages.dev',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    // sitemap(), // デプロイ後に有効化
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
