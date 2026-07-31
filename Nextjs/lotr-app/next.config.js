/** @type {import('next').NextConfig} */
`turbopack: {}`;
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    return config;
  },
};

module.exports = nextConfig;
