// pages/blog19.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog19 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "large-language-models", title: "Large Language Models (LLMs)" },
    { id: "large-action-models", title: "Large Action Models (LAMs)" },
    { id: "large-vision-models", title: "Large Vision Models (LVMs)" },
    { id: "large-multimodal-models", title: "Large Multimodal Models (LMMs)" },
    { id: "emerging-developments", title: "Emerging Developments" },
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
            Demystifying Generative AI: A Friendly Guide to Different Model Types
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/human-resources-officer-choose-employee-standing-out-crowd-select-team-leader-concept_488220-62208.jpg"
              alt="Demystifying Generative AI"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold drop-shadow-glow">
              P
            </div>
            <span className="uppercase tracking-wide font-semibold">Pavithra</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>21 July 2025</span>
            </div>
            <span>•</span>
            <span>Estimated reading time: 5 minutes</span>
          </div>

          {/* INTRODUCTION */}
          <section id="introduction" className="scroll-mt-24">
            <p className="text-white/80 text-xl leading-relaxed mb-6">
              Generative AI has quickly moved from a trending term to a foundational technology powering many modern applications. From powering conversational chatbots to creating visual art from text descriptions, generative models form the backbone of modern AI applications.
            </p>
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              However, the variety of generative AI model types—LLMs, LAMs, LVMs, LMMs, and others—can make the landscape seem complex. This blog simplifies and explains these major categories in a clear and approachable way.
            </p>
          </section>

          {/* SECTION: Large Language Models (LLMs) */}
          <section id="large-language-models" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Large Language Models (LLMs)</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Large Language Models are the most widely known type of generative AI. These models are trained on large volumes of text data and are built to understand and generate language one token at a time.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Most modern LLMs use transformer-based architectures that process input in parallel rather than sequentially, making them faster and more effective than older methods.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Examples include GPT-4, Claude, LLaMA, Google's PaLM and Gemini models.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Use cases: content writing, translation, summarization, question answering, coding assistance.
            </p>
          </section>

          {/* SECTION: Large Action Models (LAMs) */}
          <section id="large-action-models" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Large Action Models (LAMs)</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              LAMs go a step beyond language. Instead of just generating text, these models can perform actual tasks based on user instructions. They interpret natural language input and turn it into concrete actions in software or real-world environments.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              LAMs are the foundation of modern AI agents capable of booking meetings, filling out forms, controlling robots, or navigating apps.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Examples include Adept's ACT-1 (which performs tasks across web apps), Rabbit's R1 device (which automates smartphone functions), and Microsoft's AutoGen (used to build multi-agent AI systems).
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Use cases: task automation, digital assistants, workflow management, robotic control.
            </p>
          </section>

          {/* SECTION: Large Vision Models (LVMs) */}
          <section id="large-vision-models" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Large Vision Models (LVMs)</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              LVMs are capable of handling visual content such as images and videos. They can classify objects in pictures, detect patterns, generate new visuals, and analyze video sequences.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              These models often use convolutional neural networks (CNNs) or vision transformers depending on their specific goals.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Examples include OpenAI's DALL·E 3, Midjourney, Meta's Make-A-Video, Google's Imagen and Parti, and Stability AI's Stable Diffusion.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Use cases: image generation, object detection, medical imaging, video content creation.
            </p>
          </section>

          {/* SECTION: Large Multimodal Models (LMMs) */}
          <section id="large-multimodal-models" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Large Multimodal Models (LMMs)</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              LMMs combine different types of input—text, image, audio, and video—within a single model. These models can, for example, look at an image and describe it in words, or generate a picture from a sentence.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              A special subset of LMMs, known as Vision-Language Models (VLMs), focuses specifically on the relationship between images and text.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Examples include OpenAI's GPT-4V, Google's Gemini, Anthropic's Claude 3, OpenAI's CLIP, Google's PaLI, Microsoft's Florence, and Salesforce's BLIP models.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Use cases: image captioning, accessibility tools, multimodal chatbots, content moderation, creative media generation.
            </p>
          </section>

          {/* SECTION: Emerging Developments */}
          <section id="emerging-developments" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Emerging Developments</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              The world of generative AI is evolving fast. One recent direction includes Large Concept Models (LCMs), which aim to process ideas or concepts rather than individual words. These models work at a higher level of abstraction and are designed for more coherent and meaningful output. Though still early in development, LCMs show promise in reducing factual errors and improving long-form reasoning.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Another area of growth is Large World Models (LWMs). These are designed to understand how things interact in the real world over time. LWMs process large amounts of video and language data to simulate complex environments, useful in robotics, simulations, and AI agents that interact with the physical world.
            </p>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-white/80 leading-relaxed mb-10">
              Grasping the main types of generative AI models is the essential first step to gaining deeper insight into how generative AI functions and to developing effective AI-powered solutions. As the field advances, we can anticipate more specialized models and new categories emerging to tackle unique use cases and technical hurdles.
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

export default Blog19;
