import {ThemeToggle} from "@/components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";
import { Title } from "@/components/Title";
import { NavBar } from "@/components/NavBar";
import { HomeSection } from "@/components/HomeSection";

export const Home = () => {
    return <div className="min-h-dvh bg-background text-foreground overflow-x-hidden"> {/*className="min-h-screen"*/}

            {/*Theme Toggle */}
            <ThemeToggle />
            
            {/*Background Effects */}
            <StarBackground />

            {/*Navbar */}
            <NavBar />
            
            {/*test Title */}
            {/* <Title /> */}

            {/* Main content */}
            <main>
                <HomeSection />
            </main>
            
            

            {/*Main Content */}

            {/*Footer */}
        </div>;
};
