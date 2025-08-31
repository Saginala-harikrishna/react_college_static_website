import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// replace <repo-name> with your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: "/college-react-app/",
})
