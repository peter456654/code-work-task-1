"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import MobileNavbar from "./mobileNav";
import { IoChevronDown, IoSettingsOutline, IoSparklesOutline, IoAnalyticsOutline, IoStatsChartOutline, IoChatbubbleEllipsesOutline, IoPeopleOutline, IoBookOutline, IoBriefcaseOutline, IoSchoolOutline, IoMailOutline } from "react-icons/io5";

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredLink, setHoveredLink] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const backgroundOpacity =
    lastScrollY === 0 ? "bg-opacity-0" : "bg-opacity-100";
  const isHighlight = isNavHovered || isDropdownHovered;
  const whiteModePaths = new Set([
    "/our-company-case-studies",
    "/our-blog-lists",
    "/testimonials",
    "/ai-automations",
    "/about-us",
    "/careers-at-codework",
    "/internship",
    "/join-our-team",
  ]);
  const isWhiteMode = whiteModePaths.has(pathname);
  const isPrimaryBg = !isWhiteMode && isHighlight;
  const showLogo2 = isWhiteMode || isPrimaryBg;

  useEffect(() => {
    setIsDropdownOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Enhanced hover handlers
  const handleMouseEnter = (index) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(index);
    setHoveredLink(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(null);
      setHoveredLink(null);
    }, 300);
  };

  // Function to check if current page is active
  const isPageActive = (item) => {
    // For "Our Products" page
    if (item.href === "/products-we-build" && pathname === "/products-we-build") {
      return true;
    }
    
    // For dropdown items - check if current page is in any dropdown
    if (item.dropdown && item.dropdown.length > 0) {
      return item.dropdown.some(dropdownItem => pathname === dropdownItem.href);
    }
    
    return false;
  };

  const navLinks = [
    {
      href: "",
      label: "AI Solutions",
      dropdown: [
        {
          href: "/ai-solutions",
          label: "Expertise",
          icon: IoSettingsOutline,
          description: "Explore AI and advanced technology expertise",
        },
        {
          href: "/ai-services",
          label: "Services",
          icon: IoAnalyticsOutline,
          description: "End-to-end AI software development services",
        },
        {
          href: "https://cplc.codework.ai/",
          label: "AI Training Courses",
          icon: IoSparklesOutline,
          description: "Professional AI training courses",
        },
      ],
      dropdownImage: "/navmenu1.jpg",
    },
    {
      href: "/industries-you-must-know",
      label: "Industries",
      dropdown: [
        {
          href: "/ai-in-healthcare-you-must-know",
          label: "AI-Healthcare",
          image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/Healthcare.jpg",
        },
        {
          href: "/unique-ai-in-education",
          label: "AI-Education",
          image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/education.webp",
        },
        {
          href: "/ai-in-ecommerce",
          label: "AI-E-commerce",
          image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/AI-E-commerce.avif",
        },
        {
          href: "/new-ai-in-finance",
          label: "AI-Finance",
          image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/finance.jpg",
        },
        {
          href: "/ai-in-data-security",
          label: "AI-Data Security",
          image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/DataSecurity.avif",
        },
      ],
    },
    {
      href: "",
      label: "Resources",
      dropdown: [
        {
          href: "/our-company-case-studies",
          label: "Case Studies",
          icon: IoStatsChartOutline,
          description: "Real-world AI projects and outcomes",
        },
        {
          href: "/our-blog-lists",
          label: "Blogs",
          icon: IoAnalyticsOutline,
          description: "Insights and updates from our team",
        },
        {
          href: "/testimonials",
          label: "Testimonials",
          icon: IoChatbubbleEllipsesOutline,
          description: "Customer success stories",
        },
      ],
      dropdownImage: "/navmenu2.jpg",
    },
    {
      href: "",
      label: "About Us",
      dropdown: [
        {
          href: "/about-us",
          label: "Our Team ",
          icon: IoPeopleOutline,
          description: "Meet the leadership and experts behind Codework",
        },
        {
          href: "/ai-automations",
          label: "100 AI Automations (Booklet)",
          icon: IoBookOutline,
          description: "Browse 100 practical AI automation ideas",
        },
          {
          href: "/contact-ai-solutions",
          label: "Contact Us",
          icon: IoMailOutline,
          description: "Get in touch with us for more information",
        },
      ],
      dropdownImage: "/navmenu3.jpg",
    },
    {
      href: "",
      label: "Careers",
      dropdown: [
        {
          href: "/careers-at-codework",
          label: "Job Opportunities",
          icon: IoBriefcaseOutline,
          description: "Explore open roles and start your journey",
        },
        {
          href: "/internship",
          label: "Internship Program",
          icon: IoSchoolOutline,
          description: "Learn, build, and grow with hands-on projects",
        },
      ],
      dropdownImage: "/navmenu4.jpg",
    },
    {
      href: "/products-we-build",
      label: "Our Products",
      dropdown: [],
    },
  ];

  return (
    <>
      {/* Add custom CSS for enhanced hover effects */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 px-2 sm:px-4 md:px-6 lg:px-10 xl:px-14 2xl:px-20 ${
          isWhiteMode
            ? "bg-white"
            : isHighlight
              ? "bg-primary bg-opacity-100"
              : `bg-secondary ${backgroundOpacity}`
        } ${isVisible ? "translate-y-0" : "-translate-y-full"} group/nav`}
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
      >
        {/* Desktop Navigation */}
        <div className="h-16 sm:h-18 md:h-20 hidden md:flex items-center justify-between bg-opacity-100">
          <Link href="/">
            <div className="flex items-center flex-shrink-0 hover:scale-105 transition-transform duration-300 relative">
              <Image
                src="/Logo.svg"
                alt="Company Logo"
                width={160}
                height={160}
                className={`w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 h-auto ${showLogo2 ? "hidden" : "block"}`}
              />
              <Image
                src="/logo2.svg"
                alt="Company Logo Primary"
                width={160}
                height={160}
                className={`w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 h-auto ${showLogo2 ? "block" : "hidden"}`}
              />
            </div>
          </Link>

          {/* Enhanced Navigation Links */}
          <div className="hidden md:flex flex-1 justify-end mr-2 lg:mr-4">
            <div className="relative flex items-center space-x-1 md:space-x-2 lg:space-x-3 xl:space-x-3 2xl:space-x-4">
              {navLinks.map((item, index) => (
                <div
                  key={`${item.href}-${index}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="relative group"
                >
                  <button
                    className={`nav-link relative ${
                      isWhiteMode ? "text-secondary" : (isHighlight ? "text-secondary" : "text-primary")
                    } text-xs sm:text-sm lg:text-sm font-sans ease-in-out duration-500 flex items-center gap-1 whitespace-nowrap px-3 py-2 rounded-lg transition-all hover:bg-white/5 hover:backdrop-blur-sm ${
                      isPageActive(item) ? "active-page" : ""
                    } group-hover/nav:text-secondary hover:text-secondary ${hoveredLink === index ? "scale-105" : "hover:scale-105"}`}
                  >
                    <Link href={item.href} className="block relative z-10">
                      {item.label}
                    </Link>

                    {/* Enhanced Dropdown Arrow */}
                    {item.dropdown?.length > 0 && (
                      <IoChevronDown
                        className={`text-xs sm:text-sm ${isWhiteMode ? "text-secondary" : (isHighlight ? "text-secondary" : "text-primary")} group-hover/nav:text-secondary transition-all duration-500 flex-shrink-0 relative z-10 ${
                          isDropdownOpen === index 
                            ? "rotate-180 scale-125" 
                            : "rotate-0 group-hover:scale-125"
                        }`}
                      />
                    )}

      
                    {/* Corner accents */}
                    <div className={`absolute  top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent transition-all duration-300 ${
                      hoveredLink === index || isPageActive(item)
                        ? 'w-4 h-4 border-secondary' 
                        : 'group-hover:w-4 group-hover:h-4 group-hover:border-secondary'
                    }`}></div>
                    <div className={`absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent transition-all duration-300 ${
                      hoveredLink === index || isPageActive(item)
                        ? 'w-4 h-4 border-secondary' 
                        : 'group-hover:w-4 group-hover:h-4 group-hover:border-secondary'
                    }`}></div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Get In Touch Button */}
          <div className="flex-shrink-0 ml-2 lg:ml-4">
            <Link href="/contact-ai-solutions">
              <div className="relative inline-block p-0.5 rounded-none overflow-hidden magnetic-btn hover:scale-110 transition-all duration-300 active:scale-95">
                <button
                  type="button"
                  className="relative z-10 bg-secondary group-hover/nav:bg-primary text-primary group-hover/nav:text-secondary rounded-none px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 font-normal text-sm sm:text-base lg:text-lg whitespace-nowrap border border-primary hover:border-secondary group-hover/nav:border-secondary hover:bg-gradient-to-r hover:from-primary hover:to-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20"
                >
                  Get Started
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden h-16">
          <MobileNavbar />
        </div>
      </div>

      {/* Original Dropdown Menu (Unchanged) */}
      <div
        className={`fixed top-16 sm:top-18 md:top-20 left-0 w-full ${isWhiteMode ? "bg-white" : "bg-primary"} shadow-2xl z-40 overflow-hidden transition-all duration-500 ease-out ${
          isDropdownOpen !== null &&
          navLinks[isDropdownOpen]?.dropdown?.length > 0
            ? "h-[40vh] sm:h-[50vh] md:h-[60vh] opacity-100 visible"
            : "h-0 opacity-0 invisible"
        }`}
        onMouseEnter={() => {
          if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
          }
          setIsDropdownHovered(true);
        }}
        onMouseLeave={() => {
          setIsDropdownHovered(false);
          handleMouseLeave();
        }}
        style={{
          transform:
            isDropdownOpen !== null &&
            navLinks[isDropdownOpen]?.dropdown?.length > 0
              ? "translateY(0)"
              : "translateY(-20px)",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {isDropdownOpen !== null &&
          navLinks[isDropdownOpen]?.dropdown?.length > 0 && (
            <div className="h-full flex items-center py-4">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 w-full">
                {navLinks[isDropdownOpen].dropdown.some(item => item.image) ? (
                  <div className="w-full">
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2">
                        {navLinks[isDropdownOpen].label}
                      </h3>
                      <div className="w-10 sm:w-12 h-0.5 bg-secondary rounded-full mx-auto md:mx-0"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                      {navLinks[isDropdownOpen].dropdown.map((dropdownItem, idx) => {
                        const isExternalLink = dropdownItem.href.startsWith('http');
                        const card = (
                          <div className={`overflow-hidden transition-all duration-300 hover:scale-105 ${pathname === dropdownItem.href ? "ring-2 ring-secondary" : ""}`}>
                            <div className="relative w-full h-28 sm:h-32 md:h-36">
                              {dropdownItem.image?.startsWith('http') ? (
                                <img
                                  src={dropdownItem.image}
                                  alt={dropdownItem.label}
                                  className="w-full h-full object-cover transition-transform duration-500"
                                />
                              ) : (
                                <Image
                                  src={dropdownItem.image}
                                  alt={dropdownItem.label}
                                  width={260}
                                  height={160}
                                  className="w-full h-full object-cover transition-transform duration-500"
                                />
                              )}
                            </div>
                            <div className="mt-2 text-center">
                              <h4 className="text-sm sm:text-base font-semibold text-secondary">
                                {dropdownItem.label}
                              </h4>
                            </div>
                          </div>
                        );
                        if (isExternalLink) {
                          return (
                            <a
                              key={`${dropdownItem.href}-${idx}`}
                              href={dropdownItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group"
                            >
                              {card}
                            </a>
                          );
                        }
                        return (
                          <Link
                            key={`${dropdownItem.href}-${idx}`}
                            href={dropdownItem.href}
                            className="group"
                          >
                            {card}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : navLinks[isDropdownOpen].dropdown.some(item => item.icon) ? (
                  <div className="w-full">
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2">
                        {navLinks[isDropdownOpen].label}
                      </h3>
                      <div className="w-10 sm:w-12 h-0.5 bg-secondary rounded-full mx-auto md:mx-0"></div>
                    </div>
                    <div className={`flex flex-col md:flex-row ${
                      navLinks[isDropdownOpen].label === "Careers"
                        ? "md:items-stretch md:justify-start md:gap-6"
                        : "md:items-stretch md:justify-between"
                    }`}>
                      {navLinks[isDropdownOpen].dropdown.map((dropdownItem, idx) => {
                        const isExternalLink = dropdownItem.href.startsWith('http');
                        const IconComp = dropdownItem.icon;
                        const card = (
                          <div className={`flex-1 px-4 py-4 ${idx !== 0 ? "md:border-l md:border-secondary/20" : ""}`}>
                            <div className="flex flex-col items-start">
                              <span className="text-5xl text-secondary mb-3">
                                {IconComp && <IconComp />}
                              </span>
                              <h4 className="text-lg font-semibold text-secondary mb-2">
                                {dropdownItem.label}
                              </h4>
                              {dropdownItem.description && (
                                <p className="text-sm text-secondary/80">
                                  {dropdownItem.description}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                        if (isExternalLink) {
                          return (
                            <a
                              key={`${dropdownItem.href}-${idx}`}
                              href={dropdownItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group w-full md:w-auto"
                            >
                              {card}
                            </a>
                          );
                        }
                        return (
                          <Link
                            key={`${dropdownItem.href}-${idx}`}
                            href={dropdownItem.href}
                            className="group w-full md:w-auto"
                          >
                            {card}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center h-full">
                    <div className="relative flex items-center justify-center md:justify-start h-full order-2 md:order-1 lg:col-span-1">
                      <div className="relative overflow-hidden rounded-xl shadow-xl group w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px]">
                        <Image
                          src={
                            navLinks[isDropdownOpen].dropdownImage ||
                            "/landingpages/default.jpg"
                          }
                          alt={`${navLinks[isDropdownOpen].label} visual`}
                          width={250}
                          height={180}
                          className="w-full h-28 sm:h-32 md:h-36 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center h-full order-1 md:order-2 md:col-span-1 lg:col-span-2 text-center md:text-left">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2">
                          {navLinks[isDropdownOpen].label}
                        </h3>
                        <div className="w-10 sm:w-12 h-0.5 bg-secondary rounded-full mx-auto md:mx-0"></div>
                      </div>
                      <div className="grid gap-1 sm:gap-2 w-full max-w-sm sm:max-w-md mx-auto md:mx-0">
                        {navLinks[isDropdownOpen].dropdown.map((dropdownItem, idx) => {
                          const isExternalLink = dropdownItem.href.startsWith('http');
                          if (isExternalLink) {
                            return (
                              <a
                                key={`${dropdownItem.href}-${idx}`}
                                href={dropdownItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                              >
                                <div className={`px-3 sm:px-4 py-1.5 sm:py-2 group hover:bg-secondary/10 hover:scale-105 transition-all duration-200 rounded-md`}>
                                  <h2 className={`relative text-base sm:text-lg font-sans transition-colors duration-200 text-secondary`}>
                                    {dropdownItem.label}
                                    <span className="absolute bottom-[-2px] left-1/2 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
                                  </h2>
                                </div>
                              </a>
                            );
                          }
                          return (
                            <Link
                              key={`${dropdownItem.href}-${idx}`}
                              href={dropdownItem.href}
                              className="group"
                            >
                              <div className={`px-3 sm:px-4 py-1.5 sm:py-2 group hover:bg-secondary/10 hover:scale-105 transition-all duration-200 rounded-md ${
                                pathname === dropdownItem.href 
                                  ? "bg-secondary/20 border border-secondary/30" 
                                  : ""
                              }`}>
                                <h2 className={`relative text-base sm:text-lg font-sans transition-colors duration-200 text-secondary ${
                                  pathname === dropdownItem.href 
                                    ? "font-semibold" 
                                    : ""
                                }`}>
                                  {dropdownItem.label}
                                  <span className="absolute bottom-[-2px] left-1/2 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
                                  {pathname === dropdownItem.href && (
                                    <span className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-secondary rounded-full animate-pulse"></span>
                                  )}
                                </h2>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
      </div>
    </>
  );
}
