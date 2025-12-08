import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setupTests.ts',
  }
});