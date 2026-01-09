export default function Footer() {
  return (
    <>
      {/* Upper Section - Branding and Navigation */}
      <div className="lg:max-w-[1400px] mx-auto mb-8">
        {/* Branding with Owl Icon - Top Left */}
        <div className="mb-8">
          <img
            src="/iconsImage/university-of-you-footer-25.svg"
            alt="The University of You"
            width={293}
            height={29}
            className="h-auto"
          />
        </div>

        {/* Navigation Columns - Below Logo */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold mb-2 text-gray-400">The University</h4>
            <a href="https://www.wgu.edu/about.html" className="text-sm transition-opacity footer-link-animated">About Us</a>
            <a href="https://www.wgu.edu/admissions/accessibility.html" className="text-sm transition-opacity footer-link-animated">Accessibility</a>
            <a href="https://www.wgu.edu/student-experience/how-you-learn/accreditation.html" className="text-sm transition-opacity footer-link-animated">Accreditation</a>
            <a href="https://www.wgu.edu/newsroom.html" className="text-sm transition-opacity footer-link-animated">Newsroom</a>
            <a href="https://www.wgu.edu/about/careers.html" className="text-sm transition-opacity footer-link-animated">Careers</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold mb-2 text-gray-400">For Students</h4>
            <a href="https://www.wgu.edu/student-portal.html" className="text-sm transition-opacity footer-link-animated">Student Portal</a>
            <a href="https://www.wgu.edu/admissions.html" className="text-sm transition-opacity footer-link-animated">Admissions</a>
            <a href="https://www.wgu.edu/about/institutional-catalog.html" className="text-sm transition-opacity footer-link-animated">Catalog</a>
            <a href="https://www.wgu.edu/student-experience/title-ix.html" className="text-sm transition-opacity footer-link-animated">Title IX</a>
            <a href="https://www.wgu.edu/alumni.html" className="text-sm transition-opacity footer-link-animated">Alumni Services</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold mb-2 text-gray-400">Most Visited Links</h4>
            <a href="https://www.wgu.edu/online-business-degrees.html" className="text-sm transition-opacity footer-link-animated">Business Programs</a>
            <a href="https://www.wgu.edu/online-degree-programs/bachelors.html" className="text-sm transition-opacity footer-link-animated">Bachelor's Degrees</a>
            <a href="https://www.wgu.edu/student-experience.html" className="text-sm transition-opacity footer-link-animated">Student Experience</a>
            <a href="https://www.wgu.edu/online-degree-programs.html" className="text-sm transition-opacity footer-link-animated">Online Degrees</a>
            <a href="https://www.wgu.edu/financial-aid-tuition/scholarships.html" className="text-sm transition-opacity footer-link-animated">Scholarships</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold mb-2 text-gray-400">Support</h4>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex flex-col gap-3">
                <a href="https://www.wgu.edu/student-experience/military.html" className="text-sm transition-opacity footer-link-animated">Military</a>
                <a href="https://www.wgu.edu/financial-aid-tuition/financial-aid.html" className="text-sm transition-opacity footer-link-animated">Financial Aid</a>
                <a href="https://www.wgu.edu/student-experience/student-resources/testimonials.html" className="text-sm transition-opacity footer-link-animated">Testimonials</a>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://www.wgu.edu/financial-aid-tuition/scholarships.html" className="text-sm transition-opacity footer-link-animated">Scholarships</a>
                <a href="https://www.wgu.edu/student-experience/how-you-learn/faculty.html" className="text-sm transition-opacity footer-link-animated">Faculty</a>
                <a href="https://www.wgu.edu/student-experience/student-resources/communities.html" className="text-sm transition-opacity footer-link-animated">Student Communities</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Legal, Social, and Copyright */}
      <div className="lg:max-w-[1400px] mx-auto mb-12 flex flex-col lg:flex-row justify-between items-center gap-4">
        {/* Legal Links */}
        <div className="flex flex-wrap items-center gap-2 text-xs w-full">
          <a href="https://www.wgu.edu/privacy.html" className="text-[18px] opacity-90 hover:opacity-100 transition-opacity footer-link-animated">Privacy Policy</a>
          <span>|</span>
          <a href="https://www.wgu.edu/privacy/cookies.html" className="text-[18px] opacity-90 hover:opacity-100 transition-opacity footer-link-animated">Cookie Policy</a>
          <span>|</span>
          <a href="https://www.wgu.edu/contact.html" className="text-[18px] opacity-90 hover:opacity-100 transition-opacity footer-link-animated">Contact Us</a>
          <span>|</span>
          <a href="https://www.wgu.edu/sitemap.html" className="text-[18px] opacity-90 hover:opacity-100 transition-opacity footer-link-animated">Sitemap</a>
        </div>

        {/* Social Media Icons and Copyright */}
       <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
  {/* Social Media Icons */}
  <div className="flex gap-3">
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/edu/western-governors-university-19563"
      target="_blank"
      rel="noopener"
      aria-label="LinkedIn"
      className="w-10 h-10 rounded-full border-2 border-[#002147] flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
    >
      <img
        src="https://www.wgu.edu/content/dam/wgu-65-assets/web-sites/mvp/global/footer/linkedin-icon.svg"
        alt="LinkedIn"
        className="w-5 h-5"
      />
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/wgu.edu/"
      target="_blank"
      rel="noopener"
      aria-label="Facebook"
      className="w-10 h-10 rounded-full border-2 border-[#002147] flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
    >
      <img
        src="https://www.wgu.edu/content/dam/wgu-65-assets/web-sites/mvp/global/footer/facebook-icon.svg"
        alt="Facebook"
        className="w-5 h-5"
      />
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/westerngovernorsu/"
      target="_blank"
      rel="noopener"
      aria-label="Instagram"
      className="w-10 h-10 rounded-full border-2 border-[#002147] flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
    >
      <img
        src="https://www.wgu.edu/content/dam/wgu-65-assets/web-sites/mvp/global/footer/instagram-icon.svg"
        alt="Instagram"
        className="w-5 h-5"
      />
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/user/WesternGovernorsUniv"
      target="_blank"
      rel="noopener"
      aria-label="YouTube"
      className="w-10 h-10 rounded-full border-1 border-white/30 flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
    >
      <img
        src="https://www.wgu.edu/content/dam/wgu-65-assets/web-sites/mvp/global/footer/youtube-icon2.svg"
        alt="YouTube"
        className="w-5 h-5"
      />
    </a>

    {/* TikTok */}
    <a
      href="https://www.tiktok.com/@wgu"
      target="_blank"
      rel="noopener"
      aria-label="TikTok"
      className="w-10 h-10 rounded-full border-1 border-white/30 flex items-center justify-center bg-transparent hover:bg-white/10 transition-colors"
    >
      <img
        src="https://www.wgu.edu/content/dam/wgu-65-assets/web-sites/mvp/global/home-page/TikTok.svg"
        alt="TikTok"
        className="w-5 h-5"
      />
    </a>
  </div>

  {/* Copyright */}
  <p className="text-[19px] opacity-90 whitespace-nowrap">
    ©2026 WGU. All rights reserved.
  </p>
</div>


      </div>
    </>
  );
}
