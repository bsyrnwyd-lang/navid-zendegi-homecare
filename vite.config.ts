import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import legacy from '@vitejs/plugin-legacy';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    legacy({ 
      targets: ['defaults', 'not IE 11', 'Android >= 5', 'iOS >= 10'],
      modernPolyfills: false,
    }),
    // Gzip compression for production
    mode === 'production' && compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
    }),
    // Brotli compression for modern browsers
    mode === 'production' && compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2019',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[hash].js',
        entryFileNames: 'assets/js/main-[hash].js',
        assetFileNames: 'assets/[ext]/[hash].[ext]',
        manualChunks(id) {
          // Pack all vendor libraries into a single chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Pack all article pages into one chunk
          if (id.includes('/pages/articles/')) {
            return 'articles';
          }
          // Pack all service pages into one chunk
          if (id.includes('/pages/services/')) {
            return 'services';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
      mangle: true,
    },
    reportCompressedSize: false,
    assetsInlineLimit: 4096,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@tanstack/react-query'],
  },
}));
