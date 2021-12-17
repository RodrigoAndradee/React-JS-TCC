import * as constants from "../assets/constants-file.json";

const { COLORS_CONFIG } = constants.default;

const {
  BORDERS_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SELECTED_ROW,
  WARNING_RED,
  WARNING_YELLOW,
  COLOR_WHITE,
} = COLORS_CONFIG;

export default {
  colorBorderColors: BORDERS_COLOR,
  colorLoadingBackground: "rgba(255, 255, 255, 0.8)",
  colorPrimary: PRIMARY_COLOR,
  colorSecondary: SECONDARY_COLOR,
  colorSelectedRow: SELECTED_ROW,
  colorWarningRed: WARNING_RED,
  colorWarningYellow: WARNING_YELLOW,
  colorWhite: COLOR_WHITE,
};
