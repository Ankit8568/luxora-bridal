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
      {
        name: "Bridal Makeup Masterclass",
        href: "#academy",
      },
      {
        name: "Professional Makeup Course",
        href: "#academy",
      },
      {
        name: "Self-Grooming Course",
        href: "#academy",
      },
      {
        name: "Advanced Makeup Training",
        href: "#academy",
      },
    ],
  },

  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [openMobileDropdown, setOpenMobileDropdown] =
    useState<string | null>(null);

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
      window.removeEventListener(
        "scroll",
        handleActiveSection
      );

      window.removeEventListener(
        "resize",
        handleActiveSection
      );
    };
  }, []);

  // LOCK PAGE WHEN MOBILE MENU IS OPEN
  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // CLOSE MOBILE MENU
  const closeMobileMenu = (sectionId: string) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
    setOpenMobileDropdown(null);
  };

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
          scrolled || menuOpen
            ? "border-b border-black/10 bg-[#f8f4ef]/95 shadow-[0_8px_40px_rgba(33,27,24,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="container-custom flex h-[72px] items-center justify-between sm:h-20 md:h-24">
          {/* LOGO */}
          <a
            href="#home"
            onClick={() => closeMobileMenu("home")}
            aria-label="Luxora home"
            className="relative z-[60] font-display text-[1.8rem] font-semibold tracking-[-0.03em] sm:text-3xl md:text-4xl"
          >
            Luxora
            <span className="text-[var(--accent)]">
              .
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              const sectionId =
                item.href.replace("#", "");

              const isActive =
                activeSection === sectionId;

              const hasSubmenu =
                item.submenu !== undefined;

              return (
                <div
                  key={item.name}
                  className="group relative"
                >
                  <a
                    href={item.href}
                    onClick={() =>
                      setActiveSection(sectionId)
                    }
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

                        {item.submenu?.map(
                          (subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() =>
                                setActiveSection(
                                  sectionId
                                )
                              }
                              className="group/item flex items-center justify-between rounded-xl px-4 py-3 text-sm text-[#211b18]/70 transition-all duration-300 hover:bg-[#eee4db] hover:text-[#211b18]"
                            >
                              {subItem.name}

                              <ArrowUpRight
                                size={15}
                                className="opacity-0 transition-all duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                              />
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* DESKTOP BOOK BUTTON */}
          <a
            href="#contact"
            onClick={() =>
              setActiveSection("contact")
            }
            className="group hidden items-center gap-3 rounded-full bg-[#211b18] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#d9b5a5] hover:text-[#211b18] lg:flex"
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
            onClick={() => {
              setMenuOpen(
                (previous) => !previous
              );

              setOpenMobileDropdown(null);
            }}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/30 text-[#211b18] backdrop-blur-md sm:h-11 sm:w-11 lg:hidden"
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
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
              clipPath:
                "circle(0% at 92% 4%)",
            }}
            animate={{
              opacity: 1,
              clipPath:
                "circle(150% at 92% 4%)",
            }}
            exit={{
              opacity: 0,
              clipPath:
                "circle(0% at 92% 4%)",
            }}
            transition={{
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-40 overflow-y-auto bg-[#f1e9e1] px-5 pb-8 pt-24 sm:px-[5%] sm:pt-28 lg:hidden"
          >
            <div className="mx-auto flex min-h-full max-w-2xl flex-col">
              {/* MOBILE LINKS */}
              <div className="flex flex-1 flex-col justify-center py-4">
                {navigation.map(
                  (item, index) => {
                    const sectionId =
                      item.href.replace("#", "");

                    const isActive =
                      activeSection ===
                      sectionId;

                    const hasSubmenu =
                      item.submenu !==
                      undefined;

                    const dropdownOpen =
                      openMobileDropdown ===
                      item.name;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay:
                            0.08 +
                            index * 0.04,
                          duration: 0.4,
                        }}
                        className="border-b border-black/10"
                      >
                        <div className="flex items-center">
                          <a
                            href={item.href}
                            onClick={() =>
                              closeMobileMenu(
                                sectionId
                              )
                            }
                            className={`flex flex-1 items-center py-3 font-display text-[clamp(1.8rem,8vw,3.3rem)] leading-none transition-colors ${
                              isActive
                                ? "text-[#b98270]"
                                : "text-[#211b18]"
                            }`}
                          >
                            {item.name}
                          </a>

                          {hasSubmenu ? (
                            <button
                              type="button"
                              onClick={() =>
                                setOpenMobileDropdown(
                                  dropdownOpen
                                    ? null
                                    : item.name
                                )
                              }
                              aria-label={`Open ${item.name} options`}
                              aria-expanded={
                                dropdownOpen
                              }
                              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#b98270]"
                            >
                              <ChevronDown
                                size={21}
                                className={`transition-transform duration-300 ${
                                  dropdownOpen
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                          ) : (
                            <ArrowUpRight
                              size={20}
                              className={
                                isActive
                                  ? "rotate-45 text-[#b98270]"
                                  : "text-[#b98270]"
                              }
                            />
                          )}
                        </div>

                        {/* MOBILE DROPDOWN */}
                        <AnimatePresence>
                          {hasSubmenu &&
                            dropdownOpen && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                animate={{
                                  opacity: 1,
                                  height: "auto",
                                }}
                                exit={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-1 pb-4">
                                  {item.submenu?.map(
                                    (
                                      subItem
                                    ) => (
                                      <a
                                        key={
                                          subItem.name
                                        }
                                        href={
                                          subItem.href
                                        }
                                        onClick={() =>
                                          closeMobileMenu(
                                            sectionId
                                          )
                                        }
                                        className="flex items-center gap-3 rounded-xl bg-white/35 px-4 py-3 text-sm text-[#211b18]/70 transition-colors hover:bg-[#eee4db] hover:text-[#211b18]"
                                      >
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b98270]" />

                                        {
                                          subItem.name
                                        }
                                      </a>
                                    )
                                  )}
                                </div>
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }
                )}
              </div>

              {/* MOBILE BOOK BUTTON */}
              <a
                href="#contact"
                onClick={() =>
                  closeMobileMenu("contact")
                }
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#211b18] px-6 py-4 text-sm font-medium text-white"
              >
                Book Your Experience

                <ArrowUpRight size={17} />
              </a>

              {/* MOBILE BOTTOM TEXT */}
              <div className="mt-7 flex flex-col gap-2 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] sm:flex-row sm:justify-between">
                <span>Luxury Beauty</span>

                <span>
                  Bridal · Makeup · Academy
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}