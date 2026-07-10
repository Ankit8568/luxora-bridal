"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#eee4db] py-16 text-[#211b18] sm:py-20 md:py-24"
    >
      <div className="container-custom">
        {/* SECTION LABEL */}
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#b98270] sm:text-sm sm:tracking-[0.3em]">
          About the Artist
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl font-display text-[clamp(2.6rem,12vw,4rem)] leading-[1.05] tracking-[-0.03em] text-[#211b18] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Creating timeless beauty for your most unforgettable moments.
        </motion.h2>

        {/* ABOUT CONTENT */}
        <div className="mt-10 grid items-center gap-10 sm:mt-14 sm:gap-12 md:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* LEFT SIDE — IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto h-[430px] w-full max-w-md overflow-hidden rounded-t-[10rem] rounded-b-[1.5rem] sm:h-[500px] sm:rounded-t-full lg:mx-0"
          >
            <Image
              src="/images/soft-glam-bride.jpeg"
              alt="Elegant bridal makeup"
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 420px"
              className="object-cover object-center"
            />
          </motion.div>

          {/* RIGHT SIDE — TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-xl text-[#211b18]"
          >
            {/* DESCRIPTION */}
            <p className="text-base leading-7 text-[#5f5651] sm:text-lg sm:leading-8">
              Every bride deserves to feel confident, radiant and completely
              herself. Our approach combines refined artistry, personalized
              attention and timeless elegance to create a look that feels
              uniquely yours.
            </p>

            {/* EXPERIENCE NUMBERS */}
            <div className="mt-8 grid grid-cols-2 gap-5 sm:mt-10 sm:gap-10">
              <div className="border-r border-[#211b18]/15 pr-4">
                <span className="font-display text-4xl font-semibold text-[#211b18] sm:text-5xl">
                  10+
                </span>

                <p className="mt-2 max-w-[120px] text-xs leading-5 text-[#6f6560] sm:text-sm">
                  Years of Experience
                </p>
              </div>

              <div className="pl-1 sm:pl-3">
                <span className="font-display text-4xl font-semibold text-[#211b18] sm:text-5xl">
                  500+
                </span>

                <p className="mt-2 max-w-[120px] text-xs leading-5 text-[#6f6560] sm:text-sm">
                  Happy Brides
                </p>
              </div>
            </div>

            {/* SIGNATURE TEXT */}
            <p className="mt-8 font-display text-xl italic leading-8 text-[#b98270] sm:mt-10 sm:text-2xl">
              Beauty that feels authentically yours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}