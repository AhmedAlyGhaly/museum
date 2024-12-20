import { Typography } from "@mui/material";
import React from "react";
import { FooterForm } from "../components/FooterForm";
import { Nav } from "../components/Nav";
import { TitleWithLogo } from "../components/TitleWithLogo";
import { useColorTheme } from "../theme";

interface FooterProps { }

export const Footer: React.FC<FooterProps> = () => {
  const { theme } = useColorTheme();


  return (
    <footer style={styles.footer(theme)}>
      <div style={styles.leftSection}>
        <TitleWithLogo />
        <Nav />
        <FooterForm />
      </div>
      <Typography style={styles.footerText(theme)}>
        &copy; 2024 Nouri Museum App.
      </Typography>
    </footer>
  );
};

const styles = {
  footer: (theme: any) => ({
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    backgroundColor: theme.palette.secondary.main,
    textAlign: "center",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
    backgroundSize: "cover",
  }),
  leftSection: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem",
  },
  footerText: (theme: any) => ({
    // marginTop: "2rem",
    fontSize: "0.8rem",
    color: theme.palette.text.secondary,
  }),
};

