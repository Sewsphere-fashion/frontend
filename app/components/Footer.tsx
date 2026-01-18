import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const socialLinks = [
  { id: "linkedin", Icon: SlSocialLinkedin, href: "#" },
  { id: "instagram", Icon: FaInstagram, href: "#" },
  { id: "tiktok", Icon: FaTiktok, href: "#" },
  { id: "facebook", Icon: FiFacebook, href: "#" },
  { id: "x", Icon: FaXTwitter, href: "#" },
];

export default function Footer() {
  return (
    <footer className="pt-8 px-6 md:px-12 container mx-auto">
      <section className="flex flex-col gap-6 md:flex-row md:justify-between">
          
          {/* Left side: */}
          <div className=" space-y-8">
            <img src="/images/logo2.png" alt="SewSphere Logo" />
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
              <h4 className="font-bold text-[#C76B4A] text-2xl">Quick Links</h4>
              <a href="#why" className="hover:text-[#C76B4A] hover:underline transition-colors duration-300">Why SewSphere</a>
              <a href="#what" className="hover:text-[#C76B4A] hover:underline transition-colors duration-300 ">What We're Building</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#C76B4A] text-2xl">Connect With Us</h4>
              <a href="mailto:hello@sewsphere.com" className="flex gap-2 items-center hover:text-[#C76B4A] hover:underline transition-colors duration-300"><CiMail /> hello@sewsphere.com</a>
            </div>
          </div>
      </section>

      {/* Bottom */}
      <div className="container mx-auto mt-6 border-t border-[#1A1A1A] py-6 px-4 text-sm text-[#1A1A1A] text-center md:flex md:justify-between md:items-center space-y-4 md:space-y-0">
        <p>
            © {new Date().getFullYear()} SewSphere. Building in public, one stitch
            at a time.
        </p>
        <p>Made with care for the fashion community</p>
      </div>
    </footer>
  );
}
