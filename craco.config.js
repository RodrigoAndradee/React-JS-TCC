const CracoLessPlugin = require("craco-less");
const CracoEslintWebpackPlugin = require("craco-eslint-webpack-plugin");
const data = require("./src/assets/constants-file.json");

const colors = data.COLORS_CONFIG;

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": colors.PRIMARY_COLOR,
              "@primary-color-hover": colors.SECONDARY_COLOR,
              "@primary-color-active": colors.SECONDARY_COLOR,
              "@primary-color-outline": colors.SECONDARY_COLOR,
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
