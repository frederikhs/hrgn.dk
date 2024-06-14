const {createWriteStream, existsSync, mkdirSync} = require('fs');
const {SitemapStream} = require('sitemap');

const buildDir = "./dist"
const sitemap = new SitemapStream({hostname: 'https://www.hrgn.dk'});

if (!existsSync(buildDir)){
    mkdirSync(buildDir, { recursive: true });
}

const writeStream = createWriteStream(buildDir + '/sitemap.xml');
sitemap.pipe(writeStream);
sitemap.write({url: '/', priority: 1.0});
sitemap.write({url: '/projects', priority: 0.9});
sitemap.write({url: '/social', priority: 0.8});
sitemap.end();
