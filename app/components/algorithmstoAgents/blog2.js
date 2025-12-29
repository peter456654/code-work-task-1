// pages/blog2.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";

const Blog2 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "algorithms-to-agents", title: "Algorithms to Agents" },
    { id: "where-it-began", title: "What It Was Like Before" },
    { id: "deep-learning-revolution", title: "The Deep Learning Era" },
    { id: "rise-of-llms", title: "Big Language Models Become Popular" },
    { id: "language-models-to-agents", title: "From LM to Agents" },
    { id: "open-vs-closed", title: "Open vs. Closed: Two Paradigms, A Story" },
    { id: "current-ai-ecosystem", title: "The AI Ecosystem Now" },
    { id: "where-heading", title: "Where Are We Heading?" },
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
            Algorithms to Agents
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-xl overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/1756765539463.jpg"
              alt="From Algorithms to Agents"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-primary font-extrabold drop-shadow-glow">
              M
            </div>
            <span className="uppercase tracking-wide font-semibold">Ms. Sridevi P</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>08 April 2025</span>
            </div>
          </div>

          {/* SECTION 1 */}
          <section id="algorithms-to-agents" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-6">Algorithms to Agents</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Artificial Intelligence is a new wonder in the 21st century that range from one such famous language model to quite independent system that solve the most complex problems and is the biggest behind the global economic and societal changes. However, this is a very recent history, basically a story of AI in this blog, we journey through time to trace back to the very beginning and through the revolutions that the field has seen.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="where-it-began" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-6">What It Was Like Before</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              The notion was already there; the phrase was first used at the Dartmouth Conference in 1956, and a future was envisioned of the machines that are autonomous in reasoning, learning, and problem-solving. Initial works, which were highly dependent on rule-based systems with symbolic reasoning, were excellent for the well-defined problems like chess, however, the nature of the problems always became unclear when there was ambiguity and complexity. Next was the machine learning of the 1980s and 90s, in which algorithms were taking in patterns of data to learn instead of being given a set of rules. Still, AI was thought to be a subject of computation and data that it could not go beyond that.
            </p>
          </section>

          {/* SECTION 3 */}
          <section id="deep-learning-revolution" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-6">The Deep Learning Era</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Far from the 2010s invention of deep learning, a machine learning subfield that takes inspiration from the human brain structure, all the way back to the 1980s, researchers have been intrigued this idea for a long time. Neural networks were there all along, but only recently did several events like increased GPU processing power and large datasets bring about the renaissance for them. In the paper "Attention Is All You Need" one of the authors introduced transformers- an epoch-making architecture- in 2017. Parallel data processing rather than sequential one, as in the case of RNNs, is how transformers deal with the data, thus they are faster and more capable of handling sequential tasks. The concept of "attention", which helps models be "attentive" to only the most relevant portions of input data, resulted in opening up new applications for NLP.
            </p>
          </section>

          {/* SECTION 4 */}
          <section id="rise-of-llms" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-6">Big Language Models Become Popular</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              Transformer gave birth to the likes of GPT, or Generative Pre-trained Transformer. OpenAI's GPT-2 and GPT-3 stunned the whole world by showing what language models are capable of in terms of humanlike text generation. It was nothing less than a technical triumph; more than that, it showed that AI could grasp the context-a world to the technology becoming a prodigal for everything from drafting emails to writing code.
              <br/><br/>
              Meanwhile, open-source projects such as the transformers library by Hugging Face were created so that researchers and developers all over the globe could have the means and freedom to do cutting-edge NLP experiments. On the other hand, large-scale closed-source models like GPT-4 and Claude 3.5 Sonnet are indicative of rapidly increasing resource requirements and a highly selective nature of state-of-the-art AI development.
            </p>
          </section>

          {/* SECTION 5 */}
          <section id="language-models-to-agents" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-6">From LM to Agents</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              We no longer simply have models that operate individually but rather full-fledged autonomous agents that can perform tasks in an environment. Thanks to new tools like LangChain and Llama_index and a framework like OpenAI's Function Calling, models are now able to interact with APIs, databases, and even other AI systems. These agents can tackle complex issues by reasoning, planning, and adjusting their actions based on what they find.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">Where AI agents are concerned, they can:</p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-primary font-medium">
              <li>We could allow AI agents to manage and book our travel</li>
              <li>Debug and create complete software programs</li>
              <li>Conduct research, design, and problem-solving with the help of humans.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              That is a move towards more general AI which is capable of much more than just answering questions—they can also initiate significant actions.
            </p>
          </section>

          {/* SECTION 6 */}
          <section id="open-vs-closed" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-6">Open vs. Closed: Two Paradigms, A Story</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              The debate on whether to use open-source or closed-source models is what divides the AI community at present. For example, open-source models, such as Meta's LLaMA models and OpenAssistant, put emphasis on accessibility and cooperation. On the other hand, their closed-source counterparts are advancing the capabilities further but are kept behind paywalls and licensing restrictions.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">Each method has its advantages:</p>
            <ul className="list-disc list-inside mb-10 space-y-1 text-primary font-medium">
              <li>Open-source AI is a source of innovation, experimentation, and quite notably, transparency.</li>
              <li>Closed-source AI is geared towards the requirements of stability, safety, and scalability that are indispensable for enterprise applications.</li>
            </ul>
          </section>

          {/* SECTION 7 */}
          <section id="current-ai-ecosystem" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-6">The AI Ecosystem Now</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              The AI ecosystem has a wide range of players and is very dynamic. There are proprietary giants like OpenAI and Google; open-source heroes like Hugging Face and Meta; and then there are the very frameworks that make the real-world implementations of AI possible. Among these, Reasoning Models have emerged as a recent trend in AI.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Reasoning models basically focus on logical reasoning and structured problem-solving, and include:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-primary font-medium">
              <li>Chain-of-Thought Reasoning: Step-by-Step Explanations to Improve Decision-Making</li>
              <li>Self-reflective models: Models that study them own generated outputs to improve themselves.</li>
              <li>Tree of Thought: Structured frameworks for handling complex, multi-step tasks.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              Worth noting, some examples of such models are o1-preview, f-1-preview, and R-lite-preview. These models demonstrate the immense progress that has been made in logical reasoning and planning for AI systems. Reasoning models are at the leading edge of AI research, bridging the gap between human-like reasoning and what the machine is capable of.
            </p>
          </section>

          {/* SECTION 8 */}
          <section id="where-heading" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-6">Where Are We Heading?</h2>
            <p className="text-primary/80 leading-relaxed mb-4">The AI tomorrow is full of bright and promising points:</p>
            <ul className="list-disc list-inside mb-10 space-y-2 text-primary font-medium">
              <li><strong>Multi-modal Models:</strong> OpenAI's GPT-4, and Google's Gemini are examples of systems that can both understand and generate text and images.</li>
              <li><strong>AI in Everyday Life:</strong> AI is becoming more present in our daily lives-from the likes of personalized assistants to autonomous vehicles.</li>
              <li><strong>Ethics and Regulation:</strong> Ensuring the technology is used ethically and is free from abuse are among the major challenges that governments and organizations must deal with.</li>
            </ul>
          </section>

          {/* CONCLUSION */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-6">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed">
              Symbolic reasoning in the 1950s and autonomous agents reshaping industries today, AI has gone a long way. Among the innovations that have fueled the journey are deep learning, transformers, and large language models. Once the breakthroughs are seen coming, the question will no longer be "what can the AI do?" but rather, "how can we use its power responsibly?"
              <br/><br/>
              AI's future is not about more intelligent machines; instead, it will be about creating systems that enhance human capabilities while ensuring fairness, transparency, and inclusiveness.
              <br/>
              We should take this journey further.
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

export default Blog2;
