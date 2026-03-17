"use client";

import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

interface SidebarNavProps {
  items: NavItem[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently in view
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2 p-4">
      {/* Background pill */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-full -z-10" style={{ width: "80px", height: "auto" }} />

      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group"
          style={{
            background: activeSection === item.id ? "#1E40AF" : "rgba(255,255,255,0.5)",
            color: activeSection === item.id ? "white" : "#1E40AF",
            border: activeSection === item.id ? "2px solid #1E40AF" : "2px solid transparent",
          }}
          title={item.label}
        >
          <span className="text-2xl">{item.icon}</span>

          {/* Tooltip */}
          <div className="absolute left-20 bg-slate-900 text-white px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {item.label}
          </div>
        </button>
      ))}
    </div>
  );
}
