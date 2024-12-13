import { PaletteMode } from "@mui/material";
import { amber, blueGrey, grey, orange } from "@mui/material/colors";

export const theme = {
  palette: {
    primary: orange,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: orange,
          secondary: amber,
          divider: orange[300],
          background: {
            default: "#fff8e1",
            paper: "#ffffff",
          },
          text: {
            primary: grey[900],
            secondary: grey[700],
          },
        }
      : {
          primary: blueGrey,
          secondary: orange,
          divider: blueGrey[700],
          background: {
            default: blueGrey[800],
            paper: blueGrey[900],
          },
          text: {
            primary: "#f5f5f5",
            secondary: orange[400],
          },
        }),
  },
});
