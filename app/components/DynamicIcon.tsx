"use client";

import React from "react";
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

export type IconName = keyof typeof Icons;

interface DynamicIconProps extends LucideProps {
  name: string;
}

const emojiMap: Record<string, string> = {
  "📊": "BarChart3",
  "💼": "Briefcase",
  "🧮": "Calculator",
  "🌐": "Globe",
  "📈": "TrendingUp",
  "∑": "Calculator",
  "💰": "CircleDollarSign",
  "🎓": "GraduationCap",
  "⚠️": "AlertTriangle",
  "📚": "BookOpen",
  "🏦": "Building2",
  "🏫": "School",
  "🏛️": "Building",
  "🧠": "Brain",
  "⏳": "Hourglass",
  "🔬": "Microscope",
  "💬": "MessageSquare",
  "💻": "Monitor",
  "📋": "ClipboardList",
  "🎯": "Target",
  "🌟": "Star",
  "🔎": "Search",
  "💲": "DollarSign",
  "📜": "FileText",
  "📣": "Megaphone",
  "🔗": "Link",
  "🏅": "Medal",
  "🤝": "Handshake",
  "🎉": "PartyPopper",
  "✓": "Check",
  "⚖️": "Scale",
  "🏭": "Factory",
  "💡": "Lightbulb",
  "🔍": "Search",
  "🏛": "Building",
  "📒": "Book",
  "📋": "ClipboardList",
  "🏛️": "Building2",
  "📱": "Smartphone",
  "🏗️": "Construction",
  "🗺️": "Map",
  "🚉": "Train",
  "🏥": "Hospital",
  "🧬": "Dna",
  "🩺": "Stethoscope",
  "⚖️": "Scale",
  "💵": "Banknote",
};

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  // Check if it's an emoji and map it, otherwise use name directly
  const iconName = (emojiMap[name] || name) as IconName;
  
  const IconComponent = Icons[iconName] as React.FC<LucideProps>;

  if (!IconComponent) {
    // Fallback if icon not found
    return <Icons.HelpCircle {...props} />;
  }

  return <IconComponent {...props} />;
};
