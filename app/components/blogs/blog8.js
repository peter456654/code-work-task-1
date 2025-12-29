// pages/blog8.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";

const Blog8 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "stargate-uae", title: "Stargate UAE: A Bold Step in National AI Infrastructure" },
    { id: "massive-ai-data-center", title: "Massive AI Data Center in Abu Dhabi" },
    { id: "driving-innovation", title: "Driving Innovation Across Key Sectors" },
    { id: "free-chatgpt-plus", title: "Free ChatGPT Plus Subscription: Empowering UAE Residents" },
    { id: "what-residents-receive", title: "What Residents Will Receive" },
    { id: "democratizing-ai", title: "Democratizing AI for All" },
    { id: "strategic-alliances", title: "Strategic Alliances to Boost AI Innovation" },
    { id: "global-tech-leaders", title: "Collaboration with Global Tech Leaders" },
    { id: "focus-areas", title: "Focus Areas of the Alliance" },
    { id: "global-impact", title: "Paving the Way for Global AI Adoption" },
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-8 drop-shadow-glow">
            UAE Makes History with Free ChatGPT Plus for Every Resident
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/businessman-using-pen-touch-flowchart-virtual-screen-business-process-workflow-with-flowchart-processing-management-concept_568137-1311.jpg"
              alt="UAE Free ChatGPT Plus Initiative"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400.font-extrabold drop-shadow-glow">
              P
            </div>
            <span className="uppercase tracking-wide font-semibold">Prasanth</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-cyan-400" />
              <span>29 May 2025</span>
            </div>
          </div>

          {/* INTRODUCTION */}
          <section id="introduction" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              In a groundbreaking development for the global AI community, the United Arab Emirates (UAE) has become the first nation to offer all its residents free access to ChatGPT Plus. This initiative is a key part of the Stargate UAE project, a strategic collaboration between the UAE government and OpenAI.
            </p>
          </section>

          {/* STARGATE UAE */}
          <section id="stargate-uae" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Stargate UAE: A Bold Step in National AI Infrastructure</h2>
          </section>

          <section id="massive-ai-data-center" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-2">Massive AI Data Center in Abu Dhabi</h3>
            <p className="text-primary/80 leading-relaxed mb-6">
              At the heart of this initiative lies the Stargate UAE AI data center, currently under development in Abu Dhabi. Once completed, the facility will house a one-gigawatt AI computing cluster, with the first 200 megawatts expected to go live by the end of 2026.
            </p>
          </section>

          <section id="driving-innovation" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-2">Driving Innovation Across Key Sectors</h3>
            <p className="text-primary/80 leading-relaxed mb-6">
              This ambitious project will support advanced AI applications across various sectors, including:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li>Healthcare</li>
              <li>Education</li>
              <li>Public services</li>
            </ul>
          </section>

          {/* Free ChatGPT Plus Subscription */}
          <section id="free-chatgpt-plus" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Free ChatGPT Plus Subscription: Empowering UAE Residents</h2>
          </section>

          <section id="what-residents-receive" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-2">What Residents Will Receive</h3>
            <p className="text-primary/80 leading-relaxed mb-6">
              Under this partnership, UAE residents will get complimentary ChatGPT Plus access, including:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>Use of the advanced GPT-4o model</li>
              <li>Enhanced response speed and prioritized access during high-traffic periods</li>
              <li>Access to the latest AI-powered tools for writing, learning, coding, and more</li>
            </ul>
          </section>

          <section id="democratizing-ai" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-2">Democratizing AI for All</h3>
            <p className="text-primary/80 leading-relaxed mb-10">
              This groundbreaking initiative is designed to democratize artificial intelligence, making advanced AI tools available to everyone and reshaping how people in the UAE work, learn, and live.
            </p>
          </section>

          {/* Strategic Alliances */}
          <section id="strategic-alliances" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Strategic Alliances to Boost AI Innovation</h2>
          </section>

          <section id="global-tech-leaders" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-2">Collaboration with Global Tech Leaders</h3>
            <p className="text-primary/80 leading-relaxed mb-6">
              The UAE's AI strategy is further strengthened by partnerships with global tech giants such as:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>Oracle</li>
              <li>Nvidia</li>
              <li>Cisco</li>
              <li>SoftBank</li>
              <li>G42 (a leading Middle Eastern AI firm backed by Microsoft)</li>
            </ul>
          </section>

          <section id="focus-areas" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-2">Focus Areas of the Alliance</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li>Developing localized AI tools</li>
              <li>Ensuring data privacy and regulatory compliance</li>
              <li>Fostering an ecosystem for responsible AI use</li>
            </ul>
          </section>

          {/* Global Impact */}
          <section id="global-impact" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Paving the Way for Global AI Adoption</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              With this landmark initiative, the UAE is setting a new benchmark in AI adoption and innovation. By providing free ChatGPT Plus subscriptions and investing in national infrastructure, the country is not only empowering its citizens but also solidifying its position as a global leader in artificial intelligence.
            </p>
          </section>
        </div>
      </div>

      <style jsx>{`
        .drop-shadow-glow {
          text-shadow: 0 0 12px #1ddfea66, 0 0 2px #223044;
        }
        .shadow-glow {
          box-shadow: 0 0 32px #1ddfea22, 0 0 8px #22304426;
        }
        .scroll-mt-24 {
          scroll-margin-top: 6rem;
        }
      `}</style>
    </div>
  );
};

export default Blog8;
