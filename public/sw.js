if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/206-e67e2bdaa659202f.js",revision:"e67e2bdaa659202f"},{url:"/_next/static/chunks/649-9ca44a7184371480.js",revision:"9ca44a7184371480"},{url:"/_next/static/chunks/669-afface4befff3402.js",revision:"afface4befff3402"},{url:"/_next/static/chunks/fec483df-39020e489aa33bb0.js",revision:"39020e489aa33bb0"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"fc97f3f1282ce3ed"},{url:"/_next/static/chunks/main-1c75b2a932ea3332.js",revision:"1c75b2a932ea3332"},{url:"/_next/static/chunks/pages/GoogleAd-fc9ee19befb6f7f0.js",revision:"fc9ee19befb6f7f0"},{url:"/_next/static/chunks/pages/_app-512a3b10f6f8e31d.js",revision:"512a3b10f6f8e31d"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/addmatch-fc43baac75a15db9.js",revision:"fc43baac75a15db9"},{url:"/_next/static/chunks/pages/clubs-ec07fad0a00b2ded.js",revision:"ec07fad0a00b2ded"},{url:"/_next/static/chunks/pages/competition-465ee36a15d44a99.js",revision:"465ee36a15d44a99"},{url:"/_next/static/chunks/pages/components/header-bd49436964c9f0ed.js",revision:"bd49436964c9f0ed"},{url:"/_next/static/chunks/pages/components/layout-b5f6b96fe16b017a.js",revision:"b5f6b96fe16b017a"},{url:"/_next/static/chunks/pages/contact-0ffe0524f2a01d3d.js",revision:"0ffe0524f2a01d3d"},{url:"/_next/static/chunks/pages/index-db5e76fd3e3b0185.js",revision:"db5e76fd3e3b0185"},{url:"/_next/static/chunks/pages/login-42afc34f718db61a.js",revision:"42afc34f718db61a"},{url:"/_next/static/chunks/pages/match-0940e3e08da7f9eb.js",revision:"0940e3e08da7f9eb"},{url:"/_next/static/chunks/pages/matchbyteam-bdf72089561ee26a.js",revision:"bdf72089561ee26a"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/1963b85a9e610d85.css",revision:"1963b85a9e610d85"},{url:"/_next/static/css/635f50990720e1fc.css",revision:"635f50990720e1fc"},{url:"/_next/static/k_vxoiZK44NfT0xUmtANb/_buildManifest.js",revision:"89169c7a0920481927c5f84b0400177d"},{url:"/_next/static/k_vxoiZK44NfT0xUmtANb/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/k_vxoiZK44NfT0xUmtANb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/login_icon.caf91969.png",revision:"2c6e94aaf20d66610132b533ae100324"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"7d422b18403665cccab2774ae997b70c"},{url:"/icon-256x256.png",revision:"b0e62b28fdefcc16c6cc29bde7396d26"},{url:"/icon-384x384.png",revision:"f34c0f94eb0f4916d8d3d3d7b1fa83a5"},{url:"/icon-512x512.png",revision:"317e1a1b25a754ed1d6c34941c6731f4"},{url:"/img/desktop.ini",revision:"ef353e491ee93601bd106cc33ee7a0ab"},{url:"/img/excelfile.xlsx",revision:"9b73a6fb3a746188151d00cd748bd401"},{url:"/img/facebook.png",revision:"2900ab178666ce6245012629481ac6d5"},{url:"/img/google_maps.png",revision:"7ca00650d7259c0b43cac70f74bc94dd"},{url:"/img/greencard.png",revision:"d963c45bbebace173c1d875c3b607f76"},{url:"/img/loading.svg",revision:"7627bc820cce40098e897ca98413d895"},{url:"/img/login_icon.png",revision:"2c6e94aaf20d66610132b533ae100324"},{url:"/img/navbar_logo_rolstoelhockey.png",revision:"cae10453548806a5ddae1a0f329af794"},{url:"/img/navbar_logo_rolstoelhockeyV2.png",revision:"fd4866f31a560815f31f39f289c6d9f8"},{url:"/img/redcard.png",revision:"c8c153dc7b68250d1e6d7538c3424ce4"},{url:"/img/worldwide.png",revision:"7c847b07fc02be9f5e1b390f27be2b09"},{url:"/img/yellowcard.png",revision:"ff418b5c6eccd2288e4872bc2e3bdfb9"},{url:"/manifest.json",revision:"94781fe482cc394d88054ff0b4819cfb"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
