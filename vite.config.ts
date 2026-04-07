import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    tsConfigPaths(),
  ],
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
