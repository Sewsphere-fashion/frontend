"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLinks = [
  { name: "Why SewSphere", href: "#why" },
  { name: "How It Works", href: "#how" },
  { name: "Who It's For", href: "#who" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(window.location.hash || "#why");
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActiveHash(href);
    setOpen(false);

    // window.history.pushState(null, "", href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center"
        >
          <img src="/images/logo.png" alt="SewSphere Logo" />
          <img
            src="/images/nameLight.png"
            alt="SewSphere"
            className="block dark:hidden"
          />
          <img
            src="/images/nameDark.jpeg"
            alt="SewSphere"
            className="hidden dark:block"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          {NavLinks.map((link, index) => {
            const isActive = activeHash === link.href;

            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "relative py-1 transition-colors",
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary",
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 -bottom-[3px] h-[2px] w-full bg-primary" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNavClick("#waitlist")}
          className="hidden md:inline-flex bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm"
        >
          Join the Waitlist
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white  border-t">
          <nav className="flex flex-col items-center px-6 py-4 space-y-4 text-sm">
            {NavLinks.map((link, index) => {
              const isActive = activeHash === link.href;

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative py-1 transition-colors",
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-[3px] h-[2px] w-full bg-primary" />
                  )}
                </button>
              );
            })}

            <button
              onClick={() => handleNavClick("#waitlist")}
              className="bg-primary text-primary-foreground text-center py-2 rounded-md w-full"
            >
              Join the Waitlist
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
