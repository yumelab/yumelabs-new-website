/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Firebase Hosting; images are pre-optimised WebP, so Next's optimiser is off.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
