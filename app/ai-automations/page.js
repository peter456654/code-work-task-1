"use client"
import React, { useState, useEffect } from 'react';
import { FiStar, FiZap, FiCpu, FiChevronDown } from 'react-icons/fi';

export default function LaunchPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-[#050d2b] via-[#081236] to-[#050c25] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M50 0 L50 50 M0 50 L200 50 M150 50 L150 100 M50 100 L150 100 M100 100 L100 150 M50 150 L150 150" 
                      stroke="#1ddfea" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="50" r="4" fill="#1ddfea"/>
                <circle cx="150" cy="50" r="4" fill="#1ddfea"/>
                <circle cx="50" cy="150" r="4" fill="#1ddfea"/>
                <circle cx="150" cy="150" r="4" fill="#1ddfea"/>
                <circle cx="100" cy="100" r="4" fill="#1ddfea"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#1ddfea] opacity-20 animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}

        {/* Glowing Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-[#1ddfea] opacity-5 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
            top: '10%',
            left: '20%',
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full bg-[#1ddfea] opacity-5 blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
            bottom: '10%',
            right: '20%',
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full bg-[#1ddfea] opacity-10 blur-3xl"
          style={{
            top: '40%',
            left: '60%',
            filter: 'blur(80px)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        
        {/* Logo Section */}
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
          <div className="mb-8 flex flex-col items-center">
            {/* C Logo */}
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1ddfea] to-[#0ea5b0] flex items-center justify-center shadow-lg shadow-[#1ddfea]/30">
                <span className="text-5xl font-bold text-[#050c25]">C</span>
              </div>
              <div className="absolute -inset-2 rounded-full bg-[#1ddfea] opacity-20 blur-xl animate-pulse" />
            </div>
            
            {/* CODEWORK Text */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-2 bg-gradient-to-r from-[#1ddfea] to-[#0ea5b0] bg-clip-text text-transparent">
              CODEWORK
            </h1>
            <p className="text-gray-300 text-sm md:text-base tracking-wide">
              Transforming ideas into digital realities
            </p>
          </div>
        </div>

        {/* Launching Soon Text */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <h2 className="text-6xl md:text-8xl font-serif italic mb-4 bg-gradient-to-r from-white to-[#a7fff7] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(29,223,234,0.4)]">
            Launching
          </h2>
          <h2 className="text-6xl md:text-8xl font-serif italic bg-gradient-to-r from-white to-[#a7fff7] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(29,223,234,0.4)]">
            soon!
          </h2>
        </div>

        {/* 100 AI Automations Section */}
        <div 
          className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-6 bg-gradient-to-r from-[#050c25]/80 to-[#0a1642]/80 backdrop-blur-sm px-8 py-6 rounded-2xl border border-[#1ddfea]/40 shadow-2xl shadow-[#1ddfea]/30">
            
            {/* AI Icon */}
            <div className="relative">
              <div className="w-20 h-20 border-4 border-[#1ddfea] rounded-xl flex items-center justify-center relative overflow-hidden bg-[#050c25]">
                <FiCpu className="w-10 h-10 text-[#1ddfea]" />
                
                {/* Animated corner lines */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#1ddfea]" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#1ddfea]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#1ddfea]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#1ddfea]" />
              </div>
              
              {/* Pulse effect */}
              <div className="absolute inset-0 border-4 border-[#1ddfea] rounded-xl animate-ping opacity-20" />
            </div>

            {/* Text */}
            <div className="text-left">
              <div className="flex items-baseline gap-3">
                <span className="text-7xl md:text-8xl font-bold text-white drop-shadow-[0_0_8px_rgba(29,223,234,0.35)]">100</span>
                <span className="text-2xl md:text-3xl font-bold text-[#ffc107]">∞</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#ffc107] tracking-wide drop-shadow-[0_0_6px_rgba(255,193,7,0.3)]">
                Automations
              </h3>
            </div>
          </div>
        </div>

        <div 
          className={`mt-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1ddfea] text-[#050c25] font-semibold shadow-lg shadow-[#1ddfea]/30 hover:shadow-[#1ddfea]/50 transition-all hover:scale-105 border border-[#1ddfea]"
          >
            Get notified
            <FiStar className="w-5 h-5" />
          </a>
        </div>

        {/* Features Grid */}
        <div 
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {[
            { icon: FiStar, text: "AI-Powered Solutions" },
            { icon: FiZap, text: "Lightning Fast" },
            { icon: FiCpu, text: "Smart Automation" }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 p-6 bg-[#050c25]/40 backdrop-blur-sm rounded-xl border border-[#1ddfea]/20 hover:border-[#1ddfea]/50 transition-all hover:scale-105"
            >
              <feature.icon className="w-8 h-8 text-[#1ddfea]" />
              <p className="text-gray-300 text-sm text-center">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FiChevronDown className="w-8 h-8 text-[#1ddfea] opacity-50" />
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050c25] via-[#0a1642]/40 to-transparent" />
    </div>
  );
}