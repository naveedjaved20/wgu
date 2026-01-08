export default function Sidebar() {
  return (
    <div className="w-full min-h-full bg-white rounded-lg p-6 shadow-2xl flex flex-col">
      <div className="mb-3 mt-10 xl:mt-12">
        <h3 className="text-[20px] font-[450] text-[#003057] uppercase tracking-wide mb-2">
          TUITION & FEES
        </h3>
        <nav className="flex flex-col gap-1 ml-8">
          <a
            href="https://www.wgu.edu/financial-aid-tuition.html"
            className="sidebar-link-hover text-[20px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[450] "
          >
            Overview
          </a>
          <a
            href="https://www.wgu.edu/financial-aid-tuition/financial-aid.html"
            className="sidebar-link-hover text-[20px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[450] "
          >
            Financial Aid
          </a>
          <a
            href="https://www.wgu.edu/financial-aid-tuition/tuition-it-degrees.html"
            className="sidebar-link-hover text-[20px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[450] "
          >
            Tuition - School of Technology
          </a>
          <a
            href="https://www.wgu.edu/financial-aid-tuition/tuition-nursing-health-degrees.html"
            className="sidebar-link-hover text-[20px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[450]"
          >
            Tuition – Leavitt School of<br />
            Health
          </a>
          <a
            href="https://www.wgu.edu/financial-aid-tuition/tuition-business-degrees.html"
            className="sidebar-link-hover text-[20px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[450] "
          >
            Tuition - School of Business
          </a>
          <a
            href="https://www.wgu.edu/financial-aid-tuition/tuition-teaching-education-degrees.html"
            className="sidebar-link-hover text-[20px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[450] "
          >
            Tuition - School of Education
          </a>
          <a
            href="https://www.wgu.edu/financial-aid-tuition/scholarships.html"
            className="sidebar-link-hover text-[20px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[450] "
          >
            Scholarships
          </a>
          <a
            href="https://www.wgu.edu/financial-aid-tuition/corporate-reimbursement.html"
            className="sidebar-link-hover text-[20px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[450] "
          >
            Corporate Reimbursement
          </a>
          <a
            href="https://www.wgu.edu/financial-aid-tuition/net-price-calculator.html"
            className="sidebar-link-hover text-[20px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[450] "
          >
            Net Price Calculator
          </a>
          <a
            href="https://www.wgu.edu/financial-aid-tuition/tuition-comparison.html"
            className="sidebar-link-hover text-[20px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[450] "
          >
            Tuition Comparison
          </a>
          <a
            href="https://www.wgu.edu/financial-aid-tuition/payment-plans.html"
            className="sidebar-link-hover text-[20px] font-[400] text-[#001731] pt-2 transition-all relative hover:font-[450] "
          >
            Payment Plans
          </a>
        </nav>
      </div>
      <div className="-mx-6 relative">
        <div
          className="cmp-container-gradient p-6 text-white text-center"
          style={{
            backgroundColor: "#015FCA",
          }}
        >
          <div className="relative">
            <p className="text-[18px] font-[700] opacity-90">Next Start Date</p>
            <p className="text-[26px] font-[700] mb-6">February 1</p>
            <button
              onClick={() => window.location.href = "https://apply.wgu.edu/register"}
              className="w-full py-3 bg-white text-[#003057] rounded-full text-sm font-semibold hover:opacity-90 transition-opacity uppercase"
            >
              APPLY TODAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
