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
