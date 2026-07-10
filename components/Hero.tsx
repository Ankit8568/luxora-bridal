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
            y: 100,
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
            scale: 1.08,
            duration: 1.5,
          },
          "-=1.2"
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[var(--background)] pt-20 md:pt-24"
    >
      {/* DECORATIVE BACKGROUND TEXT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[46%] z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[28vw] leading-none text-black/[0.025]"
      >
        LUXORA
      </div>

      <div className="container-custom relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-8">
        {/* LEFT CONTENT */}
        <div className="relative z-20 max-w-2xl">
          <p
            ref={eyebrowRef}
            className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-[var(--accent)] md:text-sm"
          >
            <span className="h-px w-10 bg-[var(--accent)]" />
            Luxury Bridal Artistry
          </p>

          <div className="overflow-hidden pb-3">
            <h1
              ref={titleRef}
              className="font-display text-[clamp(4.5rem,9vw,9.5rem)] font-medium leading-[0.78] tracking-[-0.055em]"
            >
              Beauty,
              <br />
              <span className="italic text-[var(--accent)]">
                Elevated.
              </span>
            </h1>
          </div>

          <p
            ref={descriptionRef}
            className="mt-8 max-w-lg text-base leading-8 text-[var(--muted)] md:text-lg"
          >
            Bespoke bridal beauty and refined artistry designed to celebrate
            your individuality, confidence and unforgettable moments.
          </p>

          {/* HERO BUTTONS */}
          <div
            ref={buttonsRef}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            {/* BOOK YOUR EXPERIENCE BUTTON */}
            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#211b18] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#d9b5a5] hover:text-[#211b18] focus:bg-[#d9b5a5] focus:text-[#211b18] active:bg-[#cfa896] active:text-[#211b18]"
            >
              Book Your Experience

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* EXPLORE SERVICES BUTTON */}
            <a
              href="#services"
              className="group inline-flex w-fit items-center gap-3 rounded-full px-4 py-4 text-sm font-medium text-[#211b18] transition-colors duration-300 hover:text-[var(--accent)]"
            >
              Explore Services

              <span className="relative h-px w-10 overflow-hidden bg-black/20">
                <span className="absolute inset-0 -translate-x-full bg-[var(--accent)] transition-transform duration-500 group-hover:translate-x-0" />
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={imageRef}
          className="relative mx-auto h-[65vh] min-h-[520px] w-full max-w-[650px] overflow-hidden rounded-t-[14rem] rounded-b-[1.5rem] lg:h-[82vh]"
        >
          <Image
            src="/images/hero-bride.jpeg"
            alt="Luxury bridal makeup artistry"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 50vw"
            className="object-cover object-center transition-transform duration-[2000ms] hover:scale-[1.03]"
          />

          {/* SOFT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

          {/* IMAGE LABEL */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/70">
                Signature Collection
              </p>

              <p className="mt-1 font-display text-2xl italic">
                The Bridal Edit
              </p>
            </div>

            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 backdrop-blur-md">
              <ArrowUpRight size={18} />
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
        className="absolute bottom-7 left-[5%] z-20 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)] md:flex"
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