import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backgdrop-blur-md shadow-xs": "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a className="text-5xl font-bold text-primary flex items-centered">
                    <span className="relative z-10">
                        <span className="text-glow" > Jeroen </span> 
                        Portfolio
                    </span>
                </a>

                {/* Desktop Menu */}
                <div>
                    {navItems.map((item, key) => {
                        <a key={key} href={item.href}>
                            {item.name}
                        </a>
                    })}
                </div>
            </div>
        </nav>
    );
};