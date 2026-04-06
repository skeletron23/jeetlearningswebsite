"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

interface DayInLifeCarouselProps {
  content: string[];
  title: string;
  description: string;
  color: string;
}

interface Activity {
  time: string;
  title: string;
  description: string;
}

export function DayInLifeCarousel({ content, title, description, color }: DayInLifeCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Parse time and activity from content
  const parseActivity = (text: string): Activity => {
    const timeMatch = text.match(/^(\d{1,2}:\d{2}\s*(?:AM|PM)?)/i);
    const time = timeMatch ? timeMatch[1] : "N/A";
    
    // Remove time from text
    const withoutTime = text.replace(/^(\d{1,2}:\d{2}\s*(?:AM|PM)?)\s*-\s*/i, "").trim();
    
    // Split by first colon to get title and description
    const colonIndex = withoutTime.indexOf(":");
    let activityTitle = "";
    let activityDesc = "";
    
    if (colonIndex > -1) {
      activityTitle = withoutTime.substring(0, colonIndex).trim();
      activityDesc = withoutTime.substring(colonIndex + 1).trim();
    } else {
      activityTitle = withoutTime;
      activityDesc = withoutTime;
    }
    
    return {
      time,
      title: activityTitle,
      description: activityDesc,
    };
  };

  const activities = content.map(parseActivity);
  const currentActivity = activities[current];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % activities.length);
    setAutoPlay(false);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + activities.length) % activities.length);
    setAutoPlay(false);
  };

  const handleDotClick = (index: number) => {
    setCurrent(index);
    setAutoPlay(false);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % activities.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [autoPlay, activities.length]);

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: `${color}20`, color }}
            >
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
              {title}
            </h2>
          </div>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Card Container */}
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
            {/* Activity Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left side - Time and visual */}
              <div
                className="p-6 md:p-8 flex flex-col items-center justify-center min-h-[320px] md:min-h-[380px]"
                style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}
              >
                {/* Time Display */}
                <div className="text-center mb-6">
                  <div
                    className="text-5xl md:text-6xl font-black mb-2"
                    style={{ color }}
                  >
                    {currentActivity.time}
                  </div>
                  <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    Current Activity
                  </div>
                </div>

                {/* Activity Counter */}
                <div className="mt-auto pt-6 border-t border-slate-200 w-full">
                  <div className="text-center">
                    <div className="text-2xl font-black text-slate-900 mb-1">
                      {current + 1} / {activities.length}
                    </div>
                    <div className="text-slate-500 text-xs font-medium">
                      Activities in a Day
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between min-h-[320px] md:min-h-[380px]">
                {/* Title */}
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight">
                    {currentActivity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {currentActivity.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        background: color,
                        width: `${((current + 1) / activities.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 group border border-slate-200 hover:border-slate-300"
              style={{ color }}
            >
              <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 group border border-slate-200 hover:border-slate-300"
              style={{ color }}
            >
              <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-2 mt-5 flex-wrap">
            {activities.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className="rounded-full transition-all duration-300 hover:scale-125"
                style={{
                  width: current === i ? "28px" : "8px",
                  height: "8px",
                  background: current === i ? color : `${color}30`,
                  cursor: "pointer",
                }}
                aria-label={`Go to activity ${i + 1}`}
              />
            ))}
          </div>

          {/* Mobile Timeline List */}
          <div className="mt-6 md:hidden">
            <div className="space-y-2">
              {activities.map((activity, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 border-2 ${
                    current === i
                      ? "bg-white border-slate-300 shadow-sm"
                      : "bg-slate-50 border-slate-200 hover:bg-white"
                  }`}
                >
                  <div
                    className="font-bold text-base mb-0.5"
                    style={{ color: current === i ? color : "#1F2937" }}
                  >
                    {activity.time}
                  </div>
                  <div className="text-xs text-slate-600">
                    {activity.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
