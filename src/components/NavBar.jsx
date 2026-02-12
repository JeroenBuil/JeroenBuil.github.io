import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn, handleNavigation } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Photography', href: '/photography' },
    { name: 'Contact', href: '#contact' },
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavClick = (event, href) => {
        handleNavigation(event, href, navigate);
        setIsMenuOpen(false);
    };

    const handleCloseMenu = (event) => {
        // Only close if clicking on the backdrop, not on menu content
        if (event.target === event.currentTarget) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>  
            {/* Desktop Menu Backdrop */}
            <nav className={cn("fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs": "py-5"
            )}>
                <div className="container flex items-center justify-between">
                    <div className="flex flex-col">
                        <a className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold flex items-center relative z-10 gap-2 md:gap-3 mt-0 md:mt-0">
                            <span className="text-foreground">Jeroen Buil</span>
                            <span className="text-primary text-glow">Portfolio</span>
                        </a>
                        {/* <div className="text-sm text-muted-foreground mt-1">WORK IN PROGRESS</div> */}
                    </div>

                    {/* Desktop Menu NavBar */}
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item, key) => (
                            <a 
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover-text-primary"
                                onClick={(event) => handleNavClick(event, item.href)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <button onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="fixed md:static top-5 right-5 md:hidden p-2 text-foreground z-50 flex items-center" >
                        {isMenuOpen ? <X size={30} /> : <Menu size={30}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Backdrop */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
                    onClick={handleCloseMenu}
                />
            )}

            {/* Mobile Menu NavBar */}
            <div className={cn("fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 md:hidden",
                "transition-all duration-300",
                isMenuOpen ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-95",)
            }>
                <div className="space-y-10 text-3xl text-center px-6">
                    {navItems.map((item, key) => (
                        <a 
                            key={key}
                            href={item.href}
                            className="block text-foreground/80 hover-text-primary"
                            onClick={(event) => handleNavClick(event, item.href)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};