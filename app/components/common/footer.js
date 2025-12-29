"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  const socialMedia = [
    {
      label: "YouTube",
      Icon: FaYoutube,
      link: "https://www.youtube.com/@codework.aisolutions",
    },
    {
      label: "Twitter",
      Icon: FaSquareXTwitter,
      link: "https://www.x.com/CodeworkAi",
    },
    {
      label: "LinkedIn",
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/company/codeworkai/",
    },
    {
      label: "Facebook",
      Icon: FaFacebook,
      link: "https://www.facebook.com/share/vZSfbuXSPqAQpz1T/",
    },
    {
      label: "Instagram",
      Icon: FaInstagram,
      link: "https://www.instagram.com/codework.ai?igsh=dng2NXU0cnppNGRq",
    },
  ];

  const quickLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/contact-ai-solutions", label: "Contact Us" },
  ];

  const contactLinks = [
    { href: "https://cplc.codework.ai/courses", label: "Learn with Us" },
    { href: "/products-we-build", label: "Our Products" },
  ];

  const serviceLinks = [
    { href: "/ai-services", label: "Services" },
    { href: "/our-blog-lists", label: "Blogs" },
  ];

  const educationLinks = [
    { href: "/testimonials", label: "Testimonials" },
    { href: "/ai-solutions", label: "Expertise" },
  ];

  const dataSecurityLinks = [
    { href: "/industries-you-must-know", label: "Industries" },
    { href: "/our-company-case-studies", label: "Case Studies" },
  ];

  const allLinks = [
    ...quickLinks,
    ...contactLinks,
    ...serviceLinks,
    ...educationLinks,
    { href: "/industries-you-must-know", label: "Industries" },
  ];

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <footer className="w-full bg-secondary text-primary relative overflow-hidden">
      {/* Background Decorative Elements */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
      </div> */}

      {/* Floating Elements */}
      {/* <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-32 left-16 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-1 h-1 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-56 left-1/4 w-3 h-3 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
      </div> */}

      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 relative z-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-primary">
              Quick Links
            </h3>
            <ul className="max-sm:grid max-sm:grid-cols-3 max-sm:gap-2 max-sm:grid-rows-3 sm:space-y-2">
              {(isMobile ? allLinks : quickLinks).map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link
                    href={item.href}
                    className={`hover:text-primary transition duration-300 text-xs sm:text-sm ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-primary/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="max-sm:hidden">
            <ul className="space-y-2 sm:pt-0 lg:pt-9 xl:pt-9">
              {contactLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:text-primary transition duration-300 text-xs sm:text-sm ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-primary/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="max-sm:hidden">
            <ul className="space-y-2 sm:pt-0 lg:pt-9 xl:pt-9">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:text-primary transition duration-300 text-xs sm:text-sm ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-primary/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonials & Expertise */}
          <div className="max-sm:hidden">
            <ul className="space-y-2 sm:pt-0 lg:pt-9 xl:pt-9">
              {educationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:text-primary transition duration-300 text-xs sm:text-sm ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-primary/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Case Studies */}
          <div className="max-sm:hidden">
            <ul className="space-y-2 sm:pt-0 lg:pt-9 xl:pt-9">
              {dataSecurityLinks.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link
                    href={item.href}
                    className={`hover:text-primary transition duration-300 text-xs sm:text-sm ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-primary/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-6 sm:mt-8 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-16 w-full text-left">
          {/* Get In Touch */}
          <div>
            <h3 className="text-base  sm:text-lg font-semibold mb-12 sm:mb-12 text-primary">
              Contact Us
            </h3>
            <div className="mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-primary/90">+91 81481 01923</p>
            </div>
            <div className="mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-primary/90">info@codework.ai</p>
            </div>
          </div>

          {/* India */}
          <div>
            <h3 className="text-base sm:text-lg pt-6 font-semibold text-primary">
              India
            </h3>
            <div className="pt-3">
              <p className="text-xs sm:text-sm text-primary/90">
                Suite 305, 3rd Floor, Akshaya HQ, OMR, <br />
                Kazhipattur, Chennai, <br />
                Tamilnadu, 603103.
              </p>
            </div>
            <div className="pt-3">
              <p className="text-xs sm:text-sm text-primary/90">
                No. 305, 3rd Floor, Alpha Block, <br />
                SSPDL Alpha City, Navalur, OMR, <br />
                Chennai, Tamil Nadu 600130
              </p>
            </div>
          </div>

          {/* USA */}
          <div>
            <h3 className="text-base  sm:text-lg font-semibold mb-10  sm:mb-12 text-primary">
              USA
            </h3>
            <div>
              <p className="text-xs sm:text-sm text-primary/90">
                6, River Oaks Cir W,
                <br />
                Buffalo Grove, IL 60089, USA
                <br />
                Call:+13144455064
              </p>
            </div>
            <div className="text-sm flex items-center justify-start">
              <a
                href="https://thecodeworx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-secondary hover:text-secondary/80 ml-12 transition duration-300"
              >
                {/* codeworkx */}
              </a>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-8 text-primary">
              Connect With Us
            </h3>
            <Link href="/contact-ai-solutions">
              <div className="rounded-none p-0.5 hover:scale-105 transition duration-300 active:scale-100">
                <button className="px-4 sm:px-6 text-xs sm:text-base py-2 sm:py-3 rounded-none font-semibold bg-secondary border border-primary text-primary">
                  Get Started
                </button>
              </div>
            </Link>
            <a
              href="https://cplc.codework.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs sm:text-sm text-primary hover:text-primary/80 mt-4 transition-colors duration-300"
            >
              Join our AI course
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-primary/10">
        <div className="w-full bg-secondary text-primary flex flex-col items-center sm:flex-row sm:items-center sm:justify-between py-10 sm:py-12 px-4 sm:px-6 md:px-6 lg:px-6 xl:px-6 relative">
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5"></div>

          {/* Logo */}
          <div className="flex items-center mb-4 sm:mb-0 relative z-10">
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Company Logo"
                width={180}
                height={180}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* ISO Logos */}
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-0 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 border border-secondary/20">
              <Image
                src="/iso/iso1.svg"
                alt="ISO Logo 1"
                width={32}
                height={32}
                className="rounded-full sm:w-10 sm:h-10"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 border border-secondary/20">
              <Image
                src="/iso/iso2.svg"
                alt="ISO Logo 2"
                width={32}
                height={32}
                className="rounded-full sm:w-10 sm:h-10"
              />
            </div>
          </div>

          {/* Copyright + Privacy */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0 relative z-10">
            <p className="text-[10px] sm:text-xs text-primary/80">
              2025 PRO CODE WORK IT SOLUTIONS Pvt. Ltd. All rights reserved.
            </p>
            <span className="hidden sm:inline text-primary">•</span>
            <Link
              href="/privacy-policy"
              className="text-[10px] sm:text-xs hover:text-primary transition duration-300 text-primary/80"
            >
              PRIVACY POLICY
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 sm:space-x-6 items-center relative z-10">
            {socialMedia.map(({ label, Icon, link }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-secondary to-secondary/80 flex items-center justify-center shadow-lg hover:shadow-secondary/25">
                  <Icon size={16} className="text-primary sm:text-xl" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Combined CSS Animations */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .button-bg {
          background: conic-gradient(from 0deg, #00F5FF, #000, #000, #00F5FF, #000, #000, #000, #00F5FF);
          background-size: 300% 300%;
          animation: shine 6s ease-out infinite;
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
