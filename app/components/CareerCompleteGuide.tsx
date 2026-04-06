"use client";

import { useState } from "react";
import { CareerGuideSection } from "@/app/data/careerPageData";
import { DynamicIcon } from "./DynamicIcon";
import { DayInLifeCarousel } from "./DayInLifeCarousel";
import { CostChallenges } from "./CostChallenges";
import { WhereToStudyCarousel } from "./WhereToStudyCarousel";
import {
  Brain, Hourglass, Microscope, MessageSquare, Monitor,
  ClipboardList, Target, Star,
  ChevronLeft, ChevronRight,
  AlertTriangle, CheckCircle2,
} from "lucide-react";

// ─── colour tokens ────────────────────────────────────────────────
const BLUE   = "#1E40AF";
const GOLD   = "#F59E0B";
const GREEN  = "#059669";
const RED    = "#DC2626";
const INDIGO = "#6366F1";
const TEAL   = "#0D9488";
const ROSE   = "#E11D48";

interface Props {
  careerName: string;
  sections: CareerGuideSection[];
}

// ─── 1. DAY IN THE LIFE CAROUSEL ──────────────────────────────────
function SectionWhat({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  // Check if this is a "Day in the Life" section
  const isDayInLife = section.title.toLowerCase().includes("day in the life");
  
  if (isDayInLife) {
    return (
      <DayInLifeCarousel
        content={section.content}
        title={section.title}
        description={section.description}
        color={section.color}
      />
    );
  }

  // Modern professional carousel for "What is This Career All About?"
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % section.content.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + section.content.length) % section.content.length);
  };

  const parseContent = (text: string) => {
    const colonIndex = text.indexOf(":");
    if (colonIndex > -1) {
      return {
        title: text.slice(0, colonIndex).trim(),
        content: text.slice(colonIndex + 1).trim(),
      };
    }
    const sentences = text.split(/(?<=[.!?])\s+/);
    if (sentences.length > 1) {
      return {
        title: sentences[0].trim(),
        content: sentences.slice(1).join(" ").trim(),
      };
    }
    return {
      title: text.substring(0, 50).trim(),
      content: text.trim(),
    };
  };

  const currentItem = section.content[active];
  const { title, content } = parseContent(currentItem);

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-white border-b border-canam-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />

        {/* Clean Professional Carousel */}
        <div className="mt-6 relative">
          {/* Main Content Card */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-white border border-canam-border shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Accent Line */}
            <div 
              className="h-1 w-full"
              style={{ background: section.color }}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-12">
              {/* Left: Content (2 columns on desktop) */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ background: section.color }}
                  >
                    <DynamicIcon name={section.icon} className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Point {active + 1} of {section.content.length}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight font-poppins">
                  {title}
                </h3>

                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-inter">
                  {content}
                </p>
              </div>

              {/* Right: Visual Element (1 column on desktop) */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full h-64 flex items-center justify-center">
                  {/* Subtle background circle */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-5"
                    style={{ background: section.color }}
                  />
                  
                  {/* Icon container */}
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center text-white shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${section.color}, ${section.color}dd)` }}
                  >
                    <DynamicIcon name={section.icon} className="w-12 h-12" />
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="px-8 md:px-12 pb-6">
              <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${((active + 1) / section.content.length) * 100}%`,
                    background: section.color,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 bg-white border border-canam-border shadow-sm hover:shadow-md group"
              style={{ color: section.color }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {section.content.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300 hover:scale-125"
                  style={{
                    width: active === i ? "28px" : "10px",
                    height: "10px",
                    background: active === i ? section.color : `${section.color}30`,
                  }}
                  aria-label={`Go to point ${i + 1}`}
                />
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 bg-white border border-canam-border shadow-sm hover:shadow-md group"
              style={{ color: section.color }}
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. DAY IN THE LIFE CAROUSEL (for index 1) ──────────────────
function SectionDayInLife({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  return (
    <DayInLifeCarousel
      content={section.content}
      title={section.title}
      description={section.description}
      color={section.color}
    />
  );
}

// ─── 3. TRAIT BADGE GRID with MODAL ──────────────────────────────
function SectionWho({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  
  const icons = [Brain, Hourglass, Microscope, MessageSquare, Monitor, ClipboardList, Target, Star];
  const colors = [
    "#7C3AED", // violet
    "#0EA5E9", // cyan
    "#10B981", // emerald
    "#F59E0B", // amber
    "#EC4899", // rose
    "#6366F1", // indigo
    "#22C55E", // green
    "#EAB308", // yellow
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />
        
        {/* Traits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {section.content.map((point, i) => {
            const colonIndex = point.indexOf(":");
            const title = colonIndex > -1 ? point.substring(0, colonIndex).trim() : point;
            const description = colonIndex > -1 ? point.substring(colonIndex + 1).trim() : "";
            const isExpanded = expanded === i;
            const color = colors[i % colors.length];
            const Icon = icons[i % icons.length];

            return (
              <div
                key={i}
                className="group cursor-pointer"
                onClick={() => setExpanded(isExpanded ? null : i)}
              >
                {/* Card */}
                <div
                  className="relative rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl h-full"
                  style={{
                    background: "white",
                    border: `2px solid ${color}20`,
                  }}
                >
                  {/* Top gradient bar */}
                  <div
                    className="h-1 w-full"
                    style={{ background: color }}
                  />

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ background: `${color}15`, color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight flex-1">
                        {title}
                      </h3>
                    </div>

                    {/* Description - Always visible */}
                    {description && (
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                        {description}
                      </p>
                    )}

                    {/* Expand indicator */}
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: color }}
                      />
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {isExpanded ? "Less" : "More"} Details
                      </span>
                    </div>

                    {/* Expanded content */}
                    {isExpanded && description && (
                      <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div
                          className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                          style={{ background: `${color}15`, color }}
                        >
                          Key Insight
                        </div>
                        <p className="text-slate-700 text-sm leading-relaxed font-medium">
                          {description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Hover accent */}
                  <div
                    className="absolute bottom-0 right-0 w-20 h-20 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ background: color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 p-8 md:p-10 rounded-2xl bg-white border-2 border-slate-200 text-center">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">
            Do These Traits Sound Like You?
          </h3>
          <p className="text-slate-600 text-base md:text-lg mb-6 max-w-2xl mx-auto">
            If you recognize yourself in most of these traits, this career path could be a great fit for your skills and personality.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="px-6 md:px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 text-white"
              style={{ background: section.color ?? "#1E40AF" }}
            >
              Explore This Career
            </button>
            <button
              className="px-6 md:px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 border-2"
              style={{ borderColor: section.color ?? "#1E40AF", color: section.color ?? "#1E40AF" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. HORIZONTAL STEP PROCESS TILES ────────────────────────────
function SectionResponsibilities({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const stepIcons = ["Search", "BarChart3", "DollarSign", "ShieldAlert", "FileText", "Megaphone", "Link"];
  const stepColors = ["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981", "#06B6D4", "#6366F1"];
  
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />

        {/* row of flat tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
          {section.content.map((content, i) => {
            const color = stepColors[i % stepColors.length];
            return (
              <div
                key={i}
                className="flex flex-col items-start gap-3 p-6 md:p-8 rounded-xl transition-all duration-300 hover:translate-y-[-4px]"
                style={{
                  background: "white",
                  borderLeft: `4px solid ${color}`,
                }}
              >
                {/* icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15`, color }}
                >
                  <DynamicIcon name={stepIcons[i % stepIcons.length]} className="w-6 h-6" />
                </div>

                {/* step number */}
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Step {i + 1}
                </div>

                {/* content */}
                <p className="text-slate-700 text-base leading-relaxed font-medium">
                  {content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 5. INSTITUTIONS SHOWCASE ────────────────────────────────────
function SectionInstitutions({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  
  const institutionTypes = [
    { type: "Public/Premier", icon: "Building2", color: "#1E40AF" },
    { type: "Private", icon: "Sparkles", color: "#7C3AED" },
    { type: "Online/Distance", icon: "Monitor", color: "#0EA5E9" },
  ];

  // Group content by institution type
  const groupedContent = section.content.reduce((acc: Record<string, string[]>, item: string) => {
    const typeMatch = institutionTypes.find(t => item.includes(t.type));
    const type = typeMatch?.type || "Other";
    if (!acc[type]) acc[type] = [];
    acc[type].push(item);
    return acc;
  }, {});

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />

        {/* Institution Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {institutionTypes.map((instType, idx) => {
            const institutions = groupedContent[instType.type] || [];
            const isExpanded = expanded === idx;

            return (
              <div
                key={idx}
                className="group cursor-pointer"
                onClick={() => setExpanded(isExpanded ? null : idx)}
              >
                {/* Card */}
                <div
                  className="relative rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl h-full bg-white border-2"
                  style={{ borderColor: `${instType.color}30` }}
                >
                  {/* Top accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{ background: instType.color }}
                  />

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ background: `${instType.color}15`, color: instType.color }}
                      >
                        <DynamicIcon name={instType.icon} className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-slate-900">
                          {instType.type}
                        </h3>
                        <p className="text-xs text-slate-500 font-semibold mt-1">
                          {institutions.length} institution{institutions.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>

                    {/* Institution count badge */}
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                      style={{ background: `${instType.color}15`, color: instType.color }}
                    >
                      {institutions.length} Option{institutions.length !== 1 ? 's' : ''}
                    </div>

                    {/* Expand indicator */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: instType.color }}
                      />
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {isExpanded ? "Hide" : "View"} Details
                      </span>
                    </div>

                    {/* Expanded content */}
                    {isExpanded && institutions.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="space-y-3">
                          {institutions.map((inst, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div
                                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                style={{ background: instType.color }}
                              />
                              <p className="text-slate-700 text-sm leading-relaxed">
                                {inst.replace(instType.type + ": ", "").trim()}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover accent */}
                  <div
                    className="absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{ background: instType.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div
          className="p-6 md:p-8 rounded-2xl border-2 bg-white"
          style={{ borderColor: `${section.color}30` }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${section.color}15`, color: section.color }}
            >
              <DynamicIcon name="Info" className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Pro Tip</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most actuarial education requires classroom interaction and practical problem-solving. Choose an institution that offers strong faculty mentorship and industry connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. SCHOLARSHIP BADGE ACCORDION ──────────────────────────────
function SectionScholarship({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const lineColors = [GOLD, GREEN, BLUE, INDIGO, TEAL, ROSE, "#7C3AED"];

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-purple-50 to-blue-50 relative">
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 opacity-10 pointer-events-none hidden md:block mix-blend-multiply">
        <img src={`https://loremflickr.com/600/600/flat,illustration,cartoon,${careerName.replace(/ /g, '-')},success?lock=99`} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader section={section} light={false} />

        {/* checklist steps */}
        <div className="flex flex-col gap-4">
          {section.content.map((point, i) => {
            const color = lineColors[i % lineColors.length];
            return (
              <div
                key={i}
                className="relative flex items-start gap-5 p-6 rounded-2xl text-left transition-all duration-300 shadow-sm hover:shadow-md"
                style={{
                  background: "white",
                  border: `2px solid ${color}`,
                }}
              >
                {/* circle */}
                <div
                  className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-black transition-all duration-300"
                  style={{
                    background: color,
                    color: "white",
                  }}
                >
                  {i + 1}
                </div>

                {/* text content */}
                <div className="flex-1 pt-1">
                  <p className="text-base leading-relaxed font-medium text-slate-800">
                    {point}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 6. COST CHALLENGES SECTION ──────────────────────────────────
function SectionCosts({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  return (
    <CostChallenges
      title={section.title}
      description={section.description}
      items={section.content}
      sectionColor={section.color}
    />
  );
}

// ─── 6B. WHERE TO STUDY CAROUSEL SECTION ─────────────────────────
function SectionWhereToStudy({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  return (
    <WhereToStudyCarousel
      title={section.title}
      description={section.description}
      items={section.content}
      sectionColor={section.color}
    />
  );
}

// ─── 7. CHALLENGE ALERT CARDS (expandable) ─────────────────────
function SectionChallenges({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  const severity = ["Critical", "High", "Medium", "Critical", "High", "Medium"];
  const alertColors = ["#EF4444", "#F97316", "#EAB308", "#EF4444", "#F97316", "#EAB308"];
  
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-red-50 to-orange-50 overflow-hidden border-b border-red-200 relative">
      <div className="absolute top-1/2 left-0 w-1/4 h-2/3 opacity-[0.06] pointer-events-none hidden lg:block transform -translate-y-1/2 -translate-x-1/3 rotate-[-10deg]">
        <img src={`https://loremflickr.com/400/400/flat,illustration,cartoon,${careerName.replace(/ /g, '-')},challenge?lock=8`} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader section={section} light={false} />

        {/* expandable challenge cards */}
        <div className="flex flex-col gap-4">
          {section.content.map((point, i) => {
            const isExpanded = expanded === i;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: "white",
                }}
              >
                {/* top bar */}
                <button
                  onClick={() => setExpanded(isExpanded ? null : i)}
                  className="w-full px-5 py-3 flex items-center justify-between hover:opacity-90 transition-opacity"
                  style={{ background: alertColors[i % alertColors.length] }}
                >
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white font-bold text-sm uppercase tracking-wider">
                      Challenge #{i + 1}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white text-xs">{severity[i % severity.length]}</span>
                    <div
                      className="transition-transform duration-300"
                      style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </button>
                
                {/* body */}
                <div className="p-6 bg-white">
                  <p className="text-slate-700 leading-relaxed text-base whitespace-pre-wrap">{point}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 8. ANIMATED ROADMAP CHECKLIST ───────────────────────────────
function SectionStartNow({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const lineColors = [GOLD, GREEN, BLUE, INDIGO, TEAL, ROSE, "#7C3AED"];

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-purple-50 to-blue-50 relative">
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 opacity-10 pointer-events-none hidden md:block mix-blend-multiply">
        <img src={`https://loremflickr.com/600/600/flat,illustration,cartoon,${careerName.replace(/ /g, '-')},success?lock=99`} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader section={section} light={false} />

        {/* checklist steps */}
        <div className="flex flex-col gap-4">
          {section.content.map((point, i) => {
            const color = lineColors[i % lineColors.length];
            return (
              <div
                key={i}
                className="relative flex items-start gap-5 p-6 rounded-2xl text-left transition-all duration-300 shadow-sm hover:shadow-md"
                style={{
                  background: "white",
                  border: `2px solid ${color}`,
                }}
              >
                {/* circle */}
                <div
                  className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-black transition-all duration-300"
                  style={{
                    background: color,
                    color: "white",
                  }}
                >
                  {i + 1}
                </div>

                {/* text content */}
                <div className="flex-1 pt-1">
                  <p className="text-base leading-relaxed font-medium text-slate-800">
                    {point}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── SHARED HEADER ────────────────────────────────────────────────
function SectionHeader({ section, light = false }: { section: CareerGuideSection; light?: boolean }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
          style={{ background: section.color ?? "#1E40AF" }}
        >
          <DynamicIcon name={section.icon} className="w-6 h-6 text-white" />
        </div>
        <h3 className={`text-xl sm:text-2xl md:text-3xl font-black leading-tight ${light ? "text-white" : "text-slate-900"}`}>
          {section.title}
        </h3>
      </div>
      <p className={`text-sm md:text-base leading-relaxed max-w-2xl ${light ? "text-white/70" : "text-slate-500"}`}>
        {section.description}
      </p>
    </div>
  );
}

// ─── SECTION ROUTER ───────────────────────────────────────────────
const SECTION_COMPONENTS = [
  SectionWhat,           // Index 0: What is This Career
  SectionDayInLife,      // Index 1: A Day in the Life
  SectionWho,            // Index 2: Is This You
  SectionResponsibilities, // Index 3: Key Responsibilities
  SectionResponsibilities, // Index 4: Career Pathways (reuse Responsibilities style)
  SectionResponsibilities, // Index 5: Market Snapshot (reuse Responsibilities style)
  SectionResponsibilities, // Index 6: Where Are the Jobs (reuse Responsibilities style)
  SectionCosts,          // Index 7: What Will It Cost
  SectionWhereToStudy,   // Index 8: Where to Study (carousel)
  SectionScholarship,    // Index 9: Scholarships
  SectionChallenges,     // Index 10: Challenges
  SectionStartNow,       // Index 11: Skills to Build
  SectionStartNow,       // Index 12: Emerging Trends (reuse StartNow style)
  SectionStartNow,       // Index 13: Start Now (reuse StartNow style)
  SectionStartNow,       // Index 14: Famous Leaders (reuse StartNow style)
];

// ─── MAIN EXPORT ─────────────────────────────────────────────────
export function CareerCompleteGuide({ careerName, sections }: Props) {
  return (
    <div className="relative">
      {/* Page header */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Complete Guide to <span style={{ color: BLUE }}>{careerName}</span>
          </h2>
          <p className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto">
            Everything you need to know — beautifully broken down, section by section.
          </p>
        </div>
      </section>

      {/* Individual sections with unique carousel styles */}
      {sections.map((section, idx) => {
        const Component = SECTION_COMPONENTS[idx % SECTION_COMPONENTS.length];
        return <Component key={section.id} section={section} careerName={careerName} />;
      })}
    </div>
  );
}
