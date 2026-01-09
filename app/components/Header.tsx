"use client";

import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("Business");
  const [selectedLevel, setSelectedLevel] = useState("Bachelor's");
  const [selectedAboutItem, setSelectedAboutItem] = useState("Careers at WGU");
  const [selectedTuitionItem, setSelectedTuitionItem] = useState(
    "Other Ways to Pay for School"
  );
  const [selectedTuitionItem1, setSelectedTuitionItem1] = useState(
    "Other Ways to Pay for School"
  );
  const [selectedAdmissionsItem, setSelectedAdmissionsItem] =
    useState("Transfers");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSelectedTuitionItem1("");
        setSelectedLevel("");
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-[900] shadow-xl w-full left-0 right-0">
      <div className="relative max-w-[1470px] mx-auto px-3 sm:px-4 md:px-8 py-3 sm:py-[10px] flex items-center justify-between gap-2 sm:gap-4 lg:gap-8 z-[999]">
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/wgu-logo.svg"
            alt="WGU Logo"
            width={120}
            height={40}
            className="h-[30px] sm:h-[30px] md:h-[30px] w-auto"
          />
          <nav
            className="hidden  lg:flex gap-6 xl:gap-6 flex-1 justify-center ml-8 relative"
            ref={dropdownRef}
          >
            <div className="">
              <button
                onClick={() => toggleDropdown("online-degrees")}
                className={`text-[16px] font-[400] transition-colors whitespace-nowrap header-link-animated ${
                  activeDropdown === "online-degrees" ? "text-[#003057]" : ""
                }`}
            >
              Online Degrees
              </button>
              {activeDropdown === "online-degrees" && (
                <div className="absolute top-11 -left-42 mx-auto mt-0 bg-white shadow-2xl w-[1400px] -z-1">
                  <div className="flex w-full">
                    {/* Left Column - Categories */}
                    <div className="w-64 border-r border-gray-200">
                      <div className="flex flex-col">
                        {[
                          "Business",
                          "Education",
                          "Technology",
                          "Health & Nursing",
                          "Courses and Certificates",
                          "All Degrees",
                          "Explore Your Options",
                        ].map((category) => (
                          <button
                            key={category}
                            onClick={() => {
                              setSelectedLevel("");
                              setSelectedCategory(category);
                            }}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-[#f1f1f1] hover:text-gray-900 hover:font-semibold ${
                              selectedCategory === category
                                ? "bg-[#f1f1f1] text-gray-900 font-semibold"
                                : "text-gray-700 hover:bg-[#f1f1f1]"
                            }`}
                          >
                            {category === "All Degrees" && (
                              <a href="https://www.wgu.edu/online-degree-programs.html">
                                View All Degrees
                              </a>
                            )}
                            {category === "Explore Your Options" && (
                              <a href="https://www.wgu.edu/quiz.html">
                                Explore Your Options
                              </a>
                            )}
                            {category !== "All Degrees" &&
                              category !== "Explore Your Options" && (
                                <>{category}</>
                              )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Middle Column - Degree Levels */}
                    <div className="w-66 border-r border-gray-200 bg-[#f1f1f1]">
                      {selectedCategory === "Business" && (
                        <div className="flex flex-col">
                          <button
                            onClick={() => setSelectedLevel("Bachelor's")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Bachelor's"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Bachelor's
                          </button>
                          <button
                            onClick={() => setSelectedLevel("Master's")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Master's"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Master's
                          </button>

                          <button
                            onClick={() => setSelectedLevel("Certificates")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Certificates"
                                ? "bg-white font-semibold"
                                : ""
                            }`}
                          >
                            Certificates
                          </button>

                          <button
                            onClick={() =>
                              setSelectedLevel("Advanced Accounting Courses")
                            }
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Advanced Accounting Courses"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Advanced Accounting Courses
                          </button>
                          <button
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold `}
                          >
                            <a
                              href="https://www.wgu.edu/online-business-degrees.html"
                              className="font-[400] text-[18px]"
                            >
                              View All Business Degrees
                            </a>
                          </button>
                        </div>
                      )}
                      {selectedCategory === "Education" && (
                        <div className="flex flex-col">
                          <button
                            onClick={() => setSelectedLevel("Bachelor's")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Bachelor's"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Bachelor's
                          </button>
                          <button
                            onClick={() => setSelectedLevel("Master's")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Master's"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Master's
                          </button>

                          <button
                            onClick={() => setSelectedLevel("Endorsements")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Endorsements"
                                ? "bg-white font-semibold"
                                : ""
                            }`}
                          >
                            Endorsements
                          </button>

                          <button
                            onClick={() => setSelectedLevel("Licensure")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Licensure"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Licensure
                          </button>
                          <button
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold `}
                          >
                            <a
                              href="https://www.wgu.edu/online-teaching-degrees.html"
                              className="font-[400] text-[18px]"
                            >
                              View All Business Degrees
                            </a>
                          </button>
                        </div>
                      )}
                      {selectedCategory === "Technology" && (
                        <div className="flex flex-col">
                          <button
                            onClick={() => setSelectedLevel("Bachelor's")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Bachelor's"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Bachelor's
                          </button>
                          <button
                            onClick={() => setSelectedLevel("Master's")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Master's"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Master's
                          </button>

                          <button
                            onClick={() => setSelectedLevel("Certificates")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Certificates"
                                ? "bg-white font-semibold"
                                : ""
                            }`}
                          >
                            Certificates
                          </button>

                          <button
                            onClick={() => setSelectedLevel("Accelerated")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Accelerated"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Accelerated
                          </button>
                          <button
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Accelerate"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            <a
                              href="https://www.wgu.edu/online-it-degrees.html"
                              className="font-[400] text-[18px]"
                            >
                              View All Technology Degrees
                            </a>
                          </button>
                        </div>
                      )}
                      {selectedCategory === "Health & Nursing" && (
                        <div className="flex flex-col">
                          <button
                            onClick={() => setSelectedLevel("Bachelor's")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Bachelor's"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Bachelor's
                          </button>
                          <button
                            onClick={() => setSelectedLevel("Master's")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Master's"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Master's
                          </button>

                          <button
                            onClick={() => setSelectedLevel("Licensure")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Licensure"
                                ? "bg-white font-semibold"
                                : ""
                            }`}
                          >
                            Licensure
                          </button>
                          <button
                            onClick={() => setSelectedLevel("Certificates")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Certificates"
                                ? "bg-white font-semibold"
                                : ""
                            }`}
                          >
                            Certificates
                          </button>

                          <button
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Accelerate"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            <a
                              href="https://www.wgu.edu/online-nursing-health-degrees.html"
                              className="font-[400] text-[18px]"
                            >
                              View All Health & Nursing Degrees
                            </a>
                          </button>
                        </div>
                      )}
                      {selectedCategory === "Courses and Certificates" && (
                        <div className="flex flex-col">
                          <button
                            onClick={() => setSelectedLevel("Certificates")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Certificates"
                                ? "bg-white font-semibold"
                                : ""
                            }`}
                          >
                            Certificates
                          </button>

                          <button
                            onClick={() => setSelectedLevel("Courses")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Courses"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Courses
                          </button>
                        </div>
                      )}
                      {selectedCategory === "Apply for Admission" && (
                        <div className="flex flex-col">
                          <button
                            onClick={() => setSelectedLevel("Apply")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Apply"
                                ? "bg-white font-semibold"
                                : ""
                            }`}
                          >
                            Apply
                          </button>

                          <button
                            onClick={() => setSelectedLevel("Enrollment")}
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Enrollment"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Enrollment
                          </button>
                        </div>
                      )}
                      {selectedCategory === "Admission Requirements" && (
                        <div className="flex flex-col">
                          <button
                            onClick={() =>
                              setSelectedLevel("Admission Requirements")
                            }
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Admission Requirements"
                                ? "bg-white font-semibold"
                                : ""
                            }`}
                          >
                            Admission Requirements
                          </button>

                          <button
                            onClick={() =>
                              setSelectedLevel("Additional-Requirements")
                            }
                            className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                              selectedLevel === "Additional-Requirements"
                                ? "bg-white text-gray-900 font-semibold"
                                : ""
                            }`}
                          >
                            Additional Requirements
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Right Content Area - Programs */}
                    <div className="flex-1 p-3 relative">
                      <button
                        onClick={() => setActiveDropdown(null)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 5L5 15M5 5L15 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>

                      {selectedCategory === "Business" && (
                        <div className="grid grid-cols-2 gap-4">
                          {selectedLevel === "Bachelor's" && (
                            <>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/bachelors-programs.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    View all Business Bachlor's Degrees
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/business-management-bachelors-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Business Management - B.S.
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/healthcare-administration-bachelors-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Healthcare Administration – B.S.
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/human-resources-bachelors-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Human Resource Management - B.S.
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/it-information-technology-management-bachelors-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Information Technology Management – B.S.
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/marketing-bachelors-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Marketing - B.S.
                                  </a>
                                </div>
                              </div>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/supply-chain-operations-management-bachelors-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Supply Chain and Operations Management - B.S.
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/communications-bachelors-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Communications - B.S.
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/user-experience-design-bachelors-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    User Experience Design - B.S.
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/accounting-bachelors-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Accounting - B.S.
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/finance-bachelors-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Finance - B.S.
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-nursing-health-degrees/health-information-management-bachelors-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Health Information Management - B.S. (from the
                                    Leavitt School of Health)
                                  </a>
                                </div>
                              </div>
                            </>
                          )}
                          {selectedLevel === "Master's" && (
                            <>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/masters-programs.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    View all Business Master's Degrees
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/mba-masters-business-administration-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Master of Business Administration - (MBA)
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/mba-masters-business-administration-it-management-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    MBA Information Technology Management
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/mba-masters-business-administration-healthcare-administration-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    MBA Healthcare Administration
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/management-leadership-masters-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Management and Leadership - M.S.
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/accounting-masters-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Accounting - M.S.
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://www.wgu.edu/online-business-degrees/marketing-masters-program.html"
                                    className="font-[400] text-[16px] header-link-animated"
                                  >
                                    Marketing - M.S.
                                  </a>
                                </div>
                              </div>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/human-resources-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Human Resource Management – M.S.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/masters-healthcare-administration-leadership.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Master of Healthcare Administration (from the
                                  Leavitt School of Health)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/data-analytics-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Data Analytics – M.S. (from the School of
                                  Technology)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/masters-programs.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Information Technology Management – M.S. (from
                                  the School of Technology)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/education-technology-instructional-design-masters.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Education Technology and Instructional Design
                                  – M.Ed. (from the School of Education)
                                </a>
                              </div>
                            </>
                          )}
                          {selectedLevel === "Certificates" && (
                            <>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/accounting-fundamentals.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Accounting Fundamentals
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/b2b-sales-fundamentals.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  B2B Sales Fundamentals
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/leadership.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Business Leadership
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/digital-marketing-fundamentals.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Digital Marketing Fundamentals
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/management-skills-for-supervisors.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Management Skills for Supervisors
                                </a>
                              </div>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/supply-chain.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Supply Chain Fundamentals
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/entrepreneurship-fundamentals.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Entrepreneurship Fundamentals
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/project-management-certificate.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Project Management
                                </a>
                              </div>
                            </>
                          )}
                          {selectedLevel === "Advanced Accounting Courses" && (
                            <div className="flex flex-col gap-2">
                              <a
                                href="https://www.wgu.edu/online-business-degrees/certificates/advanced-accounting-courses.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Advanced Accounting Courses
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                      {selectedCategory === "Education" && (
                        <div className="grid grid-cols-2 gap-4">
                          {selectedLevel === "Bachelor's" && (
                            <>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/education-bachelors-degrees.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  View all Education Bachelor's Degrees
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/elementary-education-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Elementary Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/biology-education-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Biology Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/mathematics-teacher-certification-secondary-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Mathematics Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/physics-education-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Physics Education
                                </a>
                              </div>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/earthscience-education-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Earth Science Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/chemistry-education-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Chemistry Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/special-education-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Special Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/special-education-bachelors-program/dual-elementary-special-education.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Special Ed and Elementary Ed (Dual Licensure)
                                  – B.A.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/educational-studies-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Educational Studies – B.A. (Does Not Lead to a
                                  Teaching License)
                                </a>
                              </div>
                            </>
                          )}
                          {selectedLevel === "Master's" && (
                            <>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/education-masters-programs.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  View All Education Master's Degrees
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/ell-esl-english-language-learning-education-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  English Language Learning
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/social-studies-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Social Studies Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/science-education-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Science Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/chemistry-education-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Chemistry Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/physics-education-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Physics Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/biology-education-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Biology Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/earth-science-education-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Earth Science Education
                                </a>
                              </div>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/elementary-education-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Elementary Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/english-education-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  English Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/special-education-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Special Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/mathematics-education-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Mathematics Education
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/curriculum-instruction-education-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Curriculum and Instruction – M.S.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/educational-leadership-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Educational Leadership – M.S.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/education-technology-instructional-design-masters.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Education Technology and Instructional Design
                                  – M.Ed.
                                </a>
                              </div>
                            </>
                          )}
                          {selectedLevel === "Endorsements" && (
                            <>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/endorsements.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  View All Education Endorsement Programs
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/endorsements/ell-esl-english-language-learning.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  English Language Learning
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/endorsements/middle-grades-math.html#midfunnelPop"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Middle Grades Math
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/endorsements/middle-grades-science.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Middle Grades Science
                                </a>
                              </div>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/endorsements/secondary-biology.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Secondary Biology
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/endorsements/secondary-chemistry.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Secondary Chemistry
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/endorsements/secondary-physics.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Secondary Physics
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/endorsements/secondary-earth-science.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Secondary Earth Science
                                </a>
                              </div>
                            </>
                          )}
                          {selectedLevel === "Licensure" && (
                            <div className="flex flex-col gap-4 pl-4 py-8">
                              <a
                                href="https://www.wgu.edu/admissions/student-teaching.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Student Teaching
                              </a>
                              <a
                                href="https://www.wgu.edu/online-teaching-degrees/teaching-license-certification.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Teaching License/Certification
                              </a>
                              <a
                                href="https://www.wgu.edu/online-teaching-degrees/state-licensure.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                State Licensure Information
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                      {selectedCategory === "Technology" && (
                        <div className="grid grid-cols-2 gap-4">
                          {selectedLevel === "Bachelor's" && (
                            <>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/bachelors-programs.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  View all Technology Bachelor's Degrees
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/cloud-network-engineering-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Cloud and Network Engineering
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/computer-science.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Computer Science
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Cybersecurity and Information Assurance
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/data-analytics-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Data Analytics
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/information-technology-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Information Technology
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/software-engineering-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Software Engineering
                                </a>
                              </div>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/health-information-management-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Health Information Management (from the
                                  Leavitt School of Health)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/it-information-technology-management-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Information Technology Management – (from the
                                  School of Business)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/user-experience-design-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  User Experience Design – (from the School of
                                  Business)
                                </a>
                              </div>
                            </>
                          )}
                          {selectedLevel === "Master's" && (
                            <div className="flex flex-col gap-4 pl-4 py-8">
                              <a
                                href="https://www.wgu.edu/online-it-degrees/masters-programs.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                View all Technology Master's Degrees
                              </a>
                              <a
                                href="https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-masters-program.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Cybersecurity and Information Assurance
                              </a>
                              <a
                                href="https://www.wgu.edu/online-it-degrees/data-analytics-masters-program.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Data Analytics
                              </a>
                              <a
                                href="https://www.wgu.edu/online-it-degrees/information-technology-management-masters-program.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Information Technology Management
                              </a>
                              <a
                                href="https://www.wgu.edu/online-it-degrees/computer-science-masters-program.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Computer Science
                              </a>
                              <a
                                href="https://www.wgu.edu/online-it-degrees/software-engineering-masters-program.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Software Engineering
                              </a>
                              <a
                                href="https://www.wgu.edu/online-business-degrees/mba-masters-business-administration-it-management-program.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                MBA Information Technology Management (from the
                                School of Business)
                              </a>
                            </div>
                          )}
                          {selectedLevel === "Certificates" && (
                            <>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <h3 className="text-[18px] font-[600] text-gray-500 underline underline-offset-4">
                                  CERTIFICATES
                                </h3>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/certificates/ai-skills-fundamentals.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  AI Skills Fundamentals
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/certificates/data-analytics.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Data Analytics Skills
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/certificates/data-engineering-professional.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Data Engineering Professional
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/certificates/front-end-web-development.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Front End Web Developer with CodeSignal
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/certificates/java-developer.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Java Developer with CodeSignal
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/certificates/service-now-application-developer.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  ServiceNow Application Developer
                                </a>
                              </div>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <h3 className="text-[18px] font-[600] text-gray-500 underline underline-offset-4">
                                  3RD PARTY CERTIFICATES
                                </h3>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/it-certifications.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  IT Certifications Included in WGU Degrees
                                </a>
                              </div>
                            </>
                          )}
                          {selectedLevel === "Accelerated" && (
                            <div className="flex flex-col gap-4 pl-4 py-8">
                              <a
                                href="https://www.wgu.edu/online-it-degrees/information-technology-bachelors-program/accelerated.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Information Technology
                              </a>
                              <a
                                href="https://www.wgu.edu/online-it-degrees/software-engineering-bachelors-program/accelerated.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Software Engineering
                              </a>
                              <a
                                href="https://www.wgu.edu/online-it-degrees/computer-science/accelerated.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Computer Science
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                      {selectedCategory === "Health & Nursing" && (
                        <div className="grid grid-cols-2 gap-4">
                          {selectedLevel === "Bachelor's" && (
                            <>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/bachelors-programs.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  View all Health & Nursing Bachelor's Degrees
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/rn-to-bsn-nursing-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Nursing (RN-to-BSN online) – B.S.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/rn-prelicensure-nursing-bachelors-program.html#prelicensureNonStatesPop"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Nursing (Prelicensure) – B.S. (Available in
                                  select states)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/health-information-management-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Health Information Management – B.S.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/health-human-services.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Health and Human Services – B.S.
                                </a>
                              </div>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/psychology-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Psychology – B.S.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/health-science-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Health Science – B.S.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/public-health-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Public Health – B.S.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/healthcare-administration-bachelors-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Healthcare Administration – B.S. (from the
                                  School of Business)
                                </a>
                              </div>
                            </>
                          )}
                          {selectedLevel === "Master's" && (
                            <>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/masters-programs.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  View all Nursing & Health Master's Degrees
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/bsn-to-msn-nursing-education-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Nursing – Education (BSN-to-MSN Program) –
                                  M.S.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/bsn-to-msn-nursing-leadership-management-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Nursing – Leadership and Management
                                  (BSN-to-MSN Program) – M.S.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/nursing-informatics-bsn-to-msn-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Nursing – Nursing Informatics (BSN-to-MSN
                                  Program) – M.S.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/family-nurse-practitioner-masters.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Nursing – Family Nurse Practitioner
                                  (BSN-to-MSN Program) – M.S. (Available in
                                  select states)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/psychiatric-mental-health-nurse-practitioner-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Nursing – Psychiatric Mental Health Nurse
                                  Practitioner (BSN-to-MSN Program) – M.S.
                                  (Available in select states)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/nursing-education-rn-to-msn-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Nursing – Education (RN-to-MSN Program) – M.S.
                                </a>
                              </div>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/rn-to-msn-nursing-leadership-management-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Nursing – Leadership and Management (RN-to-MSN
                                  Program) – M.S.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/nursing-informatics-rn-to-msn-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Nursing – Nursing Informatics (RN-to-MSN
                                  Program) – M.S.
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/masters-healthcare-administration-leadership.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Master of Healthcare Administration
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/public-health-masters-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Master of Public Health
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/mba-masters-business-administration-healthcare-administration-program.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  MBA Healthcare Administration (from the School
                                  of Business)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-teaching-degrees/education-technology-instructional-design-masters.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Education Technology and Instructional Design
                                  – M.Ed. (from the School of Education)
                                </a>
                              </div>
                            </>
                          )}
                          {selectedLevel === "Licensure" && (
                            <div className="flex flex-col gap-4 pl-4 py-8">
                              <a
                                href="https://www.wgu.edu/online-nursing-health-degrees/state-licensure.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                State Licensure Information
                              </a>
                            </div>
                          )}
                          {selectedLevel === "Certificates" && (
                            <div className="flex flex-col gap-4 pl-4 py-8">
                              <a
                                href="https://www.wgu.edu/online-nursing-health-degrees/certificates/nursing-leadership.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Nursing Leadership
                              </a>
                              <a
                                href="https://www.wgu.edu/online-nursing-health-degrees/post-masters-nursing-certificate/education.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Nursing Education—Post-Master's Certificate
                              </a>
                              <a
                                href="https://www.wgu.edu/online-nursing-health-degrees/post-masters-nursing-certificate/leadership-management.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Nursing Leadership and Management—Post-Master's
                                Certificate
                              </a>
                              <a
                                href="https://www.wgu.edu/online-nursing-health-degrees/post-masters-nursing-certificate/family-nurse-practitioner.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Family Nurse Practitioner—Post-Master's
                                Certificate
                              </a>
                              <a
                                href="https://www.wgu.edu/online-nursing-health-degrees/post-masters-nursing-certificate/psychiatric-mental-health-nurse-practitioner.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Psychiatric Mental Health Nurse Practitioner
                                —Post-Master's Certificate
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                      {selectedCategory === "Courses and Certificates" && (
                        <div className="grid grid-cols-2 gap-4">
                          {selectedLevel === "Certificates" && (
                            <>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/leadership.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Business Leadership (with the School of
                                  Business)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/supply-chain.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Supply Chain Fundamentals (with the School of
                                  Business)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/accounting-fundamentals.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Accounting Fundamentals (with the School of
                                  Business)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/digital-marketing-fundamentals.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Digital Marketing Fundamentals (with the
                                  School of Business)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/certificates/java-developer.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Java Developer (with CodeSignal and the School
                                  of Technology)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/certificates/front-end-web-development.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Front End Web Developer (with CodeSignal and
                                  the School of Technology)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/certificates/service-now-application-developer.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  ServiceNow Application Developer (with the
                                  School of Technology)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/certificates/data-analytics.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Data Analytics Skills (with the School of
                                  Technology)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-nursing-health-degrees/certificates/nursing-leadership.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Nursing Leadership (with the Leavitt School of
                                  Health)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/management-skills-for-supervisors.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Management Skills for Supervisors (with the
                                  School of Business)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/certificates/data-engineering-professional.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Data Engineering Professional (with the School
                                  of Technology)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-it-degrees/certificates/ai-skills-fundamentals.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  AI Skills Fundamentals (with the School of
                                  Technology)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/b2b-sales-fundamentals.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  B2B Sales Fundamentals (with the School of
                                  Business)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/entrepreneurship-fundamentals.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Entrepreneurship Fundamentals (with the School
                                  of Business)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/project-management-certificate.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Project Management (with the School of
                                  Business)
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-degree-programs/certificates.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  All Certificate Programs
                                </a>
                              </div>
                            </>
                          )}
                          {selectedLevel === "Courses" && (
                            <>
                              <div className="flex flex-col gap-4 pl-4 py-8">
                                <a
                                  href="https://www.wgu.edu/admissions/personalized-start/courses.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Single Courses
                                </a>
                                <a
                                  href="https://www.wgu.edu/online-business-degrees/certificates/advanced-accounting-courses.html"
                                  className="font-[400] text-[16px] header-link-animated"
                                >
                                  Advanced Accounting Courses
                                </a>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="">
              <button
                onClick={() => toggleDropdown("admissions")}
                className={`text-[16px] font-[400] transition-colors whitespace-nowrap header-link-animated ${
                  activeDropdown === "admissions" ? "text-[#003057]" : ""
                }`}
            >
              Admissions & Transfers
              </button>
              {activeDropdown === "admissions" && (
                <div className="absolute top-11 -left-42 mx-auto mt-0 bg-white shadow-2xl w-[1400px] -z-1">
                  <div className="flex relative">
                    {/* Close Button */}
                    <button
                      onClick={() => setActiveDropdown(null)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                      aria-label="Close"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 5L5 15M5 5L15 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>

                    {/* Left Column - Main Navigation */}
                    <div className="w-64 border-r border-gray-200">
                      <div className="flex flex-col">
                        <button
                          onClick={() =>
                            setSelectedAdmissionsItem("Apply-for-Admission")
                          }
                          className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-[#f1f1f1] hover:text-gray-900 hover:font-semibold ${
                            selectedAdmissionsItem === "Apply-for-Admission"
                              ? "bg-[#f1f1f1] text-gray-900 font-semibold"
                              : "text-gray-700 hover:bg-[#f1f1f1]"
                          }`}
                        >
                          Apply for Admission
                        </button>
                        <button
                          onClick={() =>
                            setSelectedAdmissionsItem("Admission-Requirements")
                          }
                          className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-[#f1f1f1] hover:text-gray-900 hover:font-semibold ${
                            selectedAdmissionsItem === "Admission-Requirements"
                              ? "bg-[#f1f1f1] text-gray-900 font-semibold"
                              : "text-gray-700 hover:bg-[#f1f1f1]"
                          }`}
                        >
                          Admission Requirements
                        </button>
                        {/* Active item "Transfers" */}
                        <button
                          onClick={() => {
                            setSelectedAdmissionsItem("Transfers");
                            setSelectedLevel("");
                          }}
                          className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-[#f1f1f1] hover:text-gray-900 hover:font-semibold ${
                            selectedAdmissionsItem === "Transfers"
                              ? "bg-[#f1f1f1] text-gray-900 font-semibold"
                              : "text-gray-700 hover:bg-[#f1f1f1]"
                          }`}
                        >
                          Transfers
                        </button>
                      </div>
                    </div>

                    {selectedAdmissionsItem !== "Transfers" && (
                      <>
                        {/* Middle - Content Area (blank/white) */}
                        <div className="w-66 border-r border-gray-200 bg-[#f1f1f1]">
                          {selectedAdmissionsItem === "Apply-for-Admission" && (
                            <div className="flex flex-col">
                              <button
                                onClick={() => setSelectedLevel("Apply")}
                                className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                                  selectedLevel === "Apply"
                                    ? "bg-white font-semibold"
                                    : ""
                                }`}
                              >
                                Apply
                              </button>

                              <button
                                onClick={() => setSelectedLevel("Enrollment")}
                                className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                                  selectedLevel === "Enrollment"
                                    ? "bg-white text-gray-900 font-semibold"
                                    : ""
                                }`}
                              >
                                Enrollment
                              </button>
                            </div>
                          )}
                          {selectedAdmissionsItem ===
                            "Admission-Requirements" && (
                            <div className="flex flex-col">
                              <button
                                onClick={() =>
                                  setSelectedLevel("Admission Requirements")
                                }
                                className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                                  selectedLevel === "Admission Requirements"
                                    ? "bg-white font-semibold"
                                    : ""
                                }`}
                              >
                                Admission Requirements
                              </button>

                              <button
                                onClick={() =>
                                  setSelectedLevel("Additional Requirements")
                                }
                                className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                                  selectedLevel === "Additional Requirements"
                                    ? "bg-white text-gray-900 font-semibold"
                                    : ""
                                }`}
                              >
                                Additional Requirements
                              </button>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                    {/* Right Content Area - Programs */}
                    <div className="flex-1 p-3 relative">
                      <button
                        onClick={() => setActiveDropdown(null)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 5L5 15M5 5L15 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>

                      <div className="grid grid-cols-2 gap-4">
                        {selectedLevel === "Apply" && (
                          <div className="flex flex-col gap-4 pl-4 py-8">
                            <div>
                              <a
                                href="https://apply.wgu.edu/register"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                New Students
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/alumni/stay-involved/continuing-grad.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                WGU Returning Graduates
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/restart.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                WGU Readmission
                              </a>
                            </div>
                          </div>
                        )}
                        {selectedLevel === "Enrollment" && (
                          <div className="flex flex-col gap-4 pl-4 py-8">
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/enrollment.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Enrollment Checklist
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/accessibility.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Accessibility
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/ada-form.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Accommodation Request
                              </a>
                            </div>
                          </div>
                        )}
                        {selectedLevel === "Admission Requirements" && (
                          <div className="flex flex-col gap-4 pl-4 py-8">
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/teaching-requirements.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                School of Education Admission Requirements
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/business-requirements.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                School of Business Admission Requirements
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/it-requirements.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                School of Technology Admission Requirements
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/nursing-health-requirements.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Leavitt School of Health Admission Requirements
                              </a>
                            </div>
                          </div>
                        )}
                        {selectedLevel === "Additional Requirements" && (
                          <div className="flex flex-col gap-4 pl-4 py-8">
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/computer-requirements.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Computer Requirements
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/no-standardized-testing.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                No Standardized Testing
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/clinicals.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Health and Nursing Clinical Information
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/student-teaching.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Student Teaching Information
                              </a>
                            </div>
                          </div>
                        )}
                        {selectedAdmissionsItem === "Transfers" && (
                          <div className="flex flex-col gap-4 pl-4 py-8">
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/transfers.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                FAQs about Transferring
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/transfers/transfer-to-wgu.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Transfer to WGU
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/transfers/wgu-transcript-request/transferable-certifications.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Transferrable Certifications
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/transfers/wgu-transcript-request.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                Request WGU Transcripts
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/admissions/international-transfer-credit.html"
                                className="font-[400] text-[16px] header-link-animated"
                              >
                                International Transfer Credit
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="">
              <button
                onClick={() => toggleDropdown("tuition")}
                className={`text-[16px] font-[400] transition-colors whitespace-nowrap header-link-animated ${
                  activeDropdown === "tuition" ? "text-[#003057]" : ""
                }`}
            >
              Tuition & Financial Aid
              </button>
              {activeDropdown === "tuition" && (
                <div className="absolute top-11 -left-42 mx-auto mt-0 bg-white shadow-2xl w-[1400px] -z-1">
                  <div className="flex relative">
                    {/* Close Button */}
                    <button
                      onClick={() => setActiveDropdown(null)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                      aria-label="Close"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 5L5 15M5 5L15 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>

                    {/* Left Column - Main Navigation */}
                    <div className="w-64 border-r border-gray-200">
                      <div className="flex flex-col">
                        <button
                          onClick={() => {
                            setSelectedTuitionItem("Tuition-and-Fees");
                            setSelectedTuitionItem1("");
                          }}
                          className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-[#f1f1f1] hover:text-gray-900 hover:font-semibold ${
                            selectedTuitionItem === "Tuition-and-Fees"
                              ? "bg-[#f1f1f1] text-gray-900 font-semibold"
                              : "text-gray-700 hover:bg-[#f1f1f1]"
                          }`}
                        >
                          Tuition and Fees
                        </button>
                        <button
                          onClick={() => {
                            setSelectedTuitionItem("Financial-Aid");
                            setSelectedTuitionItem1("");
                          }}
                          className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-[#f1f1f1] hover:text-gray-900 hover:font-semibold ${
                            selectedTuitionItem === "Financial-Aid"
                              ? "bg-[#f1f1f1] text-gray-900 font-semibold"
                              : "text-gray-700 hover:bg-[#f1f1f1]"
                          }`}
                        >
                          Financial Aid
                        </button>
                        <button
                          onClick={() => {
                            setSelectedTuitionItem("Scholarships");
                            setSelectedTuitionItem1("");
                          }}
                          className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-[#f1f1f1] hover:text-gray-900 hover:font-semibold ${
                            selectedTuitionItem === "Scholarships"
                              ? "bg-[#f1f1f1] text-gray-900 font-semibold"
                              : "text-gray-700 hover:bg-[#f1f1f1]"
                          }`}
                        >
                          Scholarships
                        </button>
                        <button
                          onClick={() =>
                            setSelectedTuitionItem(
                              "Other Ways to Pay for School"
                            )
                          }
                          className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-[#f1f1f1] hover:text-gray-900 hover:font-semibold ${
                            selectedTuitionItem ===
                            "Other Ways to Pay for School"
                              ? "bg-[#f1f1f1] text-gray-900 font-semibold"
                              : "text-gray-700 hover:bg-[#f1f1f1]"
                          }`}
                        >
                          Other Ways to Pay for School
                        </button>
                      </div>
                    </div>
                    {selectedTuitionItem === "Financial-Aid" && (
                      <>
                        {/* Middle - Content Area (blank/white) */}
                        <div className="w-66 border-r border-gray-200 bg-[#f1f1f1]">
                          <div className="flex flex-col">
                            <button
                              onClick={() => {
                                setSelectedTuitionItem1("Financial Aid");
                              }}
                              className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                                selectedLevel === "Financial Aid"
                                  ? "bg-white font-semibold"
                                  : ""
                              }`}
                            >
                              Financial Aid
                            </button>

                            <button
                              onClick={() =>
                                setSelectedTuitionItem1("FAFSA Support")
                              }
                              className={`text-left border-b-1 border-gray-300 pl-10 py-6 text-[18px] font-[400] transition-colors hover:bg-white  hover:font-semibold ${
                                selectedLevel === "FAFSA Support"
                                  ? "bg-white text-gray-900 font-semibold"
                                  : ""
                              }`}
                            >
                              FAFSA Support
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                    {/* Right Column - Sub-navigation */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col gap-1">
                        {selectedTuitionItem === "Tuition-and-Fees" && (
                          <>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Tuition and Fees
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/tuition-business-degrees.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Tuition - School of Business
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/tuition-teaching-education-degrees.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Tuition - School of Education
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/tuition-it-degrees.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Tuition - School of Technology
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/tuition-nursing-health-degrees.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Tuition - Leavitt School of Health
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/financial-aid/obligations.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Your Financial Obligations
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/tuition-comparison.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Tuition Comparison
                              </a>
                            </div>
                          </>
                        )}

                        {selectedTuitionItem === "Scholarships" && (
                          <>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/scholarships.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                See All Scholarships
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/scholarships.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Military Scholarships
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/scholarships.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                State Scholarships
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/scholarships/faqs.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Scholarship FAQs
                              </a>
                            </div>
                          </>
                        )}
                        {selectedTuitionItem ===
                          "Other Ways to Pay for School" && (
                          <>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/payment-plans.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Payment Plans
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/corporate-reimbursement.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Corporate Reimbursement
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/current-student-hardship-assistance.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Current Student Hardship Assistance
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/student-experience/military/tuition-assistance.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Military Tuition Assistance
                              </a>
                            </div>
                          </>
                        )}
                        {selectedTuitionItem1 === "Financial Aid" && (
                          <>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/financial-aid.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Financial Aid
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/financial-aid/apply.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Applying for Financial Aid
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/financial-aid/state-grants.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                State Grants
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/financial-aid/consumer-information.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Consumer Information Guide
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/financial-aid/responsible-borrowing-initiative.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Responsible Borrowing Initiative
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/financial-aid/higher-ed-relief-fund.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Higher Education Relief Fund
                              </a>
                            </div>
                          </>
                        )}
                        {selectedTuitionItem1 === "FAFSA Support" && (
                          <>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/fafsa-help.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                FAFSA Help
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/net-price-calculator.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                Net Price Calculator
                              </a>
                            </div>
                            <div>
                              <a
                                href="https://www.wgu.edu/financial-aid-tuition/financial-aid/fafsa-simplification.html"
                                className="text-[16px] py-2 transition-colors header-link-animated"
                              >
                                FAFSA Simplification
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <button>
                <a
                  href="https://my.wgu.edu"
                  className="text-[16px] font-[400] transition-colors whitespace-nowrap header-link-animated"
                >
                  Student Login
                </a>
              </button>
            </div>
            <div className="">
              <button
                onClick={() => toggleDropdown("more")}
                className={`text-[16px] font-[400] transition-colors whitespace-nowrap header-link-animated `}
            >
              More
              </button>
              {activeDropdown === "more" && (
                <div className="absolute top-11 -left-42 mx-auto mt-0 bg-white shadow-2xl w-[1400px] z-0">
                  <div className="relative p-4">
                    {/* Close Button */}
                    <button
                      onClick={() => setActiveDropdown(null)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                      aria-label="Close"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 5L5 15M5 5L15 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>

                    {/* Links List */}
                    <div className="flex flex-col pt-2">
                      <div>
                        <a
                          href="https://www.wgu.edu/online-degree-programs.html"
                          className="text-sm py-2 px-2 transition-colors header-link-animated"
                        >
                          Prospective Students
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.wgu.edu/student-portal.html"
                          className="text-sm py-2 px-2 transition-colors header-link-animated"
                        >
                          Current Students
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.wgu.edu/student-experience/military.html"
                          className="text-sm py-2 px-2 transition-colors header-link-animated"
                        >
                          Military and Veterans
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.wgu.edu/alumni.html"
                          className="text-sm py-2 px-2 transition-colors header-link-animated"
                        >
                          WGU Alumni
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.wgu.edu/alumni/commencement.html"
                          className="text-sm py-2 px-2 transition-colors header-link-animated"
                        >
                          Commencement
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.wgu.edu/about/careers.html"
                          className="text-[#003057] text-sm py-2 px-2 transition-colors font-medium header-link-animated"
                        >
                          Careers at WGU
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.wgu.edu/advancement.html"
                          className="text-sm py-2 px-2 transition-colors header-link-animated"
                        >
                          Advancement & Giving
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.wgu.edu/partnerships.html"
                          className="text-sm py-2 px-2 transition-colors header-link-animated"
                        >
                          Partnering with WGU
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.wgu.edu/lp/programs/wgu-store.html"
                          className="text-sm py-2 px-2 transition-colors header-link-animated"
                        >
                          Shop at the WGU Store
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Desktop buttons - hidden on mobile */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          <button
            onClick={() =>
              (window.location.href =
                "https://www.wgu.edu/admissions/get-info.html")
            }
            className="px-3 xl:px-4 py-1.5 xl:py-2 text-[#003057]  rounded-full text-xs xl:text-sm font-semibold transition-all whitespace-nowrap"
          >
            Request Info
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://apply.wgu.edu/register")
            }
            className="px-3 xl:px-8.5 py-1.5 xl:py-3 bg-[#0070f0] text-white rounded-full text-xs xl:text-[13px] font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Apply Now
          </button>
          <button
            className="p-2 transition-colors bg-[#f1f1f1] rounded-full"
            aria-label="Search"
          >
            <img src={"/iconsImage/search-icon.webp"} alt="search-icon" />
          </button>
          <button
            className="p-2 transition-colors bg-[#f1f1f1] rounded-full"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.19188 6.33841C5.20317 5.59868 5.50487 5.02966 4.80091 3.09497C4.14724 1.2172 3.74498 -0.376072 2.03538 1.04649C0.778323 2.07073 0.376064 2.12763 0.174935 3.49329C-0.378172 7.93168 4.59978 16.9792 8.37096 18.3448C9.57774 18.7431 9.77887 18.3448 11.1365 17.4913C12.9969 16.4101 11.8907 15.329 10.7342 13.7926C9.47717 12.2563 8.87379 12.3132 7.46588 14.0202C6.10826 14.134 2.53821 7.64717 3.19188 6.33841Z"
                fill="#001731"
              />
            </svg>
          </button>
        </div>
        {/* Hamburger menu button - visible on mobile */}
        <button
          className="lg:hidden p-2 transition-colors flex-shrink-0"
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
            {/* Navigation Links with Dropdowns */}
            <nav className="flex flex-col gap-2 pb-3 border-b border-gray-200">
              {/* Online Degrees Mobile Dropdown */}
              <div>
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === "online-degrees"
                        ? null
                        : "online-degrees"
                    )
                  }
                  className="w-full text-left text-[16px] font-[400] transition-colors py-2 header-link-animated flex items-center justify-between"
                >
                  Online Degrees
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      mobileDropdown === "online-degrees" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileDropdown === "online-degrees" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <div className="flex flex-col gap-1">
                      {[
                        "Business",
                        "Education",
                        "Technology",
                        "Health & Nursing",
                        "Courses and Certificates",
                      ].map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`text-left text-sm py-2 px-2 rounded ${
                            selectedCategory === category
                              ? "bg-gray-100 text-gray-900 font-semibold"
                              : "text-gray-700"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                      <a
                        href="https://www.wgu.edu/online-degree-programs.html"
                        className="text-sm text-gray-700 py-2 px-2 header-link-animated"
                      >
                        All Degrees
                      </a>
                      <a
                        href="https://www.wgu.edu/quiz.html"
                        className="text-sm text-gray-700 py-2 px-2 header-link-animated"
                      >
                        Explore Your Options
                      </a>
                    </div>
                    {selectedCategory &&
                      selectedCategory !== "All Degrees" &&
                      selectedCategory !== "Explore Your Options" && (
                        <div className="mt-4 pl-2 border-l-2 border-gray-200">
                          <div className="flex flex-col gap-1 mb-2">
                            {selectedCategory === "Business" &&
                              [
                                "Bachelor's",
                                "Master's",
                                "Certificates",
                                "Advanced Accounting Courses",
                              ].map((level) => (
                                <button
                                  key={level}
                                  onClick={() => setSelectedLevel(level)}
                                  className={`text-left text-sm py-1 px-2 ${
                                    selectedLevel === level
                                      ? "font-semibold text-gray-900"
                                      : "text-gray-600"
                                  }`}
                                >
                                  {level}
                                </button>
                              ))}
                            {selectedCategory === "Technology" &&
                              [
                                "Bachelor's",
                                "Master's",
                                "Certificates",
                                "Accelerated",
                              ].map((level) => (
                                <button
                                  key={level}
                                  onClick={() => setSelectedLevel(level)}
                                  className={`text-left text-sm py-1 px-2 ${
                                    selectedLevel === level
                                      ? "font-semibold text-gray-900"
                                      : "text-gray-600"
                                  }`}
                                >
                                  {level}
                                </button>
                              ))}
                            {selectedCategory === "Education" &&
                              [
                                "Bachelor's",
                                "Master's",
                                "Endorsements",
                                "Licensure",
                              ].map((level) => (
                                <button
                                  key={level}
                                  onClick={() => setSelectedLevel(level)}
                                  className={`text-left text-sm py-1 px-2 ${
                                    selectedLevel === level
                                      ? "font-semibold text-gray-900"
                                      : "text-gray-600"
                                  }`}
                                >
                                  {level}
                                </button>
                              ))}
                            {selectedCategory === "Health & Nursing" &&
                              [
                                "Bachelor's",
                                "Master's",
                                "Licensure",
                                "Certificates",
                              ].map((level) => (
                                <button
                                  key={level}
                                  onClick={() => setSelectedLevel(level)}
                                  className={`text-left text-sm py-1 px-2 ${
                                    selectedLevel === level
                                      ? "font-semibold text-gray-900"
                                      : "text-gray-600"
                                  }`}
                                >
                                  {level}
                                </button>
                              ))}
                          </div>
                          <div className="text-xs text-gray-500 mt-2">
                            Select a degree level to see programs
                          </div>
                        </div>
                      )}
                  </div>
                )}
              </div>

              {/* About WGU Mobile Dropdown */}
              <div>
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === "aboutWGU" ? null : "aboutWGU"
                    )
                  }
                  className="w-full text-left text-[16px] font-[400] transition-colors py-2 header-link-animated flex items-center justify-between"
                >
                  About WGU
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      mobileDropdown === "aboutWGU" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileDropdown === "aboutWGU" && (
                  <div className="pl-4 mt-2 space-y-1">
                    {[
                      "WGU Entities",
                      "Our Students",
                      "Our Leadership",
                      "Partnering with WGU",
                      "Media Resources",
                      "Careers at WGU",
                    ].map((item) => (
                      <a
                        key={item}
                        href={
                          item === "Careers at WGU"
                            ? "https://www.wgu.edu/about/careers.html"
                            : "#"
                        }
                        className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                onClick={() => setIsMenuOpen(false)}
              >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Tuition & Financial Aid Mobile Dropdown */}
              <div>
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === "tuition" ? null : "tuition"
                    )
                  }
                  className="w-full text-left text-[16px] font-[400] transition-colors py-2 header-link-animated flex items-center justify-between"
                >
                  Tuition & Financial Aid
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      mobileDropdown === "tuition" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileDropdown === "tuition" && (
                  <div className="pl-4 mt-2 space-y-1">
                    {[
                      "Tuition and Fees",
                      "Financial Aid",
                      "Scholarships",
                      "Other Ways to Pay for School",
                    ].map((item) => (
                      <a
                        key={item}
                href="#"
                        className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Admissions & Transfers Mobile Dropdown */}
              <div>
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === "admissions" ? null : "admissions"
                    )
                  }
                  className="w-full text-left text-[16px] font-[400] transition-colors py-2 header-link-animated flex items-center justify-between"
              >
                Admissions & Transfers
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      mobileDropdown === "admissions" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileDropdown === "admissions" && (
                  <div className="pl-4 mt-2 space-y-1">
                    <a
                      href="https://www.wgu.edu/admissions/transfers.html"
                      className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      FAQs about Transferring
              </a>
              <a
                      href="https://www.wgu.edu/admissions/transfers/transfer-to-wgu.html"
                      className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                onClick={() => setIsMenuOpen(false)}
              >
                      Transfer to WGU
              </a>
              <a
                      href="https://www.wgu.edu/admissions/transfers/wgu-transcript-request/transferable-certifications.html"
                      className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                onClick={() => setIsMenuOpen(false)}
              >
                      Transferrable Certifications
              </a>
              <a
                      href="https://www.wgu.edu/admissions/transfers/wgu-transcript-request.html"
                      className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                onClick={() => setIsMenuOpen(false)}
                    >
                      Request WGU Transcripts
                    </a>
                    <a
                      href="https://www.wgu.edu/admissions/international-transfer-credit.html"
                      className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      International Transfer Credit
                    </a>
                  </div>
                )}
              </div>

              {/* Student Login */}
              <a
                href="https://my.wgu.edu"
                className="text-[16px] font-[400] transition-colors py-2 header-link-animated"
                onClick={() => setIsMenuOpen(false)}
              >
                Student Login
              </a>

              {/* More Mobile Dropdown */}
              <div>
                <button
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === "more" ? null : "more")
                  }
                  className="w-full text-left text-[16px] font-[400] transition-colors py-2 header-link-animated flex items-center justify-between"
              >
                More
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      mobileDropdown === "more" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileDropdown === "more" && (
                  <div className="pl-4 mt-2 space-y-1">
                    <a
                      href="https://www.wgu.edu/online-degree-programs.html"
                      className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Prospective Students
                    </a>
                    <a
                      href="https://www.wgu.edu/student-portal.html"
                      className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Current Students
                    </a>
                    <a
                      href="https://www.wgu.edu/student-experience/military.html"
                      className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Military and Veterans
                    </a>
                    <a
                      href="https://www.wgu.edu/alumni.html"
                      className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      WGU Alumni
                    </a>
                    <a
                      href="https://www.wgu.edu/alumni/commencement.html"
                      className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Commencement
                    </a>
                    <a
                      href="https://www.wgu.edu/about/careers.html"
                      className="block text-sm text-[#003057] py-2 px-2 header-link-animated border-b-2 border-[#003057] font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Careers at WGU
                    </a>
                    <a
                      href="https://www.wgu.edu/advancement.html"
                      className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Advancement & Giving
                    </a>
                    <a
                      href="https://www.wgu.edu/partnerships.html"
                      className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Partnering with WGU
                    </a>
                    <a
                      href="https://www.wgu.edu/store.html"
                      className="block text-sm text-gray-700 py-2 px-2 header-link-animated"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Shop at the WGU Store
                    </a>
                  </div>
                )}
              </div>
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
                className="p-2 transition-colors"
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
                className="p-2 transition-colors"
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
