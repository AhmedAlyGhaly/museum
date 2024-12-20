import React from "react";
import { useNavigate } from "react-router-dom";
import { useColorTheme } from "../theme";

interface VisitProps { }

export const Visit: React.FC<VisitProps> = () => {
  const navigate = useNavigate();

  const { theme } = useColorTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "right",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main,
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1>Museum opening hours</h1>
        <h2>Open from 9:00 am</h2>
        <h2>Close at 3:00 pm</h2>
        <br />
        <h1>Ticket price</h1>
        <h2>For children 30 L.E</h2>
        <h2>For adult 50 L.E</h2>
        <h2>For foreign 100 L.E</h2>
      </div>
      <img
        onClick={() => navigate("/")}
        src="/logo_for_museum_of_science_and_innovation_for_kids__4_-removebg-preview.png"
        alt="Museum Logo"
        style={{
          width: "100vh",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
};
