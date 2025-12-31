"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from "react";

export default function Education() {
  // Industry cards data (excluding Education since this is the Education page)
  const industryCards = [
    {
      title: "Healthcare",
      img: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/Healthcare.jpg",
      description: "Our AI-powered healthcare solutions revolutionize diagnostics with precision and speed, enabling personalized treatment plans tailored to each patient.",
      link: "/ai-in-healthcare-you-must-know",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6h5v2h2V6h1V4H4zM4 10h5v2h2v-2h1V8H4zM4 14h5v2h2v-2h1v-2H4z" />
        </svg>
      ),
    },
    {
      title: "E-commerce",
      img: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/AI-E-commerce.avif",
      description: "Discover the secrets of integrating AI in e-commerce and unlock remarkable success for your business with our expert strategies.",
      link: "/ai-in-ecommerce",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
    },
    {
      title: "Finance",
      img: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/finance.jpg",
      description: "Find out how new AI technologies in finance are empowering decisions and paving the way for a brighter, more efficient financial future.",
      link: "/new-ai-in-finance",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-secondary text-primary min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-secondary min-h-screen overflow-hidden">
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70 z-10"></div>
        
        {/* Background image positioned at bottom half with responsive positioning */}
        <div className="absolute bottom-0 left-[5%] sm:left-[10%] md:left-[15%] lg:left-[20%] h-1/4 sm:h-1/3 md:h-2/5 lg:h-1/2 w-[90%] sm:w-4/5 md:w-4/5 lg:w-4/5">
          <Image
            src="https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/education.webp"
            alt="AI in Education"
            fill
            className="object-cover rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-3xl"
            priority
          />
        </div>

        {/* Contact button - HIDDEN on mobile, visible from tablet up */}
       <div className="absolute hidden sm:block top-24 right-6 md:top-32 md:right-8 lg:top-52 lg:right-8 z-30">
  <Link href="/contact-ai-solutions">
    <button className="bg-transparent border-2 border-primary text-primary font-bold py-2.5 px-6 md:py-3 md:px-8 text-sm md:text-base rounded-none transition-colors duration-200 hover:bg-primary/10">
      Contact us →
    </button>
  </Link>
</div>

        {/* Content wrapper - responsive with proper mobile spacing */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-12 md:py-16 lg:py-20 min-h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center w-full h-full">
            
            {/* Left side - Text content with balanced spacing */}
            <div className="flex flex-col pl-4 sm:pl-8 md:pl-12 justify-center space-y-4 sm:space-y-6 md:space-y-8 pt-8 pb-16 sm:pt-8 sm:pb-8 md:pt-4 md:pb-4 lg:pt-0 lg:pb-0">            
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-primary mb-4 sm:mb-6 leading-tight">
                  AI in Education
                </h1>
                <p className="text-base sm:text-lg md:text-lg lg:text-lg text-primary/90 leading-relaxed max-w-full sm:max-w-xl md:max-w-2xl">
                  Revolutionizing the Way We Learn. Artificial Intelligence (AI) is no longer a futuristic concept—it's already transforming how we live, work, and learn through personalized and interactive education experiences.
                </p>
              </div>
            </div>

            {/* Right side - Decorative elements - hidden on mobile and small screens */}
            <div className="relative hidden md:block">
              <div className="absolute -top-4 -right-4 w-20 h-20 lg:w-24 lg:h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 lg:w-32 lg:h-32 bg-secondary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="bg-secondary/30 rounded-xl p-8 border border-primary/30">
            <h2 className="text-2xl font-bold text-primary mb-4">Fill the form to receive a call</h2>
            <p className="text-primary/70 mb-6">
              Connect with our education AI experts to learn how we can help transform your learning experience.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary/80 mb-2">Full name</label>
                <input 
                  type="text" 
                  placeholder="John Carter"
                  className="w-full px-4 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary placeholder-primary/50 focus:outline-none focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary/80 mb-2">Email address</label>
                <input 
                  type="email" 
                  placeholder="example@yourdomain.com"
                  className="w-full px-4 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary placeholder-primary/50 focus:outline-none focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary/80 mb-2">Phone number</label>
                <input 
                  type="tel" 
                  placeholder="(123) 456-7890"
                  className="w-full px-4 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary placeholder-primary/50 focus:outline-none focus:border-primary"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-transparent border-2 border-primary text-primary font-bold py-3 px-6 rounded-none transition-colors duration-200 hover:bg-primary hover:text-secondary"
              >
                Receive a call →
              </button>
            </form>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">How AI is Changing the Classroom</h2>
              <p className="text-primary/80 leading-relaxed mb-6">
                Education, one of the most important pillars of society, is experiencing a remarkable shift thanks to AI-powered innovations. From personalized learning platforms to automated grading, AI is making education more interactive and effective. Imagine a virtual tutor that understands each student's strengths and weaknesses, offering tailor-made lessons—AI-driven adaptive learning systems are making this possible.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Codework's Role in the AI Education Revolution</h3>
              <p className="text-primary/80 mb-6">
                At the forefront of this transformation is Codework, a company dedicated to making learning smarter and more accessible.
              </p>
              
              <ul className="space-y-3 text-primary/80">
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span><strong>HyperFlex AI</strong> – A tool built specifically for students, focusing only on education-related searches for accurate, distraction-free results.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span><strong>PDF Translator tool</strong> – Allows students to translate study materials, research papers, and class notes into multiple languages.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span><strong>Personalized Learning</strong> – AI analyzes student performance and learning styles to create tailored study plans.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span><strong>Real-time feedback</strong> – Teachers can track progress, identify learning gaps, and provide immediate assistance.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Personalized Learning: No More One-Size-Fits-All</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-secondary/20 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Adaptive Content</h4>
                  <p className="text-primary/70 text-sm">AI adjusts content difficulty based on individual learning pace and comprehension.</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Learning Analytics</h4>
                  <p className="text-primary/70 text-sm">Data-driven insights help identify strengths and areas for improvement.</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Language Barriers</h4>
                  <p className="text-primary/70 text-sm">Breaking down barriers with multilingual support and translation tools.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-binary mb-4">Benefits of AI in Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-primary/80"><strong>Interactive Learning</strong> – Makes education more engaging and effective.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-primary/80"><strong>Time Saving</strong> – Educators save valuable time with automated tools.</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-primary/80"><strong>Equal Access</strong> – Opens doors to learning opportunities for diverse backgrounds.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-primary/80"><strong>Better Outcomes</strong> – Students receive personalized attention and support.</span>
                </div>
              </div>
              </div>
            </div>

            {/* Education Image */}
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/education.webp"
                alt="AI Education Technology"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-primary/10 rounded-lg p-6 border border-primary/30">
              <p className="text-primary/90 text-lg leading-relaxed">
                <strong>Balancing Technology and the Human Touch:</strong> While AI offers incredible advantages, education should still nurture creativity, empathy, and life skills. Tools like HyperFlex AI and the PDF Translator are meant to assist—not replace—teachers, ensuring technology works alongside human guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Industries Section */}
      <section className="bg-secondary/40 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-primary">More Industries</h2>
            <Link href="/industries-you-must-know" className="text-primary hover:text-primary/80 font-semibold">
              Browse all industries →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryCards.map((card, idx) => (
              <div key={idx} className="bg-secondary/20 rounded-lg p-6 border border-primary/30 hover:border-primary/50 transition-colors group">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{card.title}</h3>
                <p className="text-primary/70 mb-4">{card.description}</p>
                <Link href={card.link} className="text-primary group-hover:text-primary/80 font-semibold">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .drop-shadow-glow {
          text-shadow: 0 0 20px rgba(29, 223, 234, 0.6), 0 0 4px rgba(34, 48, 68, 0.6);
        }
      `}</style>
    </div>
  );
}
