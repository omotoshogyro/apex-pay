// import all themes and export everything

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  white: "#FFFFFF",
  black: "#000000",


  grey1: "#333333",
  grey2: "#4F4F4F",
  grey3: "#828282",
  grey4: "#BDBDBD",

  green1: "#219653",
  background: "#EFFAF4",
};

export const SIZES = {
  // App Dimensions
  width,
  height,
};

export const FONTS = {
  light: { fontFamily: "GTlight" },
  regular: { fontFamily: "GTregular" },
  medium: { fontFamily: "GTmedium" },
  bold: { fontFamily: "GTbold" },
};

export const fontsize = {
  small: {
    fontSize: 18,
  },
  smaller: {
    fontSize: 16,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
