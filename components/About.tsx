"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#eee4db] py-24"
    >
      <div className="container-custom">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
          About the Artist
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
          Creating timeless beauty for your most unforgettable moments.
        </motion.h2>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-[500px] w-full max-w-md overflow-hidden rounded-t-full"
          >
            <Image
              src="/images/soft-glam-bride.jpeg"
              alt="Elegant bridal makeup"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT SIDE — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-xl"
          >
            <p className="text-lg leading-8 text-[var(--muted)]">
              Every bride deserves to feel confident, radiant and completely
              herself. Our approach combines refined artistry, personalized
              attention and timeless elegance to create a look that feels
              uniquely yours.
            </p>

            <div className="mt-10 flex gap-12">
              <div>
                <span className="font-display text-5xl font-semibold">
                  10+
                </span>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  Years of Experience
                </p>
              </div>

              <div>
                <span className="font-display text-5xl font-semibold">
                  500+
                </span>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  Happy Brides
                </p>
              </div>
            </div>

            <p className="mt-10 font-display text-2xl italic text-[var(--accent)]">
              Beauty that feels authentically yours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}