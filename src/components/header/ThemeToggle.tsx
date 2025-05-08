"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = resolvedTheme === "dark";
  const handleClickTheme = () => setTheme(isDarkMode ? "light" : "dark");

  if (!mounted) return null; // эсвэл skeleton icon

  return (
    <div>
      <Button onClick={handleClickTheme} size="icon">
        {isDarkMode ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};
