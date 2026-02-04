import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Ensure dark mode is active on page load
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            // removes dark mode
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            // adds dark mode
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
      <button onClick={toggleTheme}
      className={cn('fixed max-sm:hidden top-5 right-5 z-50 padding-2 rounded-full',
        'focus-outline-hidden'
      )}>
        <span className={cn('icon-color-transition', isDarkMode ? 'text-yellow-300' : 'text-blue-900')}>
          {isDarkMode ? (
            <Moon className='h-7 w-7'/>
          ) : (
            <Sun className='h-7 w-7'/>
          )}
        </span>
      </button>
    );
};