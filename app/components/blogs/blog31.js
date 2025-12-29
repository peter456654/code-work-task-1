// pages/blog31.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog31 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "tldr", title: "TL;DR" },
    { id: "what-is", title: "What Is Underground Mapping?" },
    { id: "gpr", title: "Ground Penetrating Radar" },
    { id: "em-locator", title: "EM Locator and Potholing" },
    { id: "surveying", title: "Surveying Infrastructure" },
    { id: "seismic", title: "Seismic Imaging" },
    { id: "bathymetric", title: "Bathymetric Mapping" },
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
          <div className="bg-primary/60 backdrop-blur-sm rounded-xl border border-secondary/20 p-6 shadow-glow">
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
          <div className="lg:hidden fixed inset-0 z-40 bg-primary/60" onClick={() => setIsTocOpen(false)}>
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
            Underground Mapping: A Complete Guide
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/blogs/UndergroundMapping.jpg"
              alt="Underground Mapping Technology"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* META */}
          <div className="flex items-center text-sm text-primary mb-10 space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold drop-shadow-glow">
              K
            </div>
            <span className="uppercase tracking-wide font-semibold">Felista</span>
            <span>•</span>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary" />
              <span>22 September 2025</span>
            </div>
          </div>

          {/* SECTION: TL;DR */}
          <section id="tldr" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">TL;DR</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Underground mapping uses specialized technology to map subterranean structures for resource extraction, infrastructure planning, and safety improvement. Technologies like Ground Penetrating Radar (GPR), EM locators, seismic imaging, and bathymetric mapping provide accurate subsurface data.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              These tools help avoid excavation delays, improve safety by locating utilities, and enhance collaboration between stakeholders. From detecting buried pipes to mapping the ocean floor, underground mapping enables efficient resource extraction and smarter urban development.
            </p>
          </section>

          {/* SECTION: What Is Underground Mapping? */}
          <section id="what-is" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">1. What Is Underground Mapping?</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Underground Mapping is the use of specialized technology to map subterranean structures. Resource extraction is the primary goal of underground mapping. This includes oil and natural gas exploration and identifying the location of underground infrastructures.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">Underground mapping also helps:</p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-primary/40 rounded-lg p-4 border border-primary/20">
                <p className="text-primary/80 leading-relaxed">
                  • Avoid time wasted on excavation and construction, due to encountering unplanned subsurface infrastructures.
                </p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-primary/20">
                <p className="text-primary/80 leading-relaxed">
                  • Improve safety by accurately locating utilities, allowing contractors to implement safety measures, like safe digging and the use of appropriate machines.
                </p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-primary/20">
                <p className="text-primary/80 leading-relaxed">
                  • Improve collaboration by having clear data on utilities. Project stakeholders and utility companies can reduce miscommunication and improve project execution. For example, urban planners can map utilities and identify dangerous areas.
                </p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-4">
              This article describes the kinds of underground mapping technologies available today.
            </p>
          </section>

          {/* SECTION: Ground Penetrating Radar */}
          <section id="gpr" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">2. Ground Penetrating Radar</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Ground penetrating radar (GPR) is one of the radar technologies designed to scan the subsurface of the Earth. To perform this function, the technology transmits a high frequency electromagnetic wave and measures the reflection time and the return waves. The depth of the reflections gives a good estimate of the structure and content of the subsurface. This technology is also used in LiDAR.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Ground Penetrating Radar (GPR) combines both geophysical and surveying techniques to collect information about the subsurface of the Earth. It is mainly used for detecting and locating subsurface structures and for non-destructive subsurface surveying. Data is gathered for a 2-dimensional map of a given area to visualize the layering of the subsurface materials and structures. This information can then be used in analysis to aid in decision making for the area being studied.
            </p>

            <div className="bg-primary/40 rounded-lg p-6 border border-primary/20 mb-4">
              <h3 className="text-lg font-semibold text-primary mb-3">Uses of Ground Penetrating Radar</h3>
              <p className="text-primary/80 leading-relaxed mb-2">The uses of GPR encompass:</p>
              <ul className="space-y-2 text-primary/80">
                <li>• Detecting buried objects</li>
                <li>• Mapping subsurface infrastructure</li>
                <li>• Measuring peat thickness</li>
                <li>• Determining depth to the water table</li>
                <li>• Scanning the depth of water for mineral exploration</li>
                <li>• More readily mapping subsurface mineral bodies</li>
              </ul>
            </div>
          </section>

          {/* SECTION: EM Locator and Potholing */}
          <section id="em-locator" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">3. EM Locator and Potholing</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              An EM Locator would be akin to a metal detector but for buried pipes. Rather than magnets, radio waves are used. They can pass a signal and create a loop with a metallic conductor (like pipes) and are able to trace the conductor and the signal is returned to the locator.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              This works well if the pipes are connected to a fixture on the surface, but accuracy drops when attempting to trace the pipes in the ground. Potholing is the most accurate and direct method of utility location. It is a time consuming and labour-intensive method, it does save time and money in the long run.
            </p>
          </section>

          {/* SECTION: Surveying Infrastructure */}
          <section id="surveying" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">4. Surveying Infrastructure</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Infrastructure surveying from above can also give planners information relevant to large projects about utilities that are below ground. Though traditionally expensive, helicopter aerial inspection offers results that can take considerable time.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Over the past ten years, co-founders of ARGO Labs have pointed out that satellite imagery reduces the time to complete a locate from 72 hours to almost real time.
            </p>
          </section>

          {/* SECTION: Seismic Imaging */}
          <section id="seismic" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">5. Seismic Imaging</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Seismic imaging involves mapping the subsurface using sound waves and is also a means of subsurface surveying. This technique sends acoustic waves through the ground using a vibriosis or explosive detonation. As sound waves reflect off of ground objects, a computation of the time it takes for the wave to reflect is achieved.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              The geophones at the survey site captures the resultant waves, and the exit waves are documented. Geophysicists can use the data to analyse the surface and rock layers for determining the geo resources.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Seismic imaging initially was designed for detecting the deposits of coal, gas, and oil, which is also used for water geo resources and geothermal resources and for geothermal exploration. It is beneficial for geothermal resource potential and geothermal energy resource surveying.
            </p>
          </section>

          {/* SECTION: Bathymetric Mapping */}
          <section id="bathymetric" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">6. Bathymetric Mapping</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Bathymetric mapping is a method of looking underneath the ocean surface. It is possible to create a map of the ocean floor by taking measurements from a ship that is equipped with Sonar technology. This method involves echo sounding and other map creation techniques for underwater mapping.
            </p>
            <p className="text-primary/80 leading-relaxed mb-4">
              Bathymetric maps are useful for navigation, coastal zone planning, and for the environmental marine maps. Mapping the ocean floor opens a new way of understanding the ocean and its features. It provides information about the ocean floor and how it changes over time, its physical features, and the movement of the tectonic plates.
            </p>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">Conclusion</h2>
            <p className="text-primary/80 leading-relaxed mb-4">
              Underground mapping technologies enable efficient resource extraction and infrastructure planning by providing accurate, real-time data on subsurface structures and utilities. These innovations enhance safety, reduce project costs, and support smarter collaboration for urban development and mining operations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog31;
