"use client";

// remember : theme toggling help was from ai { need to learn the tailwind css for theme settings}

import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  mode: "light",
  toggleTheme: () => {},
});

export function useThemeMode() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (saved === "dark" || (!saved && prefersDark)) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);

    if (newMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const muiTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: { default: "#F9FAFB", paper: "#fff" },
            text: {
              primary: "#111827",
              secondary: "#6B7280",
            },
            primary: {
              main: "#2563EB",
            },
          }
        : {
            background: { default: "#1E293B", paper: "#273549" },
            text: {
              primary: "#F1F5F9",
              secondary: "#94A3B8",
            },
            primary: {
              main: "#3B82F6",
            },
          }),
    },
    typography: {
      fontFamily: `"Inter", "Geist", sans-serif`,
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
