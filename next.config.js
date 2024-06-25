/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com'
      },
      {
        protocol: 'https',
        hostname: 'ngchltiyfhxkbpitthto.supabase.co'
      },
      {
        protocol: 'https',
        hostname: '100uselessmicroservices.s3.amazonaws.com'
      },
      
    ],
  },
};

module.exports = nextConfig;
