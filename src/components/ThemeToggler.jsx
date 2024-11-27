import { ThemeContext } from '../ThemeContext'; // Import the ThemeContext
import { useEffect, useState,useContext } from "react";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      aria-label="theme toggler"
      onClick={toggleTheme}
      className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static"
    >
      <img
        src="/images/icon/icon-moon.svg"
        alt="logo"

        className="dark:hidden"
      />

      <img
        src="/images/icon/icon-sun.svg"
        alt="logo"

        className="hidden dark:block"
      />
    </button>
  );
};

export default ThemeToggler;
