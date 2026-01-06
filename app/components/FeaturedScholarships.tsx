import Image from 'next/image';

export default function FeaturedScholarships() {
  const scholarships = [
    {
      title: 'Rise Above Grant Scholarship',
      amount: '$4,000',
      deadline: 'June 30th, 2026',
      icon: '/iconsImage/scholarship-icon-4000.webp',
    },
    {
      title: 'Learn Where you Live Scholarship',
      amount: '$3,000',
      deadline: 'June 30, 2026',
      icon: '/iconsImage/scholarship-icon-3000.webp',
    },
    {
      title: 'Active Duty Scholarship',
      amount: '$2,500',
      deadline: 'June 30, 2026',
      icon: '/iconsImage/scholarship-icon-2500.webp',
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-[#003057] mb-8">Other Featured Scholarships</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship, index) => (
          <div key={index} className="bg-gray-50 border-2 border-blue-100 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 relative">
                <Image
                  src={scholarship.icon}
                  alt={`${scholarship.amount} scholarship icon`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#003057] mb-2">{scholarship.title}</h3>
            <p className="text-sm text-gray-600 mb-6">Application Deadline: {scholarship.deadline}</p>
            <button className="w-full py-3 bg-[#003057] text-white rounded text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              View Scholarship
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

