import { Package } from "lucide-react";
import { VscWorkspaceUntrusted } from "react-icons/vsc";
import { TbMessage2Off } from "react-icons/tb";
import { PiTreeStructureLight } from "react-icons/pi";
import { DisplayCard } from "@/components/ui/DisplayCard";

const items = [
  {
    icon: VscWorkspaceUntrusted,
    title: "Lack of Trust",
    desc: "Clients fear paying without certainty of delivery or quality.",
  },
  {
    icon: TbMessage2Off,
    title: "Poor Communication",
    desc: "Measurements, expectations, and updated are often unclear or scattered.",
  },
  {
    icon: PiTreeStructureLight,
    title: "No Structure",
    desc: "Payments, timelines break confidence on both sides.",
  },
  {
    icon: Package,
    title: "Delivery Stress",
    desc: "Delays and uncertainty break confidence on both sides.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="py-8 px-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="h-px w-24 bg-gray-300 py-[1px]" />

          <h2 className="text-2xl font-medium text-center whitespace-nowrap">
            Why SewSphere Exists
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
