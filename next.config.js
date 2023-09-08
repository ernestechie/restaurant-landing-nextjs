/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'www.recipetineats.com' }],
  },
};

module.exports = nextConfig;
