import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-[100] shadow-sm w-full left-0 right-0">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-8 flex-wrap">
        <div className="flex items-center gap-2">
          <Image
            src="/wgu-logo.svg"
            alt="WGU Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </div>
        <nav className="hidden lg:flex gap-8 flex-1 justify-center">
          <a href="#" className="text-gray-900 hover:text-[#003057] text-sm font-medium transition-colors">Online Degrees</a>
          <a href="#" className="text-gray-900 hover:text-[#003057] text-sm font-medium transition-colors">Admissions & Transfers</a>
          <a href="#" className="text-gray-900 hover:text-[#003057] text-sm font-medium transition-colors">Tuition & Financial Aid</a>
          <a href="#" className="text-gray-900 hover:text-[#003057] text-sm font-medium transition-colors">Student Success</a>
          <a href="#" className="text-gray-900 hover:text-[#003057] text-sm font-medium transition-colors">More</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="px-5 py-2.5 bg-[#003057] text-white rounded text-sm font-semibold hover:opacity-90 transition-opacity">
            Request Info
          </button>
          <button className="px-5 py-2.5 bg-[#004d7a] text-white rounded text-sm font-semibold hover:opacity-90 transition-opacity">
            Apply Now
          </button>
          <button className="p-2 text-gray-900 hover:text-[#003057] transition-colors" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="p-2 text-gray-900 hover:text-[#003057] transition-colors" aria-label="Phone">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18 14.46V17.5C18 17.78 17.78 18 17.5 18C8.39 18 1 10.61 1 1.5C1 1.22 1.22 1 1.5 1H4.54C4.82 1 5 1.18 5 1.46V4.54C5 4.82 4.82 5 4.54 5H3.5C3.5 8.5 6.5 11.5 10 11.5V10.46C10 10.18 10.18 10 10.46 10H13.54C13.82 10 14 10.18 14 10.46V13.5C14 13.78 13.82 14 13.54 14H10.46C10.18 14 10 13.82 10 13.54V12.5" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

