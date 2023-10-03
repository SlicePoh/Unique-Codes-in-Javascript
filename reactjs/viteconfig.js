// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  lib: {
    rollupOptions: {
      external: ["react", "react-router", "react-router-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
},});
export { vite_config_default as default };
