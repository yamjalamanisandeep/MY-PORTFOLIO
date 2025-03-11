// "use client";

// import { useEffect, useState } from "react";
// import { Sun, Moon } from "lucide-react";

// const ThemeToggle = ({ onThemeChange }) => {
//   const [theme, setTheme] = useState("light"); // Default to "light"

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedTheme = localStorage.getItem("theme") || "light"; // Default light
//       setTheme(savedTheme);
//       document.documentElement.classList.toggle("dark", savedTheme === "dark");

//       if (onThemeChange) {
//         onThemeChange(savedTheme === "dark");
//       }
//     }
//   }, [onThemeChange]);

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     document.documentElement.classList.toggle("dark", theme === "dark");

//     if (onThemeChange) {
//       onThemeChange(theme === "dark");
//     }
//   }, [theme, onThemeChange]);

//   return (
//     <button
//       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//       className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
//       aria-label="Toggle theme"
//     >
//       {theme === "light" ? (
//         <Moon className="text-gray-900 dark:text-white w-5 h-5" />
//       ) : (
//         <Sun className="text-gray-900 dark:text-white w-5 h-5" />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;

"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ onThemeChange }) => {
  const [theme, setTheme] = useState("dark"); // Default to dark

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Read theme from localStorage or default to "dark"
      const savedTheme = localStorage.getItem("theme") || "dark";
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");

      // Set a timer to switch to light mode after 5 minutes (300,000 milliseconds)
      const timer = setTimeout(() => {
        setTheme("light");
        localStorage.setItem("theme", "light");
        document.documentElement.classList.toggle("dark", false);

        if (onThemeChange) {
          onThemeChange(false); // Notify parent component that light mode is enabled
        }
      }, 300000); // 5 minutes = 300,000 milliseconds

      // Cleanup the timer when the component unmounts
      return () => clearTimeout(timer);
    }
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    // Save theme to localStorage
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