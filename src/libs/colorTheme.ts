import { useEffect, useState } from "react";

type ThemeType = "light" | "dark";

export const colorTheme = {
  useTheme: () => {
    const [currentTheme, setCurrentTheme] = useState<ThemeType>("light");

    useEffect(() => {
      if (typeof window !== "undefined" && localStorage.theme === "dark")
        setCurrentTheme("dark");
    }, []);

    const setTheme = (mode: ThemeType) => {
      localStorage.theme = mode;
      setCurrentTheme(mode);
      mode === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    };

    const toggleTheme = () => {
      currentTheme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return {
      theme: currentTheme,
      setTheme,
      toggleTheme,
    };
  },
  useInit: () => {
    useEffect(() => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }
    });
  },
};
