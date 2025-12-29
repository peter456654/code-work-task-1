// pages/blog4.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";

const Blog4 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "intro", title: "Introduction" },
    { id: "what-is-model-context", title: "What Is Model Context Protocol?" },
    { id: "why-context-matters", title: "Why Does Context Matter?" },
    { id: "daily-life-impact", title: "How Is Daily Life Affected by It?" },
    { id: "future-of-ai", title: "The Future of AI and Contextual Understanding" },
    { id: "conclusion", title: "Wrapping It Up" },
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
            How Model Context Protocol Is Transforming the Future of AI
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-xl overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/Affordablemarketingideasforyoursmallbusiness_featuredimage.jpg"
              alt="Model Context Protocol in AI"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-primary font-extrabold drop-shadow-glow">
              A
            </div>
            <span className="uppercase tracking-wide font-semibold">Abhishek</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>08 May 2025</span>
            </div>
          </div>

          {/* INTRO */}
          <section id="intro" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-6">
              In‍‌‍‍‌‍‌‍‍‌ the swiftly changing sphere of Artificial Intelligence (AI), we keep hearing about brand new ideas that, in effect, stretch the border between human and machine intellect. Even though some expressions sound complicated, they are extremely powerful tools that could completely change our way of interacting with technology. One of such expressions is <strong className="text-primary">Model Context Protocol</strong>. The fact that an AI understands, adjusts, or decides based on the given context might have been a mystery to you, but you are not the only one figuring this out.
            </p>
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              AI may appear to be an enigma, but the truth is that we use it in our daily lives. Intelligent virtual assistants like Siri and automated customer service chatbots are just two of the examples. The secret to AI's power is its ability to grasp the context of every interaction, which is exactly when the Model Context Protocol is involved.
            </p>
          </section>

          {/* SECTION 1 */}
          <section id="what-is-model-context" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-6">What Is Model Context Protocol?</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Model Context Protocol consists of the rules and norms that assist the AI systems to discern the context of the talk or the circumstance. Imagine it as a chart that tells the AI where it is in the world, what its task is, and how to carry it out. In case of a breach of this protocol, an AI would probably have hard times understanding whether you want it to inform you, if you are joking or if you are looking for a recommendation.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              This is similar to addressing a person who is yet to understand the difference between a question, a command, or a casual courtship. This protocol is an indispensable part of AI communication protocols, which are the rules that tell how machines should understand and handle conversations. Together with Natural Language Processing (NLP), it allows AI not only to take in the words, but also to figure out the underlying meaning.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              Suppose that you are interacting with a customer support chatbot and you say to it "I need help with my order." The very first generic response that the bot might give is "What can I help you with?" However, it gets the idea that you are seeking for help with a newly made purchase. In fact, it goes as far as to consider the conversations that you had before, it remembers your likes, and hence it can formulate its answer in a way that fits you perfectly. This is the power of Model Context Protocol                                                                                                                                                                          it is the reason why AI does not merely "listen" to your words but "comprehends" them in the appropriate context.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="why-context-matters" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-6">Why Does Context Matter?</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Without context, AI is like a person trying to have a conversation without knowing anything about the situation. An example is the phrase "Can you help me with that?" The AI could interpret this in many ways: maybe you're asking for directions, or perhaps you want help with a project.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              Thanks to the Model Context Protocol, the AI is not only able to see the immediate situation but also to consider factors such as the past interactions, the present location, and even elements like time and place. Thus, it not only can respond with great accuracy but also is able to be of great assistance which results in an excellent AI-user experience.
            </p>
          </section>

          {/* SECTION 3 */}
          <section id="daily-life-impact" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-6">How Is Daily Life Affected by It?</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              How about real-life examples?
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li><strong>Customer Service:</strong> AI technology utilized in a company's service environment can get to know your previous queries and likes and even sense the urgency of your situation. So, you experience a more comfortable and efficient way of doing your business instead of having to tell your story repeatedly to each new representative or robot.</li>
              <li><strong>Voice Assistants:</strong> Virtual helpers such as Alexa by Amazon or Google Assistant can change their answers according to the surrounding conditions of your house. When you ask, "What is the weather like today?" it understands you mean today in your present location, not tomorrow or somewhere else in the world.</li>
              <li><strong>Personalized Recommendations:</strong> The AI that is used in streaming services, e-commerce platforms, and social media sites is able to leverage contextual information for making content suggestions that would interest you. For instance, if you have been watching action movies for the entire week, Netflix will decide to put forward more action-packed films. The record of what you have purchased on Amazon allows it to suggest goods that you maybe in need of — this is one instance of AI personalization.</li>
            </ul>
          </section>

          {/* SECTION 4 */}
          <section id="future-of-ai" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-6">The Future of AI and Contextual Understanding</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              The Model Context Protocol will be the factor that will turn the blade towards technology becoming more intelligent and user-friendly as the next step of AI is taken. By constantly absorbing data from its surroundings and experiences, AI will, without a doubt, become predicative and reactive to human needs instantaneously even more than it is now.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              This is not a matter of making AI more efficient only; it's about giving AI human-like qualities and thus fostering a deeper and more significant interaction with the technology. The time may come when we will even be able to experience the ultra-personalized AI scenario, in which the technology understands what mood you are in, what your preferences are, and what your goals are, making the interaction between the digital world and you as seamless as possible.
            </p>
          </section>

          {/* CONCLUSION */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-primary mt-8 mb-6">Wrapping It Up</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              <strong className="text-primary">Model Context Protocol</strong> is instrumental in augmenting AI comprehension and furnishing the latter with insightful responses. Helping AI systems grasp the nuances of human interactions paves the way for a future in which machines understand us like never before. To name a few, the tremendous possibilities that lie ahead are improved customer service and deeply personalized experiences.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Whether you are already harnessing AI or merely dabbling into its potential, grasping the importance of context will help you see how these systems can make our lives more convenient, interconnected, and productive. The advancement of AI will largely depend on the Model Context Protocol—along with other communication frameworks, natural language processing, and an emphasis on user experience—which will constitute the crucial link between human and machine intelligence, thus determining the kind of future that we will have: one that is not only automated but genuinely ‍‌‍‍‌‍‌‍‍‌intelligent.
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

export default Blog4;
