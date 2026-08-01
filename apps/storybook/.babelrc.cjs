const path = require("node:path");

module.exports = {
  presets: [["@babel/preset-react", { runtime: "automatic" }], "@babel/preset-typescript"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev: process.env.NODE_ENV !== "production",
        runtimeInjection: false,
        enableInlinedConditionalMerge: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: "commonJS",
          rootDir: path.join(__dirname, "../.."),
        },
      },
    ],
  ],
};
