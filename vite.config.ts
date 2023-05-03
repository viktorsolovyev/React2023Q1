/// <reference types="vitest" />
/// <reference types="vite/client" />

import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      provider: "c8",
      all: true,
      enabled: true,
      reporter: ["text"],
      include: ["**/*.{jsx,tsx}"],
      exclude: [
        ...configDefaults.exclude,
        "**/*.test.tsx",
        "src/entry-client.tsx",
        "src/entry-server.tsx",
        "src/routes.tsx",
      ],
    },
  },
});
