"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    value: "",
    label: "Select your role",
  });

  const options = [
    { value: "", label: "Select your role" },
    { value: "client", label: "Client or Customer" },
    { value: "designer", label: "Fashion Designer" },
    { value: "others", label: "Others / Just Interested" },
  ];
  return (
    <section
      id="waitlist"
      className="relative bg-[#1E0801] text-white py-12 text-center px-4 overflow-hidden"
    >
      {/* BG Image */}
      <div className="absolute inset-0 bg-[url('/images/cta-bg.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      {/* CTA content */}
      <main className="relative z-10 container mx-auto space-y-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-4">Get Early Access</h2>
          <p className="md:w-[60%] md:text-xl mx-auto">
            Be one of the first 500 users to join, building a better systems for
            custom fashion. Get early access and help shape the platform.
          </p>
        </div>

        <div>
          <p >I am a.... ⟮Optional⟯</p>
          <div className="bg-white mx-auto w-full md:w-[35%] px-3 mt-2 rounded-lg">
            <div className="relative">
              {/* Dropdown Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-3 pr-10 text-left outline-none text-gray-500"
              >
                {selected.label}

                <ChevronDown
                  className={`absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                  {options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left text-gray-700 hover:bg-[#C76B4A] hover:text-white transition-colors"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white w-full md:w-[60%] mx-auto mb-2 border border-brand rounded-xl px-2 py-1">
            <input
              suppressHydrationWarning
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md text-black w-full flex-1 outline-none"
            />

            <Button className="bg-brand p-6 rounded-xl w-full text-sm md:text-lg sm:w-auto md:w-[200px]  cursor-pointer whitespace-nowrap">
              Join the Waitlist
            </Button>
          </div>

          <p className="md:w-[60%] mx-auto">
            We respect your privacy. No spam, just meaningful updates about
            SewSphere.
          </p>
        </div>
      </main>
    </section>
  );
}
