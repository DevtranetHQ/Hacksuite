/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TODO: Remove this test domain
    domains: ["s3-alpha-sig.figma.com"]
  }
};

module.exports = nextConfig;
