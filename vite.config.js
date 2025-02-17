import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/rakesh-portfolio/', // Adjust this to your repository name
  build: {
    outDir: 'src',  // Ensures the build goes to the 'dist' folder
  },
});
