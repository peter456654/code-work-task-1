// pages/blog29.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList, FiSettings } from "react-icons/fi";
import Link from "next/link";

const Blog29 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "what-is-sdlc", title: "What is SDLC?" },
    { id: "phases-of-the-software-lifecycle", title: "Phases of the Software Lifecycle" },
    { id: "common-software-lifecycle-models", title: "Common Software Lifecycle Models" },
    { id: "devops-and-the-software-lifecycle", title: "DevOps and the Software Development Lifecycle" },
    { id: "benefits-of-sdlc", title: "Benefits of the SDLC" },
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
                      ? "bg-primary/20 text-primary border-l-4 border-primary"
                      : "text-primary hover:text-primary/80 hover:bg-primary/5"
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
            <div className="bg-primary w-80 h-full overflow-y-auto p-6 shadow-xl" onClick={e => e.stopPropagation()}>
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
                        ? "bg-primary/20 text-primary border-l-4 border-primary"
                        : "text-primary hover:text-primary/80 hover:bg-primary/5"
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
            What is SDLC?
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="/blog/blog22.jpg"
              alt="Software Development Lifecycle"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold drop-shadow-glow">
              F
            </div>
            <span className="uppercase tracking-wide font-semibold">Felista</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>16 July 2025</span>
            </div>
          </div>

          {/* SECTION: What is SDLC? */}
          <section id="what-is-sdlc" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-4">
              SDLC is a systematic framework that guides teams through design, build, testing, and maintenance of reliable software. It provides a step-by-step guide to ensure software products are delivered efficiently, meet user expectations, and are free of critical errors[67][68].
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              In today's fast-paced development environment, understanding SDLC is essential not only for developers but also for testers, project managers, and business analysts[69][70].
            </p>
          </section>

          {/* SECTION: Phases of the Software Lifecycle */}
          <section id="phases-of-the-software-lifecycle" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">What are the Phases of the Software Lifecycle?</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              The SDLC is divided into six to seven key phases, each playing a vital role in software delivery. Here's a breakdown:
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="bg-primary/40 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                  <FiSettings className="mr-2" size={18} />
                  Requirement Gathering & Analysis
                </h3>
                <p className="text-primary/80 leading-relaxed">
                  Stakeholders define what the software should do. Business analysts and product owners gather functional and non-functional requirements.
                </p>
              </div>

              <div className="bg-primary/40 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Planning</h3>
                <p className="text-primary/80 leading-relaxed">
                  A roadmap is created for the development. Resources, timeframes, tools, and risks are planned.
                </p>
              </div>

              <div className="bg-primary/40 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Design</h3>
                <p className="text-primary/80 leading-relaxed">
                  Architects and developers outline the system architecture, including UI/UX, data design, and technology stack[71][72].
                </p>
              </div>

              <div className="bg-primary/40 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Development</h3>
                <p className="text-primary/80 leading-relaxed">
                  The actual coding happens here. Developers implement the software according to the outlined design requirements.
                </p>
              </div>

              <div className="bg-primary/40 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Testing</h3>
                <p className="text-primary/80 leading-relaxed">
                  QA teams evaluate the software to identify bugs and ensure usability and optimal performance. Both manual and automated tests are used.
                </p>
              </div>

              <div className="bg-primary/40 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Deployment</h3>
                <p className="text-primary/80 leading-relaxed">
                  After approval, the software is deployed to production. It may be a staged or full release.
                </p>
              </div>

              <div className="bg-primary/40 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Maintenance & Support</h3>
                <p className="text-primary/80 leading-relaxed">
                  Post-release, any bugs or issues are resolved. Updates and new features are also handled during this phase.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: Common Software Lifecycle Models */}
          <section id="common-software-lifecycle-models" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Common Software Lifecycle Models</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Different teams adopt different SDLC models based on their project goals, timelines, and team size.
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-3">
              <li><strong>Waterfall Model:</strong> A step-by-step model where each stage is finished before the next one begins. Best for fixed-scope projects.</li>
              <li><strong>Agile Model:</strong> An iterative model where development happens in short sprints. Allows flexibility and frequent client feedback.</li>
              <li><strong>V-Model:</strong> Emphasizes validation and verification. For each step in the development process, there's a dedicated phase to test and validate that particular stage.</li>
              <li><strong>Iterative Model:</strong> Software is built and refined through repeated cycles (iterations).</li>
              <li><strong>Spiral Model:</strong> Combines design and prototyping in stages. Focuses on risk assessment and progressive refinement.</li>
            </ul>
          </section>

          {/* SECTION: DevOps and the Software Development Lifecycle */}
          <section id="devops-and-the-software-lifecycle" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">DevOps and the Software Development Lifecycle Model</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              DevOps is not a separate model but an extension of Agile and modern SDLC practices. It bridges the gap between development and operations teams by promoting:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
              <li>Automation of testing and deployment</li>
              <li>Monitoring and feedback loops</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-4">
              In the DevOps-based SDLC:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li>Code is integrated and tested frequently.</li>
              <li>Releases are automated and occur rapidly.</li>
              <li>Bugs are detected and resolved faster, leading to improved stability.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              DevOps transforms the traditional SDLC into a fast, responsive, and scalable approach suitable for cloud-native applications and modern businesses.
            </p>
          </section>

          {/* SECTION: Benefits of the SDLC */}
          <section id="benefits-of-sdlc" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Benefits of the SDLC</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Using a defined SDLC model brings several advantages to software development teams and organizations:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li>Clear structure and documentation</li>
              <li>Better risk management</li>
              <li>Higher software quality</li>
              <li>Improved collaboration across teams</li>
              <li>Predictable costs and timelines</li>
              <li>Faster and more efficient releases when integrated with DevOps</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              The SDLC ensures that every step of development is monitored, reviewed, and optimized, reducing the risk of project failure.
            </p>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              The Software Development Lifecycle is more than just a process—it's a framework for success. By understanding its phases, models, and the role of DevOps, teams can deliver software that is reliable, scalable, and aligned with user needs.
            </p>
          </section>
        </div>
      </div>

      <style jsx global>{`
        .drop-shadow-glow {
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.4), 0 0 2px rgba(0, 0, 0, 0.3);
        }
        .shadow-glow {
          box-shadow: 0 0 32px rgba(255, 255, 255, 0.12), 0 0 8px rgba(0, 0, 0, 0.15);
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
          background: #ffffff;
          border-radius: 2px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        ::-webkit-scrollbar-corner {
          background: rgba(0, 0, 0, 0.3);
        }

        /* Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: #ffffff rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Blog29;
