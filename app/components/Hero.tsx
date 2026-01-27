import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="container mx-auto gap-20 px-6 mb-12 mt-24 grid md:grid-cols-2 items-center">
            <div className="">
                <h2 className=" text-[#181818] text-[32px] md:text-[5xl] lg:text-[64px] font-semibold mb-4 leading-tight">
                    Custom Fashion You Can Trust.
                </h2>
                <p className="text-[#1A1A1A] text-[18px] mb-6">
                    SewSphere connects clients with verified fashion designers for seamless
                     custom and ready-made outfits. -Nigeria First, Diaspora Next.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-primary text-white px-8 py-6 rounded-md">
                        Join the Waitlist
                    </Button>
                    <Button className="border border-primary text-primary bg-transparent hover:text-white px-8 py-6  rounded-md">
                        See How It Works
                    </Button>
                </div>
            </div>

            {/* Phone Mockups */}
            <div className="flex justify-center">
                <img src='/images/mobileImage.png' width='500px'  />
            </div>
        </section>
    )
}
