import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),

    react()],
  server: {
    host: '0.0.0.0',  // Allows external access
    port: 5174,        // Specify the port
    strictPort: true,  // Avoid switching ports
  },
});
