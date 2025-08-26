// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import resume from "../assets/U.K. Vittahachchi.pdf";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 10;
          setScrolled(isScrolled);

          const sections = ["home", "about", "projects", "contact"];
          const scrollPosition = window.scrollY + 100;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const offsetTop = element.offsetTop;
              const offsetBottom = offsetTop + element.offsetHeight;

              if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add smooth scrolling behavior to the whole page
    document.documentElement.style.scrollBehavior = "smooth";
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome className="text-lg" /> },
    { id: "about", label: "About", icon: <FaUser className="text-lg" /> },
    { id: "projects", label: "Projects", icon: <FaCode className="text-lg" /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope className="text-lg" /> },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={18} />,
      url: "https://github.com/ukvittahachchi",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={18} />,
      url: "https://www.linkedin.com/in/umindu-kethaka-5b828133a/",
      label: "LinkedIn",
    },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Umindu-Kethaka-Resume.pdf";
    link.click();
  };

  return (
    <nav
      className={`fixed w-full transition-all duration-500 z-50 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={400} // Reduced from 800ms to 400ms
            offset={-80}
            className="text-xl sm:text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            UminduLabs
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={400} // Reduced from 800ms to 400ms
                offset={-80} // Adjusted for fixed header
                spy={true}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            ))}

            {/* Social Links */}
            <div className="flex items-center mx-2 border-l border-gray-200 dark:border-gray-700 pl-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <button
              onClick={handleResumeDownload}
              className="ml-2 flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaFileDownload className="mr-2" />
              Resume
            </button>

            {/* Dark Mode */}
            <div className="ml-2">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <DarkModeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          mobileOpen
            ? "max-h-screen opacity-100 bg-white dark:bg-gray-900 shadow-xl"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 border-t border-gray-200 dark:border-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={400} // Reduced from 800ms to 400ms
              offset={-80} // Adjusted for fixed header
              spy={true}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center px-4 py-3 rounded-lg text-base sm:text-lg transition-all duration-300 ${
                activeSection === item.id
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-medium"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          ))}

          {/* Social Links */}
          <div className="flex justify-center space-x-5 pt-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="px-4 pt-3">
            <button
              onClick={() => {
                handleResumeDownload();
                setMobileOpen(false);
              }}
              className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
            >
              <FaFileDownload className="mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;