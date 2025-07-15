import { Code } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

function Skills() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "MySQL", "MongoDB", "REST APIs"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "AWS", "Figma", "VS Code", "Postman"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  // Animate when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}
                >
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-950 mb-6">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      ></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
