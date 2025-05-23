import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-react/', // ici le nom de ton repo GitHub (sensible à la casse)
  plugins: [react()]
})
