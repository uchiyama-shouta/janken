const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  ...config,
});
