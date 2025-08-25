// src/sections/About.jsx
import React, { useEffect, useRef } from "react";

const About = () => {
  const canvasRef = useRef(null);
  
  // Education data
  const education = [
    {
      institution: "Sabaragamuwa University of Sri Lanka",
      degree: "Bsc (honours) Computer Science and Technology",
      period: "2021-Present"
    }
  ];

  // Skills with proper icons (using SVG icons from Heroicons or similar)
  const skills = [
    { name: "React", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M16.5 7.5h-9v9h9v-9z" />
        <path fillRule="evenodd" d="M8.25 6.75A1.5 1.5 0 0 1 9.75 5.25h4.5a1.5 1.5 0 0 1 1.5 1.5v4.5a1.5 1.5 0 0 1-1.5 1.5h-4.5a1.5 1.5 0 0 1-1.5-1.5v-4.5z" clipRule="evenodd" />
        <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-15zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h15z" />
      </svg>
    ) },
    { name: "Node.js", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    ) },
    { name: "Express", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
      </svg>
    ) },
    { name: "MongoDB", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
      </svg>
    ) },
    { name: "TailwindCSS", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036.258a2.625 2.625 0 001.91 1.91l.258 1.036a.75.75 0 01.728.568z" clipRule="evenodd" />
      </svg>
    ) },
    { name: "JavaScript", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
      </svg>
    ) },
    { name: "HTML5", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
      </svg>
    ) },
    { name: "CSS3", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm3-1.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0V9z" clipRule="evenodd" />
      </svg>
    ) },
    { name: "Git", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.627 1.33.35.394.82.645 1.33.727.384.057.76.293 1.027.64.266.347.352.78.232 1.184a4.5 4.5 0 01-2.266 2.77.75.75 0 01-.843-1.236 3 3 0 001.477-1.56.75.75 0 00-.73-.93 2.745 2.745 0 01-1.947-2.287 3.75 3.75 0 00-6.925-.298.75.75 0 01-1.385-.57A5.25 5.25 0 0112 6.75zM4.912 7.85a.75.75 0 01.14 1.248c-.125.125-.27.222-.426.283-.43.17-.865.314-1.302.428a.75.75 0 01-.408-1.445c.432-.122.865-.264 1.29-.425a4.243 4.243 0 01.706-.281zM7.5 11.4a.75.75 0 01.488-.18c.394.04.785.107 1.172.198a.75.75 0 11-.332 1.452 7.693 7.693 0 00-1.017-.186.75.75 0 01-.311-.284z" clipRule="evenodd" />
      </svg>
    ) },
    { name: "TypeScript", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    ) },
    { name: "Python", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    ) },
    { name: "AWS", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
      </svg>
    ) }
  ];

  // Background animation with canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const circles = [];
    const colors = [
      'rgba(59, 130, 246, 0.1)',
      'rgba(139, 92, 246, 0.1)',
      'rgba(14, 165, 233, 0.1)',
      'rgba(236, 72, 153, 0.1)'
    ];
    
    // Create circles
    for (let i = 0; i < 8; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 60 + 20,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
        
        // Update position
        circle.x += circle.dx;
        circle.y += circle.dy;
        
        // Bounce off walls
        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
          circle.dx = -circle.dx;
        }
        
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
          circle.dy = -circle.dy;
        }
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Animated background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background, skills, and experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Who I Am
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I am a passionate Full-Stack Developer with expertise in modern web technologies. 
                I specialize in building responsive, scalable, and user-friendly web applications 
                that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With a strong foundation in both front-end and back-end development, 
                I enjoy turning complex problems into simple, beautiful solutions.
              </p>
            </div>
            
            {/* Education Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                Education
              </h3>
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="mb-6 p-5 bg-gray-50 dark:bg-gray-700 rounded-xl border-l-4 border-blue-500 last:mb-0 transition-all duration-300 hover:translate-x-1"
                >
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-500 dark:text-blue-400 font-medium mt-1">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="text-blue-500 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {/*<div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-500 dark:text-blue-400">3+</div>
                <div className="text-gray-600 dark:text-gray-300 mt-1">Years Experience</div>
              </div>*/}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-500 dark:text-purple-400">20+</div>
                <div className="text-gray-600 dark:text-gray-300 mt-1">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;