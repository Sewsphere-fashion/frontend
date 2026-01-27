export default function CTA() {
  return (
    <section className="relative bg-[#1E0801] text-white py-12 text-center px-4 overflow-hidden">

      {/* BG Image */}
      <div className="absolute inset-0 bg-[url('/images/cta-bg.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      {/* CTA content */}
      <main className="relative z-10 container mx-auto space-y-8">
          <div className="container mx-auto">
            <h3 className="text-4xl font-semibold mb-4">Get Early Access</h3>
            <p className="md:w-[60%] md:text-xl mx-auto">
              Be one of the first 500 users to join, building a better systems for
              custom fashion. Get early access and help shape the platform.
            </p>
          </div>

          <div>
            <p>I am a.... ⟮Optional⟯</p>
            <div className="bg-white mx-auto w-full md:w-[35%] px-3 mt-2 rounded-lg">
              <select className="outline-none text-dark py-3 w-full">
                <option value="">Select your role</option>
                <option value="client">Client or Customer</option>
                <option value="designer">Fashion Designer</option>
                <option value="others">Others / Just Interested</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex gap-4 justify-between px-2 py-[2px] bg-white w-full md:w-[60%] mx-auto mb-2 border border-brand rounded-xl">
              <input
                suppressHydrationWarning
                type="email"
                placeholder="Enter your email"
                className="py-3 rounded-md text-black w-full sm:w-80 outline-none"
              />
              <button className="bg-[#C76B4A] px-6 py-3 rounded-xl w-[200px] cursor-pointer ">
                Join the Waitlist
              </button>
            </div>
            <p className=" text-xs md:text-sm md:w-[60%] mx-auto">
              We respect your privacy. No spam, just meaningful updates about
              SewSphere.
            </p>
          </div>
      </main>
    </section>
  );
}
