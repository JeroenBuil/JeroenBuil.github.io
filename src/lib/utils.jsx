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

/**
 * Handles navigation - scrolls to sections (#section) or navigates to pages
 * @param {Event} event - The event object
 * @param {string} href - The href/path to navigate to
 * @param {Function} navigate - React Router navigate function
 */
export const handleNavigation = (event, href, navigate) => {
    event.preventDefault();
    
    // Check if it's a section (starts with #) or a page
    if (href.startsWith('#')) {
        // It's a section, scroll to it
        const section_id = href.replace("#", "");
        handleScrollToSection(event, section_id);
    } else {
        // It's a page, navigate using React Router
        navigate(href);
    }
};