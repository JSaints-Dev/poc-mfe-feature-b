import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/feature-b',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@app': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3002,
    host: true,
    strictPort: true,
  },
  preview: {
    port: 3002,
    host: true,
    strictPort: true,
  },
})
