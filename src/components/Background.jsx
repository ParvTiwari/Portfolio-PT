"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Background({ children }) {
  const blob1 = useRef(null);
  const blob2 = useRef(null);

  useEffect(() => {
    gsap.to(blob1.current, {
      x: 120,
      y: 80,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blob2.current, {
      x: -100,
      y: -60,
      duration: 22,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50">
      
      {/* Blob 1 */}
      <div
        ref={blob1}
        className="absolute top-[-15%] left-[-15%] w-[520px] h-[520px] bg-blue-200/40 rounded-full blur-3xl"
      />

      {/* Blob 2 */}
      <div
        ref={blob2}
        className="absolute bottom-[-15%] right-[-15%] w-[520px] h-[520px] bg-purple-200/40 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}