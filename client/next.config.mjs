/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "files.stripe.com",
      "tailwindui.com",
      "d1nymbkeomeoqg.cloudfront.net",
      "www.switchbacktravel.com",
      "methodclimb.com",
    ],
  },
};

export default nextConfig;
