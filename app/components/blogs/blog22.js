// pages/blog22.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog22 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "what-is-cicd", title: "What is CI/CD?" },
    { id: "understanding-the-cicd-pipeline", title: "Understanding the CI/CD Pipeline?" },
    { id: "why-use-cicd-key-advantages", title: "Why Use CI/CD? – Key Advantages" },
    { id: "inside-a-typical-workflow", title: "Inside a Typical CI/CD Workflow" },
    { id: "machine-learning-pipeline", title: "Machine Learning Pipeline" },
    { id: "key-stages-in-the-lifecycle", title: "Key Stages in the CI/CD Lifecycle" },
    { id: "popular-tools-and-setup", title: "Popular CI/CD Tools and Setup" },
    { id: "keeping-cicd-secure", title: "Keeping CI/CD Secure" },
    { id: "realworld-use-case", title: "Real-World Use Case: E-Commerce Deployment" },
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
            What is CI/CD?
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/woman-uses-ai-chatbot-system-computer-guide-her-through-tasks_482257-118915.avif"
              alt="What is CI/CD"
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

          {/* SECTION: What is CI/CD? */}
          <section id="what-is-cicd" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-10">
              CI/CD refers to Continuous Integration and Continuous Deployment (or Delivery). It's a modern approach to software development that enables teams to automate workflows, allowing them to release code changes more frequently and with greater reliability. CI/CD pipelines streamline the process of building, testing, and deploying code, helping teams respond quickly to business needs, fix bugs faster, and improve overall software quality.
            </p>
          </section>

          {/* SECTION: Understanding the CI/CD Pipeline? */}
          <section id="understanding-the-cicd-pipeline" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Understanding the CI/CD Pipeline?</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              A CI/CD pipeline is a set of automated steps that software projects go through, from writing code to deploying it in production. These steps typically include code integration, automated testing, staging, and final deployment.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              The goal of this pipeline is to reduce manual intervention, minimize errors, and accelerate the release cycle, allowing developers to push updates or new features into production faster and more safely.
            </p>
          </section>

          {/* SECTION: Why Use CI/CD? – Key Advantages */}
          <section id="why-use-cicd-key-advantages" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Why Use CI/CD? – Key Advantages</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Implementing CI/CD offers several benefits:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li><strong>Faster Release Cycles:</strong> Automated processes mean updates can be released more quickly.</li>
              <li><strong>Improved Code Quality:</strong> Automated testing verifies that only code meeting predefined standards proceeds further in the pipeline.</li>
              <li><strong>Reduced Risk:</strong> Smaller, incremental updates reduce the risk of major failures.</li>
              <li><strong>Increased Collaboration:</strong> Developers can integrate code frequently, encouraging teamwork.</li>
              <li><strong>Early Detection of Issues:</strong> Identifying bugs early helps prevent expensive fixes during later stages of development.</li>
            </ul>
          </section>

          {/* SECTION: Inside a Typical CI/CD Workflow */}
          <section id="inside-a-typical-workflow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Inside a Typical CI/CD Workflow</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              A typical CI/CD pipeline involves the following steps:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li><strong>Code Commit:</strong> A developer writes code and pushes it to a shared repository like GitHub or GitLab.</li>
              <li><strong>Continuous Integration (CI):</strong> Automated build and test processes are triggered every time code is pushed. It helps the code merge seamlessly with the main codebase without issues.</li>
              <li><strong>Testing:</strong> Various levels of automated tests (unit, integration, functional) are run to validate the code.</li>
              <li><strong>Continuous Delivery or Deployment (CD):</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Continuous Delivery:</strong> The code is staged and ready for manual deployment.</li>
                  <li><strong>Continuous Deployment:</strong> The code is deployed to the production environment automatically, without any manual involvement.</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* SECTION: Machine Learning Pipeline */}
          <section id="machine-learning-pipeline" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Machine Learning Pipeline</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              A machine learning pipeline resembles a CI/CD pipeline but is specifically designed for ML processes. It includes steps like data ingestion, data preprocessing, model training, validation, and deployment.
            </p>
            <p className="text-primary/80 leading-relaxed mb-10">
              Incorporating CI/CD practices into ML pipelines helps maintain consistent results, automate training jobs, and deploy models efficiently.
            </p>
          </section>

          {/* SECTION: Key Stages in the CI/CD Lifecycle */}
          <section id="key-stages-in-the-lifecycle" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Key Stages in the CI/CD Lifecycle</h2>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li><strong>Source Stage:</strong> Triggers the pipeline based on code changes.</li>
              <li><strong>Build Stage:</strong> Compiles the code and packages the application.</li>
              <li><strong>Test Stage:</strong> Runs unit tests and other automated tests.</li>
              <li><strong>Deploy Stage:</strong> Deploys the build to a test, staging, or production environment.</li>
              <li><strong>Monitoring Stage:</strong> Observes performance and errors post-deployment.</li>
            </ul>
          </section>

          {/* SECTION: Popular CI/CD Tools and Setup */}
          <section id="popular-tools-and-setup" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Popular CI/CD Tools and Setup</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              A wide range of tools can be used to set up and manage CI/CD pipelines:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li><strong>Jenkins:</strong> Open-source automation server.</li>
              <li><strong>GitHub Actions:</strong> Built-in CI/CD for GitHub repositories.</li>
              <li><strong>GitLab CI/CD:</strong> Integrated with GitLab for seamless automation.</li>
              <li><strong>CircleCI, Travis CI, Bitbucket Pipelines, and Azure DevOps</strong> are also widely used.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              Configuration typically involves defining pipeline steps using YAML or other configuration files.
            </p>
          </section>

          {/* SECTION: Keeping CI/CD Secure */}
          <section id="keeping-cicd-secure" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Keeping CI/CD Secure</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Security in CI/CD is critical. Key practices include:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-10 space-y-2">
              <li><strong>Secret Management:</strong> Secure handling of credentials and tokens.</li>
              <li><strong>Static Code Analysis:</strong> Identify vulnerabilities before deployment.</li>
              <li><strong>Role-Based Access Control (RBAC):</strong> Limit who can modify pipelines or trigger deployments.</li>
              <li><strong>Audit Logs:</strong> Track every action performed within the pipeline.</li>
            </ul>
          </section>

          {/* SECTION: Real-World Use Case: E-Commerce Deployment */}
          <section id="realworld-use-case" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Real-World Use Case: E-Commerce Deployment</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Imagine a team developing an e-commerce website. A developer pushes a new feature, such as "wishlist", to GitHub.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              The CI/CD pipeline kicks in:
            </p>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-2">
              <li>Jenkins builds the updated code.</li>
              <li>Automated tests run to ensure it does not break the cart or checkout.</li>
              <li>If all tests pass, the code is automatically deployed to a staging server.</li>
              <li>After review, it is deployed to the production environment without downtime.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-10">
              Thanks to CI/CD, the feature goes live within hours, not days, without disrupting users.
            </p>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed mb-10">
              CI/CD is revolutionizing software delivery by making it faster, safer, and more reliable. Whether you are developing web apps, mobile software, or machine learning models, a robust CI/CD pipeline ensures smooth, continuous progress from code to customer.
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

export default Blog22;
