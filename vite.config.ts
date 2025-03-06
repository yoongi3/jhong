import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/jhong/', // Replace 'repositoryname' with your GitHub repository name
  plugins: [react()],
})
