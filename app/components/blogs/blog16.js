// pages/blog16.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog16 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "how-does-deep-learning-work", title: "How Does Deep Learning Work?" },
    { id: "types-of-deep-learning-models", title: "Types of Deep Learning Models" },
    { id: "choosing-the-right-model", title: "Choosing the Right Model" },
    { id: "deep-learning-use-cases", title: "Deep Learning Use Cases" },
    { id: "deep-learning-in-industry", title: "Deep Learning in Industry Applications" },
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
         What is  Deep Learning
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/generative-ai-virtual-assistant-tools-prompt-engineer-end-user-snugly_31965-651475.jpg"
              alt="What is Deep Learning"
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

          <section id="introduction" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              Deep learning essentially refers to that part of machine learning which, through multi-layer neural networks, can mimic the human brain’s decision process. It powers almost all present applications of artificial intelligence. Unlike traditional machine learning, deep learning models can learn features and patterns from raw data on their own—images, audio, and text—without human intervention. This technology fuels many advanced applications available today, including facial recognition, self-driving cars, and instant language translation.
            </p>
          </section>

          <section id="how-does-deep-learning-work" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">How Does Deep Learning Work?</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Deep learning models consist of several layers of artificial neurons that receive and process data. Every layer indirectly processes the input and transfers the output to the next one. This layering enables the model to learn complex patterns and representations.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              In image recognition problems, for example, the first layer might detect edges, the next layer identifies geometric patterns, and the final layer classifies objects such as traffic signs or medical scans.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              Neural networks become more powerful with bigger datasets and more computational power; thus, they are ideal for complicated and computationally heavy tasks.
            </p>
          </section>

          <section id="types-of-deep-learning-models" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Types of Deep Learning Models</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Deep learning models use artificial neural networks to recognize and learn complex patterns from large volumes of data. These models resemble how the human brain processes information and are widely applied in computer vision, natural language processing, and speech recognition.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              The primary kinds of deep learning models are as follows.
            </p>
            <h3 className="text-xl font-semibold text-primary mb-2">1. Convolutional Neural Networks (CNNs)</h3>
            <p className="text-primary/80 leading-relaxed mb-4">
              <strong>Most suitable for:</strong> Image and video recognition, medical image analysis, and object detection. <br />
              CNNs are developed especially to handle pixel data using layers that automatically identify patterns such as edges, textures, and shapes. <br />
              <strong>Example:</strong> Face recognition, self-driving, and MRI scan analysis.
            </p>
            <h3 className="text-xl font-semibold text-primary mb-2">2. Recurrent Neural Networks (RNNs)</h3>
            <p className="text-primary/80 leading-relaxed mb-4">
              <strong>Most suitable for:</strong> Time-series data, text processing, and speech recognition. <br />
              Recurrent neural networks suit sequential data where order matters. Loops in their structure allow information to persist. <br />
              <strong>Example:</strong> Language translation, chatbots, and stock market forecasting.
            </p>
            <h3 className="text-xl font-semibold text-primary mb-2">3. Long Short-Term Memory Networks (LSTMs)</h3>
            <p className="text-primary/80 leading-relaxed mb-4">
              <strong>Most suitable for:</strong> Long-term sequential data. <br />
              LSTMs are a special kind of RNN capable of learning very long-range dependencies. They solve the vanishing gradient problem found in standard RNNs. <br />
              <strong>Example:</strong> Generating written texts, music pieces, and speech.
            </p>
            <h3 className="text-xl font-semibold text-primary mb-2">4. Generative Adversarial Networks (GANs)</h3>
            <p className="text-primary/80 leading-relaxed mb-4">
              <strong>Most suitable for:</strong> Creating realistic data such as images, videos, or audio. <br />
              GANs have two networks—a generator and a discriminator—set up as rivals. This enables generating synthetic data that closely resembles real data. <br />
              <strong>Example:</strong> Photorealistic visual creation, image quality improvement, and artistic design generation.
            </p>
            <h3 className="text-xl font-semibold text-primary mb-2">5. Autoencoders</h3>
            <p className="text-primary/80 leading-relaxed mb-4">
              <strong>Most suitable for:</strong> Data compression and noise reduction. <br />
              Autoencoders learn to compress and reconstruct data. Common uses include dimensionality reduction and anomaly detection. <br />
              <strong>Example:</strong> Image denoising, fraud detection, and feature extraction.
            </p>
            <h3 className="text-xl font-semibold text-primary mb-2">6. Transformers</h3>
            <p className="text-primary/80 leading-relaxed mb-10">
              <strong>Most suitable for:</strong> NLP tasks like translation, summarization, and sentiment analysis. <br />
              Transformers rely on self-attention mechanisms to recognize relationships between every word in a sentence. These technologies form the core of models such as BERT and GPT. <br />
              <strong>Example:</strong> Conversational agents, online search, and language understanding systems.
            </p>
          </section>

          <section id="choosing-the-right-model" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">How to Choose the Right Model</h2>
            <p className="text-primary/80 leading-relaxed mb-4">The deep learning model to be chosen should be based on:</p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li>Data type: image, text, or time-series</li>
              <li>Goals: classification, prediction, generation</li>
              <li>Availability of computational resources</li>
            </ul>
          </section>

          <section id="deep-learning-use-cases" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Deep Learning Use Cases</h2>
            <p className="text-primary/80 leading-relaxed mb-4">Deep learning is transforming industries with high accuracy and automation of complex tasks:</p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li><strong>Healthcare:</strong> Cancer identification through medical images or patient outcome prediction.</li>
              <li><strong>Finance:</strong> Fraud detection, automated trading strategies, and credit rating evaluation.</li>
              <li><strong>Retail:</strong> Personalized recommendations and customer behavior prediction.</li>
              <li><strong>Cybersecurity:</strong> Identifying malware and network anomalies.</li>
              <li><strong>Autonomous Driving:</strong> Enabling cars to recognize objects and make real-time driving decisions.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10"><strong>Deep Learning Applications in the Real World</strong></p>
          </section>

          <section id="deep-learning-in-industry" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Deep Learning in Industry Applications</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              A great number of industries today are deeply committed to deep learning to streamline operations and enhance customer experiences:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li><strong>Manufacturing:</strong> Predictive maintenance and defect detection in production lines.</li>
              <li><strong>Agriculture:</strong> Analyzing satellite images to monitor crop health.</li>
              <li><strong>Marketing:</strong> Sentiment analysis and customer segmentation.</li>
              <li><strong>Education:</strong> Adaptive learning platforms and grading automation.</li>
              <li><strong>Legal:</strong> Document classification and contract analysis.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              These examples show that deep learning is not just a temporary trend; it has become core to how modern businesses operate.
            </p>
          </section>

          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              With deep learning, the complexity of data can be handled across sectors with remarkable capability—driving innovation. From pattern identification to smart predictions, it empowers businesses to automate and optimize like never before. Understanding deep learning, the available models, and application areas helps organizations decide how to use it to stay competitive.
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

export default Blog16;
