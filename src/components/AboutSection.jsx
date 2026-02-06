
import { cn } from "@/lib/utils";
import { Code, User, Briefcase } from "lucide-react";


export const AboutSection = () => {
    return (
        <section 
          id="about"
          className="py-24 px-4 relative">
            {" "}
            <div className="container max-w-5xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About
                    <span className="text-primary"> Me</span>
                </h2>
                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-muted-foreground">
                        <h3 className="text-2xl md:text-2xl font-semibold text-foreground">
                            AI & Biomedical engineer<br></br> Solution Builder
                        </h3>
                        <p>
                            I bring 11+ years of experience creating AI and engineering solutions that bridge
                            industry and research. I focus on practical, production-ready work that helps teams
                            move faster and deliver real outcomes.
                        </p>
                        <p className="mb-2">Fields I’ve worked in:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Biotech</li>
                            <li>Medtech</li>
                            <li>Finance</li>
                        </ul>
                        <p>
                            I strive to leave a positive impact with my work, whether it’s improving patient outcomes, enabling
                            scientific discovery, or building reliable (data-driven) systems in complex environments.
                        </p>
                        <p>
                            Outside of work, I’m usually on the water or tinkering with electronics. I'm also a passionate photographer/videographer.
                        </p>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            {/* Get in touch button */}
                            <a href="#contact" className='cosmic-button'>
                                Get In Touch
                            </a>
                            {/* Download CV button */}
                            <a 
                                href="/CV - Jeroen Buil.pdf" 
                                download="CV - Jeroen Buil.pdf"
                                className="cosmic-button-inverted"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">AI / ML</h4>
                                    <p>
                                        Extensive experience in building and deploying AI/ML solutions in real-world settings,
                                        with a focus on robustness, scalability, and maintainability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};