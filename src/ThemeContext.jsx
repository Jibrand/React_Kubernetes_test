import { createContext, useState, useEffect } from 'react';

// Create the context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [auth , setauth ] = useState(false)

  useEffect(() => {
    // Check local storage or default to light
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme); // Set initial theme
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove(theme); // Remove previous theme class
    document.documentElement.classList.add(newTheme); // Add new theme class
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme,auth , setauth }}>
      {children}
    </ThemeContext.Provider>
  );
};
