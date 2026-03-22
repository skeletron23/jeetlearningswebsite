import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const bioScienceUpdateData: Record<string, CareerPageData> = {
  bioinformatics: {
    slug: "bioinformatics",
    badge: "🔬 Scientific Innovation for Class 10+",
    heading: "Bioinformatics",
    subheading: "Decoding the language of life through software, algorithms, and genomic data science.",
    whyCards: [
      { icon: "Dna", title: "Genomic Analyst", description: "Use software tools to interpret DNA sequences and protein blueprints.", borderColor: "#10B981" },
      { icon: "Terminal", title: "Algorithm Design", description: "Develop complex statistical models for drug discovery and disease mapping.", borderColor: "#059669" },
      { icon: "Database", title: "Big Data Biologist", description: "Manage massive biological databases to solve global health challenges.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "AI-Driven Research", description: "Join a $14.7B industry transformed by AI and machine learning.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Tech/B.Sc)", color: "bg-green-100 text-green-700" },
      { label: "Key Skills", detail: "Python, R, SQL, Genomics", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "10%+ CAGR (Genomics)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$14.7B", label: "Global Market 2032", gradient: "from-green-500 to-green-600" },
      { value: "AI", label: "Core Tech Driver", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Computational biological analysis.",
        color: BLUE,
        content: [
          "The Genomic Decoder: Bioinformatics uses software tools and algorithms to analyze and interpret complex biological data, particularly DNA and protein sequences.",
          "Interdisciplinary Core: It bridges biology, computer science, and statistics to understand cellular mechanisms.",
          "Global Impact: From drug discovery and personalized medicine to predicting the next viral outbreak using data science."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal for the analytical mind.",
        color: BLUE2,
        content: [
          "The Analytical Scientist: Do you enjoy both Biology and Math/Coding?",
          "Traits: Analytical mindset, logical reasoning, and high attention to detail.",
          "Hard Skills: Proficiency in Python/R programming, genomics, and sequence alignment techniques."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "From data gathering to discovery.",
        color: BLUE,
        content: [
          "Data Analysis: Developing algorithms for gene identification and biological mapping.",
          "Research: Analyzing clinical trial data to assist in drug discovery.",
          "Modeling: Predicting protein structures and interactions using AI tools like AlphaFold.",
          "Management: Building and maintaining secure databases for global biological research."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "Investment in tech and science.",
        color: BLUE2,
        content: [
          "Government Colleges: ₹35,000 – ₹3,00,000 for the full degree.",
          "Private Universities: ₹5,00,000 – ₹17,00,000 for 4-year programs.",
          "Duration: 4 years (B.Tech/B.Sc+M.Sc).",
          "Tech Requirements: A high-performance laptop (₹80k+) is needed for data crunching."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Aid for biotech students.",
        color: BLUE,
        content: [
          "DBT-BET: Department of Biotechnology Eligibility Test fellowships.",
          "GATE Fellowship: Support for postgraduate research at premier institutes.",
          "ICMR JRF: Junior Research Fellowship for medical and biological data research."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Hurdles in the data lab.",
        color: BLUE2,
        content: [
          "Tech Evolution: Constant pressure to update programming skills in a fast-changing field.",
          "Infrastructure Needs: Heavy reliance on high-performance computational clusters.",
          "Research Competition: Intense focus required to secure spots in global labs."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actions for high schoolers.",
        color: BLUE,
        content: [
          "Academic Focus: Build a strong foundation in both Biology and Mathematics.",
          "Learn Coding: Start with basic Python or R from Class 11.",
          "Stay Informed: Follow how AI is transforming biology on platforms like ScienceDaily."
        ]
      }
    ]
  },
  biochemistry: {
    slug: "biochemistry",
    badge: "🔬 Scientific Innovation for Class 10+",
    heading: "Biochemistry",
    subheading: "Exploring the chemical blueprints of life at the cellular and molecular level.",
    whyCards: [
      { icon: "FlaskConical", title: "Molecular Explorer", description: "Study chemical processes within living organisms to unlock cellular secrets.", borderColor: "#10B981" },
      { icon: "Microscope", title: "Diagnostic Expert", description: "Perform clinical diagnostics and test drug efficiency and toxicity safely.", borderColor: "#059669" },
      { icon: "Dna", title: "Drug Discovery", description: "Bridge biology and chemistry to develop life-saving medications.", borderColor: "#3B82F6" },
      { icon: "ShieldCheck", title: "Food Safety", description: "Ensure the chemical integrity of nutrition and consumer products.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Starting Pay", detail: "₹3.5L - ₹7L PA", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Meticulous & Persistent", color: "bg-blue-100 text-blue-700" },
      { label: "Lab Focus", detail: "HPLC & Enzyme Kinetics", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "₹7L", label: "Top Starting LPA", gradient: "from-green-500 to-green-600" },
      { value: "Lab", label: "Core Work Setting", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The chemistry of living things.",
        color: BLUE,
        content: [
          "The Molecular Scientist: Biochemistry is the study of chemical processes within and relating to living organisms.",
          "The Bridge: It connects biology and chemistry to explore cellular mechanisms and signaling pathways.",
          "Human Health: Crucial for understanding disease pathology and metabolic syndromes."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal for the persistent researcher.",
        color: BLUE2,
        content: [
          "Traits: Curiosity, persistence, and extreme meticulousness with measurements.",
          "Skills: Molecular biology techniques, chromatography (HPLC), and enzyme kinetics analysis.",
          "Environment: Perfect for those who love working with complex glassware and precision instruments."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Experiments to diagnostics.",
        color: BLUE,
        content: [
          "Experimentation: Understanding cellular pathways to identify biological targets.",
          "Testing: Evaluating drug efficiency and toxicity in controlled settings.",
          "Diagnostics: Performing clinical tests to detect biomarkers for diseases.",
          "Quality Control: Monitoring chemical composition in food and pharmaceuticals."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "Lab-intensive education cost.",
        color: BLUE2,
        content: [
          "Government Colleges: ₹10,000 – ₹50,000 per year.",
          "Private Universities: ₹1,00,000 – ₹2,00,000 per year.",
          "Duration: 3 years B.Sc + 2 years M.Sc (highly recommended).",
          "Equipment: Lab coats and basic safety gear are standard requirements."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Funding for researchers.",
        color: BLUE,
        content: [
          "INSPIRE Fellowship: Support for basic science students with high academic standing.",
          "UGC-NET JRF: Grants for pursuing PhD in top Indian universities.",
          "KVPY: Scholarships specifically designed to encourage science research."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Risks in the research lab.",
        color: BLUE2,
        content: [
          "Endurance: Long, repetitive hours spent standing in laboratory environments.",
          "Safety: Regular exposure to hazardous chemicals and biological samples.",
          "Patience: Research results often take months of failed attempts to manifest."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Action for young biochemists.",
        color: BLUE,
        content: [
          "Organic Chemistry: Focus deeply on Organic Chemistry and Biomolecules chapters.",
          "Olympiads: Participate in National Science Olympiads to build problem-solving speed.",
          "Self-Study: Read about the Krebs cycle and basic metabolic pathways early on."
        ]
      }
    ]
  },
  biotechnology: {
    slug: "biotechnology",
    badge: "🔬 Scientific Innovation for Class 10+",
    heading: "Biotechnology",
    subheading: "Harnessing biological systems to innovate in healthcare, agriculture, and global sustainability.",
    whyCards: [
      { icon: "TestTube2", title: "Vaccine Developer", description: "Design biological solutions like vaccines and genetically modified crops.", borderColor: "#10B981" },
      { icon: "Leaf", title: "Agri-Tech Pioneer", description: "Engineer enzymes and crops for higher yields and eco-friendly biofuels.", borderColor: "#059669" },
      { icon: "Combine", title: "Technical Expert", description: "Master CRISPR/Cas9, cell culture, and bioprocess engineering systems.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "High-Growth Sector", description: "Join a industry targeting a $150 billion reach in India by 2025.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Market Size", detail: "$92B (2023) India", color: "bg-green-100 text-green-700" },
      { label: "Key Tech", detail: "CRISPR & PCR", color: "bg-blue-100 text-blue-700" },
      { label: "Scholarship", detail: "GAT-B & BIG Grant", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$150B", label: "2025 Market Goal", gradient: "from-green-500 to-green-600" },
      { value: "CRISPR", label: "Leading Edge Tech", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Engingeering life for human good.",
        color: BLUE,
        content: [
          "The Product Creator: Biotechnology uses living organisms to develop products in fields like healthcare and agriculture.",
          "Innovation Hub: It focuses on creating vaccines, researching biofuels, and engineering enzymes for industrial use.",
          "Sustainability: Crucial for solving environmental challenges and ensuring global food security."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal for the innovative mind.",
        color: BLUE2,
        content: [
          "Traits: Innovative thinking, high adaptability, and strong technical proficiency.",
          "Skills: CRISPR/Cas9, cell culture, bioprocess engineering, and quantitative PCR techniques.",
          "Focus: Perfect for those who want to build tangible biological solutions to large-scale problems."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "From lab R&D to factory scale.",
        color: BLUE,
        content: [
          "R&D: Developing new vaccines and medical therapeutics.",
          "Agri-Innovation: Creating crops that resist pests and environmental stress.",
          "Bioprocessing: Overseeing the industrial production of enzymes and proteins.",
          "Regulatory: Navigating the stringent approval processes for new biological products."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "Education and professional fees.",
        color: BLUE2,
        content: [
          "Government Colleges: ₹50,000 – ₹1,50,000 for the full program.",
          "Private Universities: ₹4,00,000 – ₹10,00,000 total.",
          "Duration: 4 years B.Tech/B.Sc.",
          "Equipment: Regular lab fees for specialized biological consumables."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Support for budding scientists.",
        color: BLUE,
        content: [
          "GAT-B: Graduate Aptitude Test-Biotechnology for scholarships in top institutes.",
          "BIG Grant: Funding for biotech innovators and young entrepreneurs.",
          "TATA Scholarship: Assistance for students in technical and research fields."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Hurdles in the bio-tech lab.",
        color: BLUE2,
        content: [
          "Ethics: Navigating deep-seated dilemmas around genetic modification (GMOs).",
          "Risk: High costs and high mortality rates for long-term R&D projects.",
          "Regulation: Extremely time-consuming government approval cycles."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actions for bio-innovators.",
        color: BLUE,
        content: [
          "Master Genetics: Focus intensely on molecular biology and heredity chapters.",
          "Read Industry News: Follow 'BioSpectrum' to understand the startup ecosystem.",
          "Site Visits: Visit a nearby plant nursery or research lab to visualize biological work."
        ]
      }
    ]
  },
  microbiology: {
    slug: "microbiology",
    badge: "🔬 Scientific Innovation for Class 10+",
    heading: "Microbiology",
    subheading: "Studying the microscopic world to decode health, disease, and environmental balance.",
    whyCards: [
      { icon: "Microscope", title: "Pathogen Hunter", description: "Identify microscopic organisms like bacteria and viruses to fight disease.", borderColor: "#10B981" },
      { icon: "Activity", title: "Diagnostic Lead", description: "Monitor clinical samples and ensure safety in food and pharma industries.", borderColor: "#059669" },
      { icon: "ShieldAlert", title: "Antibiotic Guardian", description: "Research antibiotic resistance and develop next-generation medical cures.", borderColor: "#3B82F6" },
      { icon: "Users", title: "Public Health Hub", description: "Play a central role in India's global diagnostic and pharmaceutical networks.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Global Market", detail: "$6.8B (2030) Market", color: "bg-green-100 text-green-700" },
      { label: "Method", detail: "Aseptic Culturing", color: "bg-blue-100 text-blue-700" },
      { label: "Pay Grade", detail: "Significant Hike with Exp", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$6.8B", label: "2030 Predicted Market", gradient: "from-green-500 to-green-600" },
      { value: "Aseptic", label: "Core Working Rule", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The study of the unseen.",
        color: BLUE,
        content: [
          "The Invisible Investigator: Microbiology is the study of bacteria, viruses, fungi, and protozoa.",
          "Role in Health: Understanding how these organisms affect human health and environment.",
          "Industry Utility: Vital for clinical medicine, food processing, and industrial fermentation."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal for the observant mind.",
        color: BLUE2,
        content: [
          "Traits: Sharp observational skills, immense patience, and a methodical work ethic.",
          "Skills: Microscopy, aseptic techniques, and advanced microbial culturing.",
          "Focus: Perfect for those fascinated by the complex life happening at a microscopic scale."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Detection to prevention.",
        color: BLUE,
        content: [
          "Pathogen Identification: Testing clinical samples to detect harmful bacteria or viruses.",
          "Quality Monitoring: Ensuring bacterial safety in the food and beverage sectors.",
          "Antibiotic Research: Studying how microbes evolve to resist modern treatments.",
          "Environmental Oversight: Monitoring microbial levels in water and industrial waste."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "Lab and course spend.",
        color: BLUE2,
        content: [
          "Government Colleges: ₹20,000 – ₹1,00,000 for B.Sc/M.Sc.",
          "Private Universities: ₹3,00,000 – ₹8,00,000 total.",
          "Duration: 3 years (B.Sc) plus 2 years specialized (M.Sc).",
          "Consumables: Regular spend on Petri dishes and media for home labs is optional."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Aid for microbial research.",
        color: BLUE,
        content: [
          "CSIR-UGC NET: Funding for researchers in biological and clinical sciences.",
          "ICMR-JRF: Government fellowship for medical-focused microbial research.",
          "Lady Tata Memorial: Specialized grants for research in leukemia and oncology."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Hurdles in the petri dish.",
        color: BLUE2,
        content: [
          "Safety Risk: The constant occupational risk of infection when handling live pathogens.",
          "Wait Times: Navigating long incubation periods required for microbial colonies to grow.",
          "Evolving Threats: Dealing with rapidly mutating viruses that demand constant research shifts."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actions for future microbiologists.",
        color: BLUE,
        content: [
          "Health & Disease: Deeply study the 'Human Health and Disease' chapter in Class 12 Biology.",
          "Lab Practice: Master slide preparation and simple staining techniques in your school lab.",
          "History: Learn about the discovery of penicillin and the history of vaccine development."
        ]
      }
    ]
  },
  genetics: {
    slug: "genetics",
    badge: "🔬 Scientific Innovation for Class 10+",
    heading: "Genetics",
    subheading: "Decoding the blueprint of heredity to understand variation, traits, and complex diseases.",
    whyCards: [
      { icon: "Dna", title: "Heredity Specialist", description: "Study gene variation and how traits are transmitted across generations.", borderColor: "#10B981" },
      { icon: "Fingerprint", title: "Forensic Analyst", description: "Use DNA profiling for criminal justice and ancestral tracking investigations.", borderColor: "#059669" },
      { icon: "Maximize", title: "Counseling Lead", description: "Help families navigate prenatal screenings and hereditary disease risks.", borderColor: "#3B82F6" },
      { icon: "Users", title: "Future Medicine", description: "Join a market expanding at 10% CAGR for personalized genetic testing.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Market Growth", detail: "10%+ CAGR India", color: "bg-green-100 text-green-700" },
      { label: "Core Method", detail: "Next-Gen Sequencing", color: "bg-blue-100 text-blue-700" },
      { label: "Ethics", detail: "Pillar of Success", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "10%", label: "Expected Annual Growth", gradient: "from-green-500 to-green-600" },
      { value: "NGS", label: "Industry Gold Standard", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Deciphering the code of life.",
        color: BLUE,
        content: [
          "The Heredity Tracker: Genetics is the study of genes, genetic variation, and heredity in organisms.",
          "Life Decoder: Understanding how specific traits and diseases are passed from parents to offspring.",
          "Modern Frontiers: Exploring how gene editing and personalization can prevent hereditary illnesses."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal for the precise investigator.",
        color: BLUE2,
        content: [
          "Traits: Ethical integrity, high mathematical aptitude, and extreme precision.",
          "Skills: DNA sequencing, genetic counseling, and complex statistical data analysis.",
          "Focus: Perfect for those interested in the 'why' behind human physical and health traits."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Diagnosis to counseling.",
        color: BLUE,
        content: [
          "Disorder Diagnosis: Identifying chromosomal and genetic mutations in clinical settings.",
          "Counseling: Providing technical and emotional advice to families regarding genetic risks.",
          "R&D: Researching gene therapies that could cure currently untreatable diseases.",
          "Forensics: Using genetic markers for identification and criminal profiling."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "Investment in genetic science.",
        color: BLUE2,
        content: [
          "Government Colleges: ₹30,000 – ₹1,50,000 for the full degree.",
          "Private Universities: ₹3,00,000 – ₹10,00,000 total.",
          "Duration: 3-4 years (B.Sc) plus 2 years (M.Sc).",
          "Consumables: Specialized DNA extraction kits are expensive but provided via labs."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Aid for genetic researchers.",
        color: BLUE,
        content: [
          "GAT-B: Graduate scholarships for biotechnology and genetics students.",
          "CSIR JRF: National fellowships for pursuing research at premier labs.",
          "DBT-RA: Postdoctoral research associateship for advanced geneticists."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Hurdles in the helix.",
        color: BLUE2,
        content: [
          "Bioethics: Navigating the complex moral ground of CRISPR and human gene editing.",
          "Emotional Toll: Managing the psychological weight of counseling families on terminal diseases.",
          "Data Density: Interpreting the massive datasets produced by modern sequencing tools."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actions for genealogists.",
        color: BLUE,
        content: [
          "Master Mendel: Build a strong foundation in Mendelian genetics and chromosomal theory.",
          "Read History: Learn about the Human Genome Project and its world-changing impact.",
          "Ethics Debates: Participate in school debates regarding the pros and cons of gene editing."
        ]
      }
    ]
  },
  wildlife_biologist: {
    slug: "wildlife_biologist",
    badge: "🔬 Scientific Innovation for Class 10+",
    heading: "Wildlife Biologist",
    subheading: "Studying wild animals and ecosystems to drive global conservation and biodiversity efforts.",
    whyCards: [
      { icon: "Bird", title: "Species Guardian", description: "Monitor endangered species and research their behaviors and habitats.", borderColor: "#10B981" },
      { icon: "Map", title: "Conservationist", description: "Develop restoration plans to protect India's 8% global biodiversity share.", borderColor: "#059669" },
      { icon: "Compass", title: "Field Researcher", description: "Master GPS tracking, species identification, and rugged survey techniques.", borderColor: "#3B82F6" },
      { icon: "Users", title: "Conflict Resolver", description: "Research human-wildlife conflict and advocate for sustainable coexistence.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Biodiversity", detail: "8% Global Share India", color: "bg-green-100 text-green-700" },
      { label: "Stamina", detail: "Remote Field Work", color: "bg-blue-100 text-blue-700" },
      { label: "Employers", detail: "Govt, WII, WWF-India", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "8%", label: "World Bio-Diversity", gradient: "from-green-500 to-green-600" },
      { value: "Field", label: "Primary Work Setting", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Science for the wilderness.",
        color: BLUE,
        content: [
          "The Nature Scientist: Wildlife Biologists study animals and their habitats to aid conservation.",
          "Habit Tracker: Monitoring how species interact with each other and their changing environment.",
          "Guardian Level: Playing a critical role in preserving India’s unique flora and fauna for future generations."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal for the resilient naturalist.",
        color: BLUE2,
        content: [
          "Traits: Resilience, high physical stamina, and a deep, lifelong love for nature.",
          "Skills: Field survey techniques, advanced GPS tracking, and visual species identification.",
          "Environment: Perfect for those who prefer remote field stations over air-conditioned offices."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Discovery to conservation.",
        color: BLUE,
        content: [
          "Monitoring: Tracking endangered species populations in real-time.",
          "Conflict Management: Researching why human-wildlife conflict happens and how to prevent it.",
          "Census: Conducting official wildlife counts (like the Tiger Census).",
          "Restoration: Planning and executing habitat recovery in degraded forest zones."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "Training in the wild.",
        color: BLUE2,
        content: [
          "Government Colleges: ₹10,000 – ₹50,000 for relevant B.Sc/M.Sc programs.",
          "Private Universities: ₹1,00,000 – ₹3,00,000 yearly.",
          "Duration: 3 years (B.Sc) plus 2 years (M.Sc) at institutes like WII.",
          "Living: Field stations are often free, but basic amenities can be scarce."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Funding for nature defenders.",
        color: BLUE,
        content: [
          "WII Fellowships: Dedicated support for research at the Wildlife Institute of India.",
          "WWF-India Grants: Small grants for conservation and community projects.",
          "Salim Ali Fellowship: Support for researchers focusing on Indian avian and forest life."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Hurdles in the jungle.",
        color: BLUE2,
        content: [
          "Physical Hazard: Dealing with rough terrain, extreme weather, and unpredictable animals.",
          "Isolation: Living for weeks or months in remote areas with only basic supplies.",
          "Career Path: Competitive roles mostly limited to government agencies and top-tier NGOs."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actions for future naturalists.",
        color: BLUE,
        content: [
          "Observational Habits: Start nature journaling, birdwatching, or simple trail tracking.",
          "Academic Focus: Pay extra attention to the Ecology chapters in your Biology textbook.",
          "Volunteering: Partner with local forest conservation or animal welfare groups to see the work first-hand."
        ]
      }
    ]
  },
  fishery_biologist: {
    slug: "fishery_biologist",
    badge: "🔬 Scientific Innovation for Class 10+",
    heading: "Fishery Biologist",
    subheading: "Managing aquatic life and sustainable fisheries to build a resilient Blue Economy.",
    whyCards: [
      { icon: "Waves", title: "Aquatic Scientist", description: "Study fish populations and aquatic health to ensure ecosystem balance.", borderColor: "#10B981" },
      { icon: "Anchor", title: "Fishery Manager", description: "Lead sustainable hatchery operations and commercial fishery management.", borderColor: "#059669" },
      { icon: "Activity", title: "Disease Expert", description: "Research fish pathologies and water quality to prevent mass stock loss.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "Blue Economy Lead", description: "Join the world's 2nd largest fish producer in a vital national sector.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Global Rank", detail: "2nd Largest Producer", color: "bg-green-100 text-green-700" },
      { label: "Condition", detail: "Water Health Expert", color: "bg-blue-100 text-blue-700" },
      { label: "Focus", detail: "Blue Revolution 2.0", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "2nd", label: "Global Fish Producer", gradient: "from-green-500 to-green-600" },
      { value: "Water", label: "Core Expertise", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Sustainable aquatic management.",
        color: BLUE,
        content: [
          "The Aquatic Manager: Fishery Biologists study fish populations and aquatic systems for sustainable use.",
          "Resource Guardian: Ensuring that our oceans and rivers remain productive without being overfished.",
          "Economic Pillar: Helping manage India’s massive fisheries sector, the second largest in the world."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal for the aquatic enthusiast.",
        color: BLUE2,
        content: [
          "Traits: Physical hardiness, an analytical mind, and a liking for maritime/aquatic settings.",
          "Skills: Water quality testing, Ichthyology (fish study), and basic boat handling/navigation.",
          "Focus: Perfect for those who love working near the water and care about the 'Blue Revolution'."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Hatchery to sustainable sea.",
        color: BLUE,
        content: [
          "Hatchery Management: Overseeing the life cycle of fish from spawn to adult.",
          "Research: Studying fish diseases and developing nutrient-rich sustainable diets.",
          "Sustainability Tracking: Monitoring water health and fish stocks to prevent depletion.",
          "Policy: Advising government on breeding seasons and fishing quotas."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "Investment in aquatic science.",
        color: BLUE2,
        content: [
          "Government Colleges: ₹10,000 – ₹40,000 for professional degrees.",
          "Private Universities: ₹1,00,000 – ₹4,00,000 total.",
          "Duration: 4 years (B.F.Sc - Bachelor of Fisheries Science).",
          "Equipment: Life jackets and basic field water testing kits are supplied."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Aid for fishery students.",
        color: BLUE,
        content: [
          "ICAR JRF/SRF: Fellowships for pursuing higher research in fishery science.",
          "NFDB Scholarships: Funding from the National Fisheries Development Board.",
          "State Merit: Specialized aid for students from coastal states like Kerala and TN."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Hurdles in the water.",
        color: BLUE2,
        content: [
          "Physical Toll: Physically demanding work involving long hours on boats and ponds.",
          "Climate Change: Direct impact of rising sea temperatures on fish stock health.",
          "Weather Risk: Exposure to erratic and sometimes dangerous weather conditions at sea."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actions for blue-revolutionaries.",
        color: BLUE,
        content: [
          "Read Policy: Learn about India's 'Blue Revolution' and PMMSY scheme.",
          "Focus on Ecology: Master 'Organisms and Populations' units in Biology.",
          "Field Trips: Visit a local fish hatchery or marine aquarium to observe the ecosystem."
        ]
      }
    ]
  },
  oceanographer: {
    slug: "oceanographer",
    badge: "🔬 Scientific Innovation for Class 10+",
    heading: "Oceanographer",
    subheading: "Exploring the deep blue to unlock secrets of climate, minerals, and marine life.",
    whyCards: [
      { icon: "Ship", title: "Seafaring Scientist", description: "Study physical and chemical aspects of the ocean on research vessels.", borderColor: "#10B981" },
      { icon: "Dna", title: "Marine Biologist", description: "Discover deep-sea life and investigate the evolution of aquatic species.", borderColor: "#059669" },
      { icon: "Droplets", title: "Climate Researcher", description: "Analyze ocean currents and tides to project global climate patterns.", borderColor: "#3B82F6" },
      { icon: "Target", title: "Deep Sea Mission", description: "Join India's ₹4,000 crore mission for mineral exploration and research.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "National Mission", detail: "Deep Ocean Mission", color: "bg-green-100 text-green-700" },
      { label: "Budget", detail: "₹4,000Cr Project", color: "bg-blue-100 text-blue-700" },
      { label: "Setting", detail: "High Sea Research", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "₹4k Cr", label: "National Deep Sea Fund", gradient: "from-green-500 to-green-600" },
      { value: "Vessel", label: "Primary Lab Setting", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The science of the deep.",
        color: BLUE,
        content: [
          "The Explorer: Oceanographers study the physical, chemical, and biological layers of the ocean.",
          "Climate Hub: Understanding how the ocean controls world weather and climate patterns.",
          "Resource Hunter: Exploring the ocean floor for minerals and energy sources of the future."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal for the adventurous spirit.",
        color: BLUE2,
        content: [
          "Traits: Adventurous spirit, high technical aptitude, and excellent physical fitness.",
          "Skills: Marine data analysis, seafaring navigation, and seawater chemical sampling.",
          "Focus: Perfect for those who love the sea and want to solve global challenges like sea-level rise."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Mapping to mineral discovery.",
        color: BLUE,
        content: [
          "Deep Mapping: Using sonar and ROVs to map the unknown ocean floor.",
          "Climate Study: Researching how ocean currents and temperatures affect global warming.",
          "Mineral Hunt: Exploring for 'Polymetallic Nodules' on the deep seabed.",
          "Pollution Monitor: Studying the impact of plastics and chemical runoff on marine life."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "Investment in deep sea science.",
        color: BLUE2,
        content: [
          "Government Colleges: ₹20,000 – ₹1,00,000 for the entire course.",
          "Private Universities: Very rare; mostly specialized at institutes like NIOT or NCAOR.",
          "Duration: 3 years (B.Sc) plus 2 years (M.Sc) in Marine Sciences.",
          "Stamina: Requires weeks at sea on research vessels with all costs usually covered by grants."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Aid for explorers.",
        color: BLUE,
        content: [
          "MoES Fellowships: Support from the Ministry of Earth Sciences for deep-sea research.",
          "NIOT Fellowships: Funding for students at the National Institute of Ocean Technology.",
          "CSIR-Earth Science: Research grants for studying the ocean-earth interface."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Hurdles on the high seas.",
        color: BLUE2,
        content: [
          "Physical Toll: Sea sickness and the fatigue of working on moving research vessels.",
          "Separation: Staying away from home for several weeks or months at a time.",
          "Weather Hazard: Navigating erratic ocean weather and high-pressure deep-sea gear failures."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actions for future explorers.",
        color: BLUE,
        content: [
          "Physics Focus: Build a strong master of Fluid Dynamics and Geography.",
          "Water Skills: Learn swimming and ideally basic scuba diving if you live on the coast.",
          "Deep Mission News: Follow updates on India's 'Deep Ocean Mission' in the PIB news feed."
        ]
      }
    ]
  },
  clinical_research: {
    slug: "clinical_research",
    badge: "🔬 Scientific Innovation for Class 10+",
    heading: "Clinical Research",
    subheading: "Architects of Medical Innovation: Bridging the Gap Between Discovery and Life-Saving Cure.",
    whyCards: [
      { icon: "ShieldCheck", title: "Healthcare Guardian", description: "Ensure new drugs and medical devices are safe and effective for humanity.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Integration", description: "Work in a standardized international industry with worldwide career mobility.", borderColor: "#059669" },
      { icon: "Binary", title: "Analytical Rigor", description: "Combine medical science with data analytics to solve treatment interactions.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "Growth Sector", description: "Join an industry with a consistent 14% CAGR and rapid advancement.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-5 Years (B.Sc/B.Pharm + PG)", color: "bg-green-100 text-green-700" },
      { label: "Starting Pay", detail: "₹3.5L - ₹9L PA", color: "bg-blue-100 text-blue-700" },
      { label: "Market Growth", detail: "14% CAGR", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "14%", label: "Industry CAGR", gradient: "from-green-500 to-green-600" },
      { value: "Global", label: "Career Mobility", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Testing medicine for the world.",
        color: BLUE,
        content: [
          "The Clinical Architect: Clinical Research is the bridge between a laboratory discovery and a pharmacy-ready cure.",
          "Data Driven: It involves systematic management of clinical trials to ensure patient safety and drug efficacy.",
          "Global Standards: Conducted under strict international ICH-GCP guidelines for ethical medical trials."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal for the detail-oriented analyst.",
        color: BLUE2,
        content: [
          "Traits: Extreme attention to detail, ethical integrity, and strong analytical skills.",
          "Skills: Trial protocol design, regulatory documentation, and data monitoring.",
          "Focus: Perfect for those who want to play a behind-the-scenes role in medical breakthroughs."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Trial monitoring to regulatory check.",
        color: BLUE,
        content: [
          "Monitoring: Overseeing clinical trial sites to ensure 100% data accuracy.",
          "Regulatory Compliance: Ensuring trials follow CDSCO (India) and FDA (USA) standards.",
          "Coordination: Liaison between pharmaceutical sponsors, hospitals, and ethics boards.",
          "Safety Reporting: Managed and reporting adverse event occurrences to authorities."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "Tuition and certification spend.",
        color: BLUE2,
        content: [
          "Government: ₹15,000 – ₹60,000 (Central Universities/Jamia Hamdard).",
          "Private Institutes: ₹1.5L – ₹5L (ICRI/Private Medical Colleges).",
          "Duration: 3-5 years (Bachelors + specialized PG Diploma).",
          "Exams: Professional certification fees (like ACRP) may apply later."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Funding for trial specialists.",
        color: BLUE,
        content: [
          "ICMR-JRF: Fellowships for research in health and clinical trials.",
          "CSIR-UGC NET: National level support for biological research.",
          "DBT-JRF: Grants for biotechnology and health-related clinical studies."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Hurdles in clinical trials.",
        color: BLUE2,
        content: [
          "High Pressure: Stringent deadlines for submitting trial results to global regulators.",
          "Ethical Complexity: Balancing trial efficiency with patient safety and rights.",
          "Documentation Load: Massive amounts of highly specific regulatory paperwork required."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actions for researchers.",
        color: BLUE,
        content: [
          "Communication: Work on English proficiency, as documentation is entirely in English.",
          "Bio & Chem: Target a high percentage in PCB stream subjects.",
          "Ethics Knowledge: Read about the Nuremberg Code and the history of medical ethics."
        ]
      }
    ]
  },
  physiology: {
    slug: "physiology",
    badge: "🔬 Scientific Innovation for Class 10+",
    heading: "Physiology",
    subheading: "The Mechanics of Life: Decoding the Complex Symphony of the Human Body.",
    whyCards: [
      { icon: "Microscope", title: "Fundamental Insight", description: "Discover hidden mechanisms of how cells and organs function in harmony.", borderColor: "#10B981" },
      { icon: "Stethoscope", title: "Medical Bedrock", description: "Master the foundational science underpinning surgery and sports science.", borderColor: "#059669" },
      { icon: "Lightbulb", title: "Innovation Frontier", description: "Lead breakthroughs in neuroscience and metabolic health research.", borderColor: "#3B82F6" },
      { icon: "HeartPulse", title: "Wellness Architect", description: "Optimize human performance in sports or combat age-related decline.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-5 Years (B.Sc + M.Sc)", color: "bg-green-100 text-green-700" },
      { label: "Starting Pay", detail: "₹3L - ₹7L PA", color: "bg-blue-100 text-blue-700" },
      { label: "Key Tool", detail: "Biomedical Monitoring", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "Research", label: "Core Career Path", gradient: "from-green-500 to-green-600" },
      { value: "Mech", label: "Understanding Focus", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The mechanics of functioning.",
        color: BLUE,
        content: [
          "The Function Specialist: Physiology is the study of how living systems work—from the cellular level to the whole body.",
          "Medical Foundation: It is the bedrock of clinical medicine, helping us understand how our body responds to drugs and stress.",
          "Scientific Exploration: Finding out how humans adapt to extreme environments like high altitude or space."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal for the inquisitive scientist.",
        color: BLUE2,
        content: [
          "Traits: High curiosity about the human body, persistence in research, and methodical thinking.",
          "Skills: Advanced laboratory research, bio-specimen analysis, and data synthesis.",
          "Focus: Perfect for those interested in the 'why' and 'how' behind human health and movement."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Researching life's mechanisms.",
        color: BLUE,
        content: [
          "Laboratory Research: Conducting experiments on human/animal subjects to observe functions.",
          "Stress Analysis: Monitoring how organs respond to stress, nutrition, and environment.",
          "Instruction: Teaching medical and sports science students the fundamental rules of life.",
          "Publishing: Documenting findings in scientific journals to advance global healthcare."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "Education and lab expenses.",
        color: BLUE2,
        content: [
          "Government Colleges: ₹10,000 – ₹40,000/year (AIIMS, Univ of Calcutta).",
          "Private Universities: ₹80,000 – ₹3L/year (Manipal, Amity University).",
          "Duration: 3 years (B.Sc) plus 2 years (M.Sc).",
          "PhD: Recommended for top-tier research roles, often funded by fellowships."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Aid for life scientists.",
        color: BLUE,
        content: [
          "DST-INSPIRE: Support for the top 1% of students clearing Class 12.",
          "UGC PG Merit: Scholarships for rank holders in university bachelors programs.",
          "National Merit: Government support based on academic performance."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Hurdles in the lab.",
        color: BLUE2,
        content: [
          "Academic Length: Top-tier roles usually require a PhD, meaning 8-10 years of study.",
          "Funding: Securing continuous research grants can be a competitive and stressful process.",
          "Complex Subjects: Requires mastering high-level biology and complex bio-mechanical data."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actions for future physiologists.",
        color: BLUE,
        content: [
          "Human Physiology: Master the NCERT 'Human Physiology' units (Class 11/12) very deeply.",
          "Olympiads: Participate in Biological Olympiads to test your conceptual depth.",
          "Exercise Science: Start observing how your own body responds to exercise and nutrition."
        ]
      }
    ]
  }
};
