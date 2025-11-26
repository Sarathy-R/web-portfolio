import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // If you plan to host at https://Sarathy-R.github.io/web-portfolio/
  // set base to '/web-portfolio/'. If you will host at a root user site
  // (username.github.io) set base to '/'.
  base: '/web-portfolio/',
  plugins: [react()],
})
