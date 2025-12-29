// pages/blog14.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog14 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "how-generative-ai-enhances-software-development", title: "How Generative AI Enhances Software Development" },
    { id: "role-in-ai-driven-development", title: "The Role in AI-Driven Software Development" },
    { id: "future-of-generative-ai", title: "Future of Generative AI in Software Engineering" },
    { id: "benefits-for-organizations", title: "Benefits for Organizations" },
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
            Generative AI: Transforming Software Development with Intelligent Automation
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/european-union-using-radar-system-detect-missiles-attacking-member-states_482257-89727.jpg"
              alt="Generative AI in Software Development"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary-400/20 flex items-center justify-center text-primary-400 font-extrabold drop-shadow-glow">
              F
            </div>
            <span className="uppercase tracking-wide font-semibold">Felista</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary-400" />
              <span>16 July 2025</span>
            </div>
          </div>

          {/* INTRODUCTION */}
          <section id="introduction" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              Generative AI is revolutionizing software development, offering advanced automation and intelligent code generation. By leveraging machine learning algorithms, it enhances efficiency, reduces errors, and accelerates software delivery. As a key player in AI-driven software development, generative AI is shaping the future of coding.
            </p>
          </section>

          {/* SECTION: How Generative AI Enhances Software Development */}
          <section id="how-generative-ai-enhances-software-development" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">How Generative AI Enhances Software Development</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Generative AI simplifies complex engineering processes, driving a new era in software development. Here's how it makes an impact:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li><strong>Automated Code Generation:</strong> AI-powered tools analyze patterns and generate optimized code snippets, significantly reducing manual coding efforts.</li>
              <li><strong>Error Detection and Debugging:</strong> AI-driven systems identify and correct errors in real time, minimizing software vulnerabilities.</li>
              <li><strong>Natural Language Processing (NLP) for Coding:</strong> AI models understand human language and translate it into executable code, making programming more accessible.</li>
              <li><strong>Improved Software Maintenance:</strong> Generative AI continuously learns from existing codebases, providing suggestions to enhance code quality and maintainability.</li>
            </ul>
          </section>

          {/* SECTION: Role in AI-Driven Software Development */}
          <section id="role-in-ai-driven-development" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">The Role of Generative AI in AI-Driven Software Development</h2>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li><strong>Enhanced Productivity:</strong> Developers can focus on higher-level problem-solving while AI handles repetitive tasks.</li>
              <li><strong>Seamless Integration with DevOps:</strong> AI-driven code automation integrates with CI/CD pipelines, improving workflow efficiency.</li>
              <li><strong>Scalability and Customization:</strong> AI adapts to various project requirements, offering tailored solutions for complex software applications.</li>
            </ul>
          </section>

          {/* SECTION: Future of Generative AI */}
          <section id="future-of-generative-ai" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Future of Generative AI in Software Engineering</h2>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li>Generative AI's progress is redefining the limits of smart coding automation.</li>
              <li>As generative AI evolves, it continually expands the possibilities of intelligent code automation.</li>
              <li>Advancements in generative AI are driving innovation and challenging traditional automation boundaries in coding.</li>
              <li>The growth of generative AI is unlocking new frontiers in automated software development.</li>
              <li>Generative AI is accelerating breakthroughs in intelligent coding through its rapid evolution.</li>
            </ul>
          </section>

          {/* SECTION: Benefits for Organizations */}
          <section id="benefits-for-organizations" className="scroll-mt-24">
            <p className="text-primary/80 leading-relaxed mb-6">
              As organizations embrace AI-powered development, they unlock new opportunities for:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li>Faster time-to-market with automated software creation.</li>
              <li>Greater innovation by leveraging AI-driven creativity.</li>
              <li>Enhanced security through proactive vulnerability detection.</li>
            </ul>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Generative AI is reshaping software development automation, offering significant efficiency, accuracy, and innovation improvements. As AI technology advances, integrating generative AI solutions into development workflows will become essential.
            </p>
          </section>

          {/* SECTION: Internal Link */}
          <section id="explore-more" className="scroll-mt-24">
            <p className="text-primary/80 leading-relaxed mb-6">
              <strong>Explore More:</strong> Discover the broader impact of AI in our blog: <em><Link href="/code-generation-automation" className="text-primary hover:text-primary/80 underline font-medium">How is AI Transforming Software Development?</Link></em>
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

export default Blog14;
