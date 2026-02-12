
import { useNavigate } from "react-router-dom";
import { cn, handleNavigation } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

export const Home = () => {
    const navigate = useNavigate();
    
    return (
        <section 
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >   
            <div className="container max-w-4xl mx-auto text-center z-10">
                {/* Left text + button block */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-center"> 
                    <div className="flex-1">
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

                            {/* Add ' View my Work' and 'Contact Me' Buttons */}
                            <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center mx-auto max-w-xs sm:max-w-none">
                                <a href="#projects" 
                                   className="cosmic-button"
                                   onClick={(e) => handleNavigation(e, "#projects", navigate)}>
                                   View my Work
                                </a>
                                <a href="#contact"
                                   className="cosmic-button-inverted"
                                   onClick={(e) => handleNavigation(e, "#contact", navigate)}>
                                   Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        {/* Profile picture */}
                        <img
                            src="/Profile_Picture_Crop.jpg"
                            alt="Profile Picture"
                            className={cn("w-60 h-60 md:w-90 md:h-90 rounded-3xl object-cover mx-auto",
                                "opacity-0 animate-fade-in-delay-1 shadow-[var(--shadow-card-hover)]",
                                "transition-transform duration-300 transform hover:scale-105"
                            )}
                        />
                    </div>
                    
                </div>
                {/* Scroll Down Indicator */}
                <div className={cn("absolute bottom-18 left-1/2 transform -translate-x-1/2",
                    "flex flex-col items-center opacity-0 animate-fade-in-delay-4"
                )}>
                    <span className="text-sm text-muted-foreground md:mb-1 animate-bounce">Scroll</span>
                    <ArrowDown className="h5 w5 text-primary mt-1 animate-bounce"/>
                </div>
            </div>
        </section>
    );
};