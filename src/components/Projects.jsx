"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "MetroMart",
    description: "MetroMart is a complete solution for supermarket operations - from inventory management to fast billing and vendor procurement.",
    tech: ["Node.js", "Express.js", "Supabase", "PostgreSQL"],
    link: "https://parv-tiwari-metro-mart.vercel.app/",
  },
  {
    title: "DineFlow",
    description: "A smart restaurant management system with real-time orders, admin dashboard, and scalable backend.",
    tech: ["Node.js", "Express.js", "Supabase", "PostgreSQL"],
    link: "https://parv-tiwari-dineflow.vercel.app/",
  },
  {
    title: "Blood Donation App",
    description: "Android app to find nearby blood donors using Firebase Auth, Realtime DB and Google Maps.",
    tech: ["Java", "Android", "Firebase"],
    link: "https://github.com/ParvTiwari/Blood-Donation-App.git",
  },
  {
    title: "Restaurant Management System",
    description: "A hotel management platform that helps hotels manage room reservations, track staff, calculate revenue and generate reports all in one place.",
    tech: ["Java", "OOPS", "File Handling"],
    link: "https://github.com/ParvTiwari/Hotel-Management-System-by-PT",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const validCards = cardsRef.current.filter((el) => el !== null);

    if (validCards.length > 0) {
      gsap.from(validCards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        clearProps: "all",
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="px-6 md:px-20 py-16 md:py-20 bg-background scroll-mt-24 md:scroll-mt-28 bg-gradient-to-b from-transparent via-white/10 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-script text-5xl md:text-6xl text-teal-400 mb-12">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group rounded-2xl border border-slate-200/10 bg-white/5 backdrop-blur-md p-6 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                className="inline-block text-sm font-medium text-teal-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}