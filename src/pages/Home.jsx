import {ThemeToggle} from "@/components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";

export const Home = () => {
    return <div className="min-h-dvh overflow-x-hidden" style={{
        backgroundColor: `hsl(var(--background))`,
        color: `hsl(var(--foreground))`
    }}> {/*className="min-h-screen"*/}

            {/*Theme Toggle */}
            <ThemeToggle />
            
            {/*Background Effects */}
            <StarBackground />
            
            {/*Navbar */}

            {/*Main Content */}

            {/*Footer */}
    </div>;
};
