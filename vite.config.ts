import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
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
    target: 'es2020',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[hash].js',
        entryFileNames: 'assets/js/main-[hash].js',
        assetFileNames: 'assets/[ext]/[hash].[ext]',
        // Consolidate all code into fewer chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1500,
    cssCodeSplit: false, // Single CSS file
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
    assetsInlineLimit: 8192, // Inline smaller assets
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
