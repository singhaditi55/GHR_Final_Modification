import React, { useState, useEffect, createContext } from "react";

// Create a ThemeContext
export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Save preference to localStorage
    localStorage.setItem("darkMode", !darkMode);
  };

  // Check for saved preference on initial load
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};