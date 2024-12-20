import { Typography } from "@mui/material";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useColorTheme } from "../theme";

type FormValues = {
  email: string;
  hero: string;
};

export const FooterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data Submitted:", data);
  };

  const { theme } = useColorTheme();

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <Typography style={styles.header(theme)}>stay informed</Typography>

        {/* Email Field */}
        <div style={styles.field}>
          <label htmlFor="email" style={styles.label}>
            email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email.message}</p>}
        </div>

        {/* Hero Dropdown */}
        <div style={styles.field}>
          <label htmlFor="hero" style={styles.label}>
            select a hero
          </label>
          <select
            id="hero"
            {...register("hero", { required: "Please select a hero" })}
            style={styles.select}
          >
            <option value="">Select a hero</option>
            <option value="hero1">Hero 1</option>
            <option value="hero2">Hero 2</option>
            <option value="hero3">Hero 3</option>
          </select>
          {errors.hero && <p style={styles.error}>{errors.hero.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          submit
        </button>
      </form>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: "100%",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "#FFC700",
    fontFamily: "Arial, sans-serif",
  },
  header: (theme: any) => ({
    color: theme.palette.text.secondary,
    fontSize: "1.5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  }),
  field: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "0.9rem",
    textAlign: "left",
    color: "white",
    marginBottom: "8px",
    textTransform: "lowercase",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "white",
    color: "black",
    outline: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  select: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "white",
    color: "black",
    outline: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  button: {
    display: "inline-block",
    width: "100%",
    padding: "10px 15px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#FFC700",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    textTransform: "uppercase",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s",
  },
  error: {
    color: "#FF4D4D",
    fontSize: "0.8rem",
    textAlign: "left",
    marginTop: "5px",
  },
};

