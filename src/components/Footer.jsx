'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)
  const contentRef = useRef(null)
  const linksRef = useRef([])
  const socialRef = useRef([])

  useEffect(() => {
    if (!footerRef.current) return

    const ctx = gsap.context(() => {
      // Footer entrance animation
      gsap.from(footerRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          end: 'top 85%',
          scrub: 0.5,
          markers: false,
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
      })

      // Animate section titles
      gsap.from('.footer-section-title', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      })

      // Animate links with stagger
      gsap.from('.footer-link', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 88%',
        },
        opacity: 0,
        x: -20,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
      })

      // Animate social icons with scale and rotate
      gsap.from('.social-icon', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        onComplete: () => {
          gsap.set('.social-icon', { opacity: 1 })
        },
      })

      // Divider line animation
      gsap.from('.footer-divider', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
        },
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.2,
        ease: 'power2.inOut',
      })

      // Bottom text animation
      gsap.from('.footer-bottom-text', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 75%',
        },
        opacity: 1,
        y: 10,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      })

      gsap.to('.footer-section-title', {
        scrollTrigger: { trigger: footerRef.current, start: 'top 90%', scrub: 1 },
        y: -30,
        ease: 'none',
      })

      // 2. Floating social icons
      gsap.to('.social-icon', {
        y: -6,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        overwrite: 'auto',
      })

      // 3. Text character reveal
      gsap.from('.footer-bottom-text', {
        scrollTrigger: { trigger: footerRef.current, start: 'top 75%' },
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 1,
      })

      // Hover animation setup for social icons
      socialRef.current.forEach((icon) => {
        if (!icon) return

        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.15,
            duration: 0.25,
            overwrite: 'auto',
            clearProps: 'rotation',
          })
        })

        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            duration: 0.25,
            overwrite: 'auto',
            clearProps: 'rotation',
          })
        })
      })

      // Hover animation for quick links
      linksRef.current.forEach((link) => {
        if (!link) return

        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            x: 8,
            color: '#20b2aa',
            duration: 0.2,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        })

        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            x: 0,
            color: '#cbd5e1',
            duration: 0.2,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        })
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/parvtiwari',
      icon: <FaGithub />,
      label: 'GitHub',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/parv-tiwari',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
    },
    {
      name: 'Email',
      url: 'mailto:parvtiwari0111@gmail.com',
      icon: <FaEnvelope />,
      label: 'Email',
    },
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-700/50 py-16 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div ref={contentRef} className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="footer-section-title text-2xl font-bold text-teal-400 mb-4">PT</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Full-Stack Developer crafting beautiful, high-performance web experiences with
              modern technologies. Building scalable applications that solve real-world problems.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-slate-500 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                Available for internships
              </p>
              <p className="text-slate-500 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                Open for collaborations
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-section-title text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={`${link.href}-${index}`}
                  href={link.href}
                  ref={(el) => {
                    if (el) linksRef.current[index] = el
                  }}
                  className="footer-link block text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links & Contact */}
          <div>
            <h4 className="footer-section-title text-lg font-semibold text-white mb-6">
              Connect With Me
            </h4>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={`${link.name}-${index}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => {
                    if (el) socialRef.current[index] = el
                  }}
                  className="social-icon relative z-10 w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-xl hover:border-teal-500 hover:bg-teal-500/10 transition-all duration-300 cursor-pointer text-white"
                  title={link.label}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-xs">
              Let's collaborate on exciting projects. Reach out via any platform!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="footer-bottom-text text-slate-500 text-sm">
            © {currentYear} Parv Tiwari. All rights reserved.
          </p>
          <p className="footer-bottom-text text-slate-600 text-xs mt-3">
            Built with <span className="text-teal-400 font-semibold">Next.js</span> • Styled with{' '}
            <span className="text-teal-400 font-semibold">Tailwind CSS</span> • Animated with{' '}
            <span className="text-teal-400 font-semibold">GSAP</span>
          </p>
          <p className="footer-bottom-text text-slate-600 text-xs mt-2">
            Deployed on <span className="text-teal-400 font-semibold">Vercel</span> • Source on{' '}
            <span className="text-teal-400 font-semibold">GitHub</span>
          </p>
        </div>

        {/* Subtle gradient background */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-500/5 to-transparent pointer-events-none z-0"></div>
      </div>
    </footer>
  )
}