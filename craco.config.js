const CracoLessPlugin = require("craco-less");
const CracoEslintWebpackPlugin = require("craco-eslint-webpack-plugin");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#FF4500",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoEslintWebpackPlugin,
      options: {
        // See the options description below
        skipPreflightCheck: true,
        eslintOptions: {
          files: "src/**/*.{js,jsx,ts,tsx}",
          lintDirtyModulesOnly: true,
          // ...
        },
      },
    },
  ],
};
