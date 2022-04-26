const path = require('path')
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV == 'development'
  },
  i18n: {
    locales: ["nl"],
    defaultLocale: "nl"
  }
})

module.exports = nextConfig
