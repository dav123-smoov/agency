import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Raise chunk-size warning threshold (we do our own splitting)
    chunkSizeWarningLimit: 600,

    // Aggressive minification
    minify: 'esbuild',

    // Split vendor code into separate cacheable chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // React core in its own long-lived cache chunk
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        },
        // Unique filenames with content hashes for strong caching
        chunkFileNames:  'assets/[name]-[hash].js',
        entryFileNames:  'assets/[name]-[hash].js',
        assetFileNames:  'assets/[name]-[hash][extname]',
      },
    },

    // Inline very small assets (<4 KB) directly into JS to save requests
    assetsInlineLimit: 4096,

    // Enable CSS code-splitting (each chunk gets its own CSS file)
    cssCodeSplit: true,

    // Generate source maps only in dev (keeps prod bundle lean)
    sourcemap: false,

    // Target modern browsers (smaller output)
    target: 'es2020',
  },

  // Pre-bundle heavy deps so the dev server starts faster
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
