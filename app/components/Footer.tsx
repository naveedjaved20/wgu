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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold mb-2 text-gray-400">
              The University
            </h4>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                About Us
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Accessibility
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Accreditation
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Newsroom
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Careers
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold mb-2 text-gray-400">
              For Students
            </h4>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Student Portal
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Admissions
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Catalog
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Title IX
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Alumni Services
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold mb-2 text-gray-400">
              Most Visited Links
            </h4>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Business Programs
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Bachelor's Degrees
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Student Experience
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Online Degrees
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm transition-opacity footer-link-animated"
              >
                Scholarships
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold mb-2 text-gray-400">Support</h4>
            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-3">
                <div>
                  <a
                    href="#"
                    className="text-sm transition-opacity footer-link-animated"
                  >
                    Military
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-sm transition-opacity footer-link-animated"
                  >
                    Financial Aid
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-sm transition-opacity footer-link-animated"
                  >
                    Testimonials
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <a
                    href="#"
                    className="text-sm transition-opacity footer-link-animated"
                  >
                    Scholarships
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-sm transition-opacity footer-link-animated"
                  >
                    Faculty
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-sm transition-opacity footer-link-animated"
                  >
                    Student Communities
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Legal, Social, and Copyright */}
      <div className="max-w-[1400px] mx-auto mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Legal Links */}
        <div className="flex items-center gap-2 text-xs w-full">
          <a
            href="#"
            className="text-[18px] opacity-90 hover:opacity-100 transition-opacity footer-link-animated"
          >
            Privacy Policy
          </a>
          <span className="">|</span>
          <a
            href="#"
            className="text-[18px] opacity-90 hover:opacity-100 transition-opacity footer-link-animated"
          >
            Cookie Policy
          </a>
          <span className="">|</span>
          <a
            href="#"
            className="text-[18px] opacity-90 hover:opacity-100 transition-opacity footer-link-animated"
          >
            Contact Us
          </a>
          <span className="">|</span>
          <a
            href="#"
            className="text-[18px] opacity-90 hover:opacity-100 transition-opacity footer-link-animated"
          >
            Sitemap
          </a>
        </div>

        {/* Social Media Icons and Copyright */}
        <div className="flex items-center gap-10 w-full">
          {/* Social Media Icons - Circular with borders */}
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border-2 border-[#002147] flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.7"
                  r="15.0322"
                  transform="matrix(-1 0 0 1 15.9551 16)"
                  stroke="white"
                  stroke-width="0.935494"
                />
                <path
                  d="M22.4207 16.859V21.1638H19.9272V17.1487C19.9272 16.1389 19.5675 15.4512 18.6642 15.4512C17.9745 15.4512 17.5661 15.9141 17.3849 16.3636C17.32 16.5233 17.3011 16.748 17.3011 16.9727V21.1665H14.8075C14.8075 21.1665 14.84 14.3628 14.8075 13.6589H17.3011V14.7229C17.2957 14.731 17.2903 14.7391 17.2849 14.7472H17.3011V14.7229C17.6337 14.2112 18.2233 13.4829 19.5485 13.4829C21.1902 13.4802 22.4207 14.555 22.4207 16.859ZM12.2003 10.0391C11.3457 10.0391 10.7886 10.5995 10.7886 11.3359C10.7886 12.0561 11.3295 12.6328 12.1679 12.6328H12.1841C13.055 12.6328 13.5959 12.0561 13.5959 11.3359C13.5769 10.5995 13.0523 10.0391 12.2003 10.0391ZM10.9373 21.1665H13.4309V13.6562H10.9373V21.1665Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border-2 border-[#002147] flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
            >
              <svg
                width="31"
                height="32"
                viewBox="0 0 31 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.7"
                  r="15.0322"
                  transform="matrix(-1 0 0 1 15.5 16)"
                  stroke="white"
                  stroke-width="0.935494"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4069 12.5433C16.4069 11.9908 16.6678 11.7634 16.9279 11.7634C17.1798 11.7634 18.5917 11.7634 18.5917 11.7634V9.24512H16.3318C13.9105 9.24512 13.3022 11.2205 13.3022 12.4033V13.5204H11.9224V15.4298V16.3315H13.3022C13.3022 19.7284 13.3022 22.5981 13.3022 22.5981H16.4069C16.4069 22.5981 16.4069 19.7284 16.4069 16.3315H18.2873L18.379 15.2333L18.5472 13.5204H16.4069V12.5433Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border-2 border-[#002147] flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.7"
                  r="15.0322"
                  transform="matrix(-1 0 0 1 16.4692 16)"
                  stroke="white"
                  stroke-width="0.935494"
                />
                <rect
                  x="9.89455"
                  y="9.57277"
                  width="12.9277"
                  height="12.9423"
                  rx="2.04706"
                  stroke="white"
                  stroke-width="0.655314"
                />
                <path
                  d="M19.3572 16.043C19.3572 17.7022 18.0136 19.0466 16.3572 19.0466C14.7007 19.0466 13.3572 17.7022 13.3572 16.043C13.3572 14.3837 14.7007 13.0393 16.3572 13.0393C18.0136 13.0393 19.3572 14.3837 19.3572 16.043Z"
                  stroke="white"
                  stroke-width="0.791573"
                />
                <ellipse
                  cx="21.2358"
                  cy="11.5817"
                  rx="0.636712"
                  ry="0.637391"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full border-1 border-white/30 flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
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
              className="w-10 h-10 rounded-full border-1 border-white/30 flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
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
          <p className="text-[19px] opacity-90 whitespace-nowrap">
            ©2026 WGU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
