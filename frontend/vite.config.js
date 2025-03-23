import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 5173, // Ensure this matches your Docker port mapping
  },
});
