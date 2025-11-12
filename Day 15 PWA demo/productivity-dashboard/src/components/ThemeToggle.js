import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ margin: "10px" }}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
