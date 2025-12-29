// pages/blog21.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog21 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "how-do-neural-networks-work", title: "How Do Neural Networks Work?" },
    { id: "input-layer", title: "Input Layer" },
    { id: "hidden-layers", title: "Hidden Layers" },
    { id: "output-layer", title: "Output Layer" },
    { id: "types-of-neural-networks", title: "Types of Neural Networks" },
    { id: "neural-networks-vs-deep-learning", title: "Neural Networks vs. Deep Learning" },
    { id: "history-of-neural-networks", title: "History of Neural Networks" },
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
            What is a Neural Network?
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/modern-computer-screen-with-social-network-media-concept-3d-rendering_258654-25313.jpg"
              alt="What is a Neural Network"
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
            <p className="text-primary/80 text-xl leading-relaxed mb-6">
              A neural network is a type of machine learning model inspired by the way neurons in the human brain communicate. It consists of layers of interconnected nodes (neurons) that process input data to produce an output. These models are trained on large datasets to learn patterns and improve accuracy over time.
            </p>
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              For example, when you upload a photo to your phone and it recognizes your face, a neural network is working in the background to identify facial features.
            </p>
          </section>

          {/* SECTION: How Do Neural Networks Work? */}
          <section id="how-do-neural-networks-work" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">How Do Neural Networks Work?</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Neural networks consist of layers of artificial neurons that process data in a structured manner. These layers enable the system to recognize patterns, identify connections, and make informed decisions based on that analysis.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              Let's go through it step by step using a practical example.
            </p>
          </section>

          <section id="input-layer" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-2">1. Input Layer</h3>
            <p className="text-primary/80 leading-relaxed mb-4">
              This is where the data enters the neural network. Each neuron in the layer corresponds to a specific feature extracted from the input data.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              <strong>Example:</strong> Suppose you're training a neural network to recognize handwritten digits (like from the MNIST dataset). Each 28x28 pixel image of a digit is flattened into 784 inputs (28 × 28 = 784). The input layer receives pixel values that range from 0 to 255.
            </p>
          </section>

          <section id="hidden-layers" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-2">2. Hidden Layers</h3>
            <p className="text-primary/80 leading-relaxed mb-4">
              This is the "brain" of the network. It calculates values by applying weights, adjusting for biases, and using activation functions to determine the significance of each input feature.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Each neuron in a hidden layer:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li>Receives inputs from the previous layer</li>
              <li>Applies weights and a bias to each input</li>
              <li>Passes the result through an activation function (like ReLU, Sigmoid, or Tanh)</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-4">
              Think of it like this: Weights determine how much influence a feature has (e.g., is the top-left pixel important?). Activation functions apply non-linear transformations that enable the network to capture intricate patterns in the data.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              <strong>Continuing the Example:</strong> If the image shows a handwritten "3", the neurons in the hidden layer learn the shape, curves, and pixel density patterns that distinguish it from a "2" or "8".
            </p>
          </section>

          <section id="output-layer" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-2">3. Output Layer</h3>
            <p className="text-primary/80 leading-relaxed mb-4">
              The final layer gives the prediction. In classification problems, each node in the output layer represents a class (for example, digits 0 to 9, which comprise 10 classes).
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Softmax activation typically transforms outputs into probabilities that add up to 1.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              <strong>Example Output:</strong> Here's an example of what the output layer could generate: [0.01, 0.02, 0.10, 0.80, 0.01, 0.01, 0.02, 0.01, 0.01, 0.01] It means there's an 80% chance the input is the digit "3".
            </p>
          </section>

          {/* SECTION: Types of Neural Networks */}
          <section id="types-of-neural-networks" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Types of Neural Networks</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Neural networks come in different architectures based on the task they are meant to perform:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li><strong>Feedforward Neural Networks (FNN):</strong> Data moves in one direction. Ideal for basic prediction models.</li>
              <li><strong>Convolutional Neural Networks (CNNs):</strong> Primarily applied in computer vision tasks like image classification and detection.</li>
              <li><strong>Recurrent Neural Networks (RNNs):</strong> Tailored for processing sequential data such as natural language, time series, or audio.</li>
              <li><strong>Generative Adversarial Networks (GANs):</strong> Consist of two networks that compete with each other to generate new data.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              Each type has its specific use case in industries such as healthcare, finance, marketing, and entertainment.
            </p>
          </section>

          {/* SECTION: Neural Networks vs. Deep Learning */}
          <section id="neural-networks-vs-deep-learning" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Neural Networks vs. Deep Learning</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Although the terms are frequently swapped, there's a slight distinction between them.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Neural networks serve as the foundation for many machine learning systems. Deep learning involves constructing neural networks with multiple hidden layers, enabling them to model highly complex relationships within data.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              Simply put, deep learning relies on neural networks—but not every neural network is deep enough to be classified as deep learning. Deep learning enables more complex, layered architectures capable of handling large-scale data and achieving high accuracy.
            </p>
          </section>

          {/* SECTION: History of Neural Networks */}
          <section id="history-of-neural-networks" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">History of Neural Networks</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              The concept of neural networks dates back to the 1940s with the creation of the first artificial neuron, the McCulloch-Pitts model. Back in the 1980s, the introduction of backpropagation made neural network training more feasible. Massive datasets and improved computing power sparked a major revival in the field during the 2010s.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Key milestones include:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li>1958 – Perceptron by Frank Rosenblatt</li>
              <li>1986 – Backpropagation algorithm popularized</li>
              <li>2012 – CNN breakthrough in ImageNet competition</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              Today, Neural networks power tools like ChatGPT, Siri, and self-driving cars.
            </p>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Neural networks are revolutionizing how machines learn and make decisions. From recognizing images to translating languages, their applications are vast and growing. As technology advances, understanding these foundational models is essential for anyone interested in AI and machine learning.
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

export default Blog21;
