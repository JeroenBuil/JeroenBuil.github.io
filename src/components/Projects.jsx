import { cn } from "@/lib/utils";
import { ExternalLink, Github, Images } from "lucide-react";
import { Link } from "react-router-dom";

const projectList =[
  {
    project_id:1,
    title: "Monkey Collar",
    description: "Created a monkey collar reducing animal stress: ultra-light collar, remotely releasable, lowering costs/weight 10-30x",
    tags: ['Arduino', 'Bluetooh', '3D Printing', 'Animal Wellbeing'],
    link: "https://nsojournals.onlinelibrary.wiley.com/doi/full/10.2981/wlb.00581",
    image: "/projects/MonkeyCollar.jpg",
    icon: "external"
  },
  {
    project_id:2,
    title: "Photography",
    description: "Portfolio showcasing some of my favourite shots I've taken over the years.",
    tags: ["Photography","Fuji-Film X-T10", "Patience"],
    link: "N/A",
    route: "/photography",
    image: "/projects/Astrophotography.jpg",
    icon: 'images'
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
                  A selection of personal projects reflecting my creativity, technical skills, and passion for building things in my free time.
              </p>

              {/* Project Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectList.map((project) => {
                      const isExternal = project.link !== "N/A";
                      const isInternal = Boolean(project.route);
                      const cardClasses = cn(
                        "group bg-card rounded-lg overflow-hidden transition-all duration-300 flex flex-col h-full",
                        "card-hover",
                        isExternal || isInternal ? "cursor-pointer" : "cursor-default"
                      );
                      const cardContent = (
                        <>
                          {/* Image */}
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full aspect-[16/9] hover:transform hover:scale-103 transition-transform duration-300 object-cover"
                          />
                          {/* Content */}
                          <div className="p-4 flex flex-col h-full">
                            <div className="flex-grow">
                              {/* Title */}
                              <h3 className="text-xl font-semibold mb-2">
                                {project.title}
                              </h3>
                              {/* Description */}
                              <p className="text-muted-foreground">
                                {project.description}
                              </p>
                            </div>
                            {/* Tags and Icon Container */}
                            <div className="mt-auto pt-4">
                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                {project.tags.map((tag, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 inline-block bg-primary text-white text-sm rounded mr-2"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              {/* Icon (GitHub or External Link) */}
                              <div className="flex justify-start items-center h-10">
                                {project.icon && (
                                  <div
                                    data-icon
                                    className="transition-colors"
                                    style={{
                                      color: 'var(--color-muted-foreground)',
                                    }}
                                  >
                                    {project.icon === "github" ? <Github size={20} /> : project.icon === "images" ? <Images size={20} /> : <ExternalLink size={20} />}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </>
                      );

                      const handleMouseEnter = (e) => {
                        const icon = e.currentTarget.querySelector('[data-icon]');
                        if (icon) icon.style.color = 'var(--color-primary)';
                      };

                      const handleMouseLeave = (e) => {
                        const icon = e.currentTarget.querySelector('[data-icon]');
                        if (icon) icon.style.color = 'var(--color-muted-foreground)';
                      };

                      if (isInternal) {
                        return (
                          <Link
                            key={project.project_id}
                            to={project.route}
                            className={cardClasses}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            {cardContent}
                          </Link>
                        );
                      }

                      if (isExternal) {
                        return (
                          <a
                            key={project.project_id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cardClasses}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            {cardContent}
                          </a>
                        );
                      }

                      return (
                        <div
                          key={project.project_id}
                          className={cardClasses}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          {cardContent}
                        </div>
                      );
                  })}
                </div>
           </div>
        </section>
    );
};