import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress specific warnings by checking the warning code or message
        if (warning.code === 'THIS_IS_UNDEFINED') {
          return;
        }
        // Optionally, you can add more conditions to suppress other warnings
        // if (warning.code === 'ANOTHER_WARNING_CODE') {
        //   return;
        // }

        // Use the default warning handler for everything else
        warn(warning);
      },
    },
  },
});
