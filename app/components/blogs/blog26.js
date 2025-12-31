// pages/blog26.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog26 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "ai-consulting-overview", title: "AI Consulting" },
    { id: "why-choose-our-services", title: "Why Choose Our AI Consulting Services" },
    { id: "unlock-growth-with-codework", title: "Unlock Growth with Codework's AI Expertise" },
    { id: "new-ai-product-development", title: "New AI Product Development" },
    { id: "integrating-ai-into-existing-products", title: "Integrating AI into Existing Products" },
    { id: "problem-solving-approach", title: "Our Problem-Solving Approach" },
    //{ id: "ai-consulting-for-businesses", title: "AI Consulting for Businesses" },
    //{ id: "technology-consulting", title: "Technology Consulting" },
    //{ id: "ai-integration-support", title: "AI Integration Support" },
    { id: "ui-ux-design-excellence", title: "UI/UX Design Excellence" },
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
                      : "text-primary hover:text-primary/80 hover:bg-secondary/10"
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
                        : "text-primary hover:text-primary/80 hover:bg-secondary/10"
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
            AI Consulting
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/woman-uses-ai-chatbot-system-computer-guide-her-through-tasks_482257-118915.avif"
              alt="AI Consulting"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold drop-shadow-glow">
              C
            </div>
            <span className="uppercase tracking-wide font-semibold">Codework</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>24 July 2025</span>
            </div>
          </div>

          {/* SECTION: AI Consulting Overview */}
          <section id="ai-consulting-overview" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              Transform your business with AI consulting and development services that position you as an industry leader.
            </p>
          </section>

          {/* SECTION: Why Choose Our AI Consulting Services */}
          <section id="why-choose-our-services" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Why Choose Our AI Consulting Services</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Align your business goals with smart, scalable AI solutions through expert guidance from Codework.
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li>We help identify and prioritize the most impactful AI use cases for your business.</li>
              <li>Our team recommends scalable tools that suit your project requirements and future growth.</li>
              <li>We design a solid roadmap to integrate AI into your operations smoothly.</li>
              <li>Our AI solutions are built to be reliable, scalable, and aligned with your business objectives.</li>
            </ul>
          </section>

          {/* SECTION: Unlock Growth with Codework's AI Expertise */}
          <section id="unlock-growth-with-codework" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Unlock Growth with Codework's AI Expertise</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Leverage AI-powered insights to spark innovation, widen your customer base, and unlock new sources of revenue[67][68].
            </p>
          </section>

          {/* SECTION: New AI Product Development */}
          <section id="new-ai-product-development" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">New AI Product Development</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Minimize risks and reduce development costs by validating your AI product idea early.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Codework's AI consultants assist you in every phase—from defining project scope and selecting the right tools, to estimating timelines and resource needs.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              With over a decade of experience in AI consulting and solution development, Codework supports you from concept to successful launch—and beyond.
            </p>
          </section>

          {/* SECTION: Integrating AI into Existing Products */}
          <section id="integrating-ai-into-existing-products" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Integrating AI into Existing Products</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Stay competitive by enhancing your current solutions with intelligent capabilities.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Our experts perform a detailed analysis of your systems, data pipelines, and infrastructure to recommend the best AI integration strategy.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Codework's AI engineers ensure a seamless transformation by applying proven expertise and delivering tailor-made solutions.
            </p>
          </section>

          {/* SECTION: Our Problem-Solving Approach */}
          <section id="problem-solving-approach" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Problem-Solving Approach</h2>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-4">
              <li>
                <strong>Strategy & Consulting:</strong> Assess your current operations and future objectives to craft a targeted AI transformation plan.
              </li>
              <li>
                <strong>Proof of Value:</strong> Build a quick PoC to demonstrate and validate the impact of AI on your specific use case.
              </li>
              <li>
                <strong>Minimum Viable Product (MVP):</strong> Launch a functional MVP to test your idea in the market and gather valuable feedback.
              </li>
              <li>
                <strong>Ongoing Maintenance:</strong> Optimize performance, improve user experience, and adapt your product to evolving needs[69][70].
              </li>
            </ul>
          </section>

          {/* SECTION: AI Consulting for Businesses */}
          <section id="ai-consulting-for-businesses" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">AI Consulting for Businesses</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Codework helps you build scalable, intelligent solutions that meet both business targets and customer expectations—with a focus on clean design and reliable development.
            </p>
          </section>

          {/* SECTION: Technology Consulting */}
          <section id="technology-consulting" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Technology Consulting</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Our AI and tech specialists guide you in selecting cost-effective, scalable technologies that fast-track innovation and improve your services—quickly and efficiently.
            </p>
          </section>

          {/* SECTION: AI Integration Support */}
          <section id="ai-integration-support" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">AI Integration Support</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              We help design AI adoption roadmaps and build Proofs-of-Concept to evaluate feasibility. From planning to execution, Codework is your partner throughout the AI journey.
            </p>
          </section>

          {/* SECTION: UI/UX Design Excellence */}
          <section id="ui-ux-design-excellence" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">UI/UX Design Excellence</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Partner with our UI/UX experts to craft immersive and engaging digital experiences that leave a lasting impression. We combine user research, competitive analysis, and modern design principles to craft intuitive, impactful digital products[71][72].
            </p>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusion:</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              We don't just build AI solutions—we build long-term partnerships that drive transformation, innovation, and measurable results. Whether you're launching a new AI product, enhancing an existing system, or exploring the possibilities of digital intelligence, our end-to-end consulting services are here to guide you every step of the way.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              We combine deep technical expertise with business insight to deliver custom AI solutions that scale with your goals and stay ahead of market demands.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              From strategy and development to integration and user experience, Codework ensures your journey into AI is smooth, impactful, and future-ready.
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

export default Blog26;
