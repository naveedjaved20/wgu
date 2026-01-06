import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="text-white pt-12 pb-8 px-4 md:px-8"
      style={{
        background:
          "radial-gradient(91.7% 109.57% at 73.16% 8.3%, #002147 0, #001329 100%)",
      }}
    >
      {/* Upper Section - Branding and Navigation */}
      <div className="max-w-[1400px] mx-auto mb-8">
        {/* Branding with Owl Icon - Top Left */}
        <div className="mb-8">
          <Image
            src="/iconsImage/university-of-you-footer-25.svg"
            alt="The University of You"
            width={293}
            height={29}
            className="h-auto"
          />
        </div>

        {/* Navigation Columns - Below Logo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold mb-2">The University</h4>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Accessibility
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Accreditation
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Newsroom
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Careers
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold mb-2">For Students</h4>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Student Portal
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Admissions
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Catalog
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Title IX
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Alumni Services
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold mb-2">Most Visited Links</h4>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Business Programs
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Bachelor's Degrees
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Student Experience
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Online Degrees
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Scholarships
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold mb-2">Support</h4>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Military
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Financial Aid
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Testimonials
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Scholarships
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Faculty
            </a>
            <a
              href="#"
              className="text-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              Student Communities
            </a>
          </div>
        </div>
      </div>

      {/* Lower Section - Legal, Social, and Copyright */}
      <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Legal Links */}
        <div className="flex items-center gap-2 text-xs">
          <a href="#" className="opacity-90 hover:opacity-100">
            Privacy Policy
          </a>
          <span className="opacity-50">|</span>
          <a href="#" className="opacity-90 hover:opacity-100">
            Cookie Policy
          </a>
          <span className="opacity-50">|</span>
          <a href="#" className="opacity-90 hover:opacity-100">
            Contact Us
          </a>
          <span className="opacity-50">|</span>
          <a href="#" className="opacity-90 hover:opacity-100">
            Sitemap
          </a>
        </div>

        {/* Social Media Icons and Copyright */}
        <div className="flex items-center gap-6">
          {/* Social Media Icons - Circular with borders */}
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border-2 border-[#002147] flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0ZM6 17H3V8H6V17ZM4.5 6.3C3.5 6.3 2.7 5.5 2.7 4.5C2.7 3.5 3.5 2.7 4.5 2.7C5.5 2.7 6.3 3.5 6.3 4.5C6.3 5.5 5.5 6.3 4.5 6.3ZM17 17H14V12.4C14 11.3 14 9.9 12.5 9.9C11 9.9 10.8 11.1 10.8 12.3V17H7.8V8H10.7V9.2H10.7C11 8.5 11.9 7.8 13.2 7.8C15.8 7.8 17 9.4 17 12.1V17Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border-2 border-[#002147] flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H10.6V12.3H8.3V9.3H10.6V7.1C10.6 4.6 11.9 3.4 14.1 3.4C15.2 3.4 16.1 3.5 16.4 3.5V6.1H15C13.7 6.1 13.4 6.7 13.4 7.6V9.3H16.3L15.9 12.3H13.4V20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border-2 border-[#002147] flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M10 1.8C7.2 1.8 6.9 1.8 5.9 1.9C4.9 2 4.1 2.2 3.4 2.5C2.7 2.8 2.1 3.2 1.5 3.8C0.9 4.4 0.5 5 0.2 5.7C-0.1 6.4 -0.3 7.2 -0.4 8.2C-0.5 9.2 -0.5 9.5 -0.5 12.3C-0.5 15.1 -0.5 15.4 -0.4 16.4C-0.3 17.4 -0.1 18.2 0.2 18.9C0.5 19.6 0.9 20.2 1.5 20.8C2.1 21.4 2.7 21.8 3.4 22.1C4.1 22.4 4.9 22.6 5.9 22.7C6.9 22.8 7.2 22.8 10 22.8C12.8 22.8 13.1 22.8 14.1 22.7C15.1 22.6 15.9 22.4 16.6 22.1C17.3 21.8 17.9 21.4 18.5 20.8C19.1 20.2 19.5 19.6 19.8 18.9C20.1 18.2 20.3 17.4 20.4 16.4C20.5 15.4 20.5 15.1 20.5 12.3C20.5 9.5 20.5 9.2 20.4 8.2C20.3 7.2 20.1 6.4 19.8 5.7C19.5 5 19.1 4.4 18.5 3.8C17.9 3.2 17.3 2.8 16.6 2.5C15.9 2.2 15.1 2 14.1 1.9C13.1 1.8 12.8 1.8 10 1.8ZM10 0C12.9 0 13.2 0 14.2 0.1C15.2 0.2 16.1 0.4 17 0.8C18 1.2 18.7 1.7 19.4 2.4C20.1 3.1 20.6 3.8 21 4.8C21.4 5.7 21.6 6.6 21.7 7.6C21.8 8.6 21.8 8.9 21.8 11.8C21.8 14.7 21.8 15 21.7 16C21.6 17 21.4 17.9 21 18.8C20.6 19.8 20.1 20.5 19.4 21.2C18.7 21.9 18 22.4 17 22.8C16.1 23.2 15.2 23.4 14.2 23.5C13.2 23.6 12.9 23.6 10 23.6C7.1 23.6 6.8 23.6 5.8 23.5C4.8 23.4 3.9 23.2 3 22.8C2 22.4 1.3 21.9 0.6 21.2C-0.1 20.5 -0.6 19.8 -1 18.8C-1.4 17.9 -1.6 17 -1.7 16C-1.8 15 -1.8 14.7 -1.8 11.8C-1.8 8.9 -1.8 8.6 -1.7 7.6C-1.6 6.6 -1.4 5.7 -1 4.8C-0.6 3.8 -0.1 3.1 0.6 2.4C1.3 1.7 2 1.2 3 0.8C3.9 0.4 4.8 0.2 5.8 0.1C6.8 0 7.1 0 10 0ZM10 5.4C7.4 5.4 5.4 7.4 5.4 10C5.4 12.6 7.4 14.6 10 14.6C12.6 14.6 14.6 12.6 14.6 10C14.6 7.4 12.6 5.4 10 5.4ZM10 13.1C8.2 13.1 6.9 11.8 6.9 10C6.9 8.2 8.2 6.9 10 6.9C11.8 6.9 13.1 8.2 13.1 10C13.1 11.8 11.8 13.1 10 13.1ZM16.7 4.2C16.7 4.9 16.1 5.5 15.4 5.5C14.7 5.5 14.1 4.9 14.1 4.2C14.1 3.5 14.7 2.9 15.4 2.9C16.1 2.9 16.7 3.5 16.7 4.2Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full border-2 border-[#002147] flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M19.6 5.2C19.4 4.5 18.9 4 18.2 3.8C16.8 3.4 10 3.4 10 3.4C10 3.4 3.2 3.4 1.8 3.8C1.1 4 0.6 4.5 0.4 5.2C0 6.6 0 10 0 10C0 10 0 13.4 0.4 14.8C0.6 15.5 1.1 16 1.8 16.2C3.2 16.6 10 16.6 10 16.6C10 16.6 16.8 16.6 18.2 16.2C18.9 16 19.4 15.5 19.6 14.8C20 13.4 20 10 20 10C20 10 20 6.6 19.6 5.2ZM8 12.6V7.4L13.2 10L8 12.6Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full border-2 border-[#002147] flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M16.5 4.5C15.8 5.2 14.9 5.6 14 5.6V8.6C14.9 8.6 15.8 8.4 16.6 8.1V11.1C16.6 14.2 14.1 16.7 11 16.7C7.9 16.7 5.4 14.2 5.4 11.1C5.4 8 7.9 5.5 11 5.5C11.1 5.5 11.2 5.5 11.3 5.5V8.5C11.2 8.5 11.1 8.5 11 8.5C9.1 8.5 7.5 10.1 7.5 12C7.5 13.9 9.1 15.5 11 15.5C12.9 15.5 14.5 13.9 14.5 12V0H17.5C17.5 1.5 17.5 3 16.5 4.5Z" />
              </svg>
            </a>
          </div>
          {/* Copyright */}
          <p className="text-xs opacity-90 whitespace-nowrap">
            ©2026 WGU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

