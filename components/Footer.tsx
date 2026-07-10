"use client";

import { Mail, Phone, MapPin, ArrowUp, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Academy", href: "#academy" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Bridal Makeup",
  "Party Makeup",
  "Soft Glam",
  "Royal Bridal",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#211b18] text-white">
      {/* DECORATIVE BACKGROUND TEXT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[18vw] leading-none text-white/[0.025]"
      >
        LUXORA
      </div>

      <div className="container-custom relative z-10 py-16 md:py-20">
        {/* TOP FOOTER CONTENT */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              aria-label="Luxora home"
              className="inline-block font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl"
            >
              Luxora
              <span className="text-[#d9b5a5]">.</span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60 md:text-base">
              Creating timeless bridal beauty, refined makeup experiences, and
              professional artistry for your most unforgettable moments.
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-[#d9b5a5] hover:bg-[#d9b5a5] hover:text-[#211b18]"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-[#d9b5a5] hover:bg-[#d9b5a5] hover:text-[#211b18]"
              >
                FB
              </a>
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#d9b5a5]">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {link.name}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#d9b5a5]">
              Our Services
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="w-fit text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#d9b5a5]">
              Contact
            </p>

            <div className="mt-6 space-y-5">
              <a
                href="tel:+918149246571"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[#d9b5a5]"
                />

                <span className="text-sm text-white/60 transition-colors duration-300 group-hover:text-white">
                  +91 81492 46571
                </span>
              </a>

              <a
                href="mailto:hello@luxora.com"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#d9b5a5]"
                />

                <span className="break-all text-sm text-white/60 transition-colors duration-300 group-hover:text-white">
                  hello@luxora.com
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#d9b5a5]"
                />

                <p className="text-sm leading-6 text-white/60">
                  Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-white/45">
                © {currentYear} Luxora. All rights reserved.
              </p>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                <a
                  href="#"
                  className="text-xs text-white/35 transition-colors duration-300 hover:text-white"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="text-xs text-white/35 transition-colors duration-300 hover:text-white"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>

            <a
              href="#home"
              className="group inline-flex w-fit items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-white"
            >
              Back to top

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#d9b5a5] group-hover:bg-[#d9b5a5] group-hover:text-[#211b18]">
                <ArrowUp
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}