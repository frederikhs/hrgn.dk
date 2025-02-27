// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    site: 'https://www.hrgn.dk',
    integrations:  [
        sitemap(),
    ],
    build:         {
        assets: '_assets',
    },
    trailingSlash: 'never',
});
