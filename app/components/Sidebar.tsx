export default function Sidebar() {
  return (
    <div className="w-full min-h-full bg-white rounded-lg p-6 shadow-2xl flex flex-col">
      <div className="mb-3 mt-10 xl:mt-12">
        <h3 className="text-[19px] font-[400] text-[#003057] uppercase tracking-wide mb-2">
          TUITION & FEES
        </h3>
        <nav className="flex flex-col ml-6">
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[19px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[500] "
          >
            Overview
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[19px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[500] "
          >
            Financial Aid
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[19px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[500] "
          >
            Tuition - School of Technology
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[19px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[500] "
          >
            Tuition - Leavitt School of Health
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[19px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[500] "
          >
            Tuition - School of Business
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[19px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[500] "
          >
            Tuition - School of Education
          </a>
          <a
            href="#"
            className="sidebar-link-active text-[#003057] font-medium text-[20px] py-2 relative "
          >
            Scholarships
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[19px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[500] "
          >
            Corporate Reimbursement
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[19px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[500] "
          >
            Net Price Calculator
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[19px] font-[400] text-[#001731] py-2 transition-all relative hover:font-[500] "
          >
            Tuition Comparison
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[19px] font-[400] text-[#001731] pt-2 transition-all relative hover:font-[500] "
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
            <button className="w-full py-3 bg-white text-[#003057] rounded-full text-sm font-semibold hover:opacity-90 transition-opacity uppercase">
              APPLY TODAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
