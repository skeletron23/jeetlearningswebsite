'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Explorer', href: '/explorer' },
    { label: 'Database', href: '/about' },
    { label: 'Mentors', href: '/counseling' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-3 md:py-4 bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}>
            <Sparkles className="text-white w-4 md:w-5 h-4 md:h-5" />
          </div>
          <span className="text-sm md:text-lg font-black tracking-tight uppercase italic hidden sm:inline">
            Jeet<span style={{ color: 'var(--secondary)' }}>Learnings</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-wider text-white/50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="text-xs font-black uppercase tracking-wider text-white/50 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link href="/register" className="btn-vibrant px-4 md:px-6 py-2 md:py-3 text-xs inline-flex items-center gap-2">
            Join <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
        >
          {mobileOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Menu className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 glass rounded-2xl p-4 space-y-3 z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-xs font-black uppercase tracking-wider text-white/60 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="block text-center text-xs font-black uppercase tracking-wider text-white/50 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="btn-vibrant w-full justify-center py-2 text-xs inline-flex items-center gap-2"
              >
                Join <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
