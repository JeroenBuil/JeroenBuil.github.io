import {ThemeToggle} from "@/components/ThemeToggle";
import {StarBackround} from "@/components/StarBackground";

export const Home = () => {
    return <div className="min-h-dvh bg-background text-foreground overflow-x-hidden"> {/*className="min-h-screen"*/}

            {/*Theme Toggle */}
            <ThemeToggle />
            
            {/*Background Effects */}
            <StarBackround />
            
            {/*Navbar */}

            {/*Main Content */}

            {/*Footer */}
    </div>;
};
