"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[var(--background)] py-24"
    >
      <div className="container-custom">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
          What We Offer
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
          Beauty experiences crafted for every special moment.
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          
          {/* FIRST CARD — BRIDAL MAKEUP */}
          <div className="relative h-[550px] overflow-hidden rounded-[2rem]">
            <img
              src="/images/bridal-services.jpeg"
              alt="Bridal makeup services"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 pt-24 text-white">
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/70">
                Signature Service
              </p>

              <h3 className="font-display text-4xl">
                Bridal Makeup
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                Timeless bridal artistry thoughtfully designed to enhance your
                natural beauty for your most unforgettable day.
              </p>
            </div>
          </div>

          {/* SECOND CARD — PARTY MAKEUP */}
          <div className="relative h-[550px] overflow-hidden rounded-[2rem]">
           <img
           src="/images/party-makeup-new.jpeg"
           alt="Party makeup service"
        
            
           className="h-full w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 pt-24 text-white">
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/70">
                Glamour Service
              </p>

              <h3 className="font-display text-4xl">
                Party Makeup
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                Sophisticated and radiant makeup tailored for celebrations,
                parties, receptions and unforgettable evenings.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}