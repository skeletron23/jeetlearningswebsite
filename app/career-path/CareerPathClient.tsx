"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { careerCategories } from "@/app/data/careers";
import {
  Search,
  ArrowRight,
  DollarSign,
  Leaf,
  Building2,
  Palette,
  Microscope,
  Briefcase,
  BookOpen,
  Globe,
  Building,
  Stethoscope,
  UtensilsCrossed,
  Users,
  Code,
  Scale,
  Plane,
  Factory,
  Megaphone,
  Newspaper,
  Shield,
  Zap,
  Trophy,
} from "lucide-react";

const categoryIcons: { [key: string]: React.ReactNode } = {
  account_and_finance: <DollarSign className="w-8 h-8" />,
  agriculture: <Leaf className="w-8 h-8" />,
  architecture_and_construction: <Building2 className="w-8 h-8" />,
  arts_and_design: <Palette className="w-8 h-8" />,
  bio_science_and_research: <Microscope className="w-8 h-8" />,
  business_management: <Briefcase className="w-8 h-8" />,
  education_and_training: <BookOpen className="w-8 h-8" />,
  environment: <Globe className="w-8 h-8" />,
  government_services: <Building className="w-8 h-8" />,
  health_science: <Stethoscope className="w-8 h-8" />,
  hospitality_and_tourism: <UtensilsCrossed className="w-8 h-8" />,
  human_and_social_sciences: <Users className="w-8 h-8" />,
  information_technology: <Code className="w-8 h-8" />,
  legal_services: <Scale className="w-8 h-8" />,
  logistics_and_transportation: <Plane className="w-8 h-8" />,
  manufacturing: <Factory className="w-8 h-8" />,
  marketing_and_advertising: <Megaphone className="w-8 h-8" />,
  media_and_communication: <Newspaper className="w-8 h-8" />,
  public_safety_and_security: <Shield className="w-8 h-8" />,
  science_mathematics_engineering: <Zap className="w-8 h-8" />,
  sports_and_physical_activities: <Trophy className="w-8 h-8" />,
};

export default function CareerPathClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  const categories = Object.entries(careerCategories).map(([slug, data]) => ({
    slug,
    name: data.name,
    careerCount: data.careers.length,
  }));

  const filteredCategories = categories.filter((category) => {
    const searchLower = searchTerm.toLowerCase().trim();
    const nameLower = category.name.toLowerCase();
    return nameLower.includes(searchLower);
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-14 sm:pt-16 md:pt-20 lg:pt-24 pb-10 sm:pb-12 md:pb-16 border-b border-slate-200"
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1
              className="font-poppins text-[#505050] font-bold mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl"
            >
              Career Path
            </h1>

            <p
              className="font-poppins text-[#757575] text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Explore 21 diverse career categories and discover opportunities that match your interests and skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative z-10 py-8 sm:py-10 md:py-12 border-b border-slate-200">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative max-w-2xl mx-auto"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#757575] w-5 h-5" />
            <input
              type="text"
              placeholder="Search career paths..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-5 py-3 border border-slate-300 rounded-lg font-poppins text-[#505050] placeholder-[#AAAAAA] focus:outline-none focus:border-[#C20000] focus:ring-1 focus:ring-[#C20000] transition-all text-base"
            />
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="font-poppins font-bold text-[#333333] text-2xl sm:text-3xl mb-2">
              {filteredCategories.length === categories.length
                ? "All Career Paths"
                : `${filteredCategories.length} Career Path${filteredCategories.length !== 1 ? "s" : ""} Found`}
            </h2>
            <p className="font-poppins text-[#757575] text-sm sm:text-base">
              {filteredCategories.length === categories.length
                ? "Browse all available career categories"
                : "Showing results for your search"}
            </p>
          </motion.div>

          {filteredCategories.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="font-poppins text-[#757575] text-lg mb-2">
                No career paths found matching your search.
              </p>
              <p className="font-poppins text-[#AAAAAA] text-base">
                Try searching with different keywords
              </p>
            </motion.div>
          ) : (
            <div
              key={`grid-${filteredCategories.length}`}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
            >
              {filteredCategories.map((category, idx) => (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="group h-full"
                >
                  <Link
                    href={`/${category.slug}`}
                    className="block h-full bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300 p-5 sm:p-6 flex flex-col relative group/card"
                  >
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-slate-50 flex items-center justify-center mb-4 text-[#C20000] relative z-10"
                    >
                      {categoryIcons[category.slug] || <Briefcase className="w-8 h-8" />}
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-poppins font-semibold text-[#333333] text-sm sm:text-base mb-2 group-hover/card:text-[#C20000] transition-colors line-clamp-2 relative z-10">
                      {category.name}
                    </h3>

                    {/* Career Count */}
                    <p className="font-poppins text-[#757575] text-xs sm:text-sm mb-4 flex-1 relative z-10">
                      {category.careerCount} career options
                    </p>

                    {/* Arrow Button */}
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="inline-flex items-center gap-1 font-poppins font-medium text-xs sm:text-sm text-[#C20000] relative z-10"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/card:translate-x-1" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-10 sm:py-12 md:py-16 border-t border-slate-200 bg-slate-50">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { number: "21", label: "Career Categories" },
              { number: "150+", label: "Career Options" },
              { number: "10K+", label: "Success Stories" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-4 sm:p-6 rounded-lg bg-white border border-slate-200"
              >
                <p className="font-poppins font-bold text-3xl sm:text-4xl text-[#C20000] mb-2">
                  {stat.number}
                </p>
                <p className="font-poppins text-[#757575] text-sm sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
