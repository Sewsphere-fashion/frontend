import { ShieldCheck, MessageCircle, Package   } from "lucide-react"
import { PiTreeStructureLight } from "react-icons/pi";


const items = [
    {
        icon: ShieldCheck ,
        title: "Verified Fashion Designers",
        desc: "Every designer is vetted and verified before joining the platform.",
    },
    {
        icon: MessageCircle ,
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
]

export default function WhatWeBuilding() {
    return (
        <section id="what" className="py-4">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className="h-px w-24 bg-gray-300 py-[1px]" />

                    <h3 className="text-2xl font-medium text-center whitespace-nowrap">
                        What We're Building
                    </h3>

                    <span className="h-px w-24 bg-gray-300 py-[1px]" />
                </div>


                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {items.map((item) => {
                        const Icon = item.icon

                        return (
                            <div
                                key={item.title}
                                className="bg-white border p-6 hover:border hover:border-primary rounded-lg shadow-md"
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
