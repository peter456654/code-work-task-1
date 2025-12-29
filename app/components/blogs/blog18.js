// pages/blog18.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog18 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-mixture-of-experts", title: "What is Mixture of Experts?" },
    { id: "how-does-it-work", title: "How Does It Work?" },
    { id: "real-world-moe-models", title: "Real-World MoE Models" },
    { id: "benefits-of-moe", title: "Benefits of MoE" },
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
            Mixture of Experts: Making AI Smarter, Not Just Bigger
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/hacker-girl-using-dangerous-malware-attack-government-database_482257-20620.jpg"
              alt="Mixture of Experts"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold drop-shadow-glow">
              S
            </div>
            <span className="uppercase tracking-wide font-semibold">Sathish</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>20 July 2025</span>
            </div>
          </div>

          {/* INTRODUCTION */}
          <section id="introduction" className="scroll-mt-24">
            <p className="text-white/80 text-xl leading-relaxed mb-6">
              Large Language Models (LLMs) like GPT-4 and Claude are impressive — but they're also expensive. Training these models can cost millions of dollars, require tens of thousands of GPUs, and still, they often generate false answers (hallucinations).
            </p>
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              So… can we make AI smarter without always making it bigger? That's exactly what Mixture of Experts (MoE) is here to do.
            </p>
          </section>

          {/* SECTION: What is Mixture of Experts? */}
          <section id="what-is-mixture-of-experts" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">What is Mixture of Experts?</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              MoE is a clever AI architecture that activates only the parts of a model needed for a specific task. Instead of using the entire model, it picks a few specialized "experts" best suited to the input—saving time, cost, and compute.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Think of it like a group project: Only the right teammates show up for each task.
            </p>
          </section>

          {/* SECTION: How Does It Work? */}
          <section id="how-does-it-work" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">How Does It Work?</h2>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Experts:</strong> Smaller sub-models trained for specific patterns.</li>
              <li><strong>Gating Network:</strong> Chooses the top experts needed for the task.</li>
              <li><strong>Sparse Activation:</strong> Only a few experts are "on" for each input.</li>
              <li><strong>Aggregation:</strong> The outputs are combined to give a result.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              This lets the model scale in size but still stay efficient.
            </p>
          </section>

          {/* SECTION: Real-World MoE Models */}
          <section id="real-world-moe-models" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Real-World MoE Models</h2>
            <h3 className="text-xl font-semibold text-white mb-2">1. Mixtral 8x7B</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              8 experts, only 2 active per input. Used for text generation, summarization, reasoning.
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">2. DBRX (by Databricks)</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              16 fine-grained experts, 4 used per layer. Great for code generation and math-heavy tasks.
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">3. DeepSeek-V2</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              160 experts, 2 routed + 2 shared per layer. Handles super long documents (up to 128K tokens).
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              These models prove that MoE scales smartly, not wastefully.
            </p>
          </section>

          {/* SECTION: Benefits of MoE */}
          <section id="benefits-of-moe" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Benefits of MoE</h2>
            <ol className="list-decimal ml-6 text-white/80 mb-10 space-y-2">
              <li>More efficient: Uses fewer computing resources</li>
              <li>Faster inference: Less processing time per input</li>
              <li>Smarter specialization: Experts learn focused tasks</li>
              <li>Flexible scaling: You can add experts as needed</li>
            </ol>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-white/80 leading-relaxed mb-10">
              MoE shows that the future of AI isn't just about building bigger models—it's about building smarter ones.
            </p>
          </section>

          {/* SECTION: Internal Link */}
          <section id="explore-more" className="scroll-mt-24">
            <p className="text-white/80 leading-relaxed mb-6">
              <strong>Explore More:</strong> Discover the broader impact of AI <Link href="/ai-transforming-software" className="text-primary hover:underline font-medium"> How is AI Transforming Software Development?</Link>
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

export default Blog18;
