"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

const NavLinks = [
    { name: "Why SewSphere", href: "#why" },
    { name: "How It Works", href: "#how" },
    { name: "Who It's For", href: "#who" },
]

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <img src="/images/logo2.png" alt="SewSphere Logo" />


                <nav className="hidden md:flex gap-6 text-sm">
                    {NavLinks.map((link, index) => {
                        const isActive = index === 0

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative py-1 transition-colors",
                                    isActive
                                        ? "text-primary font-medium"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {link.name}

                                {isActive && (
                                    <span className="absolute left-0 -bottom-[3px] h-[2px] w-full bg-primary" />
                                )}
                            </Link>
                        )
                    })}
                </nav>

                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
                    Join the Waitlist
                </button>
            </div>
        </header>
    )
}
