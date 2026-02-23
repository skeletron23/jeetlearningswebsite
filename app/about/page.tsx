'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Zap, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 md:pt-40 pb-12 md:pb-20 px-4 md:px-6 relative" style={{ background: 'var(--background)' }}>
                <div className="bg-mesh" />
                <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(168,85,247,0.3)', top: -100, left: -100 }} />
                <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(6,182,212,0.2)', bottom: -100, right: -100, animationDelay: '-8s' }} />

                <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 relative z-10">
                    <header className="space-y-6 md:space-y-8 max-w-3xl">
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none gradient-text uppercase italic">About The Database.</h1>
                        <p className="text-base md:text-xl text-white/40 font-medium leading-relaxed">
                            Our comprehensive career database contains 250+ professionally architected career blueprints, each mapped to psychometric dimensions and market data.
                        </p>
                    </header>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {[
                            { icon: <BookOpen />, title: '250+ Careers', desc: 'Comprehensive database of career paths' },
                            { icon: <Users />, title: 'Expert Curated', desc: 'Validated by industry professionals' },
                            { icon: <Zap />, title: 'Live Data', desc: 'Real-time market trends & salary data' },
                            { icon: <Target />, title: 'Psychometric Mapped', desc: 'Aligned with personality & aptitude' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 md:p-12 space-y-4 md:space-y-6"
                            >
                                <div className="w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                                    <div className="text-primary w-6 md:w-8 h-6 md:h-8">{item.icon}</div>
                                </div>
                                <div className="space-y-2 md:space-y-3">
                                    <h3 className="text-xl md:text-2xl font-black tracking-tight uppercase italic">{item.title}</h3>
                                    <p className="text-sm md:text-base text-white/40 font-medium">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-2xl md:rounded-[3rem] text-center space-y-6 md:space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic gradient-text">Ready to Explore?</h2>
                        <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto">Browse our complete career index and find the path that aligns with your architectural truth.</p>
                        <Link href="/explorer" className="btn-vibrant px-12 md:px-16 py-5 md:py-6 text-sm md:text-base inline-flex">
                            Enter Explorer <ArrowRight className="w-5 md:w-6 h-5 md:h-6" />
                        </Link>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
