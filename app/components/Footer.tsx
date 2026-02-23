'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-8 sm:py-12 md:py-24 px-4 sm:px-6 w-full" style={{ background: 'rgba(0,0,0,0.8)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 md:gap-16 mb-8 sm:mb-12 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-2 sm:space-y-3">
            <span className="text-base sm:text-lg md:text-2xl font-black tracking-tight uppercase italic">
              Jeet<span style={{ color: 'var(--primary)' }}>Learnings</span>
            </span>
            <p className="text-[8px] sm:text-[9px] font-black tracking-wider text-white/20 uppercase">Agora Systems // Cognitive Division</p>
          </div>

          {/* Product */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-[8px] sm:text-[9px] font-black tracking-wider text-white/30 uppercase">Product</p>
            <ul className="space-y-2 sm:space-y-3 text-[10px] sm:text-[11px] font-medium text-white/40">
              <li><Link href="/explorer" className="hover:text-white transition-colors">Career Explorer</Link></li>
              <li><Link href="/assessment" className="hover:text-white transition-colors">Assessment</Link></li>
              <li><Link href="/counseling" className="hover:text-white transition-colors">Counselors</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-[8px] sm:text-[9px] font-black tracking-wider text-white/30 uppercase">Company</p>
            <ul className="space-y-2 sm:space-y-3 text-[10px] sm:text-[11px] font-medium text-white/40">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-[8px] sm:text-[9px] font-black tracking-wider text-white/30 uppercase">Legal</p>
            <ul className="space-y-2 sm:space-y-3 text-[10px] sm:text-[11px] font-medium text-white/40">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 sm:pt-8 md:pt-12 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-[8px] sm:text-[9px] font-black tracking-wider uppercase text-white/20">
          <p>&copy; {currentYear} JeetLearnings. All rights reserved.</p>
          <div className="flex gap-6 sm:gap-8">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
