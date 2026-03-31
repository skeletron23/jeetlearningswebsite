import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const bioScienceUpdateData: Record<string, CareerPageData> = {
  bioinformatics: {
    slug: "bioinformatics",
    badge: "💻 Scientific Innovation for Class 10+",
    heading: "The Digital Architect of Biology — Bioinformatics",
    subheading: "Decoding the language of life through software, algorithms, and genomic data science.",
    whyCards: [
      { icon: "Dna", title: "The Data Translator", description: "Take massive biological data and use computers to find patterns humans can't see.", borderColor: "#10B981" },
      { icon: "Terminal", title: "The Drug Designer", description: "Use computer simulations to predict which medicine will work best instead of wet lab testing.", borderColor: "#059669" },
      { icon: "Database", title: "The Genetic Map Maker", description: "Help doctors understand patient's genetic code for precision medicine treatment.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "AI-Driven Research", description: "Join a $1.15B industry transformed by AI, machine learning, and genomic data science.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹4.5L - ₹7.5L PA", color: "bg-green-100 text-green-700" },
      { label: "Key Skills", detail: "Python, R, SQL, Linux", color: "bg-blue-100 text-blue-700" },
      { label: "Market Growth", detail: "19% CAGR (2026-2030)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$1.15B", label: "Market by 2030", gradient: "from-green-500 to-green-600" },
      { value: "19%", label: "CAGR Growth Rate", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The marriage between Biology and Computer Science.",
        color: BLUE,
        content: [
          "The Digital Detective: Bioinformatics is a multidisciplinary field—a marriage between Biology, Chemistry, Mathematics, and Computer Science.",
          "The Code-Breaker: You solve mysteries hidden inside a single drop of blood or a tiny strand of DNA. Find the code that causes disease or design vaccines that save millions.",
          "India's Tech-Bio Bridge: India is a global leader in IT and Pharmaceuticals. Bioinformatics combines these two strengths. With the Genome India Project, we need Digital Biologists.",
          "Real-World Impact: From AI-driven drug discovery to personalized medicine, from fighting pandemics to understanding genetic diseases."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: BLUE2,
        content: [
          "The Logical Puzzle-Solver: Do you love connecting dots and finding hidden patterns in data?",
          "Patience for Perfection: Biological data is 'messy.' Can you spend hours 'cleaning' data to find one single truth?",
          "The Balanced Brain: Are you equally comfortable with Biology (living things) and Logic (coding)?",
          "Hard Skills: Python, R, Linux, SQL, and a strong grasp of Genomics.",
          "Soft Skills: Collaborative spirit and the ability to explain 'tech' to 'non-tech' people."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "A day in the life of a bioinformatician.",
        color: BLUE,
        content: [
          "The Lab Login (9 AM): Your day begins with a high-performance workstation. Check server logs—last night your NGS pipeline processed data from 500 patients. Ensure algorithms correctly identified mutations.",
          "Collaborative Huddle (11:30 AM): Meet with 'Wet Lab' scientists. They discovered a new protein. Your job is to 'blast' that protein's sequence against a global database to see what it does.",
          "Lunch and Logic (1:30 PM): Brainstorm with colleagues. 'Why did the AI model flag this gene as false positive?' Realize the algorithm needs a better filter for background noise.",
          "Algorithm Optimization (3:30 PM): Write scripts in Python or R. Build a tool to simulate how a virus attaches to human cells. Build a digital battlefield to defeat disease.",
          "Visualizing Success (6 PM): Create 3D visualization of DNA structure. Explain findings to company directors. Log off knowing your code moved us closer to a cure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: BLUE,
        content: [
          "INSPIRE Fellowship: For science merit students with high academic standing.",
          "GAT-B Stipends: ₹12k/month for postgraduate bioinformatics students.",
          "ARM Scholarship: Biotecnika's scholarship for biotech and bioinformatics students.",
          "Biocon Rama Mazumdar Scholarship: For students pursuing biotech and bioinformatics.",
          "ISCB Travel Grants: International Society for Computational Biology travel support."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: BLUE2,
        content: [
          "Constant Re-skilling: You must learn a new coding language or tool every year.",
          "Data Fatigue: Staring at screens and massive spreadsheets can be mentally draining.",
          "Interdisciplinary Stress: You have to speak the 'language' of both a coder and a doctor—which takes years to master.",
          "Infrastructure Needs: Heavy reliance on high-performance computational clusters.",
          "Research Competition: Intense focus required to secure spots in global labs."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: BLUE,
        content: [
          "Master Python: It is the 'lingua franca' of the field. Start a project on Kaggle.",
          "Logic and Math: Focus on Statistics. Bioinformatics is 50% math!",
          "Read Scientific Blogs: Follow GenomeWeb or Nature News to see what's trending.",
          "DIY Experiments: Use online tools like NCBI BLAST to play with real DNA sequences from home.",
          "Build Foundation: Strong foundation in both Biology and Mathematics is critical.",
          "Learn Linux: Familiarize yourself with Linux command line basics."
        ]
      }
    ]
  },
  biochemistry: {
    slug: "biochemistry",
    badge: "🔬 Scientific Innovation for Class 10+",
    heading: "The Molecular Architect — Biochemistry",
    subheading: "Exploring the chemical blueprints of life at the cellular and molecular level.",
    whyCards: [
      { icon: "FlaskConical", title: "The Cell Explorer", description: "Study how molecules like proteins, lipids, and DNA interact to keep us alive.", borderColor: "#10B981" },
      { icon: "Microscope", title: "The Drug Developer", description: "Work in pharmaceutical companies to design new medicines for diseases.", borderColor: "#059669" },
      { icon: "Dna", title: "The Food Scientist", description: "Improve nutritional value and create sustainable alternatives like plant-based meat.", borderColor: "#3B82F6" },
      { icon: "ShieldCheck", title: "The Quality Controller", description: "Ensure every batch of vaccine or medicine is safe and effective.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹3.5L - ₹6L PA", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Curious, Patient, Detail-Oriented", color: "bg-blue-100 text-blue-700" },
      { label: "Key Skills", detail: "Biology, Chemistry, Math, Coding", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "11%", label: "Market CAGR Growth", gradient: "from-green-500 to-green-600" },
      { value: "$34B", label: "Market by 2030", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the chemistry of life itself.",
        color: BLUE,
        content: [
          "The Detective Inside Cells: Biochemistry is the study of chemical processes within and relating to living organisms. It combines the 'What' of Biology with the 'How' of Chemistry.",
          "The Bridge Between Sciences: It connects biology and chemistry to explore how molecules like proteins, lipids, and DNA interact to keep us alive.",
          "India's Pharmacy: India is the 'Pharmacy of the World.' We produce more vaccines and generic medicines than almost any other country. Biochemists are the brains behind this massive industry.",
          "Real-World Impact: Biochemists figure out how food turns into energy, how viruses hijack human bodies, and how plants can cure diseases."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: BLUE2,
        content: [
          "The Curious Soul: Do you always ask 'Why' and 'How' things work? This is essential for research.",
          "The Patient Observer: Experiments often fail. Can you stay calm and try again for the 100th time?",
          "The Detail-Oriented Eye: Can you notice a tiny color change in a liquid or a small spike on a graph?",
          "Analytical Thinking: Are you good at solving puzzles and connecting different pieces of information?",
          "Hard Skills: Strong foundation in Biology and Organic Chemistry, comfort with Mathematics and Computer Simulations."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "A day in the life of a biochemist.",
        color: BLUE,
        content: [
          "The Lab Huddle (9 AM): Your day begins at a high-tech research facility. You start with a team meeting to discuss results of experiments.",
          "Pipettes and Precision (11:30 AM): Using high-precision pipettes to transfer liquids between test tubes. Testing how enzymes react with specific sugars.",
          "Lunch and Data (1:30 PM): Brainstorming with colleagues about why reactions failed and checking pH levels.",
          "The Digital Lab (3:30 PM): Creating 3D models of molecules using advanced software. Simulating how drug molecules 'dock' into viruses.",
          "The Review (6 PM): Documenting every step in a digital lab notebook. In science, if it isn't documented, it didn't happen."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: BLUE,
        content: [
          "INSPIRE Scholarship: ₹80k/year for top board scorers in science.",
          "KVPY (Kishore Vaigyanik Protsahan Yojana): Fellowships specifically for basic sciences students.",
          "Prathibha Scholarship: State-level scholarships for science students (e.g., Kerala).",
          "UGC-NET JRF: Grants for pursuing PhD in top Indian universities.",
          "Corporate Scholarships: Biocon and other biotech companies offer scholarships for biochemistry students."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: BLUE2,
        content: [
          "The Long Wait: Research takes years. You might work on one medicine for a decade before it hits the market.",
          "Academic Rigor: You never stop studying. The 'textbooks' of biochemistry change every year.",
          "Lab Hours: You might have to check an experiment at 2 AM or work on weekends if cells are growing.",
          "Safety Concerns: Regular exposure to hazardous chemicals and biological samples requires strict protocols.",
          "Patience Required: Research results often take months of failed attempts to manifest."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: BLUE,
        content: [
          "Read Popular Science: Follow ScienceDaily or Scientific American to stay updated on breakthroughs.",
          "Coding Basics: Learn Python. In the future, every biochemist will also be a data scientist.",
          "Kitchen Science: Try baking or making curd. Both are complex biochemical reactions!",
          "Visit a Lab: Ask your teacher to take you to a local hospital or college lab to see machines in action.",
          "Focus on Organic Chemistry: Master the Krebs cycle and basic metabolic pathways early on.",
          "Participate in Olympiads: Join National Science Olympiads to build problem-solving speed."
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

