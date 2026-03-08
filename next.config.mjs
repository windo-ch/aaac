import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Exclude build-time-only binaries from the Lambda bundle to stay under 250 MB
  outputFileTracingExcludes: {
    '*': [
      'node_modules/@swc/core-linux-x64-musl',
      'node_modules/@swc/core-darwin-x64',
      'node_modules/@swc/core-darwin-arm64',
      'node_modules/@esbuild/darwin-x64',
      'node_modules/@esbuild/darwin-arm64',
      'node_modules/@esbuild/linux-x64',
      'node_modules/esbuild',
      'node_modules/webpack',
      'node_modules/webpack-dev-server',
      'node_modules/rollup',
      'node_modules/terser',
    ],
  },
}

export default withPayload(nextConfig)
