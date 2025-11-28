"use client";
import React from "react";
import Link from "next/link";
const Landing = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-primary overflow-hidden">
      {/* Interactive 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        
        {/* Gradient overlay for better text readability */}
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            background: `linear-gradient(135deg, rgba(0, 37, 62) 0%, rgba(0, 37, 62) 30%, rgba(0, 37, 62) 70%, rgba(0, 37, 62) 100%)`,
          }}
        ></div>

        {/* Enhanced animated blob shapes */}
        {/* <div className="absolute inset-0 z-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-secondary/10 rounded-full animate-blob blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-secondary/15 rounded-full animate-blob animation-delay-2000 blur-lg"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-secondary/8 rounded-full animate-blob animation-delay-4000 blur-2xl"></div>
        </div> */}

        {/* Enhanced stars effect */}
        <div className="absolute inset-0 z-20">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-secondary rounded-full opacity-50 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-70 animate-pulse animation-delay-3000"></div>
          <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse animation-delay-4000"></div>
          <div className="absolute top-3/4 left-1/5 w-0.5 h-0.5 bg-secondary rounded-full opacity-60 animate-pulse animation-delay-1500"></div>
        </div>
      </div>

      {/* Content Container with higher z-index */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left Side - Text Content */}
          <div className="w-full text-center md:text-left pt-12 md:pt-0">
            
            {/* Enhanced Heading Container */}
            <div className="heading-container mb-8 pt-16 sm:pt-16 md:pt-24 lg:pt-24 xl:pt-28">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="text-white">AI </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                    Leads
                  </span>
                  {/* Decorative underline */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
                </span>
                <span className="text-white"> the Change</span>
                
                {/* Floating accent */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              </h1>
            </div>

            {/* Enhanced Paragraph Container */}
            <div className="paragraph-container mb-10 sm:mb-12 w-full lg:w-[70vw] xl:w-[70vw]">
              <p className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-white/90 font-light">
               Empowering organizations to    <span className="">adapt, evolve, </span> 
                 <span className="font-medium">and thrive in the </span> AI-driven era.
              </p>
              
              {/* Decorative line */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent mt-6 rounded-full"></div>
            </div>

            {/* Enhanced Button Container */}
            <div className="button-container mb-6 sm:mb-8 flex justify-center md:justify-start">
              <Link href="/contact-ai-solutions">
                <button
                  type="button"
                  className="flex justify-center gap-4 items-center shadow-2xl text-base bg-transparent backdrop-blur-md font-semibold isolation-auto border-secondary/50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-secondary hover:text-primary before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2 rounded-full group text-white hover:shadow-secondary/25 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <span className="font-semibold tracking-wide">Start Consulting</span>
                  <svg
                    className="w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-white group-hover:border-none p-1 rotate-45 group-hover:scale-110"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-white group-hover:fill-primary"
                    />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Additional Stats or Features */}
            <div className="flex justify-center md:justify-start items-center space-x-6 lg:space-x-8 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span>AI Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse animation-delay-1000"></div>
                <span>Future Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse animation-delay-2000"></div>
                <span>Industry Leading</span>
              </div>
            </div>
          </div>          
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

      `}</style>
    </section>
  );
};

export default Landing;
