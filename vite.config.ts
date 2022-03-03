/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import 'dotenv/config'

const isDev = process.env.CI

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: Number(process.env.PORT) ?? (isDev ? 1234 : 3000),
  },
  // vitest config
  test: {
    // https://vitest.dev/config/
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/utils/test/setupFiles.ts',
  },
})
