export interface Whitepaper {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  fileUrl?: string;
  publishedDate: string;
  author?: string;
  tags?: string[];
  featured?: boolean;
}

export interface WhitepaperCategory {
  id: string;
  name: string;
  description?: string;
}

export const whitepaperCategories: WhitepaperCategory[] = [
  {
    id: "all",
    name: "All Topics",
    description: "Browse all available whitepapers"
  },
  {
    id: "iso-9001",
    name: "ISO 9001",
    description: "Quality Management Systems"
  },
  {
    id: "iso-14001",
    name: "ISO 14001",
    description: "Environmental Management"
  },
  {
    id: "iso-45001",
    name: "ISO 45001",
    description: "Occupational Health & Safety"
  },
  {
    id: "auditing",
    name: "Auditing",
    description: "Best practices and methodologies"
  },
  {
    id: "compliance",
    name: "Compliance",
    description: "Regulatory requirements and standards"
  }
];

export const whitepapers: Whitepaper[] = [
  {
    id: 1,
    title: "Unlocking Quality Excellence: Best Practices For ISO 9001 Implementation",
    description: "Comprehensive guide to implementing ISO 9001 Quality Management Systems with proven strategies and real-world examples.",
    imageUrl: "/images/bg/whitepaper-bg.png",
    category: "iso-9001",
    fileUrl: "/downloads/iso-9001-best-practices.pdf",
    publishedDate: "2024-09",
    author: "Quality Management Team",
    tags: ["ISO 9001", "Quality Management", "Best Practices", "Implementation"],
    featured: true
  },
  {
    id: 2,
    title: "Environmental Management Systems: A Complete Guide to ISO 14001",
    description: "Essential practices and methodologies for successful ISO 14001 certification and environmental sustainability.",
    imageUrl: "/images/bg/whitepaper-bg-1.png",
    category: "iso-14001",
    fileUrl: "",
    publishedDate: "2024-08",
    author: "Environmental Compliance Team",
    tags: ["ISO 14001", "Environment", "Sustainability", "Compliance"],
    featured: true
  },
  {
    id: 3,
    title: "Strategic Approaches to Workplace Safety: ISO 45001 Framework",
    description: "Strategic approaches to occupational health and safety excellence and continuous improvement.",
    imageUrl: "/images/bg/whitepaper-bg-2.png",
    category: "iso-45001",
    fileUrl: "/downloads/iso-45001-framework.pdf",
    publishedDate: "2024-07",
    author: "Health & Safety Division",
    tags: ["ISO 45001", "Safety", "Health", "Risk Management"],
    featured: true
  },
];

export const getWhitepapersByCategory = (category: string): Whitepaper[] => {
  if (category === "all") return whitepapers;
  return whitepapers.filter(paper => paper.category === category);
};

export const getFeaturedWhitepapers = (): Whitepaper[] => {
  return whitepapers.filter(paper => paper.featured);
};

export const searchWhitepapers = (query: string): Whitepaper[] => {
  const lowerQuery = query.toLowerCase();
  return whitepapers.filter(paper => 
    paper.title.toLowerCase().includes(lowerQuery) ||
    paper.description.toLowerCase().includes(lowerQuery) ||
    paper.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

export const getWhitepaperById = (id: number): Whitepaper | undefined => {
  return whitepapers.find(paper => paper.id === id);
};