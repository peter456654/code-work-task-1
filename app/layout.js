"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import Footer from "./components/common/footer";
import Navbar from "./components/common/nav";
import { usePathname } from "next/navigation";
import ChatBot from "./components/ChatBot";

const getMetaTags = (pathname) => {
  switch (pathname) {
    case "/":
      return {
        title:
          "AI Software Development & Innovation | CODEWORK",
        description:
          "Partner with a trusted AI development firm specializing in customized solutions to automate workflows and support business scaling.",
        keywords:
          "AI software development, machine learning, data science, cybersecurity, cloud computing, web development, mobile app development, AI consulting, generative AI, NLP, data engineering, predictive analytics, blockchain, Reactjs & Nextjs, Java & Python, Azure, AWS, R language, Deep Learning, Neural Networks",
      };
    case "/ai-solutions":
      return {
        title: "Innovate with AI & Advanced Tech | CODEWORK Expertise",
        description:
          "Empowering innovation with AI and advanced technologies at Codework. Transform your business with intelligent and future-ready software solutions.",
        keywords:
          "AI solutions,Generative AI,Machine Learning,AI consulting,Predictive analytics,Natural Language Processing (NLP),Data engineering,Cybersecurity & AI,AI chatbots",
      };
    case "/ai-services":
      return {
        title: "AI Software Development Services | Codework",
        description:
          "A trusted software development partner with 5+ years of experience delivering innovative and scalable solutions. Work with us for complete end-to-end services.",
        keywords:
          "AI Services,AI Model Training,AI driven custom software development,AI Implementation,DevOps Solutions,Cloud Computing,AI in Cyber Security,AI in Digital Marketing Services, Agentic AI,AI Automation",
      };
    case "/our-company-case-studies":
      return {
        title: "Transform Business with AI & ML Solutions by CODEWORK",
        description:
          "Discover how CODEWORK's AI and Machine Learning solutions transform businesses, streamline operations, and unlock growth through real-world case studies.",
      
        keywords:
          "AI & ML case studies,Business transformation through AI,Revenue growth, cost reduction,AI-powered PDF translator, web scraping, text analytics, radi insight scan",
      };
    case "/testimonials":
      return {
        title: " Client Testimonials | Success Stories & Feedback at Codework",
        description:
          "Hear from our clients about how Codework’s AI solutions have transformed their businesses. Real feedback that inspires us to deliver exceptional results every day.",
        keywords:
          "Client testimonials,AI project success,Technical expertise,Seamless integration,Deadline-driven delivery",
      };

      case "/our-company-case-studies":
        return {
          title: "Transform Business with AI & ML Solutions by CODEWORK",
          description:
            "Discover how CODEWORK's AI and Machine Learning solutions transform businesses, streamline operations, and unlock growth through real-world case studies.",
          keywords:
            "AI & ML case studies,Business transformation through AI,Revenue growth, cost reduction,AI-powered PDF translator, web scraping, text analytics, radi insight scan",
        };
    case "/our-blog-lists":
      return {
        title: "Insights & Trends in AI and Tech Innovation | Codework",
        description:
          "Explore the Codework blog for expert insights, AI trends, tech innovations, and practical guides to help you stay ahead in the evolving digital landscape.",
        keywords:
          "AI Trends,Artificial Intelligence in Software Development,Generative AI,Large Language Models (LLMs),AI Model Context Protocol,Deep Learning & Machine Learning,Code Generation Automation,Predictive Analytics,Android Activity Launch Modes,WorkManager / AlarmManager / JobScheduler",
      };
    case "/careers-at-codework":
      return {
        title: "Careers at Codework – Shape the Future of Technology",
        description:
          "Discover how CODEWORK's AI and Machine Learning solutions transform businesses, streamline operations, and unlock growth through real-world case studies.",
        keywords:
          "AI & ML case studies,Business transformation through AI,Revenue growth, cost reduction,AI-powered PDF translator, web scraping, text analytics, radi insight scan",
      };
    case "/about-us":
      return {
        title: "Codework: Shaping the Future with Powerful AI Innovation",
        description:
          "Discover how Codework is shaping the future with powerful AI innovation, transforming businesses through cutting-edge technology, creativity, and expertise.",
        keywords:
          "AI-driven software company,Technology-driven business transformation,End-to-end AI integration,Scalable and secure systems,Human-first AI solutions",
        };
    case "/contact-ai-solutions":
      return {
        title: "Contact Codework Today for Expert AI Solutions",
        description:
          "Reach out to Codework and discover how our AI solutions can empower your business. Let us help you innovate, streamline, and achieve your goals.",
        keywords:
          "Contact Codework,AI solutions inquiry,Business innovation with AI,Expert AI consultation,AI-driven business growth",
        };
    case "/ai-in-healthcare-you-must-know":
      return {
        title: "Healthcare AI Solutions | Diagnostics & EHR Management",
        description:
          "Revolutionize healthcare with AI-powered diagnostics and secure Electronic Health Records management, improving patient outcomes and streamlining workflows.",
        keywords:
          "AI in Education,Artificial Intelligence in Education,Personalized Learning,Adaptive Learning Systems,HyperFlex AI,Codework AI Solutions,PDF Translator Tool,AI for Students,AI Tools for Teachers,Education Technology (EdTech)",
        };
    case "/ai-in-ecommerce":
      return {
        title: "Smarter Shopping: Predictive E-commerce Analytics",
        description:
          "Enhance e-commerce with predictive analytics. Deliver personalized shopping, secure transactions, and intuitive experiences to boost sales and customer loyalty.",
        keywords:
          "AI in E-Commerce,Artificial Intelligence in Online Shopping,Personalized Shopping Experience,AI Recommendation Engines,AI-Powered Chatbots,Visual Search in E-Commerce,Dynamic Pricing with AI,AI Inventory Management,AI Fraud Detection,Customer Personalization at Scale",
        };
    case "/new-ai-in-finance":
      return {
        title: "Finance AI Solutions | Fraud Detection & Risk Analysis",
        description:
          "Improve financial systems with AI-powered fraud detection and credit risk analysis, ensuring secure and efficient financial operations.",
        keywords:
          "AI in Finance,Artificial Intelligence in Banking,AI in Financial Services,AI in BFSI Sector,AI-Powered Chatbots in Banking,AI Fraud Detection in Finance,Personalized Banking with AI,AI for Credit Risk Assessment,Predictive Analytics in Finance,AI Compliance in Banking",
        };
    case "/unique-ai-in-education":
      return {
        title: "Education AI Solutions | Adaptive Learning Platforms",
        description:
          "Enhance learning with AI-driven adaptive platforms and blockchain certification, personalizing education experiences for students and institutions.",
        keywords:
          "AI in Education,Artificial Intelligence in Education,Personalized Learning,Adaptive Learning Systems,HyperFlex AI,Codework AI Solutions,PDF Translator Tool,AI for Students,AI Tools for Teachers,Education Technology (EdTech)",
        };
    case "/ai-in-data-security":
      return {
        title: "Data Security AI Solutions | Anomaly Detection & Protection",
        description:
          "Protect sensitive data with AI-based anomaly detection and decentralized security protocols to safeguard your business from cyber threats.",
        keywords:
          "AI in Data Security,Cybersecurity,Data Protection,Data Privacy,AI Threat Detection,Data Breaches,Cyberattacks,Compliance (GDPR, HIPAA),Sensitive Information Security,AI-Driven Cybersecurity",
        };
    case "/ai-model-training":
      return {
        title: "AI Model Training Services | Codework Experts",
        description:
          "Accelerate your business with AI model training solutions from Codework. Build smarter, scalable models for real-world applications.",
          keywords:
          "AI Model Training,AI Model Fine-Tuning,Custom AI Solutions,Machine Learning Models,Predictive Analytics AI,Natural Language Processing (NLP),Image Recognition AI,Data Preprocessing for AI,AI Model Optimization,Adaptive Learning Systems",
        };
    case "/custom-software-development":
      return {
        title: "AI Implementation Services | Codework",
        description: "Codework’s AI Implementation Services help businesses integrate AI seamlessly—from strategy and model development to automation, analytics, and ongoing optimization.",
          keywords:
          "AI Implementation Services,AI Strategy and Roadmap,Data Preparation and Integration,Custom AI Model Development,Process Automation with AI,Natural Language Processing (NLP),AI-Powered Analytics,Cloud and On-Premises Deployment,Continuous AI Support and Optimization,Transform Business with AI",
       };
    case "/ai-automation":
      return {
        title: "AI Automation Services for Smarter, Scalable Businesses",
        description:
          "Streamline workflows with Codework’s AI Automation Services. From chatbots and predictive systems to business process automation—boost efficiency, agility, and growth.",
          keywords:
          "AI Automation,AI Automation Services,Business Process Automation with AI,Intelligent Data Processing,Predictive Systems,AI-Powered Chatbots,Workflow Automation,Industry-Specific AI Solutions,Digital Transformation with AI,Smart Automation for Businesses",
        };
          case "/it-staff-service":
      return {
        title: "IT management services that work, from Codework",
        description:
          "Optimize your tech operations with Codework’s management services. We ensure smooth performance, uptime, and security 24/7.",
        keywords:
          "IT Management Services,IT Service Management,IT Operations,IT Support,IT Security,IT Compliance,IT Consulting,IT Project Management,IT Contract Management,IT Training & Development,IT Audit & Accountability",
        };
    case "/cybersecurity-service":
      return {
        title: "Cyber security services tailored by Codework experts",
        description:
          "Safeguard your data, networks, and systems with Codework’s advanced cyber security solutions. We help you detect, prevent, and respond to threats.",
        keywords:
          "Cybersecurity Services,Cyber Threat Intelligence,Incident Response,Data Protection,Cloud Security,Network Security,Security Operations,Security Consulting,Threat Detection,Vulnerability Management,Compliance (GDPR, HIPAA)",
        };
    case "/devops-solutions":
      return {
        title: "Accelerate delivery with DevOps solutions by Codework",
        description:
          "Streamline software delivery with Codework’s DevOps solutions. CI/CD, automation, and cloud-native tools for better collaboration.",
        keywords: 
          "DevOps solutions,CI/CD Pipeline,Cloud Infrastructure Automation,Containerization & Kubernetes,Configuration Management,Monitoring & Logging,DevSecOps (Security & Compliance),Microservices & Serverless Architecture,Automated Testing & Quality Assurance,DevOps Consulting & Strategy",
        };
    case "/cloud-computing":
      return {
        title: "Cloud computing services by Codework",
        description:
          "Leverage the power of the cloud with Codework’s computing services. Scalable, secure, and cost-effective solutions for your business.",
         keywords:
          "Cloud Computing Solutions,Cloud Migration Services,Multi-Cloud & Hybrid Cloud,Serverless Computing,Cloud-Native Development,AI & Big Data in the Cloud,Cloud Security & Compliance,Cloud DevOps & Automation,Disaster Recovery & Backup Solutions,Cloud Strategy & Consulting",  
        };
    case "/ai-powered-pdf-translator":
      return {
        title: "AI-powered PDF Translator by Codework for Multilingual User",
        description:
          "Translate PDFs accurately into Tamil, Hindi, Malayalam, Telugu, and Kannada with Codework’s AI-powered PDF Translator. Retains layout and structure.",
        keywords:
          "AI-powered PDF translator,PDF document translation,Translate Indian languages PDF,Tamil Hindi Malayalam Telugu Kannada translation,AI document translator,Preserve PDF formatting translation,Secure PDF translation tool,Multilingual document translation,Fast and accurate PDF translation,AI translation for businesses",
        };
    case "/web-scraping-services":
      return {
        title: "Codework Web Scraping – Smart Data Collection Made Easy",
        description:
          "Collect valuable web data quickly with Codework’s web scraping service—like having a smart assistant that gathers real-time online insights for your business.",
        keywords:
          "Web Scraping,Data Collection,Automation,Market Trends,Competitor Tracking,Custom Tools,Real-Time Data,Data Accuracy,Technology Stack,Decision-Making",
        };
    case "/signature-recognition-system":
      return {
        title: "Signature Recognition System – Accurate Signature Matching",
        description:
          "Verify handwritten signatures using Codework’s recognition system. With image processing and template matching, it ensures precise, low-security authentication.",
        keywords:
          "Signature Recognition,Handwritten Signature Verification,Image Processing,Template Matching,Correlation Algorithms,Automation,Accuracy,OpenCV,Scalability,AI Integration",
        };
    case "/radi-insight-3D":
      return {
        title: "Radi Insight AI Colon Cancer Test – Accurate & Non-Invasive",
        description:
          "Radi Insight offers a non-invasive, AI-based colon cancer screening alternative to colonoscopies. Boosts accuracy, comfort, and early detection rates.",
          keywords:
          "AI-assisted colon cancer detection,Radi Insight healthcare tool,Non-invasive cancer screening,Colon cancer early detection,AI-powered medical diagnosis,3D modeling for cancer detection,Accurate colon cancer screening,Cost-effective cancer screening,AI in healthcare diagnostics,Real-time clinician support tool",
        };
    case "/radi-insight-scan":
      return {
        title: "Radi Insight Scan – Simplifying Medical Terms for Patients",
        description:
          "Radi Insight Scan helps patients understand complex medical jargon by translating reports into clear, simple language, improving healthcare communication.",
          keywords:
          "Medical Reports,Patient Understanding,Healthcare Communication,Medical Jargon Translation,Patient Comprehension,Multilingual Support,Visual Diagrams,Clear Communication,Informed Healthcare Decisions,Patient-Doctor Conversations",
        };
    case "/hyperflex-ai":
      return {
        title: "Smart Search Engine for Academic Research",
        description:
          "Hyperflx.AI streamlines academic research by providing accurate, relevant, and well-organized educational content to enhance learning outcomes.",
          keywords:
          "Hyperflex,AI-powered search engine,Academic research,Trusted sources,Visual learning,Instant definitions,Summarized concepts,Distraction-free learning,Academic accuracy,Clean interface,Student-friendly",
        };
    case "/launch-modes-andorid":
      return {
        title: "Activity Launch Modes in Android Explained",
        description:
          "Explore Android Activity Launch Modes in detail. Learn how Standard, SingleTop, SingleTask, and SingleInstance affect app behavior and user navigation.",
        keywords:
          "Android Activity Launch Modes, Launch Modes in Android, Android app navigation, Activity lifecycle Android, Android development guide",
      };
    case "/algorithms-to-agents":
      return {
        title: "From Algorithms to Intelligent AI Agents",
        description:
          "Discover the evolution from basic algorithms to intelligent agents in AI. Understand their roles, decision-making processes, and real-world applications.",
        keywords:
          "AI agents, evolution of algorithms, artificial intelligence, intelligent systems, machine learning agents",
      };
    case "/workmanager-alarmmanager-Jobscheduler":
      return {
        title: "WorkManager vs AlarmManager vs JobScheduler",
        description:
          "Compare WorkManager, AlarmManager, and JobScheduler in Android. Learn when to use each for background tasks, scheduling, and optimal app performance.",
        keywords:
          "WorkManager Android, AlarmManager Android, JobScheduler Android, Android background tasks, Android task scheduling",
      };
    case "/model-context-protocol":
      return {
        title: "Model Context Protocol in AI: A Game Changer",
        description:
          "Explore how the Model Context Protocol is revolutionizing AI by enabling smarter interactions, enhanced context awareness, and improved performance.",
        keywords:
          "Model Context Protocol, AI context awareness, advanced AI protocols, future of artificial intelligence, intelligent model interaction",
      };
    case "/tweaks-powerful-adaptations":
      return {
        title: "LoRA in AI: Small Changes, Big Improvements",
        description:
          "Understand how Low-Rank Adaptation (LoRA) enhances AI models with minimal changes. Learn its role in fine-tuning and efficient model adaptation.",
        keywords:
          "LoRA in AI, Low-Rank Adaptation, AI model fine-tuning, efficient AI training, LoRA explained",
      };
    case "/hype-hijack-goal":
      return {
        title: "Avoid AI Hype: Focus on Practical Business Solutions",
        description:
          "Discover how to adopt AI responsibly by solving real problems first. Learn why simple, data-driven solutions often outperform complex AI strategies.",
        keywords:
          "Responsible AI adoption, Practical AI strategies, Data readiness for AI, Business problem solving, Simple AI solutions, AI implementation guide, Avoid AI project failure",
      };
    case "/revolutionizing-virtual-colonoscopy":
      return {
        title: "Radi Insight 3D: Virtual Colonoscopy Tech",
        description:
          "Explore how Radi Insight 3D is transforming virtual colonoscopy with advanced 3D imaging, enhancing diagnostic accuracy and patient experience.",
        keywords:
          "Android Activity Launch Modes, Launch Modes in Android, Android app navigation, Activity lifecycle Android, Android development guide",
      };
    case "/uae-makes-history":
      return {
        title: "UAE Offers Free ChatGPT Plus to All Residents",
        description:
          "UAE becomes the first nation to provide free ChatGPT Plus access to all residents, marking a bold step in AI accessibility and digital innovation.",
        keywords:
          "AI agents, evolution of algorithms, artificial intelligence, intelligent systems, machine learning agents",
      };

    case "/the-deepfake-dilemma":
      return {
        title: "Deepfake Dilemma: Essential Guide for Business Leaders",
        description: "Learn how deepfakes impact business, laws, and trust. Discover risks, legal updates, and AI best practices every leader must know to protect their organization.",
        keywords: " deepfake risks, AI-generated content, deepfake laws, responsible AI, synthetic media, deepfake detection, corporate fraud, AI ethics, deepfake regulation, content authenticity",
      };
      case "/revolutionizing-hiring":
      return {
        title: "AI Recruitment: How CODEWORK Is Transforming Hiring",
        description: "Discover how CODEWORK automates hiring using AI tools. Learn about faster screening, unbiased decisions, and the future of recruitment with smart technology.",
        keywords: "AI recruitment, automated hiring, resume screening AI, AI candidate ranking, recruitment automation, CODEWORK platform, HR tech, AI chatbots, data-driven hiring, intelligent hiring solutions",
      };

    case "/the-new-era-of-ai":
      return {
        title: "AI in Digital Marketing: Tools, Trends & Benefits 2025",
        description: "Discover how AI transforms digital marketing with smart tools, automation, targeting, and personalization to boost ROI, engagement, and performance in 2025.",
        keywords: "Artificial Intelligence in Digital Marketing,Predictive Analytics,AI Chatbots,Dynamic Content Generation,Video Personalization,Product Recommendations,AI-Driven Marketing Strategies,Audience Targeting with Machine Learning,AI Marketing Tools,Future Trends in AI Marketing",
      };
    case "/ai-transforming-software":
      return {
        title: "How AI Is Transforming Software Development in 2025",
        description: "Explore how AI accelerates software development with code generation, automated testing, smarter debugging, and DevOps optimization for faster, secure delivery.",
        keywords: "Artificial Intelligence in Software Development,Generative AI,Large Language Models (LLMs),AI Code Generation,AI Debugging and Testing,AI-Powered Autocompletion,Machine Learning in Development,AI in DevOps,AI Project Management,AI Development Frameworks",
      };
    case "/code-generation-automation":
      return {
        title: "AI Code Generation: Automate, Test & Deploy Smarter",
        description: "Discover how AI-powered code generation tools like Copilot and Tabnine accelerate development, improve code quality, and streamline DevOps for faster delivery.",
        keywords: "AI-Powered Code Generation,Code Generation Automation,Machine Learning in Software Development,Faster Development Cycles,Enhanced Code Quality,AI Debugging and Testing,DevOps Integration with AI,GitHub Copilot,OpenAI Codex,Tabnine",
      };
      case "/generative-ai":
      return {
        title: "Generative AI in Software Development: Smarter Automation",
        description: "Explore how generative AI transforms software development with automated code generation, real-time debugging, and seamless DevOps integration for faster delivery.",
        keywords: "Machine Learning (ML),Artificial Intelligence (AI),Deep Learning,Neural Networks,Supervised Learning,Unsupervised Learning,Reinforcement Learning,Machine Learning Algorithms,Model Bias and Explainability,Real-Life Applications of ML",
      };
    case "/machine-learning":
      return {
        title: "terms-of-service",
        description: "Explore the power of Machine Learning – from real-world applications and business benefits to challenges and future trends shaping AI innovation.",
        keywords: "Machine Learning (ML),Artificial Intelligence (AI),Deep Learning,Neural Networks,Supervised Learning,Unsupervised Learning,Reinforcement Learning,Machine Learning Algorithms,Model Bias and Explainability,Real-Life Applications of ML",
      };
    case "/everyday-ai-companion":
      return {
        title: "Chatbots in 2025 | Smarter, Emotional & No-Code AI Assistants",
        description: "Discover how modern chatbots are transforming 2025 with emotional intelligence, no-code platforms, multimodal features, and smarter customer interactions.",
        keywords: "Modern chatbots,AI chatbots 2025,Chatbot benefits,Emotionally intelligent chatbots,No-code chatbot platforms,Multimodal chatbots,Chatbot for customer service,Chatbot in ealthcare,Chatbot personalization,Future of chatbots",
      };
      case "/mixture-of-experts":
      return {
        title: "Mixture of Experts Smarter Scalable AI Beyond Big Models",
        description: "Learn how Mixture of Experts makes AI more efficient by activating specialized sub-models only when needed reducing cost boosting performance and scaling smartly",
        keywords: "What is Mixture of Experts in AI,How Mixture of Experts works,Mixture of Experts architecture explained,Benefits of Mixture of Experts models,Mixtral 8x7B MoE model features,DBRX Mixture of Experts for code generation,DeepSeek-V2 MoE model for long documents,Mixture of Experts vs large language models,Efficient AI scaling with Mixture of Experts,Smarter AI with specialized experts",
      };
    case "/demystifying-generative":
      return {
        title: "Generative AI Model Types Explained Friendly Guide for 2025",
        description: "Explore key generative AI models including LLMs LAMs LVMs and LMMs Learn their functions examples and emerging types shaping the future of intelligent machines",
        keywords: "What are Large Language Models in AI,Use cases of Large Action Models,Large Vision Models for image generation,Large Multimodal Models explained,Difference between LLMs and LAMs,Examples of Large Vision Models in AI,Applications of Large Multimodal Models,Emerging trends in generative AI models,Large Concept Models for long-form reasoning,Large World Models in robotics and simulation",
      };
    case "/predictive-analytics":
      return {
        title: "Predictive Analytics Explained Smart Insights from Data",
        description: "Discover how predictive analytics uses data science and AI to forecast trends improve decisions enhance efficiency and unlock insights across industries",
        keywords: "What is Predictive Analytics,Predictive modeling techniques,Classification models in machine learning,Regression models for forecasting,Time series forecasting models,Clustering models for customer segmentation,Neural network models in predictive analytics,Machine learning for predictive analytics,Deep learning for business insights,Predictive analytics in healthcare, finance, and retail",
      };
    case "/privacy-policy":
      return {
        title: "Privacy Policy | Codework",
        description: "Your privacy is important to us. Read our Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website or use our services.",
        keywords: "Privacy Policy,Data Privacy,Privacy by Design,Privacy by Design (PBD),Privacy by Design (GDPR),Privacy by Design (HIPAA),Privacy by Design (CCPA),Privacy by Design (COPPA),Privacy by Design (CDLA),Privacy by Design (CMCA),Privacy by Design (CAN)",
      };
    case "/careers-at-codework":
      return {
        title: "Careers at Codework – Shape the Future of Technology",
        description: "Join Codework and help shape the future with cutting-edge AI technology. Be part of a team that thrives on innovation, collaboration, and excellence.",
        keywords: "AI technology careers,Senior Front-end , API developer, AI DevOps, AI consultant,Internship opportunities in AI/tech,Innovation-driven workplace,Career growth in AI",
      };
    case "/industries-you-must-know":
      return {
        title: "Top AI Solutions for Key Industries | Codework",
        description: "Discover cutting-edge smart tech solutions that empower industries to innovate, scale, and succeed in the digital era. Partner with us for growth.",
        keywords: "Industry-specific AI solutions,Healthcare AI diagnostics,Education AI for student experience,E-commerce AI strategies,Finance AI tools,Data security & AI solutions",
      };
    case "/join-our-team":
      return {
        title: "join-our-team",
        description: "",
        keywords: "",
      };
    case "/internship":
      return {
        title: "internship",
        description: "",
        keywords: "",
      };
    case "/the-deepfake-dilemma":
      return {
        title: "the-deepfake-dilemma",
        description: "",
        keywords: "",
      };
    case "/annotation-services":
      return {
        title: "Trusted Annotation Services for AI & ML Projects",
        description: "Codework provides accurate Annotation Services for AI & ML. Empower your business with text, image, audio, and video data labeling.",
        keywords: "Annotation Services, AI data labeling, ML data annotation, text annotation, image annotation, audio annotation, video annotation, data labeling services, AI training data, machine learning datasets",
      };
    default:
      return {
        title: "Codework",
        description:
          "Discover cutting-edge AI-powered solutions for your business. From cutting-edge AI-powered solutions for your business. From AI software development to cloud computing, we help you innovate and grow.",
        keywords:
          "AI software development, machine learning, data science, cybersecurity, cloud computing, web development, mobile app development, AI consulting, generative AI, NLP, data engineering, predictive analytics, blockchain, Reactjs & Nextjs, Java & Python, Azure, AWS, R language, Deep Learning, Neural Networks",
      };
  }
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const { title, description, keywords } = getMetaTags(pathname);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const GA_TRACKING_ID = "G-1E2S2FY962";

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Dynamic Meta Tags */}
        <title>{title}</title>
        <meta
          name="google-site-verification"
          content="KBq41EUcHtWqRI8Gghz1e_jXoi6D4kKjxhgl9cvCQAs"
        />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Google Analytics and Tag Manager Scripts */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1E2S2FY962"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W9K57N9L');
            `,
          }}
        />
        <script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ var fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('DzLR5a5YdPxaBoQ2');`,
          }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CodeWork",
              url: "https://www.codework.ai",
              description:
                "Codework.ai offers innovative AI-software development solutions, specializing in AI-driven applications, full-stack development, and cloud computing. Our tailored services empower businesses with cutting-edge technology for optimal performance and growth.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "AKSHAYA HQ, 305, OMR, Kazhipattur, Padur",
                addressLocality: "Chennai",
                addressRegion: "Tamilnadu",
                postalCode: "603103",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-72006-16547",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: ["en"],
              },
              sameAs: [
                "https://www.linkedin.com/company/codeworkai",
                "https://www.facebook.com/profile.php?id=61567244678626",
                "https://www.instagram.com/codework.ai/",
                "https://x.com/home?lang=en",
              ],
            }),
          }}
        />
        {/* LinkedIn Script */}
        <script type="text/javascript">
          {`
            _linkedin_partner_id = "7050068";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </script>
        <script type="text/javascript">
          {`
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=7050068&fmt=gif"
          />
        </noscript>
      </head>
      <body className="bg-primary">
        {/* Google Tag Manager (noscript) - Body Tag */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9K57N9L" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Navbar className="mb-36 px-10 md:px-20" />
        <main>{children}</main>
        <Footer />

        <ChatBot />

        {/* Animation styles */}
        <style jsx global>{`
          @keyframes fallDown {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @keyframes fallUp {
            0% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
            100% {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
          }
          .animate-fallDown {
            animation: fallDown 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          .animate-fallUp {
            animation: fallUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
        `}</style>
        {/* End of ChatBot Component */}
      </body>
    </html>
  );
}
