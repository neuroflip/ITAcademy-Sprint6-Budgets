import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: ".",
  plugins: [react(), tailwindcss()],
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setupTests.ts',
  }
})