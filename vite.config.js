import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio_MBT/', // respect exact du nom du repo
  plugins: [react()]
})
