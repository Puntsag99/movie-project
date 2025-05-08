"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const isDarkMode = resolvedTheme === "dark";

  const handleClickTheme = () => setTheme(isDarkMode ? "light" : "dark");

  return (
    <div>
      <Button onClick={handleClickTheme} size="icon">
        {isDarkMode ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};
