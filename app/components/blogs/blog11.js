// pages/blog11.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog11 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "why-ai-matters", title: "Why AI in Digital Marketing Matters Today" },
    { id: "applications", title: "Applications of AI in Digital Marketing" },
    { id: "crucial-advantages", title: "Crucial Advantages of AI-Driven Marketing Strategies" },
    { id: "key-statistics", title: "Key Statistics" },
    { id: "popular-ai-tools", title: "Popular AI Tools for Digital Marketers" },
    { id: "future-trends", title: "Future Trends to Watch" },
    { id: "final-thoughts", title: "Final Thoughts" },
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
            The New Era of AI: How Digital Marketing Will Never Be the Same Again
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/cropped-shot-startup-ux-ui-front-end-designers-developing-programming-coding-mobile-application-from-prototype-wireframe-layout-mobile-application-developer-workplace-concept_68339-320.jpg"
              alt="AI in Digital Marketing"
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
              <span>17 June 2025</span>
            </div>
          </div>

          {/* INTRODUCTION */}
          <section id="introduction" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              Artificial Intelligence, or AI, has evolved beyond just being a trendy term—it's now a powerful force driving innovation across industries. It's the backbone of a new age of hyper-intelligent digital marketing. AI impacts businesses in many ways, transforming audience engagement and performance measurement with automation, predictive analytics, audience-specific content creation, and automated real-time decision making using deep learning algorithms.
            </p>
          </section>

          {/* 1. WHY AI IN MARKETING */}
          <section id="why-ai-matters" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Why AI in Digital Marketing Matters Today</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              In the past, traditional marketing heavily depended on historical data and required a lot of manual effort. Now, AI automates data analysis, personalizes user experiences, and even predicts consumer behavior, enabling marketers to work more quickly and intelligently.
            </p>
          </section>

          {/* 2. APPLICATIONS */}
          <section id="applications" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Applications of AI in Digital Marketing</h2>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li><strong>AI Chatbots:</strong> Provide customer service anytime and lower waiting times</li>
              <li><strong>Predictive Analytics:</strong> Spot emerging trends and estimate future campaign performance</li>
              <li><strong>Dynamic Content Generation:</strong> Generate customized communications instantly</li>
              <li><strong>Video Personalization:</strong> Automatic video advertisement creation through platforms such as Synthesia</li>
              <li><strong>Product Recommendations:</strong> Automated suggestions as seen in "You may also like" on Amazon</li>
            </ul>
          </section>

          {/* 3. ADVANTAGES */}
          <section id="crucial-advantages" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Crucial Advantages of AI-Driven Marketing Strategies</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Leveraged by Artificial Intelligence, companies can now analyze enormous datasets to provide tailored emails, product recommendations, and even custom websites.
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li><strong>Enhanced Targeting:</strong> Thanks to <Link href="/machine-learning" className="text-secondary hover:underline font-medium"> machine learning</Link>, advertisers can group audiences into micro-segments using interests, behaviors, and intent, resulting in far more cost-efficient advertising.</li>
              <li><strong>Improved Decision-Making:</strong> With AI dashboards, marketers can monitor real-time metrics like click-through rates, conversions, and even bounce rates, allowing them to make strategic instant shifts.</li>
              <li><strong>Scalability:</strong> Managing 10 or even 100 campaigns, AI technologies require little to no human involvement in large-scale marketing operations.</li>
            </ul>
          </section>

          {/* 4. STATISTICS */}
          <section id="key-statistics" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-4">Key Statistics</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li>Time saved on manual tasks: 35%</li>
              <li>Boost in conversions from personalization: 20%</li>
              <li>Reduction in ad spend waste: 25%</li>
            </ul>
          </section>

          {/* 5. AI TOOLS TABLE */}
          <section id="popular-ai-tools" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Popular AI Tools for Digital Marketers</h2>
            <div className="overflow-x-auto mb-10">
              <table className="min-w-full bg-secondary border border-primary/30 rounded-lg">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left text-primary font-semibold border-b border-primary/20">Tool</th>
                    <th className="py-3 px-4 text-left text-primary font-semibold border-b border-primary/20">Purpose</th>
                    <th className="py-3 px-4 text-left text-primary font-semibold border-b border-primary/20">Highlight</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["ChatGPT", "Content generation", "Blogs, product descriptions, and idea drafts"],
                    ["HubSpot AI", "Automation + CRM", "Smart workflows, email campaigns"],
                    ["GA4 + AI", "Predictive analytics", "Conversion probability, smart goals"],
                    ["Persado", "Copywriting + Emotional AI", "Optimizes subject lines and CTAs"],
                    ["Jasper AI", "Long-form content", "SEO content, tone variation"],
                    ["Surfer SEO", "SEO writing assistant", "Real-time SERP analysis + content score"],
                    ["Ubersuggest", "Keyword research + AI suggestions", "Competitor analysis, traffic overview, SEO audits"],
                    ["Ahrefs", "Backlink analysis + site explorer", "AI-powered link gap insights and keyword ideas"],
                    ["SEMrush", "All-in-one SEO & PPC toolkit", "AI-driven content audits, rank tracking, and gap analysis"],
                    ["Screaming Frog", "Website crawling & SEO audits", "AI-enabled crawl insights and on-site SEO fixes"],
                  ].map(([tool, purpose, highlight]) => (
                    <tr key={tool} className="border-b border-secondary/10">
                      <td className="py-3 px-4 text-primary">{tool}</td>
                      <td className="py-3 px-4 text-primary/80">{purpose}</td>
                      <td className="py-3 px-4 text-primary/80">{highlight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. FUTURE TRENDS */}
          <section id="future-trends" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Future Trends to Watch</h2>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li><strong>Voice Search Optimization:</strong> AI enables precise targeting using voice analysis.</li>
              <li><strong>Visual Recognition AI:</strong> Analyzes visual interests for promotional materials.</li>
              <li><strong>AI Video Generation:</strong> Software that produces marketing videos from scripts with voiceovers.</li>
              <li><strong>Ethical AI & Transparency:</strong> Companies are prioritizing responsible AI use.</li>
            </ul>
          </section>

          {/* FINAL THOUGHTS */}
          <section id="final-thoughts" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Final Thoughts</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Embracing AI is fundamentally shifting the landscape of digital marketing. The adoption of AI technologies improves productivity and empowers brands with new avenues of creativity, more intelligent targeting, and increased returns on investment. Businesses that want to remain relevant in the industry should adopt new strategies, optimize, and leverage AI tools.
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

export default Blog11;
