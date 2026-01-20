"use client"

import { useState } from "react" 
import Link from "next/link"
import { Menu, X } from "lucide-react" 
import { cn } from "@/lib/utils"

const NavLinks = [
    { name: "Why SewSphere", href: "#why" },
    { name: "How It Works", href: "#how" },
    { name: "Who It's For", href: "#who" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <img src="/images/logo2.png" alt="SewSphere Logo" className="hidden md:block" />
                <img src="/images/logoH.png" alt="SewSphere Logo" className="md:hidden" />

                {/* Desktop Navigation */}
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
                                        : "text-muted-foreground hover:text-primary"
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

                <div className="flex items-center gap-4">
                    <button className="hidden md:block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
                        Join the Waitlist
                    </button>

                    {/* Mobile Toggle Button */}
                    <button 
                        className="md:hidden p-2 text-muted-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t p-6 flex flex-col gap-4 shadow-lg">
                    {NavLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-muted-foreground hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-md text-sm font-medium">
                        Join the Waitlist
                    </button>
                </div>
            )}
        </header>
    )
}