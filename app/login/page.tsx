'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 md:pt-40 pb-12 md:pb-20 px-4 md:px-6 relative flex items-center justify-center" style={{ background: 'var(--background)' }}>
                <div className="bg-mesh" />
                <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(168,85,247,0.3)', top: -100, left: -100 }} />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass p-8 md:p-12 rounded-2xl md:rounded-[4rem] border-white/5 space-y-8 md:space-y-12 shadow-[0_80px_100px_-20px_rgba(0,0,0,1)] relative max-w-md w-full z-10"
                >
                    <div className="space-y-6 md:space-y-8">
                        <div className="space-y-3 md:space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] font-black uppercase tracking-widest text-primary"
                            >
                                <Sparkles className="w-3 h-3" /> Welcome Back
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-4xl font-black tracking-tighter gradient-text italic uppercase"
                            >
                                Re-Verify
                            </motion.h1>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            <div className="space-y-2">
                                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-white/20 w-4 md:w-5 h-4 md:h-5 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-3 md:py-4 pl-12 md:pl-16 pr-4 md:pr-6 focus:outline-none focus:border-primary/40 transition-all font-medium text-sm placeholder:text-white/10"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-white/20 w-4 md:w-5 h-4 md:h-5 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-3 md:py-4 pl-12 md:pl-16 pr-4 md:pr-6 focus:outline-none focus:border-primary/40 transition-all font-medium text-sm placeholder:text-white/10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2 md:pt-4 space-y-4 md:space-y-6">
                        <button className="btn-vibrant w-full justify-center py-4 md:py-5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em]">
                            Verify Identity <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                        </button>
                        <div className="flex items-center gap-3 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-white/10">
                            <ShieldCheck className="w-3 md:w-4 h-3 md:h-4" /> 256-Bit Secure
                        </div>
                        <p className="text-center text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-white/10">
                            No Account? <Link href="/register" className="text-primary hover:text-white transition-colors ml-2">Create One</Link>
                        </p>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </>
    );
}
