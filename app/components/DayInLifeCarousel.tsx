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
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: `${color}20`, color }}
            >
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
              {title}
            </h2>
          </div>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Card Container */}
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            {/* Activity Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left side - Time and visual */}
              <div
                className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]"
                style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}
              >
                {/* Time Display */}
                <div className="text-center mb-8">
                  <div
                    className="text-6xl md:text-7xl font-black mb-3"
                    style={{ color }}
                  >
                    {currentActivity.time}
                  </div>
                  <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider">
                    Current Activity
                  </div>
                </div>

                {/* Activity Counter */}
                <div className="mt-auto pt-8 border-t border-slate-200 w-full">
                  <div className="text-center">
                    <div className="text-3xl font-black text-slate-900 mb-2">
                      {current + 1} / {activities.length}
                    </div>
                    <div className="text-slate-500 text-sm font-medium">
                      Activities in a Day
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="p-8 md:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[500px]">
                {/* Title */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                    {currentActivity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    {currentActivity.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
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
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-200 hover:border-slate-300"
              style={{ color }}
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-200 hover:border-slate-300"
              style={{ color }}
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
            {activities.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className="rounded-full transition-all duration-300 hover:scale-125"
                style={{
                  width: current === i ? "32px" : "10px",
                  height: "10px",
                  background: current === i ? color : `${color}30`,
                  cursor: "pointer",
                }}
                aria-label={`Go to activity ${i + 1}`}
              />
            ))}
          </div>

          {/* Mobile Timeline List */}
          <div className="mt-12 md:hidden">
            <div className="space-y-3">
              {activities.map((activity, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 ${
                    current === i
                      ? "bg-white border-slate-300 shadow-md"
                      : "bg-slate-50 border-slate-200 hover:bg-white"
                  }`}
                >
                  <div
                    className="font-bold text-lg mb-1"
                    style={{ color: current === i ? color : "#1F2937" }}
                  >
                    {activity.time}
                  </div>
                  <div className="text-sm text-slate-600">
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
