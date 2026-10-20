export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  image: string;
  secondaryImage?: string;
  description: string;
  tags: string[];
  client: string;
  featured?: boolean;
}

export interface CaseStudyChapter {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  tag: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  featuredWork?: string;
}

export interface EducationItem {
  period: string;
  institution: string;
  degree: string;
  detail: string;
}

export interface SkillCategory {
  title: string;
  description: string;
}

export interface Spatial3DProject {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  tools: string;
  polyCount: string;
  description: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  category: "Posters" | "3D Renders" | "Typography" | "Branding" | "Experimental";
  year: string;
  image: string;
  aspect: string;
  rotation?: string;
  note: string;
}

export const PERSONAL_INFO = {
  name: "Huynh Yen Nhi",
  preferredName: "Nhi Huynh",
  role: "Graphic Designer / 3D Artist",
  email: "hyn9120@gmail.com",
  phone: "+84 932 002 057",
  instagram: "@huyeh.nhi",
  instagramUrl: "https://instagram.com",
  behance: "behance.net/hunhynnhi",
  behanceUrl: "https://behance.net",
  linkedin: "linkedin.com/in/yen-nhi-huynh",
  linkedinUrl: "https://linkedin.com",
  location: "Ho Chi Minh City, Vietnam",
  shortLocation: "HCM City",
  birthday: "09/12/2003",
  zodiac: "Sagittarius",
  mbti: "INTJ",
  languages: [
    { name: "Vietnamese", level: "Native" },
    { name: "English", level: "Advanced" },
  ],
  bioIntro: "Hi! It's Nhi here",
  bioParagraph1:
    "A young graphic designer based in Ho Chi Minh City with a strong passion for design and visual arts that began in childhood. Over the past four years, I have built a solid foundation through academic training and hands-on experience in diverse creative projects.",
  bioParagraph2:
    "My core strengths include 3D design, 2D design, and the development of visual concepts and key visuals. I am particularly confident in transforming ideas into engaging, well-structured, and practical design solutions. I am seeking a dynamic working environment where I can continue learning while contributing meaningfully to the team and the projects I am involved in.",
  manifestoLead:
    "A young designer who's passionate about beauty, films, music and the quiet poetry of everyday life.",
  manifestoBody:
    "For me, graphic design is more than an aesthetics. — it's about creating meaning through visual, ideas that make people feel and remember it.",
  tagline: "Translating ideas into structured visual outcomes.",
};

export const MARQUEE_ITEMS = [
  "CREATIVE THINKING",
  "PROBLEM SOLVING",
  "MUSIC / FILM",
  "OBSERVING LIFE",
  "3D ART DIRECTION",
  "TYPOGRAPHY CRAFT",
  "PACKAGING DESIGN",
  "VISUAL STORYTELLING",
  "EDITORIAL COMPOSITION",
  "ENVIRONMENTAL BRANDING",
];

export const PROJECTS: Project[] = [
  {
    id: "aesthetic-bullshit",
    number: "01",
    title: "AESTHETIC BULLSHIT",
    subtitle: "Acid Typographic & Anatomical Composition",
    year: "2025",
    category: "Poster Design / Typographic Experiment",
    image: "/d1.png",
    description:
      "An acid-graphic exploration dissecting the dichotomy of classical anatomical sculptures and contemporary kinetic typography. Layered with neon chromatic rings, distressed photocopier halftone textures, and anti-design layouts.",
    tags: ["Acid Graphic", "Print & Typography", "Halftone Texture", "Poster Series"],
    client: "Personal Visual Diary / Experimental",
    featured: true,
  },
  {
    id: "heritage-geometry",
    number: "02",
    title: "HERITAGE IN GEOMETRY",
    subtitle: "African Headwrap & Pattern Identity",
    year: "2025",
    category: "Illustration / Visual Identity",
    image: "/d2.png",
    description:
      "A bold minimal flat-vector portrait celebrating African textile heritage, geometric headwrap patterns, and high-contrast color blocking. Designed as part of an editorial magazine cover series.",
    tags: ["Vector Illustration", "Color Blocking", "Pattern Design", "Editorial Cover"],
    client: "Afro-Chic Visual Identity Exploration",
    featured: true,
  },
  {
    id: "indigo-shapes",
    number: "03",
    title: "INDIGO SHAPES",
    subtitle: "Organic Liquid Gradient & Mixed-Media Visuals",
    year: "2025",
    category: "Mixed-Media / Art Direction",
    image: "/d3.png",
    description:
      "Organic liquid gradient forms interacting with photographic portraiture. Investigating spatial depth, typographic deconstruction, and tactile color transitions across paper surfaces.",
    tags: ["Art Direction", "Gradient Mesh", "Mixed Media", "Digital Collage"],
    client: "VCD Creative Lab Exhibition",
    featured: true,
  },
  {
    id: "cinema-retrospective",
    number: "04",
    title: "CINEMA RETROSPECTIVE: PITT",
    subtitle: "Brad Pitt Typographic Screenprint Tribute",
    year: "2024",
    category: "Cinematic Poster / Typographic Tribute",
    image: "/d4.png",
    description:
      "A cinematic screenprint tribute exploring Brad Pitt's legendary filmography (Fight Club, Inglourious Basterds, World War Z). Combining distressed stencil type, duo-tone color washes, and character silhouette hierarchy.",
    tags: ["Screenprint Aesthetic", "Movie Poster", "Duo-tone", "Screen Graphics"],
    client: "Cinephile Archive Collection",
    featured: true,
  },
  {
    id: "fight-club-tyler",
    number: "05",
    title: "TYLER'S MANIFESTO",
    subtitle: "Fight Club Distressed Editorial Poster",
    year: "2025",
    category: "Brutalist Poster / Screenprint",
    image: "/d5.png",
    description:
      "Industrial yellow typography wall combining quote extracts with raw grit, smoke texture, and aggressive visual rhythm. Exploring anti-consumerist philosophy through uncompromising print layouts.",
    tags: ["Brutalism", "Distressed Texture", "Typography", "Pop Culture"],
    client: "Editorial Tribute Series",
    featured: false,
  },
  {
    id: "american-psycho",
    number: "06",
    title: "KILLER LOOKS: AMERICAN PSYCHO",
    subtitle: "Crimson Monochromatic Key Visual",
    year: "2025",
    category: "Monochrome & Crimson Key Visual",
    image: "/d6.png",
    description:
      "Intense vermillion and deep-black monochromatic poster composition focusing on psychological tension, retro headphone cord line work, and dramatic condensed typography.",
    tags: ["Monochrome", "Key Visual", "Psychological Thriller", "Editorial"],
    client: "Curated Poster Series",
    featured: false,
  },
  {
    id: "mix-street-billboard",
    number: "07",
    title: "MIX STREET BILLBOARD",
    subtitle: "Fluid Environmental Brand Campaign",
    year: "2026",
    category: "Environmental Branding / Outdoor Campaign",
    image: "/d7.png",
    description:
      "Fluid organic cutout identity system deployed across large-scale urban street billboard panels in Ho Chi Minh City. Connecting surreal photography with vibrant pop brand shapes.",
    tags: ["Outdoor Billboard", "POSM", "Urban Advertising", "Identity System"],
    client: "MIX Creative Hub Campaign",
    featured: true,
  },
  {
    id: "fast-poster-series",
    number: "08",
    title: "FAST: KINETIC SPEED",
    subtitle: "Diecast Motion & Oversized Typography",
    year: "2025",
    category: "3D Product & Editorial Print",
    image: "/d8.png",
    description:
      "Overhead miniature sports car casting shadows through giant geometric sans-serif letterforms, slicing through orange diagonal speed tracks on textured cream paper.",
    tags: ["3D Render", "Diecast Motion", "Print Layout", "Poster Art"],
    client: "Automotive Motion Series",
    featured: true,
  },
];

export const CASE_STUDY = {
  id: "cuu-hoa-su-hoa",
  title: "CỬU HOA SỬ HỌA",
  englishTitle: "Nine Flowers of Imperial History",
  award: "Featured on WORLD BRAND DESIGN 2024-2025",
  year: "2024 — 2025",
  category: "Cultural Visual Identity & Packaging",
  overview:
    "A comprehensive cultural branding and packaging ecosystem honoring the imperial heritage of Hue and the Nguyen Dynasty. Reimagined for modern Vietnamese youth through botanical watercolor illustrations, embossed gold typography, and artisanal tea ceremony products.",
  heroImage: "/images/cuu_hoa.jpg",
  chapters: [
    {
      step: "01",
      title: "Historical Research & Concept",
      subtitle: "The Nine Sacred Imperial Flowers",
      description:
        "Deep research into royal Hue porcelain, imperial embroideries, and royal archives. We distilled nine quintessential flowers associated with royal virtues into an iconic contemporary visual language.",
      details: [
        "Historical archival study at Hue Monuments Conservation Centre",
        "Symbolism mapping: Lotus (Sen), Chrysanthemum (Cúc), Red Rose (Hồng)",
        "Balancing sacred imperial motifs with accessible modern aesthetics",
      ],
      image: "/images/cuu_hoa.jpg",
      tag: "[ ARCHIVAL RESEARCH ]",
    },
    {
      step: "02",
      title: "Typography & Calligraphy System",
      subtitle: "Bespoke Royal Vietnamese Letterforms",
      description:
        "Custom display typography featuring elegant vertical ligatures, gold foil debossing, and delicate diacritic styling tailored to Vietnamese poetry.",
      details: [
        "Bespoke modular seal calligraphy for product labels",
        "Dual typography pairing: Traditional Serif + Geometric Sans",
        "Refined Vietnamese diacritics designed specifically for gold foil stamping",
      ],
      image: "/d7.png",
      tag: "[ BESPOKE TYPE ]",
    },
    {
      step: "03",
      title: "Packaging: Yến Trà Ngũ Vị",
      subtitle: "Five Flavors Imperial Royal Tea Tins",
      description:
        "Custom embossed tin vessels in rich imperial vermillion, jade teal, and gold. Combined with hand-sewn silk hardcover tasting journals and calligraphy gift envelopes.",
      details: [
        "Gold-embossed metal tins with food-grade protective matte coating",
        "Hand-stitched oriental binding with natural raw silk threads",
        "Textured Xuan paper envelopes stamped with red cinnabar wax seals",
      ],
      image: "/images/cuu_hoa.jpg",
      tag: "[ PACKAGING SUITE ]",
    },
    {
      step: "04",
      title: "Outdoor & Workshop Activation",
      subtitle: "Connecting the Curious & Creative",
      description:
        "Experiential tea-tasting pop-ups, traditional woodblock printing workshops, and large-scale street banner advertisements installed in Hanoi and HCM City.",
      details: [
        "Interactive printmaking stations with live ink stamping",
        "Large-scale outdoor billboard panels with dynamic cutouts",
        "Complete digital and physical exhibition wayfinding suite",
      ],
      image: "/d7.png",
      tag: "[ SPATIAL ACTIVATION ]",
    },
  ],
};

export const SPATIAL_3D_PROJECTS: Spatial3DProject[] = [
  {
    id: "3d-museum-pavilion",
    title: "MONOLITHIC EXHIBITION PAVILION",
    category: "3D Event Space / Environment Design",
    image: "/images/space_3d.jpg",
    year: "2025",
    tools: "Blender 4.2 • Octane Render • Photoshop",
    polyCount: "2.4M Polygons • 8K Volumetric Lighting",
    description:
      "A grand architectural exhibition hall designed for contemporary sculptural arts. Features raw brutalist concrete pillars, floating bridges, and embedded warm linear floor lighting paths.",
  },
  {
    id: "3d-crimson-tunnel",
    title: "THE CRIMSON RESONANCE PORTAL",
    category: "Spatial Visualization / Light Installation",
    image: "/images/installation_3d.jpg",
    year: "2026",
    tools: "Cinema 4D • Redshift • After Effects",
    polyCount: "1.8M Polygons • Realtime Emission Physics",
    description:
      "An avant-garde parametric neon light portal framing an infinite perspective in a dark industrial hangar. Designed as an immersive entry tunnel for a major electronic music festival.",
  },
];

export const TIMELINE_EXPERIENCE: TimelineItem[] = [
  {
    period: "Mar 2026 — May 2026",
    role: "Creative Designer",
    organization: "FOREST STUDIO",
    description:
      "Produced key visual assets for large-scale entertainment shows including Running Man Vietnam supporting event communication, stage graphics, and visual executions.",
  },
  {
    period: "Aug 2025 — Mar 2026",
    role: "Junior Designer",
    organization: "THING TO DO CREATIVE AGENCY",
    description:
      "Executed website design, branding, and packaging solutions for VINAMILK, NUVI, THINGTODO, CELANO. Developed brand-aligned visual assets for NuVi, designed mascot for ANH HONG FOOD.",
  },
  {
    period: "Aug 2025 — Present",
    role: "Remote Designer",
    organization: "JESSELTON CAPITAL",
    description:
      "Built brand identity and web visuals for an AI hiring platform. Designed scalable assets across product and marketing. Simplified complex AI features into clear visual storytelling.",
  },
  {
    period: "Oct 2024 — Mar 2025",
    role: "Design Intern",
    organization: "EDELMAN — MARKETING AGENCY",
    description:
      "Executed events, integrated campaigns, POSM, and social media visuals for ENVY, HP VIETNAM, SABECO, SUNTORY PEPSICO, and HUGGIES.",
  },
  {
    period: "Feb 2024 — Feb 2025",
    role: "Visual Designer (Remote)",
    organization: "VCD CREATIVE LAB",
    description:
      "Designed branding systems, packaging suites, and social media visuals for commercial lifestyle projects.",
  },
];

export const TIMELINE_EDUCATION: EducationItem[] = [
  {
    period: "2021 — Present",
    institution: "VAN LANG UNIVERSITY",
    degree: "Graphic Design Major",
    detail: "Current GPA: 3.37 / 4.00 • Active member of Creative Design Society",
  },
  {
    period: "Mar 2025 — May 2025",
    institution: "MAX HAY 3D COURSE",
    degree: "Environmental Concept Art",
    detail: "Mastered cinematic lighting, procedural materials, and Octane rendering workflows.",
  },
  {
    period: "Mar 2025",
    institution: "BECOMING TYPE DESIGNER",
    degree: "Thóc Field Type Design Course",
    detail: "In-depth study of letterform anatomy, bezier curve mastery, and custom Vietnamese diacritic kerning.",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "BRAND IDENTITY DESIGN",
    description: "Logo design, visual systems, brand guidelines, stationery",
  },
  {
    title: "GRAPHIC DESIGN",
    description: "Packaging design, illustration, social media, editorial design, UI-UX",
  },
  {
    title: "3D DESIGN",
    description: "3D Mockups, character modeling, concept art, motion product",
  },
  {
    title: "MOTION DESIGN",
    description: "Motion graphics, 3D motion assets, social & campaign motion content",
  },
];

export const SOFTWARE_TOOLS = [
  { name: "Photoshop", icon: "Ps", color: "#31A8FF", cat: "Adobe" },
  { name: "Illustrator", icon: "Ai", color: "#FF9A00", cat: "Adobe" },
  { name: "After Effects", icon: "Ae", color: "#9999FF", cat: "Adobe" },
  { name: "InDesign", icon: "Id", color: "#FF3366", cat: "Adobe" },
  { name: "Lightroom", icon: "Lr", color: "#31A8FF", cat: "Adobe" },
  { name: "Premiere Pro", icon: "Pr", color: "#EA77FF", cat: "Adobe" },
  { name: "Blender", icon: "Blender", color: "#E87D0D", cat: "3D" },
  { name: "Figma", icon: "Figma", color: "#0ACF83", cat: "UI" },
];

export const AI_TOOLS = [
  { name: "Gemini", role: "Creative Research & Concepting" },
  { name: "ChatGPT", role: "Copywriting & Idea Sparring" },
  { name: "Claude", role: "Structure & Editorial Narrative" },
  { name: "Google Labs", role: "Experimental AI Tools" },
  { name: "Weavy", role: "Visual Exploration & Moodboarding" },
];

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: "arch-1",
    title: "Aesthetic Bullshit Skull",
    category: "Posters",
    year: "2025",
    image: "/d1.png",
    aspect: "aspect-[3/4]",
    rotation: "-rotate-1",
    note: "Acid photocopy print with chromatic halo",
  },
  {
    id: "arch-2",
    title: "Afro Pattern Silhouette",
    category: "Branding",
    year: "2025",
    image: "/d2.png",
    aspect: "aspect-[2/3]",
    rotation: "rotate-2",
    note: "Geometric fabric pattern vector study",
  },
  {
    id: "arch-3",
    title: "Indigo Spatial Portrait",
    category: "Experimental",
    year: "2025",
    image: "/d3.png",
    aspect: "aspect-[16/9]",
    rotation: "-rotate-1",
    note: "Liquid gradients and typography overlay",
  },
  {
    id: "arch-4",
    title: "Pitt Cinema Tribute",
    category: "Posters",
    year: "2024",
    image: "/d4.png",
    aspect: "aspect-[3/4]",
    rotation: "rotate-1",
    note: "Screenprinted duo-tone actor poster",
  },
  {
    id: "arch-5",
    title: "Tyler Durden Yellow Wall",
    category: "Typography",
    year: "2025",
    image: "/d5.png",
    aspect: "aspect-[3/4]",
    rotation: "-rotate-2",
    note: "Distressed brutalist typography poster",
  },
  {
    id: "arch-6",
    title: "American Psycho Monolith",
    category: "Posters",
    year: "2025",
    image: "/d6.png",
    aspect: "aspect-[3/4]",
    rotation: "rotate-2",
    note: "Monochrome crimson tension key visual",
  },
  {
    id: "arch-7",
    title: "MIX Street Billboard Series",
    category: "Branding",
    year: "2026",
    image: "/d7.png",
    aspect: "aspect-[16/9]",
    rotation: "-rotate-1",
    note: "Urban street billboard campaign mockups",
  },
  {
    id: "arch-8",
    title: "FAST Diecast Typography",
    category: "3D Renders",
    year: "2025",
    image: "/d8.png",
    aspect: "aspect-square",
    rotation: "rotate-1",
    note: "3D sports car casting cast-shadows on type",
  },
  {
    id: "arch-9",
    title: "Cửu Hoa Imperial Suite",
    category: "Branding",
    year: "2025",
    image: "/images/cuu_hoa.jpg",
    aspect: "aspect-[16/9]",
    rotation: "-rotate-1",
    note: "Award-winning imperial tea packaging suite",
  },
  {
    id: "arch-10",
    title: "Monolith Museum Pavilion",
    category: "3D Renders",
    year: "2025",
    image: "/images/space_3d.jpg",
    aspect: "aspect-[16/9]",
    rotation: "rotate-1",
    note: "Octane render concrete architectural space",
  },
];
