"use client";
import React from 'react';

const HyperflexaiLanding = () => {
  return (
    <>
      <section className="relative bg-secondary w-full py-12 sm:py-16 md:py-24 lg:py-36 pt-20 sm:pt-16 md:pt-24 lg:pt-36 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 md:w-40 md:h-40 bg-secondary/20 rounded-full"></div>
          <div className="absolute top-60 right-32 w-24 h-24 md:w-32 md:h-32 bg-secondary/15 rounded-full"></div>
          <div className="absolute bottom-40 left-1/3 w-36 h-36 md:w-48 md:h-48 bg-secondary/25 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 md:w-24 md:h-24 bg-secondary/10 rounded-full"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-16 w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full animate-pulse"></div>
          <div className="absolute top-48 right-20 w-1 h-1 md:w-2 md:h-2 bg-white/60 rounded-full animate-bounce"></div>
          <div className="absolute bottom-56 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-secondary/80 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         {/* Enhanced Logo with glow effect - Alternative Flex approach */}
<div className="absolute top-1 left-0 right-0 flex justify-center z-30">
  <div className="relative">
    <img
      src="/Hyperflx.svg"
      alt="Colowatch Logo"
      className="w-32 h-auto drop-shadow-lg"
    />
    <div className="absolute inset-0 w-32 h-auto bg-secondary/20 rounded-lg blur-xl -z-10"></div>
  </div>
</div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 pt-16 lg:pr-8">
            {/* Enhanced Text Card with Brand Colors */}
            <div className="w-full lg:w-4/12 xl:w-5/12 bg-gradient-to-br from-secondary/40 via-secondary/60 to-secondary/80 backdrop-blur-xl border border-primary/20 p-6 sm:p-8 lg:p-6 xl:p-8 rounded-xl sm:rounded-3xl text-primary z-20 lg:-mr-20 xl:-mr-32 order-2 lg:order-1 lg:self-end shadow-2xl shadow-secondary/25 hover:scale-105 transition-all duration-500 relative overflow-hidden lg:ml-4">
              
              {/* Corner Decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
              
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-4 sm:mb-6">
                <span className="text-primary text-sm font-medium">— Educational AI Technology —</span>
              </div>

              {/* Enhanced Heading with Gradient Text */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-4 xl:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary-400 to-secondary bg-clip-text text-transparent">
                  AI-Powered
                </span>{" "}
                Search Engine for{" "}
                <span className="text-primary">Education</span>
              </h1>
              
              {/* Decorative underline */}
              <div className="w-16 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mb-4 sm:mb-6"></div>
              
              {/* Enhanced Paragraph */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full hidden sm:block"></div>
                <p className="text-sm sm:text-base md:text-lg lg:text-sm xl:text-lg w-full sm:w-[95%] lg:w-[95%] xl:w-[85%] leading-relaxed text-primary/90 sm:pl-6 font-light">
                  <span className="text-primary font-medium">Hyperflx.AI</span> is a search engine focused on <span className="text-primary font-medium">academic research</span>. It simplifies learning by delivering organized, accurate, and relevant <span className="text-primary font-medium">educational information</span>.
                </p>
              </div>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
            </div>

            {/* Enhanced Full-cover Image */}
            <div className="w-full lg:w-5/12 xl:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[320px] xl:h-[500px] overflow-hidden rounded-xl sm:rounded-3xl shadow-2xl z-10 order-1 lg:order-2 lg:ml-2 relative group">
              {/* Image container with enhanced effects */}
              <div className="relative h-full">
                <img
                  src="/CaseStudies/hyperflex.jpg"
                  alt="Hyperflx AI search engine interface"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 via-transparent to-secondary/20 group-hover:from-secondary/20 group-hover:to-secondary/30 transition-all duration-500"></div>
                
                {/* Floating tech elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 3A6.5 6.5 0 0116 9.5c0 1.61-.59 3.09-1.56 4.23l4.27 4.27-1.41 1.41-4.27-4.27A6.5 6.5 0 019.5 16 6.5 6.5 0 013 9.5 6.5 6.5 0 019.5 3m0 2C7.01 5 5 7.01 5 9.5S7.01 14 9.5 14 14 11.99 14 9.5 11.99 5 9.5 5z"/>
                  </svg>
                </div>
                
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                
                {/* Enhanced border with glow effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Decoration */}
        <div className="absolute bottom-0 right-0 opacity-20">
          <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
        </div>

        {/* Custom CSS for Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-6px) rotate(2deg); }
            66% { transform: translateY(-3px) rotate(-1deg); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default HyperflexaiLanding;
