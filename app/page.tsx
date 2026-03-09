import ComingSoon from "./components/ComingSoon";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import WhatWeBuilding from "./components/WhatWeBuilding";
import WhoItsFor from "./components/WhoItsFor";
import WhySection from "./components/WhySection";

export default function Home() {
  return (
    <>
      {/* <ComingSoon /> */}
      <Navbar />
      <Hero />
      <WhySection />
      <WhatWeBuilding />
      <HowItWorks />
      <WhoItsFor />
      <CTA />
      <Footer />
    </>
  );
}
