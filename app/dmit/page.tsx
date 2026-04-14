import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const corePoints = [
  "Fingerprints and the brain develop from the same ectoderm layer during gestation.",
  "Fingerprint ridge patterns remain stable for life, enabling consistent analysis.",
  "DMIT focuses on inborn tendencies rather than exam-based acquired knowledge.",
  "Insights are used for learning style, stream, and long-term career planning.",
];

const brainDomains = [
  { name: "Frontal Lobe", detail: "Reasoning, planning, decision-making, and executive control." },
  { name: "Parietal Lobe", detail: "Spatial orientation, body coordination, and kinesthetic learning." },
  { name: "Temporal Lobe", detail: "Auditory processing, memory, and language comprehension." },
  { name: "Occipital Lobe", detail: "Visual processing, pattern recognition, and visual recall." },
];

const applications = [
  {
    title: "Students",
    description:
      "Identify learning style (visual, auditory, kinesthetic), preferred academic environment, and suitable career clusters early.",
  },
  {
    title: "Parents",
    description:
      "Use behavior-aware communication and targeted support to reduce conflict and improve confidence.",
  },
  {
    title: "Adults",
    description:
      "Map work-role alignment, stress patterns, and strengths for better career decisions and personal growth.",
  },
  {
    title: "Organizations",
    description:
      "Support role fit, balanced team design, and development planning based on cognitive tendencies.",
  },
];

const growthPhases = [
  {
    phase: "Hardware Phase (0-3 years)",
    summary: "Physical and sensory foundations are established through rapid neural and motor development.",
  },
  {
    phase: "Software Phase (4-8 years)",
    summary: "Emotional patterns, social behaviors, and early personality traits become more visible.",
  },
  {
    phase: "Operational Phase (9-16 years)",
    summary: "Higher-order thinking, self-regulation, and structured decision-making take shape.",
  },
  {
    phase: "Integration Stage (17+ years)",
    summary: "Physical, emotional, and cognitive layers work together for mature life and career choices.",
  },
];

const dmitChapters = [
  {
    title: "1. The Science Behind DMIT",
    paragraphs: [
      "The Dermatoglyphics Multiple Intelligence Test (DMIT) is designed to map an individual’s innate potential by analyzing the unique patterns of fingerprints. It works on the premise that fingerprints and the brain develop simultaneously during the embryonic stage.",
      "By integrating Neuroscience, Genetics, Psychology, and Embryology, DMIT aims to provide a holistic understanding of cognitive strengths and personality tendencies beyond conventional mark-based evaluation.",
    ],
    bullets: [
      "Biological Link: During the 13th to 21st week of gestation, brain and fingerprints develop from the same ectoderm.",
      "Multidisciplinary Approach: Combines data from genetics and neuroscience to interpret probable cognitive function.",
      "Practical Use: Often used by educators and counsellors to identify inborn talents that written tests may miss.",
    ],
  },
  {
    title: "2. Brain Structure and Intelligence Insights",
    paragraphs: [
      "A core component of DMIT interpretation is analysis of brain lobe tendencies and cognitive connectivity. The report generally highlights how an individual is likely to process information and where natural strengths may appear.",
    ],
    bullets: [
      "Frontal Lobe: Associated with logic, reasoning, and executive function.",
      "Parietal Lobe: Linked to spatial orientation and kinesthetic learning.",
      "Temporal Lobe: Connected to auditory processing and memory.",
      "Occipital Lobe: Responsible for visual processing.",
      "Corpus Callosum: Indicates left-right hemisphere coordination and whole-brain integration potential.",
    ],
  },
  {
    title: "3. Core Characteristics of Dermatoglyphics",
    paragraphs: [
      "Fingerprints are more than identity markers; they are stable biological signatures. Dermatoglyphics relies on three foundational characteristics that make assessments personalized and reliable.",
    ],
    bullets: [
      "Total Uniqueness: No two individuals, including identical twins, have identical ridge patterns.",
      "Hereditary Foundations: Ridge formation is strongly influenced by DNA and chromosome expression.",
      "Lifetime Invariance: Patterns are formed in the womb and remain unchanged throughout life.",
    ],
  },
  {
    title: "4. Brain Development Timeline and Learning Strategy",
    paragraphs: [
      "The brain matures in distinct phases. Aligning DMIT insights with these stages helps parents and educators support children at the right time with the right methods.",
    ],
    bullets: [
      "Hardware Phase (0-3): Physical growth, motor systems, and sensory foundations develop rapidly.",
      "Software Phase (4-8): Emotional intelligence, social behavior, and personality coding become clearer.",
      "Operational Phase (9-16): Abstract thinking, complex reasoning, and emotional regulation mature.",
      "Integration Stage (17+): Physical, emotional, and cognitive layers function as a unified system.",
    ],
  },
  {
    title: "5. Practical Utility Across Students, Parents, Adults, and HR",
    paragraphs: [
      "DMIT is used as a practical roadmap for communication, learning strategy, career direction, and team compatibility. Its impact is strongest when reports are paired with actionable counselling.",
    ],
    bullets: [
      "Students: Helps identify natural learning styles and suitable academic streams.",
      "Parents: Supports personalized communication and behavior guidance at home.",
      "Adults: Aids self-evaluation, stress-awareness, and role alignment.",
      "Organizations: Supports balanced hiring, role-fit, and team-building decisions.",
    ],
  },
  {
    title: "6. Unlocking Child Potential Through Personalization",
    paragraphs: [
      "A major advantage of DMIT is identifying a child’s natural way of learning. This helps families avoid one-size-fits-all learning models and choose methods that match biological preference.",
    ],
    bullets: [
      "Visual Learners: Absorb through diagrams, color mapping, and visual context.",
      "Auditory Learners: Perform better through spoken instruction and discussion.",
      "Kinesthetic Learners: Learn best through activity, movement, and hands-on tasks.",
      "Result: Better focus, memory retention, and reduced academic stress.",
    ],
  },
  {
    title: "7. Academic and Career Planning Applications",
    paragraphs: [
      "DMIT supports strategic educational and vocational planning by matching inborn tendencies with school environment, stream decisions, and long-term professional pathways.",
    ],
    bullets: [
      "Curriculum Alignment: Identify whether structure-heavy or project-based environments are better.",
      "Stream Selection: Guide Science, Commerce, or Humanities based on aptitudes.",
      "University and Course Planning: Match interests with natural intelligence patterns.",
      "Career Readiness: Build early pathways that balance potential and long-term satisfaction.",
    ],
  },
  {
    title: "8. Key Advantage: Direction and Empowerment",
    paragraphs: [
      "The ultimate purpose of DMIT is empowerment. It helps individuals and families make informed decisions, bridge current capabilities with natural aspirations, and follow a more confident growth path.",
      "The best outcomes come when assessment is delivered with professional interpretation, interaction strategies, and long-term action planning, not only a raw data sheet.",
    ],
  },
];

export default function DMITPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <section className="bg-gradient-to-br from-emerald-800 via-green-700 to-lime-700 text-white px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <span className="inline-flex rounded-full border border-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide bg-white/10">
              DMIT Guide
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Dermatoglyphics Multiple Intelligence Test
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
              DMIT is an assessment framework that analyzes fingerprint ridge patterns to map innate tendencies in learning, cognition, behavior, and potential career alignment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-white text-slate-900 px-5 py-2.5 font-bold hover:bg-slate-100 transition-colors">
                Book DMIT Consultation
              </Link>
              <Link href="/" className="rounded-full border border-white/60 px-5 py-2.5 font-semibold hover:bg-white/10 transition-colors">
                Back To Home
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="relative min-h-[260px] rounded-2xl overflow-hidden border border-slate-200">
              <Image
                src="/assets/service-profile-eval.jpg"
                alt="Career profile evaluation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <h2 className="text-2xl font-black text-slate-900">DMIT for Career Counselling in India</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                DMIT is used by counselling teams to connect natural tendencies with academic planning, learning design, and future vocation choices. It is most effective when combined with structured parental and mentor guidance.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-14">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-3">What DMIT Measures</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                DMIT is used to interpret probable inborn strengths, natural learning pathways, and decision-making tendencies so that education and career choices can be better aligned.
              </p>
              <ul className="space-y-2 text-slate-700">
                {corePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-3">Brain Dominance Insights</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Finger-to-brain mapping is interpreted to understand where an individual may naturally process information most effectively.
              </p>
              <div className="space-y-3">
                {brainDomains.map((domain) => (
                  <div key={domain.name} className="rounded-xl border border-slate-200 p-3">
                    <p className="font-bold text-slate-900">{domain.name}</p>
                    <p className="text-sm text-slate-600 mt-1">{domain.detail}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-2 pb-14">
          <div className="max-w-6xl mx-auto rounded-2xl bg-slate-900 text-slate-100 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-4">Development Timeline Context</h2>
            <p className="text-slate-300 max-w-3xl mb-6">
              A DMIT report is often interpreted alongside age-specific developmental phases so interventions are timed to the child&apos;s growth stage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {growthPhases.map((item) => (
                <div key={item.phase} className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <p className="font-bold">{item.phase}</p>
                  <p className="text-sm text-slate-300 mt-1">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Where DMIT Is Applied</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {applications.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
              <h3 className="text-2xl font-black text-slate-900">Why Families Use DMIT</h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                The biggest value of DMIT is direction. It helps reduce guesswork in stream selection, learning strategies, and future planning by offering a structured understanding of natural potential.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-full bg-emerald-700 text-white px-5 py-2.5 font-semibold hover:bg-emerald-800 transition-colors">
                  Start DMIT Journey
                </Link>
                <Link href="/psychometric" className="rounded-full border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 hover:bg-white transition-colors">
                  Explore Psychometric Tests
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-16">
          <div className="max-w-6xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Complete DMIT Guide (Expandable)</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Expand each chapter to read the complete long-form content in structured sections.
                </p>
              </div>
              <div className="relative min-h-[220px] rounded-2xl overflow-hidden border border-slate-200">
                <Image
                  src="/assets/service-uni-selection.jpg"
                  alt="Guided educational pathway planning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="space-y-3">
              {dmitChapters.map((chapter) => (
                <details key={chapter.title} className="group rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between gap-4">
                    <span>{chapter.title}</span>
                    <span className="text-slate-400 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="mt-4 space-y-3 text-slate-700 leading-relaxed">
                    {chapter.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {chapter.bullets && chapter.bullets.length > 0 && (
                      <ul className="space-y-2">
                        {chapter.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
