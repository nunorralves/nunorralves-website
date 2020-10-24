/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig(
    '../../.prettier.config.js'
  );
  const pages = await globby([
    'src/pages/**/*{.js,.jsx,.ts,.tsx,.mdx}',
    '!src/pages/_*{.js,.jsx,.ts,.tsx,.mdx}',
    '!src/pages/api'
  ]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map(page => {
                const path = page
                  .replace('src/pages', '')
                  .replace('.jsx', '')
                  .replace('.tsx', '')
                  .replace('.mdx', '')
                  .replace('.js', '')
                  .replace('.ts', '');
                const route = path === '/index' ? '' : path;
                const changeFreq = '<changefreq>weekly</changefreq>';
                const priority = '<priority>0.8</priority>';
                return `
                        <url>
                            <loc>${`https://www.nunorralves.pt${route}`}</loc>
                            ${
                              path === '/index' || path === '/blog'
                                ? changeFreq
                                : ''
                            }
                            ${path === '/index' ? priority : ''}
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
