import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import magicalSvg from "vite-plugin-magical-svg";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    magicalSvg({
      target: "react",
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setup-test.ts",
  },
});
