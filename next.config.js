/* eslint @typescript-eslint/no-var-requires: "off" */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";

    // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
    config.experiments = { asyncWebAssembly: true };
    return config;
  },
};

module.exports = withBundleAnalyzer(
  withPWA({
    pwa: {
      dest: "public",
      runtimeCaching,
    },
    ...config,
  }),
);
