"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative scroll-mt-20 overflow-hidden bg-[#f8f4ef] py-16 sm:py-20 md:py-24"
    >
      <div className="container-custom">
        {/* SECTION LABEL */}
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--accent)] sm:text-sm sm:tracking-[0.3em]">
          Gallery
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
          A glimpse into our world of beauty and artistry.
        </motion.h2>

        {/* GALLERY GRID */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:mt-16 md:grid-cols-3">
          {/* FIRST IMAGE */}
          <motion.div
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
            className="group relative h-[420px] overflow-hidden rounded-[1.5rem] sm:h-[500px] sm:rounded-[2rem]"
          >
            <img
              src="/images/soft-glam-bride.jpeg"
              alt="Soft glam bridal makeup"
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-6 sm:p-8">
              <div className="text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs sm:tracking-[0.25em]">
                  Bridal Collection
                </p>

                <h3 className="mt-2 font-display text-3xl">
                  Soft Glam
                </h3>
              </div>
            </div>
          </motion.div>

          {/* SECOND IMAGE */}
          <motion.div
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
            className="group relative h-[420px] overflow-hidden rounded-[1.5rem] sm:h-[500px] sm:rounded-[2rem]"
          >
            <img
              src="/images/makeup-closeup.jpeg"
              alt="Professional makeup closeup"
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-6 sm:p-8">
              <div className="text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs sm:tracking-[0.25em]">
                  Beauty Details
                </p>

                <h3 className="mt-2 font-display text-3xl">
                  Flawless Finish
                </h3>
              </div>
            </div>
          </motion.div>

          {/* THIRD IMAGE */}
          <motion.div
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
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative h-[420px] overflow-hidden rounded-[1.5rem] sm:h-[500px] sm:rounded-[2rem]"
          >
            <img
              src="/images/royal-bride.jpeg"
              alt="Royal bridal makeup"
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-6 sm:p-8">
              <div className="text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs sm:tracking-[0.25em]">
                  Signature Bridal
                </p>

                <h3 className="mt-2 font-display text-3xl">
                  Royal Elegance
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}