/** @type {import('next').NextConfig} */

const nextConfig = {
    output:'export',   
    images: {
        unoptimized: true,
        domains: ['yumelabs.com','cms.yumelabs.com'],
        formats: ['image/avif', 'image/webp'],
    },
};

export default nextConfig;
