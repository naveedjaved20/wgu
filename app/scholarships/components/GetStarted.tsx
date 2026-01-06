export default function GetStarted() {
  return (
    <section className="bg-[#003057] text-white p-8 md:p-12 rounded-lg mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Get Started in Two Simple Steps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white text-gray-900 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-[#003057] mb-4">Step 1: Apply for Admission</h3>
          <p className="text-sm leading-relaxed text-gray-600">
            To be considered for WGU scholarships, you must be admitted to WGU. Complete your application for admission today.
          </p>
        </div>
        <div className="bg-white text-gray-900 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-[#003057] mb-4">Step 2: Apply for Scholarships</h3>
          <p className="text-sm leading-relaxed text-gray-600">
            To access the scholarship application, you will need your WGU student ID number, which you'll receive after applying for admission.
          </p>
        </div>
      </div>
    </section>
  );
}

