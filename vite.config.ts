/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // module name mapping
  resolve: {
    alias: {
      // don't forget to update tsconfig.json > compilerOptions.paths to match this object
      '@src': resolve(__dirname, './src'),
      '@utils': resolve(__dirname, './src/utils'),
      '@pages': resolve(__dirname, './src/pages'),
      '@components': resolve(__dirname, './src/components'),
    },
  },
  // vitest config
  test: {
    // https://vitest.dev/config/
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/utils/test/setupFiles.ts',
  },
})
