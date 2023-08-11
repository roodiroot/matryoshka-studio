/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "studio.tailwindui.com",
        port: "",
        pathname: "/_next/**",
      },
    ],
  },
};

module.exports = nextConfig;
