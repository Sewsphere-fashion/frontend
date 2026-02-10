"use client";
import { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    value: "",
    label: "Select your role",
  });
  const [showToast, setShowToast] = useState(false);

  const options = [
    { value: "", label: "Select your role" },
    { value: "client", label: "Client or Customer" },
    { value: "designer", label: "Fashion Designer" },
    { value: "general", label: "Others / Just Interested" },
  ];

  const popupMessages = {
    general: {
      title: "You’re officially on the waitlist! 🎉",
      message:
        "Thanks for joining the SewSphere waitlist. Expect updates, sneak peaks, and early access as we get closer to launch. No spamming.",
    },
    client: {
      title: "You’re on the SewSphere waitlist! 🎉",
      message:
        "You’ll be among the first to explore verified fashion professionals and order outfits with confidence. We’ll notify you as soon as we’re ready. No spamming.",
    },
    designer: {
      title: "You’re on the SewSphere waitlist! 🎉",
      message:
        "You’ll be among the first designers to showcase your expertise and get recognised. We’ll notify you as soon as we’re ready. No spamming.",
    },
  };

  const handleJoinWaitlist = () => {
    setShowToast(true);
  };

  const getMessage = () => {
    return popupMessages[selected.value] || popupMessages.general;
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);
  return (
    <section
      id="waitlist"
      className="relative bg-[#1E0801] text-white py-14 text-center px-4 overflow-hidden"
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
          <p>I am a.... ⟮Optional⟯</p>
          <div className="bg-white mx-auto w-full md:w-[35%] px-3 mt-2 rounded-lg">
            <div className="relative">
              {/* Dropdown */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-3 pr-10 text-left outline-none text-black"
              >
                {selected.label}

                <ChevronDown
                  className={`absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-black transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-black hover:bg-[#C76B4A] hover:text-white transition-colors"
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

            <Button
              type="button"
              onClick={handleJoinWaitlist}
              className="bg-brand p-6 rounded-xl w-full text-sm md:text-lg sm:w-auto md:w-[200px]  cursor-pointer whitespace-nowrap"
            >
              Join the Waitlist
            </Button>
          </div>

          <p className="md:w-[60%] mx-auto">
            We respect your privacy. No spam, just meaningful updates about
            SewSphere.
          </p>
        </div>
      </main>

      {/* Popup */}
      {showToast && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full bg-[#87EDA1] px-8 py-3 relative animate-in fade-in zoom-in duration-200">

            {/* Close Button */}
            <button
              onClick={() => setShowToast(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="text-center space-y-4">
              <h3 className="text-xl font-medium text-[#0F766E]">
                {getMessage().title}
              </h3>
              <p className="text-[#181818] text-sm leading-relaxed">
                {getMessage().message}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
