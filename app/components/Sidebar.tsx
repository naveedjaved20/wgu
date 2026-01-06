export default function Sidebar() {
  return (
    <div className="w-full min-h-full bg-white rounded-lg p-6 shadow-lg flex flex-col">
      <div className="mb-8">
        <h3 className="text-base font-medium text-[#003057] uppercase tracking-wide mb-4">
          TUITION & FEES
        </h3>
        <nav className="flex flex-col gap-2">
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[20px] font-normal py-2 transition-all relative hover:font-medium hover:pl-4"
          >
            Overview
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[20px] font-normal py-2 transition-all relative hover:font-medium hover:pl-4"
          >
            Financial Aid
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[20px] font-normal py-2 transition-all relative hover:font-medium hover:pl-4"
          >
            Tuition - School of Technology
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[20px] font-normal py-2 transition-all relative hover:font-medium hover:pl-4"
          >
            Tuition - Leavitt School of Health
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[20px] font-normal py-2 transition-all relative hover:font-medium hover:pl-4"
          >
            Tuition - School of Business
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[20px] font-normal py-2 transition-all relative hover:font-medium hover:pl-4"
          >
            Tuition - School of Education
          </a>
          <a
            href="#"
            className="sidebar-link-active text-[#003057] font-medium text-[20px] py-2 relative pl-4"
          >
            Scholarships
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[20px] font-normal py-2 transition-all relative hover:font-medium hover:pl-4"
          >
            Corporate Reimbursement
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[20px] font-normal py-2 transition-all relative hover:font-medium hover:pl-4"
          >
            Net Price Calculator
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[20px] font-normal py-2 transition-all relative hover:font-medium hover:pl-4"
          >
            Tuition Comparison
          </a>
          <a
            href="#"
            className="sidebar-link-hover text-gray-900 hover:text-[#003057] text-[20px] font-normal py-2 transition-all relative hover:font-medium hover:pl-4"
          >
            Payment Plans
          </a>
        </nav>
      </div>
      <div className="mt-8 -mx-6">
        <div
          className="p-6 text-white text-center"
          style={{
            background:
              "linear-gradient(to right, #003057 0%, #004d7a 100%)",
          }}
        >
          <p className="text-xs mb-2 opacity-90">Next Start Date</p>
          <p className="text-3xl font-bold mb-4">February 1</p>
          <button className="w-full py-3 bg-white text-[#003057] rounded-full text-sm font-semibold hover:opacity-90 transition-opacity uppercase">
            APPLY TODAY
          </button>
        </div>
      </div>
    </div>
  );
}

