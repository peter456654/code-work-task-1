// pages/blog10.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";

const Blog10 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "need-automation", title: "The Need for Automation in Recruitment" },
    { id: "how-codework-leverages-ai", title: "How CODEWORK Leverages AI to Streamline Hiring" },
    //{ id: "key-features", title: "Key Features of CODEWORK's AI Recruitment Platform" },
    { id: "resume-screening", title: "Intelligent Resume Screening" },
    //{ id: "candidate-ranking", title: "Automated Candidate Ranking" },
    { id: "ai-chatbots", title: "AI-Driven Chatbots" },
    { id: "data-backed-decisions", title: "Data-Backed Hiring Decisions" },
    //{ id: "benefits", title: "Benefits for Businesses and HR Teams" },
    { id: "future-recruitment", title: "Future of Recruitment with CODEWORK" },
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
          <h1 className="text-5xl md:text-5xl font-extrabold text-primary mb-8 drop-shadow-glow">
            Revolutionizing Hiring: How CODEWORK is Automating Recruitment with AI
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/creative-artificial-intelligence-concept-with-human-brain-hologram-modern-laptop-screen-3d-rendering_258654-19029.jpg"
              alt="AI Recruitment Automation"
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
              <span>13 June 2025</span>
            </div>
          </div>

          {/* INTRODUCTION */}
          <section id="introduction" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              The recruitment process is undergoing a major shift, and CODEWORK is leading the way. CODEWORK transforms traditional hiring into an efficient, data-driven system by integrating AI recruitment tools and automation technologies.
            </p>
          </section>

          {/* SECTION: The Need for Automation */}
          <section id="need-automation" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">The Need for Automation in Recruitment</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Manual hiring processes are time-consuming, inconsistent, and prone to bias. With increasing demand for tech talent and a fast-paced job market, companies require solutions that ensure:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li>Faster screening of candidates</li>
              <li>Reduced time-to-hire</li>
              <li>Objective evaluation</li>
              <li>Improved candidate experience</li>
            </ul>
          </section>

          {/* SECTION: CODEWORK Features */}
          <section id="how-codework-leverages-ai" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">How CODEWORK Leverages AI to Streamline Hiring</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              CODEWORK has developed an AI-powered recruitment system that automates every stage of the hiring journey. From sourcing to onboarding, the process is now smoother and more scalable.
            </p>
          </section>

          <section id="key-features" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-6">Key Features of CODEWORK's AI Recruitment Platform</h3>
          </section>

          <section id="resume-screening" className="scroll-mt-24">
            <h4 className="text-lg font-semibold text-primary/80 mb-2">1. Intelligent Resume Screening</h4>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>Uses natural language processing (NLP) to parse resumes</li>
              <li>Matches skills and experience with job descriptions</li>
              <li>Eliminates irrelevant applications instantly</li>
            </ul>
          </section>

          <section id="candidate-ranking" className="scroll-mt-24">
            <h4 className="text-lg font-semibold text-primary/80 mb-2">2. Automated Candidate Ranking</h4>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>Ranks profiles based on qualifications, skill match, and predictive analytics</li>
              <li>Prioritizes high-potential candidates</li>
              <li>Saves HR teams from manual shortlisting</li>
            </ul>
          </section>

          <section id="ai-chatbots" className="scroll-mt-24">
            <h4 className="text-lg font-semibold text-primary/80 mb-2">3. AI-Driven Chatbots</h4>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>Handles initial interactions</li>
              <li>Schedules interviews and responds to FAQs</li>
              <li>Enhances engagement without human intervention</li>
            </ul>
          </section>

          <section id="data-backed-decisions" className="scroll-mt-24">
            <h4 className="text-lg font-semibold text-primary/80 mb-2">4. Data-Backed Hiring Decisions</h4>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li>Generates insights from past hiring data</li>
              <li>Predicts candidate success rate</li>
              <li>Supports unbiased decisions with metrics</li>
            </ul>
          </section>

          {/* SECTION: Benefits */}
          <section id="benefits" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Benefits for Businesses and HR Teams</h2>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li>Cut down hiring time by up to 50%</li>
              <li>Increase quality-of-hire with data-driven insights</li>
              <li>Scale hiring across multiple roles simultaneously</li>
              <li>Improve compliance and reduce unconscious bias</li>
            </ul>
          </section>

          {/* SECTION: Future */}
          <section id="future-recruitment" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Future of Recruitment with CODEWORK</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              As AI continues to evolve, CODEWORK remains committed to ongoing innovation in the recruitment space. The company's future roadmap includes integrating:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>AI-powered video interview analysis</li>
              <li>Advanced behavioral prediction models</li>
              <li>Deeper connectivity with HRMS platforms</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              These enhancements further streamline the hiring process, enabling organizations to make smarter, faster, and more informed recruitment decisions. This shift to AI-based recruitment is not just a passing trend—it represents the future of hiring.
            </p>
          </section>

          {/* CALL TO ACTION */}
          <section id="call-to-action" className="scroll-mt-24">
            <p className="text-primary/80 leading-relaxed mb-6">
              Ready to revolutionize your recruitment process?{" "}
              <a
                href="https://codework.ai/contact-ai-solutions"
                className="text-primary hover:underline font-semibold"
              >
                Contact the CODEWORK team
              </a>{" "}
              to explore how our AI-powered solutions can help you build better teams faster.
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

export default Blog10;
