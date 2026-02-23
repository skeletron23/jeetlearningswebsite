'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, Zap, ChevronDown, Rocket, Target, Activity } from 'lucide-react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative w-full text-white overflow-x-hidden" style={{ background: 'var(--background)' }}>
      {/* Colored mesh that glass elements blur against */}
      <div className="bg-mesh" />

      {/* Floating color orbs for extra depth */}
      <div className="glow-orb" style={{ width: 600, height: 600, background: 'rgba(168,85,247,0.35)', top: -200, left: -200 }} />
      <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(6,182,212,0.25)', bottom: -100, right: -150, animationDelay: '-6s' }} />
      <div className="glow-orb" style={{ width: 350, height: 350, background: 'rgba(244,63,94,0.2)', top: '50%', left: '55%', animationDelay: '-12s' }} />

      {/* Navigation */}
      <Navigation />

      {/* ============== STACKING SECTIONS ============== */}
      <div className="stacking-wrapper" ref={containerRef}>

        {/* SECTION 1: Hero */}
        <section className="stacking-section pt-20 md:pt-24">
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
              scale: useTransform(scrollYProgress, [0, 0.15], [1, 0.92]),
            }}
            className="text-center px-4 sm:px-6 relative z-10 w-full max-w-4xl mx-auto"
          >
            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ background: 'var(--primary)' }} />
                <span className="text-white/60">Neural Network v4.0 Active</span>
              </div>

              {/* Massive headline */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight md:leading-none tracking-tight">
                <span className="gradient-text">Master your</span>
                <br />
                <span className="neon-text">Aura.</span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/50 font-medium leading-relaxed">
                We've spent 10 years decoding the cognitive signatures of world-class professionals.
                <br className="hidden sm:block" />
                Don't settle for a job. Align with your <span className="text-white font-bold">architectural truth.</span>
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Link href="/assessment" className="btn-vibrant px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-xs sm:text-sm w-full sm:w-auto justify-center">
                  Begin Calibration <Zap className="w-4 h-4" />
                </Link>
                <Link href="/explorer" className="btn-ghost px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-xs sm:text-sm w-full sm:w-auto justify-center">
                  Browse Index
                </Link>
              </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              style={{ opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]) }}
              className="mt-8 sm:mt-12 md:mt-16 animate-bounce"
            >
              <ChevronDown className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white/20 mx-auto" />
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 2: Stats */}
        <section className="stacking-section">
          <div className="stack-panel w-full max-w-5xl mx-auto">
            <div className="space-y-8 sm:space-y-12 md:space-y-16">
              <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white/25">Live Intelligence Feed</p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight italic uppercase gradient-text">
                  The Numbers.
                </h2>
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
                    className="glass-card p-4 sm:p-6 md:p-8 text-center"
                  >
                    <p className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-1 sm:mb-2" style={{ color: stat.color }}>
                      {stat.val}
                    </p>
                    <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-white/20">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Feature cards */}
        <section className="stacking-section">
          <div className="stack-panel w-full max-w-6xl mx-auto">
            <div className="space-y-8 sm:space-y-12 md:space-y-20">
              <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight uppercase italic leading-tight">
                  <span className="text-white/15">The Core</span><br />
                  <span className="gradient-text">Components.</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {/* Card 1: Neural Scan */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 sm:p-8 md:p-12 space-y-4 sm:space-y-6 md:space-y-8 group"
                  style={{ borderBottom: '3px solid rgba(168,85,247,0.3)' }}
                >
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.2)' }}>
                    <Activity className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight uppercase italic">Neural Scan</h3>
                    <p className="text-xs sm:text-sm md:text-base text-white/35 font-medium leading-relaxed">Our psychometric engine maps your Big Five, RIASEC, and cognitive aptitudes with scientific rigor.</p>
                  </div>
                  <button className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider transition-all"
                    style={{ color: 'var(--primary)' }}>
                    Explore Layer →
                  </button>
                </motion.div>

                {/* Card 2: Atlas Index */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="glass-card p-6 sm:p-8 md:p-12 space-y-4 sm:space-y-6 md:space-y-8 group"
                  style={{ borderBottom: '3px solid rgba(6,182,212,0.3)' }}
                >
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.2)' }}>
                    <Target className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" style={{ color: 'var(--secondary)' }} />
                  </div>
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight uppercase italic">Atlas Index</h3>
                    <p className="text-xs sm:text-sm md:text-base text-white/35 font-medium leading-relaxed">Explore 250+ professionally architected career blueprints with live market data tracking.</p>
                  </div>
                  <button className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider transition-all"
                    style={{ color: 'var(--secondary)' }}>
                    Explore Layer →
                  </button>
                </motion.div>

                {/* Card 3: Global Agora */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-6 sm:p-8 md:p-12 space-y-4 sm:space-y-6 md:space-y-8 group"
                  style={{ borderBottom: '3px solid rgba(244,63,94,0.3)' }}
                >
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(244,63,94,0.12)', border: '1px solid rgba(244,63,94,0.2)' }}>
                    <Globe className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight uppercase italic">Global Agora</h3>
                    <p className="text-xs sm:text-sm md:text-base text-white/35 font-medium leading-relaxed">Connect with verified career architects and mentors in real-time collaboration protocols.</p>
                  </div>
                  <button className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider transition-all"
                    style={{ color: 'var(--accent)' }}>
                    Explore Layer →
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CTA */}
        <section className="stacking-section">
          <div className="stack-panel w-full max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-10 md:space-y-14 py-8 sm:py-12 md:py-20"
            >
              <h3 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black italic uppercase tracking-tight leading-tight">
                Your Future<br />
                <span style={{ color: 'var(--primary)' }}>Awaits.</span>
              </h3>
              <div className="pt-2 md:pt-4">
                <Link href="/register" className="btn-vibrant px-8 sm:px-12 md:px-16 py-4 md:py-7 text-sm md:text-lg inline-flex items-center gap-2">
                  Initialize Protocol <Rocket className="w-4 sm:w-5 md:w-7 h-4 sm:h-5 md:h-7" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
