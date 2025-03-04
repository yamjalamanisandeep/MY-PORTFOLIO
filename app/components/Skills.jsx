
import React from "react";
import { motion } from "framer-motion";
import { skillsData, experienceData } from "@/assets/assets";

const SkillsExperience = () => {
  return (
    <section id="skills" className="w-11/12 max-w-6xl mx-auto py-20 ml-6 dark:bg-darkTheme dark:text-white">
      {/* Section Title */}
      <motion.h2
        className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-14 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // Ensures the animation only happens once
      >
        Skills & Experience
      </motion.h2>

      {/* Layout: Left (Skills) | Right (Experience) */}
      <div className="grid grid-cols-1 md:grid-cols-[36%_64%] gap-12">
        {/* 🎯 Left Side - Skills */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Ensures the animation only happens once
        >
          <h3 className="text-4xl font-semibold text-blue-700 dark:text-yellow-400 mb-2">Skills</h3>

          <div className="space-y-2">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }} // Ensures the animation only happens once
              >
                {/* Skill Name & Percentage */}
                <div className="flex justify-between items-center">
                  <p className="text-lg font-small text-gray-900 dark:text-white">{skill.skill}</p>
                  <p className="text-sm font-small text-gray-700 dark:text-gray-300">{skill.level}%</p>
                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <motion.div
                    className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-700 dark:from-yellow-500 dark:to-yellow-600 rounded-full shadow-md"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }} // Ensures the animation only happens once
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🏆 Right Side - Experience */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Ensures the animation only happens once
        >
          <h3 className="text-4xl font-semibold text-blue-700 dark:text-yellow-400 mb-4">Experience</h3>

          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                className="p-5 bg-gray-50 dark:bg-gray-700 border-l-4 border-blue-600 dark:border-yellow-500 shadow-sm rounded-lg hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }} // Ensures the animation only happens once
              >
                <h4 className="text-3xl font-bold text-gray-900 dark:text-yellow-400">{exp.role} </h4>
                <p className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
                  {exp.company} • {exp.year}
                </p>
                <p className="text-xm text-gray-600 dark:text-gray-400">{exp.location}</p>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {exp.description.map((desc, i) => (
                    <li className="text-base" key={i}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsExperience;
