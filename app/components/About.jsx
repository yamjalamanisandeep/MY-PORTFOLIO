import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { assets, infoList } from "@/assets/assets";
import Image from "next/image";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Triggers animation when 20% of the section is visible
  });

  return (
    <div id="about" ref={ref} className="w-11/12 max-w-6xl mx-auto py-24 scroll-mt-16 dark:bg-darkTheme dark:text-white">
      
      {/* Section Title */}
      <motion.h2
        className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Info Section */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Left: Personal Info */}
        <motion.div
          className="text-gray-800 dark:text-gray-200 space-y-6 p-6 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-blue-700 dark:text-yellow-400 mb-4">Personal Info</h3>
          <div className="space-y-3">
            <p><strong className="text-blue-700 dark:text-yellow-400">Name:</strong> Yamjala Mani Sandeep</p>
            <p><strong className="text-blue-700 dark:text-yellow-400">Study:</strong> B.Tech Computer Science | CGPA: 8.36</p>
            <p><strong className="text-blue-700 dark:text-yellow-400">College:</strong> GITAM (Deemed to be University)</p>
            <p><strong className="text-blue-700 dark:text-yellow-400">Address:</strong> Hyderabad, Telangana, India</p>
            <p><strong className="text-blue-700 dark:text-yellow-400">Languages:</strong> English, Telugu</p>
            <p><strong className="text-blue-700 dark:text-yellow-400">Interests:</strong> Traveling, Sports</p>
          </div>
        </motion.div>

        {/* Right: About Text */}
        <motion.div
          className="text-gray-700 dark:text-gray-300 p-6 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-blue-700 dark:text-yellow-400 mb-4">Who Am I?</h3>
          <p className="leading-relaxed">
            I'm a pre-final year <strong className="text-blue-700 dark:text-yellow-400">B.Tech Computer Science and Engineering</strong> student at Gitam University, passionate about technology and innovation. 
            I excel in adaptability, problem-solving, and continuous learning, with a strong foundation in programming languages like 
            <strong className="text-blue-700 dark:text-yellow-400"> Python, Java, and C.</strong> My interests span across 
            <strong className="text-gray-800 dark:text-gray-200"> software development, data structures, and full-stack web development</strong>, 
            and I’m eager to apply my skills to real-world challenges.
            <br /><br />
            Additionally, I have strong <strong className="text-blue-700 dark:text-yellow-400">problem-solving, leadership, and public speaking skills.</strong>
          </p>
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div
        className="mt-12 w-full"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
        {/* Education List */}
        <div className="grid md:grid-cols-2 gap-6">
          {infoList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xl font-semibold text-gray-900 dark:text-yellow-400">{edu.degree}</p>
                  <p className="text-base text-gray-600 dark:text-gray-300 mt-1">{edu.college}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 px-3 py-1">{edu.year}</p>
              </div> 
              <p className="text-base font-bold text-gray-600 dark:text-gray-400 px-0 py-1">{edu.grade}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Download Resume Button */}
      <div className="pt-0 flex justify-end">
        <a
          href="/RESUME.pdf"
          download="Mani_Sandeep_Resume.pdf"
          className="bg-blue-600 dark:bg-yellow-500 text-white dark:text-gray-900 px-6 mt-0 py-2.5 rounded-full shadow-md hover:bg-blue-700 dark:hover:bg-yellow-600 transition duration-300 text-2xl font-semibold flex items-center gap-2"
        >
          Download Resume
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4 h-4"
          />
        </a>
      </div>
    </div>
  );
};

export default About;





