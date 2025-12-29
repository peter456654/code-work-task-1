// pages/blog17.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog17 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "what-sets-modern-chatbots-apart", title: "What Sets Modern Chatbots Apart?" },
    { id: "where-can-you-find-them", title: "Where Can You Find These Chatbots?" },
    { id: "building-your-own-chatbot", title: "Building Your Own Chatbot—No Tech Degree Required" },
    { id: "the-power-of-multimodality", title: "The Power of Multimodality" },
    { id: "how-chatbots-are-getting-smarter", title: "How Chatbots Are Getting Even Smarter" },
    { id: "should-you-trust-a-chatbot", title: "Should You Trust a Chatbot?" },
    { id: "your-say", title: "Your Say: The Chatbot Feature You Crave" },
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
          <h1 className="text-5xl font-extrabold text-primary mb-8 drop-shadow-glow">
            Chatbots in 2025: Your Everyday AI Companion
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/graphic-designers-work-together-with-ux-ui-designer-planning-application_35892-978.jpg"
              alt="Chatbots in 2025"
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
            <span className="uppercase tracking-wide font-semibold">Prasanth</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary-400" />
              <span>16 July 2025</span>
            </div>
          </div>

          {/* INTRODUCTION */}
          <section id="introduction" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              Ever chatted with an online helper and thought, "Wow, this thing almost feels human!"? That's the charm of today's chatbots—smarter, friendlier, and more helpful than ever. Let's dive into what makes the latest chatbots so remarkable, and how they're changing the way we interact with technology.
            </p>
          </section>

          {/* SECTION: What Sets Modern Chatbots Apart? */}
          <section id="what-sets-modern-chatbots-apart" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">What Sets Modern Chatbots Apart?</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              <strong>Beyond Simple Answers:</strong> Gone are the days when chatbots delivered only scripted replies. The latest bots can handle back-and-forth conversation, remember your previous questions, and even complete real-life tasks like making reservations or tracking deliveries.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              <strong>Emotionally Intelligent:</strong> New models are trained to pick up on your tone and emotions. Whether you're frustrated or excited, they adjust their response, making conversations genuinely supportive and engaging.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              <strong>Always at Your Service:</strong> Available 24/7, today's chatbots offer instant help—answering queries, guiding purchases, troubleshooting issues, or even managing your calendar.
            </p>
          </section>

          {/* SECTION: Where Can You Find These Chatbots? */}
          <section id="where-can-you-find-them" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Where Can You Find These Chatbots?</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              <strong>Online Shopping:</strong> Chatbots help you find the right products, apply discounts, and check order statuses, making shopping painless and fun.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              <strong>Customer Service:</strong> No more waiting on hold—just type your problem, and most common fixes are handled on the spot.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              <strong>Healthcare:</strong> Virtual assistants can help schedule appointments, send medication reminders, or answer basic health questions.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              <strong>Banking:</strong> Need your balance, want to transfer funds, or have a query about a transaction? Chatbots step in with secure, instant responses.
            </p>
          </section>

          {/* SECTION: Building Your Own Chatbot—No Tech Degree Required */}
          <section id="building-your-own-chatbot" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Building Your Own Chatbot—No Tech Degree Required</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Worried you need to be a coding genius? Not anymore!
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              <strong>No-code Platforms:</strong> Tools now let anyone design and publish a chatbot with drag-and-drop simplicity. Set up answers, teach it your brand's language, and deploy in minutes—no programming needed.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              <strong>Customization:</strong> Choose your chatbot's personality: playful, professional, empathetic, or expert. You decide how it greets users and the tone it uses.
            </p>
          </section>

          {/* SECTION: The Power of Multimodality */}
          <section id="the-power-of-multimodality" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">The Power of Multimodality</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Today's chatbot isn't limited to text. It can:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li><strong>Understand Voice:</strong> Talk to it, and it talks back!</li>
              <li><strong>See Images:</strong> Upload a photo of a product or a document—your chatbot can help interpret information instantly.</li>
              <li><strong>Access Other Apps:</strong> Chatbots integrate with your calendar, email, and other tools to automate more of your daily routine.</li>
            </ul>
          </section>

          {/* SECTION: How Chatbots Are Getting Even Smarter */}
          <section id="how-chatbots-are-getting-smarter" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">How Chatbots Are Getting Even Smarter</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              <strong>Learning on the Go:</strong> Machines use real conversations to get better over time, fixing mistakes and getting closer to human-like understanding.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              <strong>Context Awareness:</strong> Your chatbot now recalls context—so if you swap topics or come back later, the conversation can pick up right where you left off.
            </p>
          </section>

          {/* SECTION: Should You Trust a Chatbot? */}
          <section id="should-you-trust-a-chatbot" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Should You Trust a Chatbot?</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              <strong>Privacy Protection:</strong> Leading chatbot platforms are designed with strict data privacy in mind, giving you control over your information.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              <strong>Transparent Interactions:</strong> Bots clarify when you're chatting with AI, and often offer easy handoff to a human if you prefer.
            </p>
          </section>

          {/* SECTION: Your Say: The Chatbot Feature You Crave */}
          <section id="your-say" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Your Say: The Chatbot Feature You Crave</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              If you could ask for one superpower in your favorite chatbot, what would it be?
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li>Deeper emotional understanding?</li>
              <li>A true personal assistant that manages your whole day?</li>
              <li>Or maybe a learning buddy that helps with tough questions, anytime?</li>
            </ul>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Chatbots in 2025 are more than just tools—they're everyday companions that make life easier, more efficient, and a bit more fun. As they continue to evolve, they're set to become even more integrated into our daily routines.
            </p>
          </section>

          {/* SECTION: Internal Link */}
          <section id="explore-more" className="scroll-mt-24">
            <p className="text-primary/80 leading-relaxed mb-6">
              <strong>Explore More:</strong> Discover the broader impact of AI <Link href="/ai-transforming-software" className="text-primary hover:underline font-medium"> How is AI Transforming Software Development?</Link>
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

export default Blog17;
