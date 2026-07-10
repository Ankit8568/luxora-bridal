"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const name = formData.get("name");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const message = formData.get("message");

  const whatsappMessage = `
Hello, I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Service: ${service}
Message: ${message}
  `;

  const whatsappURL = `https://wa.me/918149246571?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, "_blank");

  setSubmitted(true);
  form.reset();
};
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#eee4db] py-24"
    >
      <div className="container-custom">
        {/* SECTION HEADING */}
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
          Get in Touch
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
          Let&apos;s create something beautiful together.
        </motion.h2>

        {/* CONTACT GRID */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* LEFT SIDE — CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">
              Planning your wedding, preparing for a special celebration, or
              interested in professional makeup training? Send us your details
              and we&apos;ll help you find the perfect experience.
            </p>

            <div className="mt-12 space-y-8">
              {/* PHONE */}
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] text-white">
                  <Phone size={19} />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Call Us
                  </p>

                  <p className="mt-2 font-display text-2xl">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] text-white">
                  <Mail size={19} />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Email Us
                  </p>

                  <p className="mt-2 font-display text-2xl">
                    hello@luxora.com
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] text-white">
                  <MapPin size={19} />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Visit Us
                  </p>

                  <p className="mt-2 font-display text-2xl">
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — BOOKING FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[2rem] bg-[#211b18] p-8 text-white md:p-12"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              Book Your Experience
            </p>

            <h3 className="mt-4 font-display text-4xl md:text-5xl">
              Tell us about your special day.
            </h3>

           <form
             onSubmit={handleSubmit}
              className="mt-10 space-y-6"
              >
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/60"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-white/30 focus:border-[#d9b5a5]"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/60"
                >
                  Phone Number
                </label>

               <input
               id="phone"
               name="phone"
               type="tel"
             inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            required
            placeholder="Enter 10-digit phone number"
            title="Please enter a valid 10-digit phone number"
            className="w-full border-b border-white/20 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-white/30 focus:border-[#d9b5a5]"
/>
              </div>

              {/* SERVICE */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/60"
                >
                  Select Service
                </label>

                <select
                  id="service"
                  defaultValue=""
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none transition-colors focus:border-[#d9b5a5]"
                >
                  <option value="" disabled className="text-black">
                    Choose a service
                  </option>

                  <option value="bridal" className="text-black">
                    Bridal Makeup
                  </option>

                  <option value="party" className="text-black">
                    Party Makeup
                  </option>

                  <option value="academy" className="text-black">
                    Makeup Academy
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/60"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your requirements"
                  className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-white/30 focus:border-[#d9b5a5]"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="group mt-4 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-[#211b18] transition-all duration-300 hover:bg-[#d9b5a5]"
              >
                Send Enquiry

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
              {submitted && (
  <p className="mt-4 text-sm text-[#d9b5a5]">
    Thank you! Your enquiry has been received successfully.
  </p>
)}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}