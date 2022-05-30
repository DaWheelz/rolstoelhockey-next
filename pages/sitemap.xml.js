import React from 'react';
import * as fs from 'fs'

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    
  const BASE_URL = {
    development: "http://localhost:3000",
    production: "https://rolstoelhockey.app",
  }[process.env.NODE_ENV];

    const staticPaths = fs
    .readdirSync({
      development: 'pages',
      production: './',
    }[process.env.NODE_ENV])
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_middleware.js",
        "clubs.js",
        "competition.js",
        "contact.js",
        "match.js",
        "matchbyteam.js",
        "overview.js",
        "policy.js",
        "404.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });
    
    const allPaths =[ ...staticPaths ];

    const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPaths
        .map((url) => {
          const path = url
                    .replace('pages', '')
                    .replace('.js', '')
                    .replace('.mdx', '');
          const route = path === '/index' ? '' : path;
          return `
          <url>
              <loc>${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
        `;
        })
        .join("")}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;