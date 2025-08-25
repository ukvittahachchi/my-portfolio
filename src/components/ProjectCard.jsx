// src/components/ProjectCard.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ title, image, tech, githubLink, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl border border-gray-100 dark:border-gray-700"
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="relative overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-700"
            style={{ 
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              filter: isHovered ? 'brightness(0.7)' : 'brightness(1)'
            }}
          />
        </div>
        
        <motion.div 
          className="absolute top-4 right-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0.8, 
            scale: isHovered ? 1.1 : 1 
          }}
          transition={{ duration: 0.3 }}
        >
          <a 
            href={githubLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-900 rounded-full shadow-lg text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            aria-label="View on GitHub"
          >
            <FiGithub size={20} />
          </a>
        </motion.div>
        
        <div className="absolute bottom-4 left-4">
          <div className="flex flex-wrap gap-2">
            {tech.slice(0, 3).map((technology) => (
              <span 
                key={technology}
                className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full"
              >
                {technology}
              </span>
            ))}
            {tech.length > 3 && (
              <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full">
                +{tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white pr-2">
            {title}
          </h3>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="View code on GitHub"
            >
              <FiArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed">
          {description}
        </p>
        
        <motion.a
          href={githubLink}
          className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors group"
          whileHover={{ x: 3 }}
        >
          <FiGithub className="mr-2" />
          View Code
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;