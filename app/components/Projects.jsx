import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/legacy/image"; // Import the Image component
import { projectsData } from "@/assets/assets"; // Import projects data
import { Outfit } from 'next/font/google';

// Configure the Outfit font
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Adjust weights as needed
  variable: '--font-outfit', // Define a CSS variable for the font
});

const Projects = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode toggle

  return (
    <div
      id="projects"
      className={`w-11/12 max-w-6xl mx-auto py-16 scroll-mt-16 ${outfit.variable} font-sans ${
        isDarkMode ? "dark" : ""
      }`}
    >
      {/* Dark Mode Toggle Button (Optional) */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg z-50"
      >
        {isDarkMode ? "🌙" : "☀️"}
      </button>

      {/* Section Title */}
      <motion.h2
        className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // Ensures the animation only happens once
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }} // Ensures the animation only happens once
          >
            {/* Project Image */}
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image || "/images/fallback.jpg"} // Fallback image
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Name */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-yellow-400 mb-2 font-outfit">
              {project.name}
            </h3>

            {/* Project Description */}
            <p className="text-sm text-gray-600 dark:text-gray-100 mb-4">
              {project.description}
            </p>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-yellow-200 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Links */}
            <div className="flex gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-yellow-400 dark:hover:text-gray-300 transition duration-300 flex items-center gap-1"
                >
                  <span>Live Demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-yellow-400 dark:hover:text-blue-300 transition duration-300 flex items-center gap-1"
                >
                  <span>View Code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
