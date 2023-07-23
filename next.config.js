/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    target: "serverless",
  },
};

module.exports = nextConfig;
