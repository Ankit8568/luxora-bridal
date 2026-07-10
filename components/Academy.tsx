"use client";

import { motion } from "framer-motion";

export default function Academy() {
  return (
    <section
      id="academy"
      className="relative overflow-hidden bg-[#eee4db] py-24"
    >
      <div className="container-custom">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
          Learn the Art
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-display max-w-4xl text-5xl leading-tight md:text-7xl"
        >
          Master the art of makeup with expert guidance.
        </motion.h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Learn professional makeup techniques through personalized training,
          practical experience, and expert guidance designed for aspiring makeup
          artists.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* FIRST COURSE CARD */}
          <div className="rounded-[2rem] bg-[#211b18] p-10 text-white">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">
              Professional Course
            </p>

            <h3 className="mt-4 font-display text-4xl">
              Bridal Makeup Masterclass
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-white/70">
              Learn essential bridal makeup techniques, skin preparation,
              product knowledge, eye makeup, and complete bridal
              transformations.
            </p>
          </div>

          {/* SECOND COURSE CARD */}
          <div className="rounded-[2rem] border border-black/10 bg-[#f8f4ef] p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
              Advanced Course
            </p>

            <h3 className="mt-4 font-display text-4xl">
              Professional Makeup Artistry
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
              Develop advanced makeup skills for bridal, party, editorial, and
              professional beauty looks with practical hands-on training.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-[var(--foreground)] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[var(--accent)]"
            >
              Enquire About Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}