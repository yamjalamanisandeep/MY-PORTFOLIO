import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import the Image component
import { certificatesData } from "@/assets/assets"; // Import certificates data

const Certificates = () => {
  return (
    <div id="certificates" className="w-11/12 max-w-6xl mx-auto py-16 scroll-mt-16">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // Ensures the animation only happens once
      >
        Certificates
      </motion.h2>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((certificate, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }} // Ensures the animation only happens once
          >
            {/* Certificate Image */}
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={certificate.image || "/images/certificate-fallback.jpg"} // Fallback image
                alt={certificate.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Certificate Name */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-yellow-400 mb-2">
              {certificate.name}
            </h3>

            {/* Issuing Organization */}
            <p className="text-sm text-gray-600 dark:text-gray-100 mb-2">
              <span className="font-medium">Issued by:</span> {certificate.organization}
            </p>

            {/* Issue Date */}
            <p className="text-sm text-gray-600 dark:text-gray-100 mb-4">
              <span className="font-medium">Date:</span> {certificate.date}
            </p>

            {/* Certificate Link */}
            {certificate.link && (
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-yellow-400 dark:hover:text-blue-300 transition duration-300 flex items-center gap-1"
              >
                <span>View Certificate</span>
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
