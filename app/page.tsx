'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, Zap, ChevronDown, Rocket, Target, Activity } from 'lucide-react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative w-full text-white overflow-x-hidden" style={{ background: 'var(--background)' }}>
      {/* Animated background mesh */}
      <div className="bg-mesh" />

      {/* Floating color orbs */}
      <div className="glow-orb" style={{ width: 600, height: 600, background: 'rgba(168,85,247,0.35)', top: -200, left: -200 }} />
      <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(6,182,212,0.25)', bottom: -100, right: -150, animationDelay: '-6s' }} />
      <div className="glow-orb" style={{ width: 350, height: 350, background: 'rgba(244,63,94,0.2)', top: '50%', left: '55%', animationDelay: '-12s' }} />

      {/* Navigation */}
      <Navigation />

      {/* Main scrollable container */}
      <div ref={containerRef} className="relative">
        {/* SECTION 1: Hero with Stacking Effect */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
              scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.85]),
              y: useTransform(scrollYProgress, [0, 0.2], [0, 100]),
            }}
            className="text-center px-4 sm:px-6 relative z-10 w-full max-w-4xl mx-auto"
          >
            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {/* Animated badge with glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--primary)' }} />
                <span className="text-white/80">Neural Network v4.0 Active</span>
              </motion.div>

              {/* Main headline with gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight md:leading-none tracking-tight"
              >
                <span className="gradient-text">Master your</span>
                <br />
                <span className="neon-text">Aura.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/60 font-medium leading-relaxed"
              >
                We've spent 10 years decoding the cognitive signatures of world-class professionals.
                <br className="hidden sm:block" />
                Don't settle for a job. Align with your <span className="text-white font-bold">architectural truth.</span>
              </motion.p>

              {/* CTA buttons with glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4"
              >
                <Link href="/assessment" className="btn-vibrant px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-xs sm:text-sm w-full sm:w-auto justify-center shadow-xl hover:shadow-2xl transition-all">
                  Begin Calibration <Zap className="w-4 h-4" />
                </Link>
                <Link href="/explorer" className="btn-ghost px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-xs sm:text-sm w-full sm:w-auto justify-center">
                  Browse Index
                </Link>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-12 sm:mt-16 md:mt-20"
            >
              <ChevronDown className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white/30 mx-auto" />
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 2: Stats with Stacking */}
        <section className="relative min-h-screen w-full flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.15, 0.35], [0, 1]),
              scale: useTransform(scrollYProgress, [0.15, 0.35], [0.8, 1]),
              y: useTransform(scrollYProgress, [0.15, 0.35], [100, 0]),
            }}
            className="w-full max-w-5xl mx-auto"
          >
            {/* Glassmorphic container */}
            <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl sm:rounded-4xl p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

              <div className="relative space-y-8 sm:space-y-12 md:space-y-16">
                <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white/40"
                  >
                    Live Intelligence Feed
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight italic uppercase gradient-text"
                  >
                    The Numbers.
                  </motion.h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                  {[
                    { label: 'Blueprints', val: '250+', color: 'var(--primary)' },
                    { label: 'Precision', val: '98.4%', color: 'var(--secondary)' },
                    { label: 'Active Users', val: '12K+', color: 'var(--primary-bright)' },
                    { label: 'Verified', val: '100%', color: 'var(--accent)' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                    >
                      <p className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-1 sm:mb-2 group-hover:scale-110 transition-transform" style={{ color: stat.color }}>
                        {stat.val}
                      </p>
                      <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-white/30">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 3: Features with Stacking */}
        <section className="relative min-h-screen w-full flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.35, 0.55], [0, 1]),
              scale: useTransform(scrollYProgress, [0.35, 0.55], [0.8, 1]),
              y: useTransform(scrollYProgress, [0.35, 0.55], [100, 0]),
            }}
            className="w-full max-w-6xl mx-auto"
          >
            {/* Glassmorphic container */}
            <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl sm:rounded-4xl p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 pointer-events-none" />

              <div className="relative space-y-8 sm:space-y-12 md:space-y-20">
                <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight uppercase italic leading-tight"
                  >
                    <span className="text-white/20">The Core</span><br />
                    <span className="gradient-text">Components.</span>
                  </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {[
                    {
                      icon: Activity,
                      title: 'Neural Scan',
                      desc: 'Our psychometric engine maps your Big Five, RIASEC, and cognitive aptitudes with scientific rigor.',
                      color: 'rgba(168,85,247,0.3)',
                      borderColor: 'rgba(168,85,247,0.3)',
                      textColor: 'var(--primary)'
                    },
                    {
                      icon: Target,
                      title: 'Atlas Index',
                      desc: 'Explore 250+ professionally architected career blueprints with live market data tracking.',
                      color: 'rgba(6,182,212,0.3)',
                      borderColor: 'rgba(6,182,212,0.3)',
                      textColor: 'var(--secondary)'
                    },
                    {
                      icon: Globe,
                      title: 'Global Agora',
                      desc: 'Connect with verified career architects and mentors in real-time collaboration protocols.',
                      color: 'rgba(244,63,94,0.3)',
                      borderColor: 'rgba(244,63,94,0.3)',
                      textColor: 'var(--accent)'
                    }
                  ].map((card, i) => {
                    const Icon = card.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                        style={{ borderBottom: `3px solid ${card.borderColor}` }}
                      >
                        {/* Gradient background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <div className="relative space-y-4 sm:space-y-6">
                          <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl md:rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" style={{ color: card.textColor }} />
                          </div>
                          <div className="space-y-2 sm:space-y-3">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight uppercase italic">{card.title}</h3>
                            <p className="text-xs sm:text-sm md:text-base text-white/50 font-medium leading-relaxed">{card.desc}</p>
                          </div>
                          <button className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider transition-all group-hover:translate-x-1" style={{ color: card.textColor }}>
                            Explore Layer →
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 4: CTA with Stacking */}
        <section className="relative min-h-screen w-full flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.55, 0.75], [0, 1]),
              scale: useTransform(scrollYProgress, [0.55, 0.75], [0.8, 1]),
              y: useTransform(scrollYProgress, [0.55, 0.75], [100, 0]),
            }}
            className="w-full max-w-4xl mx-auto text-center"
          >
            {/* Glassmorphic container */}
            <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl sm:rounded-4xl p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 pointer-events-none" />

              <div className="relative space-y-6 sm:space-y-10 md:space-y-14">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black italic uppercase tracking-tight leading-tight"
                >
                  Your Future<br />
                  <span style={{ color: 'var(--primary)' }}>Awaits.</span>
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/register" className="btn-vibrant px-8 sm:px-12 md:px-16 py-4 md:py-7 text-sm md:text-lg inline-flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all">
                    Initialize Protocol <Rocket className="w-4 sm:w-5 md:w-7 h-4 sm:h-5 md:h-7" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Spacer for scroll */}
        <div className="h-20" />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
