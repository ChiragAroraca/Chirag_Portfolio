export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface HobbyItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  accent: string;
  interactionType: 'music' | 'basketball' | 'creative';
}

export const personalInfo = {
  name: 'Chirag Arora',
  role: 'Mobile Application Developer',
  focus: 'React Native & Cross-Platform Specialist',
  headline: 'I build fast, scalable mobile apps for iOS & Android.',
  subtext: 'Mobile Application Developer with 2+ years of experience building cross-platform apps, focused on performance optimization, API integration, and production-ready deployment.',
  location: 'Jaipur, Rajasthan, India',
  workplaceLocation: 'Working with a Noida-based company (Techugo)',
  status: 'Open to high-impact opportunities',
  email: 'chiragaroraca10@gmail.com',
  phone: '+91-9571259623',
  linkedin: 'https://linkedin.com/in/chirag-arora30',
  github: 'https://github.com/chiragarora30', // Placeholder / real
  resumePdf: '/Chirag_Arora_Resume.pdf',
  avatarUrl: '/avatar.jpg',

  rolesRotating: [
    'React Native Developer',
    'Mobile App Engineer',
    'Performance Optimizer',
    'Cross-Platform Specialist',
    'Team Lead & Architect'
  ],

  bioParagraphs: [
    "I'm a Mobile Application Developer passionate about crafting seamless, 60 FPS user experiences on both iOS and Android. With over 2 years of professional experience across fast-paced product companies, I specialize in translating complex business needs into modular, scalable mobile codebases.",
    "From engineering a 1000m radius geo-caching engine for Mother Dairy to scaling the Market Genius trader community app for 100K+ concurrent users, I love solving real engineering challenges — whether that's memory management, offline-first persistence, or multi-step fintech KYC flows.",
    "When I'm not profiling React Native frame rates or tuning Zustand stores, you'll find me writing songs, producing music, or playing basketball on the court."
  ],

  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'SKIT College, Jaipur',
    timeline: 'Aug 2019 – May 2023',
    grade: 'CGPA 9.1',
    description: 'Focused on algorithms, data structures, software engineering principles, and distributed systems.'
  },

  certification: {
    name: 'Meta Certified Front-End Developer',
    issuer: 'Coursera (Meta)',
    badgeUrl: 'https://coursera.org',
    description: 'In-depth specialization covering advanced JavaScript, React architecture, responsive design, and UI performance engineering.'
  },

  stats: [
    { value: 2, suffix: '+', label: 'Years Experience', sublabel: 'Professional Mobile Dev' },
    { value: 7, suffix: '+', label: 'Projects Shipped', sublabel: 'Production iOS & Android Apps' },
    { value: 100, suffix: 'K+', label: 'Concurrent Users', sublabel: 'Supported on Peak Loads' },
    { value: 3, suffix: '', label: 'Tech Companies', sublabel: 'High-Growth Teams' },
  ] as StatItem[],

  hobbies: [
    {
      id: 'music-songwriting',
      title: 'Songwriting & Music',
      subtitle: 'Composing, writing lyrics & melody',
      description: 'Music is my creative flow state. I write original songs and love exploring sound design, lyricism, and vocal melodies.',
      icon: 'Music',
      accent: 'from-violet-500/20 to-fuchsia-500/20',
      interactionType: 'music'
    },
    {
      id: 'basketball',
      title: 'Basketball',
      subtitle: 'Courtside passion & quick pivots',
      description: 'Playing basketball keeps my reflexes sharp and my mind energized. Teamwork, spacing, and quick decision-making translate right into agile software engineering.',
      icon: 'Activity',
      accent: 'from-cyan-500/20 to-blue-500/20',
      interactionType: 'basketball'
    },
    {
      id: 'sound-design',
      title: 'Creative Audio & Production',
      subtitle: 'Beats, rhythm & acoustic spaces',
      description: 'Tinkering with DAW audio channels, EQ frequencies, and acoustic arrangements gives me a deep appreciation for rhythm and micro-timings in UI animations.',
      icon: 'Radio',
      accent: 'from-indigo-500/20 to-emerald-500/20',
      interactionType: 'creative'
    }
  ] as HobbyItem[]
};
