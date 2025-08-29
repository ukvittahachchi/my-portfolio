// sections/Hero.jsx
import { useState, useEffect, useRef } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import profileImg from "../assets/Profile.png"; // replace with your own image
import profileImgLight from "../assets/Profile-dark.png"; // optional: different image for light mode

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);
  const [darkMode, setDarkMode] = useState(false);
  const toRotate = ["Full Stack Developer","Web Developer", "UI/UX Designer"];

  useEffect(() => {
    // Check for dark mode preference
    const isDark = localStorage.theme === "dark" || 
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setDarkMode(isDark);
    setIsVisible(true);
    
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  // Listen for theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setDarkMode(mediaQuery.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-16 pt-20 md:pt-24 pb-12 overflow-hidden relative transition-colors duration-300 ${
        darkMode 
          ? "bg-gradient-to-br from-[#0b0d17] to-[#1a1d36] text-white" 
          : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {darkMode ? (
          <>
            <div className="absolute top-1/4 left-1/4 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-bounce-slow"></div>
            <div className="absolute top-3/4 left-1/2 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-cyan-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-ping-slow"></div>
          </>
        ) : (
          <>
            <div className="absolute top-1/4 left-1/4 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-bounce-slow"></div>
            <div className="absolute top-3/4 left-1/2 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-ping-slow"></div>
          </>
        )}
      </div>

      {/* Grid pattern overlay */}
      <div className={`absolute inset-0 bg-grid-pattern ${
        darkMode ? "opacity-10" : "opacity-5"
      }`}></div>

      {/* Top: Profile for mobile, Left for desktop */}
      <div className={`flex-1 flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} order-1 md:order-1 mb-8 md:mb-0`}>
        <div className="relative">
          <div className={`absolute -inset-4 sm:-inset-5 md:-inset-6 rounded-full opacity-70 blur-lg animate-pulse ${
            darkMode 
              ? "bg-gradient-to-r from-blue-500 to-purple-600" 
              : "bg-gradient-to-r from-blue-300 to-purple-400"
          }`}></div>
          <div className={`relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl z-10 border-4 hover:scale-105 transition-transform duration-700 ${
            darkMode ? "border-[#0b0d17]" : "border-white"
          }`}>
            <img
              src={darkMode ? profileImg : (profileImgLight || profileImg)}
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className={`absolute -bottom-2 -right-2 text-xs font-bold px-3 py-1 md:px-4 md:py-2 rounded-full z-20 shadow-md flex items-center ${
            darkMode 
              ? "bg-gradient-to-r from-blue-500 to-purple-600" 
              : "bg-gradient-to-r from-blue-400 to-purple-500 text-white"
          }`}>
            <span className="flex h-2 w-2 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                darkMode ? "bg-green-400" : "bg-green-500"
              } opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                darkMode ? "bg-green-500" : "bg-green-600"
              }`}></span>
            </span>
            <span className="ml-2">AVAILABLE</span>
          </div>
        </div>
      </div>

      {/* Bottom: Info for mobile, Right for desktop */}
      <div className={`flex-1 md:ml-16 space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} order-2 md:order-2 text-center md:text-left`}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-text">Umindu</span>,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" ref={textRef}>
            {text}
          </span>
          <span className="blinking-cursor">|</span>
        </h1>
        
        <p className={`max-w-lg text-base sm:text-lg leading-relaxed mx-auto md:mx-0 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}>
          I create engaging, user-friendly websites and applications with modern technologies. 
          Let's bring your digital ideas to life with innovative solutions.
        </p>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 py-4">
          <div className={`p-4 sm:p-5 rounded-xl border-l-4 border-blue-500 transition-all duration-300 group hover:shadow-lg ${
            darkMode 
              ? "bg-gray-800/50 hover:bg-gray-800/70" 
              : "bg-white/70 hover:bg-white border-blue-400"
          }`}>
            <div className="flex items-center mb-3">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform ${
                darkMode ? "bg-blue-500/20" : "bg-blue-100"
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 sm:h-5 sm:w-5 ${
                  darkMode ? "text-blue-400" : "text-blue-500"
                }`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-base sm:text-lg">ABOUT ME</h3>
            </div>
            <p className={`text-xs sm:text-sm mb-3 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}>Learn more about my skills and experience</p>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={`inline-flex items-center transition-colors cursor-pointer group-hover:translate-x-1 text-sm sm:text-base ${
                darkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-500 hover:text-blue-600"
              }`}
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className={`p-4 sm:p-5 rounded-xl border-l-4 border-purple-500 transition-all duration-300 group hover:shadow-lg ${
            darkMode 
              ? "bg-gray-800/50 hover:bg-gray-800/70" 
              : "bg-white/70 hover:bg-white border-purple-400"
          }`}>
            <div className="flex items-center mb-3">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform ${
                darkMode ? "bg-purple-500/20" : "bg-purple-100"
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 sm:h-5 sm:w-5 ${
                  darkMode ? "text-purple-400" : "text-purple-500"
                }`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-base sm:text-lg">MY WORK</h3>
            </div>
            <p className={`text-xs sm:text-sm mb-3 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}>Explore my portfolio of projects</p>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={`inline-flex items-center transition-colors cursor-pointer group-hover:translate-x-1 text-sm sm:text-base ${
                darkMode ? "text-purple-400 hover:text-purple-300" : "text-purple-500 hover:text-purple-600"
              }`}
            >
              Browse Portfolio
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Socials */}
        <div className="pt-4">
          <h3 className="text-base sm:text-lg font-semibold mb-3 flex items-center justify-center md:justify-start">
            FOLLOW ME
            <span className={`ml-2 w-8 sm:w-12 h-px inline-block ${
              darkMode 
                ? "bg-gradient-to-r from-blue-500 to-purple-500" 
                : "bg-gradient-to-r from-blue-400 to-purple-400"
            }`}></span>
          </h3>

          <div className="flex gap-3 sm:gap-4 md:gap-5 text-xl sm:text-2xl justify-center md:justify-start">
            {[
              { 
                icon: <FaTwitter className={darkMode ? "text-white" : "text-white"} />, 
                url: "https://x.com/UminduK", 
                darkColor: "bg-blue-500", 
                lightColor: "bg-blue-500" 
              },
              { 
                icon: <FaLinkedin className={darkMode ? "text-white" : "text-white"} />, 
                url: "https://www.linkedin.com/in/umindu-kethaka-5b828133a/", 
                darkColor: "bg-blue-700", 
                lightColor: "bg-blue-600" 
              },
              { 
                icon: <FaFacebook className={darkMode ? "text-white" : "text-white"} />, 
                url: "https://www.facebook.com/umindu.kethaka.2025/", 
                darkColor: "bg-blue-800", 
                lightColor: "bg-blue-700" 
              },
              { 
                icon: <FaGithub className={darkMode ? "text-white" : "text-white"} />, 
                url: "https://github.com/ukvittahachchi", 
                darkColor: "bg-gray-700", 
                lightColor: "bg-gray-800" 
              }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:scale-110 ${
                  darkMode 
                    ? `${social.darkColor} text-white` 
                    : `${social.lightColor} text-white`
                }`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="absolute bottom-6 md:bottom-8 cursor-pointer animate-bounce"
      >
        <div className={`p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all group ${
          darkMode 
            ? "bg-gradient-to-r from-blue-500 to-purple-600" 
            : "bg-gradient-to-r from-blue-500 to-purple-500"
        }`}>
          <FaArrowDown className="text-sm sm:text-base group-hover:animate-bounce text-white" />
        </div>
      </Link>

      <style jsx="true">{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 8s infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-text {
          background-size: 200% auto;
          animation: text-shimmer 3s linear infinite;
        }
        
        .blinking-cursor {
          animation: blink 1s step-end infinite;
          margin-left: 2px;
        }
        
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        @media (max-width: 640px) {
          .bg-grid-pattern {
            background-size: 20px 20px;
          }
        }
      `}</style>
    </section>
  );
}