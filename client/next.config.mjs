/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["files.stripe.com", "tailwindui.com"],
  },
};

export default nextConfig;
