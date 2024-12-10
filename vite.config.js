import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/<Ochi-clone>/', // Replace <repository-name> with your repo name
});