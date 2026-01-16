import { ArrowBigDownDash } from "lucide-react"

const items = [
    {
        icon: ArrowBigDownDash,
        title: "Verified Fashion Designers",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rerum repudiandae aperiam.",
    },
    {
        icon: ArrowBigDownDash,
        title: "Clear measurements & brief",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rerum repudiandae aperiam.",
    },
    {
        icon: ArrowBigDownDash,
        title: "Structured payments and timeline",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rerum repudiandae aperiam.",
    },
    {
        icon: ArrowBigDownDash,
        title: "Order tracking & delivery",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rerum repudiandae aperiam.",
    },
]

export default function WhatWeBuilding() {
    return (
        <section className="py-4">
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
