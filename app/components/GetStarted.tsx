export default function GetStarted() {
  // build get started section
  return (
    <section className="bg-[#002855] text-white px-8 py-8 md:px-10 md:py-8 mb-12">
      <h2 className="text-[48px] font-[400] mb-8 text-center">
        Get Started in Two Simple Steps
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white text-gray-900 p-8 ">
          <h3 className="text-xl text-center font-semibold text-[#003057] mb-4">
            Step 1: Apply for Admission
          </h3>
          <p className="text-[18px] text-center line-height-[28px] leading-relaxed ">
            To be considered for WGU scholarships, you must be provisionally
            accepted as a WGU student <sup>1</sup> . Please complete the
            admissions application and work with your Enrollment Counselor to
            move through the admissions process.
          </p>
          <button className="w-full mt-10 py-3 bg-[#001731] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Complete New Student Application
          </button>
        </div>
        <div className="bg-white text-gray-900 p-8 ">
          <h3 className="text-xl text-center font-semibold text-[#003057] mb-4">
            Step 2: Apply for Scholarships
          </h3>
          <p className="text-[18px] text-center line-height-[28px] leading-relaxed ">
            To access the scholarship application, you will need your MyWGU
            student portal credentials, which will be sent to you after Step 1.
            You are eligible to apply for scholarships 90 days before and up to
            30 days after your degree start date.
            <sup>2</sup>
          </p>
          <button className="w-full mt-10 py-3 bg-[#001731] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Complete Scholarship Application
          </button>
        </div>
      </div>
      <em className=" text-gray-100 font-[200] text-[12px] pt-10 block mt-4 flex flex-col gap-4">
        <p className="text-[18px]  line-height-[28px] leading-relaxed ">
          <sup>1</sup>

          <span className=" ml-2 text-[18px]  line-height-[28px] leading-relaxed ">
            Returning WGU graduates should complete the
          </span>
        </p>
        <p className="text-[18px]  line-height-[28px] leading-relaxed ">
          <sup>2</sup>

          <span className=" ml-2 text-[18px]  line-height-[28px] leading-relaxed ">
            Completing a current aid year FAFSA is required if eligible to
            submit the
            <a
              title="FAFSA eligibility for non-US citizens"
              href="https://studentaid.gov/understand-aid/eligibility/requirements/non-us-citizens"
            >
              FAFSA
            </a>
            f you are ineligible to receive federal aid via the FAFSA, you will
            still have opportunity to be considered for WGU scholarships.
          </span>
        </p>
      </em>
    </section>
  );
}
