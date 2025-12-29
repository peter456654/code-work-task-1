// pages/blog12.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog12 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "how-enhances", title: "How Generative AI Enhances Software Development" },
    { id: "role-ai-driven", title: "The Role of Generative AI in AI-Driven Development" },
    { id: "future", title: "Future of Generative AI in Software Engineering" },
    { id: "benefits", title: "Benefits of Generative AI" },
    { id: "conclusion", title: "Conclusion" },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-secondary py-12 pt-40 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 flex gap-8">
        {/* LEFT SIDEBAR - TABLE OF CONTENTS */}
        <div className="hidden lg:block w-64 sticky top-24 h-fit">
          <div className="bg-secondary backdrop-blur-sm rounded-xl border border-primary/60 p-6 shadow-glow">
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
              <FiList className="mr-2" />
              Table of Contents
            </h3>
            <nav 
              className="space-y-2 max-h-[85vh] overflow-hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {tocItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-secondary/20 text-primary border-l-4 border-primary"
                      : "text-primary/70 hover:text-primary hover:bg-secondary/10"
                  }`}
                >
                  {index + 1}. {item.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* MOBILE TOC TOGGLE */}
        <button
          onClick={() => setIsTocOpen(!isTocOpen)}
          className="lg:hidden fixed top-24 left-4 z-50 bg-secondary text-primary p-3 rounded-full shadow-lg"
        >
          <FiList size={20} />
        </button>

        {/* MOBILE TOC OVERLAY */}
        {isTocOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-secondary/50" onClick={() => setIsTocOpen(false)}>
            <div className="bg-secondary w-80 h-full overflow-y-auto p-6 shadow-xl" onClick={e => e.stopPropagation()}>
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
                <FiList className="mr-2" />
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {tocItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsTocOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-secondary/20 text-primary border-l-4 border-primary"
                        : "text-primary/70 hover:text-primary hover:bg-secondary/10"
                    }`}
                  >
                    {index + 1}. {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* MAIN CONTENT */}
        <div className="flex-1 max-w-4xl">
          {/* TITLE */}
          <h1 className="text-5xl font-extrabold text-primary mb-8 drop-shadow-glow">
            How is AI Transforming Software Development?
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/deepfake-concept-matching-facial-movements-face-swapping-impersonation_29488-11319.jpg"
              alt="AI in Software Development"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-extrabold drop-shadow-glow">
              F
            </div>
            <span className="uppercase tracking-wide font-semibold">Felista</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-cyan-400" />
              <span>15 July 2025</span>
            </div>
          </div>

          {/* INTRODUCTION */}
          <section id="introduction" className="scroll-mt-24 mb-10">
            <p className="text-primary/80 text-xl leading-relaxed mb-4">
              Generative AI is a game-changer in software development, as it provides unparalleled automation and intelligent code generation. The technology employs machine learning algorithms to enhance efficiency, cut down errors, and fast-track software delivery. Being one of the important players in AI-driven software development, generative AI makes the future of coding different.
            </p>
          </section>

          {/* SECTION: How Generative AI Enhances Software Development */}
          <section id="how-enhances" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">How Generative AI Enhances Software Development</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Generative AI is simplifying complex engineering processes and driving the latest era in creating software. Here's how it helps:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Intelligent Code Completion</h3>
                <p className="text-primary/80 leading-relaxed">
                  AI-driven tools scan for patterns with the aim of generating optimized code snippets, thus drastically reducing manual coding effort.
                </p>
              </div>

              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Error Detection and Debugging</h3>
                <p className="text-primary/80 leading-relaxed">
                  AI-driven systems can identify errors and correct them instantly, keeping the vulnerabilities in the software at their minimal levels.
                </p>
              </div>

              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">NLP for Coding</h3>
                <p className="text-primary/80 leading-relaxed">
                  AI understands human languages and converts them into code that the computer then will understand and execute, hence making the work of programming easier.
                </p>
              </div>

              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Improved Maintenance of Software</h3>
                <p className="text-primary/80 leading-relaxed">
                  Generative AI learns from existing codebases and continuously makes suggestions to improve the quality and maintainability of code.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: The Role of Generative AI */}
          <section id="role-ai-driven" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">The Role of Generative AI in AI-Driven Software Development</h2>
            
            <div className="space-y-4 mb-6">
              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Improved Productivity</h3>
                <p className="text-primary/80 leading-relaxed">
                  Developers can be freed to work at higher levels of problem-solving by leaving more mundane and repetitive tasks to AI.
                </p>
              </div>

              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Smooth Integration with DevOps</h3>
                <p className="text-primary/80 leading-relaxed">
                  AI-driven code automation works well in conjunction with Continuous Integration/Continuous Deployment, improving efficiency in the workflow.
                </p>
              </div>

              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-2">Scalability and Customization</h3>
                <p className="text-primary/80 leading-relaxed">
                  AI can adapt to a wide variety of project needs and offers solutions for most complex software applications.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: Future of Generative AI */}
          <section id="future" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">Future of Generative AI in Software Engineering</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              The pace at which generative AI improves keeps pushing out the limits of what is possible with smart coding automation. Generative AI continues to extend the scope of intelligent code automation as it proceeds to evolve and change. Advancement of generative AI empowers innovation and challenges conventional limits in the automation of coding.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Growth in generative AI is unlocking new frontiers in software development automation. Quick Evolution of Generative AI Speeds Up Breakthroughs in Intelligent Coding.
            </p>
          </section>

          {/* SECTION: Benefits */}
          <section id="benefits" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">Benefits of Generative AI</h2>
            
            <div className="space-y-3 mb-6">
              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <p className="text-primary/80 leading-relaxed">
                  <strong className="text-primary">Faster Time to Market:</strong> With the automation of software creation, more innovation due to AI-driven creativity.
                </p>
              </div>

              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <p className="text-primary/80 leading-relaxed">
                  <strong className="text-primary">Enhanced Innovation:</strong> AI-driven creativity enables developers to explore new solutions and approaches.
                </p>
              </div>

              <div className="bg-secondary/40 rounded-lg p-4 border border-primary/20">
                <p className="text-primary/80 leading-relaxed">
                  <strong className="text-primary">Better Security:</strong> Proactive detection of vulnerabilities through intelligent analysis.
                </p>
              </div>
            </div>
          </section>

          {/* CONCLUSION */}
          <section id="conclusion" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Generative AI is now driving a complete transformation of software development automation in terms of great gains in efficiency, accuracy, and innovation. As AI technology continues to evolve, generative AI solutions will be included more into the core fabric of development workflows.
            </p>
          </section>
        </div>
      </div>

      <style jsx global>{`
        .drop-shadow-glow {
          text-shadow: 0 0 12px #1ddfea66, 0 0 2px #223044;
        }
        .shadow-glow {
          box-shadow: 0 0 32px #1ddfea22, 0 0 8px #22304426;
        }
        .scroll-mt-24 {
          scroll-margin-top: 6rem;
        }
        
        /* Hide scrollbars for table of contents */
        nav::-webkit-scrollbar {
          display: none;
        }
        
        /* Extra Small Custom Scrollbars for main content */
        ::-webkit-scrollbar {
          width: 3px;
          height: 3px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }

        ::-webkit-scrollbar-thumb {
          background: #000000;
          border-radius: 2px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.8);
        }

        ::-webkit-scrollbar-corner {
          background: rgba(0, 0, 0, 0.3);
        }

        /* Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: #000000 rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Blog12;
