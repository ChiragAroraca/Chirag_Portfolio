export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  type: 'Full-time' | 'Contract' | 'Freelance';
  summary: string;
  highlights: string[];
  keyProjects: {
    name: string;
    description: string;
  }[];
  skills: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: 'techugo',
    role: 'SDE-1 (Mobile)',
    company: 'Techugo',
    location: 'Noida, India',
    period: 'Jun 2026 – Present',
    current: true,
    type: 'Full-time',
    summary: 'Leading mission-critical mobile feature architecture, location intelligence, and team leadership across fast-growing fintech, quick-commerce, and media applications.',
    highlights: [
      'Resolved critical GPS location accuracy bugs and engineered a 1000-meter radius location caching system for Mother Dairy, improving checkout load times and reliability.',
      'Refactored legacy monolithic controllers into composable custom hooks and decoupled service layers, directly revitalizing declining app store ratings.',
      'Architected recurring subscription delivery features with customizable calendar rules to drive repeat user orders.',
      'Engineered the complete audition KYC registration flow for IFI Reality (Disney+ Hotstar show), integrating Aadhaar, PAN, and international Passport validation.',
      'Led a team of 3 developers on YENOM (budget management app), establishing engineering standards and integrating Australian Open Banking transaction APIs on schedule for international launch.'
    ],
    keyProjects: [
      { name: 'Mother Dairy', description: 'Hyperlocal delivery & subscription app with 1000m geo-caching' },
      { name: 'YENOM', description: 'Personal wealth tracker with AU banking APIs (Led 3 devs)' },
      { name: 'IFI Reality', description: 'Hotstar reality show audition platform with multi-national KYC' }
    ],
    skills: ['React Native', 'TypeScript', 'Geolocation', 'Google Maps API', 'Zustand', 'KYC APIs', 'Team Leadership', 'Modular Architecture']
  },
  {
    id: 'booming-bulls',
    role: 'Mobile App Developer',
    company: 'Booming Bulls Academy',
    location: 'Gurugram, India',
    period: 'Sep 2025 – May 2026',
    current: false,
    type: 'Full-time',
    summary: 'Spearheaded development and deployment of high-frequency fintech and trader community apps, scaling platforms to 100K+ concurrent users.',
    highlights: [
      'Led end-to-end development and production EAS deployments of cross-platform React Native (Expo) apps: Zuperior (forex trading) and Market Genius (traders community).',
      'Managed a team of 5 mobile developers, optimizing rendering cycles and state management to reliably sustain 100,000+ concurrent active users.',
      'Engineered scalable frontend architecture using TypeScript, Redux Toolkit, and atomic Zustand stores with MMKV disk caching.',
      'Drastically reduced app startup latency and eliminated frame drops through list virtualization and asset preloading pipelines.',
      'Integrated real-time market data streaming and interactive candlestick charting modules.'
    ],
    keyProjects: [
      { name: 'Market Genius', description: 'Scaled community app to 100K+ concurrent users (Managed 5 devs)' },
      { name: 'Zuperior', description: 'Forex wallet manager with live trading balances & biometrics' }
    ],
    skills: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'MMKV', 'TanStack Query', 'Performance Optimization', 'Team Management']
  },
  {
    id: 'img-global',
    role: 'React Native Developer',
    company: 'Img Global Infotech',
    location: 'Jaipur, India',
    period: 'Apr 2024 – Sep 2025',
    current: false,
    type: 'Full-time',
    summary: 'Delivered robust enterprise e-commerce, publishing, and retail applications in agile delivery cycles with third-party payment and geo-services integrations.',
    highlights: [
      'Built and maintained high-polish cross-platform mobile apps in rapid agile sprints, translating design wireframes into performant native UI.',
      'Engineered reusable design system components and screens, resolving complex memory leaks and rendering bottlenecks across legacy devices.',
      'Integrated mission-critical native modules including Firebase Analytics/Auth, Razorpay, Juspay Payment Gateway, Google Maps SDK, Geolocation, and Deep Linking.',
      'Delivered employee perk discount logic for FabIndia and responsive tablet layouts for Arihant Publications.'
    ],
    keyProjects: [
      { name: 'FabIndia', description: 'Employee perk engine, Razorpay & Google Maps store finder' },
      { name: 'Vero Moda', description: 'European fashion app with Juspay & AI recommendations' },
      { name: 'Arihant Publications', description: 'Tablet & mobile adaptive e-learning reading app' }
    ],
    skills: ['React Native', 'JavaScript', 'Juspay', 'Razorpay', 'Google Maps', 'Firebase', 'Deep Linking', 'Responsive Design']
  },
  {
    id: 'freelance-college',
    role: 'Full-Stack Developer (Freelance & College Era)',
    company: 'Independent / Academic Projects',
    location: 'Jaipur, India',
    period: 'Aug 2022 – Apr 2024',
    current: false,
    type: 'Freelance',
    summary: 'Built full-stack web and mobile prototypes, exploring cross-platform frameworks, RESTful APIs, and cloud database persistence.',
    highlights: [
      'Built end-to-end applications using Flutter, Node.js, Express, and MongoDB.',
      'Engineered REST APIs for authentication, CRUD workflows, and file uploads with JWT security.',
      'Explored reactive state management patterns, establishing the foundation for specialized React Native mobile engineering.',
      'Maintained academic excellence at SKIT College Jaipur (CGPA 9.1 in B.Tech Computer Science).'
    ],
    keyProjects: [
      { name: 'Cross-Platform Prototypes', description: 'Full-stack utility apps built with Flutter, Node.js & MongoDB' }
    ],
    skills: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Full Stack Architecture']
  }
];
