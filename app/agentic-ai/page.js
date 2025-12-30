"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const AgenticAIPage = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const services = [
    { title: "AI Model Training", link: "/ai-model-training" },
    { title: "AI Driven Custom Software Development", link: "/custom-software-development" },
    { title: "AI Automation", link: "/ai-automation" },
    { title: "Cloud Computing", link: "/cloud-computing" },
    { title: "DevOps Solutions", link: "/devops-solutions" },
    { title: "Agentic AI", link: "/agentic-ai" },
    { title: "AI Implementation", link: "/ai-implementation" },
    { title: "AI in Cyber Security", link: "/cybersecurity-service" },
    { title: "IT Staff Augmentation", link: "/it-staff-service" },
    { title: "AI in Digital Marketing Services", link: "/digital-marketing-services" },
          { title: "Professional Annotation Services", link: "/annotation-services" },

  ];

  // Function to check if link is active
  const isActiveLink = (linkPath) => {
    return pathname === linkPath;
  };

  // Check if any dropdown item is active
  const isDropdownActive = (service) => {
    if (!service.dropdown) return false;
    return service.dropdown.some(item => pathname === item.link) || pathname === service.link;
  };

  // Toggle dropdown
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="bg-secondary min-h-screen">
      {/* Landing Section - Exactly like AiModelLanding */}
      <section className="relative w-full min-h-screen bg-secondary overflow-hidden">
        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-40">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
            
            {/* Left Side - Main Content (Takes 2 columns) */}
            <div className="lg:col-span-2 text-left">

              <div className="heading-container mb-8">
                <div className="inline-flex items-center px-4 py-2  bg-secondary/10 text-primary text-sm font-medium mb-4">
                   Agentic AI 
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                  Empower Your Business with <span className="text-primary">Agentic AI</span>
                </h1>
                
                {/* Decorative underline */}
                <div className="w-20 h-1 bg-secondary rounded-full mb-8"></div>
              </div>

              <div className="paragraph-container mb-8 max-w-3xl">
                <p className="text-lg text-primary leading-relaxed pl-4 border-l-4 border-secondary/40">
                  We harness <span className="text-primary font-medium">Agentic AI</span> to empower enterprises, infusing smart systems that respond not merely as calculators but as purposeful agents. Separate from conventional AI that waits idle for commands, our agents independently observe, commit to a course, and execute with situational awareness—all while adjusting to shifting real conditions.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Collaborate with Codework to realize the complete strategic advantage of Agentic AI.</h3>
                </div>
              </div>
            </div>

            {/* Right Side - Services Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-secondary/70 backdrop-blur-xl rounded-3xl border border-secondary/30 shadow-2xl p-8 sticky top-8">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></div>
                  <h3 className="text-xl font-bold text-primary">Our Services</h3>
                </div>
                
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <div key={index}>
                      {/* Main Service Item */}
                      <div 
                        className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 border-l-4 group relative overflow-hidden ${
                          isActiveLink(service.link) || isDropdownActive(service)
                            ? 'bg-secondary/20 text-primary border-secondary font-bold shadow-lg backdrop-blur-sm'
                            : 'text-primary hover:text-primary hover:bg-secondary/10 border-transparent hover:border-secondary/50 hover:shadow-md'
                        }`}
                      >
                        {/* Hover background effect */}
                        <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10 flex items-center justify-between">
                          <Link href={service.link} className="flex-1">
                            <span>{service.title}</span>
                          </Link>
                          
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              isActiveLink(service.link) || isDropdownActive(service)
                                ? 'bg-secondary animate-pulse' 
                                : 'bg-secondary/30 group-hover:bg-secondary/60'
                            }`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom decoration in services card */}
                <div className="mt-6 pt-6 border-t border-secondary/20">
                  <div className="flex items-center text-primary text-xs">
                    <div className="w-1 h-1 bg-secondary rounded-full mr-2"></div>
                    <span>Navigate through our services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 right-0 opacity-20">
          <div className="w-40 h-20 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
        </div>
      </section>

      {/* Why Codework's Agentic AI Section */}
      <section className="relative bg-secondary min-h-screen overflow-hidden py-20 px-4 sm:px-6 lg:px-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-secondary/15 rounded-full"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-secondary/20 rounded-full"></div>
        </div>

        {/* Floating Dots */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-24 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          <div className="absolute bottom-64 right-32 w-3 h-3 bg-secondary/80 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="text-primary space-y-8">
              {/* Main Heading */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-6">
                  <span className="text-primary">Advanced Intelligence</span> That Works Independently
                </h2>
                {/* Decorative underline */}
                <div className="w-20 h-1 bg-secondary rounded-full mb-8"></div>
              </div>

              {/* Key Features */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Proactive Intelligence</h3>
                    <p className="text-primary leading-relaxed">Our agents forecast requirements, initiate action, and refine efficiency with no human checkpoint.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Smart Decision-Making</h3>
                    <p className="text-primary leading-relaxed">Embedded reasoning and contextual grasp yields simultaneous insight and optimum effect.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Scalable Solutions</h3>
                    <p className="text-primary leading-relaxed">From the garage startup to the continent-spanning conglomerate, our architecture flexes to sector specifics and grows effortlessly.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Enhanced Productivity</h3>
                    <p className="text-primary leading-relaxed">Repetitive, multifaceted routines are yielded to agents, liberating teams for next-generation innovation.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Human + AI Collaboration</h3>
                    <p className="text-primary leading-relaxed">Agents are crafted to augment human capability, multiplying output with diminishing effort.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative flex items-center justify-center">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-secondary/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                
                {/* Image container */}
                <div>
                  <Image
                    src="/blog/blog14.jpg"
                    alt="Agentic AI Illustration"
                    width={500}
                    height={400}
                    className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
                  />
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-secondary/50 rounded-tl-2xl"></div>
                  <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-secondary/50 rounded-br-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="relative bg-secondary overflow-hidden py-20 px-4 sm:px-6 lg:px-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-32 h-32 bg-secondary/15 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              Comprehensive <span className="text-primary">AI Agent Solutions</span>
            </h2>
            <div className="w-20 h-1 bg-secondary rounded-full mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Customer Experience Automation */}
            <div className="group bg-secondary/70 backdrop-blur-xl rounded-3xl border border-secondary/30 p-8 hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Customer Experience Automation</h3>
              <p className="text-primary leading-relaxed">Continuous, intelligent agents deliver personalized support and engagement around the clock.</p>
            </div>

            {/* Business Process Automation */}
            <div className="group bg-secondary/70 backdrop-blur-xl rounded-3xl border border-secondary/30 p-8 hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Business Process Automation</h3>
              <p className="text-primary leading-relaxed">Autonomous execution brings order, timing, and component interlock to operations, programs, and workflows.</p>
            </div>

            {/* Healthcare AI Agents */}
            <div className="group bg-secondary/70 backdrop-blur-xl rounded-3xl border border-secondary/30 p-8 hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Healthcare AI Agents</h3>
              <p className="text-primary leading-relaxed">Diagnostic support, patient safety monitoring, and evidence-fueled healthcare outcomes converge within autonomous agents.</p>
            </div>

            {/* Financial Intelligence */}
            <div className="group bg-secondary/70 backdrop-blur-xl rounded-3xl border border-secondary/30 p-8 hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Financial Intelligence</h3>
              <p className="text-primary leading-relaxed">AI uncovers fraud, governs risk through automation, and drives strategic trading with laser-accurate insight.</p>
            </div>

            {/* Marketing and Sales AI */}
            <div className="group bg-secondary/70 backdrop-blur-xl rounded-3xl border border-secondary/30 p-8 hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Marketing and Sales AI</h3>
              <p className="text-primary leading-relaxed">Deploy tailored recommendations, tap into predictive insights, and supercharge campaigns through streamlined automation to drive higher conversion rates.</p>
            </div>

            {/* IT and Security Automation */}
            <div className="group bg-secondary/70 backdrop-blur-xl rounded-3xl border border-secondary/30 p-8 hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11 .65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">IT and Security Automation</h3>
              <p className="text-primary leading-relaxed">Employ continuous autonomous monitoring, sophisticated threat detection, and self-managing systems to fortify your digital defenses and ensure enduring resilience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future-Ready CTA Section */}
      <section className="relative bg-secondary overflow-hidden py-20 px-4 sm:px-6 lg:px-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-48 h-48 bg-secondary/25 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/15 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Section Badge */}
          <div className="inline-flex items-center border border-secondary/30 bg-secondary/10 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            Future-Ready Technology
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-8">
            Transform Your Business with <span className="text-primary">Agentic AI</span>
          </h2>

          <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-8"></div>

          <p className="text-xl text-primary leading-relaxed mb-12 max-w-3xl mx-auto">
            Codework's Agentic AI services empower enterprises with independence, flexibility, and deep cognitive capabilities. From optimizing workforce productivity to catalyzing breakthrough innovations, our offerings transform your operation into a platform of heightened intelligence, accelerated velocity, and enduring future-readiness.
          </p>


          <p className="text-primary font-semibold mt-8 text-lg">
            Unlock proprietary value and scale your business to the next frontier.
          </p>
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 opacity-20">
          <div className="w-40 h-20 bg-gradient-to-r from-secondary/30 to-transparent rounded-tr-full"></div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default AgenticAIPage;
