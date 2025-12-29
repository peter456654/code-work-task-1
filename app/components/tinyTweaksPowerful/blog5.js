// pages/blog5.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";

const Blog5 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "intro", title: "Introduction" },
    { id: "simple-analogy", title: "Simple Analogy to Understand LoRA" },
    { id: "traditional-vs-lora", title: "Traditional Fine-Tuning vs. LoRA" },
    { id: "intrinsic-rank", title: "The Intrinsic Rank Hypothesis" },
    { id: "visual-representation", title: "Visual Representation" },
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
            LoRA Explained: Tiny Tweaks, Powerful Adaptations
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/Deep-Learning-vs-Machine-Learning.avif"
              alt="LoRA Fine-Tuning Explained"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-primary font-extrabold drop-shadow-glow">
              P
            </div>
            <span className="uppercase tracking-wide font-semibold">Pavithra</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>08 May 2025</span>
            </div>
          </div>

          {/* INTRO */}
          <section id="intro" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-6">
              Fine-tuning large language models (LLMs) like LLaMA or GPT-3 can require billions of parameters, massive GPUs, and weeks of training. But what if you could achieve similar results by training just 0.1% of the parameters?
            </p>
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              What LoRA (Low-Rank Adaptation) helps us do. LoRA is a fine-tuning technique used in machine learning that freezes the base language model and adds small trainable components (small matrices called A and B) into specific layers. These new layers learn task-specific behavior, allowing the model to adapt without updating the full neural network.
            </p>
          </section>

          {/* SECTION 1 */}
          <section id="simple-analogy" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Simple Analogy to Understand LoRA</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Imagine Abhishek relocating from India to North America. Suddenly, none of his appliances fit into the new outlets. He has two options:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>Rewire his entire home to match his Indian plugs (expensive and messy), or</li>
              <li>Just buy a few cheap plug adapters and keep using his appliances.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-6">
              LoRA is like option #2.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              Rather than retraining the whole model (like rewiring the house), LoRA inserts small adapters (low-rank matrices) that allow the model to adapt to a new task. It's lightweight, non-invasive, and cost-effective, making it ideal for parameter-efficient fine-tuning.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="traditional-vs-lora" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Traditional Fine-Tuning vs. LoRA</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Traditional fine-tuning of pre-trained neural networks involves modifying the entire set of model weights. It means changing the original weight matrix (W) and adding a change ΔW, resulting in an updated model expressed as (W + ΔW).
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              However, this approach requires significant computational resources and memory. It often doubles the model size, making it inefficient for resource-constrained environments.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              LoRA takes a different approach. Rather than altering W directly, LoRA breaks down the changes (ΔW) into two low-rank matrices (Wₐ and W_b), which are significantly smaller and trained only during fine-tuning.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              This method reduces the number of trainable parameters dramatically while still allowing the model to adapt effectively to new tasks, all without modifying the core model.
            </p>
          </section>

          {/* SECTION 3 */}
          <section id="intrinsic-rank" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">The Intrinsic Rank Hypothesis</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              LoRA builds on the intrinsic rank hypothesis, which suggests that meaningful model updates exist in a low-dimensional space. Training only the smaller matrices allows LoRA to optimize model training efficiency without compromising performance.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              It makes LoRA in NLP and LoRA for LLaMA/GPT models highly popular in the AI and deep learning communities.
            </p>
          </section>

          {/* Visual Representation */}
          <section id="visual-representation" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Visual Representation</h2>
            <Image
              src="/blog/blogexplain.png"
              alt="Visual Representation of LoRA"
              width={800}
              height={400}
              className="rounded-lg mb-6 object-cover"
            />
            <p className="text-primary/80 leading-relaxed mb-10">
              The image above illustrates how LoRA fine-tuning works. Instead of updating the full pre-trained weight matrix (W), LoRA keeps W frozen and learns a small matrix ΔW, decomposed into Wₐ and W_b (of dimensions d×r and r×d). This low-rank adaptation saves resources and maintains high performance.
            </p>
          </section>

          {/* CONCLUSION */}
          <section id="final-thoughts" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-primary mt-8 mb-4">Final Thoughts</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Low-Rank Adaptation (LoRA) is an example of how a small but impactful change in deep learning model architecture can lead to significant improvements in performance and efficiency.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Whether working with large-scale LLMs, deploying on limited hardware, or experimenting with transfer learning techniques, LoRA provides a scalable and efficient solution.
            </p>
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

export default Blog5;
