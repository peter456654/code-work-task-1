// pages/blog6.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";

const Blog6 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "intro", title: "Introduction" },
    { id: "seduction-of-ai", title: "The Seduction of AI" },
    { id: "begin-with-basics", title: "Begin with the Basics" },
    { id: "build-foundation", title: "Build a Foundation First" },
    { id: "dont-overcomplicate", title: "Don't Overcomplicate What Can Be Simplified" },
    { id: "way-forward", title: "The Way Forward: Responsible AI Adoption" },
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
            <nav className="space-y-2">
              {tocItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-secondary/20 text-primary border-l-4 border-primary"
                      : "text-primary/70 hover:text-primary hover:bg-secondary/5"
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
              <h3 className="text-lg font-bold text-secondary mb-4 flex items-center">
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
                        : "text-primary/70 hover:text-primary hover:bg-secondary/5"
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-8 drop-shadow-glow">
            Don't Let the Hype Hijack the Goal: Keeping AI Grounded in Practical Value
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/[Downloader.la]-6944e64e62c1e.jpg"
              alt="AI Practical Value"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-primary font-extrabold drop-shadow-glow">
              N
            </div>
            <span className="uppercase tracking-wide font-semibold">Neaven Christopher</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>28 May 2025</span>
            </div>
          </div>

          {/* INTRO */}
          <section id="intro" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-6">
              Artificial Intelligence (AI) has become the crown jewel of innovation in today's digitally driven world. From predictive algorithms in e-commerce to intelligent automation in operations, organizations are eagerly embracing AI to stay competitive. But amid this rapid adoption, a critical issue is emerging — many AI strategies for companies are becoming unnecessarily complex in the quest to do something with AI.
            </p>
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              Businesses often rush to adopt AI without fully understanding their data requirements, key goals, or whether a simple solution would be more effective. In these situations, AI shifts from being a solution to becoming a distraction from real business growth.
            </p>
          </section>

          {/* The Seduction of AI */}
          <section id="seduction-of-ai" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">The Seduction of AI</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              AI carries a sense of futuristic potential. Executives see success stories and expect similar transformation, hoping AI will unlock hidden potential overnight. But the reality is more nuanced. Even with its capabilities, AI can not solve everything instantly. It requires clean, well-structured data, clearly defined problems, and a measured approach to implementation.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              When the focus shifts from solving a business problem to using AI, the project loses direction — a common AI project pitfall. This is where the need for responsible AI adoption becomes critical.
            </p>
          </section>

          {/* Begin with the Basics */}
          <section id="begin-with-basics" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Begin with the Basics: Solve the Right Problem First</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Start with the basics: What problem are we aiming to solve before bringing AI?
              For instance, if an organization is struggling with delayed customer responses, the solution might be a well-trained chatbot powered by natural language processing — but only if the current customer data and workflows support it. In many cases, a rule-based automation or improved ticket triage process might do the job faster and cost-effectively.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              Practical AI implementation is not about using the most advanced tech, it is about solving real-world problems efficiently.
              AI should be a tool that fits into a broader architecture of solutions, not a one-size-fits-all answer. Jumping into complex machine learning models without aligning with clear business outcomes is a recipe for failure.
            </p>
          </section>

          {/* Build a Foundation First */}
          <section id="build-foundation" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Build a Foundation First</h2>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li><strong>Data Readiness:</strong> Even the most advanced models will struggle without clean, well-organized data.</li>
              <li><strong>Defined Objectives:</strong> What exactly should the model predict, automate, or analyze? Clarity here avoids wasted cycles.</li>
              <li><strong>Cross-functional Collaboration:</strong> Data scientists, domain experts, and business stakeholders must collaborate to ensure AI models are grounded in reality.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              Only once these elements are in place should AI enter the scene. Otherwise, organizations risk investing in expensive prototypes that never reach production. This is why data readiness for AI is more important than simply jumping into development.
            </p>
          </section>

          {/* Don't Overcomplicate What Can Be Simplified */}
          <section id="dont-overcomplicate" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Don't Overcomplicate What Can Be Simplified</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Simplicity is elegant. Basic analytics, dashboards, and decision trees often provide more immediate and actionable insights than a poorly trained neural network. If a project's ROI can be achieved through a simple regression model or BI tool, there is no shame in choosing that path.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              Recognizing that not every problem needs AI shows strategic wisdom.
              The priority should be practical, effective solutions rather than chasing AI trends without purpose.
            </p>
          </section>

          {/* The Way Forward */}
          <section id="way-forward" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">The Way Forward: Responsible AI Adoption</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              To keep AI from disrupting data projects, leaders should rethink their approach. AI is not a mandatory solution but a helpful tool that should be used only when it truly fits the problem.
              Adopting AI in business should begin with a clear understanding of what it can and cannot do. The most successful AI efforts are rooted in real business problems and grow through careful, strategic execution.
            </p>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-primary mt-8 mb-4">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              The future is driven by intelligence, but true wisdom lies in selecting the right technology at the right time for the right purpose.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              AI can greatly enhance business operations, but it isn't always essential. As we move forward in the data-driven era, let us prioritize impact over novelty. Whether it is basic analytics or machine learning, choose the tool that delivers results, not the one that makes the headlines.
            </p>
          </section>
        </div>
      </div>

      <style jsx>{`
        .drop-shadow-glow {
          text-shadow: 0 0 12px rgba(0, 0, 0, 0.18), 0 0 2px rgba(0, 0, 0, 0.15);
        }
        .shadow-glow {
          box-shadow: 0 0 32px rgba(0, 0, 0, 0.08), 0 0 8px rgba(0, 0, 0, 0.12);
        }
        .scroll-mt-24 {
          scroll-margin-top: 6rem;
        }
      `}</style>
    </div>
  );
};

export default Blog6;
