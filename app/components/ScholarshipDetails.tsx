"use client";

import { useState } from "react";
import Image from "next/image";

export default function ScholarshipDetails() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
  return (
    <section className="mb-12">
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="flex-1 min-h-[300px] relative rounded-lg overflow-hidden">
          <Image
            src="/iconsImage/two-professional.webp"
            alt="Two professionals at desk"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-base leading-relaxed text-gray-900">
          <p className="mb-4">
            Western Governors University is pleased to announce the <strong className="text-[#003057] font-semibold">Speed of Business Scholarship</strong> (worth up to $3,000) that can be applied toward any of WGU's School of Business degree programs.
          </p>
          <p className="mb-4">
            Our business programs are at the cutting edge of our industry, and we focus on return on investment. Complete courses as soon as you master the material, making it possible to graduate faster. Tuition is per term rather than per credit, allowing for acceleration and immediate return on your investment.
          </p>
          <p>
            WGU grads see an average salary increase of $22,200 within two years of graduation. We pride ourselves on empowering students to learn at the speed of business and earn the skills needed to achieve their professional goals. Apply today.
          </p>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-[#003057] mb-8">Scholarship Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 border-2 border-blue-100 rounded-lg p-8">
          <h3 className="text-sm font-semibold text-[#003057] mb-4">Scholarship (valued up to):</h3>
          <p className="text-4xl font-bold text-[#003057] mb-4">$3,000</p>
          <p className="text-sm leading-relaxed text-gray-600 mb-4">
            This scholarship will be credited to your account at the rate of $750 per six-month term, and renewable for up to four terms.
          </p>
          <p className="text-sm text-gray-900 mb-4 font-medium">Interested in this scholarship?</p>
          <button className="w-full py-3 bg-[#003057] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Apply to WGU
          </button>
        </div>
        
        <div className="bg-gray-50 border-2 border-blue-100 rounded-lg p-8">
          <h3 className="text-sm font-semibold text-[#003057] mb-4">Deadline (per 2025-26 aid year):</h3>
          <p className="text-4xl font-bold text-[#003057] mb-4">6/30/26</p>
          <p className="text-sm leading-relaxed text-gray-600 mb-4">
            Before you can apply for this scholarship, you must first apply for admission.
          </p>
          <p className="text-sm text-gray-900 mb-4 font-medium">Already applied for admission?</p>
          <button className="w-full py-3 bg-[#003057] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Apply for Scholarships
          </button>
        </div>
        
        <div className="bg-gray-50 border-2 border-blue-100 rounded-lg p-8">
          <h3 className="text-sm font-semibold text-[#003057] mb-4">Additional Opportunities:</h3>
          <p className="text-4xl font-bold text-[#003057] mb-4">80+</p>
          <p className="text-sm leading-relaxed text-gray-600 mb-4">
            This scholarship is one of many. Through the generosity of donors and institutional funding, WGU maintains a robust program of scholarships made available to qualified students.
          </p>
          <button className="w-full py-3 bg-[#003057] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            View All Scholarships
          </button>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 mt-8">
        {/* Eligibility Details Accordion */}
        <div className="border-b-2 border-gray-200">
          <button
            onClick={() => toggleAccordion("eligibility")}
            className="w-full flex justify-between items-center py-4 cursor-pointer hover:text-[#003057] font-medium transition-colors"
          >
            <span>Eligibility Details</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={`transition-transform ${
                openAccordion === "eligibility" ? "rotate-180" : ""
              }`}
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {openAccordion === "eligibility" && (
            <div className="pb-4 text-gray-700 leading-relaxed">
              <p>
                This scholarship is for new students or returning graduates
                pursuing a degree from the School of Business (Bachelor's or
                Master's) at WGU.
              </p>
            </div>
          )}
        </div>

        {/* Scholarship Policies Accordion */}
        <div className="border-b-2 border-gray-200">
          <button
            onClick={() => toggleAccordion("policies")}
            className="w-full flex justify-between items-center py-4 cursor-pointer hover:text-[#003057] font-medium transition-colors"
          >
            <span>Scholarship Policies</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={`transition-transform ${
                openAccordion === "policies" ? "rotate-180" : ""
              }`}
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {openAccordion === "policies" && (
            <div className="pb-4 text-gray-700 leading-relaxed space-y-4">
              <p>
                Multiple scholarships will be awarded. However, this is a
                competitive program and scholarships will be awarded based on a
                candidate's academic record, financial need, readiness for
                online study at WGU, and current competency, plus other
                considerations.
              </p>
              <p>
                Before monies are distributed, the scholarship recipients must
                read the WGU Student Handbook and agree to and understand the
                academic progress, tuition, and refund policies. The student
                will also be required to agree to the WGU Scholarship Terms and
                Conditions before monies will be awarded. The student must also
                meet the university's On Time Progress requirements to maintain
                scholarship eligibility. Each student can only be awarded one
                scholarship that is funded or administered through WGU during
                their degree program. Recipients must be U.S. citizens or
                eligible noncitizens.
              </p>
              <p>
                This scholarship can be used in addition to any tuition
                discounts for which you may be eligible.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

