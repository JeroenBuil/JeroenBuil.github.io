import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

{/* Utility function to combine class names with Tailwind CSS merging. 
    This allows for more flexible and maintainable class name combinations. */}
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

/**
 * Scrolls to a section by ID
 * @param {Event} event - The event object
 * @param {string} section_id - The section ID to scroll to
 */
export const handleScrollToSection = (event, section_id) => {
    event.preventDefault();
    const target = document.getElementById(section_id);
    if (target) {
        target.scrollIntoView({ block: "start" });
    }
};