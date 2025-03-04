"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ onThemeChange }) => {
  const [theme, setTheme] = useState("light"); // Default to "light"

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light"; // Default light
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");

      if (onThemeChange) {
        onThemeChange(savedTheme === "dark");
      }
    }
  }, [onThemeChange]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");

    if (onThemeChange) {
      onThemeChange(theme === "dark");
    }
  }, [theme, onThemeChange]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="text-gray-900 dark:text-white w-5 h-5" />
      ) : (
        <Sun className="text-gray-900 dark:text-white w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
