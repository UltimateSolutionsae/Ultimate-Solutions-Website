/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Build the site as plain static files (in the `out/` folder) so it can be
  // hosted on IONOS Deploy Now or any regular web hosting.
  output: "export",
  // Pages are exported as /about/index.html etc., which static hosting serves
  // at /about/.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Note: the old /certifications -> /brands redirect now lives in
  // public/.htaccess, because Next.js redirects don't run on static hosting.
};

export default nextConfig;
