import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/helpers/setupTest.ts"],
    server: {
      deps: {
        /* 
        Solves Issue:
        https://github.com/vitest-dev/vitest/issues/4554
        */
        inline: ['next-auth'],
      },
    },
  },
});
