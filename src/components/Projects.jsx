import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

const projectList =[
  {
    project_id:1,
    title: "Monkey Collar",
    description: "Created a monkey collar easing animal stress: ultra-light collar, remotely releasable, lowering costs/weight 10-30x",
    tags: ['Arduino', 'Bluetooh', '3D Printing', 'Animal Wellbeing'],
    link: "https://nsojournals.onlinelibrary.wiley.com/doi/full/10.2981/wlb.00581",
    image: "/projects/MonkeyCollar.jpg",
    icon: "external"
  },
  {
    project_id:2,
    title: "Astrophotography",
    description: "Portfolio showcasing my astrophotography work I have shot over the years.",
    tags: ["Photography","Fuji-Film X-T10", "Patience"],
    link: "N/A",
    image: "/projects/Astrophotography.jpg",
    icon: null
  },
  {
    project_id:3,
    title: "Guitar Build",
    description: "A custom-built electric guitar project, where I built an instrument from scratch, documenting the process.",
    tags: ["Woodworking", "Electronics", "Music"],
    link: "N/A",
    image: "/projects/GuitarBuild3.jpg",
    icon: null
  },
  { 
    project_id:4,
    title: "Portfolio Website",
    description: "A custom-built portfolio website showcasing my projects and experience.",
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/JeroenBuil/JeroenBuil.github.io",
    image: "/projects/Portfolio_Website.png",
    icon: "github"
  },
  { 
    project_id:5,
    title: "Web Scraper",
    description: "Data scraper built with Python and BeautifulSoup to extract data from public databases.",
    tags: ["Python", "BeautifulSoup", "Web Scraping"],
    link: "https://github.com/JeroenBuil/web-scraper",
    image: "/projects/WebScraper.png",
    icon: "github"
  }
]

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
           <div className="container max-w-5xl mx-auto">
              {/* Section Title + description*/}
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  A selection of personal projects that reflect my creativity, technical skills, and passion for building things in my free time.
              </p>

              {/* Project Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectList.map((project) => (
                      <a
                        key={project.project_id}
                        // Only add href, target, and rel if the link is valid (not "N/A")
                        href={project.link !== "N/A" ? project.link : undefined} // actual URL to navigate to if valid, otherwise undefined
                        target={project.link !== "N/A" ? "_blank" : undefined} // opens a new tab if the link is valid
                        rel={project.link !== "N/A" ? "noopener noreferrer" : undefined} // security best practices for external links
                        className={cn(
                          "group bg-card rounded-lg overflow-hidden transition-all duration-300 block",
                          "card-hover",
                          project.link !== "N/A" ? "cursor-pointer" : "cursor-default"
                        )}
                        // Add hover effect to icon to change colour when hovering over the card
                        onMouseEnter={(e) => {
                          const icon = e.currentTarget.querySelector('[data-icon]');
                          if (icon) icon.style.color = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                          const icon = e.currentTarget.querySelector('[data-icon]');
                          if (icon) icon.style.color = 'var(--color-muted-foreground)';
                        }}
                      >
                          {/* Image */}
                          <img
                              src={project.image}
                              alt={project.title}
                              className="w-full aspect-[16/9] hover:transform hover:scale-103 transition-transform duration-300 object-cover"
                          />
                          {/* Content */}
                          <div className="p-4">
                              {/* Title */}
                              <h3 className="text-xl font-semibold mb-2">
                                {project.title}
                              </h3>
                              {/* Description */}
                              <p className="text-muted-foreground">
                                {project.description}
                              </p>
                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                                  {project.tags.map((tag, index) => (
                                      <span
                                          key={index}
                                          className="px-2 py-1 inline-block bg-primary text-white text-xs rounded mr-2"
                                      >
                                          {tag}
                                      </span>
                                  ))}
                              </div>
                              {/* Icon (GitHub or External Link) */}
                              {project.icon && (
                                <div className="mt-4 flex justify-start">
                                  <div 
                                    data-icon
                                    className="transition-colors"
                                    style={{
                                      color: 'var(--color-muted-foreground)',
                                    }}
                                  >
                                    {project.icon === "github" ? <Github size={20} /> : <ExternalLink size={20} />}
                                  </div>
                                </div>
                              )}
                          </div>
                      </a>
                  ))}
                </div>
           </div>
        </section>
    );
};