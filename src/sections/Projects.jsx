// src/sections/Projects.jsx
import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { motion } from "framer-motion";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Construction Property Inspection App",
      image: project1,
      tech: ["React", "TailwindCSS", "Framer Motion"],
      demoLink: "https://github.com/ukvittahachchi/Construction-Property-Inspection-and-Reporting-App",
      githubLink: "https://github.com/ukvittahachchi/Construction-Property-Inspection-and-Reporting-App",
      description: "A modern, responsive portfolio website with smooth animations and dark/light mode functionality."
    },
    {
      title: "Fake News Detector",
      image: project2,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "https://github.com/ukvittahachchi/Fake-News-Detector-App",
      githubLink: "https://github.com/ukvittahachchi/Fake-News-Detector-App",
      description: "Full-stack application for detecting fake news using machine learning and natural language processing."
    },
    {
      title: "File Converter Web App",
      image: project3,
      tech: ["React", "Redux", "Firebase", "Material UI"],
      demoLink: "https://github.com/ukvittahachchi/File-Converter-Tool",
      githubLink: "https://github.com/ukvittahachchi/File-Converter-Tool",
      description: "Web application for converting files between different formats with a user-friendly interface."
    }
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen px-4 py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here are some of my recent projects that showcase my skills and expertise in web development.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard 
                {...project} 
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;