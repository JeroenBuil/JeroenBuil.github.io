
import { cn } from "@/lib/utils";

const projectList =[
  {
    project_id:1,
    title: "Monkey Collar",
    description: "Created a monkey collar easing animal stress: ultra-light collar, remotely releasable, lowering costs/weight 10-30x",
    tags: ['Arduino', 'Bluetooh', '3D Printing'],
    link: "N/A",
    image: "/projects/MonkeyCollar.jpg"
  },
  {
    project_id:2,
    title: "Astrophotography",
    description: "Portfolio showcasing my astrophotography work I have shot over the years.",
    tags: ["Photography","Fuji-Film X-T10", "Patience"],
    link: "N/A",
    image: "/projects/Astrophotography.jpg"
  },
  {
    project_id:3,
    title: "Guitar Build",
    description: "A custom-built electric guitar project, where I built an instrument from scratch, documenting the process.",
    tags: ["Woodworking", "Electronics", "Photography"],
    link: "N/A",
    image: "/projects/GuitarBuild3.jpg"
  }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
           <div className="container max-w-5xl mx-auto">
              {/* Section Title + description*/}
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  A selection of personal projects that reflect my creativity, technical skills, and passion for building things outside of work.
              </p>

              {/* Project Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectList.map((project, key) => (
                      <div 
                        key={project.project_id}
                        className={cn(
                          "group block rounded-lg overflow-hidden transition-all duration-300",
                          "card-hover"
                          
                        )}
                      >
                          <img
                              src={project.image}
                              alt={project.title}
                              className="w-full aspect-[16/9] object-cover"
                          />
                          <div className="p-4">
                              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                              <p className="text-muted-foreground">{project.description}</p>
                              <div className="flex flex-wrap gap-2 mt-4">
                                  {project.tags.map((tag, index) => (
                                      <span
                                          key={index}
                                          className="px-2 py-1 inline-block bg-primary text-white text-xs rounded mr-2"
                                      >
                                          {tag}
                                      </span>
                                  ))}
                              </div>
                          </div>
                      </div>
                  ))}
                </div>
           </div>
        </section>
    );
};