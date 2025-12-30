"use client"
import React, { useState } from 'react';

const WeekResult = () => {
  const [activePhase, setActivePhase] = useState(null);

  const phases = [
    {
      id: 'exec',
      title: 'Exec.',
      subtitle: 'Briefing',
      duration: '2 Hours',
      image: 'https://codework-ebook.s3.amazonaws.com/codework-media/timeline/images1.jpg',
      description: 'Conduct initial executive briefing to understand business objectives, challenges, and strategic goals. Align stakeholders on project vision and expected outcomes.'
    },
    {
      id: 'tech',
      title: 'Technology',
      subtitle: 'Assessment',
      duration: '2-3 Days',
      image: 'https://codework-ebook.s3.amazonaws.com/codework-media/timeline/images2.jpg',
      description: 'Perform comprehensive technology assessment of your current infrastructure, data systems, and technical capabilities to identify integration opportunities.'
    },
    {
      id: 'production',
      title: 'Production',
      subtitle: 'Trial',
      duration: '8-12 Weeks',
      image: 'https://codework-ebook.s3.amazonaws.com/codework-media/timeline/images3.jpg',
      description: 'Deploy pilot CODEWORK application in controlled production environment. Test functionality, gather user feedback, and refine algorithms for optimal performance.'
    },
    {
      id: 'deployment',
      title: 'AI Application',
      subtitle: 'Deployment in Production',
      duration: '3-6 Months',
      image: 'https://codework-ebook.s3.amazonaws.com/codework-media/timeline/images4.jpg',
      description: 'Scale and deploy a tested CODEWORK application into production. Incorporate user feedback and optimize algorithms to drive maximum economic value.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-secondary text-primary py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Title */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Proven results in weeks,<br />not years
            </h2>
          </div>

          {/* Right Side - Image and Description (shows active phase) */}
          <div className="relative">
            {activePhase ? (
              <div className="bg-primary text-secondary  overflow-hidden shadow-2xl transition-all duration-500">
                <img 
                  key={activePhase}
                  src={phases.find(p => p.id === activePhase)?.image} 
                  alt={phases.find(p => p.id === activePhase)?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-base leading-relaxed">
                    {phases.find(p => p.id === activePhase)?.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-primary text-secondary  overflow-hidden shadow-2xl">
                <img 
                  src="https://codework-ebook.s3.amazonaws.com/codework-media/timeline/images1.jpg" 
                  alt="Default"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-base leading-relaxed">
                    Scale and deploy a tested CODEWORK application into production. Incorporate user feedback and optimize algorithms to drive maximum economic value.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-primary/10">
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              className={`relative cursor-pointer transition-all duration-300 ${
                index !== phases.length - 1 ? 'border-r border-primary/10' : ''
              }`}
              onMouseEnter={() => setActivePhase(phase.id)}
              onMouseLeave={() => setActivePhase(null)}
              onClick={() => setActivePhase(phase.id)}
              onFocus={() => setActivePhase(phase.id)}
              tabIndex={0}
            >
              {/* Phase Header */}
              <div className={`p-6 transition-all duration-300 ${
                activePhase === phase.id 
                  ? 'bg-primary/10' 
                  : 'bg-secondary'
              }`}>
                <h3 className="text-xl font-bold mb-1">{phase.title}</h3>
                <p className="text-lg text-primary/70">{phase.subtitle}</p>
              </div>

              {/* Duration */}
              <div className="bg-secondary p-6 border-t border-primary/10">
                <p className="text-xl font-semibold">{phase.duration}</p>
              </div>

              {/* Active Indicator */}
              {activePhase === phase.id && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar Visual */}
        <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500"
            style={{ 
              width: activePhase 
                ? `${((phases.findIndex(p => p.id === activePhase) + 1) / phases.length) * 100}%` 
                : '0%' 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WeekResult;
