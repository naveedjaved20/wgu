"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-[100] shadow-sm w-full left-0 right-0">
      <div className="max-w-[1470px] mx-auto px-3 sm:px-4 md:px-8 py-3 sm:py-[10px] flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/wgu-logo.svg"
            alt="WGU Logo"
            width={120}
            height={40}
            className="h-[30px] sm:h-[30px] md:h-[30px] w-auto"
            priority
          />
          <nav className="hidden lg:flex gap-6 xl:gap-6 flex-1 justify-center ml-8">
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-[16px] font-[400] transition-colors whitespace-nowrap header-link-animated"
            >
              Online Degrees
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-[16px] font-[400] transition-colors whitespace-nowrap header-link-animated"
            >
              Admissions & Transfers
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-[16px] font-[400] transition-colors whitespace-nowrap header-link-animated"
            >
              Tuition & Financial Aid
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-[16px] font-[400] transition-colors whitespace-nowrap header-link-animated"
            >
              Student Success
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#003057] text-[16px] font-[400] transition-colors whitespace-nowrap header-link-animated"
            >
              More
            </a>
          </nav>
        </div>

        {/* Desktop buttons - hidden on mobile */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          <button className="px-3 xl:px-4 py-1.5 xl:py-2 text-[#003057]  rounded-full text-xs xl:text-sm font-semibold transition-all whitespace-nowrap">
            Request Info
          </button>
          <button className="px-3 xl:px-8.5 py-1.5 xl:py-3 bg-[#0070f0] text-white rounded-full text-xs xl:text-[13px] font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
            Apply Now
          </button>
          <button
            className="p-2 text-gray-900 hover:text-[#003057] transition-colors bg-gray-100 rounded-full"
            aria-label="Search"
          >
            <img src={"/iconsImage/search-icon.webp"} alt="search-icon" />
          </button>
          <button
            className="p-2 text-gray-900 hover:text-[#003057] transition-colors bg-gray-100 rounded-full"
            aria-label="Phone"
          >
            <svg
              width="13"
              height="19"
              viewBox="0 0 13 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.19188 6.33841C5.20317 5.59868 5.50487 5.02966 4.80091 3.09497C4.14724 1.2172 3.74498 -0.376072 2.03538 1.04649C0.778323 2.07073 0.376064 2.12763 0.174935 3.49329C-0.378172 7.93168 4.59978 16.9792 8.37096 18.3448C9.57774 18.7431 9.77887 18.3448 11.1365 17.4913C12.9969 16.4101 11.8907 15.329 10.7342 13.7926C9.47717 12.2563 8.87379 12.3132 7.46588 14.0202C6.10826 14.134 2.53821 7.64717 3.19188 6.33841Z"
                fill="#001731"
              />
            </svg>
          </button>
        </div>
        {/* Hamburger menu button - visible on mobile */}
        <button
          className="lg:hidden p-2 text-gray-900 hover:text-[#003057] transition-colors flex-shrink-0"
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile menu - slides down */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top duration-200">
          <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-8 py-4 flex flex-col gap-3 sm:gap-4">
            {/* Navigation Links */}
            <nav className="flex flex-col gap-2 pb-3 border-b border-gray-200">
              <a
                href="#"
                className="text-gray-900 hover:text-[#003057] text-[16px] font-[400] transition-colors py-2 header-link-animated"
                onClick={() => setIsMenuOpen(false)}
              >
                Online Degrees
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-[#003057] text-[16px] font-[400] transition-colors py-2 header-link-animated"
                onClick={() => setIsMenuOpen(false)}
              >
                Admissions & Transfers
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-[#003057] text-[16px] font-[400] transition-colors py-2 header-link-animated"
                onClick={() => setIsMenuOpen(false)}
              >
                Tuition & Financial Aid
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-[#003057] text-[16px] font-[400] transition-colors py-2 header-link-animated"
                onClick={() => setIsMenuOpen(false)}
              >
                Student Success
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-[#003057] text-[16px] font-[400] transition-colors py-2 header-link-animated"
                onClick={() => setIsMenuOpen(false)}
              >
                More
              </a>
            </nav>
            {/* Action Buttons */}
            <button
              className="w-full px-4 py-2 text-[#003057] border border-[#003057] rounded-full text-sm font-semibold hover:bg-[#001731] hover:text-white transition-all text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Info
            </button>
            <button
              className="w-full px-4 py-2 bg-[#004d7a] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </button>
            {/* Icon Buttons */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                className="p-2 text-gray-900 hover:text-[#003057] transition-colors"
                aria-label="Search"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M19 19L14.65 14.65"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button
                className="p-2 text-gray-900 hover:text-[#003057] transition-colors"
                aria-label="Phone"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M18 14.46V17.5C18 17.78 17.78 18 17.5 18C8.39 18 1 10.61 1 1.5C1 1.22 1.22 1 1.5 1H4.54C4.82 1 5 1.18 5 1.46V4.54C5 4.82 4.82 5 4.54 5H3.5C3.5 8.5 6.5 11.5 10 11.5V10.46C10 10.18 10.18 10 10.46 10H13.54C13.82 10 14 10.18 14 10.46V13.5C14 13.78 13.82 14 13.54 14H10.46C10.18 14 10 13.82 10 13.54V12.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
