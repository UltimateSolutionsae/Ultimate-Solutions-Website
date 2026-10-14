/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // The Certifications page became "Our Brands"; keep old links and search
  // results working.
  async redirects() {
    return [{ source: "/certifications", destination: "/brands", permanent: true }];
  },
};

export default nextConfig;
