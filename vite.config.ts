/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import Unocss from 'unocss/vite'
import presetWind from '@unocss/preset-wind'

import 'dotenv/config'

const isDev = process.env.CI

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Unocss({ presets: [presetWind()] }), tsconfigPaths()],
  server: {
    port: 3000,
  },
  // vitest config
  test: {
    // https://vitest.dev/config/
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/utils/test/setupFiles.ts',
  },
})
