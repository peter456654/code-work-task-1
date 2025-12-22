"use client";
import React from "react";

const JoinUsHeader = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-secondary overflow-hidden px-4 py-8">
     

      

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        
        {/* Left Content Section */}
        <div className="w-full lg:w-2/3 text-center lg:pl-10 xl:pl-10 lg:-mt-44 xl:-mt-44 lg:text-left">
          

          {/* Enhanced Heading - Reduced Size */}
          <div className="heading-container mb-6 sm:mb-8 md:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
              <span className="text-primary">Build Your Career with </span>
              <span className="text-primary/90">
                Codework
              </span>
            </h1>
            
            {/* Decorative underline */}
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-4 sm:mt-6 mx-auto lg:mx-0"></div>
          </div>

          {/* Enhanced Paragraph - Reduced Size */}
          <div className="paragraph-container mb-8 sm:mb-10 md:mb-32 max-w-4xl mx-auto lg:mx-0">
            <div className="relative">
              <div className="absolute -left-2 md:-left-3 lg:-left-4 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full hidden lg:block"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg leading-relaxed text-primary/90 lg:pl-6 xl:pl-8 font-light">
                Looking for a career in <span className="text-primary font-medium">AI and technology</span>? 
                Join Codework to innovate, grow, and <span className="text-primary font-medium">shape the future</span>. 
                Upload your resume and take the next step with us.
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual Section - Simple 3 Steps */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <div className="relative">
            {/* Glowing background effect */}
            
            {/* Career Steps Visual - No Background Container */}
            <div className="relative flex flex-col items-center justify-center p-8 sm:p-12 md:p-16">
              
              {/* Step 1: Application */}
              <div className="relative mb-8 sm:mb-12 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-secondary/10 rounded-full flex items-center justify-center shadow-2xl mb-4 hover:scale-110 transition-transform duration-300 border-2 border-primary">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <div className="text-primary">
                  <div className="font-bold text-lg sm:text-xl md:text-2xl mb-2">Apply</div>
                  <div className="text-sm sm:text-base text-primary/80">Submit Resume</div>
                </div>
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-xs sm:text-sm">
                  1
                </div>
              </div>

              {/* Connecting Line */}
              <div className="w-1 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-primary to-primary/80 rounded-full mb-8 sm:mb-12 shadow-lg"></div>

              {/* Step 2: Interview */}
              <div className="relative mb-8 sm:mb-12 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-secondary/10 rounded-full flex items-center justify-center shadow-2xl mb-4 hover:scale-110 transition-transform duration-300 border-2 border-primary">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                  </svg>
                </div>
                <div className="text-primary">
                  <div className="font-bold text-lg sm:text-xl md:text-2xl mb-2">Interview</div>
                  <div className="text-sm sm:text-base text-primary/80">Meet the Team</div>
                </div>
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-xs sm:text-sm">
                  2
                </div>
              </div>

              {/* Connecting Line */}
              <div className="w-1 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-primary to-primary/80 rounded-full mb-8 sm:mb-12 shadow-lg"></div>

              {/* Step 3: Join */}
              <div className="relative text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-secondary/10 rounded-full flex items-center justify-center shadow-2xl mb-4 hover:scale-110 transition-transform duration-300 border-2 border-primary">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="text-primary">
                  <div className="font-bold text-lg sm:text-xl md:text-2xl mb-2">Join</div>
                  <div className="text-sm sm:text-base text-primary/80">Start Building</div>
                </div>
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-xs sm:text-sm">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration - Responsive */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-16 h-8 sm:w-32 sm:h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default JoinUsHeader;
