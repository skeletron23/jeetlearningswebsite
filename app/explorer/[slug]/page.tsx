'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'next/navigation';
import {
    ArrowLeft,
    Target,
    TrendingUp,
    GraduationCap,
    DollarSign,
    Sparkles,
    Zap,
    ShieldCheck,
    Globe,
    Star,
    ArrowRight,
    Brain
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function CareerDetailPage() {
    const { slug } = useParams();
    const [career, setCareer] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCareer();
    }, [slug]);

    const fetchCareer = async () => {
        try {
            const res = await fetch(`/api/careers`);
            const data = await res.json();
            const found = data.find((c: any) => c.slug === slug);
            setCareer(found);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="text-center space-y-6">
                <Sparkles className="w-12 md:w-16 h-12 md:h-16 text-primary animate-pulse mx-auto" />
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-white/20">Syncing Profile Data</p>
            </div>
        </div>
    );

    if (!career) return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center space-y-8 px-4">
                <h1 className="text-2xl md:text-4xl font-black italic opacity-20 uppercase tracking-tighter">Profile Not Found</h1>
                <Link href="/explorer" className="btn-glass px-6 md:px-8 py-2 md:py-3 text-xs uppercase font-black">Return to Index</Link>
            </div>
        </div>
    );

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 md:pt-40 pb-12 md:pb-20 px-4 md:px-6 relative" style={{ background: 'var(--background)' }}>
                <div className="bg-mesh" />
                <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(168,85,247,0.25)', top: -150, right: -100 }} />
                <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(6,182,212,0.2)', bottom: -100, left: -100, animationDelay: '-7s' }} />

                <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link
                            href="/explorer"
                            className="inline-flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/30 hover:text-white transition-all group"
                        >
                            <ArrowLeft className="w-3 md:w-4 h-3 md:h-4 group-hover:-translate-x-1 transition-transform" /> Return to Atlas
                        </Link>
                    </motion.div>

                    {/* Hero Architecture */}
                    <header className="grid lg:grid-cols-5 gap-8 md:gap-16 items-end">
                        <div className="lg:col-span-3 space-y-6 md:space-y-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-widest text-primary"
                            >
                                <Zap className="w-2.5 md:w-3 h-2.5 md:h-3 fill-primary" /> Profile Validated // {career._id.slice(-8)}
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.8] gradient-text italic uppercase"
                            >
                                {career.name}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-base md:text-xl text-white/40 font-medium leading-relaxed max-w-xl"
                            >
                                {career.shortDescription}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-2 glass p-8 md:p-12 rounded-2xl md:rounded-[3.5rem] border-white/5 space-y-6 md:space-y-8 flex flex-col justify-center shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />

                            <div className="space-y-4 md:space-y-6 relative">
                                <div className="flex justify-between items-center gap-4">
                                    <p className="text-[8px] md:text-[10px] uppercase font-black tracking-[0.3em] md:tracking-[0.4em] text-white/20">Market Saturation</p>
                                    <div className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[8px] md:text-[10px] font-black italic whitespace-nowrap">
                                        {career.growthOutlook}% Velocity
                                    </div>
                                </div>
                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${career.growthOutlook}%` }}
                                        transition={{ duration: 1.5, ease: "circOut" }}
                                        className="h-full bg-primary shadow-[0_0_20px_var(--primary)]"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-6 md:gap-10 pt-2 md:pt-4">
                                    <div className="space-y-1">
                                        <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-white/20 font-black">Median Fiscal Entry</p>
                                        <p className="text-2xl md:text-4xl font-black italic tracking-tighter">₹{(career.salaryRange.mid / 100000).toFixed(1)}M</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-white/20 font-black">Entry Tier</p>
                                        <p className="text-2xl md:text-4xl font-black italic tracking-tighter">0{career.difficultyIndex}</p>
                                    </div>
                                </div>
                                <button className="btn-vibrant w-full justify-center py-4 md:py-6 border-none shadow-primary/20 text-xs md:text-sm">
                                    Begin Pathway Mapping <Zap className="w-3 md:w-4 h-3 md:h-4 fill-white" />
                                </button>
                            </div>
                        </motion.div>
                    </header>

                    {/* Intelligence Grid */}
                    <div className="grid md:grid-cols-3 gap-6 md:gap-10 relative">
                        <div className="md:col-span-2 glass-card p-8 md:p-12 space-y-8 md:space-y-12 bg-white/[0.02] border-white/5">
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="w-12 md:w-16 h-12 md:h-16 rounded-lg md:rounded-[2rem] bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 flex-shrink-0">
                                    <Brain className="text-white w-6 md:w-8 h-6 md:h-8" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-2xl md:text-4xl font-black tracking-tight uppercase italic">Neural Core</h3>
                                    <p className="text-[8px] md:text-[10px] uppercase font-black tracking-[0.3em] md:tracking-[0.4em] text-white/20">Psychometric Alignment Signature</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-12 gap-x-8 md:gap-x-16">
                                {Object.entries(career.psychometricWeights).map(([trait, weight]: [any, any]) => (
                                    <div key={trait} className="space-y-3 md:space-y-4 group">
                                        <div className="flex justify-between items-end gap-2">
                                            <p className="text-[9px] md:text-[11px] uppercase font-black tracking-widest text-white/30 group-hover:text-primary transition-colors">{trait}</p>
                                            <span className="text-xs md:text-sm font-black italic text-primary">{weight}/10</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden p-[1px]">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${weight * 10}%` }}
                                                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_15px_var(--primary)]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card p-8 md:p-12 space-y-8 md:space-y-12 border-primary/20 shadow-2xl relative overflow-hidden bg-white/[0.01]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[60px] -z-10" />

                            <div className="w-12 md:w-16 h-12 md:h-16 rounded-lg md:rounded-[2rem] bg-white/5 flex items-center justify-center border border-white/10 shadow-xl">
                                <GraduationCap className="text-secondary w-6 md:w-8 h-6 md:h-8" />
                            </div>
                            <div className="space-y-6 md:space-y-8">
                                <h4 className="text-2xl md:text-3xl font-black tracking-tight uppercase italic">Pathways</h4>
                                <ul className="space-y-4 md:space-y-6">
                                    {career.educationPathways.map((path: string, i: number) => (
                                        <li key={i} className="flex gap-4 md:gap-6 text-xs md:text-sm font-medium text-white/40 items-start group">
                                            <span className="text-secondary font-black italic text-[10px] md:text-xs pt-0.5 flex-shrink-0">0{i + 1}.</span>
                                            <span className="group-hover:text-white transition-colors leading-relaxed">{path}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-4 md:pt-6">
                                <div className="glass p-6 md:p-8 rounded-xl md:rounded-[2.5rem] border-white/5 space-y-4 md:space-y-6 shadow-2xl bg-black/40">
                                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/20">Executive Sync</p>
                                    <Link href="/counseling" className="btn-vibrant justify-between w-full py-4 md:py-5 group text-[8px] md:text-[10px]">
                                        Consult Architect <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
