"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#f8f4ef] py-24"
    >
      <div className="container-custom">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
          Gallery
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
          A glimpse into our world of beauty and artistry.
        </motion.h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {/* FIRST IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group relative h-[500px] overflow-hidden rounded-[2rem]"
          >
            <img
              src="/images/soft-glam-bride.jpeg"
              alt="Soft glam bridal makeup"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-8">
              <div className="text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">
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
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="group relative h-[500px] overflow-hidden rounded-[2rem]"
          >
            <img
              src="/images/makeup-closeup.jpeg"
              alt="Professional makeup closeup"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-8">
              <div className="text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">
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
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative h-[500px] overflow-hidden rounded-[2rem]"
          >
            <img
              src="/images/royal-bride.jpeg"
              alt="Royal bridal makeup"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-8">
              <div className="text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">
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