export interface CareerVideo {
  id: number;
  title: string;
  url: string;
}

export const careerVideos: Record<string, CareerVideo[]> = {
  physiology: [
    {
      id: 1,
      title: "Physiology Career Overview",
      url: "https://www.youtube.com/embed/QrXc9GTnEg0",
    },
  ],
  microbiology: [
    {
      id: 1,
      title: "Microbiology Career Overview",
      url: "https://www.youtube.com/embed/8zQnyVDtWfc",
    },
    {
      id: 2,
      title: "Disease Detection & Lab Work",
      url: "https://www.youtube.com/embed/4H0RC_5HUDU",
    },
  ],
  fishery_biologist: [
    {
      id: 1,
      title: "Fishery Biologist Career Overview",
      url: "https://www.youtube.com/embed/AEO2H4BVo50",
    },
    {
      id: 2,
      title: "Blue Economy & Sustainable Fishing",
      url: "https://www.youtube.com/embed/epG8KVzWGhU",
    },
  ],
  genetics: [
    {
      id: 1,
      title: "Genetics Career Overview",
      url: "https://www.youtube.com/embed/LDdBbjtc6mk",
    },
    {
      id: 2,
      title: "DNA Detective & Gene Editing",
      url: "https://www.youtube.com/embed/QyfeJhuOve8",
    },
  ],
  clinical_research: [
    {
      id: 1,
      title: "Clinical Research Career Overview",
      url: "https://www.youtube.com/embed/ZGGY5RhW-S4",
    },
    {
      id: 2,
      title: "Clinical Trials & Drug Development",
      url: "https://www.youtube.com/embed/rfpmfjR0ECQ",
    },
  ],
  biotechnology_research: [
    {
      id: 1,
      title: "Biotechnology Research Career Overview",
      url: "https://www.youtube.com/embed/Tc3M89_C5GM",
    },
    {
      id: 2,
      title: "Gene Editing & Biotech Innovation",
      url: "https://www.youtube.com/embed/-0_ZMlrEyIg",
    },
  ],
  bioinformatics: [
    {
      id: 1,
      title: "Bioinformatics Career Overview",
      url: "https://www.youtube.com/embed/8biGt6JIQn8",
    },
  ],
  biochemistry: [
    {
      id: 1,
      title: "Biochemistry Career Overview",
      url: "https://www.youtube.com/embed/jMryl1x-418",
    },
    {
      id: 2,
      title: "Molecular Architecture & Drug Development",
      url: "https://www.youtube.com/embed/PnGnbRSOHw0",
    },
  ],
  youtuber: [
    {
      id: 1,
      title: "YouTuber Career Overview",
      url: "https://www.youtube.com/embed/AB-dnRpw4fs",
    },
    {
      id: 2,
      title: "Content Creation & Monetization",
      url: "https://www.youtube.com/embed/ns1BOVFab8E",
    },
    {
      id: 3,
      title: "Building Your Personal Brand",
      url: "https://www.youtube.com/embed/O3jMpgA5Ww4",
    },
    {
      id: 4,
      title: "YouTube Algorithm & Growth Hacks",
      url: "https://www.youtube.com/embed/5Jued-749HY",
    },
  ],
  accessory_design: [
    {
      id: 1,
      title: "Accessory Design Career Overview",
      url: "https://www.youtube.com/embed/CW8U4FSSWHQ",
    },
    {
      id: 2,
      title: "From Sketch to Showcase",
      url: "https://www.youtube.com/embed/UXtKeidzjA8",
    },
    {
      id: 3,
      title: "Materials & Craftsmanship",
      url: "https://www.youtube.com/embed/30-QV_njI6k",
    },
  ],
  animator: [
    {
      id: 1,
      title: "Animator Career Overview - The Illusionist",
      url: "https://www.youtube.com/embed/gCWcaTwVJ_g",
    },
    {
      id: 2,
      title: "From Concept to Animation",
      url: "https://www.youtube.com/embed/pSae3vc1YoM",
    },
    {
      id: 3,
      title: "3D Animation & VFX Magic",
      url: "https://www.youtube.com/embed/GKbGus5vY1s",
    },
  ],
  cosmetology: [
    {
      id: 1,
      title: "Cosmetology Career Overview - The Aesthetics Architect",
      url: "https://www.youtube.com/embed/14HCXIItCWo",
    },
    {
      id: 2,
      title: "Skin Science & Laser Treatments",
      url: "https://www.youtube.com/embed/cjRLPcbM3WY",
    },
  ],
  creative_writer: [
    {
      id: 1,
      title: "Creative Writer Career Overview - The Architect of Worlds",
      url: "https://www.youtube.com/embed/y2Z-bisgFzc",
    },
    {
      id: 2,
      title: "Screenwriting & Storytelling Craft",
      url: "https://www.youtube.com/embed/FGbrhOeayOc",
    },
  ],
  fashion_designing: [
    {
      id: 1,
      title: "Fashion Design Career Overview - The Style Visionary",
      url: "https://www.youtube.com/embed/kymctE5i4Xc",
    },
    {
      id: 2,
      title: "From Sketch to Stitch - Design Process",
      url: "https://www.youtube.com/embed/Yd_AvPj_zt0",
    },
    {
      id: 3,
      title: "Sustainable Fashion & Material Innovation",
      url: "https://www.youtube.com/embed/AsaeRam9HS8",
    },
    {
      id: 4,
      title: "Fashion Industry Trends & Career Opportunities",
      url: "https://www.youtube.com/embed/jDptwnCtrqM",
    },
  ],
  fine_arts: [
    {
      id: 1,
      title: "Fine Arts Career Overview - The Visionary's Canvas",
      url: "https://www.youtube.com/embed/50NDe9T1qH4",
    },
    {
      id: 2,
      title: "From Studio to Gallery - Artist's Journey",
      url: "https://www.youtube.com/embed/Zwoaq862irw",
    },
  ],
  graphical_designing: [
    {
      id: 1,
      title: "Graphic Design Career Overview - The Visual Storyteller",
      url: "https://www.youtube.com/embed/Nb99U_fW1WY",
    },
    {
      id: 2,
      title: "UI/UX Design & Digital Experience",
      url: "https://www.youtube.com/embed/DMx_FEkAPzM",
    },
    {
      id: 3,
      title: "Brand Identity & Logo Design Mastery",
      url: "https://www.youtube.com/embed/5nh6taJnbaI",
    },
  ],
  interior_designing: [
    {
      id: 1,
      title: "Interior Design Career Overview - The Space Magician",
      url: "https://www.youtube.com/embed/GkUHvrwZ7Ls",
    },
  ],
  interpreter_and_translator: [
    {
      id: 1,
      title: "Interpreter and Translator Career Overview - The Bridge Builders",
      url: "https://www.youtube.com/embed/drXe07iqVHI",
    },
    {
      id: 2,
      title: "Language Services & Global Opportunities",
      url: "https://www.youtube.com/embed/KIBKRotpPYE",
    },
  ],
  liberal_arts: [
    {
      id: 1,
      title: "Liberal Arts Career Overview - The Master Key",
      url: "https://www.youtube.com/embed/ilzUN1zzbfk",
    },
    {
      id: 2,
      title: "Interdisciplinary Thinking & Global Careers",
      url: "https://www.youtube.com/embed/NpLjq6ysQSQ",
    },
  ],
  performing_arts: [
    {
      id: 1,
      title: "Performing Arts Career Overview - The Stage is Yours",
      url: "https://www.youtube.com/embed/aj59BY9mrpA",
    },
    {
      id: 2,
      title: "Acting, Dance & Music Careers in India",
      url: "https://www.youtube.com/embed/VhsF0Uv77QI",
    },
    {
      id: 3,
      title: "Live Performance & Entertainment Industry",
      url: "https://www.youtube.com/embed/55AzTF6_kwE",
    },
  ],
  photography: [
    {
      id: 1,
      title: "Photography Career Overview - The Visual Storyteller",
      url: "https://www.youtube.com/embed/FEnQA0QUS6M",
    },
    {
      id: 2,
      title: "Professional Photography & Post-Production",
      url: "https://www.youtube.com/embed/Zxyot_6opLw",
    },
    {
      id: 3,
      title: "E-commerce & Fashion Photography",
      url: "https://www.youtube.com/embed/ygXrtoH5aFk",
    },
  ],
  product_designing: [
    {
      id: 1,
      title: "Product Designing Career Overview - The Functional Artist",
      url: "https://www.youtube.com/embed/J101Zka0Lrs",
    },
    {
      id: 2,
      title: "Design Thinking & Product Development",
      url: "https://www.youtube.com/embed/yNR7wOgFR4E",
    },
  ],
  website_designer: [
    {
      id: 1,
      title: "Website Designer Career Overview - The Digital Architect",
      url: "https://www.youtube.com/embed/m6V-InNnbKY",
    },
    {
      id: 2,
      title: "UI/UX Design & Web Development",
      url: "https://www.youtube.com/embed/yF1T0Uw4jSQ",
    },
  ],
  construction: [
    {
      id: 1,
      title: "Construction Career Overview - Building the New India",
      url: "https://www.youtube.com/embed/GHcZ7833BV0",
    },
    {
      id: 2,
      title: "Site Engineering & Project Management",
      url: "https://www.youtube.com/embed/-hFXI8JC4Ec",
    },
  ],
  architect: [
    {
      id: 1,
      title: "Architect Career Overview - Designing the Future of India",
      url: "https://www.youtube.com/embed/DTJLm5iXK_c",
    },
    {
      id: 2,
      title: "Design Process & Green Building",
      url: "https://www.youtube.com/embed/ViZQBIwf3oU",
    },
    {
      id: 3,
      title: "From Concept to Construction",
      url: "https://www.youtube.com/embed/Siyi8ka6mDk",
    },
  ],
  maintenance_and_operation_management: [
    {
      id: 1,
      title: "Maintenance & Operations Career Overview - The Guardians of Industry",
      url: "https://www.youtube.com/embed/tdZOjBODtE4",
    },
    {
      id: 2,
      title: "Predictive Maintenance & Smart Operations",
      url: "https://www.youtube.com/embed/4W1xSm2T1P",
    },
    {
      id: 3,
      title: "Plant Management & Efficiency Optimization",
      url: "https://www.youtube.com/embed/rF5VIXn6wDQ",
    },
    {
      id: 4,
      title: "Industry 4.0 & Digital Twins",
      url: "https://www.youtube.com/embed/GHQWUWLn-bQ",
    },
  ],
  urban_planning_and_management: [
    {
      id: 1,
      title: "Urban Planning Career Overview - The City Surgeons",
      url: "https://www.youtube.com/embed/kenPO2ntgOw",
    },
    {
      id: 2,
      title: "Smart Cities & Sustainable Urban Development",
      url: "https://www.youtube.com/embed/S4AuhzDelwM",
    },
  ],
  agri_business_management: [
    {
      id: 1,
      title: "Agri-Business Management Career Overview - Cultivating the Future",
      url: "https://www.youtube.com/embed/Ku1oDYDrCco",
    },
    {
      id: 2,
      title: "Farm-to-Fork Supply Chain & Digital Platforms",
      url: "https://www.youtube.com/embed/HlW2vNg57Nw",
    },
    {
      id: 3,
      title: "Agritech Startups & Precision Farming",
      url: "https://www.youtube.com/embed/rcHWzSje3uw",
    },
  ],
  agricultural_engineer: [
    {
      id: 1,
      title: "Agricultural Engineering Career Overview - Engineering the Future of Food",
      url: "https://www.youtube.com/embed/XYLggvMiU2M",
    },
    {
      id: 2,
      title: "Precision Agriculture & Drone Technology",
      url: "https://www.youtube.com/embed/mr9u96r985Y",
    },
    {
      id: 3,
      title: "Automated Machinery & Sustainable Systems",
      url: "https://www.youtube.com/embed/hpR_pTaANSg",
    },
  ],
  agriculture_research: [
    {
      id: 1,
      title: "Agriculture and Plant Research Career Overview - The Science of Life and Food",
      url: "https://www.youtube.com/embed/gkBYovhzsEE",
    },
    {
      id: 2,
      title: "Plant Breeding & Genetic Engineering",
      url: "https://www.youtube.com/embed/Iot1IzRk-8Q",
    },
  ],
  animal_science: [
    {
      id: 1,
      title: "Animal Science Career Overview - The Guardians of the Voiceless",
      url: "https://www.youtube.com/embed/HHjVGCv1N6s",
    },
    {
      id: 2,
      title: "Veterinary Medicine & Zoonotic Disease Prevention",
      url: "https://www.youtube.com/embed/OUM8G2h6U4M",
    },
  ],
  dairy_technology: [
    {
      id: 1,
      title: "Dairy Technology Career Overview - The Science of the Milky Way",
      url: "https://www.youtube.com/embed/DYareilr3qI",
    },
    {
      id: 2,
      title: "Milk Processing & Quality Assurance",
      url: "https://www.youtube.com/embed/1NM-17gMZmc",
    },
    {
      id: 3,
      title: "Cold Chain Logistics & Product Innovation",
      url: "https://www.youtube.com/embed/oqy11oJ-dWI",
    },
  ],
  food_science: [
    {
      id: 1,
      title: "Food Science and Technology Career Overview - The Magic Behind Your Plate",
      url: "https://www.youtube.com/embed/U6G17_P_BKY",
    },
    {
      id: 2,
      title: "Food Processing, Safety & Innovation",
      url: "https://www.youtube.com/embed/zQqEejPXVC8",
    },
  ],
  actuarial_science: [
    {
      id: 1,
      title: "Actuarial Science Career Overview - The Architects of Risk",
      url: "https://www.youtube.com/embed/k7Pk20LFhsQ",
    },
    {
      id: 2,
      title: "Risk Modeling & Financial Forecasting",
      url: "https://www.youtube.com/embed/CG5vKhN7scY",
    },
  ],
  banking_and_related_services: [
    {
      id: 1,
      title: "Banking Career Overview - The Engine of the Indian Economy",
      url: "https://www.youtube.com/embed/ivsg7Cs3atw",
    },
    {
      id: 2,
      title: "Digital Banking & Fintech Innovation",
      url: "https://www.youtube.com/embed/Cd2KJ8oXqwY",
    },
    {
      id: 3,
      title: "Loan Processing & Risk Management",
      url: "https://www.youtube.com/embed/VokUwWw_6cg",
    },
    {
      id: 4,
      title: "Career Paths in Banking & Finance",
      url: "https://www.youtube.com/embed/dmX2g59_90A",
    },
  ],
  chartered_accountant: [
    {
      id: 1,
      title: "Chartered Accountant Career Overview - The Financial Architect of India",
      url: "https://www.youtube.com/embed/KUMT6hlr6gA",
    },
    {
      id: 2,
      title: "Auditing, Taxation & Financial Advisory",
      url: "https://www.youtube.com/embed/CqZSxeo9gUQ",
    },
  ],
  company_secretary: [
    {
      id: 1,
      title: "Company Secretary Career Overview - The Backbone of Corporate Governance",
      url: "https://www.youtube.com/embed/1_ih99HhknK",
    },
  ],
  cost_accountant: [
    {
      id: 1,
      title: "CMA Career Overview - The Efficiency Engineers of Business",
      url: "https://www.youtube.com/embed/pv0svx6zKVU",
    },
    {
      id: 2,
      title: "Cost Accounting & Manufacturing Excellence",
      url: "https://www.youtube.com/embed/5ZyWaJHieI0",
    },
    {
      id: 3,
      title: "CMA Career Path & Opportunities in India",
      url: "https://www.youtube.com/embed/O8HsX1Ptj9s",
    },
  ],
  economics: [
    {
      id: 1,
      title: "Economics Career Overview - The Science of Smart Decisions",
      url: "https://www.youtube.com/embed/wCkXpHbPeoU",
    },
    {
      id: 2,
      title: "Data Analysis & Policy Making in Economics",
      url: "https://www.youtube.com/embed/5MtXpudqW_U",
    },
    {
      id: 3,
      title: "Economics Career Path & Opportunities in India",
      url: "https://www.youtube.com/embed/F15qQRoRXqc",
    },
  ],
  financial_analyst: [
    {
      id: 1,
      title: "Financial Analyst Career Overview - The Navigators of Wealth",
      url: "https://www.youtube.com/embed/E0w5tN77vPk",
    },
    {
      id: 2,
      title: "Financial Modeling & Investment Analysis",
      url: "https://www.youtube.com/embed/pbw1haJjJRo",
    },
  ],
  financial_and_investment_planning: [
    {
      id: 1,
      title: "Financial Planning Career Overview - The Architects of Personal Wealth",
      url: "https://www.youtube.com/embed/6nK59ZbpsbA",
    },
    {
      id: 2,
      title: "Building Wealth Through Smart Investment Planning",
      url: "https://www.youtube.com/embed/J9x-ND5vLF8",
    },
    {
      id: 3,
      title: "Financial Planning Career Path & Opportunities in India",
      url: "https://www.youtube.com/embed/Aizg6iIioPQ",
    },
  ],
  financial_risk_management: [
    {
      id: 1,
      title: "Financial Risk Management Career Overview - The Guardians of Economic Stability",
      url: "https://www.youtube.com/embed/KYtI8XVehfA",
    },
    {
      id: 2,
      title: "Risk Analysis & Mitigation Strategies",
      url: "https://www.youtube.com/embed/ZqaDY5924uA",
    },
    {
      id: 3,
      title: "Financial Risk Management Career Path & Opportunities in India",
      url: "https://www.youtube.com/embed/iBFdbfFA33I",
    },
  ],
  forensic_scientist: [
    {
      id: 1,
      title: "Forensic Scientist Career Overview - The Science of Truth",
      url: "https://www.youtube.com/embed/5OXhjgpyjRE",
    },
    {
      id: 2,
      title: "Crime Scene Investigation & Forensic Analysis",
      url: "https://www.youtube.com/embed/lv1RJglpR5c",
    },
  ],
  lawyer: [
    {
      id: 1,
      title: "Lawyer Career Overview - The Defenders of Justice",
      url: "https://www.youtube.com/embed/wuKyQErklQs",
    },
    {
      id: 2,
      title: "Legal Career Paths & Specializations in India",
      url: "https://www.youtube.com/embed/l7zPDlHW_fA",
    },
    {
      id: 3,
      title: "Corporate Law vs Litigation: Which Path is Right for You?",
      url: "https://www.youtube.com/embed/U6lMckVjB8E",
    },
  ],
  industrial_designer: [
    {
      id: 1,
      title: "Industrial Design Career Overview - The Architects of Everyday Life",
      url: "https://www.youtube.com/embed/h_TUYyczky8",
    },
    {
      id: 2,
      title: "Product Design Process & Career Opportunities",
      url: "https://www.youtube.com/embed/vwOSbNmx8RI",
    },
  ],
  industrial_engineer: [
    {
      id: 1,
      title: "Industrial Engineering Career Overview - The Efficiency Experts",
      url: "https://www.youtube.com/embed/4qv2qKJ6f70",
    },
    {
      id: 2,
      title: "Process Optimization & Operations Management",
      url: "https://www.youtube.com/embed/cfQKF47nfVc",
    },
  ],
  mechanical_engineer: [
    {
      id: 1,
      title: "Mechanical Engineering Career Overview - The Builders of Everything",
      url: "https://www.youtube.com/embed/Un1ipH1cqzQ",
    },
    {
      id: 2,
      title: "Manufacturing & Innovation in Mechanical Engineering",
      url: "https://www.youtube.com/embed/NDa3AGPobS4",
    },
  ],
  mass_communication: [
    {
      id: 1,
      title: "Mass Communication Career Overview - The Voice of the World",
      url: "https://www.youtube.com/embed/BG1-Q96moZI",
    },
    {
      id: 2,
      title: "BJMC Job Roles & Salary 2026",
      url: "https://www.youtube.com/embed/lPHrwMCbQ-0",
    },
  ],
  public_relations_officer: [
    {
      id: 1,
      title: "Public Relations Career Overview - The Image Architects",
      url: "https://www.youtube.com/embed/9xQnMDFXRu4",
    },
    {
      id: 2,
      title: "PR Officer Roles & Crisis Management",
      url: "https://www.youtube.com/embed/iROfajgB430",
    },
  ],
  journalist: [
    {
      id: 1,
      title: "Journalism Career Overview - The Truth Seekers",
      url: "https://www.youtube.com/embed/V2Trq7iwOGU",
    },
    {
      id: 2,
      title: "Digital Journalism & Fact-Checking",
      url: "https://www.youtube.com/embed/e0B9EquB_Vs",
    },
  ],
  international_relations: [
    {
      id: 1,
      title: "International Relations Career Overview - The Global Strategists",
      url: "https://www.youtube.com/embed/o97t1Ou3EPY",
    },
    {
      id: 2,
      title: "Diplomacy & Foreign Policy Career Path",
      url: "https://www.youtube.com/embed/17bHMqgiVoE",
    },
  ],
  civil_administrative_services: [
    {
      id: 1,
      title: "Civil Administrative Services - The Architects of a Nation",
      url: "https://www.youtube.com/embed/12FxK7ejYwU",
    },
    {
      id: 2,
      title: "IAS/IPS Salary & Promotion Chart 2026",
      url: "https://www.youtube.com/embed/12FxK7ejYwU",
    },
  ],
  indian_economic_service: [
    {
      id: 1,
      title: "Indian Economic Service - The Architects of the Economy",
      url: "https://www.youtube.com/embed/HqdDEG7JrwM",
    },
    {
      id: 2,
      title: "IES Career Path & Economic Policy Making",
      url: "https://www.youtube.com/embed/fEi7Cb300R4",
    },
  ],
  sports_physiotherapist: [
    {
      id: 1,
      title: "Sports Physiotherapist Career - The Body Mechanics of Sports",
      url: "https://www.youtube.com/embed/E185pVJMFnQ",
    },
    {
      id: 2,
      title: "Sports Injury Prevention & Rehabilitation",
      url: "https://www.youtube.com/embed/eka6osF5I7E",
    },
  ],
  sportsperson: [
    {
      id: 1,
      title: "Sportsperson Career - The Champions of India",
      url: "https://www.youtube.com/embed/7lwoUf6nevA",
    },
    {
      id: 2,
      title: "Professional Sports Career Path & Opportunities",
      url: "https://www.youtube.com/embed/z3F_9M0o5es",
    },
  ],
  physical_trainer: [
    {
      id: 1,
      title: "Physical Trainer Career - The Architects of Health",
      url: "https://www.youtube.com/embed/XN8MX208dS8",
    },
    {
      id: 2,
      title: "Fitness Coaching & Personal Training Career Path",
      url: "https://www.youtube.com/embed/qI3pP3VIJ1U",
    },
  ],
  astronomer: [
    {
      id: 1,
      title: "Astronomer Career - The Cosmic Detectives",
      url: "https://www.youtube.com/embed/EXn9EPKhOow",
    },
    {
      id: 2,
      title: "Astrophysics & Space Research Career Path",
      url: "https://www.youtube.com/embed/xPuGqry4_Gc",
    },
  ],
  chemical_engineer: [
    {
      id: 1,
      title: "Chemical Engineering Career - The Architects of Scale",
      url: "https://www.youtube.com/embed/DX-I4lt4pQ8",
    },
    {
      id: 2,
      title: "Process Engineering & Industrial Chemistry",
      url: "https://www.youtube.com/embed/AYX6bVz1X6E",
    },
  ],
  engineering_technology: [
    {
      id: 1,
      title: "Engineering & Technology Career Overview - The Builders of Tomorrow",
      url: "https://www.youtube.com/embed/ejDdw1aUkf0",
    },
    {
      id: 2,
      title: "Tech Innovation & Engineering Excellence",
      url: "https://www.youtube.com/embed/Hqm3rC_7eq8",
    },
  ],
  mathematician: [
    {
      id: 1,
      title: "Mathematician Career Overview - The Pattern Finder",
      url: "https://www.youtube.com/embed/bBJbHgpchqE",
    },
    {
      id: 2,
      title: "Mathematics in AI, Finance & Space Exploration",
      url: "https://www.youtube.com/embed/qKswFu_MI0Y",
    },
  ],
  nanotechnologist: [
    {
      id: 1,
      title: "Nanotechnologist Career Overview - The Atomic Architect",
      url: "https://www.youtube.com/embed/7-bQ4bJJ4UA",
    },
  ],
  robotics_engineer: [
    {
      id: 1,
      title: "Robotics Engineering Career Overview - The Multi-Disciplinary Creator",
      url: "https://www.youtube.com/embed/EFppqtInU5s",
    },
    {
      id: 2,
      title: "Building Robots: From Drones to Surgical Bots",
      url: "https://www.youtube.com/embed/pmkwd3tpbqI",
    },
  ],
  statistician: [
    {
      id: 1,
      title: "Statistician Career Overview - The Data Detective",
      url: "https://www.youtube.com/embed/ByPfyNX2rQ4",
    },
    {
      id: 2,
      title: "Data Analytics & Statistical Modeling in India",
      url: "https://www.youtube.com/embed/1S_JYp6eNIY",
    },
  ],
  advertising_and_communication: [
    {
      id: 1,
      title: "Advertising & Communication Career Overview - The Storytellers of Commerce",
      url: "https://www.youtube.com/embed/ZsDOcNGJ8a0",
    },
    {
      id: 2,
      title: "Creative Campaigns & Digital Marketing in India",
      url: "https://www.youtube.com/embed/7uv4H1AF49w",
    },
  ],
  digital_marketing: [
    {
      id: 1,
      title: "Digital Marketing Career Overview - The Screen Whisperers",
      url: "https://www.youtube.com/embed/KZLroOQKT-g",
    },
    {
      id: 2,
      title: "SEO, Social Media & Performance Marketing in India",
      url: "https://www.youtube.com/embed/3J6EW0FQ2tQ",
    },
  ],
  entrepreneurship_and_management: [
    {
      id: 1,
      title: "Entrepreneurship & Management Career Overview - The Architects of Tomorrow",
      url: "https://www.youtube.com/embed/KZLroOQKT-g",
    },
  ],
  marketing: [
    {
      id: 1,
      title: "Marketing Career Overview - The Pulse of Business",
      url: "https://www.youtube.com/embed/DGcopLXJUzU",
    },
    {
      id: 2,
      title: "Brand Management & Consumer Marketing in India",
      url: "https://www.youtube.com/embed/1Tf9NHbRPYM",
    },
  ],
  sales_professional: [
    {
      id: 1,
      title: "Sales Professional Career Overview - The Engine of Business",
      url: "https://www.youtube.com/embed/ZUKLrTl22gg",
    },
    {
      id: 2,
      title: "B2B Sales, FMCG & Real Estate Sales in India",
      url: "https://www.youtube.com/embed/wEUPzdCDHSs",
    },
  ],
  visual_merchandiser: [
    {
      id: 1,
      title: "Visual Merchandiser Career Overview - The Silent Sellers",
      url: "https://www.youtube.com/embed/ZUKLrTl22gg",
    },
  ],
  aeronautical_engineer: [
    {
      id: 1,
      title: "Aeronautical Engineer Career Overview - The Sky Architects",
      url: "https://www.youtube.com/embed/HfNObEh1scg",
    },
    {
      id: 2,
      title: "Aircraft Design, Drones & Aerospace Engineering in India",
      url: "https://www.youtube.com/embed/NItaQ50mpJM",
    },
  ],
  air_traffic_controller: [
    {
      id: 1,
      title: "Air Traffic Controller Career Overview - The Sky Guardians",
      url: "https://www.youtube.com/embed/1UM8ssea-uA",
    },
    {
      id: 2,
      title: "Radar Systems, Flight Safety & ATC Operations in India",
      url: "https://www.youtube.com/embed/N1gw9orDqnw",
    },
  ],
  automotive_design: [
    {
      id: 1,
      title: "Automotive Design Career Overview - The Sculptors of Speed",
      url: "https://www.youtube.com/embed/SSGSdSKLJVM",
    },
    {
      id: 2,
      title: "EV Design, Clay Modeling & Automotive Innovation in India",
      url: "https://www.youtube.com/embed/qEi4KyNTiN4",
    },
  ],
  aviation_management: [
    {
      id: 1,
      title: "Aviation Management Career Overview - The Ground Commanders",
      url: "https://www.youtube.com/embed/m_2b4f87nDY",
    },
    {
      id: 2,
      title: "Airport Operations, Airlines & Aviation Industry in India",
      url: "https://www.youtube.com/embed/02Agmdg8D5o",
    },
  ],
  commercial_pilot: [
    {
      id: 1,
      title: "Commercial Pilot Career Overview - The Captains of the Clouds",
      url: "https://www.youtube.com/embed/Edk3FlhuvC8",
    },
    {
      id: 2,
      title: "Flight Training, Cockpit Operations & Pilot Life in India",
      url: "https://www.youtube.com/embed/YztqsEiXVuY",
    },
  ],
  merchant_navy_officer: [
    {
      id: 1,
      title: "Merchant Navy Officer Career Overview - The Global Nomads",
      url: "https://www.youtube.com/embed/bY01tHJG3OM",
    },
    {
      id: 2,
      title: "Ship Operations, Maritime Training & Life at Sea in India",
      url: "https://www.youtube.com/embed/n0JaPBJQdGY",
    },
  ],
  supply_chain_management: [
    {
      id: 1,
      title: "Supply Chain Management Career Overview - The Masterminds of Movement",
      url: "https://www.youtube.com/embed/52VcoVTsVUY",
    },
  ],
  artificial_intelligence: [
    {
      id: 1,
      title: "Artificial Intelligence Career Overview - The Architect of Intelligence",
      url: "https://www.youtube.com/embed/qzAHXO-cN5Q",
    },
    {
      id: 2,
      title: "Machine Learning, AI Engineering & Future of AI in India",
      url: "https://www.youtube.com/embed/HAN2z7vLsIE",
    },
  ],
};

export function getCareerVideos(careerSlug: string): CareerVideo[] {
  const videos = careerVideos[careerSlug];
  
  // If no videos exist for this career, return empty array
  // The component will handle empty arrays gracefully
  if (!videos || videos.length === 0) {
    return [];
  }
  
  return videos;
}
