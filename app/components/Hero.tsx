import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="container mx-auto gap-20 px-4 mb-12 mt-32 grid md:grid-cols-2 items-center">
            <div className="">
                <h2 className="text-[64px] font-bold mb-4 leading-[72px]">
                    Custom Fashion You <br /> Can Trust.
                </h2>
                <p className="text-gray-600 text-[24px] mb-6">
                    SewSphere connects clients with verified fashion <br /> designers for seamless
                     custom and ready-made outfits. <br /> -Nigeria First, Diaspora Next.
                </p>
                <div className="flex gap-4">
                    <Button className="bg-primary text-white px-8 py-6 rounded-md">
                        Join the Waitlist
                    </Button>
                    <Button className="border border-primary text-primary bg-transparent  px-8 py-6  rounded-md">
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
