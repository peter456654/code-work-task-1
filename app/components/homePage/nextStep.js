import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import Link from 'next/link';

const NextStep = () => {
  const steps = [
    {
      title: 'Contact Sales',
      description: 'Learn how our industry-leading Enterprise AI software products can help your organization.',
      link: '/contact-sales'
    },
    {
      title: 'Investor Relations',
      description: 'Contact us at codework.ai to learn more about investing at CodeWork.',
      link: '/schedule-a-demo',
      email: 'CodeWork.ai'
    },
    {
      title: 'Request Information',
      description: 'For all other questions, please contact us here.',
      link: '/other-inquiries'
    }
  ];

  return (
    <div className="bg-secondary text-primary pt-14 pb-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-primary">
          Take the next step
        </h2>

        {/* CTA Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              {/* Button Card */}
              <Link
                href={step.link}
                className="group relative border-2 border-primary p-4 mb-4 flex items-center justify-between cursor-pointer overflow-hidden"
              >
                {/* Background fill animation */}
                <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                
                {/* Content */}
                <span className="relative z-10 text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">{step.title}</span>
                <IoArrowForward className="relative z-10 w-8 h-8 text-primary group-hover:text-secondary group-hover:translate-x-2 transition-all duration-300" />
              </Link>

              {/* Description */}
              <p className="text-primary/70 text-lg leading-relaxed">
                {step.description.split('CodeWork.ai').map((part, i) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < step.description.split('CodeWork.ai').length - 1 && (
                      <span className="text-primary underline">CodeWork.ai</span>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextStep;
