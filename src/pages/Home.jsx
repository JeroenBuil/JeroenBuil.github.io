import {ThemeToggle} from "@/components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";
import { Title } from "@/components/Title";
import { NavBar } from "@/components/NavBar";

export const Home = () => {
    return <div className="min-h-dvh bg-background text-foreground overflow-x-hidden"> {/*className="min-h-screen"*/}

            {/*Theme Toggle */}
            <ThemeToggle />
            
            {/*Background Effects */}
            <StarBackground />

            {/*Navbar */}
            <NavBar />
            
            {/*Title */}
            <Title />
            
            

            {/*Main Content */}

            {/*Footer */}
    </div>;
};
