const {createWriteStream} = require('fs');
const {SitemapStream} = require('sitemap');

const sitemap = new SitemapStream({hostname: 'https://www.hrgn.dk'});
const writeStream = createWriteStream('./build/sitemap.xml');
sitemap.pipe(writeStream);
sitemap.write({url: '/', priority: 1.0});
sitemap.write({url: '/projects', priority: 0.9});
sitemap.write({url: '/social', priority: 0.8});
sitemap.end();
