
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

export const HomeSection = () => {
    const handleScrollToProjects = (event) => {
        event.preventDefault();
        const target = document.getElementById("projects");
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section 
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Jeroen </span>
                        <span className="text-gradient ml-1 opacity-0 animate-fade-in-delay-2"> Buil </span>
                    </h1>

                    {/* Intro text */}
                    <div className={cn("opacity-0 animate-fade-in-delay-3",
                        "text-md md:text-lg text-muted-foreground max-w-5xl mx-auto"
                    )}>
                        {/* <p className="mb-2">11+ years of AI engineering.</p> */}
                        <p className="mb-2">Building real-world solutions across:</p>
                        <ul className="list-disc space-y-1 mb-1 inline-block text-left pl-5">
                            <li>Biotech</li>
                            <li>Medtech</li>
                            <li>Finance</li>
                        </ul>
                    </div>

                    {/* Add ' View my Work' Button */}
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a  href="#projects" className="cosmic-button" onClick={handleScrollToProjects}>
                            View my Work
                        </a>
                    </div>
                </div> 

                {/* Scroll Down Indicator */}
                <div className={cn("absolute bottom-18 left-1/2 transform -translate-x-1/2",
                    "flex flex-col items-center animate-bounce"
                )}>
                    <span className="text-sm text-muted-foreground mb-1">Scroll</span>
                    <ArrowDown className="h5 w5 text-primary mt-1"/>
                </div>
            </div>
        </section>
    );
};