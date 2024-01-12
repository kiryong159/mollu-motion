/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.namu.wiki",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "doc-0s-4s-docs.googleusercontent.com/",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "googleusercontent.com/",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "drive.usercontent.google.com/",
        pathname: "/**",
      },
    ], // 이미지 호스트명 추가
  },
};

module.exports = nextConfig;
