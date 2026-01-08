"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const items = [
    {
      institution: "Shri G. S. Institute of Technology and Science, Indore",
      title: "B.Tech Computer Science Engineering",
      duration: "2023 - 2027",
      grade: "CGPA: 9.13 (till IV Sem)",
      icon: <FaGraduationCap />,
      color: "text-indigo-500",
    },
    {
      institution: "Choithram School, Indore",
      title: "Class XII",
      duration: "2021 - 2022",
      grade: "93.4%",
      icon: <FaSchool />,
      color: "text-indigo-500",
    },
    {
      institution: "Choithram School, Indore",
      title: "Class X",
      duration: "2019 - 2020",
      grade: "84.8%",
      icon: <BiSolidSchool />,
      color: "text-indigo-500",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className=" relative py-28 px-6 md:px-20 py-20 bg-slate-50 dark:bg-[#0b0f14] border-t border-slate-200 dark:border-white/10 scroll-mt-24 md:scroll-mt-28 bg-gradient-to-b from-transparent via-white/5 to-transparent "
    >
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className=" font-script text-5xl md:text-6xl text-teal-400 mb-12 tracking-tight ">
          Education
        </h2>

        <div className=" absolute left-1/2 top-[220px] h-[calc(100%-260px)] w-[2px] bg-slate-300 dark:bg-white/10 -translate-x-1/2 hidden md:block " />

        <div className="space-y-12 md:space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`relative flex ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-[45%]">
                <div className=" rounded-2xl p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none ">
                  {/* Duration */}
                  <span className="
                    inline-block mb-3 px-4 py-1 text-sm font-medium rounded-full
                    bg-slate-100 text-slate-600
                    dark:bg-white/10 dark:text-white/70
                  ">
                    {item.duration}
                  </span>

                  {/* Title */}
                  <h3 className="
                    text-xl font-semibold
                    text-slate-900 dark:text-white
                  ">
                    {item.title}
                  </h3>

                  {/* Institution */}
                  <p className=" mt-1 text-base font-medium text-slate-600 dark:text-slate-300 ">
                    {item.institution}
                  </p>

                  {/* Grade */}
                  <p className={`mt-4 text-lg font-bold ${item.color}`}>
                    {item.grade}
                  </p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-8 hidden md:flex">
                <div className=" w-11 h-11 rounded-full bg-white dark:bg-black border border-slate-300 dark:border-white/20 flex items-center justify-center text-slate-700 dark:text-white ">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}