// pages/blog33.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiList } from "react-icons/fi";
import Link from "next/link";

const Blog33 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Table of contents data
  const tocItems = [
    { id: "tldr", title: "TL;DR" },
    { id: "what-is", title: "What Is Crowd Management?" },
    //{ id: "where-used", title: "Where Is Crowd Management Used?" },
    //{ id: "who-uses", title: "Who Uses Crowd Management?" },
    { id: "context", title: "Context of Crowd Management" },
    //{ id: "vs-event-risk", title: "Crowd Management vs Event Risk Management" },
    //{ id: "vs-crowd-control", title: "Crowd Management vs Crowd Control" },
    { id: "measures", title: "Measures of Crowd Management" },
    //{ id: "crowd-manager", title: "The Crowd Manager" },
    { id: "management-plan", title: "The Crowd Management Plan" },
    //{ id: "evacuation-simulation", title: "Evacuation Simulation" },
    { id: "crowd-analysis", title: "Crowd Analysis and Monitoring" },
    { id: "crowd-estimation", title: "Crowd Estimation" },
    { id: "crowd-disasters", title: "Crowd Disasters" },
    //{ id: "conclusion", title: "Conclusion" },
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
            Crowd Management: Ensuring Safety and Order in Large Gatherings
          </h1>

          {/* FEATURE IMAGE */}
          <div className="relative w-full h-[400px] border-4 border-primary border-t-0 border-l-0 rounded-lg overflow-hidden mb-8 shadow-glow">
            <Image
              src="https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/blogs/CrowdManagement.jpg"
              alt="Crowd Management Technology"
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
              <span>22 October 2025</span>
            </div>
          </div>

          {/* SECTION: TL;DR */}
          <section id="tldr" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">TL;DR</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd management is the systematic process of planning, organizing, and monitoring large gatherings to ensure safety and security. It involves anticipating risks, implementing preventive measures, and coordinating multiple stakeholders including event organizers, venue staff, and law enforcement. Through proper planning, technology integration, and trained personnel, crowd management helps prevent disasters and creates safe, enjoyable events.
            </p>
          </section>

          {/* SECTION: What Is Crowd Management? */}
          <section id="what-is" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">1. What Is Crowd Management?</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd management is the systematic process of planning, organizing and monitoring large gatherings of people with the objective to establish a safe and secure environment and maintaining a minimum level of space to avoid panic and rapid crowd movements.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd management anticipates and plans for the worst case, such as fire or riots and aims to reduce and mitigate the risks associated with it way in advance. The project of crowd management begins before the gathering, continues throughout and ends after the gathering or event.
            </p>
          </section>

          {/* SECTION: Where Is Used */}
          <section id="where-used" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Where Is Crowd Management Used?</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd management is often used or required in public spaces and events such as:
            </p>
            <div className="bg-primary/40 rounded-lg p-6 border border-secondary/20 mb-4">
              <ul className="space-y-2 text-white/80">
                <li>• Concert venues</li>
                <li>• Demonstrations</li>
                <li>• Festivals</li>
                <li>• Sports stadiums</li>
                <li>• Amusement parks</li>
              </ul>
            </div>
          </section>

          {/* SECTION: Who Uses */}
          <section id="who-uses" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">3. Who Uses Crowd Management?</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd management processes are typically established by the event organizer and/or law enforcement agencies. The successful implementation of a crowd management plan requires the cooperation of all involved parties, from venue staff to event organizers to law enforcement.
            </p>
          </section>

          {/* SECTION: Context */}
          <section id="context" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Context of Crowd Management</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd Management is a multi-faceted field with an array of disciplines ranging from event planning, crowd simulation for evacuation analysis to security management. Crowd management plays a critical role in ensuring safe, secure events for attendees.
            </p>
          </section>

          {/* SECTION: Vs Event Risk Management */}
          <section id="vs-event-risk" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Crowd Management vs Event Risk Management</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd Management is a part of the event risk management. While crowd management focuses on the risks that come from the crowd and crowd movement, event risk management has a wider scope of risks such as weather conditions, minor and elderly protection, food safety, medical assistance and transportation.
            </p>
          </section>

          {/* SECTION: Vs Crowd Control */}
          <section id="vs-crowd-control" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">6. Crowd Management vs Crowd Control</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd management is focused on prevention of crowd disasters and includes pre-event activities such as planning of capacities, escape routes and signage.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd control is a sub process of crowd management that enforces or restores order by restricting or limiting group behavior. Crowd control can include measures such as the use of force, arrest, or threat of personal injury by security personal or law enforcement agencies.
            </p>
          </section>

          {/* SECTION: Measures */}
          <section id="measures" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">7. Measures of Crowd Management</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              For successful crowd management it is important to realize that crowd behavior is not random but follows rules and patterns which can be predicted. The crowd behavior is essentially a result from physical, physiological, psychological and social needs of humans including:
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• Adequate space</p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• Food, water and air</p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• Access to toilet facilities</p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• A feeling of safety</p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• Progress towards a desired goal</p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• Availability of information, communication, entertainment</p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-4">
              An insufficient consideration of such factors can promote disasters, particularly if shortcomings accumulate.
            </p>
          </section>

          {/* SECTION: The Crowd Manager */}
          <section id="crowd-manager" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">8. The Crowd Manager</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              The crowd manager and its team are responsible for the crowd management. Some countries require crowd managers for certain type of events or locations.
            </p>
          </section>

          {/* SECTION: Management Plan */}
          <section id="management-plan" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">9. The Crowd Management Plan</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              The crowd management plan is central to covering all aspects of crowd management. It documents and asses central questions regarding crowd safety and security, including:
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• The location and size of entries and exits as well as emergency escape routes</p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• Access to first-aid facilities</p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• Venue capacity, and the resulting people density</p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• Access control and access management to limit the number of people and to prevent unauthorized access</p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• Sufficient provisioning of water and food as well as sanitary facilities</p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• Clear communication and guidance through speakers and (digital) signage</p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• Real-time crowd control, analysis and monitoring capabilities</p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• Sufficient and trained (security) staffing to execute crowd control decisions</p>
              </div>
              <div className="bg-primary/40 rounded-lg p-4 border border-secondary/20">
                <p className="text-white/80 leading-relaxed">• Clear crowd management structures and responsibilities</p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-4">
              Having a detailed crowd management plan in place helps to improve on all aspects of the crowd management as it can be revised after each event. Several best practices exist to create a reliable and scientific crowd management plan.
            </p>
          </section>

          {/* SECTION: Evacuation Simulation */}
          <section id="evacuation-simulation" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">10. Evacuation Simulation and People Flow Optimization</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              For large scale events a simulation of an evacuation and people flow might be required to understand if the event venue requires structural changes or the number of participants needs to be limited.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Furthermore, crowd simulations help to understand how long a crowd would need to leave the building or location in the event of an incident. With this information at hand, event operators can make informed decisions throughout the event.
            </p>
          </section>

          {/* SECTION: Crowd Analysis */}
          <section id="crowd-analysis" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">11. Crowd Analysis and People Flow Monitoring</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Video security systems help event operators to understand and monitor crowd behavior visually. Augmented with AI video analytics capabilities such as crowd counting or people flow measurement, cameras can provide powerful real-time crowd KPIs such as density per square meter, flow-rate and velocity to event operators and authorities.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              When these KPIs start becoming abnormal, an alarm can be triggered in the video management system, notifying the operator who can decide on appropriate actions such as reducing inflow through access control, making an announcement or deploying additional security staff.
            </p>
          </section>

          {/* SECTION: Crowd Estimation */}
          <section id="crowd-estimation" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">12. Crowd Estimation</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              The tool MapChecking by Anthony Catel allows to estimate the number of people in a given area given a certain density. The tool implements the Jacobs method, named after Herbert Jacobs, who invented it in the 1960s.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              The tool has presets for light crowds (0.30 people per sqm), crowded spaces (2.00 people per sqm) and densely packed crowds (4.00 people per sqm).
            </p>
          </section>

          {/* SECTION: Crowd Disasters */}
          <section id="crowd-disasters" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">13. Crowd Disasters</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd disasters or crowd collapses and crushes happen when the density of the crowd reaches or exceeds 4 to 5 persons per m². The crowd collapses in on itself, or becomes so densely packed that individuals are crushed. The pressure through the crowd on the lungs causes a lack of oxygen (Asphyxia) which can lead to death.
            </p>
            <div className="bg-primary/40 rounded-lg p-6 border border-secondary/20 mb-4">
              <h3 className="text-lg font-semibold text-primary mb-3">World Crowd Disasters Map</h3>
              <p className="text-white/80 leading-relaxed">
                The World Crowd Disasters Map by Dr. Ali Asgary, Associate Professor, Disaster & Emergency Management, York University illustrates that crowd disasters unfortunately can happen everywhere and often do so with high number of fatalities. Thorough crowd management is the best way to avoid such tragedies.
              </p>
            </div>
          </section>

          {/* SECTION: Conclusion */}
          <section id="conclusion" className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Crowd management is an important tool for keeping large groups of people safe. Unfortunately crowd disasters still happen. A concise crowd management plan and the use of technologies such as simulation, access control and intelligent video technologies can help event operators and authorities creating safer events.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog33;
