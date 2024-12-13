import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { ThemeProvider } from "@mui/material";
import { useColorTheme } from "./theme";

export const App: React.FC = () => {
  const { theme } = useColorTheme();
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};
