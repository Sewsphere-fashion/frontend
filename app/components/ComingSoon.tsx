"use client";

import { useEffect, useState } from "react";

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-03-04T23:59:59");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes dotPulse1 {
          0%,
          100% {
            opacity: 1;
          }
        }
        @keyframes dotPulse2 {
          0%,
          33.33% {
            opacity: 0;
          }
          33.34%,
          100% {
            opacity: 1;
          }
        }
        @keyframes dotPulse3 {
          0%,
          66.66% {
            opacity: 0;
          }
          66.67%,
          100% {
            opacity: 1;
          }
        }
        .dot-1 {
          animation: dotPulse1 3s infinite;
        }
        .dot-2 {
          animation: dotPulse2 3s infinite;
        }
        .dot-3 {
          animation: dotPulse3 3s infinite;
        }
      `}</style>
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#181818] mb-12">
            We're Coming Soon
            <span className="inline-flex">
              <span className="text-brand dot-1">.</span>
              <span className="text-brand dot-2">.</span>
              <span className="text-brand dot-3">.</span>
            </span>
          </h1>

          <div className="flex justify-center gap-4 md:gap-6 mb-12">
            {timeUnits.map((unit, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative bg-[#2B2B2B] text-white rounded-lg md:rounded-2xl w-20 h-20 md:w-28 md:h-28 flex items-center justify-center shadow-lg overflow-hidden ">
                  {/* Divider line */}
                  <div className="absolute top-1/2 left-0 h-1 bg-[#1A1A1ACC] -translate-y-1/2 z-20 flex items-center justify-between mx-[3%] w-[94%]">
                    <div className="w-[6px] h-[11.2px] rounded-[3px] bg-gradient-to-b from-[#BFBFBF] via-[#7A7A7A] to-[#E0E0E0]" />
                    <div className="w-[6px] h-[11.2px] rounded-[3px] bg-gradient-to-b from-[#BFBFBF] via-[#7A7A7A] to-[#E0E0E0]" />
                  </div>

                  <span className="relative z-10 text-4xl md:text-6xl font-bold">
                    {formatNumber(unit.value)}
                  </span>
                </div>

                <span className="text-black font-semibold text-sm md:text-base mt-3">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[#525252] text-lg md:text-xl">
            Exciting experience coming from{" "}
            <span className="font-bold">SewSphere</span>, stay glued.
          </p>
        </div>
      </div>
    </>
  );
}
