'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, ArrowRight, ArrowLeft, CheckCircle, Sparkles, Loader2, Target, ShieldCheck, Zap, Activity } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Question {
    _id: string;
    text: string;
    type: string;
    options: { text: string; value: number }[];
}

interface Response {
    questionId: string;
    value: number;
    responseTimeMs: number;
}

export default function AssessmentPage() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [responses, setResponses] = useState<Response[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [results, setResults] = useState<any>(null);

    const router = useRouter();

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            const res = await fetch('/api/questions');
            const data = await res.json();
            setQuestions(data);
        } catch (error) {
            console.error('Error fetching questions:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAnswer = (value: number) => {
        const newResponses = [...responses];
        const existingIndex = newResponses.findIndex(r => r.questionId === questions[currentIndex]._id);

        const responseData = {
            questionId: questions[currentIndex]._id,
            value: value,
            responseTimeMs: 0
        };

        if (existingIndex > -1) {
            newResponses[existingIndex] = responseData;
        } else {
            newResponses.push(responseData);
        }

        setResponses(newResponses);

        if (currentIndex < questions.length - 1) {
            setTimeout(() => setCurrentIndex(currentIndex + 1), 300);
        } else {
            handleSubmit(newResponses);
        }
    };

    const handleSubmit = async (finalResponses = responses) => {
        setSubmitting(true);
        try {
            const res = await fetch('/api/assessment/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: '65d8f3e2b4e5a9c2d1b0a1f0',
                    type: 'full-psychometric',
                    responses: finalResponses
                })
            });
            const data = await res.json();
            setResults(data);
            setCompleted(true);
        } catch (error) {
            console.error('Error submitting assessment:', error);
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#020617]">
                <div className="text-center space-y-6">
                    <Loader2 className="w-16 h-16 text-primary animate-spin mx-auto" />
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Initialising Core Logic</p>
                </div>
            </div>
        );
    }

    if (completed) {
        return (
            <main className="min-h-screen pt-32 md:pt-40 pb-12 md:pb-20 px-4 md:px-6 relative flex items-center justify-center">
                <div className="bg-mesh" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-4xl w-full space-y-12 md:space-y-20 text-center"
                >
                    <div className="w-24 md:w-32 h-24 md:h-32 bg-primary/10 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center mx-auto border border-primary/20 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                        <CheckCircle className="text-primary w-12 md:w-16 h-12 md:h-16" />
                    </div>
                    <div className="space-y-4 md:space-y-6">
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none gradient-text uppercase italic">SYNTHESIS COMPLETE.</h1>
                        <p className="text-white/40 text-base md:text-xl font-medium max-w-xl mx-auto">Our neural engine has successfully mapped your responses to the professional atlas.</p>
                    </div>

                    <div className="grid gap-4 md:gap-6">
                        {results?.topMatches.map((match: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 text-left rounded-2xl md:rounded-[3rem] border-white/5 hover:border-primary/40 transition-all"
                            >
                                <div className="space-y-3 md:space-y-4 flex-1">
                                    <p className="text-[9px] md:text-[10px] uppercase font-black tracking-[0.3em] md:tracking-[0.4em] text-primary">Priority Match Rank 0{i + 1}</p>
                                    <h3 className="text-2xl md:text-4xl font-black tracking-tight italic uppercase">{match.name}</h3>
                                </div>
                                <div className="flex items-center gap-6 md:gap-10 w-full md:w-auto">
                                    <div className="text-right flex-1 md:flex-none">
                                        <p className="text-[8px] md:text-[9px] uppercase font-black tracking-[0.2em] md:tracking-[0.3em] text-white/20">Alignment Index</p>
                                        <p className="text-3xl md:text-5xl font-black italic">{match.score}%</p>
                                    </div>
                                    <div className="w-16 md:w-20 h-16 md:h-20 rounded-2xl md:rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0">
                                        <Target className="text-primary w-8 md:w-10 h-8 md:h-10" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-6 md:pt-10">
                        <button
                            onClick={() => router.push('/explorer')}
                            className="btn-vibrant px-12 md:px-20 py-6 md:py-8 text-base md:text-xl w-full md:w-auto"
                        >
                            Enter The Sandbox <ArrowRight className="w-5 md:w-6 h-5 md:h-6" />
                        </button>
                    </div>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#020617] pt-32 md:pt-40 pb-12 md:pb-20 px-4 md:px-6 relative overflow-hidden">
            <div className="bg-mesh opacity-40" />

            {/* Floating Calibration Orbs */}
            <div className="glow-orb w-[400px] h-[400px] bg-primary/20 top-0 left-0" style={{ animationDelay: '0s' }} />
            <div className="glow-orb w-[300px] h-[300px] bg-secondary/10 bottom-0 right-0" style={{ animationDelay: '-10s' }} />

            <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 relative z-10">
                {/* Progress Header */}
                <div className="glass p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 shadow-2xl">
                    <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                            <Activity className="text-primary w-4 md:w-5 h-4 md:h-5 animate-pulse" />
                            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/30">Live Calibration Sequence</p>
                        </div>
                        <h2 className="text-lg md:text-2xl font-black italic uppercase tracking-tighter">
                            Protocol: <span className="text-primary">Step {currentIndex + 1}</span> of {questions.length}
                        </h2>
                    </div>
                    <div className="w-full md:w-64 space-y-3">
                        <div className="flex justify-between text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/20">
                            <span>Syncing Data</span>
                            <span>{Math.round(((currentIndex + 1) / questions.length) * 100)}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[2px]">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                                className="h-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-shift rounded-full shadow-[0_0_20px_var(--primary)]"
                            />
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -20 }}
                        className="glass-card p-8 md:p-16 space-y-8 md:space-y-12 bg-white/[0.02] border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 blur-[80px]" />

                        <div className="space-y-4 md:space-y-6 relative">
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-primary/60">Input Node: Q0{currentIndex + 1}</span>
                            <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight md:leading-none gradient-text uppercase italic">
                                {questions[currentIndex]?.text}
                            </h1>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                            {questions[currentIndex]?.options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleAnswer(opt.value)}
                                    className="glass group p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all space-y-4 md:space-y-6 text-center relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center mx-auto border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                                        <span className="text-xs md:text-sm font-black italic">{i === 1 ? 'No' : i === 2 ? 'Maybe' : i === 3 ? 'Yes' : 'Very'}</span>
                                    </div>
                                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                                        {opt.text}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-between items-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/10 py-6 md:py-10">
                    <button onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)} className="hover:text-primary transition-colors disabled:opacity-0" disabled={currentIndex === 0}>
                        Backtrack Strategy
                    </button>
                    <div className="flex items-center gap-4">
                        <ShieldCheck className="w-3 md:w-4 h-3 md:h-4" /> Calibration Secure
                    </div>
                </div>
            </div>
        </main>
    );
}
