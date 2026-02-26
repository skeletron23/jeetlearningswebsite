"use client";

import { motion } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between px-12 py-3 rounded-full w-auto max-w-4xl"
        style={{
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Left Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-white font-fredoka text-sm font-medium hover:opacity-70 transition">
            Home
          </Link>
          <Link href="/" className="text-white font-fredoka text-sm font-medium hover:opacity-70 transition">
            Portfolio
          </Link>
          <Link href="/" className="text-white font-fredoka text-sm font-medium hover:opacity-70 transition">
            About
          </Link>
          <Link href="/" className="text-white font-fredoka text-sm font-medium hover:opacity-70 transition">
            Contact Us
          </Link>
        </div>

        {/* Center Logo - Mobile */}
        <div className="lg:hidden flex-1 text-center">
          <Link href="/" className="text-white font-fredoka text-lg font-bold">
            Canam
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 ml-auto lg:ml-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-white/10 rounded-full transition"
          >
            <Search className="w-5 h-5 text-white" />
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-full transition"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-20 left-6 right-6 z-40 rounded-3xl p-6"
          style={{
            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="space-y-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-white font-fredoka text-sm font-medium hover:opacity-70 transition py-2"
            >
              Home
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-white font-fredoka text-sm font-medium hover:opacity-70 transition py-2"
            >
              Portfolio
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-white font-fredoka text-sm font-medium hover:opacity-70 transition py-2"
            >
              About
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-white font-fredoka text-sm font-medium hover:opacity-70 transition py-2"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
