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
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
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
          polyfill: false, // Disable polyfill to reduce bundle size
          resolveDependencies: (filename, deps) => {
            // Only preload critical dependencies for the entry point
            // Filter out large non-critical chunks like pages-resources
            return deps.filter(dep =>
              dep.includes('react-vendor') ||
              dep.includes('pages-core') ||
              (filename.includes('index') && !dep.includes('pages-resources'))
            );
          },
        },
        // Rollup options for better optimization
        rollupOptions: {
          output: {
            // Manual chunk splitting for optimal caching
            manualChunks: {
              // Vendor chunks
              'react-vendor': ['react', 'react-dom'],
              'framer-motion': ['framer-motion'],
              // Page chunks by category
              'pages-core': [
                './pages/HomePage.tsx',
                './pages/ContactPage.tsx',
                './pages/AboutPage.tsx',
              ],
              'pages-practice': [
                './pages/PracticeAreasPage.tsx',
                './pages/CustomsDefensePage.tsx',
                './pages/RegulatoryCompliancePage.tsx',
                './pages/ExportControlsPage.tsx',
              ],
              'pages-resources': [
                './pages/ResourcesHubPage.tsx',
                './pages/NewsPage.tsx',
                './pages/GlossaryPage.tsx',
                './pages/FAQCenterPage.tsx',
              ],
              'pages-legal': [
                './pages/PrivacyPolicyPage.tsx',
                './pages/TermsOfUsePage.tsx',
                './pages/LegalPage.tsx',
                './pages/AttorneyAdvertisingPage.tsx',
              ],
            },
            // Optimize chunk naming for caching
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
