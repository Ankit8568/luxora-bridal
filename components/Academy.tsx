"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Academy() {
  return (
    <section
      id="academy"
      className="relative scroll-mt-20 overflow-hidden bg-[#eee4db] py-16 sm:py-20 md:py-24"
    >
      <div className="container-custom">
        {/* SECTION LABEL */}
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--accent)] sm:text-sm sm:tracking-[0.3em]">
          Learn the Art
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
          Master the art of makeup with expert guidance.
        </motion.h2>

        {/* SECTION DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:mt-8 sm:text-lg sm:leading-8"
        >
          Learn professional makeup techniques through personalized training,
          practical experience, and expert guidance designed for aspiring makeup
          artists.
        </motion.p>

        {/* COURSE CARDS */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:mt-16 md:grid-cols-2">
          {/* FIRST COURSE — BRIDAL MAKEUP MASTERCLASS */}
          <motion.div
            id="bridal-masterclass"
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
            className="group flex scroll-mt-28 flex-col rounded-[1.5rem] bg-[#211b18] p-6 text-white sm:scroll-mt-32 sm:rounded-[2rem] sm:p-8 lg:p-10"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs sm:tracking-[0.25em]">
              Professional Course
            </p>

            <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Bridal Makeup Masterclass
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Learn essential bridal makeup techniques, skin preparation,
              product knowledge, eye makeup, and complete bridal
              transformations.
            </p>

            <a
              href="#contact"
              className="group/button mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-[#d9b5a5] hover:bg-[#d9b5a5] hover:text-[#211b18] sm:mt-8 sm:w-fit"
            >
              Enquire Now

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* SECOND COURSE — PROFESSIONAL MAKEUP ARTISTRY */}
          <motion.div
            id="professional-makeup-course"
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
            className="group flex scroll-mt-28 flex-col rounded-[1.5rem] border border-black/10 bg-[#f8f4ef] p-6 sm:scroll-mt-32 sm:rounded-[2rem] sm:p-8 lg:p-10"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] sm:text-xs sm:tracking-[0.25em]">
              Advanced Course
            </p>

            <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Professional Makeup Artistry
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Develop advanced makeup skills for bridal, party, editorial, and
              professional beauty looks with practical hands-on training.
            </p>

            <a
              href="#contact"
              className="group/button mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#211b18] px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#d9b5a5] hover:text-[#211b18] sm:mt-8 sm:w-fit sm:px-7"
            >
              Enquire About Courses

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}