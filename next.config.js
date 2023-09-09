/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "studio.tailwindui.com",
        port: "",
        pathname: "/_next/**",
      },
      {
        protocol: "https",
        hostname: "api.borisovportfolio.ru",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
