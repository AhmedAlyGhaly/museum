import { PaletteMode } from "@mui/material";

export const theme = {
  palette: {
    primary: {
      main: "#136A9C",
    },
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#A2D5E8", 
          },
          secondary: {
            main: "#FBE0AB",
          },
          divider: "#BE0F1F",
          background: {
            default: "#E7EAE7",
            paper: "#FFFFFF",
          },
          text: {
            primary: "#333333",
            secondary: "#666666",
          },
        }
      : {
          primary: {
            main: "#136A9C",
          },
          secondary: {
            main: "#D0B22C",
          },
          divider: "#BE0F1F",
          background: {
            default: "#121212",
            paper: "#333333",
          },
          text: {
            primary: "#E7EAE7",
            secondary: "#D0B22C",
          },
        }),
  },
});
