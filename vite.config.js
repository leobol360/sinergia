import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the same build works both under GitHub Pages'
  // /sinergia/ subpath and at the root of a Netlify domain.
  base: './',
  plugins: [react()],
})
