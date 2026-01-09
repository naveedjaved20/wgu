"use client";

import { useState } from "react";
import Image from "next/image";

export default function ScholarshipDetails() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const downloadDocFromGoogle = () => {
    const documentId = "1qq6_IwIpBldiuuSQyrx67WEVUYFyzuYWR8t4ZWUyBJw";
    // Convert Google Docs URL to export format (PDF)
    const exportUrl = `https://docs.google.com/document/d/${documentId}/export?format=pdf`;

    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = exportUrl;
    link.download = "scholarship-document.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="mb-12 mt-15">
      <div className="flex flex-col lg:flex-row gap-8 mb-12 pl-8">
        <div className="flex-1 max-h-[300px] max-w-[40%] relative overflow-hidden">
          <Image
            src="/iconsImage/mainSection.jpeg"
            alt="Two professionals at desk"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-[18px] font-[400] leading-relaxed text-gray-900">
          <p className="mb-4">
            Western Governors University is pleased to announce the{" "}
            <strong className="text-[#003057] font-semibold">
              Administrative Professionals Scholarship
            </strong>{" "}
            (worth up to $4,000) that can be applied toward any of WGU's School
            of Business degree programs.
          </p>
          <p className="mb-4">
            Our business programs are at the cutting edge of our industry, and
            we focus on return on investment. Complete courses as soon as you
            master the material, making it possible to graduate faster. Tuition
            is per term rather than per credit, allowing for acceleration and
            immediate return on your investment.
          </p>
          <p>
            WGU grads see an average salary increase of $22,200 within two years
            of graduation. We pride ourselves on empowering students to learn at
            the speed of business and earn the skills needed to achieve their
            professional goals. Apply today.
          </p>
        </div>
      </div>

      <h2 className="text-[55px] font-[400] line-height-[58px] text-[#003057] pt-[40px] pl-8">
        Scholarship Details
      </h2>
      <div className="pl-8 flex flex-col gap-5 py-8">
        <p className=" font-[400]">
          The{" "}
          <b className="font-[500]">
            Administrative Professionals Scholarship
          </b>{" "}
          is designed to support Black women who are pursuing higher education
          in{" "}
          <b className="font-[500]">
            Accounting, Finance, Business Administration, or Project Management
          </b>
          at <b className="font-[500]"> Western Governors University (WGU)</b>.
          This scholarship aims to reduce financial barriers, encourage academic
          excellence, and promote long-term career success in business-related
          fields.
        </p>
        <p className=" font-[400]">
          WGU is proud to offer the Future Black Women in Business scholarship.
          We will award multiple scholarship - each valued up to 4000$ - to
          motivate women to achieve their dream of college degree in business,
          accounting, finance and project management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 pl-8 auto-rows-fr">
        <div className="bg-[#EFF6F9] p-8 flex flex-col justify-between h-full">
          <h3 className="text-[18px] text-center font-[500] mb-4">
            Scholarship (valued up to):
          </h3>
          <p className="text-[58px] text-center font-bold mb-4">$4,000</p>
          <p className="text-[16px] text-center font-[400] leading-relaxed text-gray-900">
            This scholarship will be credited to your account at the rate of
            $750 per six-month term, and renewable for up to four terms.
          </p>
          <p className="text-[17px] text-center text-gray-900 mb-4 font-[500]">
            The first step is to apply for admission.
          </p>
          <button
            onClick={() =>
              (window.location.href = "https://apply.wgu.edu/register")
            }
            className="w-full py-3 bg-[#001731] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Apply to WGU
          </button>
        </div>

        <div className="bg-[#EFF6F9] p-8 flex flex-col justify-between h-full">
          <h3 className="text-[18px] text-center font-[500] mb-4">
            Deadline (per 2025-26 aid year):
          </h3>
          <p className="text-[58px] text-center font-bold mb-4">01/14/26</p>
          <p className="text-[16px] text-center font-[400] leading-relaxed text-gray-900">
            Before you can apply for this scholarship, you must first apply for
            admission.
          </p>
          <p className="text-[16px] text-center text-gray-900 mb-4">
            <span className="text-[16px] text-gray-900 mb-4 font-[500]">
              Already applied for admission?
            </span>{" "}
            Apply for scholarships on the Scholarship Portal.
          </p>
          <button
            onClick={() =>
              (window.location.href = "https://wgu.scholarshipuniverse.com/")
            }
            className="w-full py-3 bg-[#001731] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Apply for Scholarships
          </button>
        </div>

        <div className="bg-gray-100 p-8 flex flex-col justify-between h-full">
          <h3 className="text-[18px] text-center font-[500] mb-4">
            Additional Opportunities:
          </h3>
          <p className="text-[58px] text-center font-bold mb-4">80+</p>
          <p className="text-[16px] text-center font-[400] leading-relaxed text-gray-900 mb-4">
            This scholarship is one of many. Through the generosity of donors
            and institutional funding, WGU maintains a robust program of
            scholarships made available to qualified students.
          </p>
          <button
            onClick={() =>
              (window.location.href =
                "https://www.wgu.edu/financial-aid-tuition/scholarships.html")
            }
            className="w-full py-3 bg-[#001731] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            View All Scholarships
          </button>
        </div>
      </div>

      {/* Scholarship Awards Section */}
      <div className="mt-8 pl-8">
        <h2 className="text-[55px] font-[400] line-height-[58px] text-[#003057] mb-6">
          Scholarship Awards
        </h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <span className="text-[#003057] text-xl mt-1">•</span>
            <p className="text-[18px] font-[400] text-gray-900">
              <strong>Award:</strong> $4000 per academic session
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#003057] text-xl mt-1">•</span>
            <p className="text-[18px] font-[400] text-gray-900">
              <strong>Coverage:</strong> Approximately 90% of session tuition
              fees
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#003057] text-xl mt-1">•</span>
            <p className="text-[18px] font-[400] text-gray-900">
              <strong>Renewability:</strong> Award per session, subject to
              continued enrollment and eligibility
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-8 pl-8">
        {/* Eligibility Details Accordion */}
        <div>
          <button
            onClick={() => toggleAccordion("eligibility")}
            className="border-b-1 border-gray-300 w-full px-4 flex justify-between items-center py-4 cursor-pointer text-[20px] hover:text-[#003057] font-[400] transition-colors"
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
            <div className="py-8 px-10  leading-relaxed">
              <p>
                For new students or returning graduates pursuing an{" "}
                <button
                  onClick={() => downloadDocFromGoogle()}
                  className="underline cursor-pointer"
                >
                  eligible degree program
                </button>
                (Bachelor's or Master's) at WGU.
              </p>
            </div>
          )}
        </div>

        {/* Scholarship Policies Accordion */}
        <div>
          <button
            onClick={() => toggleAccordion("policies")}
            className="border-b-1 border-gray-300 w-full px-4 flex justify-between items-center py-4 cursor-pointer text-[20px] hover:text-[#003057] font-[400] transition-colors"
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
            <div className="py-8 px-10  leading-relaxed space-y-4">
              <p>
                <b>Multiple scholarships will be awarded</b>. However, this is a
                <b> competitive program </b> and scholarships will be awarded
                based on a candidate's academic record, financial need,
                readiness for online study at WGU, and current competency, plus
                other considerations.
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
