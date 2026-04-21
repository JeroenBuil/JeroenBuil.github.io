import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeContext';

export const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
      <button onClick={toggleTheme}
      className={cn('fixed lg:top-5 top-18 right-5 z-50 p-2 rounded-full','focus-outline-hidden')}>
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