"use client";

const PRIMARY_BLUE = "#1E40AF";
const ACCENT_GOLD = "#F59E0B";

interface BiologyCareerGuideProps {
  title: string;
  description: string;
  roles: string[];
  traits: string[];
  responsibilities: string[];
  cost: {
    government: string;
    private: string;
    duration: string;
    living: string;
  };
  scholarships: string[];
  challenges: string[];
  startNow: string[];
}

export function BiologyCareerGuide({
  title,
  description,
  roles,
  traits,
  responsibilities,
  cost,
  scholarships,
  challenges,
  startNow,
}: BiologyCareerGuideProps) {
  return (
    <div className="relative bg-white">
      {/* Header */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 lg:mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-2">
            {description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative bg-white">
        {/* What is This Career About */}
        <section className="py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
              What is This Career All About?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
              {roles.map((role, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 lg:p-6 rounded-lg bg-blue-50 hover:shadow-md transition"
                >
                  <div
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1 text-white text-xs md:text-sm font-bold"
                    style={{ background: PRIMARY_BLUE }}
                  >
                    {idx + 1}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Consider */}
        <section className="py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 border-b border-gray-200 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
              Who Should Consider This Career?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
              {traits.map((trait, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 lg:p-6 rounded-lg bg-white border border-gray-200 hover:shadow-md transition"
                >
                  <div className="text-lg sm:text-xl md:text-2xl flex-shrink-0">✓</div>
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
                    {trait}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Responsibilities */}
        <section className="py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
              Key Responsibilities & Work Process
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
              {responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 lg:p-6 rounded-lg bg-amber-50 hover:shadow-md transition"
                >
                  <div
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1 text-white text-xs md:text-sm font-bold"
                    style={{ background: ACCENT_GOLD }}
                  >
                    {idx + 1}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
                    {resp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 border-b border-gray-200 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
              What Will It Cost?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
              <div className="p-3 md:p-4 lg:p-6 rounded-lg bg-white border border-gray-200">
                <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base">Government Colleges</h4>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">{cost.government}</p>
              </div>
              <div className="p-3 md:p-4 lg:p-6 rounded-lg bg-white border border-gray-200">
                <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base">Private Colleges</h4>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">{cost.private}</p>
              </div>
              <div className="p-3 md:p-4 lg:p-6 rounded-lg bg-white border border-gray-200">
                <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base">Duration</h4>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">{cost.duration}</p>
              </div>
              <div className="p-3 md:p-4 lg:p-6 rounded-lg bg-white border border-gray-200">
                <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base">Living Expenses</h4>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">{cost.living}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
              Scholarship Opportunities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
              {scholarships.map((scholarship, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 lg:p-6 rounded-lg bg-green-50 border border-green-200 hover:shadow-md transition"
                >
                  <div className="text-lg sm:text-xl md:text-2xl flex-shrink-0">💰</div>
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
                    {scholarship}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 border-b border-gray-200 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
              Key Challenges
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
              {challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 lg:p-6 rounded-lg bg-red-50 border border-red-200 hover:shadow-md transition"
                >
                  <div className="text-lg sm:text-xl md:text-2xl flex-shrink-0">⚠️</div>
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Start Now */}
        <section className="py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
              Start Now (Class 9–12)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
              {startNow.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 lg:p-6 rounded-lg bg-purple-50 border border-purple-200 hover:shadow-md transition"
                >
                  <div
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1 text-white text-xs md:text-sm font-bold"
                    style={{ background: PRIMARY_BLUE }}
                  >
                    ★
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
