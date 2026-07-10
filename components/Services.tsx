"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden bg-[var(--background)] py-16 sm:py-20 md:py-24"
    >
      <div className="container-custom">
        {/* SECTION LABEL */}
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--accent)] sm:text-sm sm:tracking-[0.3em]">
          What We Offer
        </p>

        {/* SECTION HEADING */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-display max-w-4xl text-[clamp(2.6rem,12vw,4rem)] leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Beauty experiences crafted for every special moment.
        </motion.h2>

        {/* SERVICES GRID */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:gap-8 md:mt-16 md:grid-cols-2">
          {/* FIRST CARD — BRIDAL MAKEUP */}
          <motion.div
            id="bridal-makeup"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative h-[430px] scroll-mt-28 overflow-hidden rounded-[1.5rem] sm:h-[500px] sm:scroll-mt-32 sm:rounded-[2rem] md:h-[550px]"
          >
            <img
              src="/images/bridal-services.jpeg"
              alt="Bridal makeup services"
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* DARK IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

            {/* CARD CONTENT */}
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs sm:tracking-[0.25em]">
                Signature Service
              </p>

              <h3 className="font-display text-3xl sm:text-4xl">
                Bridal Makeup
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                Timeless bridal artistry thoughtfully designed to enhance your
                natural beauty for your most unforgettable day.
              </p>
            </div>
          </motion.div>

          {/* SECOND CARD — PARTY MAKEUP */}
          <motion.div
            id="party-makeup"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative h-[430px] scroll-mt-28 overflow-hidden rounded-[1.5rem] sm:h-[500px] sm:scroll-mt-32 sm:rounded-[2rem] md:h-[550px]"
          >
            <img
              src="/images/party-makeup-new.jpeg"
              alt="Party makeup service"
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* DARK IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

            {/* CARD CONTENT */}
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs sm:tracking-[0.25em]">
                Glamour Service
              </p>

              <h3 className="font-display text-3xl sm:text-4xl">
                Party Makeup
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                Sophisticated and radiant makeup tailored for celebrations,
                parties, receptions and unforgettable evenings.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}