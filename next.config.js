const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [...(config.watchOptions?.ignored || []), '**/example/**']
    };
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/example/:path*',
          destination: '/404'
        }
      ]
    }
  }
}

module.exports = withNextra(nextConfig)
