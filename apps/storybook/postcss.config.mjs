import autoprefixer from "autoprefixer";
import stylex from "@stylexjs/postcss-plugin";

import babelConfig from "./.babelrc.cjs";

/** @type {import("postcss-load-config").Config} */
const config = {
  plugins: [
    stylex({
      include: ["stories/**/*.{ts,tsx}", "../../packages/components/src/**/*.{ts,tsx}"],
      babelConfig: {
        babelrc: false,
        parserOpts: {
          plugins: ["typescript", "jsx"],
        },
        plugins: babelConfig.plugins,
      },
      useCSSLayers: true,
    }),
    autoprefixer,
  ],
};

export default config;
