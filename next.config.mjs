/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Exclude build-time-only packages from Lambda bundle to stay under 250 MB
  outputFileTracingExcludes: {
    '*': [
      // SWC compiler (build-time only)
      'node_modules/@swc/**',
      // esbuild (build-time only)
      'node_modules/@esbuild/**',
      'node_modules/esbuild/**',
      // Webpack and friends (build-time only)
      'node_modules/webpack/**',
      'node_modules/webpack-dev-server/**',
      'node_modules/webpack-bundle-analyzer/**',
      // Rollup / Terser (build-time only)
      'node_modules/rollup/**',
      'node_modules/terser/**',
      // TypeScript compiler (build-time only)
      'node_modules/typescript/**',
      // ESLint (build-time only)
      'node_modules/eslint/**',
      'node_modules/@eslint/**',
      'node_modules/eslint-config-next/**',
      // Babel (build-time only)
      'node_modules/@babel/core/**',
      'node_modules/babel-loader/**',
      // Next.js compiled build tools (not needed at runtime)
      'node_modules/next/dist/compiled/webpack/**',
      'node_modules/next/dist/compiled/babel/**',
      'node_modules/next/dist/compiled/@babel/**',
      'node_modules/next/dist/compiled/terser/**',
      'node_modules/next/dist/compiled/sass-loader/**',
      // Prettier (build-time only)
      'node_modules/prettier/**',
    ],
  },
}

export default nextConfig
