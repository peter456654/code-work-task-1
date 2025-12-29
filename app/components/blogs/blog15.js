// pages/blog15.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog15 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "understanding-the-differences-in-ai-concepts", title: "Understanding the Differences in AI Concepts" },
    { id: "key-approaches", title: "Key Approaches in Machine Learning" },
    { id: "top-algorithms", title: "Top Machine Learning Algorithms to Know" },
    { id: "pros-and-cons", title: "Pros and Cons of Machine Learning Technology" },
    { id: "reallife-applications", title: "Real-Life Applications of Machine Learning" },
    { id: "common-challenges", title: "Common Machine Learning Challenges to Overcome" },
    { id: "selecting-the-best-platform", title: "How to Select the Best AI Platform" },
    { id: "conclusion", title: "Conclusion" },
    { id: "explore", title: "Explore More" },
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
            What is Machine Learning? A Comprehensive Guide
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/generative-ai-virtual-assistant-tools-prompt-engineer-end-user-snugly_31965-473234.jpg"
              alt="What is Machine Learning"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary-400/20 flex items-center justify-center text-primary-400 font-extrabold drop-shadow-glow">
              F
            </div>
            <span className="uppercase tracking-wide font-semibold">Felista</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary-400" />
              <span>16 July 2025</span>
            </div>
          </div>

          {/* INTRODUCTION */}
          <section id="introduction" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              Machine learning (ML), a subset of artificial intelligence (AI), empowers machines to learn from experience, operate independently, and enhance accuracy through exposure to data. It uses algorithms to identify patterns, make decisions, and predict outcomes based on data. Whether in voice assistants, recommendation engines, or fraud detection, machine learning is revolutionizing industries globally.
            </p>
          </section>

          {/* SECTION: Understanding the Differences in AI Concepts */}
          <section id="understanding-the-differences-in-ai-concepts" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Understanding the Differences in AI Concepts</h2>
            <h3 className="text-xl font-semibold text-primary mb-2">Machine Learning vs. Deep Learning vs. Neural Networks</h3>
            <p className="text-primary/80 leading-relaxed mb-10">
              Although commonly used as synonyms, these terms refer to distinct concepts. Machine learning is a broader field. Deep learning is a subset of ML that uses layered neural networks to model complex patterns. Neural networks mimic the human brain. They serve as the foundation for deep learning applications such as image recognition and language understanding.
            </p>
          </section>

          {/* SECTION: Key Approaches in Machine Learning */}
          <section id="key-approaches" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Key Approaches in Machine Learning</h2>
            <h3 className="text-xl font-semibold text-primary mb-2">1. Supervised Learning</h3>
            <p className="text-primary/80 leading-relaxed mb-4">
              In this method, the algorithm learns from a labeled dataset. Each example in the data includes both the input and the correct output. The algorithm's job is to learn the relationship so it can predict future results. <br />
              <strong>Example:</strong> A spam filter that learns which emails are spam (based on past labeled examples).
            </p>
            <h3 className="text-xl font-semibold text-primary mb-2">2. Unsupervised Learning</h3>
            <p className="text-primary/80 leading-relaxed mb-4">
              Here, the data does not have labeled outputs. The system independently uncovers patterns or clusters within the data. <br />
              <strong>Example:</strong> Grouping customers based on their behavior without knowing their buying history (customer segmentation).
            </p>
            <h3 className="text-xl font-semibold text-primary mb-2">3. Reinforcement Learning</h3>
            <p className="text-primary/80 leading-relaxed mb-10">
              This type is based on reward and punishment. The algorithm evaluates outcomes, reinforcing successful actions while discouraging incorrect ones. <br />
              <strong>Example:</strong> A self-driving car learning how to park by trial and error.
            </p>
          </section>

          {/* SECTION: Top Machine Learning Algorithms to Know */}
          <section id="top-algorithms" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Top Machine Learning Algorithms to Know</h2>
            <h3 className="text-xl font-semibold text-primary mb-2">Widely Used Algorithms in ML Projects</h3>
            <h4 className="text-lg font-semibold text-primary mb-2">1. Linear Regression</h4>
            <p className="text-primary/80 leading-relaxed mb-4">
              A basic algorithm that shows the relationship between two variables. It predicts a numeric value (such as a house price) based on input (like the size of the house).
            </p>
            <h4 className="text-lg font-semibold text-primary mb-2">2. Decision Trees</h4>
            <p className="text-primary/80 leading-relaxed mb-4">
              These are like flowcharts. They split the data based on conditions and help in classification or prediction tasks. <br />
              <strong>Example:</strong> Deciding if a person will buy a product based on age, income, and browsing history.
            </p>
            <h4 className="text-lg font-semibold text-primary mb-2">3. Random Forest</h4>
            <p className="text-primary/80 leading-relaxed mb-4">
              A group (or forest) of decision trees is combined to improve accuracy and reduce errors in predictions.
            </p>
            <h4 className="text-lg font-semibold text-primary mb-2">4. K-Means Clustering</h4>
            <p className="text-primary/80 leading-relaxed mb-4">
              In unsupervised learning, algorithms automatically group similar data points into clusters, identifying patterns without prior knowledge of what to look for. <br />
              <strong>Example:</strong> Grouping songs based on listening behavior.
            </p>
            <h4 className="text-lg font-semibold text-primary mb-2">5. Support Vector Machine (SVM)</h4>
            <p className="text-primary/80 leading-relaxed mb-10">
              A powerful classification method that draws a boundary between categories of data, making sure the margin between them is as wide as possible.
            </p>
          </section>

          {/* SECTION: Pros and Cons of Machine Learning Technology */}
          <section id="pros-and-cons" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Pros and Cons of Machine Learning Technology</h2>
            <h3 className="text-xl font-semibold text-primary mb-2">Benefits and Limitations of ML</h3>
            <p className="text-primary/80 leading-relaxed mb-4"><strong>Benefits:</strong></p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li>Automates decisions: No need to program every step.</li>
              <li>Improves over time: Learns and gets better with more data.</li>
              <li>Handles big data: Works well even with massive datasets.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-4"><strong>Limitations:</strong></p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li>Needs a lot of data: Algorithms may perform poorly with limited or bad-quality data.</li>
              <li>Can be biased: If data is biased, predictions will be too.</li>
              <li>Not always explainable: Some algorithms act like a "black box," making it hard to explain their decisions.</li>
            </ul>
          </section>

          {/* SECTION: Real-Life Applications of Machine Learning */}
          <section id="reallife-applications" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Real-Life Applications of Machine Learning</h2>
            <h3 className="text-xl font-semibold text-primary mb-2">How ML is Used Across Industries</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li><strong>Healthcare:</strong> Predicting diseases from medical scans.</li>
              <li><strong>Finance:</strong> Spotting fraud in credit card transactions.</li>
              <li><strong>E-Commerce:</strong> Recommending products based on past searches.</li>
              <li><strong>Transportation:</strong> Powering autonomous/self-driving vehicles.</li>
            </ul>
          </section>

          {/* SECTION: Common Machine Learning Challenges to Overcome */}
          <section id="common-challenges" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Common Machine Learning Challenges to Overcome</h2>
            <h3 className="text-xl font-semibold text-primary mb-2">Issues Developers and Businesses Face</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li>Data privacy: Sensitive information must be protected.</li>
              <li>Data quality: Models need clean and complete data.</li>
              <li>Bias: Models can unintentionally discriminate.</li>
              <li>Model explainability: It is Hard to understand how some models work.</li>
            </ul>
          </section>

          {/* SECTION: How to Select the Best AI Platform */}
          <section id="selecting-the-best-platform" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">How to Select the Best AI Platform</h2>
            <h3 className="text-xl font-semibold text-primary mb-2">Factors to Consider for ML Success</h3>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li>Data volume: Ensure the platform can accommodate the volume of your data.</li>
              <li>Integration: Should connect with tools you're already using.</li>
              <li>Scalability: Must grow as your business grows.</li>
              <li>Cost vs. skills: Choose based on your budget and the technical team's skill level.</li>
            </ul>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Machine learning is no longer just a buzzword—it's a powerful technology driving real change across industries. From understanding its core methods and popular algorithms to exploring practical use cases and challenges, ML offers immense potential for businesses and individuals alike. To fully leverage the potential of machine learning, it's essential to select the right platform and keep up with emerging trends as the field progresses. Whether you're just getting started or looking to scale AI solutions, now is the time to embrace the future with machine learning.
            </p>
          </section>

          {/* SECTION: Internal Link */}
          <section id="explore" className="scroll-mt-24">
            <p className="text-primary/80 leading-relaxed mb-6">
              <strong>Explore More:</strong> Discover the broader impact of AI <Link href="/ai-transforming-software" className="text-primary hover:underline font-medium">How is AI Transforming Software Development?</Link>
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

export default Blog15;
