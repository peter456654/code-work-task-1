// pages/blog20.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog20 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "types-of-predictive-modeling", title: "Types of Predictive Modeling" },
    { id: "classification-models", title: "Classification Models" },
    { id: "regression-models", title: "Regression Models" },
    { id: "time-series-models", title: "Time Series Models" },
    { id: "clustering-models", title: "Clustering Models" },
    { id: "neural-network-models", title: "Neural Network Models" },
    { id: "industry-use-cases", title: "Industry Use Cases" },
    { id: "benefits-of-predictive-modeling", title: "Benefits of Predictive Modeling" },
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
            What is Predictive Analytics?
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/man-designer-architect-working-new-project-using-pc-with-graphic-software_482257-8233.jpg"
              alt="What is Predictive Analytics"
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

          {/* INTRODUCTION */}
          <section id="introduction" className="scroll-mt-24">
            <p className="text-white/80 text-xl leading-relaxed mb-6">
              Predictive analytics is a powerful branch of data science that utilizes statistical techniques, machine learning, deep learning, and neural networks to forecast future outcomes based on historical data. It helps businesses and organizations make smarter decisions by identifying patterns and trends before they happen.
            </p>
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              From predicting customer churn to forecasting product demand, predictive analytics transforms raw data into actionable insights. With the rise of advanced AI algorithms, this approach is being used across industries to gain a competitive edge.
            </p>
          </section>

          {/* SECTION: Types of Predictive Modeling */}
          <section id="types-of-predictive-modeling" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Types of Predictive Modeling</h2>
            <p className="text-white/80 leading-relaxed mb-10">
              Predictive modeling is a vital part of data science and machine learning. It uses historical data to forecast future events or behaviors. Let's dive into the most commonly used types of predictive models, each designed for specific outcomes and data structures.
            </p>
          </section>

          <section id="classification-models" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-white mb-2">1. Classification Models</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Purpose:</strong> Classification models are used when the output variable is categorical, meaning it belongs to a specific group or class. The model assigns input data to predefined categories.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>How it Works:</strong> By learning patterns from labeled data, the model can predict whether new data points fall under category A or B (or more).
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Example Use Case:</strong> Imagine you're running an e-commerce site and want to predict whether a visitor will click an ad or not. The model will classify users into "click" or "no-click" based on past behavior, device type, and demographics.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Common Algorithms:</strong>
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-10 space-y-2">
              <li>Logistic Regression</li>
              <li>Decision Trees</li>
              <li>Random Forest</li>
              <li>Support Vector Machines (SVM)</li>
            </ul>
          </section>

          <section id="regression-models" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-white mb-2">2. Regression Models</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Purpose:</strong> Regression models are used for continuous numerical predictions. They estimate relationships between variables.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>How it Works:</strong> The model analyzes past numerical data to detect patterns and trends, enabling accurate prediction of future outcomes.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Example Use Case:</strong> The company seeks to forecast its sales revenue for the upcoming quarter. Using past sales data, marketing spend, and seasonal trends, a regression model estimates future figures.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Common Algorithms:</strong>
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-10 space-y-2">
              <li>Linear Regression</li>
              <li>Lasso Regression</li>
              <li>Ridge Regression</li>
              <li>Polynomial Regression</li>
            </ul>
          </section>

          <section id="time-series-models" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-white mb-2">3. Time Series Models</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Purpose:</strong> Time series models are ideal for data that's collected chronologically, helping to analyze trends and make sequential forecasts.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>How it Works:</strong> These models understand how values change over time. They account for seasonality, trends, and patterns in time-based data.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Example Use Case:</strong> Predicting energy usage or stock market trends by analyzing data from previous months or years.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Common Models:</strong>
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-10 space-y-2">
              <li>ARIMA (AutoRegressive Integrated Moving Average)</li>
              <li>Prophet (by Facebook)</li>
              <li>LSTM (Long Short-Term Memory) is a type of neural network model designed to process and predict patterns in sequential data.</li>
            </ul>
          </section>

          <section id="clustering-models" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-white mb-2">4. Clustering Models</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Purpose:</strong> Unlike classification, clustering models are unsupervised and group similar data points together without prior labeling.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>How it Works:</strong> These models uncover hidden patterns by grouping data into clusters or segments with similar features.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Example Use Case:</strong> Customer segmentation for marketing. A company can cluster users based on age, spending habits, or behavior to tailor marketing campaigns.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Popular Algorithms:</strong>
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-10 space-y-2">
              <li>K-Means</li>
              <li>DBSCAN</li>
              <li>Hierarchical Clustering</li>
            </ul>
          </section>

          <section id="neural-network-models" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-white mb-2">5. Neural Network Models</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Purpose:</strong> These are advanced predictive models designed to mimic the human brain's structure. They handle large volumes of complex, unstructured data like images, audio, and text.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>How it Works:</strong> Neural networks process and learn from data through multiple layers of interconnected nodes, often referred to as 'neurons'. Deep learning models can capture intricate patterns and nonlinear relationships.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Example Use Case:</strong> Image recognition in Healthcare (detecting tumors), Sentiment analysis in social media, Voice assistants like Siri or Alexa.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Popular Architectures:</strong>
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-10 space-y-2">
              <li>CNN (Convolutional Neural Networks) – great for image data</li>
              <li>RNN/LSTM – for sequences like text or speech</li>
              <li>Transformers – used in modern language models</li>
            </ul>
          </section>

          {/* SECTION: Predictive Analytics Industry Use Cases */}
          <section id="industry-use-cases" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Predictive Analytics Industry Use Cases</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Predictive analytics is not limited to one sector — it's being widely adopted across industries:
            </p>

            <h3 className="text-xl font-semibold text-white mb-2">Healthcare</h3>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li>Predict patient readmission risk</li>
              <li>Detect early signs of diseases using medical imaging</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">Retail</h3>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li>Forecast demand for products</li>
              <li>Recommend personalized offers using shopping behavior data</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">Finance</h3>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li>Detect fraudulent transactions</li>
              <li>Assess credit risk and predict loan defaults</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">Manufacturing</h3>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li>Predict equipment failure before it happens (predictive maintenance)</li>
              <li>Optimize supply chain and inventory levels</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">Marketing</h3>
            <ul className="list-disc ml-6 text-white/80 mb-10 space-y-2">
              <li>Identify potential customers most likely to convert</li>
              <li>Reduce churn by predicting when users are about to leave</li>
            </ul>
          </section>

          {/* SECTION: Benefits of Predictive Modeling */}
          <section id="benefits-of-predictive-modeling" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Benefits of Predictive Modeling</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Using predictive models can bring several advantages to any organization:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-10 space-y-2">
              <li><strong>Improved Decision-Making:</strong> With future insights, businesses can take timely actions.</li>
              <li><strong>Operational Efficiency:</strong> Helps automate and optimize routine processes.</li>
              <li><strong>Cost Savings:</strong> Avoid risks and prevent losses through early warnings.</li>
              <li><strong>Personalized Experiences:</strong> Offer tailored services based on individual behavior.</li>
            </ul>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Predictive analytics bridges the gap between raw data and actionable foresight. By leveraging machine learning, deep learning, and neural networks, businesses can uncover opportunities, prevent risks, and make more informed decisions.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Whether you're in finance, retail, healthcare, or any data-rich sector, integrating predictive models can be a game-changer.
            </p>
          </section>

          {/* SECTION: Internal Link */}
          <section id="explore-more" className="scroll-mt-24">
            <p className="text-white/80 leading-relaxed mb-6">
              <strong>Explore More:</strong> Discover the broader impact of AI <Link href="/ai-transforming-software" className="text-primary hover:underline font-medium"> How is AI Transforming Software Development?</Link>
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

export default Blog20;
