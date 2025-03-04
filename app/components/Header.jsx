import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";

const Header = () => {
  const name = "YAMJALA MANI SANDEEP"; 
  const nameVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 }, 
    }),
  };

  return (
    <div id="home" className="w-11/12 max-w-6xl mx-auto h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 dark:bg-darkTheme">
      
      {/* Left: Text Content */}
      <div className="text-left">
        <motion.h3 
          className="flex items-center gap-2 text-2xl md:text-3xl font-Outfit text-gray-900 dark:text-lightHover"
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          I'm 
          <span className="flex text-blue-600 dark:text-blue-400 font-bold">
            {name.split("").map((letter, i) => (
              <motion.span 
                key={i} 
                custom={i}
                variants={nameVariants}
                initial="hidden"
                animate="visible"
              >
                {letter === " " ? "\u00A0" : letter} 
              </motion.span>
            ))}
          </span>
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </motion.h3>

        <motion.h1 
          className="text-2xl sm:text-4xl lg:text-5xl font-Outfit text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full Stack Web Developer.
        </motion.h1>

        <motion.p 
          className="max-w-xl font-Outfit text-gray-700 dark:text-gray-300 mt-2"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A Pre-Final Year Computer Science Engineering Student.
        </motion.p>

        {/* Social Media Links */}
        <motion.div 
          className="flex gap-6 mt-4 text-2xl"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="https://www.linkedin.com/in/ymanisandeep" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            <FaLinkedin size={36} />
          </a>
          <a href="https://github.com/yamjalamanisandeep" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400">
            <FaGithub size={36}/>
          </a>
          <a href="https://twitter.com/Sandeep25361709" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-500">
            <FaXTwitter size={36} />
          </a>
          <a href="https://www.instagram.com/mr__sanddyyy" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300">
            <FaInstagram size={36} />
          </a>
        </motion.div>
      </div>

      {/* Right: Profile Image */}
  {/* Desktop Profile Image */}

  <motion.div 
  className="hidden md:block w-[320px] h-[320px] mr-[100px] mt-[-10px]"  // Changed mt value
  initial={{ opacity: 0, x: 80 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ duration: 1 }}
>
  <Image 
    src={assets.sandypp} 
    alt="Profile Picture" 
    className="rounded-full "
  />
</motion.div>
{/* Mobile Profile Image */}
<motion.div 
  className="block md:hidden w-[300px] h-[300px] mt-[100px]" 
  initial={{ opacity: 0, x: 80 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ duration: 1 }}
>
  <Image 
    src={assets.sandypp} 
    alt="Profile Picture" 
    className="rounded-full "
  />
</motion.div>




    </div>
  );
};

export default Header;




// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import React from "react";

// const Header = () => {
//   const name = "YAMJALA MANI SANDEEP"; 
//   const nameVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: i * 0.05 }, 
//     }),
//   };

//   return (
//     <div id="home" className="w-11/12 max-w-6xl mx-auto h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 dark:bg-darkTheme">
      
//       {/* Left: Text Content */}
//       <div className="text-left">
//         <motion.h3 
//           className="flex items-center gap-2 text-2xl md:text-3xl font-Outfit text-gray-900 dark:text-lightHover"
//           initial={{ opacity: 0, x: -100 }} 
//           animate={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.8 }}
//         >
//           I'm 
//           <span className="flex text-blue-600 dark:text-blue-400 font-bold">
//             {name.split("").map((letter, i) => (
//               <motion.span 
//                 key={i} 
//                 custom={i}
//                 variants={nameVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {letter === " " ? "\u00A0" : letter} 
//               </motion.span>
//             ))}
//           </span>
//           <Image src={assets.hand_icon} alt="" className="w-6" />
//         </motion.h3>

//         <motion.h1 
//           className="text-2xl sm:text-4xl lg:text-5xl font-Outfit text-gray-800 dark:text-gray-200"
//           initial={{ opacity: 0, x: -100 }} 
//           animate={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           Full Stack Web Developer.
//         </motion.h1>

//         <motion.p 
//           className="max-w-xl font-Outfit text-gray-700 dark:text-gray-300 mt-2"
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           A Pre-Final Year Computer Science Engineering Student.
//         </motion.p>

//         {/* Social Media Links */}
//         <motion.div 
//           className="flex gap-6 mt-4 text-2xl"
//           initial={{ opacity: 0, y: 30 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <a href="https://www.linkedin.com/in/ymanisandeep" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
//             <FaLinkedin size={36} />
//           </a>
//           <a href="https://github.com/yamjalamanisandeep" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400">
//             <FaGithub size={36}/>
//           </a>
//           <a href="https://twitter.com/Sandeep25361709" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-500">
//             <FaXTwitter size={36} />
//           </a>
//           <a href="https://www.instagram.com/mr__sanddyyy" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300">
//             <FaInstagram size={36} />
//           </a>
//         </motion.div>
//       </div>

//       {/* Right: Profile Image */}
//       <motion.div 
//         className="w-full md:w-1/2 lg:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0" 
//         initial={{ opacity: 0, x: 80 }} 
//         animate={{ opacity: 1, x: 0 }} 
//         transition={{ duration: 1 }}
//       >
        
//           <Image 
//             src={assets.sandypp} 
//             alt="Profile Picture" 
//             className="w-full h-full object-cover"
//             width={320} // Set appropriate width
//             height={320} // Set appropriate height
//           />
        
//       </motion.div>

//     </div>
//   );
// };

// export default Header;