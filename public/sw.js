if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1yJIQ40j4fjTklMwVT6M5/_buildManifest.js",revision:"75821950315735c021a7b6f0758f9c10"},{url:"/_next/static/1yJIQ40j4fjTklMwVT6M5/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/1yJIQ40j4fjTklMwVT6M5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/398-d9413e753864aedf.js",revision:"d9413e753864aedf"},{url:"/_next/static/chunks/576-95645d78f0184b66.js",revision:"95645d78f0184b66"},{url:"/_next/static/chunks/669-d5c0ade339f9c837.js",revision:"d5c0ade339f9c837"},{url:"/_next/static/chunks/674a26a7-6e3d9cf5738efd7b.js",revision:"6e3d9cf5738efd7b"},{url:"/_next/static/chunks/69fc0a3a-f67318718da86789.js",revision:"f67318718da86789"},{url:"/_next/static/chunks/894.9047cda612e8fce0.js",revision:"9047cda612e8fce0"},{url:"/_next/static/chunks/918-1247133e8c7e4a4e.js",revision:"1247133e8c7e4a4e"},{url:"/_next/static/chunks/fec483df-39020e489aa33bb0.js",revision:"39020e489aa33bb0"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"fc97f3f1282ce3ed"},{url:"/_next/static/chunks/main-2e85b721e6389c28.js",revision:"2e85b721e6389c28"},{url:"/_next/static/chunks/pages/_app-a2c8625db29cdc04.js",revision:"a2c8625db29cdc04"},{url:"/_next/static/chunks/pages/_error-350d9d86556f6d87.js",revision:"350d9d86556f6d87"},{url:"/_next/static/chunks/pages/clubs-6a5c12aab36d0110.js",revision:"6a5c12aab36d0110"},{url:"/_next/static/chunks/pages/competition-88f18d7f40ed8308.js",revision:"88f18d7f40ed8308"},{url:"/_next/static/chunks/pages/components/Navbar-4244d17d79e7ae15.js",revision:"4244d17d79e7ae15"},{url:"/_next/static/chunks/pages/components/footer-4698e5ae342d4010.js",revision:"4698e5ae342d4010"},{url:"/_next/static/chunks/pages/components/layout-5696d407d37a20fc.js",revision:"5696d407d37a20fc"},{url:"/_next/static/chunks/pages/components/styled_components-00c6a9063bc4a598.js",revision:"00c6a9063bc4a598"},{url:"/_next/static/chunks/pages/contact-94f217c9d19595db.js",revision:"94f217c9d19595db"},{url:"/_next/static/chunks/pages/index-a8ab680ba2ba6b44.js",revision:"a8ab680ba2ba6b44"},{url:"/_next/static/chunks/pages/login-5806ca5c28b58645.js",revision:"5806ca5c28b58645"},{url:"/_next/static/chunks/pages/match-a54cb45e28e0f7cd.js",revision:"a54cb45e28e0f7cd"},{url:"/_next/static/chunks/pages/matchbyteam-770a909bbfc1b360.js",revision:"770a909bbfc1b360"},{url:"/_next/static/chunks/pages/overview-bc48d78b98fd3ac4.js",revision:"bc48d78b98fd3ac4"},{url:"/_next/static/chunks/pages/policy-7100f10dd4967058.js",revision:"7100f10dd4967058"},{url:"/_next/static/chunks/pages/sitemap.xml-513b56a2aeaeea2f.js",revision:"513b56a2aeaeea2f"},{url:"/_next/static/chunks/pages/upload-4cd51b77dc322893.js",revision:"4cd51b77dc322893"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-b621abf00f09a1d0.js",revision:"b621abf00f09a1d0"},{url:"/_next/static/css/635f50990720e1fc.css",revision:"635f50990720e1fc"},{url:"/_next/static/css/93e60ef977661956.css",revision:"93e60ef977661956"},{url:"/_next/static/media/android_download.b49272ae.png",revision:"56fb7cfeb8a3642063b6d83dad681472"},{url:"/_next/static/media/apple_download.fb98147a.png",revision:"11ff9832cafe6aaa402889e754903aa7"},{url:"/favicon.ico",revision:"010a768249e3f6e13750973c2f853e01"},{url:"/icon-192x192.png",revision:"7d422b18403665cccab2774ae997b70c"},{url:"/icon-256x256.png",revision:"b0e62b28fdefcc16c6cc29bde7396d26"},{url:"/icon-384x384.png",revision:"f34c0f94eb0f4916d8d3d3d7b1fa83a5"},{url:"/icon-512x512.png",revision:"317e1a1b25a754ed1d6c34941c6731f4"},{url:"/img/android_download.png",revision:"56fb7cfeb8a3642063b6d83dad681472"},{url:"/img/apple_download.png",revision:"11ff9832cafe6aaa402889e754903aa7"},{url:"/img/club_overzicht.png",revision:"0ea78dbfb4729c5f84bd4b83f9b04549"},{url:"/img/competitie_overzicht.png",revision:"16aed5f32578f1fa1900a3379beb5139"},{url:"/img/desktop.ini",revision:"ef353e491ee93601bd106cc33ee7a0ab"},{url:"/img/excelfile.xlsx",revision:"9b73a6fb3a746188151d00cd748bd401"},{url:"/img/facebook.png",revision:"2900ab178666ce6245012629481ac6d5"},{url:"/img/google_maps.png",revision:"7ca00650d7259c0b43cac70f74bc94dd"},{url:"/img/greencard.png",revision:"d963c45bbebace173c1d875c3b607f76"},{url:"/img/loading.svg",revision:"7627bc820cce40098e897ca98413d895"},{url:"/img/login_icon.png",revision:"2c6e94aaf20d66610132b533ae100324"},{url:"/img/navbar_logo_rolstoelhockey.png",revision:"25d8b510f8d9733968876c54afca9d7c"},{url:"/img/navbar_logo_rolstoelhockeyV2.png",revision:"fd4866f31a560815f31f39f289c6d9f8"},{url:"/img/redcard.png",revision:"c8c153dc7b68250d1e6d7538c3424ce4"},{url:"/img/team_overzicht.png",revision:"7538ad36d1b6f149194b7529fecc28bd"},{url:"/img/uitslagen_overzicht.png",revision:"5fcf69ff266bdd1994cd1eb662eaa1ef"},{url:"/img/worldwide.png",revision:"7c847b07fc02be9f5e1b390f27be2b09"},{url:"/img/yellowcard.png",revision:"ff418b5c6eccd2288e4872bc2e3bdfb9"},{url:"/manifest.json",revision:"78fd781e0cc993c22a31fa196ccc8252"},{url:"/robots.txt",revision:"10fdf4c9096ad71d0754867236d41a62"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
