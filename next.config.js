/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["headless.local", "2.gravatar.com"],
  },
};

module.exports = nextConfig;
