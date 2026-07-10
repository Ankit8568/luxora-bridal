"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },

  {
    name: "Services",
    href: "#services",
    submenu: [
  { name: "Bridal Makeup", href: "#bridal-makeup" },
  { name: "Party Makeup", href: "#party-makeup" },
],
  },

  { name: "Gallery", href: "#gallery" },

  {
    name: "Academy",
    href: "#academy",
    submenu: [
      { name: "Bridal Makeup Masterclass", href: "#academy" },
      { name: "Professional Makeup Course", href: "#academy" },
      { name: "Self-Grooming Course", href: "#academy" },
      { name: "Advanced Makeup Training", href: "#academy" },
    ],
  },

  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // NAVBAR BACKGROUND ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // DETECT CURRENT ACTIVE SECTION
  useEffect(() => {
    const sectionIds = navigation.map((item) =>
      item.href.replace("#", "")
    );

    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleActiveSection();

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
      window.removeEventListener("resize", handleActiveSection);
    };
  }, []);

  // LOCK PAGE SCROLL WHEN MOBILE MENU IS OPEN
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-black/10 bg-[#f8f4ef]/90 shadow-[0_8px_40px_rgba(33,27,24,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="container-custom flex h-20 items-center justify-between md:h-24">

          {/* LOGO */}
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            aria-label="Luxora home"
            className="relative z-[60] font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
          >
            Luxora
            <span className="text-[var(--accent)]">.</span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const hasSubmenu = item.submenu;

              return (
                <div
                  key={item.name}
                  className="group relative"
                >
                  <a
                    href={item.href}
                    onClick={() => setActiveSection(sectionId)}
                    className={`relative flex items-center gap-1.5 py-3 text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-300 ${
                      isActive
                        ? "font-semibold text-[#211b18]"
                        : "text-[#211b18]/70 hover:text-[#211b18]"
                    }`}
                  >
                    {item.name}

                    {hasSubmenu && (
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    )}

                    <span
                      className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#b98270] transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>

                  {/* DESKTOP DROPDOWN */}
                  {hasSubmenu && (
                    <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                      <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#fffaf5] p-2 shadow-[0_20px_60px_rgba(33,27,24,0.15)]">
                        <p className="px-4 pb-3 pt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#b98270]">
                          {item.name === "Services"
                            ? "Our Services"
                            : "Learn With Luxora"}
                        </p>

                        {item.submenu?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() =>
                              setActiveSection(sectionId)
                            }
                            className="group/item flex items-center justify-between rounded-xl px-4 py-3 text-sm text-[#211b18]/70 transition-all duration-300 hover:bg-[#eee4db] hover:text-[#211b18]"
                          >
                            {subItem.name}

                            <ArrowUpRight
                              size={15}
                              className="opacity-0 transition-all duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* DESKTOP BOOK NOW BUTTON */}
          <a
            href="#contact"
            onClick={() => setActiveSection("contact")}
            className="group hidden items-center gap-3 rounded-full bg-[#211b18] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#d9b5a5] hover:text-[#211b18] focus:bg-[#d9b5a5] focus:text-[#211b18] active:bg-[#cfa896] active:text-[#211b18] lg:flex"
          >
            Book Now

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-black/15 lg:hidden"
          >
            {menuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "circle(0% at 90% 5%)",
            }}
            animate={{
              opacity: 1,
              clipPath: "circle(150% at 90% 5%)",
            }}
            exit={{
              opacity: 0,
              clipPath: "circle(0% at 90% 5%)",
            }}
            transition={{
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-40 min-h-screen overflow-y-auto bg-[#f1e9e1] px-[5%] pb-10 pt-28 lg:hidden"
          >
            <div className="flex min-h-full flex-col">

              {/* MOBILE NAVIGATION */}
              <div className="flex flex-1 flex-col justify-center">
                <div className="flex flex-col">
                  {navigation.map((item, index) => {
                    const sectionId = item.href.replace("#", "");
                    const isActive =
                      activeSection === sectionId;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{
                          opacity: 0,
                          y: 30,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.1 + index * 0.05,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="border-b border-black/10"
                      >
                        <a
                          href={item.href}
                          onClick={() => {
                            setActiveSection(sectionId);
                            setMenuOpen(false);
                          }}
                          className={`group flex items-center justify-between py-4 transition-colors duration-300 ${
                            isActive
                              ? "text-[#b98270]"
                              : "text-[#211b18]"
                          }`}
                        >
                          <span className="font-display text-[clamp(2.3rem,10vw,4rem)] leading-none">
                            {item.name}
                          </span>

                          {item.submenu ? (
                            <ChevronDown
                              size={22}
                              className="text-[#b98270]"
                            />
                          ) : (
                            <ArrowUpRight
                              size={22}
                              className="text-[#b98270]"
                            />
                          )}
                        </a>

                        {/* MOBILE SUBMENU */}
                        {item.submenu && (
                          <div className="grid grid-cols-1 gap-1 pb-4 sm:grid-cols-2">
                            {item.submenu.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => {
                                  setActiveSection(sectionId);
                                  setMenuOpen(false);
                                }}
                                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#211b18]/60 transition-colors duration-300 hover:bg-[#eee4db] hover:text-[#211b18]"
                              >
                                <span className="h-1 w-1 rounded-full bg-[#b98270]" />

                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* MOBILE MENU BOTTOM TEXT */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="flex items-end justify-between pt-8 text-xs uppercase tracking-[0.15em] text-[var(--muted)]"
              >
                <span>Luxury Beauty</span>

                <span>Bridal · Makeup · Academy</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}