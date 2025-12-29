// pages/blog24.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog24 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "data-engineering-backbone", title: "Data Engineering: The Backbone of Smart Data Systems" },
    { id: "real-world-value", title: "Real-World Value of Data Engineering" },
    { id: "working-with-data-types", title: "Working with Different Types of Data" },
    { id: "data-pipeline-process", title: "The End-to-End Data Pipeline Process" },
    { id: "supporting-ai", title: "Supporting AI with Clean, Reliable Data" },
    { id: "roles-engineers-analysts-scientists", title: "Roles: Engineers, Analysts, and Scientists" },
    { id: "tools-that-power", title: "Tools That Power Data Engineering" },
    { id: "wrapping-up", title: "Wrapping Up" },
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
            What is Data Engineering: The Backbone of Smart Data Systems
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="/blog/blog24.jpg"
              alt="What is Data Engineering"
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

          {/* SECTION: Data Engineering: The Backbone of Smart Data Systems */}
          <section id="data-engineering-backbone" className="scroll-mt-24">
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              In the rapidly evolving digital landscape, businesses rely on data to drive smart decision-making. However, before it can be analyzed or fed into AI models, data must be gathered, refined, and structured. It is the role of data engineering — a field that builds and maintains the systems responsible for turning raw data into usable information.
            </p>
          </section>

          {/* SECTION: Real-World Value of Data Engineering */}
          <section id="real-world-value" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Real-World Value of Data Engineering</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Data engineering is not just a behind-the-scenes task. It drives numerous digital services we interact with every day:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li>Netflix and YouTube use data pipelines to recommend content by analyzing viewing history in real-time.</li>
              <li>Amazon processes billions of customer interactions to recommend personalized products.</li>
              <li>Hospitals use real-time data to monitor patient health.</li>
              <li>Banks rely on high-speed pipelines to detect fraud, process transactions, and meet compliance needs.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              Without solid data pipelines, none of these use cases would work efficiently. Every business that wants to act on real-time insights or predictive models needs skilled data engineers.
            </p>
          </section>

          {/* SECTION: Working with Different Types of Data */}
          <section id="working-with-data-types" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Working with Different Types of Data</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Data engineers work with different data formats. The main types are:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Structured data</strong> refers to information that is arranged in rows and columns, commonly found in SQL databases or Excel spreadsheets. It's easy to filter, search, and analyze.</li>
              <li><strong>Unstructured data</strong> encompasses various formats, including videos, social media content, emails, and audio files. Although more challenging to store and process, this data contains valuable insights.</li>
              <li><strong>Semi-structured data</strong> – Formats like JSON or XML, which don't follow a strict tabular format but still contain tags or hierarchies.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              Handling this variety requires robust architecture and the use of smart tools that can scale and adapt.
            </p>
          </section>

          {/* SECTION: The End-to-End Data Pipeline Process */}
          <section id="data-pipeline-process" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">The End-to-End Data Pipeline Process</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              The data engineering process follows a defined lifecycle:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Data Ingestion:</strong> Collecting data from various sources such as web applications, IoT sensors, APIs, system logs, and more.</li>
              <li><strong>Data Storage:</strong> Data is stored in scalable infrastructures such as data lakes or warehouses, leveraging platforms like Snowflake, Google BigQuery, or Amazon S3.</li>
              <li><strong>Data Transformation:</strong> Raw data is cleaned, filtered, and organized using tools like Apache Spark and Python, making it easier to work with and analyze.</li>
              <li><strong>Orchestration:</strong> Engineers automate these workflows using tools like Apache Airflow, ensuring smooth and timely data movement.</li>
              <li><strong>Data Delivery:</strong> Finally, the processed data is delivered to analytics teams, dashboards, or machine learning models for further action.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              This pipeline enables organizations to turn messy raw data into actionable, real-time insights.
            </p>
          </section>

          {/* SECTION: Supporting AI with Clean, Reliable Data */}
          <section id="supporting-ai" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Supporting AI with Clean, Reliable Data</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Clean and well-structured data is essential for modern technologies such as machine learning and generative AI to function effectively. Without it, even the most advanced algorithms won't produce meaningful results.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Data engineers:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li>Build data lakes that store large datasets.</li>
              <li>Clean and label datasets for supervised learning models.</li>
              <li>Set up pipelines that continuously feed real-time data into AI applications.</li>
              <li>Leverage external APIs to enhance the training datasets used in generative models.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-4">
              For example, a customer support chatbot powered by generative AI requires thousands of clean conversation logs, categorized intents, and sentiment tags — all handled by data engineers.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Data engineers make it possible for AI teams to experiment, train, and deploy models without worrying about the complexity of the underlying data.
            </p>
          </section>

          {/* SECTION: Roles: Engineers, Analysts, and Scientists */}
          <section id="roles-engineers-analysts-scientists" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Roles: Engineers, Analysts, and Scientists</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              While they all work with data, their focus is different:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Data engineers</strong> design and manage the infrastructure that supports data systems, playing a foundational role in the data ecosystem.</li>
              <li><strong>Data Analysts</strong> extract business insights by creating reports and visualizations using tools like Tableau or Power BI.</li>
              <li><strong>Data Scientists</strong> build machine learning models, detect trends, and predict outcomes using statistical methods and coding.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              Together, these roles form the core of any data-driven organization. Engineers establish the groundwork, analysts interpret the data, and scientists innovate for the future.
            </p>
          </section>

          {/* SECTION: Tools That Power Data Engineering */}
          <section id="tools-that-power" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Tools That Power Data Engineering</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              To manage large-scale structured and unstructured data, data engineers rely on the following tools and technologies:
            </p>
            <ul className="list-disc ml-6 text-white/80 mb-6 space-y-2">
              <li><strong>Data Warehousing & Storage:</strong> Google BigQuery, Snowflake, Amazon Redshift.</li>
              <li><strong>ETL Tools:</strong> Fivetran, Talend, Apache NiFi for data extraction, transformation, and loading.</li>
              <li><strong>Orchestration tools</strong> such as Apache Airflow and Prefect are used to automate and schedule data workflows.</li>
              <li><strong>Programming Languages:</strong> Python, Scala, and SQL for scripting, querying, and processing.</li>
              <li><strong>Streaming Tools:</strong> Kafka and Flink for real-time data movement.</li>
              <li><strong>Monitoring & Logging:</strong> Grafana, Prometheus for real-time alerting and performance tracking.</li>
              <li><strong>Cloud Computing Platforms:</strong> AWS, Azure, and Google Cloud help scale data pipelines with flexibility and efficiency.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-10">
              With the introduction of generative AI, even parts of data pipeline generation and documentation are being semi-automated, saving time and reducing errors.
            </p>
          </section>

          {/* SECTION: Wrapping Up */}
          <section id="wrapping-up" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">Wrapping Up</h2>
            <p className="text-white/80 leading-relaxed mb-10">
              With the growing adoption of real-time analytics, automation, and AI, the role of data engineering is becoming increasingly critical. From building fast, reliable pipelines to preparing data for AI systems, data engineers ensure that organizations make smarter, faster, and more data-driven decisions.
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

export default Blog24;
