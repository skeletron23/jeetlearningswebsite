export interface LibraryResource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "guide" | "ebook" | "video" | "template" | "tool";
  downloads: number;
  rating: number;
  image: string;
}

export const libraryResources: LibraryResource[] = [
  {
    id: "1",
    title: "Complete Career Planning Guide",
    description: "A comprehensive guide to planning your career path with actionable steps and strategies.",
    category: "Career Planning",
    type: "guide",
    downloads: 2450,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "2",
    title: "Resume Writing Masterclass",
    description: "Learn how to create a compelling resume that gets noticed by recruiters and hiring managers.",
    category: "Job Search",
    type: "ebook",
    downloads: 3120,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "3",
    title: "Interview Preparation Toolkit",
    description: "Master interview techniques with sample questions, answers, and preparation strategies.",
    category: "Job Search",
    type: "template",
    downloads: 2890,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "4",
    title: "Skill Development Roadmap",
    description: "Identify and develop the skills needed for your target career with this detailed roadmap.",
    category: "Skills",
    type: "guide",
    downloads: 1950,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "5",
    title: "Networking Strategies Video Series",
    description: "Video tutorials on effective networking techniques to build professional relationships.",
    category: "Professional Development",
    type: "video",
    downloads: 1680,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "6",
    title: "Career Transition Checklist",
    description: "Step-by-step checklist for successfully transitioning to a new career or industry.",
    category: "Career Planning",
    type: "template",
    downloads: 1420,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "7",
    title: "Salary Negotiation Guide",
    description: "Learn how to negotiate your salary and benefits package effectively.",
    category: "Job Search",
    type: "ebook",
    downloads: 2210,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "8",
    title: "LinkedIn Optimization Tool",
    description: "Optimize your LinkedIn profile to attract recruiters and opportunities.",
    category: "Professional Development",
    type: "tool",
    downloads: 3450,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "9",
    title: "Personal Branding Workbook",
    description: "Build and strengthen your personal brand with this interactive workbook.",
    category: "Professional Development",
    type: "guide",
    downloads: 1890,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "10",
    title: "Industry Research Templates",
    description: "Templates to research industries and companies before applying or interviewing.",
    category: "Job Search",
    type: "template",
    downloads: 1560,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "11",
    title: "Career Goals Planner",
    description: "Set and track your career goals with this comprehensive planning tool.",
    category: "Career Planning",
    type: "tool",
    downloads: 2340,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "12",
    title: "Professional Development Video Series",
    description: "Video tutorials on leadership, communication, and other essential professional skills.",
    category: "Skills",
    type: "video",
    downloads: 1750,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  }
];

export const categories = [
  "All",
  "Career Planning",
  "Job Search",
  "Skills",
  "Professional Development"
];

export const resourceTypes = [
  { type: "guide", label: "Guides", icon: "📖" },
  { type: "ebook", label: "eBooks", icon: "📕" },
  { type: "video", label: "Videos", icon: "🎥" },
  { type: "template", label: "Templates", icon: "📋" },
  { type: "tool", label: "Tools", icon: "🛠️" }
];
