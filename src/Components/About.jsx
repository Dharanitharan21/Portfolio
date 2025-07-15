import { Code, User } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
function About() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl m-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Code className="text-blue-600" size={24} />
                Passionate Developer
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
             I’m Dharanitharan, a passionate web developer specializing in the MERN stack for building dynamic, responsive applications. I have hands-on experience developing RESTful APIs, crafting engaging user interfaces, and creating data-driven solutions. I’m open to freelance opportunities and eager to collaborate on innovative projects that bring ideas to life with clean, impactful code.
              </p>

            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Quick Facts
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Fresh Graduate
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Full-Stack Developer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Open to Freelance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Remote Work Ready
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
