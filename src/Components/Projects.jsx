import React, { useRef, useEffect, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

const Projects = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const carouselRef = useRef(null);
  const cardRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Todo Application",
      description:
        "A full-stack Todo app with secure user authentication and CRUD operations, built with the MERN stack for robust performance and a seamless user experience.",
      tech: ["React", "Bootstrap", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/Dharanitharan21/TodoApi",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description:
        "A modern, responsive  for an e-commerce platform, featuring dynamic product components and smooth shopping cart interactions built with React.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      image: "/assets/Cover.png",
      githubUrl: "https://github.com/Dharanitharan21/jewwlshopfrontEnd",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      id: 3,
      title: "Hospital Website",
      description:
        "A professional hospital website showcasing hospital services, departments, and patient resources with a clean and modern design.",
      tech: ["React", "Javascript", "CSS", "Html"],
      image: "/assets/Thumbnail.jpg",
      liveUrl: "https://harmonycare.netlify.app/",
      githubUrl: "https://github.com/Dharanitharan21/HCHospital",
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description:
        "A personal portfolio website to showcase projects, skills, and experience with an interactive and responsive design.",
      tech: ["React.js", "Javascript", "CSS", "HTML"],
      image: "/assets/Figma Thumbnail.jpg",
      githubUrl: "#",
      gradient: "from-green-600 to-cyan-600",
    },
    {
      id: 5,
      title: "Employee Leave Management System",
      description:
        "A leave management application designed for organizations to manage employee leaves, approvals, and attendance tracking efficiently.",
      tech: ["React.js", "Javascript", "Mysql"],
      image: "/assets/file cover - 1.png",
      githubUrl: "https://github.com/Dharanitharan21/EMS_frontend",
      gradient: "from-orange-600 to-red-600",
    },
    {
      id: 6,
      title: "Test Management Application",
      description:
        "A web-based application for creating, assigning, and tracking tests or assessments, suitable for educational or corporate environments.",
      tech: ["React.js", "Javascript", "MongoDB"],
      image: "/assets/testapp.png",
      githubUrl: "https://github.com/Dharanitharan21/testmanagementappUI",
      gradient: "from-blue-600 to-purple-600",
    },

    // Add your other projects here...
  ];
  const middleIndex = Math.floor(projects.length / 2);
  const [activeIndex, setActiveIndex] = useState(middleIndex);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (carouselRef.current && cardRefs.current.length > 0) {
      const updateCarousel = () => {
        cardRefs.current.forEach((card, index) => {
          if (card) {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);
            gsap.to(card, {
              x: offset * 320,
              scale: absOffset === 0 ? 1 : 0.8 - absOffset * 0.1,
              opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.2,
              zIndex: absOffset === 0 ? 10 : 10 - absOffset,
              duration: 0.6,
              ease: "power2.out",
            });
          }
        });
      };
      updateCarousel();
    }
  }, [activeIndex]);

  const nextProject = () =>
    setActiveIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const goToProject = (index) => setActiveIndex(index);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden"
    >
        
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className=" mx-auto px-2 relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            Explore my digital universe of creative projects and technical
            innovations.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-96 mb-12  overflow-hidden">
          <div
            ref={carouselRef}
            className="relative h-full flex  items-center justify-center"
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="absolute w-80 h-80 cursor-pointer"
                onClick={() => goToProject(index)}
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden h-full group hover:border-white/20 transition-all duration-500 shadow-xl">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0opacity-20`} />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a
                        href={project.liveUrl}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:scale-110 active:scale-95 transition-transform"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:scale-110 active:scale-95 transition-transform"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} className="text-white" />
                      </a>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-2">
                    <h3 className="text-lg font-bold text-blue-200 mb-2  group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-900 text-xs leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-white/10 text-blue-300 rounded-full border border-blue-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-white/10 text-gray-400 rounded-full">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-20"
          >
            <ChevronLeft size={24} className="text-blue-300" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-20"
          >
            <ChevronRight size={24} className="text-blue-300" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all border border-blue-300 duration-300 ${
                index === activeIndex
                  ? "bg-blue-500 scale-125"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Active project details */}
        <div
          key={activeIndex}
          className={` rounded-2xl p-6 shadow-md max-w-4xl mx-auto transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {projects[activeIndex].title}
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {projects[activeIndex].description}
          </p>
          <div className="flex flex-wrap gap-2">
            {projects[activeIndex].tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-white/10 text-blue-300 rounded-full border border-blue-400/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
