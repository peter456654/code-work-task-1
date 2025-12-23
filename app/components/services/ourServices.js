"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaMobile,
  FaGlobe,
  FaUsers,
  FaLock,
  FaArrowRight,
  FaBullhorn,
} from "react-icons/fa";
import { BiSync } from "react-icons/bi";
import MobileOurServices from "./mobileOurServices";

export const servicesData = [
  {
    title: "AI Implementation",
    description: "Strategic AI Implementation for Business Success.",
    icon: FaLock,
    link: "/ai-implementation",
    image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/services/AIimplement.jpg",
  },
  {
    title: "AI Model Training & Fine Tuning",
    description:
      "Advanced machine learning solutions and AI model development for your business needs.",
    icon: FaBrain,
    link: "/ai-model-training",
    image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/services/AIModelTraining2.jpg",
  },
  {
    title: "AI Driven Custom Software Development",
    description:
      "Bespoke development solutions designed specifically for your unique requirements.",
    icon: FaDatabase,
    link: "/custom-software-development",
    image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/services/AIDrivenCustomSoftware.jpg",
  },
  {
    title: "DevOps Solutions",
    description:
      "Streamlined deployment and integration processes for efficient development cycles.",
    icon: BiSync,
    link: "/devops-solutions",
    image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/services/DevOpsSolutions.jpg",
  },
  {
    title: "Cloud Computing",
    description:
      "Scalable cloud infrastructure and migration services for modern businesses.",
    icon: FaCloud,
    link: "/cloud-computing",
    image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/services/CloudComputing.avif",
  },
  {
    title: "AI in Cyber Security",
    description:
      "Comprehensive security solutions to protect your digital assets and data.",
    icon: FaShieldAlt,
    link: "/cybersecurity-service",
    image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/services/AICyberSecurity.jpg",
  },
  {
    title: "AI Automation",
    description: "Transform Your Business with AI Automation.",
    icon: FaMobile,
    link: "/ai-automation",
    image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/services/automation.jpg",
  },
  {
    title: "Agentic AI",
    description: "Empower Your Business with Agentic AI.",
    icon: FaGlobe,
    link: "/agentic-ai",
    image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/services/agentic-ai.jpg",
  },
  {
    title: "IT Staff Augmentation",
    description:
      "Skilled IT professionals to enhance your team's capabilities and capacity.",
    icon: FaUsers,
    link: "/it-staff-service",
    image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/services/ITStaffAugmentation.jpg",
  },
  {
    title: " AI in Digital Marketing Services",
    description:
      "Codework offers tailored Digital Marketing to boost conversions.",
    icon: FaBullhorn,
    link: "/digital-marketing-services",
    image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/services/AIDigitalMarketing.jpg",
  },
  {
    title: "Professional Annotation Services",
    description:
      "Codework offers Professional Annotation Services to help you with your data annotation needs.",
    icon: FaCode,
    link: "/annotation-services",
    image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/services/AnnotationServices.avif",
  },
  {
    title: "Data Science & Analytics",
    description:
      "Codework offers Data Science & Analytics services to help you make data-driven decisions.",
    icon: FaCode,
    link: "/predictive-analytics",
    image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/services/DataScience.jpg",
  },
];

const OurServices = () => {
  const services = servicesData;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {isMobile ? (
        <MobileOurServices />
      ) : (
        <div className="bg-secondary text-primary py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Enhanced Header Section */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">

              {/* Enhanced Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6 animate-slide-up animation-delay-200">
                <span className="text-primary">Our </span>
                <span className="text-primary">
                  Services
                </span>
              </h2>

              {/* Enhanced Description */}
              <div className="relative animate-slide-up animation-delay-400">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                <p className="text-primary/90 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                  With{" "}
                  <span className="text-primary font-medium">Codework</span>,
                  adopting technology means embracing innovation with a personal
                  touch. Our commitment to excellence ensures every project is
                  delivered with{" "}
                  <span className="text-primary font-medium">
                    precision and care
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Enhanced Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative mb-12 sm:mb-16 md:mb-20 animate-card-float"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Enhanced Card Container */}
                  <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-secondary/25">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 "
                    />
                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                  </div>

                  {/* Enhanced Glass-morphism Info Card */}
                  <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 left-4 right-4 bg-primary/20 backdrop-blur-xl border border-white/10  p-4 sm:p-5 md:p-6 shadow-2xl z-10 group-hover:bg-primary/30 group-hover:border-white/30 transition-all duration-500 group-hover:scale-105">
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-secondary/5 "></div>

                    <h3 className="relative text-base sm:text-lg md:text-xl font-bold text-primary mb-2 sm:mb-3 text-center transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="relative text-primary/80 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed text-center line-clamp-2">
                      {service.description}
                    </p>
                    <div className="relative text-center">
                      <Link href={service.link || "#"}>
                        <button className="relative bg-secondary text-primary font-medium text-[15px] px-3 py-[0.2em] pl-4 h-[2.2em] rounded-[0.8em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_rgba(255,255,255,0.3)] group">
                          <span className="mr-8">Read More</span>
                          <div className="absolute right-[0.25em] bg-primary h-[1.7em] w-[1.7em] rounded-[0.6em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.5em)] shadow-[0.1em_0.1em_0.5em_0.15em_rgba(255,255,255,0.25)] active:scale-95">
                            <FaArrowRight className="w-[0.8em] transition-transform duration-300 text-secondary group-hover:translate-x-[0.1em]" />
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Bottom Decoration */}
          <div className="absolute bottom-0 right-0 opacity-20 hidden sm:block">
            <div className="w-64 h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
          </div>

          {/* Enhanced CSS Animations */}
          <style jsx>{`
            @keyframes blob {
              0% {
                transform: translate(0px, 0px) scale(1);
              }
              33% {
                transform: translate(30px, -50px) scale(1.1);
              }
              66% {
                transform: translate(-20px, 20px) scale(0.9);
              }
              100% {
                transform: translate(0px, 0px) scale(1);
              }
            }

            @keyframes float {
              0%,
              100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-6px);
              }
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes cardFloat {
              from {
                opacity: 0;
                transform: translateY(40px) scale(0.95);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            @keyframes bounceSubtle {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-2px);
              }
            }

            .animate-blob {
              animation: blob 7s infinite;
            }

            .animate-float {
              animation: float 3s ease-in-out infinite;
            }

            .animate-fade-in {
              animation: fadeIn 0.8s ease-out;
            }

            .animate-slide-up {
              animation: slideUp 0.8s ease-out;
            }

            .animate-card-float {
              animation: cardFloat 0.8s ease-out;
            }

            .animate-bounce-subtle {
              animation: bounceSubtle 1s ease-in-out infinite;
            }

            .animation-delay-200 {
              animation-delay: 0.2s;
            }

            .animation-delay-400 {
              animation-delay: 0.4s;
            }

            .animation-delay-1000 {
              animation-delay: 1s;
            }

            .animation-delay-2000 {
              animation-delay: 2s;
            }

            .animation-delay-4000 {
              animation-delay: 4s;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default OurServices;
