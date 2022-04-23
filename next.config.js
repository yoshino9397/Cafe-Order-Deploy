/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: "serverless",
  images: {
    domains: ["res.cloudinary.com"],
    loader: "akamai",
    path: "",
  },
};
module.exports = nextConfig;
