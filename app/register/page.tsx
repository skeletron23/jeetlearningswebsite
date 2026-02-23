'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase, ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function RegisterPage() {
    const [role, setRole] = useState<'student' | 'counselor' | 'institution' | null>(null);

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 md:pt-40 pb-12 md:pb-20 px-4 md:px-6 relative flex items-center justify-center" style={{ background: 'var(--background)' }}>
                <div className="bg-mesh" />
                <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(168,85,247,0.3)', top: -100, right: -100 }} />

                <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 md:gap-20 items-center relative z-10">
                    <div className="space-y-8 md:space-y-12">
                        <div className="space-y-6 md:space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] font-black uppercase tracking-widest text-primary"
                            >
                                <Sparkles className="w-3 h-3" /> Join The Agora
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] gradient-text italic uppercase"
                            >
                                CREATE <br /> YOUR ID.
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-base md:text-lg text-white/30 font-medium leading-relaxed max-w-sm"
                            >
                                Initialize your professional footprint. Select your domain to begin the mapping protocol.
                            </motion.p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/10">
                            <div className="flex items-center gap-3"><ShieldCheck className="w-3 md:w-4 h-3 md:h-4" /> 256-Bit Secure</div>
                            <div className="flex items-center gap-3"><Zap className="w-3 md:w-4 h-3 md:h-4 fill-white/5" /> Real-time Sync</div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="glass p-8 md:p-12 rounded-2xl md:rounded-[4rem] border-white/5 space-y-8 md:space-y-12 shadow-[0_80px_100px_-20px_rgba(0,0,0,1)] relative"
                    >
                        <div className="space-y-6 md:space-y-8">
                            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-white/10 text-center">Protocol Selection</p>
                            <div className="grid gap-4 md:gap-5">
                                {[
                                    { id: 'student', label: 'Candidate', icon: <GraduationCap />, desc: 'Map your career path' },
                                    { id: 'counselor', label: 'Architect', icon: <Briefcase />, desc: 'Guide the next generation' },
                                    { id: 'institution', label: 'Academy', icon: <User />, desc: 'Manage your learners' }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setRole(item.id as any)}
                                        className={`p-6 md:p-8 rounded-2xl md:rounded-3xl border flex items-center gap-6 md:gap-8 text-left transition-all group ${role === item.id
                                            ? 'bg-primary border-primary shadow-[0_30px_60px_-10px_rgba(139,92,246,0.4)] translate-y-[-4px]'
                                            : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:translate-y-[-2px]'
                                            }`}
                                    >
                                        <div className={`w-12 md:w-14 h-12 md:h-14 rounded-lg md:rounded-2xl flex items-center justify-center transition-all flex-shrink-0 ${role === item.id ? 'bg-white text-primary' : 'bg-white/5 text-white/20 group-hover:text-white'}`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-xs md:text-sm uppercase tracking-widest">{item.label}</h4>
                                            <p className={`text-[9px] md:text-[10px] font-medium mt-1 ${role === item.id ? 'text-white/80' : 'text-white/20 group-hover:text-white/40'}`}>{item.desc}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2 md:pt-4 space-y-6 md:space-y-8">
                            <button
                                disabled={!role}
                                className="btn-vibrant w-full justify-center py-5 md:py-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] disabled:opacity-20 transition-all"
                            >
                                Continue Calibration <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                            </button>
                            <p className="text-center text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-white/10">
                                ID Already Exists? <Link href="/login" className="text-primary hover:text-white transition-colors ml-2 md:ml-4">Re-verify</Link>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
