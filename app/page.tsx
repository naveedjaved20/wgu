"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import ScholarshipDetails from "./components/ScholarshipDetails";
import FeaturedScholarships from "./components/FeaturedScholarships";
import FAQ from "./components/FAQ";
import GetStarted from "./components/GetStarted";
import DonorRecognition from "./components/DonorRecognition";
import FinancialAid from "./components/FinancialAid";
import Footer from "./components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const mainContentRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Get header height
    const headerElement = document.querySelector("header");
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Detect scroll direction
      const scrollingUp = scrollY < lastScrollY;
      setIsScrollingUp(scrollingUp);
      setLastScrollY(scrollY);

      // Check if hero is visible
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const heroBottom = heroRect.bottom;
        setIsHeroVisible(heroBottom > 0);
      }

      // Check if footer is visible
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const footerTop = footerRect.top;
        // Footer is considered visible when it enters the viewport
        setIsFooterVisible(footerTop < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Sidebar is sticky when: hero is out of view
  // When scrolling up and hero becomes visible, sidebar scrolls with hero (not sticky)
  const sidebarSticky = !isHeroVisible;

  // Mobile sidebar sticky: stick under header when hero is out of view
  const mobileSidebarSticky = !isHeroVisible;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* Hero Section - Full Width, Before Sidebar */}
      <div ref={heroRef} className="w-full">
        <Hero />
      </div>

      {/* Mobile Sidebar - Horizontal Scroll */}
      <div
        className={`lg:hidden w-full bg-white border-b border-gray-200 transition-all duration-300 ${
          mobileSidebarSticky ? "sticky z-40" : ""
        }`}
        style={{
          top: mobileSidebarSticky ? `${headerHeight}px` : "0",
        }}
      >
        {/* Sticky TUITION & FEES at top when scrolling */}
        {mobileSidebarSticky && (
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 z-50">
            <h3 className="text-base font-medium text-[#003057] uppercase tracking-wide">
              TUITION & FEES
            </h3>
          </div>
        )}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-4 py-4 min-w-max">
            <a
              href="#"
              className={`text-gray-900 hover:text-[#003057] text-base font-semibold py-2 px-4 whitespace-nowrap transition-colors ${
                !mobileSidebarSticky ? "border-b-2 border-[#003057]" : ""
              }`}
            >
              Overview
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-base font-semibold py-2 px-4 whitespace-nowrap transition-colors"
            >
              Financial Aid
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-base font-semibold py-2 px-4 whitespace-nowrap transition-colors"
            >
              Tuition - School of Technology
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-base font-semibold py-2 px-4 whitespace-nowrap transition-colors"
            >
              Tuition - Leavitt School of Health
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-base font-semibold py-2 px-4 whitespace-nowrap transition-colors"
            >
              Tuition - School of Business
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-base font-semibold py-2 px-4 whitespace-nowrap transition-colors"
            >
              Tuition - School of Education
            </a>
            <a
              href="#"
              className="text-[#003057] font-semibold text-base py-2 px-4 whitespace-nowrap"
            >
              Scholarships
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-base font-semibold py-2 px-4 whitespace-nowrap transition-colors"
            >
              Corporate Reimbursement
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-base font-semibold py-2 px-4 whitespace-nowrap transition-colors"
            >
              Net Price Calculator
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-base font-semibold py-2 px-4 whitespace-nowrap transition-colors"
            >
              Tuition Comparison
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-base font-semibold py-2 px-4 whitespace-nowrap transition-colors"
            >
              Payment Plans
            </a>
          </div>
        </div>
      </div>

      {/* Content Wrapper with Sidebar and Main Content */}
      <div
        ref={contentWrapperRef}
        className="max-w-[1500px] mx-auto flex px-4 md:px-8 bg-white"
      >
        <aside
          ref={sidebarRef}
          className={`w-[306px] flex-shrink-0 hidden lg:block transition-all duration-300 ${
            sidebarSticky ? "lg:sticky lg:top-0 lg:max-h-screen" : ""
          }`}
        >
          <Sidebar />
        </aside>
        <div className="flex-1 min-w-0">
          <main ref={mainContentRef} className="pt-8">
            <ScholarshipDetails />
            <GetStarted />
            <FeaturedScholarships />
            <FAQ />
            <DonorRecognition />
            <FinancialAid />
          </main>
        </div>
      </div>
      <footer ref={footerRef}>
        <Footer />
      </footer>
      <div className="fixed bottom-8 right-8 w-14 h-14 bg-[#001731] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform z-50">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 13.54 2.36 14.98 2.97 16.29L2 22L7.71 21.03C9.02 21.64 10.46 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
