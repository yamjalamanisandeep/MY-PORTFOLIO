
import { assets } from '@/assets/assets';
import Image from 'next/image';
import ThemeToggle from "./ThemeToggle";
import React, { useRef, useState, useEffect } from 'react';

const Navbar = () => {
    const sideMenuRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isDarkMode, setIsDarkMode] = useState(false); // Track theme state

    useEffect(() => {
        // Read theme from localStorage when the component mounts
        const savedTheme = localStorage.getItem("theme") || "light";
        setIsDarkMode(savedTheme === "dark");
    }, []);

    const openMenu = () => {
        setMenuOpen(true);
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(0)";
        }
    };

    const closeMenu = () => {
        setMenuOpen(false);
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(100%)"; 
        }
    };

    // Detect active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'certificates'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.getBoundingClientRect().top <= 100 && element.getBoundingClientRect().bottom >= 100) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle theme change
    const handleThemeChange = (isDark) => {
        setIsDarkMode(isDark);
    };

    return (
        <>
            {/* Background Color Overlay */}
            <div className="fixed top-0 left-0 w-full h-16 bg-white/80 dark:bg-darkTheme/80 backdrop-blur-lg z-[1000]"></div>

            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-[1000] bg-white dark:bg-darkTheme text-gray-900 dark:text-white">
                
                {/* Logo / Name */}
                <a href="#home" className="text-2xl font-bold cursor-pointer hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-300">
                    MANI SANDEEP
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/80 dark:bg-gray-900/80 shadow-sm backdrop-blur-lg border border-white dark:border-gray-700">
                    {['home', 'about', 'skills', 'projects', 'certificates'].map((section) => (
                        <li key={section}>
                            <a 
                                className={`font-Outfit hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-300 ${activeSection === section ? 'border-b-2 border-blue-600 dark:border-yellow-400 font-bold' : ''}`} 
                                href={`#${section}`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>  

                {/* Mobile Menu Toggle Button (Hamburger Icon) */}
                <div className="md:hidden cursor-pointer" onClick={openMenu}>
                    <Image
                        src={isDarkMode ? assets.menu_white : assets.menu_black} // Switch based on theme
                        alt="Menu"
                        width={24}
                        height={24}
                        className="w-6 hover:opacity-75 transition-opacity duration-300"
                    />
                </div>

                {/* Mobile Menu */}
                <ul 
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-[1100] h-screen bg-blue-50 dark:bg-gray-900 transition-transform duration-300 translate-x-full"
                >
                    <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
                        <Image
                            src={isDarkMode ? assets.close_white : assets.close_black} // Switch based on theme
                            alt="Close"
                            width={20}
                            height={20}
                            className="w-5 cursor-pointer hover:opacity-75 transition-opacity duration-300"
                        />
                    </div>
                    {['home', 'about', 'skills', 'projects', 'certificates'].map((section) => (
                        <li key={section}>
                            <a 
                                className={`font-Ovo hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-300 ${activeSection === section ? 'border-b-2 border-blue-600 dark:border-yellow-400' : ''}`} 
                                onClick={closeMenu} 
                                href={`#${section}`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Theme Toggle & Contact Button */}
                <div className="flex items-center gap-4">
                    <ThemeToggle onThemeChange={handleThemeChange} />
                    <a 
                        href="#contact" 
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-yellow-500 rounded-full ml-4 font-Outfit hover:bg-blue-600 dark:hover:bg-yellow-500 hover:text-white dark:hover:text-gray-900 hover:border-blue-600 dark:hover:border-yellow-500 transition-colors duration-300"
                    >
                        Contact
                        <Image
                            src={assets.arrow_icon || '/images/fallback-arrow-icon.png'}
                            alt="Arrow"
                            width={12}
                            height={12}
                            className='w-3'
                        />
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
