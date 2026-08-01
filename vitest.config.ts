import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const rootDir = path.resolve(import.meta.dirname);

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "@stylexjs/babel-plugin",
            {
              dev: true,
              runtimeInjection: true,
              enableInlinedConditionalMerge: true,
              treeshakeCompensation: true,
              unstable_moduleResolution: {
                type: "commonJS",
                rootDir,
              },
            },
          ],
        ],
      },
    }),
  ],
  test: {
    environment: "jsdom",
    include: ["packages/components/src/**/*.test.{ts,tsx}"],
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["packages/components/src/**/*.{ts,tsx}"],
      exclude: ["**/*.stylex.ts", "**/*.stories.{ts,tsx}", "**/*.test.{ts,tsx}"],
    },
  },
});
