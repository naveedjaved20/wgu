import Image from "next/image";

export default function FinancialAid() {
  const schools = [
    {
      name: "BUSINESS",
      icon: "/iconsImage/Icon_Business.svg",
      degrees: [
        "Bachelor's Degrees",
        "Master's Degrees",
        "See All Degrees",
      ],
    },
    {
      name: "TECHNOLOGY",
      icon: "/iconsImage/Icon_IT.svg",
      degrees: [
        "Bachelor's Degrees",
        "Master's Degrees",
        "IT Certifications",
      ],
    },
    {
      name: "HEALTH & NURSING",
      icon: "/iconsImage/Icon_Health.svg",
      degrees: [
        "Bachelor's Degrees",
        "Master's Degrees",
        "Certificates",
      ],
    },
    {
      name: "EDUCATION",
      icon: "/iconsImage/Icon_Teaching.svg",
      degrees: [
        "Bachelor's Degrees",
        "Master's Degrees",
        "State Licensure Information",
      ],
    },
  ];

  return (
    <section className="mb-12">
      {/* Financial Aid Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Column - FAFSA */}
            <div className="flex-shrink-0">
              <div className="mb-6">
                <Image
                  src="/iconsImage/fafsa-illustration.webp"
                  alt="FAFSA Federal Student Aid"
                  width={200}
                  height={120}
                  className="mb-4"
                />
              </div>
              <p className="text-sm text-gray-700 mb-2">
                When you complete the FAFSA, be sure to list WGU's school code.
              </p>
              <p className="text-lg font-bold text-gray-900">
                Code: <span className="text-[#003057]">033394</span>
              </p>
            </div>

            {/* Right Column - Financial Aid Info */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Financial Aid is also Available
              </h3>
              <p className="text-base leading-relaxed text-gray-700 mb-6">
                Federal financial aid (subject to eligibility) can help pay for
                a degree. Pell Grants, which do not have to be repaid, are
                based on financial need. Federal Direct Student Loans are
                available. Subsidized loans reduce interest based on financial
                need.
              </p>
              <button className="px-6 py-3 bg-[#003057] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                See More Financial Aid Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Four Schools Section */}
      <div className="p-8" style={{ backgroundColor: '#EFF6F9' }}>
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Four Schools, One Purpose
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schools.map((school, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <Image
                    src={school.icon}
                    alt={school.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-sm font-bold text-gray-900 uppercase mb-4">
                  {school.name}
                </h3>
                <div className="flex flex-col gap-2">
                  {school.degrees.map((degree, degreeIndex) => (
                    <a
                      key={degreeIndex}
                      href="#"
                      className="text-sm text-[#003057] hover:underline flex items-center gap-1 group"
                    >
                      <span>{degree}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path
                          d="M4 2L8 6L4 10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

