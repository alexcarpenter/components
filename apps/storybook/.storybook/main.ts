import type { StorybookConfig } from "@storybook/react-vite";
import stylex from "@stylexjs/unplugin/vite";
import { fileURLToPath } from "node:url";
import { mergeConfig } from "vite";

const rootDir = fileURLToPath(new URL("../../..", import.meta.url));

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [
        stylex({
          useCSSLayers: true,
          unstable_moduleResolution: {
            type: "commonJS",
            rootDir,
          },
        }),
      ],
    }),
};

export default config;
