import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[450px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/iconsImage/heroSection.jpeg"
          alt="Business header"
          fill
          className="object-cover"
          style={{
            objectPosition: "50% 15%",
          }}
          priority
        />
        {/* Custom Gradient Overlay - Only on left side */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90.13deg, #030031 .1%, rgba(0, 23, 49, 0) 50%)",
          }}
        ></div>
      </div>

      {/* Text Content Overlay - Left Aligned */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto w-full px-4 md:px-2">
          <div className="max-w-2xl text-white">
            <p
              className="uppercase tracking-wider mb-4 opacity-90"
              style={{
                fontSize: "16px",
                lineHeight: "28px",
                fontWeight: 700,
                textShadow: "2px 2px 5px #000",
              }}
            >
              SCHOLARSHIPS
            </p>
            <h1
              className="leading-tight"
              style={{
                fontSize: "55px",
                lineHeight: "58px",
                fontWeight: 500,
                textShadow: "2px 2px 5px #000",
              }}
            >
              Administrative <br />
              Professionals Scholarships
            </h1>
            <button className="mt-10 py-3 px-10 bg-white rounded-full text-sm font-semibold text-black transition-opacity">
              Apply Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
