// pages/blog25.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog25 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "ai-chatbot-integration-overview", title: "What is AI Chatbot Integration?" },
    { id: "why-it-matters", title: "Why It Matters" },
    { id: "common-challenges", title: "Common Challenges" },
    { id: "how-to-integrate", title: "How to Integrate an AI Chatbot" },
    { id: "tools-and-platforms", title: "Tools and Platforms" },
    { id: "measuring-success", title: "Measuring Success" },
    { id: "future-trends", title: "Future Trends" },
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
            AI Chatbot Integration: A Practical Guide
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="/blog/blog25.jpg"
              alt="AI Chatbot Integration"
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

          {/* SECTION: What is AI Chatbot Integration? */}
          <section id="ai-chatbot-integration-overview" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">What is AI Chatbot Integration?</h2>
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              AI chatbot integration is the process of connecting a chatbot with existing business systems such as websites, mobile apps, customer relationship management (CRM) platforms, or helpdesk software. Instead of functioning as a stand-alone tool, the chatbot becomes part of the broader workflow. This integration allows the chatbot to access real-time data, provide accurate responses, and perform automated tasks such as booking appointments, tracking orders, or updating customer records.
            </p>
          </section>

          {/* SECTION: Why It Matters */}
          <section id="why-it-matters" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Why It Matters</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Integrating AI chatbots provides more value than simply deploying them as isolated assistants. Businesses benefit in several ways:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li><strong>24/7 Availability:</strong> Customers can get help at any time, without waiting for human staff.</li>
              <li><strong>Automation:</strong> Routine interactions, such as FAQs or basic troubleshooting, are handled instantly.</li>
              <li><strong>Personalization:</strong> By linking with CRMs or ERPs, chatbots deliver context-aware answers tailored to individual customers.</li>
              <li><strong>Efficiency:</strong> Teams save time by focusing on complex issues instead of repetitive tasks.</li>
              <li><strong>Insight Generation:</strong> Integration makes it easier to analyze customer conversations and spot trends.</li>
            </ul>
          </section>

          {/* SECTION: Common Challenges */}
          <section id="common-challenges" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Common Challenges</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Despite the advantages, companies often face integration hurdles:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li><strong>Data Security:</strong> Ensuring sensitive information is protected during transmission and storage.</li>
              <li><strong>System Compatibility:</strong> Legacy systems may lack the APIs or flexibility needed for smooth integration.</li>
              <li><strong>Conversation Quality:</strong> Poorly designed bots can frustrate users if they fail to understand queries.</li>
              <li><strong>Adoption Barriers:</strong> Some customers may resist interacting with automated systems.</li>
            </ul>
          </section>

          {/* SECTION: How to Integrate an AI Chatbot */}
          <section id="how-to-integrate" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">How to Integrate an AI Chatbot</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Successful integration usually follows a step-by-step process:
            </p>
            <ol className="list-decimal ml-6 text-primary/80 mb-10 space-y-2">
              <li>Define goals and use cases such as customer service, lead generation, or scheduling.</li>
              <li>Choose the right platform depending on budget, technical requirements, and scalability.</li>
              <li>Connect the chatbot with core systems using APIs, plug-ins, or middleware tools.</li>
              <li>Design conversation flows that reflect real customer needs and questions.</li>
              <li>Test extensively to identify gaps in understanding and improve reliability.</li>
              <li>Deploy gradually across key channels, starting small before scaling.</li>
              <li>Monitor performance and update based on analytics and feedback.</li>
            </ol>
          </section>

          {/* SECTION: Tools and Platforms */}
          <section id="tools-and-platforms" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Tools and Platforms</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Some widely used options include:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li><strong>Dialogflow (Google)</strong> for natural language processing.</li>
              <li><strong>Microsoft Bot Framework</strong> for enterprise solutions.</li>
              <li><strong>Intercom, Drift, and HubSpot</strong> for customer engagement.</li>
              <li><strong>ManyChat</strong> for no-code integration with social media platforms.</li>
            </ul>
          </section>

          {/* SECTION: Measuring Success */}
          <section id="measuring-success" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Measuring Success</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Impact can be tracked with metrics such as:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li>First response time</li>
              <li>Resolution rate</li>
              <li>Customer satisfaction scores (CSAT)</li>
              <li>Lead conversions</li>
              <li>Cost savings from automation</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              Ongoing tracking helps the chatbot stay aligned with business goals.
            </p>
          </section>

          {/* SECTION: Future Trends */}
          <section id="future-trends" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Future Trends</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Upcoming developments include:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li>Multi-channel integration across voice, messaging, and web</li>
              <li>More human-like interactions driven by generative AI</li>
              <li>Hyper-personalization through advanced data use</li>
              <li>Integration with emerging technologies like IoT and AR/VR may also expand chatbot applications</li>
            </ul>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              AI chatbot integration strengthens customer service, streamlines workflows, and creates opportunities for data-driven growth. Businesses that set clear goals, choose suitable platforms, and commit to continuous improvement are more likely to achieve long-term success.
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

export default Blog25;
