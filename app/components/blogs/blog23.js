// pages/blog23.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog23 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "what-is-artificial-intelligence", title: "What Is Artificial Intelligence?" },
    { id: "machine-learning", title: "Machine Learning: The Core of AI" },
    { id: "deep-learning", title: "Deep Learning: Mimicking the Brain" },
    { id: "generative-ai", title: "Generative AI: Creating with Intelligence" },
    { id: "ai-agents", title: "AI Agents and Agentic AI" },
    { id: "benefits-of-artificial-intelligence", title: "Benefits of Artificial Intelligence" },
    { id: "real-world-applications", title: "Real-World Applications of AI" },
    { id: "challenges", title: "Challenges and Risks in AI" },
    { id: "principles-of-responsible-ai", title: "Principles of Responsible AI" },
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
            What Is Artificial Intelligence?
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/young-person-vr-headset-with-laptop-symbolizing-advanced-technology-immersive-digital_72464-2290.jpg"
              alt="What Is Artificial Intelligence"
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

          {/* SECTION: What Is Artificial Intelligence? */}
          <section id="what-is-artificial-intelligence" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              Artificial Intelligence (AI) refers to the capability of machines to carry out tasks that usually demand human intelligence. These tasks include learning from data, recognizing patterns, making decisions, understanding language, and interacting with humans. Unlike traditional systems that follow fixed rules, AI adapts over time, improving its performance through experience. It combines various technologies and approaches to replicate human cognitive abilities such as perception, reasoning, and problem-solving.
            </p>
          </section>

          {/* SECTION: Machine Learning: The Core of AI */}
          <section id="machine-learning" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Machine Learning: The Core of AI</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Machine Learning (ML) plays a vital role at the core of Artificial Intelligence. It enables machines to learn from data rather than being explicitly programmed for every task. ML systems identify patterns, make predictions, and continuously improve based on feedback.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              There are three major types of machine learning:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li><strong>Supervised Learning:</strong> The system is trained on labeled data; the input and correct output are already known. This helps the model learn accurate predictions, such as identifying spam emails.</li>
              <li><strong>Unsupervised Learning:</strong> This approach finds patterns in unlabeled data. It is useful for discovering hidden groupings, such as customer segmentation in marketing.</li>
              <li><strong>Reinforcement Learning:</strong> The system learns through trial and error by receiving rewards for correct actions and penalties for mistakes. It is often used in robotics and game-playing AI.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              Machine learning powers many tools we use today, including recommendation engines, fraud detection, and predictive analytics.
            </p>
          </section>

          {/* SECTION: Deep Learning: Mimicking the Brain */}
          <section id="deep-learning" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Deep Learning: Mimicking the Brain</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Deep learning is an advanced form of machine learning that uses artificial neural networks inspired by the human brain. These networks have multiple layers that process and learn from large volumes of data.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              Deep learning is powerful when dealing with complex inputs such as images, sound, and text. It is the technology behind facial recognition, voice assistants, automatic language translation, and even self-driving cars. By learning from vast datasets, deep learning models can achieve remarkable accuracy in tasks once considered impossible for machines.
            </p>
          </section>

          {/* SECTION: Generative AI: Creating with Intelligence */}
          <section id="generative-ai" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Generative AI: Creating with Intelligence</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Generative AI refers to systems that don't just analyze data—they create new content. These models can generate human-like text, realistic images, music, and even software code. Examples include tools like ChatGPT for conversations, or DALL·E, which creates images based on text prompts.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              These systems are trained on massive datasets and use transformer-based architectures to learn how language and visuals work. Generative AI is revolutionizing content creation, marketing, product design, and entertainment by allowing faster, scalable, and personalized outputs.
            </p>
          </section>

          {/* SECTION: AI Agents and Agentic AI */}
          <section id="ai-agents" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">AI Agents and Agentic AI</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              AI agents are independent systems that observe their surroundings and act accordingly to accomplish defined objectives. Agentic AI is a more advanced form where these agents can plan multi-step actions, collaborate, and adapt to changing conditions.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              These agents are applied across multiple domains, including virtual assistants for task scheduling, chatbots offering round-the-clock customer support, and smart logistics systems that streamline delivery operations.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              In the future, agentic AI may drive self-managed systems that work alongside humans in more dynamic ways.
            </p>
          </section>

          {/* SECTION: Benefits of Artificial Intelligence */}
          <section id="benefits-of-artificial-intelligence" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Benefits of Artificial Intelligence</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Artificial Intelligence brings many advantages to individuals, businesses, and society. One of the most notable benefits is speed—AI can analyze vast amounts of data and make decisions faster than humans. It also supports automation by taking over repetitive, time-consuming tasks, allowing people to focus on higher-value work.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              AI improves precision by reducing human errors, particularly in fields such as medical diagnosis and data processing. It also enables personalization, tailoring services and experiences based on user behavior.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              In addition, AI offers strong predictive abilities that enable businesses to anticipate trends, avoid potential issues, and make more informed strategic choices.
            </p>
          </section>

          {/* SECTION: Real-World Applications of AI */}
          <section id="real-world-applications" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Real-World Applications of AI</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              AI is being used across various sectors and is becoming an integral part of everyday life. In healthcare, it assists with diagnosing diseases, analyzing medical images, and even conducting robotic surgeries. The finance sector relies on AI for detecting fraudulent transactions, managing risks, and automating trading.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Retail businesses use AI to personalize customer experiences, manage inventory, and offer chatbot support. Transportation has seen innovations like traffic prediction systems and autonomous vehicles. In education, AI powers adaptive learning platforms, automated grading, and customized content delivery.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              AI's use cases extend into nearly every aspect of life. In homes, smart devices use AI to manage lighting, temperature, and security. In agriculture, AI-powered drones monitor crops, while predictive models guide irrigation and harvesting.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              In entertainment, AI suggests music, movies, and even generates creative content. Even government agencies are adopting AI to improve public services, detect fraud, and manage resources more efficiently. Businesses are using it for customer insights, employee performance tracking, and workflow automation.
            </p>
          </section>

          {/* SECTION: Challenges and Risks in AI */}
          <section id="challenges" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Challenges and Risks in AI</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Despite its many benefits, AI also presents significant challenges. One of the major concerns is bias—AI systems can unintentionally reflect human prejudices present in training data. Privacy is another critical issue, especially when sensitive personal information is involved.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              There's also the risk of job displacement as automation replaces certain roles. Security vulnerabilities can make AI systems targets for adversarial attacks.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              Finally, a lack of transparency in how some AI models make decisions can create trust issues, especially in sensitive domains like healthcare or law.
            </p>
          </section>

          {/* SECTION: Principles of Responsible AI */}
          <section id="principles-of-responsible-ai" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Principles of Responsible AI</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              To ensure that AI benefits society, it's important to develop and use it responsibly. Transparency means making AI systems understandable and their outcomes explainable. Accountability ensures that creators and users of AI are held responsible for its impact.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Fairness is key to avoiding discrimination and treating all users equitably. Privacy must be protected at all stages, including data collection, storage, and processing. And regulation is essential to guide ethical use and prevent misuse.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              Responsible AI practices help build trust and ensure that AI works for the good of everyone.
            </p>
          </section>

          {/* SECTION: Final Thoughts */}
          <section id="final-thoughts" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Final Thoughts</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Artificial Intelligence is reshaping how we live, work, and perceive the world around us. From automating routine tasks to creating music, diagnosing diseases, and driving cars, AI is reshaping the world. But with that power comes responsibility.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              The choices we make today about how we build and use AI will define its impact tomorrow.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              With thoughtful development and responsible deployment, AI can become one of humanity's greatest tools for good.
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

export default Blog23;
