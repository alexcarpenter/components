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
    include: ["packages/components/test/**/*.test.{ts,tsx}"],
    setupFiles: ["./test/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["packages/components/src/**/*.{ts,tsx}"],
      exclude: ["**/*.stylex.ts"],
    },
  },
});
