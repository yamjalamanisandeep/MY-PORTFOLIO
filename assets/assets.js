import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import arrow_icon from './arrow-icon.png';
import sandypp from "./sandypp.jpg";
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import portfolio_pic from './portfolio.png';
import ibm from './ibm.png';
import cforage from './cforage.png';
import sforage from './sforage.png';
import netflixclone from './netflic-clone.png'

export const assets = {
    download_icon,
    hand_icon,
    menu_black,
    menu_white,
    header_bg_color,
    arrow_icon,
    sandypp,
    close_black,
    close_white,
    portfolio_pic,
    ibm,
    cforage,
    sforage,
    netflixclone,
};



export const infoList = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      college: "GITAM (Deemed to be University),Visakhapatnam",
      year: "📅 2022 - Present",
      grade:"CGPA: 8.36",
    },
    {
      degree: "Intermediate (Class 12)",
      college: "Sri Chaitanya Junior College,Hyderabad",
      year: "📅 2020 - 2022",
      grade:"Percentage: 94%",
    },
    {
      degree: "Secondary Education (Class 10)",
      college: "Geetanjali High School,Hyderabad",
      year: "📅 2019 - 2020",
      grade:"Percentage: 73%",
    },
  ];

  export const skillsData = [
    { skill: "C", level: 80 },
    { skill: "Python", level: 70 },
    { skill: "Java", level: 70 },
    { skill: "Data Structures & Algorithms", level: 60 },
    { skill: "SQL", level: 70 },
    { skill: "Frontend (HTML, CSS, JavaScript)", level: 80 },
    { skill: "React.js", level: 75 },
    { skill: "Backend (Node.js, Express.js)", level: 70 },
    { skill: "Full-Stack Development (MERN)", level: 65 }
];

  
  export const experienceData = [
    {
        role: "Salesforce Trainee",
        company: "PwC Launchpad - PwC",
        year: "02/2025 – Present",
        location: "Remote,India",
        description: [
          "Selected for the PwC Salesforce Launchpad, an exclusive learning program designed to enhance skills in Salesforce technologies.",
          "Gaining hands-on experience in Salesforce development, configuration, and administration.",
          "Collaborating with teams to solve real-world business problems using Salesforce.",
          "Learning best practices for implementing and customizing Salesforce solutions.",
        ],
      },
    {
        role: "Web Developer Intern",
        company: "Prodigy InfoTech",
        year: "01/2025 – 02/2025",
        location: "Remote, India",
        description: [
            "Designed and developed dynamic web applications using HTML, CSS, JavaScript, and React.",
            "Integrated RESTful APIs and managed PostgreSQL databases for seamless data operations.",
            "Optimized web performance and ensured cross-browser compatibility for a smooth user experience.",  
            "Collaborated with developers and designers to build scalable and maintainable web solutions.",
            "Implemented authentication and authorization mechanisms to enhance security.",
            "Worked with JSON data structures and handled asynchronous requests using Fetch and Axios.",

        ],
    },
    
];

export const projectsData = [
    {
      name: "Portfolio Website",
      description:
        "A personal portfolio website built with React.js and Tailwind CSS to showcase my skills, projects, and experience.",
      technologies: ["React.js", "Tailwind CSS", "Next.js","Node.js"],
      liveLink: "https://my-portfolio-git-main-yamjala-mani-sandeeps-projects.vercel.app/",
      codeLink: "https://github.com/yamjalamanisandeep/MY-PORTFOLIO",
      image: portfolio_pic,
    },
    {
      name: "Netflix-Clone",
      description:
        "A Netflix Clone built using HTML, CSS, and JavaScript.It features a responsive, user-friendly UI with seamless API integration for dynamic content and trailer previews. 🚀",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      liveLink: "https://netflix-clone-git-main-yamjala-mani-sandeeps-projects.vercel.app/",
      codeLink: "https://github.com/yamjalamanisandeep/NETFLIX-CLONE",
      image: netflixclone, 
    },
    
  ];



  export const certificatesData = [
    {
      name: "IBM Full-Stack JavaScript Developer",
      organization: "Coursera",
      date: "January 4th, 2025",
      image: ibm, // Path to the certificate image
      link: "https://www.coursera.org/account/accomplishments/professional-cert/E40CJ4DWQFMG", 
      description: [
        "Completed practical tasks in:",
        "- Set Project Priorities",
        "- Choose Your Language",
        "- Assemble a Plan",
        "- Prioritization & Impact Assessment",
        "- User Journey Redesign",
        "- Outcomes Analysis",
        "- Fix the Errors",
      ],
      
    },
    {
      name: "Accenture Consultant Job Simulation",
      organization: "Forage (in collaboration with Accenture)",
      date: "January 19th, 2025",
      image: cforage, // Path to the certificate image
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/KJGjQRHZ6eGquTKfF_xhih9yFWsf6AYfngd_MjuJwzsijoyGxJ8Kz_1737273828215_completion_certificate.pdf", 
      description: [
        "Completed practical tasks in:",
        "- Set Project Priorities",
        "- Choose Your Language",
        "- Assemble a Plan",
        "- Prioritization & Impact Assessment",
        "- User Journey Redesign",
        "- Outcomes Analysis",
        "- Fix the Errors",
      ],
      
    },
    {
      name: "Accenture Software	Engineering	Job	Simulation",
      organization: "Forage (in collaboration with Accenture)",
      date: "January 23rd, 2025",
      image: sforage, // Path to the certificate image
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_MjuJwzsijoyGxJ8Kz_1737657253408_completion_certificate.pdf", 
      description: [
        "Completed practical tasks in:",
        "- Set Project Priorities",
        "- Choose Your Language",
        "- Assemble a Plan",
        "- Prioritization & Impact Assessment",
        "- User Journey Redesign",
        "- Outcomes Analysis",
        "- Fix the Errors",
      ],
      
    },
    
  
  ];