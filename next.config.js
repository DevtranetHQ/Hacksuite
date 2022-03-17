/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // TODO: Remove this test domain
        domains: ["s3-alpha-sig.figma.com"]
    }
};

module.exports = nextConfig;
