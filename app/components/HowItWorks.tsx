import { Users, Package } from "lucide-react";
import { GiNotebook } from "react-icons/gi";
import { CiLocationArrow1 } from "react-icons/ci";
import { LuUserCheck } from "react-icons/lu";
import { DisplayCard } from "@/components/ui/DisplayCard";

const items = [
  // for clients
  {
    icon: Users,
    title: "Browse Designers",
    desc: "Explore verified designers, view their portfolios, and read reviews from other clients.",
  },
  {
    icon: GiNotebook,
    title: "Submit Your Brief",
    desc: "Share your vision, measurements, and timeline through our clear, structured forms.",
  },
  {
    icon: CiLocationArrow1,
    title: "Track Progress",
    desc: "Get real-time updates at every milestone. Know exactly where your order is.",
  },
  {
    icon: Package,
    title: "Receive & Review",
    desc: "Get your outfit delivered on time. Leave a review to help the community.",
  },
  // for designers
  {
    icon: LuUserCheck,
    title: "Get Verified",
    desc: "Build trust instantly. Create a verified profile that helps serious clients find and trust you.",
  },
  {
    icon: GiNotebook,
    title: "Receive Clear Requests",
    desc: "No vague briefs. Every job comes with clear requirements, budget, and timeline upfront.",
  },
  {
    icon: CiLocationArrow1,
    title: "Manage Work & Payments",
    desc: "Less chaos, more focus. Track orders, milestones, and payments without chasing clients.",
  },
  {
    icon: Package,
    title: "Deliver & Grow",
    desc: "Turn work into reputation. Deliver great designs, earn reviews, and attract better clients consistently.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-6 px-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-24 bg-gray-300 py-[1px]" />

          <h2 className="text-2xl font-medium text-center whitespace-nowrap">
            How It works
          </h2>

          <span className="h-px w-24 bg-gray-300 py-[1px]" />
        </div>

        <div>
          <h3 className="text-2xl font-medium my-6">For Clients</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {items.slice(0, 4).map((item) => (
              <DisplayCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                Icon={item.icon}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-medium my-6">For Designers</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {items.slice(4, 8).map((item) => (
              <DisplayCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                Icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
