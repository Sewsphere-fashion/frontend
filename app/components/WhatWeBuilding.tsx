import { ShieldCheck, MessageCircle, Package } from "lucide-react";
import { PiTreeStructureLight } from "react-icons/pi";
import { DisplayCard } from "@/components/ui/DisplayCard";

const items = [
  {
    icon: ShieldCheck,
    title: "Verified Fashion Designers",
    desc: "Every designer is vetted and verified before joining the platform.",
  },
  {
    icon: MessageCircle,
    title: "Clear measurements & brief",
    desc: "Standardized forms ensure nothing gets lost in translation.",
  },
  {
    icon: PiTreeStructureLight,
    title: "Structured payments and timeline",
    desc: "Milestone-based payments protect both clients and designers.",
  },
  {
    icon: Package,
    title: "Order tracking & delivery",
    desc: "Know exactly where your order is at every stage of the process.",
  },
];

export default function WhatWeBuilding() {
  return (
    <section id="what" className="py-8 px-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="h-px w-24 bg-gray-300 py-[1px]" />

          <h2 className="text-2xl font-medium text-center whitespace-nowrap">
            What We're Building
          </h2>

          <span className="h-px w-24 bg-gray-300 py-[1px]" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <DisplayCard
              key={item.title}
              title={item.title}
              desc={item.desc}
              Icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
