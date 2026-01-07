import Image from "next/image";

export default function FinancialAid() {
  const schools = [
    {
      name: "BUSINESS",
      icon: "/iconsImage/Icon_Business.svg",
      degrees: ["Bachelor's Degrees", "Master's Degrees", "See All Degrees"],
    },
    {
      name: "TECHNOLOGY",
      icon: "/iconsImage/Icon_IT.svg",
      degrees: ["Bachelor's Degrees", "Master's Degrees", "IT Certifications"],
    },
    {
      name: "HEALTH & NURSING",
      icon: "/iconsImage/Icon_Health.svg",
      degrees: ["Bachelor's Degrees", "Master's Degrees", "Certificates"],
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
    <section className="">
      {/* Financial Aid Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <div className="max-w-[1400px] mx-auto pl-8">
          <div className="flex flex-col lg:flex-row gap-14 items-start">
            {/* Left Column - FAFSA */}
            <div className="flex-shrink-0 flex justify-center flex-col items-center">
              <div className="mb-4">
                <Image
                  src="/iconsImage/fafsa-illustration.webp"
                  alt="FAFSA Federal Student Aid"
                  width={300}
                  height={120}
                  className="mb-2"
                />
              </div>
              <p className="text-[18px] w-[350px] text-center text-gray-700 mb-4">
                When you complete the FAFSA, be sure to list WGU's school code.
              </p>
              <p className="text-3xl text-center font-bold text-gray-900">
                Code: <span className="text-[#003057]">033394</span>
              </p>
            </div>

            {/* Right Column - Financial Aid Info */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Financial Aid is also Available
              </h3>
              <p className="text-[18px] leading-relaxed mb-6">
                You may choose to pay for the remaining portion of your degree
                through federal financial aid (subject to your eligibility).
                Pell Grants, which do not have to be repaid, are granted based
                on financial need. Federal Direct Student Loans are available to
                most students. Subsidized loans, which are dependent on
                financial need, reduce the interest due on loans.
              </p>
              <button className="px-6 py-3 bg-[#001731] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                See More Financial Aid Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Four Schools Section */}
      <div className="py-14 px-10" style={{ backgroundColor: "#EFF6F9" }}>
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Four Schools, One Purpose
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schools.map((school, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-2xl hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex flex-row gap-6 items-center">
                  <Image
                    src={school.icon}
                    alt={school.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <h3 className="text-sm font-bold text-gray-900 uppercase">
                    {school.name}
                  </h3>
                </div>

                <div className="flex flex-col gap-3 mt-7">
                  {school.degrees.map((degree, degreeIndex) => (
                    <a
                      key={degreeIndex}
                      href="#"
                      className="flex flex-row w-full justify-between text-[17px] text-[#0070f0] hover:underline flex items-center gap-1 group"
                    >
                      <span>{degree}</span>
                      <div className="bg-[#2d8eff33] rounded-full p-1 flex items-center justify-center">
                        {" "}
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
                            stroke-width="1.5"
                          />
                        </svg>
                      </div>
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
