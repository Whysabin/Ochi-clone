import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'gh-pages'; // Import the gh-pages package

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/<Ochi-clone>/', // Replace <repository-name> with your repo name
});
