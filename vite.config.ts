import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

// Custom plugin to optimize resource hints and reduce critical request chain
const resourceHintsPlugin = () => {
  return {
    name: 'resource-hints-plugin',
    transformIndexHtml: {
      // Use 'post' order to access generated bundle information
      order: 'post',
      handler(html: string, { bundle }) {
        // In post-build, we can access the actual chunk names with hashes
        if (!bundle) return html;

        // Find framer-motion chunk for prefetch hint
        const chunks = Object.values(bundle).filter(
          (chunk: any) => chunk.type === 'chunk' && chunk.fileName.includes('framer-motion')
        );

        if (chunks.length > 0) {
          const framerChunk = chunks[0] as any;
          const prefetchHint = `
    <!-- Prefetch framer-motion for near-immediate loading after initial render -->
    <link rel="prefetch" href="/${framerChunk.fileName}" as="script" crossorigin>`;

          return html.replace('</head>', `${prefetchHint}\n</head>`);
        }

        return html;
      },
    },
  };
};

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
        // Resource hints for optimal critical request chain
        resourceHintsPlugin(),
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
            // CRITICAL REQUEST CHAIN OPTIMIZATION
            // This function determines which dependencies get <link rel="modulepreload"> hints
            // Goal: Reduce waterfall by preloading critical chunks in parallel with parent chunk
            //
            // Critical Path Priority (for initial page load):
            // 1. react-vendor (React + ReactDOM - required for all renders)
            // 2. pages-core (HomePage, AboutPage, ContactPage - initial route)
            // 3. vendor (other critical utilities)
            //
            // Excluded from critical path:
            // - framer-motion (lazy loaded after initial render via DeferredMotionProvider)
            // - pages-practice, pages-resources, pages-legal (lazy loaded on navigation)

            // Filter out non-critical chunks that should NOT be preloaded
            const excludedChunks = [
              'framer-motion',      // Deferred loading for better FCP/LCP
              'pages-resources',    // Lazy loaded on navigation
              'pages-practice',     // Lazy loaded on navigation
              'pages-legal',        // Lazy loaded on navigation
            ];

            // Start with all dependencies, then filter out excluded ones
            let preloadDeps = deps.filter(dep =>
              !excludedChunks.some(excluded => dep.includes(excluded))
            );

            // For the main index chunk, ensure critical dependencies are prioritized
            if (filename.includes('index')) {
              // Sort to ensure critical chunks are preloaded first (browser processes in order)
              preloadDeps.sort((a, b) => {
                // Priority order: react-vendor > pages-core > vendor > others
                const getPriority = (dep: string) => {
                  if (dep.includes('react-vendor')) return 1;
                  if (dep.includes('pages-core')) return 2;
                  if (dep.includes('vendor')) return 3;
                  return 4;
                };
                return getPriority(a) - getPriority(b);
              });
            }

            return preloadDeps;
          },
        },
        // Rollup options for better optimization and reduced unused JS
        rollupOptions: {
          // Enable aggressive tree-shaking
          treeshake: {
            preset: 'recommended',
            // Mark all modules as side-effect free by default for better tree-shaking
            moduleSideEffects: (id) => {
              // Only keep side effects for CSS and entry points
              if (id.endsWith('.css') || id.includes('index.tsx')) return true;
              return false;
            },
            // Enable property reading side effect detection
            propertyReadSideEffects: false,
            // Remove unused exports more aggressively
            unknownGlobalSideEffects: false,
          },
          output: {
            // Manual chunk splitting for optimal caching and tree-shaking
            manualChunks: (id) => {
              // Vendor chunks - separate large libraries for better caching
              if (id.includes('node_modules')) {
                // React core - always needed for initial render
                if (id.includes('react') || id.includes('react-dom')) {
                  return 'react-vendor';
                }
                // Framer Motion - lazy loaded after initial render to reduce critical path
                // This improves First Contentful Paint (FCP) and Largest Contentful Paint (LCP)
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
            // Enable compact output for smaller bundles
            compact: true,
            // Use ES modules for better tree-shaking
            format: 'es',
            // Minimize hoisting for better tree-shaking
            hoistTransitiveImports: false,
          },
        },
        // Source maps for production debugging (can be disabled for smaller size)
        sourcemap: false,
        // Optimize CSS
        cssMinify: true,
        // Report compressed size
        reportCompressedSize: true,
      },
      // Optimize dependencies for faster cold starts
      optimizeDeps: {
        // Pre-bundle critical dependencies to reduce request waterfalls
        include: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          'react-dom/client',
        ],
        // Exclude framer-motion from eager optimization since it's lazy loaded
        // This prevents it from being bundled with critical dependencies
        exclude: ['framer-motion'],
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
