import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const artsAndDesignUpdateData: Record<string, CareerPageData> = {
  accessory_design: {
    slug: "accessory_design",
    badge: "🎨 The Detail Architect for Class 10+",
    heading: "Accessory Design",
    subheading: "Creating the 'magic details' that define how people look and feel—from luxury jewelry to wearable tech.",
    whyCards: [
      { icon: "Briefcase", title: "Billion-Dollar Industry", description: "India's personal accessories market projected to reach $3.01B by 2030, growing at 7.6% annually.", borderColor: "#10B981" },
      { icon: "Layers", title: "Material Mastery", description: "Master leather, metals, textiles, and sustainable 'vegan' materials with 3D printing technology.", borderColor: "#059669" },
      { icon: "TrendingUp", title: "Luxury Growth Hub", description: "Bangalore, Mumbai, Jaipur, and Kanpur are global centers for accessory design and manufacturing.", borderColor: "#3B82F6" },
      { icon: "Fingerprint", title: "Artisan Collaboration", description: "Bridge modern CAD design with ancient craftsmanship—the secret sauce of Indian accessory design.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Des) + 2 Years (M.Des)", color: "bg-green-100 text-green-700" },
      { label: "Software", detail: "Rhino, Matrix, Adobe Illustrator, CAD", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹4.5L–₹60L+ (Entry to Senior)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$3.01B", label: "Market Size by 2030", gradient: "from-green-500 to-green-600" },
      { value: "7.6%", label: "Annual Growth Rate", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The soul of personal style—creating everything people wear or carry.",
        color: BLUE,
        content: [
          "Personal Accessories: Handbags, footwear, belts, and eyewear that complete an outfit.",
          "Luxury & Lifestyle: Fine and costume jewelry, watches, and wearable tech devices.",
          "Space & Leisure: Home décor accents, travel gear, and high-fashion tech cases.",
          "The Designer's Role: Part engineer, part artist, part trend-spotter. You understand how leather bends, how metal shines, and how a shoe supports a foot. You bridge the gap between creative dreams and products people buy in stores.",
          "Industry Scope: In 2026, this is a booming billion-dollar industry where traditional craftsmanship meets high-tech 3D printing and sustainable materials."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: From Sketch to Showcase",
        icon: "Clock",
        description: "Real workflow of an accessory designer.",
        color: BLUE2,
        content: [
          "9:00 AM - The Inspiration Hunt: Start in a sunlit studio in Bangalore or Delhi. Create mood boards with textures of weathered stone, recycled ocean plastic, and retro-futurism vibes for next summer's collection.",
          "11:30 AM - The 3D Workshop: Use CAD software to model futuristic sunglasses frames. Send files to a 3D printer and watch your digital design turn into a physical prototype.",
          "2:00 PM - The Material Maze: Visit leather and textile markets. Touch different materials. Is cork fabric durable enough for a wallet? Does recycled brass feel premium? Negotiate with suppliers for the perfect balance of cost and quality.",
          "4:30 PM - The Artisan Huddle: Visit the sampling unit where master craftsmen (karigars) hand-stitch your prototype. Explain specific folds you want in leather. This collaboration between modern design and ancient skills is the secret sauce.",
          "7:00 PM - The Brand Sync: Video call with marketing team to discuss how to showcase sustainability on Instagram. Leave knowing tomorrow, a version of your idea will be held in someone's hand."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Accessory DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Hard Skills - The Tools: Sketching & Rendering (put ideas on paper/screen quickly), CAD Software (Rhino, Matrix, Adobe Illustrator), Material Knowledge (wood, metal, plastic, leather, gems).",
          "Soft Skills - The Mindset: Detail Obsession (care about exact shade of zipper or weight of earring), Trend Forecasting (eye for what will be cool six months from now), Problem-Solving (make high-heels comfortable or bags lightweight).",
          "The Self-Check: Do you look at people's shoes before their faces? Do you love taking apart old watches or making your own jewelry? If yes, you have the Accessory DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Design Thinking Process",
        icon: "Briefcase",
        description: "From thought to store shelf.",
        color: BLUE2,
        content: [
          "Trend Research: Analyze global fashion cycles and consumer behavior to identify emerging patterns.",
          "Concept & Ideation: Create mood boards and rough sketches to explore design directions.",
          "Technical Design: Create precise digital blueprints (CAD) with exact measurements and specifications.",
          "Prototyping: Make the first 'sample' using 3D printing or hand-crafting techniques.",
          "Quality & Sourcing: Test durability and find the right factories to manufacture the product at scale."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Take any stream (Fine Arts/Commerce/Science). Focus on drawing. Build a basic Art Portfolio.",
          "After Class 12: Apply for B.Des (Accessory Design) or Lifestyle Accessory Design. Entrance exams: NIFT, NID DAT, UCEED, Pearl Academy.",
          "After Graduation: Pursue M.Des or specialized PG Diploma in Jewelry/Footwear. Exams: CEED, NIFT PG.",
          "Top Institutions: NIFT (18 campuses), NID (Ahmedabad/Gandhinagar), FDDI (Footwear), Pearl Academy (Delhi/Mumbai/Jaipur), Symbiosis (Pune), UID (Ahmedabad)."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Assistant Designer): ₹4.5L–₹7L annually.",
          "Mid-Level (Senior Designer): ₹12L–₹20L annually.",
          "Senior/Leadership (Design Head/CDO): ₹35L–₹60L+ annually.",
          "Metro vs. Tier-2: Metros like Mumbai and Bangalore pay ~20% more, but Tier-2 cities like Jaipur (Jewelry) and Agra/Kanpur (Leather) are global manufacturing hubs.",
          "Industry Growth: Personal accessories market projected to reach $3.01B by 2030, growing at 7.6% annually."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "Briefcase",
        description: "Industries, cities, and emerging opportunities.",
        color: BLUE,
        content: [
          "Top Industries: Jewelry (Titan, Tanishq), Footwear (Nike, Bata, Liberty), E-commerce (Myntra, Ajio), Luxury Brands (Sabyasachi, Hidesign).",
          "Top Cities: Bangalore (Tech/Lifestyle), Mumbai (Luxury/Bollywood), Jaipur (Gems), Kanpur (Leather).",
          "New-Age Potential: Huge demand for Wearable Tech Designers (Smartwatches/VR headsets) and Sustainable Material Researchers.",
          "Career Opportunities: Jewelry Designer, Footwear Designer, Visual Merchandiser, AI Design Strategist, Virtual Fashion (NFT/Metaverse) Designer, Bio-Material Innovator, Freelancing (D2C brands, consulting)."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: BLUE2,
        content: [
          "Government (NIFT/NID): ₹1.5L–₹3L per year (Highly competitive).",
          "Private (Pearl/ISDI/UID): ₹4L–₹8L per year.",
          "Duration: 4 years for B.Des; 2 years for M.Des.",
          "Additional Costs: ₹20,000–₹50,000 annually on material kits (leather, metal, tools) and a high-end laptop for design software."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central Govt (NSP): National Scholarship Portal schemes based on merit and income.",
          "Institutional (NIFT): Sarthak financial assistance scheme (up to 100% tuition waiver).",
          "Private: Adobe Design Circle Scholarships and Inlaks Shivdasani Foundation for higher studies abroad.",
          "Professional Bodies: GJEPC (Gem & Jewellery Export Promotion Council) for networking and support."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials that boost your resume.",
        color: BLUE2,
        content: [
          "Council of Architecture (CoA): Not mandatory but some specialized interior accessory designers register.",
          "GJEPC: Gem & Jewellery Export Promotion Council (great for networking in jewelry sector).",
          "Adobe Certified Professional: Illustrator/Photoshop certification adds massive value.",
          "Rhino 3D Certification: Essential for CAD-based design roles.",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the industry.",
        color: BLUE,
        content: [
          "Physical Strain: Long hours hunched over workstations or in dusty factories can lead to back pain and eye strain.",
          "Trend Pressure: You are only as good as your next collection. The pressure to be 'new' is constant and relentless.",
          "Material Waste: The industry faces criticism for environmental impact. Your challenge will be to design 'Green' and sustainable.",
          "Competition: Global competition from established luxury brands and emerging designers worldwide."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in accessory design.",
        color: BLUE2,
        content: [
          "AI-Generated Design: AI tools will help designers generate 1,000 variations of a ring in seconds. The human role shifts to 'Curator' and creative director.",
          "Smart Accessories: Bags that charge your phone, rings that track stress levels, and wearable tech integration.",
          "The 'Circular' Economy: Designing accessories that can be fully recycled or composted—sustainability is no longer optional.",
          "Virtual Fashion: NFT and Metaverse designers creating digital-only accessories for virtual avatars.",
          "Bio-Materials: Lab-grown leather and innovative sustainable materials replacing traditional production."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Start a 'Design Journal': Sketch every interesting watch, bag, or shoe you see. Build a visual library of inspiration.",
          "Doodle in 3D: Learn basic software like Tinkercad (free and fun!). Get comfortable with 3D thinking.",
          "Material Experiment: Try making something out of waste—plastic bottles, old tires, or scrap metal. Understand material properties.",
          "Follow the Masters: Read about designers like Sabyasachi Mukherjee, Farah Khan Ali, Dilip Kapur, Poonam Soni, and Suhani Pittie.",
          "Visit Markets: Spend time in leather markets, jewelry districts, and fashion hubs to understand real-world production."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Accessory Designers",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: BLUE2,
        content: [
          "Sabyasachi Mukherjee: Famous for his 'Calcutta' clutches and royal jewelry that redefined Indian luxury globally.",
          "Farah Khan Ali: Renowned gemologist and jewelry designer known for bold, intricate designs blending tradition and modernity.",
          "Dilip Kapur: Founder of Hidesign; proved Indian leather craftsmanship could compete with the best in Paris.",
          "Poonam Soni: Pioneer who introduced the concept of 'Bespoke Jewelry' to India, revolutionizing personalization.",
          "Suhani Pittie: Known for contemporary metal jewelry blending tribal art with modern chic aesthetics."
        ]
      }
    ]
  },
  animator: {
    slug: "animator",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "Animator",
    subheading: "Designing digital worlds and characters that shape global pop culture.",
    whyCards: [
      { icon: "Gamepad2", title: "Game Design", description: "Build exciting worlds andBackstories that make players feel inside the game.", borderColor: "#10B981" },
      { icon: "Sparkles", title: "Creative Hub", description: "India is becoming a global creative hub for OTT and gaming content.", borderColor: "#059669" },
      { icon: "UserCircle", title: "Character Creation", description: "Make hair, light, and movement look real using industry-standard software.", borderColor: "#3B82F6" },
      { icon: "Globe", title: "Cultural Reach", description: "Shape global pop culture by sharing Indian stories with the world.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years Degree", color: "bg-green-100 text-green-700" },
      { label: "Tools", detail: "Blender, Maya, Unreal Engine", color: "bg-blue-100 text-blue-700" },
      { label: "Sector", detail: "OTT, Gaming, VFX Hub", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "₹250Cr", label: "Creator Lab Budget", gradient: "from-green-500 to-green-600" },
      { value: "High", label: "Global Demand", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Introduction to the world of animation.",
        color: BLUE,
        content: [
          "Role of Animators: Animators design characters and build exciting worlds — from future cities to magical lands — using special software to make hair, light, and movement look real.",
          "Industry: India is becoming a global creative hub. OTT platforms and gaming have increased demand for high-quality digital stories.",
          "Opportunities: Creators can share Indian stories with the world and shape global pop culture using modern animation and visual effects."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Traits and skills needed.",
        color: BLUE2,
        content: [
          "Observation & Creativity: Analyzing natural movements and translating textures—like weight or softness—into digital models.",
          "Soft Skills: Exceptional patience for frame-by-frame work and clear communication with cross-functional teams.",
          "Hard Skills: Mastery of anatomy, lighting, and industry-standard software like Blender, Maya, or Unreal Engine."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day operations.",
        color: BLUE,
        content: [
          "Observation & Creativity: Analyzing natural movements—like how people walk or leaves fall—and translating physical textures into 3D models.",
          "Soft Skills: Exceptional patience for frame-by-frame work and clear communication with directors and coders.",
          "Hard Skills: Mastery of anatomy, lighting, and industry-standard tools like Blender, Maya, or Unreal Engine."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Funding for aspiring animators.",
        color: BLUE,
        content: [
          "Merit-cum-Means (NID/IIT): NID/IIT give ₹30,000–₹50,000 yearly for low-income top students.",
          "Inclusion: Some private institutes give fee discounts for girls.",
          "State: Telangana and Karnataka offer special grants for media students.",
          "Budget: ₹250 crore set aside for content creator labs."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Potential hurdles in the career.",
        color: BLUE2,
        content: [
          "The \"Crunch\": When a movie or game is close to release, you may have to work 12–14-hour days.",
          "Physical Strain: Staring at screens and sitting for long hours can lead to back pain and eye strain.",
          "Software Updates: You must learn new tools every 6 months or your skills will become \"ancient.\""
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Steps for students to begin.",
        color: BLUE,
        content: [
          "Doodle Everywhere: Use a sketchbook to draw people or your pet.",
          "Learn Free Software: Download Blender or Krita and follow YouTube tutorials.",
          "Observe Motion: Watch movies to see how characters move when happy vs. sad.",
          "Tell Stories: Use Stop Motion Studio with clay toys or Lego to create films."
        ]
      }
    ]
  },
  cosmetology: {
    slug: "cosmetology",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "Cosmetology",
    subheading: "Advanced skin care, aesthetic procedures, and scientific beauty innovation.",
    whyCards: [
      { icon: "Zap", title: "Skin Specialist", description: "Treat aging, acne, and pigmentation with lasers and chemical peels.", borderColor: "#10B981" },
      { icon: "Scissors", title: "Hair Expert", description: "Analyze scalp health and lead advanced hair restoration procedures.", borderColor: "#059669" },
      { icon: "Palette", title: "Aesthetic Artist", description: "Master HD makeup and styling for film, media, and bridal.", borderColor: "#3B82F6" },
      { icon: "FlaskConical", title: "Product Innovator", description: "Create 'clean beauty' products backed by science and eco-friendly tech.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Months - 3 Years", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Empathic, Steady Hands", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "High-End Clinical Demand", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "PMKVY", label: "Skill India Support", gradient: "from-green-500 to-green-600" },
      { value: "50%", label: "Fee Waivers Possible", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Skin, hair, and aesthetic expertise.",
        color: BLUE,
        content: [
          "The Skin Specialist: They perform advanced treatments like chemical peels and laser therapy to treat acne, aging, and pigmentation.",
          "The Hair Expert: They analyze scalp health and perform treatments ranging from deep conditioning to advanced hair restoration.",
          "The Aesthetic Artist: They master the art of semi-permanent makeup, bridal styling, and high-definition (HD) makeup.",
          "The Product Innovator: Many cosmetologists work in labs to create \"clean beauty\" products backed by science."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal traits and soft skills.",
        color: BLUE2,
        content: [
          "The Perfectionist: Do you notice the tiniest details in a drawing or an outfit?",
          "The Science Explorer: Are you fascinated by how chemicals react?",
          "The People Person: Can you listen to someone’s insecurities with empathy?",
          "Soft Skills: Active listening, steady hands (vital for procedures!), and creative visualization.",
          "Hard Skills: Knowledge of skin anatomy, chemistry of products, and operating machines."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Workflow in a clinic or salon.",
        color: BLUE,
        content: [
          "Diagnosis: Utilizing advanced imaging technology to analyze skin elasticity or scalp health.",
          "Prescription: Crafting a personalized treatment plan tailored to biological needs.",
          "Procedure: Executing clinical services like chemical peels or laser resurfacing.",
          "Education: Empowering clients with knowledge and home-care protocols."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid for beauty courses.",
        color: BLUE,
        content: [
          "PMKVY (Skill India): Free or low-cost skill training with certificate.",
          "NSP: PM-YASASVI and Post-Matric give up to ₹20,000 yearly.",
          "Institutional: Orane and VLCC offer up to 50% fee waiver.",
          "State: Kerala and West Bengal give stipends up to ₹8,000 monthly."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Tough aspects of the profession.",
        color: BLUE2,
        content: [
          "Physical Demand: You will be on your feet for 8–10 hours a day.",
          "Health Risks: Exposure to chemicals and lasers requires strict safety adherence.",
          "Client Pressure: Managing high expectations and emotional insecurities calmly."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Preparation steps.",
        color: BLUE,
        content: [
          "Biology & Chemistry: Focus on \"Skin\" and \"Chemical Reactions\" chapters.",
          "Color Theory: Take up art or painting to understand skin tones.",
          "Digital Savvy: Learn basic video editing.",
          "Communication: Practice \"Active Listening\" to understand client needs."
        ]
      }
    ]
  },
  creative_writer: {
    slug: "creative_writer",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "Creative Writer",
    subheading: "Crafting narratives across novels, scripts, and digital brand identities.",
    whyCards: [
      { icon: "Book", title: "The Storyteller", description: "Create complex characters and immersive worlds for novels and stories.", borderColor: "#10B981" },
      { icon: "Tv", title: "Script Specialist", description: "Write dialogue and action for films, TV, and viral YouTube content.", borderColor: "#059669" },
      { icon: "TowerControl", title: "Brand Voice", description: "Help companies connect with customers through compelling brand storytelling.", borderColor: "#3B82F6" },
      { icon: "Sword", title: "Experience Design", description: "Design quests and backstories for gaming to immerse players deeply.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Years Degree", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Observant, Disciplined", color: "bg-blue-100 text-blue-700" },
      { label: "Key Tool", detail: "SEO, Blogs, Newsletters", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "100%", label: "Potential Scholarships", gradient: "from-green-500 to-green-600" },
      { value: "Global", label: "Grant Opportunities", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The scope of professional writing.",
        color: BLUE,
        content: [
          "The Storyteller: They create characters, plots, and settings for novels, short stories, or poems.",
          "The Script Specialist: They write the dialogue and \"action lines\" for films, TV shows, and YouTube videos.",
          "The Experience Designer: In gaming, they write the quests and backstories that make players feel inside the game.",
          "The Brand Voice: They use storytelling to help companies connect with people powerfully."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal writer traits.",
        color: BLUE2,
        content: [
          "Observation & Empathy: A \"people-watcher\" who understands nuanced human behaviour.",
          "Analytical Reading: Deconstructing metaphors and narrative techniques while reading.",
          "Core Soft Skills: High discipline to write daily and handle frequent rejections.",
          "Technical Hard Skills: Mastery of grammar and frameworks like the \"Hero’s Journey.\""
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "The writing workflow.",
        color: BLUE,
        content: [
          "Ideation: Catching a tiny spark of an idea (The \"What If?\").",
          "Research: Gathering facts to make the world feel real.",
          "Outlining: Mapping out the beginning, middle, and end.",
          "Drafting: The \"messy\" stage of getting words onto the page.",
          "Editing: Polishing and rewriting until the story shines."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Grants for writers.",
        color: BLUE,
        content: [
          "Central Aid: NSP gives post-matric help to low-income families.",
          "Merit: Ashoka and Symbiosis can cover up to 100% fees for top writers.",
          "Global: Inlaks and Charles Wallace give grants for studying abroad."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Reality check for writers.",
        color: BLUE2,
        content: [
          "Financial Volatility: Freelancers face unpredictable monthly income cycles.",
          "Mental Strain: Persistent \"writer’s block\" and strict creative deadlines.",
          "Social Isolation: Long periods of solitary work required."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Early steps for students.",
        color: BLUE,
        content: [
          "Start a Blog/Newsletter: Use platforms like Substack or Medium.",
          "Join Competitions: Participate in National Youth Poetry Slams.",
          "Learn Basic SEO: Understanding Google is a superpower for modern writers.",
          "Listen to Podcasts: Follow 'The Screenwriting Life' or 'The Creative Penn'."
        ]
      }
    ]
  },
  fashion_designing: {
    slug: "fashion_designing",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "Fashion Design",
    subheading: "Blending trends, material science, and storytelling into wearable art.",
    whyCards: [
      { icon: "Eye", title: "Trend Forecaster", description: "Predict colors and styles that will rule the market two years ahead.", borderColor: "#10B981" },
      { icon: "PenTool", title: "Technical Architect", description: "Master the conversion of 2D cloth into perfectly fitting 3D garments.", borderColor: "#059669" },
      { icon: "Leaf", title: "Material Scientist", description: "Experiment with eco-fabrics like mushroom leather and recycled ocean plastic.", borderColor: "#3B82F6" },
      { icon: "Speech", title: "Storyteller", description: "Give every collection a unique theme, mood, and powerful message.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Des)", color: "bg-green-100 text-green-700" },
      { label: "Fees", detail: "₹10L - ₹28L Total", color: "bg-blue-100 text-blue-700" },
      { label: "Scheme", detail: "NIFT Sarthak (100% Waiver)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "100%", label: "NIFT Fee Help", gradient: "from-green-500 to-green-600" },
      { value: "$25k", label: "Adobe Grant", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Forecasting and crafting the future of apparel.",
        color: BLUE,
        content: [
          "The Trend Forecaster: They predict colors and styles two years in advance.",
          "The Technical Architect: Converting 2D cloth into perfect 3D garments.",
          "The Material Scientist: Experimenting with recycled and sustainable fabrics.",
          "The Storyteller: Infusing collections with themes, moods, and messages."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal designer traits.",
        color: BLUE2,
        content: [
          "Visual Imagination: Seeing a finished garment by looking at raw rolls of fabric.",
          "Detail Obsession: A critical eye for crooked stitches or wrong shades.",
          "Resilience: Handling rejection and restarting quickly.",
          "Soft Skills: Empathy to understand customer desires deeply.",
          "Hard Skills: Pattern Making, Illustration, and CAD."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Design and production cycle.",
        color: BLUE,
        content: [
          "Market Research: Identifying trends and consumer needs.",
          "Concept Ideation: Creating themes and sketches.",
          "Prototyping: Creating the first \"sample\" garment.",
          "Sourcing: Finding the right fabrics and artisans.",
          "Quality Control: Perfection before the product hits stores."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Funding for designers.",
        color: BLUE,
        content: [
          "NIFT Sarthak Scheme: 100% fee help for low-income families.",
          "Merit: Pearl and Lakhotia give 25–50% scholarships.",
          "Adobe: Up to $25,000 yearly for design students.",
          "Fashion: Hansa Agarwal support up to ₹50,000."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The grind behind the glitter.",
        color: BLUE2,
        content: [
          "The Grind: Long hours during Fashion Weeks and production.",
          "The \"Glitter\" Myth: 90% technical work—measuring, stitching, and Excel.",
          "Trend Pressure: Constant pressure to stay relevant in a fast market."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Action for aspirants.",
        color: BLUE,
        content: [
          "Doodle with Purpose: Sketch people at bus stops and malls.",
          "Learn Basic Stitching: Shadow local tailors on machine work.",
          "Digital Skills: Familiarize with Canva and Adobe Spark.",
          "Follow the Masters: Read about Anita Dongre and Rahul Mishra."
        ]
      }
    ]
  },
  fine_arts: {
    slug: "fine_arts",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "Fine Arts",
    subheading: "Telling cultural stories and preserving history through visual art and sculpture.",
    whyCards: [
      { icon: "Paintbrush", title: "Storytelling", description: "Use colors and textures to tell powerful stories on canvas and digital screens.", borderColor: "#10B981" },
      { icon: "History", title: "Cultural Guardian", description: "Restore old paintings and create works reflecting modern Indian identity.", borderColor: "#059669" },
      { icon: "Layout", title: "Visual Architect", description: "Design the 'look and feel' of movies, video games, and public spaces.", borderColor: "#3B82F6" },
      { icon: "Lightbulb", title: "Problem Solver", description: "Solve complex problems by thinking 'outside the box' via artistic vision.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (BFA)", color: "bg-green-100 text-green-700" },
      { label: "Government", detail: "₹10k - ₹25k / year", color: "bg-blue-100 text-blue-700" },
      { label: "Award", detail: "Lalit Kala Akademi Scholarships", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "₹20k/mo", label: "Lalit Kala Stipend", gradient: "from-green-500 to-green-600" },
      { value: "4+2Y", label: "Professional Path", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Visual stories and cultural preservation.",
        color: BLUE,
        content: [
          "The Storyteller: They use colours and textures to tell stories on many mediums.",
          "The Cultural Guardian: Restoring history and creating modern Indian reflections.",
          "The Visual Architect: Designing the aesthetics of films and games.",
          "The Problem Solver: Thinking outside the box to solve complex visual issues."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Necessary artistic foundations.",
        color: BLUE2,
        content: [
          "Artistic Observation: Capturing details from natural lighting to expressions.",
          "Resilience: Maintaining persistence in a competitive field.",
          "Interpersonal Mastery: Using empathy and clear articulation of concepts.",
          "Technical Foundation: Drawing fundamentals and agility in Photoshop/Blender."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "The artist's workflow.",
        color: BLUE,
        content: [
          "Ideation: Researching themes and sketching dozens of ideas.",
          "Preparation: Choosing mediums like oil, digital, or stone.",
          "Creation: Focused execution over many hours.",
          "Critique: Reviewing work with a hard eye for changes.",
          "Exhibition: Preparing work for galleries or digital delivery."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Stipends for artists.",
        color: BLUE,
        content: [
          "Lalit Kala Akademi: ₹20,000/month for young artists.",
          "Ministry of Culture: ₹5,000/month for 2 years.",
          "Institutional: 'Merit-cum-Means' waivers available for talent."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The hustle of an artist.",
        color: BLUE2,
        content: [
          "The \"Hustle\": Managing sales, accounts, and your own brand.",
          "Income Flux: Unpredictable monthly sales cycles for independents.",
          "Emotional Labour: Putting a piece of yourself into every work."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Early artistic habits.",
        color: BLUE,
        content: [
          "Sketchbook Habit: Draw daily to improve creativity.",
          "Software: Learn Krita and Blender for digital mastery.",
          "Museums: Study colors and styles in local galleries.",
          "Competitions: Build confidence through art contests."
        ]
      }
    ]
  },
  graphical_designing: {
    slug: "graphical_designing",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "Graphic Designing",
    subheading: "Crafting digital experiences and brand identities through visual communication.",
    whyCards: [
      { icon: "PenTool", title: "Brand Architect", description: "Create iconic brand identities like the blue of Tata or the red of Zomato.", borderColor: "#10B981" },
      { icon: "Cursor", title: "Experience Maker", description: "Design UI/UX for apps and websites to make them easy and intuitive.", borderColor: "#059669" },
      { icon: "Share2", title: "Media Strategist", description: "Create viral carousels and graphics that tell stories in seconds.", borderColor: "#3B82F6" },
      { icon: "Package", title: "Print Master", description: "Design everything physical, from snack packaging to library book covers.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Des)", color: "bg-green-100 text-green-700" },
      { label: "Tools", detail: "Adobe CC, Figma, Canva", color: "bg-blue-100 text-blue-700" },
      { label: "Scheme", detail: "NIFT/NID (100% Waiver)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "100%", label: "Potential Fee Waiver", gradient: "from-green-500 to-green-600" },
      { value: "₹1.2L", label: "Laptop/Tech Kit", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Branding and digital storytelling.",
        color: BLUE,
        content: [
          "The Brand Architect: Creating logos and recognizable digital identities.",
          "The Digital Experience Maker: Designing UI/UX to ensure ease of app/web use.",
          "The Social Media Strategist: Designing viral visual content and stories.",
          "The Print Master: Designing physical packaging and book covers."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Optimal skills for designers.",
        color: BLUE2,
        content: [
          "The Curious Observer: Noticing fonts and layouts on every sign.",
          "Problem-Solver: Simplifying messy ideas into clear visuals.",
          "Empathy: Seeing the world through the user's eyes.",
          "Professional Mastery: Using Adobe CC, Figma, and Canva.",
          "Design Theory: Command of balance, color, and hierarchy."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "The design pipeline.",
        color: BLUE,
        content: [
          "The Brief: Understanding the client's goal deeply.",
          "Research: Finding the \"gap\" in competitor offerings.",
          "Ideation: Making dozens of rough paper thumbnails.",
          "Digital Drafting: Developing the best 2-3 concepts.",
          "Refinement: Polishing based on professional feedback.",
          "Delivery: Sending files for final print or digital usage."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Fee waivers for designers.",
        color: BLUE,
        content: [
          "Merit-cum-Means: Up to 100% waiver at NIFT/NID for needy students.",
          "PM-USP: ₹12,000–₹20,000 yearly for top professional students.",
          "Private: Pearl offers 25–50% entrance-based scholarships."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Design reality checks.",
        color: BLUE2,
        content: [
          "Subjective Feedback: Handling critiques of your creative vision.",
          "Tight Deadlines: High-stress environments near campaign launches.",
          "Tech Overload: Staying a 'Permanent Student' of software updates."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Steps for students.",
        color: BLUE,
        content: [
          "Doodle with Purpose: Sketch everyday objects from multiple angles.",
          "Master Canva: Entry point for layout and color understanding.",
          "Photography: Learn lighting and composition fundamentals.",
          "Follow the Masters: Join Behance to follow top Indian designers."
        ]
      }
    ]
  },
  interior_designing: {
    slug: "interior_designing",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "Interior Designing",
    subheading: "Mastering spatial intuition and technical planning to transform environments.",
    whyCards: [
      { icon: "Layout", title: "Problem Solver", description: "Maximize space and make tiny apartments feel like palaces.", borderColor: "#10B981" },
      { icon: "DraftingCompass", title: "Technical Planner", description: "Design blueprints for electrical, plumbing, and lighting integration.", borderColor: "#059669" },
      { icon: "Box", title: "Material Expert", description: "Expert knowledge of wood, paint, and sustainable monsoon-proof materials.", borderColor: "#3B82F6" },
      { icon: "Palette", title: "Mood Creator", description: "Apply color psychology to make hospitals peaceful or offices energetic.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years Degree", color: "bg-green-100 text-green-700" },
      { label: "Tools", detail: "AutoCAD, 3ds Max, VR", color: "bg-blue-100 text-blue-700" },
      { label: "Salary", detail: "Strong Market Demand", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "100%", label: "Scholarships Available", gradient: "from-green-500 to-green-600" },
      { value: "₹1.2L", label: "Pro Laptop Cost", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Space, technicality, and mood.",
        color: BLUE,
        content: [
          "The Problem Solver: Making tiny spaces feel expansive.",
          "The Technical Planner: Creating blueprints for electrical and plumbing.",
          "The Material Expert: Choosing the right wood and child-safe paints.",
          "The Mood Creator: Using color psychology for emotional impact."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Optimal designer traits.",
        color: BLUE2,
        content: [
          "Spatial Intuition: Ability to mentally rearrange room layouts.",
          "Aesthetic Detail: Focus on textures and lighting temperatures.",
          "Interpersonal Agility: Negotiation skills and client empathy.",
          "Technical Mastery: 3D visualization and CAD proficiency."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "From vibe to handover.",
        color: BLUE,
        content: [
          "Programming: Understanding budget and client 'vibe'.",
          "Schematic Design: Creating sketches and mood boards.",
          "Design Development: Building 3D models and furniture picking.",
          "Contract Admin: Supervising contractors and site work.",
          "Styling & Handover: Final touches with plants and rugs."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Fee waivers for interior designers.",
        color: BLUE,
        content: [
          "NSP: Merit-cum-Means help for low-income families.",
          "Sarthak: NIFT/NID waivers up to 100%.",
          "WUDAT: WUD offers entrance-based scholarships."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The gritty side of design.",
        color: BLUE2,
        content: [
          "Site Heat & Dust: Spent hours at construction sites.",
          "Contractor Management: Dealing with plumbers and carpenters.",
          "Client Whims: Last-minute changes after purchases."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Early steps.",
        color: BLUE,
        content: [
          "Sketchbook Habit: Sketch one room every weekend.",
          "Learn Basic 3D: Use tools like HomeByMe or Tinkercad.",
          "Explore Materials: Visit hardware stores to study wood/glass.",
          "Observe Patterns: Follow designers like Shabnam Gupta."
        ]
      }
    ]
  },
  interpreter_and_translator: {
    slug: "interpreter_and_translator",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "Interpreter and Translator",
    subheading: "Building linguistic and cultural bridges in a globalized business world.",
    whyCards: [
      { icon: "PenTool", title: "Written Mastery", description: "Convert books, apps, and legal docs while keeping the original 'feeling'.", borderColor: "#10B981" },
      { icon: "Mic2", title: "Speech Precision", description: "Translate speech in real-time (simultaneous) or during pauses (consecutive).", borderColor: "#059669" },
      { icon: "Building2", title: "MNC Opportunities", description: "Support global giants like Google and Amazon in local markets.", borderColor: "#3B82F6" },
      { icon: "Globe2", title: "Cultural Expert", description: "Act as a cultural bridge to ensure cross-border meaning is preserved.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Years (Bachelor)", color: "bg-green-100 text-green-700" },
      { label: "Sector", detail: "MNCs, Law, Med, Gaming", color: "bg-blue-100 text-blue-700" },
      { label: "Pay", detail: "High Demand Experts", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "MNCs", label: "Top Tech Employers", gradient: "from-green-500 to-green-600" },
      { value: "100%", label: "Cultural Bridge", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Written and spoken translation.",
        color: BLUE,
        content: [
          "Translators: Working with written words to preserve tone and meaning.",
          "Interpreters: Real-time spoken translation (simultaneous or consecutive).",
          "Global Demand: High demand from MNCs and software exporters.",
          "Strategic Role: Essential for global business and entertainment export."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal language expert traits.",
        color: BLUE2,
        content: [
          "The 'Language Sponge': Picking up accents and slang naturally.",
          "Cultural Curiosity & Empathy: Understanding emotion behind words.",
          "Listen-First Attitude: World-class listening skills.",
          "Speed of Thought: Quick thinking under pressure.",
          "Subject Expertise: Knowing Jargon of Law, Medicine, or Gaming."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "The bridge process.",
        color: BLUE,
        content: [
          "Preparation: Studying specific jargon for the topic.",
          "Decoding: Deeply understanding the source meaning.",
          "Transcoding: Finding the perfect 'bridge' words.",
          "Review: Ensuring flow and accuracy in written work.",
          "Delivery: Providing final text or real-time speech."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Funding for linguists.",
        color: BLUE,
        content: [
          "ICCR Scholarships: Fully funded for Indian languages/arts.",
          "Global: DAAD, Erasmus+, and MEXT for study abroad.",
          "NSP: ₹12,000–₹20,000 yearly under Merit-cum-Means."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Mental hurdles.",
        color: BLUE2,
        content: [
          "Mental Fatigue: Interpreting is like a 'brain marathon'.",
          "The 'Invisible' Role: Performance only noticed if you fail.",
          "Deadlines: Overnight urgent written translation requests."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Language building steps.",
        color: BLUE,
        content: [
          "Read Widely: Read in mother tongue and second language.",
          "Watch with Subs: Analyze subtitle accuracy in movies.",
          "Free Apps: Use Duolingo or Memrise.",
          "Volunteer: Translate Wikipedia articles or YouTube subs."
        ]
      }
    ]
  },
  liberal_arts: {
    slug: "liberal_arts",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "Liberal Arts",
    subheading: "Analyzing global problems through multiple lenses to serve humanity.",
    whyCards: [
      { icon: "Brain", title: "Strategic Thinker", description: "Analyze global problems like climate change through economic and social lenses.", borderColor: "#10B981" },
      { icon: "MessageSquare", title: "The Communicator", description: "Turn complex data into stories that people can understand and act upon.", borderColor: "#059669" },
      { icon: "Shield", title: "The Ethical Guide", description: "Ask the 'Should we?' questions to ensure innovation serves humanity.", borderColor: "#3B82F6" },
      { icon: "Search", title: "Research Proficiency", description: "Gather and synthesize information from wildly different sources and data.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years (NEP)", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Questioner, Voracious Reader", color: "bg-blue-100 text-blue-700" },
      { label: "Financials", detail: "Up to 100% Scholarships", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "100%", label: "Need-Based Aid", gradient: "from-green-500 to-green-600" },
      { value: "4Y", label: "Honours Degree", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Multidisciplinary analytical focus.",
        color: BLUE,
        content: [
          "The Strategic Thinker: Analyzing complex global problems—from climate change to urban poverty—through multiple lenses (economic, social, and scientific).",
          "The Communicator: Taking complex data or difficult ideas and turning them into stories or strategies that people can understand.",
          "The Ethical Guide: In a world of fast technology, they ensure that innovation serves humanity by asking 'Should we?' questions."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Ideal traits for the questioning mind.",
        color: BLUE2,
        content: [
          "The Questioner: Do you often ask \"Why?\" and \"What if?\"",
          "The Voracious Reader: Do you enjoy reading about many different things?",
          "Critical Thinking: The ability to look at an argument deeply.",
          "Adaptability: Being comfortable when the \"rules\" of a project change suddenly.",
          "Core Skills: Empathy, Research Proficiency, and Quantitative Reasoning."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Exploration to synthesis.",
        color: BLUE,
        content: [
          "Exploration: Gathering information from different sources (books, data, interviews).",
          "Analysis: Looking for the \"Connective Tissue\" between sources.",
          "Synthesis: Creating a new idea or solution that combines these views.",
          "Communication: Presenting the solution clearly and persuasively."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Aid for liberal arts students.",
        color: BLUE,
        content: [
          "Need-Based (Ashoka/Krea): Can cover up to 100% fees and hostel.",
          "NSP: Central support for eligible students.",
          "Azim Premji Foundation: Support for students in the social sector."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Generalist hurdles.",
        color: BLUE2,
        content: [
          "The \"Generalist\" Trap: Early on, you might feel like a 'Jack of all trades'. You must build a specific 'Hard Skill'.",
          "High Fees: Top private colleges can be as expensive as international ones.",
          "Explaining the Degree: You will often have to explain the value to relatives and some recruiters."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Action for students.",
        color: BLUE,
        content: [
          "Read \"The Big Picture\": Read books like Sapiens or The Argumentative Indian.",
          "Learn Basic Statistics: Data literacy is essential.",
          "Practice Writing: Start a blog or Substack to write clearly.",
          "Debate: Join the school team to learn point-counterpoint arguing."
        ]
      }
    ]
  },
  performing_arts: {
    slug: "performing_arts",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "Performing Arts",
    subheading: "Transcending barriers through storytelling, rhythm, and artistic execution.",
    whyCards: [
      { icon: "UserCircle", title: "Emotional Conduit", description: "Utilize vocal modulation and physical expression to manifest complex characters.", borderColor: "#10B981" },
      { icon: "Music", title: "Cultural Narrator", description: "Transcend language barriers using sonic textures and rhythmic movement.", borderColor: "#059669" },
      { icon: "Film", title: "The Showrunner", description: "Directors and choreographers serve as the vital creative and technical backbone.", borderColor: "#3B82F6" },
      { icon: "Users", title: "Collaborative Art", description: "Performing arts is almost always a team sport requiring high interpersonal skills.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Years Degree", color: "bg-green-100 text-green-700" },
      { label: "Institutes", detail: "NSD, KM Music, Whistling Woods", color: "bg-blue-100 text-blue-700" },
      { label: "Scholarship", detail: "SYA & CCRT Schemes", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "₹9,500/mo", label: "NSD Stipend", gradient: "from-green-500 to-green-600" },
      { value: "NSD", label: "Top Govt Hub", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Manifesting characters and cultural narratives.",
        color: BLUE,
        content: [
          "The Storyteller: Actors utilize specialized vocal modulation and physical expression to manifest characters.",
          "The Rhythm Maker: Dancers and musicians employ movement and sonic textures to articulate emotions.",
          "The Showrunner: Directors and music producers meticulously orchestrate technical and artistic elements.",
          "Impact: Ensuring a flawless performance that transcends language barriers."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Resilience and EQ for the stage.",
        color: BLUE2,
        content: [
          "The \"People\" Person: Thriving in collaborative, group-based artistic settings.",
          "Resilience (The Steel Spine): Ability to handle negative results from multiple auditions.",
          "Emotional Intelligence: Portraying human feelings accurately and with nuance.",
          "Technical Mastery: Command of your 'raags' or 'mudras' through years of practice."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "The path to a live 'Take'.",
        color: BLUE,
        content: [
          "Preparation: Continuous training to keep voice and body in peak condition.",
          "Pre-Production: Reading scripts and learning choreography.",
          "The \"Blocking\" Phase: Determining physical positioning on stage.",
          "The \"Dress\" Rehearsal: Full costumes, lights, and sound integration.",
          "Execution: The final live performance or film 'take'."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Cultural talent search aids.",
        color: BLUE,
        content: [
          "CCRT Search: ₹3,600 yearly plus ₹9,000 tuition help for children.",
          "SYA: ₹5,000 monthly for two years for young artists.",
          "NSD: ₹8,000–₹9,500 monthly stipend for top students."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The public eye and precarious income.",
        color: BLUE2,
        content: [
          "Income Insecurity: High volatility between jobs requires solid financial planning.",
          "Physical Toll: Vulnerability to injuries, vocal strain, and long hours on stage.",
          "The \"Public Eye\": Handling social media trolling and critique needs thick skin."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Action for young performers.",
        color: BLUE,
        content: [
          "Multi-Disciplinary Engagement: Join school productions for technical and artistic experience.",
          "Digital Adaptation: Launch a YouTube channel to master camera presence.",
          "Theoretical Mastery: Study musical notation and performance theory.",
          "Diverse Observation: Analyze Broadway musicals to local street plays."
        ]
      }
    ]
  },
  photography: {
    slug: "photography",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "Photography",
    subheading: "Architecting visuals through light, composition, and digital mastery.",
    whyCards: [
      { icon: "Aperture", title: "Visual Architect", description: "Make photos by controlling light, shadows, and complex composition.", borderColor: "#10B981" },
      { icon: "Wand2", title: "Post-Production Wizard", description: "Use AI and software to enhance, color-correct, and perfect the raw image.", borderColor: "#059669" },
      { icon: "Maximize", title: "Subject Expert", description: "Understand your subject deeply to capture its true essence and personality.", borderColor: "#3B82F6" },
      { icon: "Briefcase", title: "Business Savvy", description: "66% of photographers are self-employed; market your personal brand correctly.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Years / Diploma", color: "bg-green-100 text-green-700" },
      { label: "Entry Kit", detail: "₹1.5L - ₹3.5L", color: "bg-blue-100 text-blue-700" },
      { label: "Personality", detail: "Observant, Patient", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "66%", label: "Self-Employed", gradient: "from-green-500 to-green-600" },
      { value: "3Y", label: "Tech Upgrade Cycle", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Architecting light and shadow.",
        color: BLUE,
        content: [
          "The Visual Architect: Controlling light and composition to 'make' an image.",
          "The Post-Production Wizard: Using AI and editing software to enhance raw shots.",
          "The Subject Expert: Deeply understanding subjects to capture their essence.",
          "Scope: From weddings and jewelry to wildlife and high fashion."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Necessary traits for photographers.",
        color: BLUE2,
        content: [
          "The Observer: Noticing lighting shifts and detail others miss.",
          "Patience: Waiting for 'the moment' in wildlife or portrait work.",
          "Interpersonal Skills: Making nervous clients feel like superstars.",
          "Business Mindset: Marketing yourself is vital in a freelance market.",
          "Technical Mastery: Proficiency in Photoshop, Lightroom, and AI tools."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Pre-shoot to delivery.",
        color: BLUE,
        content: [
          "Pre-Shoot: Briefing, location scouting, and mood-boarding.",
          "The Shoot: Setting lights, directing subjects, and capturing.",
          "Culling: Using AI tools to pick the top 5% of shots.",
          "Editing: Color grading and retouching the selected set.",
          "Delivery: Providing high-res digital or physical prints."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Funding for photographers.",
        color: BLUE,
        content: [
          "Nikon Scholarship: Up to ₹1,00,000 for Class 12 students.",
          "LKA Grant: ₹20,000 monthly for one year to young artists.",
          "IIP: Merit-cum-means scholarships up to ₹1,00,000."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Gear toll and income flux.",
        color: BLUE2,
        content: [
          "Physical Toll: Carrying heavy gear for 12-hour wedding shifts.",
          "Expensive Upgrades: Technology shifts force reinvestment every 3 years.",
          "Unpredictable Income: Freelance cycles follow seasonality (e.g., weddings)."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Early visual learning.",
        color: BLUE,
        content: [
          "Doodle with Light: Use your phone to try light painting.",
          "Master the 'Gram: Follow legends like Raghu Rai.",
          "Learn Editing: Use Adobe Lightroom Mobile to play with sliders.",
          "Volunteer: Shoot school events to build a portfolio."
        ]
      }
    ]
  },
  product_designing: {
    slug: "product_designing",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "Product Designing",
    subheading: "Solving human problems through ergonomics, material science, and manufacturing tech.",
    whyCards: [
      { icon: "Lightbulb", title: "Problem Solver", description: "Identify real-world issues and build tangible, physical solutions.", borderColor: "#10B981" },
      { icon: "User", title: "Human Expert", description: "Study Ergonomics to ensure products fit the human body perfectly.", borderColor: "#059669" },
      { icon: "Box", title: "Material Scientist", description: "Choose between recycled ocean plastic, lightweight aluminum, or bamboo.", borderColor: "#3B82F6" },
      { icon: "Settings", title: "Tech-Translator", description: "Bridge the gap between artistic ideas and industrial factory manufacturing.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Des)", color: "bg-green-100 text-green-700" },
      { label: "Laptop", detail: "₹1L+ High-Spec", color: "bg-blue-100 text-blue-700" },
      { label: "Outcome", detail: "1-2 Year Project Cycles", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "₹2.5L", label: "L’Oréal Max Grant", gradient: "from-green-500 to-green-600" },
      { value: "IIT", label: "Top Govt Path", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Bridging the gap between art and engineering.",
        color: BLUE,
        content: [
          "The Problem Solver: Finding real problems and building solutions.",
          "The Human Expert: Studying Ergonomics for bodily fit.",
          "The Material Scientist: Deciding on sustainable or industrial material use.",
          "The Tech-Translator: Ensuring ideas can be manufactured at scale."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Optimal traits for tinkerers.",
        color: BLUE2,
        content: [
          "The \"Tinkerer\": Enjoying taking things apart to see how they work.",
          "Empathy: Feeling user frustration with bad product design.",
          "Collaboration: Bridging 'Artist' and 'Nerd' roles.",
          "Hard Skills: Sketching, 3D CAD modeling, and rapid Prototyping."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Empathize to manufacture.",
        color: BLUE,
        content: [
          "Empathize: Talk to users about their hates and loves.",
          "Define: State the problem clearly.",
          "Ideate: Brainstorm dozens of solutions.",
          "Prototype: Build physical versions in foam, clay, or 3D print.",
          "Test: Give it to real people and fix identified breaks.",
          "Manufacture: Prepare blueprints for factory production."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Funding for product designers.",
        color: BLUE,
        content: [
          "PM-USP Scheme: ₹12,000–₹20,000 yearly for top students.",
          "Institutional: NID Sarthak and IIT fee waivers for talent.",
          "Corporate: Adobe and L’Oréal fund creative design students."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Workshop strain and slow rewards.",
        color: BLUE2,
        content: [
          "Idea vs. Reality: Redesigning for feasibility when factories say 'impossible'.",
          "Physical Toll: Long hours in workshops with dust and machinery.",
          "Slow Rewards: Physical products take 1-2 years to reach store shelves."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Early design habits.",
        color: BLUE,
        content: [
          "Sketch Everything: Show the 'inside' of everyday products.",
          "Learn Tinkercad: Start with free, fun 3D modeling.",
          "Read Materials: Learn about bamboo vs plastic and sustainability.",
          "Enter Contests: Look for Google Science Fair or India Design Mark."
        ]
      }
    ]
  },
  website_designer: {
    slug: "website_designer",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "Website Designer",
    subheading: "Bridging code and art to create functional, story-driven digital experiences.",
    whyCards: [
      { icon: "UserCheck", title: "User Advocate", description: "Design for ease, ensuring 'Buy' buttons are found in under two seconds.", borderColor: "#10B981" },
      { icon: "PenTool", title: "Brand Storyteller", description: "Use typography and color to tell a brand's unique story powerfuly.", borderColor: "#059669" },
      { icon: "Code", title: "The Tech Hybrid", description: "Bridge the gap between pure art and coding for functional beauty.", borderColor: "#3B82F6" },
      { icon: "Monitor", title: "Prototyping Focus", description: "Create high-fidelity interactive versions to test with real users.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years", color: "bg-green-100 text-green-700" },
      { label: "Tools", detail: "Figma, Adobe XD, HTML/CSS", color: "bg-blue-100 text-blue-700" },
      { label: "Industry", detail: "High-Growth Tech Labs", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "NID", label: "Premier Govt Path", gradient: "from-green-500 to-green-600" },
      { value: "6mo", label: "Tech Learning Cycle", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Functional digital beauty.",
        color: BLUE,
        content: [
          "The User Advocate: Designing for ease and speed of goal completion.",
          "The Brand Storyteller: Using typography and fonts to convey brand values.",
          "The Tech Hybrid: Understanding how things work to design how they look.",
          "Cross-Disciplinary: Bridging art and pure coding for the best UX."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Optimal traits for web masters.",
        color: BLUE2,
        content: [
          "The \"Curious Fixer\": Annoyed by apps that are hard to use.",
          "Visual Sensitivity: Noticing off-center logos or clashing colors.",
          "Communication & Empathy: Understanding user and client needs.",
          "Hard Skills: Figma, Adobe XD, and web basics (HTML/CSS).",
          "UI/UX Principles: Knowledge of grids, typography, and color theory."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Discovery to handover.",
        color: BLUE,
        content: [
          "Discovery: Researching audience and client goals.",
          "Architecture: Mapping sitemaps for navigation.",
          "Wireframing: Creating low-fidelity skeletal layouts.",
          "Prototyping: Adding colors and high-fidelity interaction.",
          "Testing: Validating the prototype with real users.",
          "Handover: Providing assets and style guides to developers."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Aid for tech designers.",
        color: BLUE,
        content: [
          "NID Sarthak: Significant waivers for needy talent.",
          "Adobe: Monetary support and mentorship for young designers.",
          "Google: Fee waivers for UX professional courses."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Tech obsolescence risks.",
        color: BLUE2,
        content: [
          "Subjectivity: Clients ignoring scientific design principles.",
          "Tech Obsolescence: Skills become outdated without learning every 6 months.",
          "Support Role: Fighting for the user when design is ignored for speed."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Early web habits.",
        color: BLUE,
        content: [
          "Doodle with Layouts: Redesign your favorite apps in sketches.",
          "Learn Figma: Copy your favorite site to learn their secrets.",
          "Read \"Don't Make Me Think\": The UX bible by Steve Krug.",
          "Master HTML/CSS: Knowing code makes you a 10x better designer."
        ]
      }
    ]
  },
  youtuber: {
    slug: "youtuber",
    badge: "🎨 Creative Exploration for Class 10+",
    heading: "The Digital Stage — YouTuber",
    subheading: "Commanding attention and building communities on the world’s digital stage.",
    whyCards: [
      { icon: "Tv", title: "Creative Director", description: "Brainstorm ideas that grab attention in a sea of millions of videos.", borderColor: "#10B981" },
      { icon: "Video", title: "Technical Crew", description: "Act as your own cameraman, lighting expert, and sound engineer.", borderColor: "#059669" },
      { icon: "Users", title: "Community Builder", description: "Engage with your audience through comments, live streams, and posts.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "Business Strategy", description: "Manage brand deals and analytics to monetize and grow revenue.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Entry", detail: "Smartphone & Sunlight", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Grit & Consistency", color: "bg-blue-100 text-blue-700" },
      { label: "Skills", detail: "Storytelling, SEO, Editing", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "₹50k", label: "Max Content Prize", gradient: "from-green-500 to-green-600" },
      { value: "Free", label: "Entry Level Cost", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Solo media production and strategy.",
        color: BLUE,
        content: [
          "The Creative Director: Brainstorming attention-grabbing ideas.",
          "The Technical Crew: Mastering camera and sound solo.",
          "The Community Builder: Engaging with audience and posts.",
          "The Business Strategist: Managing deals and data analytics."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Grit for the camera.",
        color: BLUE2,
        content: [
          "Personality & Grit: Maintaining consistency without an initial audience.",
          "Storytelling: Captivating viewers to engage deeply.",
          "Resilience: Withstanding online criticism and trolls.",
          "Hard Skills: Video editing and SEO optimization for algorithms."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Ideation to analytics.",
        color: BLUE,
        content: [
          "Ideation: Finding a 'gap' in the market content.",
          "Scripting: Planning visual and verbal flow.",
          "Filming: Actual shoot using smartphone or camera.",
          "Editing: Assembling the story and adding effects.",
          "Optimization: Creating thumbnails and SEO titles.",
          "Analytics: Using data to improve the next video."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Prizes and grants for creators.",
        color: BLUE,
        content: [
          "MyGov Program: Cash prizes up to ₹50,000 for good content.",
          "Merit: Media schools give 25–100% scholarships.",
          "Google: Training and funding for top cultural promoters."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "Burnout and algorithm anxiety.",
        color: BLUE2,
        content: [
          "Burnout: Pressure to post constantly causes mental exhaustion.",
          "Algorithm Anxiety: Videos not being 'pushed' despite effort.",
          "Income Volatility: AdSense revenue fluctuates like the stock market."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Early content creation.",
        color: BLUE,
        content: [
          "Public Speaking: Join debate club or dramatics society.",
          "Basic Design: Use Canva for thumbnails and school posters.",
          "Writing: Start a blog or write for school magazines.",
          "Analyze Trends: Ask 'Why did I click on this?' while watching."
        ]
      }
    ]
  }
};

