import {ThemeToggle} from "@/components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";
import { HomeSection } from "@/components/HomeSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";

export const Home = () => {
    return <div className="min-h-dvh bg-background text-foreground overflow-x-hidden"> {/*className="min-h-screen"*/}

            {/*Theme Toggle */}
            <ThemeToggle />
            
            {/*Background Effects */}
            <StarBackground />

            {/*Navbar */}
            <NavBar />
            
            {/* Main content */}
            <main>
                <HomeSection />
                <AboutSection />
                <SkillsSection />
            </main>
           

            {/*Footer */}
        </div>;
};
