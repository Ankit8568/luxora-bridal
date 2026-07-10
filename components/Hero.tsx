"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from(eyebrowRef.current, {
          opacity: 0,
          y: 25,
          duration: 0.8,
          delay: 0.2,
        })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 80,
            duration: 1.2,
          },
          "-=0.5"
        )
        .from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.7"
        )
        .from(
          buttonsRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            scale: 1.06,
            duration: 1.5,
          },
          "-=1.1"
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen scroll-mt-20 overflow-hidden bg-[var(--background)] pt-[72px] sm:pt-20 md:pt-24"
    >
      {/* DECORATIVE BACKGROUND TEXT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[40vw] leading-none text-black/[0.025] sm:text-[34vw] lg:top-[46%] lg:text-[28vw]"
      >
        LUXORA
      </div>

      <div className="container-custom relative z-10 grid items-center gap-10 py-10 sm:gap-12 sm:py-12 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-8">
        {/* LEFT CONTENT */}
        <div className="relative z-20 max-w-2xl">
          {/* SMALL HEADING */}
          <p
            ref={eyebrowRef}
            className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--accent)] sm:mb-6 sm:text-xs sm:tracking-[0.32em] md:text-sm"
          >
            <span className="h-px w-7 shrink-0 bg-[var(--accent)] sm:w-10" />

            Luxury Bridal Artistry
          </p>

          {/* MAIN HEADING */}
          <div className="overflow-hidden pb-3">
            <h1
              ref={titleRef}
              className="font-display text-[clamp(3.7rem,19vw,6rem)] font-medium leading-[0.82] tracking-[-0.055em] sm:text-[clamp(5rem,14vw,7rem)] lg:text-[clamp(5.5rem,9vw,9.5rem)]"
            >
              Beauty,
              <br />

              <span className="italic text-[var(--accent)]">
                Elevated.
              </span>
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p
            ref={descriptionRef}
            className="mt-5 max-w-lg text-sm leading-7 text-[var(--muted)] sm:mt-7 sm:text-base sm:leading-8 md:mt-8 md:text-lg"
          >
            Bespoke bridal beauty and refined artistry designed to celebrate
            your individuality, confidence and unforgettable moments.
          </p>

          {/* HERO BUTTONS */}
          <div
            ref={buttonsRef}
            className="mt-7 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          >
            {/* BOOK YOUR EXPERIENCE */}
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#211b18] px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#d9b5a5] hover:text-[#211b18] focus:bg-[#d9b5a5] focus:text-[#211b18] active:bg-[#cfa896] active:text-[#211b18] sm:w-fit sm:justify-start sm:gap-4 sm:px-7"
            >
              Book Your Experience

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* EXPLORE SERVICES */}
            <a
              href="#services"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full px-4 py-3 text-sm font-medium text-[#211b18] transition-colors duration-300 hover:text-[var(--accent)] sm:w-fit sm:justify-start sm:py-4"
            >
              Explore Services

              <span className="relative h-px w-8 overflow-hidden bg-black/20 sm:w-10">
                <span className="absolute inset-0 -translate-x-full bg-[var(--accent)] transition-transform duration-500 group-hover:translate-x-0" />
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
  ref={imageRef}
  className="relative mx-auto h-[430px] w-full max-w-[520px] overflow-hidden rounded-t-[7rem] rounded-b-[1.5rem] sm:h-[520px] sm:rounded-t-[10rem] lg:h-[82vh] lg:min-h-[620px] lg:max-w-[650px] lg:rounded-t-[14rem]"
>
          <Image
  src="/images/hero-bride.jpeg"
  alt="Luxury bridal makeup artistry"
  fill
  priority
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
  className="object-cover object-[center_35%] transition-transform duration-[2000ms] lg:object-center lg:hover:scale-[1.03]"
/>

          {/* SOFT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          {/* IMAGE LABEL */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-6 sm:left-6 sm:right-6">
            <div>
              <p className="text-[8px] uppercase tracking-[0.22em] text-white/70 sm:text-[10px] sm:tracking-[0.28em]">
                Signature Collection
              </p>

              <p className="mt-1 font-display text-xl italic sm:text-2xl">
                The Bridal Edit
              </p>
            </div>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 backdrop-blur-md sm:h-12 sm:w-12">
              <ArrowUpRight size={17} />
            </span>
          </div>
        </div>
      </div>

      {/* FLOATING EXPERIENCE BADGE */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-24 left-[48%] z-20 hidden h-28 w-28 items-center justify-center rounded-full border border-black/10 bg-[#fffaf5]/85 text-center shadow-xl backdrop-blur-xl xl:flex"
      >
        <div>
          <span className="font-display text-3xl font-semibold">
            10+
          </span>

          <p className="mt-1 text-[9px] uppercase leading-4 tracking-[0.2em] text-[var(--muted)]">
            Years of
            <br />
            Artistry
          </p>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-[5%] z-20 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)] lg:flex"
      >
        <span>Scroll to discover</span>

        <motion.span
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={15} />
        </motion.span>
      </a>
    </section>
  );
}