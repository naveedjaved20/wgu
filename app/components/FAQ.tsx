"use client";

import { useState } from "react";

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const questions = [
    {
      id: "eligible",
      question: "Who is eligible for scholarships?",
      answer:
        "Most scholarships are for new students and returning graduates (unless otherwise noted). Eligible students must complete the scholarship application 90 days before and up to 30 days after the program start date. Current students may apply for funding they are eligible for at any time after their first term is completed. WGU employees and family members who are eligible for the WGU employee discount are not eligible for WGU scholarships.",
    },
    {
      id: "multiple",
      question: "Can I receive multiple scholarships?",
      answer:
        "An eligible student can receive one WGU scholarship award per degree. In the event that a student qualifies for multiple WGU scholarships, the scholarship committee will consider each opportunity and will then select which one to award (if any).",
    },
    {
      id: "select",
      question: "How do you select scholarship awardees?",
      answer:
        "It depends on the specific criteria for the scholarship fund. In general, we award scholarships based on the following factors:\n\n• Meeting the basic eligibility requirements\n• The quality of your scholarship application responses\n• Financial need is also a strong consideration for most of our scholarship funds\n• Some scholarships are also based upon evaluations of prior college transcripts and other academic history. We encourage you to apply.",
    },
    {
      id: "when",
      question: "When will I find out if I'm selected?",
      answer:
        "WGU evaluates scholarship applications on a continual basis because we start new students in their programs every month. Often we are able to make an award decision within 3-5 weeks of receiving your application. You will also need to have applied for admission and been accepted to the university. An Enrollment Counselor can help explain the process.",
    },
    {
      id: "all-at-once",
      question: "Do I get the scholarship all at once?",
      answer:
        "No. New and returning student scholarship awards are divided into a set amount per term. This amount is credited against your tuition due for each term. The details are explained in the description for each scholarship.",
    },
    {
      id: "financial-aid",
      question: "Can I also apply for financial aid?",
      answer:
        "Yes, you should also apply for federal financial aid by filling out a FAFSA. Most scholarships at WGU require a FAFSA on file unless you are not eligible to apply for federal aid. If awarded a scholarship, that amount will likely only cover a portion of your school expenses, and financial aid can help pay for the rest. You can apply for financial aid while you are waiting for a decision about your scholarship application. Here is the full information on financial aid.",
      answerWithLinks: (
        <>
          Yes, you should also apply for federal financial aid by filling out a{" "}
          <a
            href="https://studentaid.gov/understand-aid/eligibility/requirements/non-us-citizens"
            className="underline cursor-pointer hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAFSA
          </a>
          . Most scholarships at WGU require a{" "}
          <a
            href="https://studentaid.gov/understand-aid/eligibility/requirements/non-us-citizens"
            className="underline cursor-pointer hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAFSA
          </a>{" "}
          on file unless you are not eligible to apply for federal aid. If awarded a scholarship, that amount will likely only cover a portion of your school expenses, and financial aid can help pay for the rest. You can apply for financial aid while you are waiting for a decision about your scholarship application. Here is the full information on financial aid.
        </>
      ),
    },
    {
      id: "scholarship-universe",
      question: "What is ScholarshipUniverse?",
      answer:
        "WGU is partnering with Scholarship Universe (SU), a third-party scholarship aggregator, to help you identify and apply for scholarships based on information included in your SU profile. The information you enter into the SU platform will be governed by ScholarshipUniverse's Terms of Use and Privacy Policy.",
    },
  ];

  return (
    <section className="py-12 bg-[#EFF6F9] pr-2 md:pr-10">
      <h2 className="text-[58px] font-[400] text-center text-[#003057] mb-8 pl-8">
        Common Questions About Scholarships
      </h2>
      <div className="flex flex-col gap-0 mb-8 pl-8">
        {questions.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => toggleAccordion(item.id)}
              className="border-b-1 border-gray-300 w-full px-4 flex justify-between items-center py-4 cursor-pointer text-[20px] hover:text-[#003057] font-[400] transition-colors"
            >
              <span>{item.question}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`flex-shrink-0 ml-4 transition-transform ${
                  openAccordion === item.id ? "rotate-180" : ""
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
            {openAccordion === item.id && (
              <div className="pb-5 pt-5 px-4 text-gray-700 leading-relaxed whitespace-pre-line">
                {item.answerWithLinks || item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 pl-8 items-center flex flex-col">
        <p className="mb-4 ">
          Still have questions? More info can be found here:
        </p>
        <div className="flex flex-col sm:flex-row justify-between px-[20%] w-full">
          <button 
            onClick={() => window.location.href = "https://www.wgu.edu/lp/programs/on-demand-webinars.html"}
            className="px-6 py-3 bg-[#001731] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Watch Scholarships Webinar
          </button>
          <button 
            onClick={() => window.location.href = "https://www.wgu.edu/financial-aid-tuition/scholarships/faqs.html"}
            className="px-6 py-3 bg-[#001731] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Scholarship FAQs
          </button>
        </div>
      </div>
    </section>
  );
}
