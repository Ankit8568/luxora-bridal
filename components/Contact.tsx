"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    const whatsappMessage = `Hello, I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Service: ${service}
Message: ${message || "No additional message"}`;

    const whatsappURL = `https://wa.me/918149246571?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
    form.reset();
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-[#eee4db] py-16 sm:py-20 md:py-24"
    >
      <div className="container-custom">
        {/* SECTION LABEL */}
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--accent)] sm:text-sm sm:tracking-[0.3em]">
          Get in Touch
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
          className="max-w-4xl font-display text-[clamp(2.6rem,12vw,4rem)] leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Let&apos;s create something beautiful together.
        </motion.h2>

        {/* CONTACT GRID */}
        <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-14 sm:gap-12 md:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* LEFT SIDE — CONTACT DETAILS */}
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
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* DESCRIPTION */}
            <p className="max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              Planning your wedding, preparing for a special celebration, or
              interested in professional makeup training? Send us your details
              and we&apos;ll help you find the perfect experience.
            </p>

            {/* CONTACT INFORMATION */}
            <div className="mt-9 space-y-7 sm:mt-12 sm:space-y-8">
              {/* PHONE */}
              <a
                href="tel:+918149246571"
                className="group flex items-start gap-4 sm:gap-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#211b18] text-white transition-colors duration-300 group-hover:bg-[#d9b5a5] group-hover:text-[#211b18] sm:h-12 sm:w-12">
                  <Phone size={18} />
                </span>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs sm:tracking-[0.2em]">
                    Call Us
                  </p>

                  <p className="mt-2 font-display text-xl sm:text-2xl">
                    +91 81492 46571
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:hello@luxora.com"
                className="group flex items-start gap-4 sm:gap-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#211b18] text-white transition-colors duration-300 group-hover:bg-[#d9b5a5] group-hover:text-[#211b18] sm:h-12 sm:w-12">
                  <Mail size={18} />
                </span>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs sm:tracking-[0.2em]">
                    Email Us
                  </p>

                  <p className="mt-2 break-all font-display text-xl sm:text-2xl">
                    hello@luxora.com
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#211b18] text-white sm:h-12 sm:w-12">
                  <MapPin size={18} />
                </span>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs sm:tracking-[0.2em]">
                    Visit Us
                  </p>

                  <p className="mt-2 font-display text-xl sm:text-2xl">
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — BOOKING FORM */}
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
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[1.5rem] bg-[#211b18] p-6 text-white sm:rounded-[2rem] sm:p-8 md:p-10 lg:p-12"
          >
            {/* FORM HEADING */}
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 sm:text-xs sm:tracking-[0.25em]">
              Book Your Experience
            </p>

            <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
              Tell us about your special day.
            </h3>

            {/* CONTACT FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6 sm:mt-10"
            >
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-white/60 sm:text-xs sm:tracking-[0.18em]"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Enter your name"
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#d9b5a5]"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-white/60 sm:text-xs sm:tracking-[0.18em]"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={10}
                  required
                  placeholder="Enter 10-digit phone number"
                  title="Please enter a valid 10-digit phone number"
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#d9b5a5]"
                />
              </div>

              {/* SERVICE */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-white/60 sm:text-xs sm:tracking-[0.18em]"
                >
                  Select Service
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors focus:border-[#d9b5a5]"
                >
                  <option
                    value=""
                    disabled
                    className="text-black"
                  >
                    Choose a service
                  </option>

                  <option
                    value="Bridal Makeup"
                    className="text-black"
                  >
                    Bridal Makeup
                  </option>

                  <option
                    value="Party Makeup"
                    className="text-black"
                  >
                    Party Makeup
                  </option>

                  <option
                    value="Makeup Academy"
                    className="text-black"
                  >
                    Makeup Academy
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-white/60 sm:text-xs sm:tracking-[0.18em]"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirements"
                  className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#d9b5a5]"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="group mt-3 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-medium text-[#211b18] transition-all duration-300 hover:bg-[#d9b5a5] sm:mt-4 sm:w-fit sm:px-7"
              >
                Send Enquiry

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              {/* SUCCESS MESSAGE */}
              {submitted && (
                <p
                  role="status"
                  className="mt-4 text-sm leading-6 text-[#d9b5a5]"
                >
                  Thank you! WhatsApp has been opened with your enquiry details.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}