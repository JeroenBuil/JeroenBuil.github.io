import { useState, useEffect } from "react";
import { useTheme } from '@/components/ThemeContext';
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NeuronBackground } from "@/components/NeuronBackground";
import { NavBar } from "@/components/NavBar";
import { Home } from "@/components/Home";
import { About } from "@/components/About";
import { Skills } from "../components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


export const HomePage = () => {

    const { isDarkMode } = useTheme(); 

    return <div className="min-h-dvh bg-background text-foreground overflow-x-hidden"> {/*className="min-h-screen"*/}

            {/*Theme Toggle */}
            <ThemeToggle />
            
            {/*Background Effects based on theme */}
            {isDarkMode ? <StarBackground /> : <NeuronBackground />}

            {/*Navbar */}
            <NavBar />
            
            {/* Main content */}
            <main>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
           
            {/*Footer */}
            <Footer />
        </div>;
};
