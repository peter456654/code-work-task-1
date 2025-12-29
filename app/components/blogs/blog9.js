// pages/blog9.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";

const Blog9 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "deepfakes-overview", title: "Deepfakes: A Growing Spectrum of Risk" },
    { id: "abuse-scenarios", title: "Common Deepfake Abuse Scenarios" },
    { id: "legal-landscape", title: "Legal and Regulatory Landscape" },
    { id: "us-laws", title: "United States Legal Framework" },
    { id: "global-laws", title: "Europe and Global Regulations" },
    { id: "mitigation-strategies", title: "Mitigation Strategies: Tackling Deepfakes" },
    { id: "technical-solutions", title: "Technical Solutions" },
    { id: "platform-governance", title: "Platform Governance" },
    { id: "legal-enforcement", title: "Legal Enforcement" },
    { id: "responsible-ai", title: "Responsible AI Use: What Leaders Must Do" },
    { id: "governance-actions", title: "Governance Actions" },
    { id: "ethical-practices", title: "Ethical Practices" },
    { id: "preparedness", title: "Preparedness" },
    { id: "conclusion", title: "Conclusion: From Risk to Responsibility" },
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
            <nav className="space-y-2 max-h-[70vh] overflow-y-auto">
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
            The Deepfake Dilemma: What Leaders Must Know
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/closeup-african-american-entrepreneur-analyzing-company-profit_482257-20207.jpg"
              alt="Deepfake Dilemma Guide"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary-400/20 flex items-center justify-center text-primary-400 font-extrabold drop-shadow-glow">
              P
            </div>
            <span className="uppercase tracking-wide font-semibold">Pavithra</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary-400" />
              <span>6 June 2025</span>
            </div>
          </div>

          {/* INTRODUCTION */}
          <section id="introduction" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              In the age of generative AI, deepfakes represent both an opportunity and a threat. As synthetic media becomes more convincing and accessible, organizations must understand the risks, legal frameworks, and best practices to protect their brand, stakeholders, and public trust. This strategic guide explains everything leaders should know about deepfakes, from current laws to mitigation strategies and responsible AI practices.
            </p>
          </section>

          {/* DEEPFAKES OVERVIEW */}
          <section id="deepfakes-overview" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Deepfakes: A Growing Spectrum of Risk</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Deepfakes are AI-created content that can realistically mimic a person's appearance, voice, and behavior. While they power innovations in marketing, entertainment, and training, they can also be misused with serious consequences.
            </p>
          </section>

          <section id="abuse-scenarios" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-2">Common Deepfake Abuse Scenarios</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>Corporate Fraud: Criminals using synthetic voices to impersonate executives in financial scams.</li>
              <li>Brand Defamation: Fake videos of CEOs making inflammatory or damaging statements.</li>
              <li>Cybercrime: Voice clones used in phishing and social engineering attacks.</li>
              <li>Misuse of synthetic media for personal exploitation: Non-consensual synthetic media targeting individuals.</li>
              <li>Election Interference: Deepfake videos designed to mislead or manipulate voter behavior.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              These misuse cases increasingly blur the line between reality and fabrication, undermining public trust and threatening institutional integrity.
            </p>
          </section>

          {/* LEGAL LANDSCAPE */}
          <section id="legal-landscape" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Legal and Regulatory Landscape</h2>
            <h3 className="text-xl font-semibold text-primary/80 mb-2">What Laws Currently Exist?</h3>
            <p className="text-primary/80 leading-relaxed mb-6">
              While laws are still catching up, several frameworks are in motion globally:
            </p>
          </section>

          <section id="us-laws" className="scroll-mt-24">
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li><strong>United States:</strong></li>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>FTC Act: Applies to deceptive uses of AI under existing fraud regulations.</li>
                <li>TAKE IT DOWN Act (2025): Focuses on the removal of non-consensual synthetic intimate imagery.</li>
                <li>No Fakes Act (Proposed): Seeks to mandate labels for AI-generated content and safeguard personal identities and likenesses.</li>
                <li>State Laws: Over 20 U.S. states have enacted deepfake regulations, with California, Texas, Minnesota, and New York leading in addressing political, consumer, and privacy concerns.</li>
              </ul>
            </ul>
          </section>

          <section id="global-laws" className="scroll-mt-24">
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li className="mt-4"><strong>Europe and Global:</strong></li>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>EU AI Act: Requires watermarking, transparency, and categorization of high-risk AI content.</li>
                <li>UK Online Safety Act: Holds digital platforms accountable for synthetic media abuse.</li>
                <li>G7 & Council of Europe: Promoting collaborative governance and ethical AI standards across borders.</li>
              </ul>
            </ul>
          </section>

          {/* MITIGATION STRATEGIES */}
          <section id="mitigation-strategies" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Mitigation Strategies: Tackling Deepfakes</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              As deepfakes grow more realistic, organizations and governments are taking proactive steps to combat misuse, especially in high-risk areas like elections, finance, and healthcare.
            </p>
          </section>

          <section id="technical-solutions" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-2">Technical Solutions</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>Watermarking & Provenance Tracking: Cryptographic markers or metadata embedded in media to verify its origin.</li>
              <li>AI Forensics: Tools that analyze voice and video files for telltale signs of manipulation.</li>
              <li>Content Labeling: Clear disclosure when media is AI-generated.</li>
            </ul>
          </section>

          <section id="platform-governance" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-2">Platform Governance</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>Major Platforms like Meta, YouTube, and X have implemented takedown policies, content filters, and disclosure guidelines.</li>
              <li>Election Safeguards: Election-specific solutions are now being repurposed for broader use—flagging synthetic media in finance, healthcare, and advertising.</li>
            </ul>
          </section>

          <section id="legal-enforcement" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-2">Legal Enforcement</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>FTC & FCC are pursuing civil penalties for AI-related scams and disinformation campaigns.</li>
              <li>State Attorneys General are issuing legal actions against synthetic defamation and impersonation.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              These strategies are vital during election cycles and across industries that rely on trust and accurate communication.
            </p>
          </section>

          {/* RESPONSIBLE AI USE */}
          <section id="responsible-ai" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Responsible AI Use: What Leaders Must Do</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              As stewards of innovation, business leaders must create a responsible framework for AI usage that balances creativity with accountability.
            </p>
          </section>

          <section id="governance-actions" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-2">Governance Actions</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>Establish a Responsible AI Policy to cover generative content, approvals, and disclosures.</li>
              <li>Align with standards such as the NIST AI Risk Management Framework.</li>
              <li>Create a cross-functional oversight team involving legal, tech, compliance, and communications.</li>
            </ul>
          </section>

          <section id="ethical-practices" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-2">Ethical Practices</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>Prohibit the unauthorized use of deepfake tools in internal or external communication.</li>
              <li>Get permission before generating any AI-created version of a person's appearance or identity.</li>
              <li>Mandate disclosure labels on all AI-generated assets used in marketing, training, or client engagement.</li>
            </ul>
          </section>

          <section id="preparedness" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary/80 mb-2">Preparedness</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-1">
              <li>Build deepfake detection tools into your product development pipeline.</li>
              <li>Track global regulatory changes.</li>
              <li>Participate in AI research groups and industry forums to stay ahead of emerging standards.</li>
            </ul>
          </section>

          {/* CONCLUSION */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusion: From Risk to Responsibility</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Deepfakes are no longer speculative—they're real, scalable, and often indistinguishable from reality. While the legislative environment remains fluid, our ethical and strategic response must be immediate. We must balance innovation with accountability, embedding transparency, consent, and governance into our AI practices.
            </p>
          </section>

          {/* CALL TO ACTION */}
          {/* <section id="call-to-action" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Call to Action</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Are you ready to build a responsible AI culture in your organization?
              <br/><br/>
              Contact the <a href="https://codework.ai/contact-ai-solutions" className="text-primary hover:underline font-semibold">Codework.ai</a> team to learn how we can help you integrate safe, ethical, and innovative AI solutions into your business.
            </p>
          </section> */}
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

export default Blog9;
