"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      // Paragraphs stagger animation
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
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
      id="about"
      className="min-h-screen px-6 md:px-20 py-16 md:py-20 bg-background scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-script text-5xl md:text-6xl text-teal-400 mb-10"
        >
          About Me
        </h2>

        {/* Content */}
        <p
          ref={(el) => (textRef.current[0] = el)}
          className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6"
        >
          I’m{" "}
          <span className="font-semibold text-slate-800 dark:text-white">
            Parv Tiwari
          </span>
          , a passionate Software Engineer who enjoys building scalable,
          user-centric products with clean design and strong performance.
        </p>

        <p
          ref={(el) => (textRef.current[1] = el)}
          className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6"
        >
          My interests span across full-stack web development, Android
          applications, and machine learning. I enjoy working close to both the
          product and engineering sides.
        </p>

        <p
          ref={(el) => (textRef.current[2] = el)}
          className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
        >
          Currently, I'm focused on sharpening my problem-solving skills,
          building impactful projects, and preparing for product-based roles
          while staying open to collaborations and internships.
        </p>
        
        <div ref={(el) => (textRef.current[3] = el)} className="mt-12 text-center" >
            <a href="/Parv_Tiwari_Resume.pdf" download
                className="
                text-slate-600 dark:text-slate-300
                font-medium
                hover:text-slate-800 dark:hover:text-white
                transition-colors duration-300
                relative group
                "
            >
                Download my Resume
                <span
                className="
                    absolute left-1/2 -bottom-1
                    w-0 h-[1px]
                    bg-current
                    transition-all duration-300
                    group-hover:w-full
                    group-hover:left-0
                "
                />
            </a>
        </div>
      </div>
    </section>
  );
}