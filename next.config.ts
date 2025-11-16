import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages
  output: 'export',

  // GitHub Pages serves your site under a subdirectory, so set basePath
  basePath: '/my-portfolio',

  // Next.js image optimization doesn't work on static export, so disable it
  images: {
    unoptimized: true,
  },

  // Make sure trailing slash is added (GitHub Pages likes this)
  trailingSlash: true,
};

module.exports = nextConfig;