import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This is the default, but you can specify it explicitly
  },
  server: {
    host: true,
    //port: 5173, When not running with docker compose, this is the port which will be used in docker
  },
  esbuild: {
    target: 'esnext',
    platform: 'node',
  },
});
