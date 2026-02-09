import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";
import { Home } from "@/components/HomeSection";
import { About } from "@/components/AboutSection";
import { Skills } from "../components/SkillsSection";
import { Projects } from "@/components/ProjectsSection";
import { Contact } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const HomePage = () => {
    return <div className="min-h-dvh bg-background text-foreground overflow-x-hidden"> {/*className="min-h-screen"*/}

            {/*Theme Toggle */}
            <ThemeToggle />
            
            {/*Background Effects */}
            <StarBackground />

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
