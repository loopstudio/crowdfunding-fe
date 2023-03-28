/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CROWDFUNDING_API: process.env.NEXT_PUBLIC_CROWDFUNDING_API,
    NEXT_PUBLIC_CONTRACT_ADDRESS_CF:process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_CF,
    NEXT_PUBLIC_CONTRACT_ADDRESS_LT:process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_LT
  },
  swcMinify: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  distDir: 'build',
};

module.exports = nextConfig;
