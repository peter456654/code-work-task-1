// pages/blog30.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog30 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "intro", title: "Introduction" },
    { id: "not-about-code", title: "It's Not About the Code, It's About the People" },
    { id: "real-conversations", title: "The Conversations Happening Behind Closed Doors" },
    { id: "building-trust", title: "Building Real Trust (Not Corporate Trust)" },
    { id: "change-management", title: "What Actually Works in Change Management" },
    { id: "leading-through-change", title: "What I've Learned About Leading Through Change" },
    { id: "real-win", title: "The Real Win" },
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
            The Human Side of AI Projects: Managing Teams Through Digital Transformation
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="/blog/blog12.jpg"
              alt="Managing AI Teams"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold drop-shadow-glow">
              K
            </div>
            <span className="uppercase tracking-wide font-semibold">keerthika</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>12 September 2025</span>
            </div>
          </div>

          {/* SECTION: Introduction */}
          <section id="intro" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-4">
              Remember when your biggest worry was just getting everyone to use the same project management tool? Those days feel quaint now. Last year, I watched my colleague Sarah turn a team of AI skeptics into enthusiasts—not through fancy presentations, but by genuinely caring about their concerns and fears.
            </p>
          </section>

          {/* SECTION: It's Not About the Code */}
          <section id="not-about-code" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">It's Not About the Code, It's About the People</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              I'll be brutally honest: I used to think AI implementation was about choosing the right tools and following best practices. I was wrong. The sleepless nights don't come from technical glitches—they come from seeing talented team members worry they're becoming obsolete.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              When you're managing an AI project, you're not just a project manager. You become part therapist, part cheerleader, and part fortune teller, trying to help people see a future they can't quite imagine yet.
            </p>
          </section>

          {/* SECTION: Real Conversations */}
          <section id="real-conversations" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">The Conversations Happening Behind Closed Doors</h2>
            <p className="text-primary/80 leading-relaxed mb-4">Your team is having real conversations about AI, whether you're part of them or not. Here's what they're actually saying:</p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li><strong>"Am I going to lose my job?"</strong> This isn't dramatic—it's human. When Jessica from our QA team first saw AI running test cases, she went quiet for days. It wasn't until we showed her how it freed her up for the detective work she loved that she started asking questions instead of planning her exit strategy.</li>
              <li><strong>"I feel stupid asking this, but..."</strong> The smartest people on your team might feel the most intimidated. They're used to being experts, and suddenly they're beginners again. Create space for these vulnerable moments—they're where real learning happens.</li>
              <li><strong>"Here we go again with another shiny tool."</strong> Some team members have survived multiple "transformational" initiatives. Their skepticism isn't personal—it's learned. They need to see genuine commitment, not just enthusiasm.</li>
            </ul>
          </section>

          {/* SECTION: Building Real Trust */}
          <section id="building-trust" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Building Real Trust (Not Corporate Trust)</h2>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li><strong>Tell them why this matters—really matters:</strong> Skip the buzzwords about "competitive advantage." Tell them about the late nights you won't have to work, the boring tasks they won't have to repeat, and the creative challenges they'll finally have time to tackle.</li>
              <li><strong>Let them play, not just learn:</strong> Give people sandbox environments where they can mess around with AI tools without consequences. Some of our best implementations came from developers experimenting during lunch breaks.</li>
              <li><strong>Make heroes out of early wins:</strong> When someone saves hours using an AI tool, don't just mention it in passing. Tell the story. Make it real. People need to see themselves in these success stories.</li>
            </ul>
          </section>

          {/* SECTION: Change Management */}
          <section id="change-management" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">What Actually Works in Change Management</h2>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li><strong>Find your natural allies:</strong> Every team has someone who loves trying new things. They're not necessarily your star performers—they're your bridge builders. Invest in them first.</li>
              <li><strong>Treat learning like growth, not catching up:</strong> Frame AI training as professional development, not remedial education. Partner with HR to make it part of career advancement, not survival.</li>
              <li><strong>Don't forget you're all human:</strong> Digital transformation can feel cold and impersonal. Double down on team connections. More coffee chats, more check-ins, more "how are you really doing?"</li>
            </ul>
          </section>

          {/* SECTION: Leading Through Change */}
          <section id="leading-through-change" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">What I've Learned About Leading Through Change</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              You can't be the AI expert—that's not your job. Your job is being the people expert. The one who notices when someone's struggling, celebrates when they succeed, and keeps everyone focused on why this matters.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              Be patient with the process. Trust happens slowly, then all at once.
            </p>
          </section>

          {/* SECTION: The Real Win */}
          <section id="real-win" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">The Real Win</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Six months later, my team doesn't just use AI tools—they advocate for them. Not because the technology is perfect, but because they felt supported through the change. That's the difference between successful AI projects and expensive experiments.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog30;
