"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MapPin, Search, Star, Check, Menu, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-[9999] transition-all duration-300 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-1 cursor-pointer">
              <Link href="/">
                <img src="/edumilestones-logo.png" alt="Edumilestones" className="max-w-[200px] h-auto" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              <div className="relative group px-3 py-2">
                <button className="flex items-center gap-1.5 text-gray-700 hover:text-[#2F4EA1] font-semibold text-[15px] transition-colors outline-none py-2">
                  Explore Programs
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                <div className="absolute top-full -left-5 mt-0 w-[990px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-4 group-hover:translate-y-0 z-50 overflow-hidden">
                  <div className="grid grid-cols-12">
                    <div className="col-span-4 p-6 bg-blue-50/20 border-r border-gray-100">
                      <h3 className="text-[#2F4EA1] font-bold text-xs uppercase tracking-wider mb-5">Student Guidance</h3>
                      <ul className="space-y-2">
                        <li><Link href="/career-counselling" className="text-sm font-semibold text-gray-700 hover:text-[#2F4EA1]">Book Online Career Counselling</Link></li>
                        <li><Link href="/online-degree" className="text-sm font-semibold text-gray-700 hover:text-[#2F4EA1]">Online Degree Programs</Link></li>
                        <li><Link href="/study-abroad" className="text-sm font-semibold text-gray-700 hover:text-[#2F4EA1]">Study Abroad Admissions</Link></li>
                      </ul>
                    </div>
                    <div className="col-span-3 p-6 bg-white border-r border-gray-100">
                      <h3 className="text-[#2F4EA1] font-bold text-xs uppercase tracking-wider mb-5">Professional Guidance</h3>
                      <ul className="space-y-2">
                        <li><Link href="/professional" className="text-sm font-semibold text-gray-700 hover:text-[#2F4EA1]">Get Professional Mentorship</Link></li>
                      </ul>
                    </div>
                    <div className="col-span-5 p-6 bg-gray-50/50">
                      <h3 className="text-[#2F4EA1] font-bold text-xs uppercase tracking-wider mb-5">Become a Partner</h3>
                      <div className="space-y-2">
                        <Link href="/become-counsellor" className="text-sm text-gray-600 hover:text-[#2F4EA1] block">Become a Career Counsellor</Link>
                        <Link href="/study-abroad-business" className="text-sm text-gray-600 hover:text-[#2F4EA1] block">Start Study Abroad Business</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/partners" className="px-3 py-2 text-gray-600 hover:text-[#2F4EA1] font-medium text-[15px] transition-colors">Become our Partner</Link>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link href="/free-audit">
                <button className="flex items-center gap-2 text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-semibold text-[15px] px-4 py-2 rounded-full border border-cyan-400/20 shadow-lg shadow-cyan-500/30 hover:shadow-xl transition-all duration-200">
                  Free Career Audit
                </button>
              </Link>
              <Link href="/login">
                <button className="flex items-center gap-2 text-gray-700 hover:text-[#2F4EA1] font-semibold text-[15px] px-4 py-2 rounded-full border border-gray-300 hover:border-[#2F4EA1] hover:bg-blue-50 transition-all">
                  Login
                </button>
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-4">
              <button id="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div id="mobile-menu" className="lg:hidden border-t border-gray-100 bg-white absolute w-full shadow-lg z-50 h-[calc(100vh-80px)] overflow-y-auto">
              <div className="px-4 pt-4 pb-6 space-y-2">
                <Link href="/career-counselling" className="block px-3 py-3 rounded-lg text-base font-bold text-gray-800 hover:bg-gray-50">Explore Programs</Link>
                <Link href="/partners" className="block px-3 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-gray-50">Become our Partner</Link>
                <Link href="/free-audit" className="block px-3 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-gray-50">Free Career Audit</Link>
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <button onClick={() => window.location.href = "https://careertest.edumilestones.com/student-dashboard/?channel_id=NzI3"} className="w-full bg-[#2F4EA1] text-white py-3 rounded-xl font-bold shadow-lg">Login / Signup</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-3 pb-0 md:pt-8 md:pb-2 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#2F4EA1] rounded-full blur-3xl opacity-[0.08] animate-blob"></div>
          <div className="absolute top-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-[17px] sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-1 md:mb-4 tracking-tighter leading-tight">
            Best Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3f9a] to-[#1e3f9a]">Coach Near Me</span>
          </h1>
          <p className="text-gray-500 text-xs md:text-lg mb-3 md:mb-8 max-w-2xl mx-auto font-light leading-relaxed px-4">
            India's Largest & Most Trusted Career Guidance Platform
          </p>

          <div className="max-w-3xl mx-auto relative group mb-6 md:mb-8 z-40">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2F4EA1] to-blue-400 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative flex items-center bg-white rounded-full shadow-2xl p-1.5 border border-gray-100">
              <div className="pl-3 text-gray-400"><MapPin className="w-5 h-5 md:w-6 md:h-6" /></div>
              <input type="text" placeholder="Search Location (e.g. Delhi, Mumbai)" className="w-full px-2 md:px-4 py-2 md:py-3 text-base md:text-lg text-gray-700 bg-transparent focus:outline-none placeholder-gray-400" autoComplete="off" />
              <button className="bg-[#2F4EA1] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#253e85] transition-all duration-300 shadow-lg transform hover:scale-105 hidden md:block text-sm md:text-base">Search</button>
              <button className="bg-[#2F4EA1] text-white p-2.5 rounded-full md:hidden"><Search className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-sm text-gray-500 mb-3 md:mb-7">
            <span className="font-semibold hidden md:block text-gray-400 uppercase tracking-wider text-[10px] md:text-xs whitespace-nowrap">Popular Cities:</span>
            <div className="w-full md:w-auto overflow-x-auto">
              <div className="flex flex-nowrap md:flex-wrap items-center gap-2 md:gap-3 px-2 md:px-0 pb-0 md:pb-0 justify-start md:justify-center min-w-max md:min-w-0 mx-auto">
                {["Bangalore", "Mumbai", "Delhi NCR", "Pune", "Hyderabad", "Chennai", "+480 Cities"].map((city) => (
                  <button key={city} className="flex-shrink-0 px-3 md:px-4 py-1 md:py-1.5 bg-white hover:bg-[#2F4EA1]/5 border border-gray-200 hover:border-[#2F4EA1] rounded-full text-[11px] md:text-xs text-gray-600 hover:text-[#2F4EA1] transition-all duration-300 flex items-center gap-1 shadow-sm whitespace-nowrap">
                    <MapPin className="w-3 h-3" /> {city}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-2 mb-4">
            <div className="flex items-center animate-marquee">
              {[
                { name: "Bhumika Phutela", sessions: "3402+" },
                { name: "Dr Srinivas Yepuri", sessions: "3458+" },
                { name: "Dr Vijay Suryashekhar", sessions: "1477+" },
                { name: "Dr. Anjali Saraogi", sessions: "2588+" },
                { name: "Kamlakar Dwivedi", sessions: "2029+" },
                { name: "Lt Col V Srinivasan", sessions: "2437+" },
                { name: "Meenakshi K Jain", sessions: "1005+" },
                { name: "Mr Shameer C K", sessions: "2058+" },
                { name: "Srishti Mahendro", sessions: "6620+" },
                { name: "Sachin Bhatnagar", sessions: "6646+" },
              ].map((counsellor, idx) => (
                <div key={idx} className="flex-shrink-0 mx-6 md:mx-10 flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                      {counsellor.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 border-2 border-white w-4 h-4 rounded-full flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col text-left">
                    <h4 className="font-extrabold text-gray-900 text-[12px] md:text-sm tracking-tight leading-tight">{counsellor.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center bg-gray-100 px-1.5 py-0.5 rounded-md">
                        <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
                        <span className="text-[10px] font-bold text-gray-700">4.9</span>
                      </div>
                      <span className="text-[9px] md:text-[10px] font-bold text-[#2F4EA1] bg-orange-50 px-1.5 py-0.5 rounded-md border border-orange-100 whitespace-nowrap">{counsellor.sessions} Sessions</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-20 min-h-[220px]">
        <div className="mb-4 flex justify-center px-0 md:px-6">
          <div className="flex p-1.5 bg-white shadow-xl rounded-full border border-slate-100 max-w-lg w-full">
            <button className="flex-1 py-3 rounded-full font-extrabold text-[9px] md:text-xs uppercase tracking-widest text-slate-800 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 flex items-center justify-center gap-2 tab-active">👨‍🎓 Students</button>
            <button className="flex-1 py-3 rounded-full font-extrabold text-[9px] md:text-xs uppercase tracking-widest text-slate-800 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 flex items-center justify-center gap-2">🏫 Schools</button>
            <button className="flex-1 py-3 rounded-full font-extrabold text-[9px] md:text-xs uppercase tracking-widest text-slate-800 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 flex items-center justify-center gap-2">🤝 Partner</button>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 transition-all duration-500 ease-in-out place-content-center">
          {[
            { title: "Career Counselling", icon: "📹", badge: "480+ Cities", href: "/career-counselling" },
            { title: "Professional Guidance", icon: "💼", badge: "15 Years Plan", href: "/professional" },
            { title: "Career Assessment", icon: "✓", badge: "AI Powered", href: "/assessment" },
            { title: "Online Degree", icon: "💻", badge: "180+ Courses", href: "/online-degree" },
            { title: "Study Abroad", icon: "✈️", badge: "22+ Countries", href: "/study-abroad" },
            { title: "Become Partner", icon: "🤝", badge: "6 Programs", href: "/partners" },
          ].map((service, idx) => (
            <Link key={idx} href={service.href}>
              <div className="group cursor-pointer flex flex-col items-center justify-center p-2 md:p-4 bg-white rounded-xl md:rounded-2xl border border-gray-100 relative overflow-hidden transition-all duration-500 ease-out hover:border-transparent hover:-translate-y-2 hover:scale-[1.02] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl h-[110px] md:h-[128px] w-full">
                <div className="absolute top-1 right-1 md:top-2 md:right-2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/40 blur-md rounded-full"></div>
                    <div className="relative bg-white/70 backdrop-blur-md text-[#2F4EA1] text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white/50 shadow-sm animate-pulse ring-1 ring-[#2F4EA1]/10">{service.badge}</div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-blue-500 to-cyan-400"></div>
                <div className="relative mb-2 md:mb-3 mt-1 md:mt-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative z-10 p-2 md:p-3 rounded-xl md:rounded-2xl bg-blue-100 group-hover:bg-white transition-colors duration-300 border border-transparent group-hover:border-gray-50 shadow-sm group-hover:shadow-md">
                    <span className="text-3xl md:text-4xl">{service.icon}</span>
                  </div>
                </div>
                <h3 className="text-center font-bold text-gray-700 text-[10px] md:text-sm leading-tight group-hover:text-gray-900 transition-colors relative z-10 px-0.5 line-clamp-2 md:line-clamp-none">{service.title}</h3>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-t-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-12"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Career Counselling Swiper Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Career Counselling Near Me</h2>
            <p className="text-gray-300 text-lg">Get Career Guidance from 9,000+ Expert Counselors Across 300+ Cities in India to take informed career decisions</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex gap-4 pb-8 overflow-x-auto snap-x snap-mandatory">
                {[
                  { name: "Dr Srinivas Yepuri", qualification: "M.Sc (Psychology)", experience: "20+ years experience", counsellings: "2941+" },
                  { name: "Anjali Saraogi", qualification: "IIM -Ahmedabad", experience: "19 years experience", counsellings: "2087+" },
                  { name: "Kriti Shroff", qualification: "MBA, Certified Counselor", experience: "16 years experience", counsellings: "1773+" },
                  { name: "Bhumika Phutela", qualification: "Msc Counselling Psychology", experience: "11 years experience", counsellings: "3060+" },
                  { name: "Hemalatha Sriram", qualification: "Certified career counsellor", experience: "8 years experience", counsellings: "1409+" },
                  { name: "LT COL V Srinivasan", qualification: "CCA, MBA (IIM - Kozhikode)", experience: "20+ years experience", counsellings: "1993+" },
                  { name: "Varnika Agarwal", qualification: "BTech, MBA", experience: "14 years experience", counsellings: "1376+" },
                  { name: "Yogesh Satishchandra Baheti", qualification: "B.Pharm , M.A.(Psychology)", experience: "20+ years experience", counsellings: "2130+" },
                ].map((counsellor, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden relative group snap-center cursor-pointer transition-transform hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all"></div>
                    <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-lg">5</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Check className="w-5 h-5" />
                          <span className="font-bold text-2xl">{counsellor.counsellings}</span>
                        </div>
                        <p className="text-sm font-semibold">Counsellings</p>
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-lg mb-1">{counsellor.name}</h3>
                        <p className="text-sm mb-1">{counsellor.qualification}</p>
                        <p className="text-xs">{counsellor.experience}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/counsellors">
                <button className="px-8 py-3 bg-[#2F4EA1] text-white font-bold rounded-lg hover:bg-[#253e85] transition-all">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200K+", label: "Active Students" },
              { number: "15K+", label: "Success Stories" },
              { number: "500+", label: "Expert Educators" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.number}</p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"><span className="text-white font-bold">EM</span></div>
                <span className="font-bold text-white">Edumilestones</span>
              </div>
              <p className="text-sm">Empowering students to achieve their dreams through quality education.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Courses</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Career Counselling</Link></li>
                <li><Link href="#" className="hover:text-white transition">Online Degrees</Link></li>
                <li><Link href="#" className="hover:text-white transition">Study Abroad</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@edumilestones.com</li>
                <li>Phone: +91 8971184073</li>
                <li>Address: Bangalore, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Edumilestones. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .tab-active { background-color: #2f4ea1; color: white; }
      `}</style>
    </div>
  );
}
