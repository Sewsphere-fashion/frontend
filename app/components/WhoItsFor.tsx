const sections = [
  {
    title: "For Clients",
    source: "/videos/whoItsFor1.mp4",
    text: "Order custom and ready-made fashion with confidence",
    desc: "Browse verified designers, share your vision, and track your order from brief to delivery. No more stress, no more uncertainty.",
  },
  {
    title: "For Designers",
    source: "/videos/whoItsFor2.mp4",
    text: "Focus on craft, not chaos",
    desc: "Get matched with serious clients, receive clear briefs, and get paid on time. Build your reputation on a platform that values your work.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who" className="py-16 container mx-auto px-4">
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className="h-px w-24 bg-gray-300 py-[1px]" />

        <h3 className="text-2xl font-medium text-center whitespace-nowrap">
          Who It's For
        </h3>

        <span className="h-px w-24 bg-gray-300 py-[1px]" />
      </div>

      <main className="grid lg:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="mb-12 relative h-[430px] md:h-[400px] overflow-hidden rounded-lg border border-[#C76B4A] shadow-[0_8px_16px_0_rgba(235,157,128,0.25)]"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            >
              <source src={section.source} type="video/mp4" />
            </video>

            {/* overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* texts */}
            <div className="relative p-4 md:p-6 flex flex-col gap-4 md:gap-6">
              <h2 className="text-primary text-2xl font-medium mb-4 ">
                {section.title}
              </h2>
              <p className="text-white text-[36px] md:text-[40px] leading-tight font-semibold mb-2 md:w-[85%]">
                {section.text}
              </p>
              <p className="text-[#F5EFE6] text-[20px] leading-tight">
                {section.desc}
              </p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}
