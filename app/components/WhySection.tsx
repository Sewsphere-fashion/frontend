import { Package } from "lucide-react"
import { VscWorkspaceUntrusted } from "react-icons/vsc";
import { TbMessage2Off } from "react-icons/tb";
import { PiTreeStructureLight } from "react-icons/pi";




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
]

export default function WhySection() {
    return (
        <section id="why" className="py-8 px-6">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className="h-px w-24 bg-gray-300 py-[1px]" />

                    <h3 className="text-2xl font-medium text-center whitespace-nowrap">
                        Why SewSphere Exists
                    </h3>

                    <span className="h-px w-24 bg-gray-300 py-[1px]" />
                </div>


                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {items.map((item) => {
                        const Icon = item.icon

                        return (
                            <div
                                key={item.title}
                                className="bg-white p-6 hover:bg-[#F5EFE6] rounded-lg shadow-md"
                            >
                                {/* Icon + Title */}
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-primary">
                                        <Icon className="h-5 w-5 text-white" />
                                    </div>

                                    <h4 className="font-medium text-sm leading-snug">
                                        {item.title}
                                    </h4>
                                    
                                </div>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
