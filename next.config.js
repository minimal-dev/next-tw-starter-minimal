/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')

const isProductionBuild = process.env.NODE_ENV === 'production'

const isCloudBuild =
  // Cloudflare
  process.env.CF_PAGES ||
  // Vercel
  process.env.VERCEL

const nextConfig = {
  trailingSlash: false,
  experimental: {
    appDir: true,
  },

  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
      preventFullImport: true,
    },
  },

  webpack(config, options) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        // issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
              // expandProps: false
            },
          },
        ],
      }
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

module.exports = () => {
  const plugins = []

  const bundleAnalyzerCondition = !isCloudBuild && isProductionBuild

  if (bundleAnalyzerCondition)
    plugins.push(
      withBundleAnalyzer({
        enabled: bundleAnalyzerCondition,
      })
    )

  return plugins.reduce((acc, next) => next(acc), nextConfig)
}
