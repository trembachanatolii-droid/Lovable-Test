import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react({
          // Optimize JSX runtime
          jsxRuntime: 'automatic',
        }),
        // Gzip compression
        compression({
          algorithm: 'gzip',
          ext: '.gz',
          threshold: 512, // Compress files larger than 512 bytes
          deleteOriginFile: false,
        }),
        // Brotli compression for better compression ratio
        compression({
          algorithm: 'brotliCompress',
          ext: '.br',
          threshold: 512,
          deleteOriginFile: false,
        }),
      ],
      // Security: API keys should never be exposed in frontend code
      // Use server-side API routes or backend proxy instead
      define: {},
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Target modern browsers for smaller bundle
        target: 'es2020',
        // Enable minification with terser for better compression
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug'],
            passes: 3, // Increased for better minification
            unsafe_arrows: true,
            unsafe_methods: true,
            unsafe_proto: true,
            toplevel: true,
          },
          mangle: {
            safari10: true,
            toplevel: true,
          },
          format: {
            comments: false,
            ecma: 2020,
          },
        },
        // CSS code splitting
        cssCodeSplit: true,
        // Optimize chunk size
        chunkSizeWarningLimit: 500,
        // Module preload polyfill for better performance
        modulePreload: {
          polyfill: false, // Disable polyfill to reduce bundle size for modern browsers
          resolveDependencies: (filename, deps) => {
            // Only preload truly critical dependencies for initial render
            // Exclude framer-motion since it's lazy loaded via JusticePillars
            // Exclude non-critical page chunks
            return deps.filter(dep =>
              dep.includes('react-vendor') ||
              dep.includes('pages-core') ||
              (filename.includes('index') &&
                !dep.includes('framer-motion') &&
                !dep.includes('pages-resources') &&
                !dep.includes('pages-practice') &&
                !dep.includes('pages-legal'))
            );
          },
        },
        // Rollup options for better optimization and reduced unused JS
        rollupOptions: {
          output: {
            // Manual chunk splitting for optimal caching and tree-shaking
            manualChunks: (id) => {
              // Vendor chunks - separate large libraries for better caching
              if (id.includes('node_modules')) {
                // React core - always needed for initial render
                if (id.includes('react') || id.includes('react-dom')) {
                  return 'react-vendor';
                }
                // Framer Motion - lazy loaded only when JusticePillars renders
                if (id.includes('framer-motion')) {
                  return 'framer-motion';
                }
                // Other vendor dependencies in separate chunk
                return 'vendor';
              }

              // Page chunks by category - all lazy loaded via App.tsx
              if (id.includes('/pages/HomePage.tsx') ||
                  id.includes('/pages/ContactPage.tsx') ||
                  id.includes('/pages/AboutPage.tsx')) {
                return 'pages-core';
              }

              if (id.includes('/pages/PracticeAreasPage.tsx') ||
                  id.includes('/pages/CustomsDefensePage.tsx') ||
                  id.includes('/pages/RegulatoryCompliancePage.tsx') ||
                  id.includes('/pages/ExportControlsPage.tsx')) {
                return 'pages-practice';
              }

              if (id.includes('/pages/ResourcesHubPage.tsx') ||
                  id.includes('/pages/NewsPage.tsx') ||
                  id.includes('/pages/GlossaryPage.tsx') ||
                  id.includes('/pages/FAQCenterPage.tsx')) {
                return 'pages-resources';
              }

              if (id.includes('/pages/PrivacyPolicyPage.tsx') ||
                  id.includes('/pages/TermsOfUsePage.tsx') ||
                  id.includes('/pages/LegalPage.tsx') ||
                  id.includes('/pages/AttorneyAdvertisingPage.tsx')) {
                return 'pages-legal';
              }
            },
            // Optimize chunk naming for long-term caching
            chunkFileNames: 'assets/[name]-[hash].js',
            entryFileNames: 'assets/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash].[ext]',
          },
        },
        // Source maps for production debugging (can be disabled for smaller size)
        sourcemap: false,
        // Optimize CSS
        cssMinify: true,
        // Report compressed size
        reportCompressedSize: true,
      },
      // Optimize dependencies
      optimizeDeps: {
        include: ['react', 'react-dom', 'framer-motion'],
        // Exclude large deps that should be loaded separately
        exclude: [],
      },
      // Enable esbuild optimizations
      esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' },
        // Drop console and debugger in production
        drop: mode === 'production' ? ['console', 'debugger'] : [],
        // Legal comments for licensing compliance
        legalComments: 'none',
      },
      // Performance optimization hints
      experimental: {
        // Enable render built URL - allows better asset optimization
        renderBuiltUrl: (filename: string) => {
          return '/' + filename;
        },
      },
    };
});
