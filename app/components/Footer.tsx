import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const socialLinks = [
  {
    id: "linkedin",
    Icon: SlSocialLinkedin,
    href: "https://www.linkedin.com/company/sewsphere/",
  },
  {
    id: "instagram",
    Icon: FaInstagram,
    href: "https://www.instagram.com/sewsphere_official?igsh=MTRuaHZrNWV6ZzRiOA==",
  },
  { id: "tiktok", Icon: FaTiktok, href: "#" },
  {
    id: "facebook",
    Icon: FiFacebook,
    href: "https://www.facebook.com/share/1LW5SEZYuP/",
  },
  { id: "x", Icon: FaXTwitter, href: "#" },
];

export default function Footer() {
  return (
    <footer className="pt-10 px-6 md:px-12 container mx-auto">
      <section className="flex flex-col gap-6 md:flex-row md:justify-between">
        {/* Left side: */}
        <div className=" space-y-8">
          <div className="flex items-center">
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
          </div>
          <p className="font-light text-[#1A1A1A] w-[350px] lg:w-[450px]">
            Building trust in custom fashion through clarity, structure, and
            transparency. For designers and clients who deserve better systems.
          </p>
          {/* Social media links */}
          <div className="flex gap-4">
            {socialLinks.map(({ id, Icon, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Go to ${id}`}
                className="flex items-center justify-center w-14 h-14 rounded-md text-[#C76B4A] border border-[#C76B4A] hover:bg-[#C76B4A] hover:text-white hover:scale-110 hover:shadow-md transition-all duration-300 ease-in-out"
              >
                <Icon className="w-9 h-9" />
              </a>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-brand text-2xl">Quick Links</h4>
            <a
              href="#why"
              className="hover:text-brand hover:underline transition-colors duration-300"
            >
              Why SewSphere
            </a>
            <a
              href="#what"
              className="hover:text-brand hover:underline transition-colors duration-300 "
            >
              What We're Building
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-brand text-2xl">Connect With Us</h4>
            <a
              href="mailto:hello@sewsphere.com"
              className="flex gap-2 items-center hover:text-[#C76B4A] hover:underline transition-colors duration-300"
            >
              <CiMail /> hello@sewsphere.com
            </a>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <div className="container mx-auto mt-6 border-t border-[#4B598F80] py-6 px-4 text-xs text-[#1A1A1A] text-center md:flex md:justify-between md:items-center space-y-4 md:space-y-0">
        <p>
          © {new Date().getFullYear()} SewSphere. Building in public, one stitch
          at a time.
        </p>
        <p>Made with care for the fashion community</p>
      </div>
    </footer>
  );
}
