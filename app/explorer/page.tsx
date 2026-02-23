'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Briefcase, Zap, Star, Sparkles, Filter } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CareerExplorer() {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');

    const categories = ['All', 'Technology', 'Design', 'Healthcare', 'Business', 'Arts', 'STEM'];

    useEffect(() => {
        fetchCareers();
    }, [category]);

    const fetchCareers = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/careers?category=${category}&search=${search}`);
            const data = await res.json();
            setCareers(data);
        } catch (error) {
            console.error('Error fetching careers:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 md:pt-40 pb-12 md:pb-20 px-4 md:px-6 relative" style={{ background: 'var(--background)' }}>
                <div className="bg-mesh" />
                <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(168,85,247,0.3)', top: -100, left: -100 }} />
                <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(6,182,212,0.2)', bottom: -100, right: -100, animationDelay: '-8s' }} />

                <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 relative z-10">
                    <header className="space-y-6 md:space-y-8 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary">
                            <Sparkles className="w-3 md:w-4 h-3 md:h-4" /> The Atlas of Potential
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none gradient-text uppercase italic">Explorer.</h1>
                        <p className="text-base md:text-xl text-white/40 font-medium leading-relaxed">
                            Every career is a mathematical signature. Browse our index of <span className="text-white">250+ blueprints</span> to find the architecture that resonates with your core.
                        </p>
                    </header>

                    {/* Search & Filter Hub */}
                    <div className="glass p-6 md:p-8 rounded-2xl md:rounded-[3rem] flex flex-col lg:flex-row gap-4 md:gap-8 items-stretch lg:items-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />

                        <div className="relative flex-1 group w-full">
                            <Search className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-white/20 w-5 md:w-6 h-5 md:h-6 group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Query by career name..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-[2rem] py-4 md:py-5 pl-14 md:pl-20 pr-6 md:pr-8 focus:outline-none focus:border-primary/40 transition-all font-black uppercase text-xs tracking-widest placeholder:text-white/10"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && fetchCareers()}
                            />
                        </div>

                        <div className="flex gap-2 md:gap-3 p-2 bg-black/40 rounded-xl md:rounded-[2.5rem] border border-white/10 overflow-x-auto no-scrollbar">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`px-4 md:px-8 py-2.5 md:py-3.5 rounded-lg md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] transition-all whitespace-nowrap ${category === cat
                                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-xl shadow-primary/20'
                                        : 'text-white/30 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid Architecture */}
                    <AnimatePresence mode="wait">
                        {loading ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                            >
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <div key={i} className="h-80 glass-card animate-pulse" />
                                ))}
                            </motion.div>
                        ) : careers.length > 0 ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                            >
                                {careers.map((career: any, i: number) => (
                                    <CareerCard key={career._id} career={career} index={i} />
                                ))}
                            </motion.div>
                        ) : (
                            <div className="text-center py-20 md:py-40 glass rounded-2xl md:rounded-[3rem] border-dashed border-white/10">
                                <p className="text-base md:text-xl font-black text-white/20 uppercase tracking-widest">No matching blueprints found.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
            <Footer />
        </>
    );
}

function CareerCard({ career, index }: { career: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card p-6 md:p-10 flex flex-col justify-between group h-full"
        >
            <div className="space-y-4 md:space-y-6">
                <div className="flex justify-between items-start gap-4">
                    <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors flex-shrink-0">
                        <Briefcase className="text-primary w-5 md:w-6 h-5 md:h-6" />
                    </div>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/30 group-hover:text-primary transition-colors text-right">
                        {career.category}
                    </span>
                </div>

                <div className="space-y-2 md:space-y-3">
                    <h3 className="text-lg md:text-2xl font-black tracking-tight leading-tight md:leading-none group-hover:gradient-text transition-all">{career.name}</h3>
                    <p className="text-xs md:text-sm text-white/40 font-medium line-clamp-3 leading-relaxed">
                        {career.shortDescription}
                    </p>
                </div>

                <div className="flex items-center gap-4 md:gap-6 flex-wrap">
                    <div className="flex items-center gap-2">
                        <Zap className="w-3 md:w-4 h-3 md:h-4 text-primary fill-primary" />
                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/60">{career.growthOutlook}% Reach</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Star className="w-3 md:w-4 h-3 md:h-4 text-secondary fill-secondary" />
                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/60">Tier {career.difficultyIndex}</span>
                    </div>
                </div>
            </div>

            <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-white/5 flex justify-between items-center gap-4">
                <div className="space-y-1">
                    <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-white/20 font-black">Fiscal Entry</p>
                    <p className="text-base md:text-xl font-black tracking-tighter italic">₹{(career.salaryRange.mid / 100000).toFixed(1)}L <span className="text-[9px] md:text-[10px] text-white/20">ANNUAL</span></p>
                </div>
                <Link
                    href={`/explorer/${career.slug}`}
                    className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all group/btn flex-shrink-0"
                >
                    <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
}
