"use client"
import React, { useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';

const SoftwareServices = () => {
  const [activeService, setActiveService] = useState('ai-automation');

  const services = {
    'ai-automation': {
      title: ' Automate & Implement',
      heading: 'AI Powered Automation',
      description: 'Transform your business operations with intelligent automation solutions. We implement cutting-edge AI technologies to streamline workflows, reduce manual tasks, and accelerate your digital transformation journey.',
      buttonText: 'Explore AI Solutions',
      buttonLink: 'https://codework.ai/ai-solutions'
    },
    'custom-software': {
      title: 'Custom Software',
      heading: 'Custom Software Development',
      description: 'Build tailored software solutions designed specifically for your unique business needs. Our expert developers create scalable, robust applications that drive innovation and deliver measurable results for your organization.',
      buttonText: 'Start Your Project',
      buttonLink: 'https://codework.ai/ai-services'
    },
    'staff-augmentation': {
      title: 'Staff Augmentation',
      heading: 'Staff Augmentation',
      description: 'Scale your development team instantly with highly skilled professionals. Access top-tier talent on demand to accelerate project delivery, fill skill gaps, and maintain flexibility in your workforce management strategy.',
      buttonText: 'Find Talent',
      buttonLink: 'https://codework.ai/it-staff-service'
    },
    'cloud-devops': {
      title: 'Cloud & DevOps',
      heading: 'Cloud & DevOps Solutions',
      description: 'Modernize your infrastructure with cloud-native architectures and DevOps practices. We help you achieve faster deployment cycles, improved reliability, and optimal resource utilization across your technology stack.',
      buttonText: 'Optimize Infrastructure',
      buttonLink: 'https://codework.ai/cloud-computing'
    },
    'ai-certification': {
      title: 'AI Certification',
      heading: 'AI Certification Programs',
      description: 'Empower your team with industry-recognized AI certifications and comprehensive training programs. Build internal expertise and stay ahead of the curve with our specialized learning paths and hands-on workshops.',
      buttonText: 'Get Certified',
      buttonLink: 'https://cplc.codework.ai/courses'
    }
  };

  const serviceKeys = Object.keys(services);
  const activeServiceData = services[activeService];

  return (
    <div className=" bg-secondary text-primary">
      {/* Header */}
      <div className="text-center  pb-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">AI powered solution</h2>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {serviceKeys.map((key) => (
            <div
              key={key}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveService(key)}
            >
              <div className={`text-center py-6 transition-all duration-300 ${
                activeService === key ? 'opacity-100' : 'opacity-60'
              }`}>
                <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                  activeService === key ? 'bg-primary' : 'bg-secondary'
                }`}></div>
                <h3 className="text-lg font-semibold mt-4 text-primary">{services[key].title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="text-center space-y-8 transition-all duration-500">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
            {activeServiceData.heading}
          </h2>
          
          <p className="text-xl md:text-2xl text-primary/80 leading-relaxed max-w-3xl mx-auto">
            {activeServiceData.description}
          </p>

          <div className="pt-6">
            <a 
              href={activeServiceData.buttonLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-3 text-lg font-semibold hover:gap-5 transition-all duration-300 border border-primary px-5 py-3 rounded-none hover:bg-primary hover:text-secondary"
            >
              {activeServiceData.buttonText}
              <IoArrowForward className="w-6 h-6 text-primary group-hover:text-secondary group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareServices;
