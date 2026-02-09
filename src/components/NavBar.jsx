import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (event, href) => {
        event.preventDefault();
        const targetId = href.replace("#", "");
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ block: "start" });
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
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

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
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

                {/* Mobile Menu */}
                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",)
                }>
                    <div className="space-y-10 text-3xl text-center">
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
                
            </div>
        </nav>
    );
};