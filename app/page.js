'use client';
import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle"; // Import ThemeToggle

export default function Home() {
  return (
    <div className="bg-white dark:bg-darkTheme min-h-screen">
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}
