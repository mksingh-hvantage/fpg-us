const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// List of static routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.8 },
  { url: '/products', changefreq: 'daily', priority: 0.9 },
];

// Example dynamic routes
const products = [
  { id: '1' }, { id: '2' }, { id: '3' }
];
products.forEach(p => routes.push({ url: `/products/${p.id}`, priority: 0.9 }));

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: 'https://us.thefutureperfectglobal.com' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  routes.forEach(r => stream.write(r));
  stream.end();

  const sitemap = await streamToPromise(stream);
  writeStream.write(sitemap);
  console.log('Sitemap generated at public/sitemap.xml');
}

generateSitemap();
