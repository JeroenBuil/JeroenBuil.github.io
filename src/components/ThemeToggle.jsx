import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] = useState(null);

    useEffect(() => {
        // Ensure dark mode is active on page load
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const targetDark = !isDarkMode;
        setAnimationDirection(targetDark ? "dark" : "light");
        setIsAnimating(true);

        if (targetDark) {
            // adds dark mode
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        } else {
            // removes dark mode
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }

        setTimeout(() => {
            setIsAnimating(false);
            setAnimationDirection(null);
        }, 1000); // Match animation duration
    };

    return (
      <button onClick={toggleTheme}
      className={cn("fixed max-sm:hidden top-5 right-5 z-50 padding-2 rounded-full",
        "focus-outline-hidden"
      )}>
        <span className={cn(
        isAnimating   ? `color-to-${animationDirection}` : isDarkMode ? "text-yellow-300" : "text-blue-900"
        )}
        style={isAnimating ? { animation: `${`color-to-${animationDirection}`} 1s ease-in-out` } : {}}
        >
          {isDarkMode ? (
            <Moon className="h-7 w-7"/>
          ) : (
            <Sun className="h-7 w-7"/>
          )}
        </span>
      </button>
    );
};