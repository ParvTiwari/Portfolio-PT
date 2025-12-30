"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(itemsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className=" relative px-6 md:px-20 pt-16 md:pt-20 pb-8 bg-gradient-to-b from-transparent via-teal-500/5 to-teal-500/10 border-t border-slate-200/10 overflow-hidden scroll-mt-24 md:scroll-mt-28 dark:text-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="font-script text-5xl md:text-6xl text-teal-400 mb-12">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Info */}
          <div
            ref={(el) => (itemsRef.current[0] = el)}
            className="space-y-6"
          >
            <p className="text-slate-600 text-lg leading-relaxed">
              I'm always open to discussing new projects, internship
              opportunities, or collaborations. Feel free to reach out —
              I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-600">
                <FiMail className="text-teal-400 text-xl" />
                <span>parvtiwari1@gmail.com</span>
              </div>

              <div className="flex items-center gap-4 text-slate-600">
                <FiPhone className="text-teal-400 text-xl" />
                <a href="tel:+919285121000">+91 92851 21000</a>
              </div>

              <div className="flex items-center gap-4 text-slate-600">
                <FiMapPin className="text-teal-400 text-xl" />
                <span>Indore, India</span>
              </div>
            </div>
          </div>

          <form
            ref={(el) => (itemsRef.current[1] = el)}
            className="bg-white/5 backdrop-blur-md border border-slate-200/10 rounded-2xl p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-slate-300/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-slate-300/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-transparent border border-slate-300/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 resize-none"
            />

            <button
              type="submit"
              className="
                w-full py-3 rounded-lg text-sm font-semibold
                bg-teal-500 text-white
                hover:bg-teal-600 transition
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}