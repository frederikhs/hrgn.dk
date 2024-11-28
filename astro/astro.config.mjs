// @ts-check
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.hrgn.dk',
    integrations:  [
        sitemap(),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
    build:         {
        assets: '_assets',
    },
    trailingSlash: 'never',
});
