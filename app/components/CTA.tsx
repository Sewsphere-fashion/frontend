export default function CTA() {
    return (
        <section className="bg-dark text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold mb-4">Get Early Access</h3>
                <p className="mb-6 text-gray-300">
                    Join our waitlist to be among the first to use SewSphere.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input
                        suppressHydrationWarning
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-3 rounded-md text-black w-full sm:w-80"
                    />
                    <button className="bg-brand px-6 py-3 rounded-md">
                        Join Waitlist
                    </button>
                </div>
            </div>
        </section>
    )
}
