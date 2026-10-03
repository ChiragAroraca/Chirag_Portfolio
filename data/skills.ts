export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    icon?: string;
  }[];
}

export interface WorkPrinciple {
  title: string;
  badge: string;
  description: string;
  icon: string;
}

export const skillsData: SkillGroup[] = [
  {
    category: 'Mobile Development',
    description: 'Cross-platform native-feeling applications with 60 FPS smooth interactions',
    skills: [
      { name: 'React Native', highlight: true },
      { name: 'Expo', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'JavaScript (ES6+)', highlight: false },
      { name: 'React', highlight: false },
      { name: 'Flutter', highlight: false },
    ]
  },
  {
    category: 'State Management & Data',
    description: 'Blazing-fast client state, reactive queries, and synchronous local disk storage',
    skills: [
      { name: 'Redux Toolkit', highlight: true },
      { name: 'Zustand', highlight: true },
      { name: 'TanStack Query', highlight: true },
      { name: 'MMKV Storage', highlight: true },
      { name: 'REST APIs', highlight: false },
      { name: 'API Integration', highlight: false },
    ]
  },
  {
    category: 'Platforms & Deployment',
    description: 'Native toolchains, certificate management, automated pipelines and store publishing',
    skills: [
      { name: 'iOS', highlight: true },
      { name: 'Android', highlight: true },
      { name: 'Xcode', highlight: false },
      { name: 'Android Studio', highlight: false },
      { name: 'EAS Build / Submit', highlight: true },
      { name: 'Push Notifications', highlight: false },
      { name: 'App Permissions', highlight: false },
    ]
  },
  {
    category: 'Integrations & Native SDKs',
    description: 'Payment gateways, location intelligence, biometrics, and analytics',
    skills: [
      { name: 'Juspay Payment SDK', highlight: true },
      { name: 'Razorpay', highlight: true },
      { name: 'Google Maps API', highlight: true },
      { name: 'Geolocation & Caching', highlight: true },
      { name: 'Firebase & Analytics', highlight: false },
      { name: 'Deep Linking', highlight: false },
    ]
  },
  {
    category: 'Backend & Database',
    description: 'Server APIs and NoSQL databases from full-stack solutions',
    skills: [
      { name: 'Node.js', highlight: false },
      { name: 'Express.js', highlight: false },
      { name: 'MongoDB', highlight: false },
      { name: 'RESTful Architecture', highlight: false },
    ]
  }
];

export const marqueeSkills = [
  'React Native',
  'Expo',
  'TypeScript',
  'iOS & Android',
  'Zustand',
  'Redux Toolkit',
  'MMKV Storage',
  'TanStack Query',
  'Juspay SDK',
  'Razorpay',
  'Google Maps',
  'EAS Build',
  'Location Caching',
  'Performance Profiling',
  'Modular Hooks',
  'Node.js',
  'Flutter'
];

export const workPrinciples: WorkPrinciple[] = [
  {
    title: 'Performance Optimization',
    badge: '60 FPS Standard',
    description: 'Obsessed with eliminating jank, reducing bundle sizes, virtualizing heavy feeds, and using MMKV for instant state retrieval.',
    icon: 'Zap'
  },
  {
    title: 'Modular Architecture',
    badge: 'Clean & Scalable',
    description: 'Refactoring monolithic code into composable custom hooks, atomic state slices, and decoupled service layers that survive rapid feature scaling.',
    icon: 'Layers'
  },
  {
    title: 'Team Leadership',
    badge: 'Teams of 3–5 Devs',
    description: 'Guided engineering pods through sprint planning, high-standard code reviews, CI/CD release pipelines, and technical mentorship.',
    icon: 'Users'
  },
  {
    title: 'Agile & Store Delivery',
    badge: 'Production-Tested',
    description: 'End-to-end ownership from Figma handoff to App Store & Google Play distribution, automated EAS builds, and real-time crash monitoring.',
    icon: 'Rocket'
  }
];
