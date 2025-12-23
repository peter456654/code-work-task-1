"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { MdArrowCircleRight } from "react-icons/md";
import { RiBrain2Fill } from 'react-icons/ri';
import { BsStars, BsFillBarChartLineFill } from 'react-icons/bs';
import { GiGears } from 'react-icons/gi';
import { AiFillMessage } from 'react-icons/ai';
import { FaDatabase, FaRobot } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';
import MobileSection from './mobileSection';

const Card = ({ card, additionalStyle, index }) => {
  const router = useRouter();
  const IconComponent = card.icon;

  const handleCardClick = () => {
    if (card.link) {
      router.push(card.link);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={`relative overflow-hidden border border-white/10 shadow-2xl bg-cover bg-center transition-all duration-500 hover:scale-105 cursor-pointer group h-[240px] sm:h-[320px] md:h-[360px] w-full max-w-[520px] animate-float-up`}
      style={{
        backgroundImage: `url(${card.image})`,
        animationDelay: `${index * 0.2}s`
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 via-secondary/50 to-secondary/30 opacity-50 group-hover:opacity-60 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/70 to-secondary opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>

      <div className="absolute bottom-0 w-full p-4 text-white transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-6">
        <div className="flex justify-start ml-4 sm:ml-24 mb-4">
          {IconComponent && (
            <div className="relative">
              <IconComponent
                size={52}
                className="relative z-10 transition-all duration-300 group-hover:scale-105"
                style={{ fill: "url(#iconGradient)" }}
              />
            </div>
          )}
        </div>
        <div className="w-full flex items-center ml-4 sm:ml-24 justify-between">
          <h3 className="text-xl font-bold  text-primary transition-all duration-500 ease-in-out">
            {card.title}
          </h3>
        </div>
        <div className="absolute top-1/2 right-4 sm:right-16 md:right-16 lg:right-32 transform -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-24 group-hover:opacity-0">
          <div className="relative">
            <MdArrowCircleRight size={28} className="relative z-10" style={{ fill: "url(#iconGradient)" }} />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="text-center px-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-3 text-primary">{card.title}</h3>
          <p className="text-lg leading-relaxed font-light max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {card.description}
          </p>
        </div>
      </div>

      
    </div>
  );
};

const AiCardSection = () => {
  const [showMore, setShowMore] = React.useState(false);

  const cardsData = [
    {
      id: 1,
      title: 'AI Consulting',
      description: 'Our AI consulting services deliver tailor-made solutions that align with your business goals, helping organizations identify opportunities for automation and growth.',
      image: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/AIConsulting.avif',
      roundedCorner: 'rounded-bl-[170px] rounded-tr-[170px]',
      icon: RiBrain2Fill,
      link: '/ai-consulting',
    },
    {
      id: 2,
      title: 'Generative AI',
      description: 'Creativity meets technology with our Generative AI solutions, boosting productivity and turning your ideas into reality.',
      image: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/GenerativeAI.jpg',
      roundedCorner: 'rounded-tl-[170px] rounded-br-[170px]',
      icon: BsStars,
      link: '/generative-ai',
    },
    {
      id: 3,
      title: 'Machine Learning',
      description: 'Leveraging advanced frameworks like PyTorch and TensorFlow, we enable data-driven decisions and predictive insights.',
      image: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/MachineLearning.avif',
      roundedCorner: 'rounded-tl-[170px] rounded-br-[170px]',
      icon: GiGears,
      link: '/machine-learning',
    },
    {
      id: 4,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions that enhance text analysis, automate customer support, and improve communication.',
      image: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/NaturalLanguageProcessing.jpg',
      roundedCorner: 'rounded-bl-[170px] rounded-tr-[170px]',
      icon: AiFillMessage,
      link: '/natural-language-processing',
    },
    {
      id: 5,
      title: 'Data Engineering',
      description: 'Robust data infrastructure services ensuring your data is well-organized, accessible, and efficiently processed.',
      image: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/DataEngineering.avif',
      roundedCorner: 'rounded-bl-[170px] rounded-tr-[170px]',
      icon: FaDatabase,
      link: '/data-engineering',
    },
    {
      id: 6,
      title: 'Cyber Security',
      description: 'Advanced cybersecurity solutions using cutting-edge technologies to protect your digital assets and infrastructure.',
      image: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/CyberSecurity.jpg',
      roundedCorner: 'rounded-tl-[170px] rounded-br-[170px]',
      icon: MdOutlineSecurity,
      link: '/ai-in-cybersecurity',
    },
    {
      id: 7,
      title: 'Predictive Analytics',
      description: 'AI-driven forecasting models that analyze trends, predict outcomes, and deliver actionable insights for better planning.',
      image: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/PredictiveAnalytics.jpg',
      roundedCorner: 'rounded-tl-[170px] rounded-br-[170px]',
      icon: BsFillBarChartLineFill,
      link: '/predictive-analytics',
    },
    {
      id: 8,
      title: 'AI-Chatbots',
      description: 'Intelligent AI chatbots that enhance customer engagement with real-time responses and improved user satisfaction.',
      image: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/expertise/chatbot.jpg',
      roundedCorner: 'rounded-bl-[170px] rounded-tr-[170px]',
      icon: FaRobot,
      link: '/ai-chatbot-integration',
    },
  ];

  const displayedCards = showMore ? cardsData : cardsData.slice(0, 4);

  return (
    <div className="relative p-8 bg-secondary overflow-hidden">
      {/* Enhanced background with floating elements */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full animate-blob animation-delay-1000"></div>
      </div> */}

      {/* Floating particles */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
      </div> */}

      {/* Enhanced SVG gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6">
          <span className="text-secondary text-sm font-medium">— AI Solutions —</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          <span className="text-white"> Our  </span>
          <span className="text-primary">
          Expertise
          </span>
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Cutting-edge AI solutions designed to transform your business
        </p>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-9 justify-items-center">
          {displayedCards.map((card, index) => (
            <Card key={card.id} card={card} additionalStyle={card.additionalStyle} index={index} />
          ))}
        </div>
        {!showMore && (
          <div className="flex justify-center mt-12">
            <button
              className="relative px-12 py-4 text-primary font-bold rounded-full border border-white/20 transition-all hover:bg-white/10 overflow-hidden group"
              onClick={() => setShowMore(true)}
            >
              <span className="relative z-10">View All</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
            </button>
          </div>
        )}
      </div>

      {/* Mobile view */}
      <div className="flex md:hidden relative z-10">
        <MobileSection />
      </div>

      {/* Enhanced decoration */}
      <div className="absolute bottom-0 right-0 opacity-30">
        <div className="w-64 h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Advanced CSS Animations */}
      <style jsx>{`
        @keyframes float-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-float-up {
          animation: float-up 0.8s ease-out;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
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
  );
};

export default AiCardSection;
