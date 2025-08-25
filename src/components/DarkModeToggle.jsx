// src/components/DarkModeToggle.jsx
import React, { useState, useEffect, useCallback } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const isDark = localStorage.theme === "dark" || 
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setDarkMode(isDark);
    updateTheme(isDark);
    setMounted(true);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only change if user hasn't explicitly set a preference
      if (!localStorage.theme) {
        const isDark = e.matches;
        setDarkMode(isDark);
        updateTheme(isDark);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const updateTheme = useCallback((isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, []);

  const toggleDarkMode = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateTheme(newDarkMode);
    
    // Reset animation state after transition completes
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Prevent SSR mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-0"
        aria-label="Toggle dark mode"
        disabled
      >
        <FaMoon className="text-gray-700" size={18} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isAnimating ? "transform scale-110" : ""
      }`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 transition-transform duration-300" size={18} />
      ) : (
        <FaMoon className="text-gray-700 transition-transform duration-300" size={18} />
      )}
    </button>
  );
};

export default DarkModeToggle;