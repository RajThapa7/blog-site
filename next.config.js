/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "headless.local",
      "2.gravatar.com",
      "secure.gravatar.com",
      "rajthapa7.000webhostapp.com",
    ],
  },
};

module.exports = nextConfig;
