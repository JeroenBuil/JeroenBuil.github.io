import { useState } from "react";
import { cn } from "@/lib/utils";

const skillList = [
  // Programming Languages
  { name: "Python", level: 100,  category: "Programming Languages" },
  { name: "MATLAB", level: 100,  category: "Programming Languages" },
  { name: "SQL", level: 90,  category: "Programming Languages" },
  { name: "R", level: 80,  category: "Programming Languages" },
  { name: "Java", level: 30,  category: "Programming Languages" },
  { name: "JavaScript", level: 80,  category: "Programming Languages" },
  { name: "C++", level: 70,  category: "Programming Languages" },
  { name: "React", level: 60,  category: "Programming Languages" },
  { name: "HTML/CSS", level: 50,  category: "Programming Languages" },

  // Machine Learning & AI
  { name: "Scikit-learn", level: 100,  category: "Machine Learning & AI" },
  { name: "PyTorch", level: 95,  category: "Machine Learning & AI" },
  { name: "TensorFlow", level: 90,  category: "Machine Learning & AI" },
  { name: "Keras", level: 60,  category: "Machine Learning & AI" },
  { name: "Pandas", level: 100,  category: "Machine Learning & AI" },
  { name: "NumPy", level: 100,  category: "Machine Learning & AI" },
  { name: "NLP", level: 70,  category: "Machine Learning & AI" },
  { name: "Computer Vision", level: 50,  category: "Machine Learning & AI" },
  { name: "Time-Series Processing", level: 95,  category: "Machine Learning & AI" },

  // Data Engineering & Cloud
  { name: "ETL Pipelines", level: 100,  category: "Data & Cloud" },
  { name: "Airflow", level: 60,  category: "Data & Cloud" },
  { name: "Databricks", level: 90,  category: "Data & Cloud" },
  { name: "PySpark", level: 75,  category: "Data & Cloud" },
  { name: "Azure", level: 80,  category: "Data & Cloud" },
  { name: "AWS", level: 60,  category: "Data & Cloud" },

  // Dashboard & Analytics
  { name: "Matplotlib", level: 100,  category: "Dashboard & Analytics" },
  { name: "Seaborn", level: 100,  category: "Dashboard & Analytics" },
  { name: "Plotly", level: 100,  category: "Dashboard & Analytics" },
  { name: "Power BI", level: 70,  category: "Dashboard & Analytics" },
  { name: "SQL Server Management Studio", level: 80,  category: "Dashboard & Analytics" },
  { name: "Azure Data Studio", level: 75,  category: "Dashboard & Analytics" },

  // DevOps
  { name: "Git", level: 100,  category: "DevOps" },
  { name: "CI/CD", level: 100,  category: "DevOps" },
  { name: "API Integration", level: 80,  category: "DevOps" },
  { name: "Docker", level: 60,  category: "DevOps" },
  { name: "Linux", level: 90,  category: "DevOps" },
  { name: "Windows", level: 80,  category: "DevOps" },
  { name: "macOS", level: 60,  category: "DevOps" },

  // Biomedical
  { name: "MNE", level: 80,  category: "Biomedical" },
  { name: "EEGLAB", level: 70,  category: "Biomedical" },
  { name: "GDPR", level: 85,  category: "Biomedical" },
  { name: "ISO 13485", level: 65,  category: "Biomedical" },
  { name: "IEC 62304", level: 70,  category: "Biomedical" },
  { name: "F.A.I.R.", level: 75,  category: "Biomedical" },

  // Hardware & Design
  { name: "Fusion 360", level: 90,  category: "Hardware & Design" },
  { name: "SolidWorks", level: 80,  category: "Hardware & Design" },
  { name: "KiCAD", level: 60,  category: "Hardware & Design" },
  { name: "3D Printing", level: 100,  category: "Hardware & Design" },
  { name: "Arduino", level: 75,  category: "Hardware & Design" },
  { name: "Raspberry Pi", level: 60,  category: "Hardware & Design" },
];

const categories = ["All", ...new Set(skillList.map(skill => skill.category))];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Programming Languages");

  const filteredSkills = (
    activeCategory === "All" 
      ? skillList 
      : skillList.filter((skill) => skill.category === activeCategory)
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary-30">
      {/* Container */}
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span> 
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {/* Category Filter Buttons */}
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-2 py-1.5 sm:px-3 sm:py-3 text-md sm:text-base',
                'rounded-full transition-colors duration-300 capitalize font-medium',
                activeCategory === category ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary/70 text-foreground hover:bg-primary/80"
              )}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {/* Skill Card for each skill*/}
          {filteredSkills.map((skill, key) => (
            <div 
              key={key}
              className="bg-card p-3 rounded-lg shadows-xs card-hover"
            >
              {/* Skill Name */}
              <div className="text-left mb-3">
                <h3 className="font-semibold text-xs sm:text-sm md:text-base">{skill.name}</h3>
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
