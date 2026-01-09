export default function FeaturedScholarships() {
  const scholarships = [
    {
      title: "Rise Above Grant Scholarship",
      amount: "$4,000",
      deadline: "June 30th, 2026",
      icon: "/iconsImage/scholarship-icon-4000.webp",
      url: "https://www.wgu.edu/financial-aid-tuition/scholarships/general/resiliency-grant.html",
    },
    {
      title: "Learn Where you Live Scholarship",
      amount: "$3,000",
      deadline: "June 30, 2026",
      icon: "/iconsImage/scholarship-icon-3000.webp",
      url: "https://www.wgu.edu/financial-aid-tuition/scholarships/general/rural.html",
    },
    {
      title: "Active Duty Scholarship",
      amount: "$2,500",
      deadline: "June 30, 2026",
      icon: "/iconsImage/scholarship-icon-2500.webp",
      url: "https://www.wgu.edu/financial-aid-tuition/scholarships/military-veterans/active-duty.html",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-[58px] font-[400] text-[#003057] mb-8 pl-8">
        Other Featured Scholarships
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pl-8">
        {scholarships.map((scholarship, index) => (
          <div
            key={index}
            className="bg-[#EFF6F9] border-1 border-black/50 p-4 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 relative">
                <img
                  src={scholarship.icon}      // <-- Use normal img
                  alt={`${scholarship.amount} scholarship icon`}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-[20px] font-[500] text-[#003057] mb-1">
              {scholarship.title}
            </h3>
            <p className="text-[15px] mb-2">
              Application Deadline: {scholarship.deadline}
            </p>
            <button 
              onClick={() => window.location.href = scholarship.url}
              className="w-full pt-3 text-black rounded-full text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
            >
              View Scholarship
              <div className="bg-[#2d8eff33] rounded-full p-1 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                >
                  <path
                    d="M0 5.31372H11M11 5.31372L6.45924 1M11 5.31372L6.45924 9.62745"
                    stroke="#2D8EFF"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
