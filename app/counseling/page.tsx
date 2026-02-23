'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, DollarSign, ArrowRight, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CounselingPage() {
    const [search, setSearch] = useState('');

    const counselors = [
        { id: 1, name: 'Dr. Sarah Chen', specialization: 'Tech & Innovation', rating: 4.9, price: 500, availability: 'Available' },
        { id: 2, name: 'Raj Patel', specialization: 'Business & Entrepreneurship', rating: 4.8, price: 450, availability: 'Available' },
        { id: 3, name: 'Emma Wilson', specialization: 'Creative & Design', rating: 4.7, price: 400, availability: 'Available' },
    ];

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 md:pt-40 pb-12 md:pb-20 px-4 md:px-6 relative" style={{ background: 'var(--background)' }}>
                <div className="bg-mesh" />
                <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(168,85,247,0.3)', top: -100, left: -100 }} />

                <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 relative z-10">
                    <header className="space-y-6 md:space-y-8 max-w-3xl">
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none gradient-text uppercase italic">Global Agora.</h1>
                        <p className="text-base md:text-xl text-white/40 font-medium leading-relaxed">
                            Connect with verified career architects and mentors. Get personalized guidance from industry experts.
                        </p>
                    </header>

                    {/* Search */}
                    <div className="glass p-6 md:p-8 rounded-2xl md:rounded-[3rem] flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-center shadow-2xl">
                        <div className="relative flex-1 group">
                            <Search className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-white/20 w-5 md:w-6 h-5 md:h-6" />
                            <input
                                type="text"
                                placeholder="Search counselors..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-4 md:py-5 pl-14 md:pl-20 pr-6 md:pr-8 focus:outline-none focus:border-primary/40 transition-all font-medium text-sm"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <button className="btn-ghost px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm flex items-center gap-2 justify-center md:justify-start">
                            <Filter className="w-4 md:w-5 h-4 md:h-5" /> Filter
                        </button>
                    </div>

                    {/* Counselor Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {counselors.map((counselor, i) => (
                            <motion.div
                                key={counselor.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 md:p-10 space-y-6 md:space-y-8 flex flex-col justify-between"
                            >
                                <div className="space-y-4 md:space-y-6">
                                    <div className="w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary" />
                                    <div className="space-y-2 md:space-y-3">
                                        <h3 className="text-lg md:text-xl font-black tracking-tight">{counselor.name}</h3>
                                        <p className="text-xs md:text-sm text-white/40 font-medium">{counselor.specialization}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3 md:w-4 h-3 md:h-4 fill-secondary text-secondary" />
                                            ))}
                                        </div>
                                        <span className="text-xs md:text-sm text-white/40">{counselor.rating}</span>
                                    </div>
                                </div>

                                <div className="space-y-4 md:space-y-6 pt-4 md:pt-6 border-t border-white/5">
                                    <div className="flex justify-between items-center">
                                        <div className="space-y-1">
                                            <p className="text-[8px] md:text-[9px] uppercase font-black tracking-widest text-white/20">Session Price</p>
                                            <p className="text-lg md:text-xl font-black italic">₹{counselor.price}</p>
                                        </div>
                                        <div className="text-right space-y-1">
                                            <p className="text-[8px] md:text-[9px] uppercase font-black tracking-widest text-white/20">Status</p>
                                            <p className="text-xs md:text-sm font-black text-primary">{counselor.availability}</p>
                                        </div>
                                    </div>
                                    <button className="btn-vibrant w-full justify-center py-3 md:py-4 text-xs md:text-sm">
                                        Book Session <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
