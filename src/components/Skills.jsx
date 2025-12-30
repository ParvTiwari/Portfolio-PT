"use client";

import { useRef } from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiFirebase, SiAndroid, SiPython, SiBootstrap, SiTailwindcss, SiExpress, SiRedux, SiC, SiCplusplus, SiMysql, SiPostgresql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Android", icon: <SiAndroid /> },
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Redux", icon: <SiRedux /> },
];

export default function SkillsMarquee() {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(marqueeRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      xPercent: -20,
    });
  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef} className="py-16 overflow-hidden bg-transparent scroll-mt-24 md:scroll-mt-28 dark:text-black">
      <h2 className="text-4xl font-bold text-center mb-10 text-slate-800 dark:text-black">
        Skills
      </h2>

      <div className="relative w-full overflow-hidden">
        <div ref={marqueeRef} className="flex w-max animate-marquee gap-12">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-2xl px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-110 transition cursor-default"
            >
              <span className="text-3xl text-blue-500">
                {skill.icon}
              </span>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}