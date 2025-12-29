// pages/blog27.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog27 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "natural-language-processing", title: "Introduction to NLP" },
    { id: "libraries-for-nlp", title: "Libraries for NLP" },
    { id: "nlp-text-normalization", title: "Text Normalization in NLP" },
    { id: "representation-and-embedding", title: "Text Representation and Embedding Techniques" },
    { id: "nlp-deep-learning-techniques", title: "NLP Deep Learning Techniques" },
    { id: "nlp-projects", title: "NLP Projects and Practice" },
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
            Natural Language Processing (NLP) Essentials
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="/blog/blog27.jpg"
              alt="Natural Language Processing Essentials"
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

          <p className="text-white/80 text-xl leading-relaxed mb-10">
            Natural Language Processing (NLP) is the branch of artificial intelligence that focuses on enabling machines to read, understand, interpret, and generate human language. It powers tools we use every day—like Google Translate, chatbots, spam filters, and even voice assistants like Siri and Alexa[70][71]. In this comprehensive beginner's guide, we'll explore NLP fundamentals, key libraries, practical examples, and hands-on project ideas to help you get started.
          </p>

          {/* SECTION: Introduction to NLP */}
          <section id="natural-language-processing" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction to NLP</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Natural Language Processing bridges the gap between computers and human language. It allows machines to perform tasks such as:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li>Translating text (e.g., English to Spanish)</li>
              <li>Summarizing documents automatically</li>
              <li>Detecting emotions or intent in customer reviews</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              NLP models break down sentences into smaller units (tokens), remove unnecessary words, and analyze context to generate meaningful output[68][69].
            </p>
          </section>

          {/* SECTION: Libraries for NLP */}
          <section id="libraries-for-nlp" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Libraries for NLP</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              To make NLP implementation easier, several open-source libraries are available:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>NLTK (Natural Language Toolkit):</strong> Best for beginners and academic use.</li>
              <li><strong>spaCy:</strong> Industrial-strength NLP with fast performance.</li>
              <li><strong>TextBlob:</strong> Simplified interface for sentiment analysis and translation.</li>
              <li><strong>Hugging Face Transformers:</strong> State-of-the-art models like BERT and GPT.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-4">
              You can integrate these libraries into Python projects to quickly build NLP applications. For instance, using TextBlob:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <pre className="text-green-400 text-sm overflow-x-auto">
{`from textblob import TextBlob
blob = TextBlob("I love natural language processing!")
print(blob.sentiment)`}
              </pre>
            </div>
            <p className="text-white/80 leading-relaxed mb-10">
              It gives the polarity (positive/negative) and subjectivity of the text[67].
            </p>
          </section>

          {/* SECTION: Text Normalization in NLP */}
          <section id="nlp-text-normalization" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Text Normalization in NLP</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Before analyzing text, it must be cleaned. Text normalization is the step that brings uniformity to the text.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Common steps include:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Tokenization:</strong> Splitting text into words or phrases</li>
              <li><strong>Lowercasing:</strong> Standardizing text to lowercase</li>
              <li><strong>Stopword Removal:</strong> Removing common words like "the," "is"</li>
              <li><strong>Stemming/Lemmatization:</strong> Reducing words to their root form</li>
            </ul>
            <div className="bg-primary/20 border border-secondary/30 rounded-lg p-6 mb-6">
              <p className="text-secondary font-semibold mb-2">Example:</p>
              <p className="text-white/80">
                <strong>Before:</strong> "The cats are dashing."
              </p>
              <p className="text-white/80">
                <strong>After:</strong> "cat run quick"
              </p>
            </div>
            <p className="text-white/80 leading-relaxed mb-10">
              Clean text improves model performance and reduces noise in training[72].
            </p>
          </section>

          {/* SECTION: Text Representation and Embedding Techniques */}
          <section id="representation-and-embedding" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Text Representation and Embedding Techniques</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Since machines don't understand text, we convert it into numbers.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Popular techniques include:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Bag of Words (BoW):</strong> Counts how often each word appears</li>
              <li><strong>TF-IDF:</strong> Measures how important a word is in a document</li>
              <li><strong>Word Embeddings:</strong> Like Word2Vec and GloVe, which represent words in a vector space</li>
              <li><strong>Contextual Embeddings:</strong> Like BERT, which understands context</li>
            </ul>
            <div className="bg-gray-900 rounded-lg p-4 mb-10">
              <pre className="text-green-400 text-sm overflow-x-auto">
{`from sklearn.feature_extraction.text import TfidfVectorizer
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(["NLP is awesome", "Machine learning is fun"])`}
              </pre>
            </div>
          </section>

          {/* SECTION: NLP Deep Learning Techniques */}
          <section id="nlp-deep-learning-techniques" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">NLP Deep Learning Techniques</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Deep learning powers modern NLP models to comprehend the structure and intent of language.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Common models:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>RNN (Recurrent Neural Network):</strong> For sequence-based data</li>
              <li><strong>LSTM (Long Short-Term Memory):</strong> Handles long-term dependencies</li>
              <li><strong>Transformers:</strong> Like BERT, GPT—current SOTA (state-of-the-art)</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              Transformers such as BERT are utilized in Google Search, summarization tools, and sentiment analysis engines.
            </p>
          </section>

          {/* SECTION: NLP Projects and Practice */}
          <section id="nlp-projects" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">NLP Projects and Practice</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Start learning NLP by building simple projects:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Sentiment Analysis:</strong> Classify tweets as positive or negative</li>
              <li><strong>Chatbot:</strong> Build a rule-based or AI-based bot</li>
              <li><strong>NER (Named Entity Recognition):</strong> Highlight people, places, and companies in news articles</li>
              <li><strong>Text Summarizer:</strong> Automatically condense long articles</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              Use spaCy or Transformers for real-time applications.
            </p>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Natural Language Processing enables computers to interpret and comprehend human speech and text.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Whether you are analyzing text, building chatbots, or generating content, NLP is a valuable skill. With the right tools and practice, anyone can get started—even without a deep AI background.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              By learning text normalization, embeddings, and modern libraries, you will be ready to build intelligent, human-like applications.
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

export default Blog27;
