"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Award, MapPin, Users, ArrowRight, Check, Target, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { formatCareerName } from "@/app/data/careers";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import StackingSection from "@/app/components/StackingSection";
import { CareerDetail } from "@/app/data/careerDetails";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState } from "react";

interface CareerPageClientProps {
  category: string;
  career: string;
  careerName: string;
  categoryName: string;
  careerDetail: CareerDetail | null;
  categoryData: any;
}

const CANAM_RED = "#C20000";
const CANAM_RED_LINE = "#DA1313";

export function CareerPageClient({
  category,
  career,
  careerName,
  categoryName,
  careerDetail,
  categoryData,
}: CareerPageClientProps) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Sample video data - replace with actual video URLs
  const videos = [
    { id: 1, title: "Actuarial Science Overview", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "Career Path Guide", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 3, title: "Student Testimonials", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 4, title: "Exam Preparation Tips", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="border-b border-[#EEEEEE] backdrop-blur-sm relative" style={{ background: "rgba(255, 255, 255, 0.8)" }}>
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6 py-3 relative z-10">
          <div className="flex items-center gap-2 font-poppins text-sm">
            <Link href="/" className="text-[#757575] hover:text-[#C20000] transition-colors">Home</Link>
            <span className="text-[#757575]">/</span>
            <Link href={`/${category}`} className="text-[#757575] hover:text-[#C20000] transition-colors">{categoryName}</Link>
            <span className="text-[#757575]">/</span>
            <span className="font-medium" style={{ color: CANAM_RED }}>{careerName}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-[#EEEEEE]"
        style={{ background: "rgba(238, 238, 238, 0.50)", minHeight: "460px" }}
      >
        <div className="absolute left-0 top-0 h-full pointer-events-none" style={{ width: "39%" }}>
          <Image src="/assets/hero-bg-pattern.png" alt="" fill className="object-cover opacity-50" />
        </div>

        {/* Floating glassmorphic decorative elements */}
        <div 
          className="absolute w-24 h-24 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            top: "10%",
            right: "15%",
            animationDelay: "0s"
          }}
        />
        <div 
          className="absolute w-16 h-16 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            bottom: "20%",
            left: "5%",
            animationDelay: "2s"
          }}
        />
        <div 
          className="absolute w-20 h-20 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            top: "60%",
            right: "25%",
            animationDelay: "4s"
          }}
        />

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 flex items-center" style={{ minHeight: "460px" }}>
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full lg:w-[45%] py-14 px-8 rounded-3xl backdrop-blur-md"
            style={{
              background: "linear-gradient(147.04deg, rgba(255, 255, 255, 0.6) 8.82%, rgba(255, 255, 255, 0) 117.88%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)"
            }}
          >
            <div className="mb-5">
              <p className="font-poppins text-[#757575] text-base font-medium mb-2">Start Your Journey with</p>
              <div className="w-12 h-0.5 bg-[#C20000]" />
            </div>
            <h1
              className="font-poppins text-[#505050] mb-5"
              style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 500, lineHeight: "1.2", maxWidth: "565px" }}
            >
              Premium{" "}
              <strong className="font-bold underline underline-offset-2">{careerName}</strong>{" "}
              Counselling for Your Dream University
            </h1>
            <p
              className="font-poppins text-[#505050] mb-7"
              style={{ fontSize: "16px", fontWeight: 500, lineHeight: "28px", maxWidth: "560px" }}
            >
              {careerDetail?.description ||
                `Get expert guidance for ${careerName.toLowerCase()} career paths. From university selection to visa assistance, we help you achieve your goals.`}
            </p>
            <div className="flex items-center gap-2">
              <button
                className="font-poppins font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "#C50000" }}
              >
                Book Free Consultation
              </button>
              <ArrowRight className="w-4 h-4" style={{ color: "#C50000" }} />
            </div>
          </motion.div>

          {/* Right: Illustrations */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block absolute right-0 top-0 h-full"
            style={{ width: "55%", overflow: "hidden" }}
          >
            <div className="absolute" style={{ left: "0", top: "80px", width: "50%", height: "380px" }}>
              <Image src="/assets/hero-city.png" alt="City" fill className="object-contain object-bottom" />
            </div>
            <div className="absolute right-0 top-0 bottom-0" style={{ width: "60%" }}>
              <Image src="/assets/hero-student.png" alt="Student" fill className="object-contain object-bottom" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 border-b border-[#EEEEEE] relative overflow-hidden" style={{ background: "rgba(248, 248, 248, 0.6)" }}>
        {/* Floating decorative elements */}
        <div 
          className="absolute w-16 h-16 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            top: "50%",
            left: "5%",
            animationDelay: "0s"
          }}
        />
        <div 
          className="absolute w-12 h-12 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            top: "30%",
            right: "8%",
            animationDelay: "2s"
          }}
        />
        
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, label: "Avg. Salary", value: careerDetail?.salary || "₹5–20 LPA" },
              { icon: Clock, label: "Duration", value: careerDetail?.duration || "3–5 Years" },
              { icon: Target, label: "Difficulty", value: "Medium" },
              { icon: Rocket, label: "Growth", value: "High" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(131.68deg, rgba(255, 255, 255, 0.6) -3%, rgba(255, 255, 255, 0.6) 113.86%)`,
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="p-2 rounded-lg backdrop-blur-sm" style={{ background: "rgba(194, 0, 0, 0.08)" }}>
                  <stat.icon className="w-5 h-5" style={{ color: CANAM_RED }} />
                </div>
                <div>
                  <p className="font-poppins font-bold text-[#505050]">{stat.value}</p>
                  <p className="font-poppins text-xs text-[#757575]">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-14 relative overflow-hidden" style={{ background: "rgba(238, 238, 238, 0.30)" }}>
        {/* Floating decorative elements */}
        <div 
          className="absolute w-32 h-32 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            top: "5%",
            right: "10%",
            animationDelay: "1s"
          }}
        />
        <div 
          className="absolute w-20 h-20 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            bottom: "10%",
            left: "8%",
            animationDelay: "3s"
          }}
        />

        {/* Floating Image - Only for Actuarial Science */}
        {career === "actuarial_science" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-10 right-20 w-48 h-48 rounded-2xl overflow-hidden backdrop-blur-md animate-float hidden lg:block"
            style={{
              border: "2px solid rgba(255, 255, 255, 0.4)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              animationDelay: "1.5s"
            }}
          >
            {/* Placeholder for image */}
            <div className="w-full h-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center">
              <div className="text-6xl">📊</div>
            </div>
          </motion.div>
        )}
        
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 p-6 rounded-2xl backdrop-blur-sm mx-auto max-w-2xl"
            style={{
              background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.4) -3%, rgba(255, 255, 255, 0.2) 113.86%)",
              border: "1px solid rgba(255, 255, 255, 0.3)"
            }}
          >
            <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(24px, 2.5vw, 32px)" }}>
              Why Choose {careerName}?
            </h2>
            <p className="font-poppins text-[#757575]" style={{ fontSize: "16px" }}>
              Launch your career with personalized guidance from industry experts
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: TrendingUp, title: "Salary Range", value: careerDetail?.salary || "Competitive" },
              { icon: Clock, title: "Duration", value: careerDetail?.duration || "3–5 years" },
              { icon: Award, title: "Eligibility", value: careerDetail?.eligibility?.[0] || "12th Pass" },
              { icon: MapPin, title: "Opportunities", value: "Global & India" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                style={{ 
                  background: "linear-gradient(110.97deg, rgba(255, 255, 255, 0.5) -4.87%, rgba(255, 255, 255, 0) 103.95%)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)"
                }}
              >
                <div className="inline-flex p-3 rounded-xl mb-4" style={{ background: "rgba(194,0,0,0.08)" }}>
                  <item.icon className="w-6 h-6" style={{ color: CANAM_RED }} />
                </div>
                <h3 className="font-poppins font-semibold text-[#505050] mb-1">{item.title}</h3>
                <p className="font-poppins text-[#757575] text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-14 border-t border-[#EEEEEE] relative overflow-hidden" style={{ background: "rgba(238,238,238,0.50)" }}>
        {/* Floating decorative elements */}
        <div 
          className="absolute w-28 h-28 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            top: "15%",
            left: "5%",
            animationDelay: "0.5s"
          }}
        />
        <div 
          className="absolute w-24 h-24 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            bottom: "10%",
            right: "8%",
            animationDelay: "2.5s"
          }}
        />

        {/* Floating Image - Only for Actuarial Science */}
        {career === "actuarial_science" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-20 left-16 w-56 h-56 rounded-2xl overflow-hidden backdrop-blur-md animate-float hidden lg:block"
            style={{
              border: "2px solid rgba(255, 255, 255, 0.4)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              animationDelay: "2s"
            }}
          >
            {/* Placeholder for image */}
            <div className="w-full h-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center">
              <div className="text-6xl">🎓</div>
            </div>
          </motion.div>
        )}
        
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 p-6 rounded-2xl backdrop-blur-sm mx-auto max-w-2xl"
            style={{
              background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.4) -3%, rgba(255, 255, 255, 0.2) 113.86%)",
              border: "1px solid rgba(255, 255, 255, 0.3)"
            }}
          >
            <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(24px,2.5vw,32px)" }}>
              Our Services
            </h2>
            <p className="font-poppins text-[#757575]" style={{ fontSize: "16px" }}>
              Comprehensive support throughout your {careerName.toLowerCase()} journey
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "/assets/icon-counselling.svg", title: "In-person and Virtual Counselling" },
              { icon: "/assets/icon-app-support.svg", title: "End-to-End Application Support" },
              { icon: "/assets/icon-visa.svg", title: "Visa Guidance" },
              { icon: "/assets/icon-institute.svg", title: "Institute and Course Selection" },
              { icon: "/assets/icon-scholarships.svg", title: "Access to Exclusive Scholarships" },
              { icon: "/assets/icon-accommodation.svg", title: "Accommodation Assistance" },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="flex items-center gap-4 p-5 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                style={{ 
                  background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.6) -3%, rgba(255, 255, 255, 0.6) 113.86%)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
                }}
              >
                <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain shrink-0" />
                <div>
                  <p className="font-poppins font-medium text-[#505050]" style={{ fontSize: "15px" }}>{service.title}</p>
                  <div className="mt-1.5" style={{ width: "40px", height: "2px", background: CANAM_RED_LINE }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Actuarial Science Stacking Section - ONLY FOR ACTUARIAL SCIENCE */}
      {career === "actuarial_science" && (
        <StackingSection
          title="Actuarial Science Career Path"
          subtitle="Complete guide to becoming an actuary in India"
          items={[
            {
              id: "1",
              title: "What is Actuarial Science?",
              icon: "∑",
              description: "Understanding the profession and opportunities",
              color: "#C20000",
              content: [
                "Mathematics: Actuaries use maths, statistics, and probability to measure and manage financial risk.",
                "Prediction: They predict future events like insurance claims, pension costs, and investment risks using data models.",
                "Regulation: In India, actuaries are officially regulated by the Institute of Actuaries of India (IAI) under the Actuaries Act, 2006.",
                "Opportunity: India currently has only 500–700 Fellow actuaries, but the government targets 25,000 by 2030 — a massive career opportunity.",
              ],
            },
            {
              id: "2",
              title: "Who Should Consider This Career?",
              icon: "🧮",
              description: "Essential traits and skills required",
              color: "#DA1313",
              content: [
                "Mathematics: Strong love for probability, logical reasoning, and numerical problem-solving.",
                "Perseverance: Patience to qualify through demanding professional exams spanning 6–10 years.",
                "Integrity: Sharp attention to detail, analytical thinking, and strong ethical standards.",
                "Communication: Ability to explain complex actuarial data to non-technical audiences clearly.",
                "Technology: Comfort with Excel, Python, R, SQL, and specialised actuarial software.",
              ],
            },
            {
              id: "3",
              title: "Key Responsibilities & Work Process of an Actuary",
              icon: "📊",
              description: "What actuaries do daily",
              color: "#E70000",
              content: [
                "Understanding: Identify the business problem and what solution is actually needed.",
                "Analysis: Use data, mathematics, and computers to find accurate solutions.",
                "Pricing: Fix correct insurance prices and calculate future savings accurately.",
                "Risk: Study and manage risks in insurance and investment portfolios.",
                "Compliance: Follow all government rules and regulatory guidelines strictly.",
                "Reporting: Explain results and updated plans clearly to managers and officials.",
              ],
            },
            {
              id: "4",
              title: "What Will It Cost?",
              icon: "�",
              description: "Financial investment breakdown",
              color: "#B30000",
              content: [
                "ACET: Free entrance exam with ₹1,500 annual student membership fee.",
                "Exams: Separate fees apply for each core and advanced paper.",
                "Coaching: Study materials and optional coaching add extra expenses.",
                "Degree: Government colleges are cheaper; private universities cost significantly more.",
                "Total: Overall investment ranges between ₹2 to ₹5 lakhs over 6–10 years.",
              ],
            },
            {
              id: "5",
              title: "Scholarship Opportunities",
              icon: "🎓",
              description: "Financial aid available",
              color: "#9B0000",
              content: [
                "Central: Central Sector Scholarship supports high-performing Class 12 students from low-income families.",
                "Community: Post-Matric Scholarships available for SC, ST, OBC, and minority students.",
                "Merit: Merit-cum-Means and NMMS scholarships support deserving economically weaker students.",
                "AICTE: Pragati and Saksham schemes support technical and professional course students.",
                "State: State governments and universities offer additional merit and need-based financial aid.",
              ],
            },
            {
              id: "6",
              title: "Key Challenges",
              icon: "⚠",
              description: "Realistic expectations",
              color: "#C20000",
              content: [
                "Extremely difficult exams with high failure rates (30–40% pass rate at advanced levels)",
                "Long qualification period (6–10 years) requiring study alongside a full-time job",
                "Limited awareness among school counsellors and parents in India",
                "Niche entry-level job market; most roles concentrated in Mumbai and Gurgaon",
              ],
            },
            {
              id: "7",
              title: "Start Now (Class 9–12)",
              icon: "📚",
              description: "Your roadmap to becoming an actuary",
              color: "#DA1313",
              content: [
                "Master probability, statistics, and calculus in school",
                "Learn Excel and basic Python programming",
                "Appear for the ACET in Class 12 (registration is free)",
                "Participate in the IAI Actuarial Olympiad and Maths competitions",
                "Explore free courses on Coursera, edX, and NPTEL",
              ],
            },
          ]}
          backgroundColor="bg-white"
        />
      )}

      {/* Key Skills */}
      {careerDetail?.skills && (
        <section className="py-14 border-t border-[#EEEEEE] relative overflow-hidden" style={{ background: "rgba(248, 248, 248, 0.5)" }}>
          {/* Floating decorative elements */}
          <div 
            className="absolute w-20 h-20 rounded-full backdrop-blur-md animate-float"
            style={{
              background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              top: "10%",
              right: "12%",
              animationDelay: "1.5s"
            }}
          />
          <div 
            className="absolute w-16 h-16 rounded-full backdrop-blur-md animate-float"
            style={{
              background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              bottom: "15%",
              left: "10%",
              animationDelay: "3.5s"
            }}
          />

          {/* Floating Image - Only for Actuarial Science */}
          {career === "actuarial_science" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-16 right-24 w-52 h-52 rounded-2xl overflow-hidden backdrop-blur-md animate-float hidden lg:block"
              style={{
                border: "2px solid rgba(255, 255, 255, 0.4)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                animationDelay: "1s"
              }}
            >
              {/* Placeholder for image */}
              <div className="w-full h-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center">
                <div className="text-6xl">⚙️</div>
              </div>
            </motion.div>
          )}
          
          <div className="max-w-[1090px] mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 p-6 rounded-2xl backdrop-blur-sm mx-auto max-w-2xl"
              style={{
                background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.4) -3%, rgba(255, 255, 255, 0.2) 113.86%)",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}
            >
              <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(24px,2.5vw,32px)" }}>
                Key Skills Required
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {careerDetail.skills.map((skill: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="flex items-center gap-3 p-5 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
                  style={{ 
                    background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.6) -3%, rgba(255, 255, 255, 0.6) 113.86%)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(194,0,0,0.10)" }}>
                    <Check className="w-4 h-4" style={{ color: CANAM_RED }} />
                  </div>
                  <p className="font-poppins font-semibold text-[#505050]" style={{ fontSize: "15px" }}>{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Top Companies */}
      {careerDetail?.companies && (
        <section className="py-14 border-t border-[#EEEEEE] relative overflow-hidden" style={{ background: "rgba(238, 238, 238, 0.40)" }}>
          {/* Floating decorative elements */}
          <div 
            className="absolute w-24 h-24 rounded-full backdrop-blur-md animate-float"
            style={{
              background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              top: "8%",
              left: "6%",
              animationDelay: "2s"
            }}
          />
          <div 
            className="absolute w-28 h-28 rounded-full backdrop-blur-md animate-float"
            style={{
              background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              bottom: "12%",
              right: "10%",
              animationDelay: "4s"
            }}
          />
          
          <div className="max-w-[1090px] mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 p-6 rounded-2xl backdrop-blur-sm mx-auto max-w-2xl"
              style={{
                background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.4) -3%, rgba(255, 255, 255, 0.2) 113.86%)",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}
            >
              <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(24px,2.5vw,32px)" }}>
                Top Recruiting Companies
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {careerDetail.companies.map((company: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="flex items-center gap-3 p-5 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
                  style={{ 
                    background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.6) -3%, rgba(255, 255, 255, 0.6) 113.86%)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(194,0,0,0.08)" }}>
                    <Users className="w-5 h-5" style={{ color: CANAM_RED }} />
                  </div>
                  <p className="font-poppins font-semibold text-[#505050]" style={{ fontSize: "15px" }}>{company}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 border-t border-[#EEEEEE] relative overflow-hidden" style={{ background: "rgba(238,238,238,0.50)" }}>
        {/* Floating decorative elements */}
        <div 
          className="absolute w-32 h-32 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            top: "20%",
            left: "10%",
            animationDelay: "1s"
          }}
        />
        <div 
          className="absolute w-20 h-20 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            top: "15%",
            right: "15%",
            animationDelay: "3s"
          }}
        />
        
        <div className="max-w-[700px] mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <p className="font-poppins text-[#757575] text-sm mb-2">Start Your Journey</p>
            <div className="w-10 h-0.5 bg-[#C20000] mx-auto" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-poppins font-bold text-[#505050] mb-4"
            style={{ fontSize: "clamp(24px,2.5vw,32px)" }}
          >
            Ready to Start Your {careerName} Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-poppins text-[#757575] mb-8"
            style={{ fontSize: "16px", lineHeight: "26px" }}
          >
            Get personalized career guidance from our expert counselors to help you make the right decisions for your future.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-8 py-4 font-poppins font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
            style={{ 
              background: `linear-gradient(135deg, ${CANAM_RED} 0%, #DA1313 100%)`,
              fontSize: "16px",
              boxShadow: "0 8px 24px rgba(194, 0, 0, 0.3)"
            }}
          >
            Book Free Career Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="py-16 border-t border-[#EEEEEE] relative overflow-hidden" style={{ background: "rgba(238,238,238,0.50)" }}>
        {/* Floating decorative elements */}
        <div 
          className="absolute w-32 h-32 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            top: "10%",
            left: "5%",
            animationDelay: "0s"
          }}
        />
        <div 
          className="absolute w-24 h-24 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            bottom: "10%",
            right: "8%",
            animationDelay: "2s"
          }}
        />

        <div className="max-w-[1090px] mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 p-6 rounded-2xl backdrop-blur-sm mx-auto max-w-2xl"
            style={{
              background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.4) -3%, rgba(255, 255, 255, 0.2) 113.86%)",
              border: "1px solid rgba(255, 255, 255, 0.3)"
            }}
          >
            <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(24px,2.5vw,32px)" }}>
              Learn More Through Videos
            </h2>
            <p className="font-poppins text-[#757575]" style={{ fontSize: "16px" }}>
              Watch expert insights and student experiences
            </p>
          </motion.div>

          {/* Video Carousel */}
          <div className="relative">
            {/* Video Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden backdrop-blur-md mb-8"
              style={{
                background: "linear-gradient(110.97deg, rgba(255, 255, 255, 0.5) -4.87%, rgba(255, 255, 255, 0) 103.95%)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-3xl"
                  src={videos[currentVideoIndex].url}
                  title={videos[currentVideoIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* Video Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-8"
            >
              <h3 className="font-poppins font-bold text-[#505050] text-xl">
                {videos[currentVideoIndex].title}
              </h3>
              <p className="font-poppins text-[#757575] text-sm mt-2">
                Video {currentVideoIndex + 1} of {videos.length}
              </p>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevVideo}
                className="p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
                style={{
                  background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.6) -3%, rgba(255, 255, 255, 0.6) 113.86%)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
                }}
              >
                <ChevronLeft className="w-6 h-6" style={{ color: CANAM_RED }} />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {videos.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentVideoIndex(idx)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: currentVideoIndex === idx ? "32px" : "12px",
                      height: "12px",
                      background: currentVideoIndex === idx ? CANAM_RED : "rgba(194, 0, 0, 0.2)",
                    }}
                    whileHover={{ scale: 1.1 }}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextVideo}
                className="p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
                style={{
                  background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.6) -3%, rgba(255, 255, 255, 0.6) 113.86%)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
                }}
              >
                <ChevronRight className="w-6 h-6" style={{ color: CANAM_RED }} />
              </motion.button>
            </div>

            {/* Thumbnail Preview */}
            <div className="mt-8 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {videos.map((video, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentVideoIndex(idx)}
                  className="flex-shrink-0 rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:scale-105"
                  style={{
                    width: "120px",
                    height: "80px",
                    background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.6) -3%, rgba(255, 255, 255, 0.6) 113.86%)",
                    border: currentVideoIndex === idx ? `2px solid ${CANAM_RED}` : "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: currentVideoIndex === idx ? `0 0 12px ${CANAM_RED}40` : "0 2px 8px rgba(0, 0, 0, 0.04)"
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-6 h-6" style={{ color: CANAM_RED }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
