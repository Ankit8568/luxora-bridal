"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#211b18] py-24 text-white"
    >
      <div className="container-custom">
        {/* SECTION HEADING */}
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d9b5a5]">
          Selected Work
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl font-display text-5xl leading-tight md:text-7xl"
        >
          Every face tells a story. Every look becomes a memory.
        </motion.h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
          Explore a selection of signature bridal transformations and refined
          beauty looks created with attention to individuality, detail, and
          timeless elegance.
        </p>

        {/* PORTFOLIO GRID */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* FIRST PORTFOLIO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative h-[650px] overflow-hidden rounded-[2rem]"
          >
            <img
              src="/images/hero-bride.jpeg"
              alt="Luxury bridal makeup portfolio"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-8 md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Bridal Story 01
                </p>

                <h3 className="mt-2 font-display text-4xl md:text-5xl">
                  The Timeless Bride
                </h3>
              </div>

              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={21} />
              </span>
            </div>
          </motion.div>

          {/* SECOND PORTFOLIO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative h-[650px] overflow-hidden rounded-[2rem] lg:mt-24"
          >
            <img
              src="/images/soft-glam-bride.jpeg"
              alt="Luxury party makeup portfolio"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-8 md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Beauty Story 02
                </p>

                <h3 className="mt-2 font-display text-4xl md:text-5xl">
                  Evening Glamour
                </h3>
              </div>

              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={21} />
              </span>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center"
        >
          <p className="max-w-xl font-display text-3xl leading-tight text-white/80 md:text-4xl">
            Ready to create a beauty experience that feels uniquely yours?
          </p>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-[#211b18] transition-all duration-300 hover:bg-[#d9b5a5]"
          >
            Book Your Experience

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}