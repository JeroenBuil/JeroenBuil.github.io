import { useState } from "react";
import { cn } from "@/lib/utils";

const skillList = [
  // Coding languages
  { name: "Python", level: 100,  category: "Coding Languages" },
  { name: "MATLAB", level: 100,  category: "Coding Languages" },
  { name: "R", level: 85,  category: "Coding Languages" },
  { name: "SQL", level: 90,  category: "Coding Languages" },
  { name: "Java", level: 30,  category: "Coding Languages" },
  { name: "JavaScript", level: 80,  category: "Coding Languages" },
  { name: "C++", level: 70,  category: "Coding Languages" },
  { name: "React", level: 60,  category: "Coding Languages" },
  { name: "HTML/CSS", level: 50,  category: "Coding Languages" },

  // Data visualization
  { name: "Matplotlib", level: 100,  category: "Data Visualization" },
  { name: "Seaborn", level: 100,  category: "Data Visualization" },
  { name: "Plotly", level: 100,  category: "Data Visualization" },
  { name: "Power BI", level: 70,  category: "Data Visualization" },

  // AI / Machine learning
  { name: "Scikit-learn", level: 100,  category: "AI / ML" },
  { name: "PyTorch", level: 100,  category: "AI / ML" },
  { name: "TensorFlow", level: 90,  category: "AI / ML" },
  { name: "Keras", level: 60,  category: "AI / ML" },
  { name: "Pandas", level: 100,  category: "AI / ML" },
  { name: "NumPy", level: 100,  category: "AI / ML" },
  { name: "NLP", level: 70,  category: "AI / ML" },
  { name: "Computer Vision", level: 50,  category: "AI / ML" },
  { name: "Time-Series Processing", level: 85,  category: "AI / ML" },

  // Data engineering & ETL
  { name: "ETL Pipelines", level: 100,  category: "Data Engineering" },
  { name: "Airflow", level: 60,  category: "Data Engineering" },
  { name: "Databricks", level: 90,  category: "Data Engineering" },
  { name: "PySpark", level: 75,  category: "Data Engineering" },

  // Cloud services
  { name: "Azure", level: 80,  category: "Cloud Services" },
  { name: "AWS", level: 60,  category: "Cloud Services" },

  // Data modeling tools
  { name: "SQL Server Management Studio", level: 80,  category: "Data Modeling" },
  { name: "Azure Data Studio", level: 75,  category: "Data Modeling" },
  { name: "MS Visio", level: 100,  category: "Data Modeling" },

  // DevOps & integration
  { name: "Git", level: 100,  category: "DevOps & Integration" },
  { name: "CI/CD", level: 100,  category: "DevOps & Integration" },
  { name: "API Integration", level: 80,  category: "DevOps & Integration" },
  { name: "Docker", level: 60,  category: "DevOps & Integration" },

  // Neural data processing
  { name: "MNE", level: 80,  category: "Neural Data Processing" },
  { name: "EEGLAB", level: 70,  category: "Neural Data Processing" },

  // CAD & PCB design
  { name: "Fusion 360", level: 90,  category: "CAD & PCB" },
  { name: "SolidWorks", level: 80,  category: "CAD & PCB" },
  { name: "KiCAD", level: 60,  category: "CAD & PCB" },
  { name: "3D Printing", level: 100,  category: "CAD & PCB" },

  // Platforms & operating systems
  { name: "Linux", level: 90,  category: "Platforms" },
  { name: "Windows", level: 80,  category: "Platforms" },
  { name: "Arduino", level: 70,  category: "Platforms" },
  { name: "macOS", level: 60,  category: "Platforms" },

  // Regulatory & Compliance
  { name: "GDPR", level: 85,  category: "Regulatory & Compliance" },
  { name: "ISO 13485", level: 65,  category: "Regulatory & Compliance" },
  { name: "IEC 62304", level: 70,  category: "Regulatory & Compliance" },
  { name: "F.A.I.R.", level: 75,  category: "Regulatory & Compliance" },
];

const categories = [...new Set(skillList.map(skill => skill.category)), "All"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Coding Languages");

  const filteredSkills = activeCategory === "All" 
    ? skillList 
    : skillList.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary-30">
      {/* Container */}
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span> 
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {/* Category Filter Buttons */}
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize font-medium',
                activeCategory === category ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary/70 text-foreground hover:bg-primary/80"
              )}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Skills Grid */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Skill Card for each skill*/}
          {filteredSkills.map((skill, key) => (
            <div 
              key={key}
              className=" bg-card p-6 rounded-lg shadows-xs card-hover"
            >
              {/* Skill Name */}
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              {/* Skill Level Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-skill-bar"
                  style={{ width: skill.level + '%' }}
                />
              </div>
              {/* Skill Level Percentage */}
              {/* <div className="text-right mt-2 text-sm text-muted-foreground">
                <span>{skill.level}%</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
