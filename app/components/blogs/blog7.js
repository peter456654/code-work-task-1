// pages/blog7.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";

const Blog7 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "bridging-the-gap", title: "Bridging the Gap in Digital Diagnostic Workflows" },
    { id: "key-technologies", title: "Key Technologies Driving Radi Insight 3D" },
    { id: "engineering-accuracy", title: "Engineering for Medical-Grade Accuracy" },
    { id: "conclusion", title: "Conclusion" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                      : "text-primary/70 hover:text-primary hover:bg-secondary/10"
                  }`}
                >
                  {index + 1}. {item.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <button
          onClick={() => setIsTocOpen(!isTocOpen)}
          className="lg:hidden fixed top-24 left-4 z-50 bg-secondary text-primary p-3 rounded-full shadow-lg"
        >
          <FiList size={20} />
        </button>

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

        <div className="flex-1 max-w-4xl">
          <h1 className="text-5xl md:text-5xl font-extrabold text-primary mb-8 drop-shadow-glow">
            Revolutionizing Virtual Colonoscopy: The Tech Behind Radi Insight 3D’s 3D Imaging Breakthrough
          </h1>

          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.amazonaws.com/codework-media/blogs/business-brainstorming-graph-chart-report-data-concept_53876-41686.avif"
              alt="Radi Insight 3D Virtual Colonoscopy"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-extrabold drop-shadow-glow">
              F
            </div>
            <span className="uppercase tracking-wide font-semibold">Felista Johnbritto</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-cyan-400" />
              <span>29 May 2025</span>
            </div>
          </div>

          <section id="introduction" className="scroll-mt-24">
            <p className="text-primary/80 text-xl leading-relaxed mb-6">
              Colorectal‍‌‍‍‌‍‌‍‍‌ cancer is still one of the major causes of cancer-related deaths worldwide. The virtual colonoscopy through CT colonography is a non-invasive, patient-friendly diagnostic alternative. It changes the way the radiologists and imaging technicians work with AI-driven segmentation, automated study workflows, and DICOM-to-3D visualization all integrated in one platform - next-generation platform Radi Insight 3D.
            </p>
          </section>

          <section id="bridging-the-gap" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-primary mb-4">Bridging the Gap in Digital Diagnostic Workflows</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              While digital health has come a long way, the fragmented systems, limited interoperability, and the complexity of DICOM data have stood in the way of the scalable implementation of virtual colonoscopy. Radi Insight 3D closes this gap by creating a seamless, integrated ecosystem that is powered by middleware connectors and intelligent data orchestration.
            </p>
          </section>

          <section id="key-technologies" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-primary mb-4">Key Technologies Driving Radi Insight 3D</h2>
            <ul className="list-disc ml-6 text-primary/80 mb-6 space-y-1">
              <li>
                <strong>Advanced DICOM-to-3D Model Conversion:</strong> Radi Insight 3D creates an immersive 3D fly-through from the axial, coronal, and sagittal scan views that allow the abnormalities to be detected visually and quickly during the screenings.
              </li>
              <li>
                <strong>Secure and Scalable API-Driven DICOM Ingestion:</strong> With a fully scripted and audited pipeline, Radi Insight 3D automates the bulk retrieval of DICOM studies from PACS systems ensuring that the process is not only fast but also in accordance with regulations.
              </li>
              <li>
                <strong>Role-Based Workflow Management:</strong> The granular access system provides for data protection and efficiency by ensuring that administrators, operations managers, assistants, radiologists, and technicians work within secure, clearly defined boundaries.
              </li>
              <li>
                <strong>Vendor Integration via Custom Middleware:</strong> Radi Insight 3D is integrated with PowerShare, PowerScribe, and Viatronix by means of custom adapters that help in standardizing data formats and managing token authentication, thus there is no hitch and the communication is efficient and smooth.
              </li>
              <li>
                <strong>AI-Driven Organ Segmentation:</strong> The personalized 3D U-Net model, with Dice and boundary-aware loss functions, can accurately segment the colon lumen as well as the outer walls even if the scans are of different quality.
              </li>
            </ul>
          </section>

          <section id="engineering-accuracy" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-primary mb-4">Engineering for Medical-Grade Accuracy</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              The technical issues that come from the complex colorectal anatomy, the image noise, and patient-specific variations are handled by the segmentation model and data augmentation strategies of Radi Insight 3D which results in lowering false negatives and thus increasing the screening reliability.
            </p>
          </section>

          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              One of the landmarks in healthcare imaging technology is without a doubt Radi Insight 3D - the virtual colonoscopies are high-precision and can be easily scaled. The platform achieves the dream vision of smart colorectal cancer screening by combining domain-focused AI, safe system integration, and user-friendly role-based ‍‌‍‍‌‍‌‍‍‌workflow
            </p>
          </section>

        <style jsx>{`
          .drop-shadow-glow {
            text-shadow: 0 0 12px #1ddfea66, 0 0 2px #223044;
          }
          .shadow-glow {
            box-shadow: 0 0 32px #1ddfea22, 0 0 8px #22304426;
          }
        `}</style>
        </div>
      </div>
    </div>
  );
};

export default Blog7;
