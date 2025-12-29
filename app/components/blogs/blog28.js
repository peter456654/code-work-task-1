// pages/blog28.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList, FiShield } from "react-icons/fi";
import Link from "next/link";

const Blog28 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "ai-cybersecurity-intro", title: "AI in Cybersecurity" },
    { id: "why-ai-matters", title: "Why AI Matters in Cybersecurity" },
    { id: "what-we-offer", title: "What We Offer" },
    { id: "key-features", title: "Key Features" },
    { id: "how-it-works", title: "How It Works" },
    { id: "who-needs-it", title: "Who Needs It?" },
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
          <h1 className="text-5xl font-extrabold text-primary mb-4 drop-shadow-glow">
            AI in Cybersecurity
          </h1>
          <p className="text-2xl text-white/80 mb-8">
            Smarter Protection for a Safer Digital World
          </p>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="/blog/blog18.jpg"
              alt="AI in Cybersecurity"
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
            <span className="uppercase tracking-wide font-semibold">CodeWorkAI</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>16 July 2025</span>
            </div>
          </div>

          {/* SECTION: AI in Cybersecurity Intro */}
          <section id="ai-cybersecurity-intro" className="scroll-mt-24">
            <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-6 mb-10">
              <div className="flex items-center mb-4">
                <FiShield className="text-secondary mr-3" size={24} />
                <h2 className="text-xl font-bold text-secondary">Advanced AI Protection</h2>
              </div>
              <p className="text-white/80 leading-relaxed">
                Transform your cybersecurity posture with intelligent, adaptive defense systems powered by cutting-edge AI technology.
              </p>
            </div>
          </section>

          {/* SECTION: Why AI Matters in Cybersecurity */}
          <section id="why-ai-matters" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Why AI Matters in Cybersecurity</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              At CodeWorkAI, we use AI for real-time detection, prevention, and responsive actions on different threats. Cyber threats evolve faster than ever, outpacing traditional security methods.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              CodeWorkAI's AI-powered cybersecurity solutions adapt, safeguard, and defend your information from digital assailants with unparalleled speed and accuracy[67][68].
            </p>
          </section>

          {/* SECTION: What We Offer */}
          <section id="what-we-offer" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-white/80 leading-relaxed mb-10">
              With a potent combination of machine learning, automation, behavioral analytics, and other advanced technologies, our AI-powered cybersecurity services defend your systems and networks from both known and unknown vulnerabilities[69][70].
            </p>
          </section>

          {/* SECTION: Key Features */}
          <section id="key-features" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
            
            <div className="space-y-6 mb-10">
              <div className="bg-primary/40 border border-secondary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary mb-3">Real-Time Threat Detection</h3>
                <p className="text-white/80 leading-relaxed">
                  Achieve instantaneous identification of anomalies and suspicious behaviors with our advanced AI algorithms.
                </p>
              </div>

              <div className="bg-primary/40 border border-secondary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary mb-3">Automated Incident Response</h3>
                <p className="text-white/80 leading-relaxed">
                  Intelligent automation improves threat engagement by eliminating human delay, therefore reducing response time exponentially.
                </p>
              </div>

              <div className="bg-primary/40 border border-secondary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary mb-3">Predictive Risk Analysis</h3>
                <p className="text-white/80 leading-relaxed">
                  AI algorithms anticipate possible breaches by forecasting vulnerabilities.
                </p>
              </div>

              <div className="bg-primary/40 border border-secondary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary mb-3">Behavioral Monitoring</h3>
                <p className="text-white/80 leading-relaxed">
                  AI systems intelligently track users and systems for insider threats and zero-day attacks.
                </p>
              </div>

              <div className="bg-primary/40 border border-secondary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary mb-3">AI-Powered Firewalls & Intrusion Detection</h3>
                <p className="text-white/80 leading-relaxed">
                  Adaptive intelligence strengthens traditional security tools[71][72].
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: How It Works */}
          <section id="how-it-works" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Our systems learn perpetually from new data, mitigating risks and adjusting to new threats while reducing false positive alerts.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Integration of AI into your cybersecurity stack gives you proactive defense capabilities which adapt with your infrastructure.
            </p>
          </section>

          {/* SECTION: Who Needs It? */}
          <section id="who-needs-it" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Who Needs It?</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Startups and enterprises alike benefit from AI in cybersecurity. It's critical for:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li>Financial institutions</li>
              <li>Healthcare providers</li>
              <li>E-commerce platforms</li>
              <li>SaaS companies</li>
              <li>Government & public sector</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              Cybersecurity, by nature, encompasses more than defense—it also deals with proactive strategies to maintain a business's unyielding ability to continue to operate. With CodeWorkAI, you can build a robust, adaptable security framework that leverages AI to improve and outpace emerging threats.
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

export default Blog28;
