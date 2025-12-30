"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Profile(){
    const roles = [
        "Software Development 💻",
        "Android Development 📱",
        "Machine Learning 🧠",
        "Full Stack Development 🌐",
    ];
    
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const roleRef = useRef(null);

    useEffect(() => {
        gsap.from(textRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        gsap.from(imageRef.current, {
            x: 100,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease:"power3.out",
        });

        const tl = gsap.timeline({ repeat: -1 });

        roles.forEach((role) => {
          tl.to(roleRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
          })
            .set(roleRef.current, {
              textContent: role,
            })
            .to(roleRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.5,
            })
            .to({}, { duration: 1.5 });
        });
        return () => tl.kill();
    }, []);

    return (
        <section id="home" className="scroll-mt-24 md:scroll-mt-28">
            <div className="flex items-center justify-between min-h-screen px-6 md: px-20">
                <div ref={textRef} className="text-center md:text-left max-w-2xl tracking-widest">
                    <h1 className=" mb-6 text-slate-700 text-3xl sm:text-2xl"> Hi, I'm{" "} <span className="relative block sm:inline text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient group"> Parv Tiwari <span className=" absolute left-0 -bottom-1 h-[4px] w-0 bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-500 group-hover:w-full" /></span> </h1>
                    <h2 className="tracking-normal text-lg sm:text-xl md:text-2xl text-slate-600"> I'm am into <span ref={roleRef} className="tracking-wide sm:inline font-semibold text-blue-500 mt-2 sm:mt-0"></span> </h2>
                </div>
                <div ref={imageRef}>
                    <Image
                        src="/parv.jpeg"
                        alt="Parv Tiwari" 
                        width={300} 
                        height={300}
                        priority
                        className="rounded-xl border-4 border-black block"
                    />
                </div>
            </div>
        </section>
    );
}