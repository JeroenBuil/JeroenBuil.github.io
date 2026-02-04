import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

{/* Utility function to combine class names with Tailwind CSS merging. 
    This allows for more flexible and maintainable class name combinations. */}
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};