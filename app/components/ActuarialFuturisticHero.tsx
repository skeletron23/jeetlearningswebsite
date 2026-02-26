"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const BRIGHT_BLUE = "#0A84FF";
const DARK_BG = "#000000";

export function ActuarialFuturisticHero() {
  const dotGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ background: "#FFFFFF" }}>
      {/* Main Hero Section */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: "850px", marginTop: "-100px", paddingTop: "100px" }}>
        {/* Blue Background Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${BRIGHT_BLUE} 0%, #0066FF 100%)`,
            left: "0",
            right: "0",
            top: "-100px",
            bottom: "0",
          }}
        />

        {/* Decorative Dot Grids - Top Right */}
        <motion.div
          variants={dotGridVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-20 right-20 w-16 h-16 grid grid-cols-4 gap-2 z-10"
        >
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              variants={dotVariants}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "rgba(255, 255, 255, 0.6)" }}
            />
          ))}
        </motion.div>

        {/* Decorative Dot Grids - Bottom Center */}
        <motion.div
          variants={dotGridVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-12 h-12 grid grid-cols-3 gap-1.5 z-10"
        >
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              variants={dotVariants}
              className="w-1 h-1 rounded-full"
              style={{ background: "rgba(255, 255, 255, 0.5)" }}
            />
          ))}
        </motion.div>

        {/* Content Container */}
        <div className="relative z-20 h-full flex items-center pt-32">
          <div className="w-full max-w-6xl mx-auto px-8">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white space-y-6 flex-1 max-w-2xl"
              >
                {/* Main Heading */}
                <div>
                  <h1 className="font-luckiest-guy text-4xl md:text-5xl font-bold mb-4 leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Actuarial Science
                  </h1>
                  <p className="font-fredoka text-base leading-relaxed opacity-90">
                    Whether you become a chibi actuary or a full-fledged financial risk expert, we give you the tools to design, analyze, and excel in your actuarial career beautifully.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg font-fredoka font-semibold text-base transition-all"
                    style={{ background: "#FFFFFF", color: "#000000" }}
                  >
                    Start Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg font-fredoka font-semibold text-base border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all"
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Bottom Image - REMOVED, now in bottom cards section */}
        </div>

        {/* Bottom Cards Section */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="w-full max-w-6xl mx-auto px-8 pb-8">
            <div className="grid lg:grid-cols-3 gap-6 items-end">
              {/* Left Card - Offer */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="p-6 rounded-2xl"
                style={{ background: DARK_BG }}
              >
                <h3 className="font-fredoka text-white text-lg font-semibold mb-2">
                  Join our actuarial class
                </h3>
                <p className="font-fredoka text-white text-3xl font-bold mb-3">
                  50% Off
                </p>
                <p className="font-fredoka text-white opacity-80 text-sm mb-4">
                  Create, showcase, and sell your actuarial expertise and financial analysis with ease.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-6 rounded bg-white opacity-50" />
                  <div className="flex gap-1.5">
                    <div className="w-6 h-6 rounded bg-yellow-500 opacity-70" />
                    <div className="w-6 h-6 rounded bg-blue-600 opacity-70" />
                  </div>
                </div>
              </motion.div>

              {/* Right Card - Platform Info */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="p-6 rounded-2xl"
                style={{ background: DARK_BG }}
              >
                <p className="font-fredoka text-white opacity-90 text-sm mb-4 leading-relaxed">
                  We're a platform built for actuaries and financial professionals who want to share their risk analysis expertise and career insights with the world.
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-white opacity-70" />
                    <span className="font-dm-sans text-white text-xs">100k Like's</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-white opacity-70" />
                    <span className="font-dm-sans text-white text-xs">10k Save's</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-white opacity-70" />
                    <span className="font-dm-sans text-white text-xs">20k Share</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Image - Beside Cards */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative overflow-hidden rounded-2xl"
                style={{ height: "700px" }}
              >
                <Image
                  src="/acturial/image.png"
                  alt="Actuarial Science"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
