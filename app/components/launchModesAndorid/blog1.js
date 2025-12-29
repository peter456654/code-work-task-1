// pages/blog1.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";

const Blog1 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "activity-launch-modes", title: "Activity Launch Modes" },
    { id: "lifecycle-and-modes", title: "Activity Lifecycle and Launch Modes" },
    { id: "standard-mode", title: "Standard Launch Mode" },
    { id: "singletop-mode", title: "SingleTop Launch Mode" },
    { id: "singletask-mode", title: "SingleTask Launch Mode" },
    { id: "singleinstance-mode", title: "SingleInstance Launch Mode" },
    { id: "comparison", title: "Comparison Table" },
    { id: "best-practices", title: "Best Practices" },
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
            <h3 className="text-lg font-bold text-secondary mb-4 flex items-center">
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
                      : "text-primary/70 hover:text-primary hover:bg-secondary/5"
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
              <h3 className="text-lg font-bold text-secondary mb-4 flex items-center">
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
                        : "text-primary/70 hover:text-primary hover:bg-secondary/5"
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
            Deep Dive Into Activity Launch Modes in Android.
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-xl overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/125110.jpg"
              alt="Activity Launch Modes"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-primary font-extrabold drop-shadow-glow">
              C
            </div>
            <span className="uppercase tracking-wide font-semibold">CodeWork</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>08 April 2025</span>
            </div>
          </div>

          {/* SECTION 1 */}
          <section id="activity-launch-modes" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-6">Activity Launch Modes</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              In Android, Activity Launch Modes determine how new instances of an activity are
              created and how they interact with existing activities. The four main launch modes are:
            </p>
            <ul className="list-disc list-inside mb-2 space-y-1 text-primary font-medium">
              <li>Standard (default)</li>
              <li>SingleTop</li>
              <li>SingleTask</li>
              <li>SingleInstance</li>
            </ul>
            <p className="text-primary/70 mb-6">
              Each launch mode controls the behavior of activities when they are
              launched and influences the activity lifecycle differently.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              To understand the interaction between the activity lifecycle and
              launch modes, let's break down the behavior of each mode along with a
              flowchart-like explanation.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="lifecycle-and-modes" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Activity Lifecycle and Launch Modes</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Understanding how launch modes interact with the Android activity lifecycle is crucial for building efficient applications.
            </p>
          </section>

          {/* SECTION 3 */}
          <section id="standard-mode" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Standard Launch Mode</h2>
            <div className="bg-secondary/80 rounded-lg p-6 mb-10 border border-primary/40 shadow-glow">
              <p className="text-primary/90 leading-relaxed mb-3">
                <strong className="text-secondary">Standard Launch Mode (Default)</strong><br />
                Every time you launch an activity, a new instance of the activity is created and pushed onto the activity stack.
              </p>
              <p className="text-primary/80 mb-2">
                <span className="font-semibold">Behavior:</span> No special restrictions on activity creation.<br />
                <span className="font-semibold">Lifecycle Flow:</span> When the activity is launched, it goes through <code>onCreate()</code>, <code>onStart()</code>, <code>onResume()</code>, and so on.<br />
                <span className="font-semibold">Example:</span> Launching the same activity from multiple places in your app will create multiple instances of the activity.
              </p>
              <ol className="list-decimal list-inside mb-4 space-y-2 text-primary">
                <li>Activity 1 → Activity 2 (New instance created)</li>
                <li>Activity 2 → Activity 3 (New instance created)</li>
              </ol>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="singletop-mode" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">SingleTop Launch Mode</h2>
            <div className="bg-secondary/80 rounded-lg p-6 mb-10 border border-primary/40 shadow-glow">
              <p className="text-primary/90 mb-3">
                <strong className="text-secondary">SingleTop</strong> mode lets an activity reuse itself if it's already on top of the stack, otherwise creates a new instance.
              </p>
              <p className="text-primary/80 mb-4">
                <span className="font-semibold">Behavior:</span> If the activity is already at the top of the stack, <code>onNewIntent()</code> is called instead of creating a new instance.
              </p>
              <ol className="list-decimal list-inside mb-4 space-y-2 text-primary">
                <li>Activity 1 → Activity 2 (New instance created)</li>
                <li>Activity 2 → Activity 2 (Existing instance, <code>onNewIntent()</code> called)</li>
              </ol>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="singletask-mode" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">SingleTask Launch Mode</h2>
            <div className="bg-secondary/80 rounded-lg p-6 mb-10 border border-primary/40 shadow-glow">
              <p className="text-primary/90 mb-3">
                <strong className="text-secondary">SingleTask</strong> ensures only one instance of the activity exists in the task stack.
              </p>
              <p className="text-primary/80 mb-4">
                <span className="font-semibold">Behavior:</span> If the activity exists anywhere in the stack, all activities above it are destroyed, and <code>onNewIntent()</code> is called.
              </p>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="singleinstance-mode" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">SingleInstance Launch Mode</h2>
            <div className="bg-secondary/80 rounded-lg p-6 mb-10 border border-primary/40 shadow-glow">
              <p className="text-primary/90 mb-3">
                <strong className="text-secondary">SingleInstance</strong> creates the activity in a separate task and ensures it's the only activity in that task.
              </p>
              <p className="text-primary/80 mb-4">
                <span className="font-semibold">Behavior:</span> The activity runs in its own task, isolated from other activities.
              </p>
            </div>
          </section>

          {/* SECTION 7 */}
          <section id="comparison" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Comparison Table</h2>
            <div className="bg-secondary/80 rounded-lg p-6 mb-10 border border-primary/40 shadow-glow">
              <div className="overflow-x-auto">
                <table className="w-full text-primary text-sm">
                  <thead>
                    <tr className="border-b border-primary/40">
                      <th className="text-left py-2 text-primary">Launch Mode</th>
                      <th className="text-left py-2 text-primary">Instance Creation</th>
                      <th className="text-left py-2 text-primary">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-2">Standard</td>
                      <td className="py-2">Always creates new</td>
                      <td className="py-2">Default behavior</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2">SingleTop</td>
                      <td className="py-2">Reuses if on top</td>
                      <td className="py-2">Search activities</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2">SingleTask</td>
                      <td className="py-2">One per task</td>
                      <td className="py-2">Home screen</td>
                    </tr>
                    <tr>
                      <td className="py-2">SingleInstance</td>
                      <td className="py-2">One in separate task</td>
                      <td className="py-2">Launcher activities</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 8 */}
          <section id="best-practices" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Best Practices</h2>
            <div className="bg-secondary/80 rounded-lg p-6 mb-10 border border-primary/40 shadow-glow">
              <ul className="list-disc list-inside space-y-2 text-primary/80">
                <li>Use Standard mode for most activities</li>
                <li>Use SingleTop for search or filter activities</li>
                <li>Use SingleTask for main/home activities</li>
                <li>Use SingleInstance sparingly, only for special cases</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .drop-shadow-glow {
          text-shadow: 0 0 12px rgba(0, 0, 0, 0.18), 0 0 2px rgba(0, 0, 0, 0.15);
        }
        .shadow-glow {
          box-shadow: 0 0 32px rgba(0, 0, 0, 0.08), 0 0 8px rgba(0, 0, 0, 0.12);
        }
        .scroll-mt-24 {
          scroll-margin-top: 6rem;
        }
      `}</style>
    </div>
  );
};

export default Blog1;
