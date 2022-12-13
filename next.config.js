/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'th'
  }
}

module.exports = nextConfig