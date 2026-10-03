export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: 'Mobile' | 'E-commerce' | 'Fintech' | 'Media';
  role: string;
  company?: string;
  timeline?: string;
  featured?: boolean;
  impact: string;
  description: string;
  overview: string;
  myRole: string;
  keyContributions: string[];
  techStack: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  outcomes: string[];
  thumbnail: string;
  gallery: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    slug: 'market-genius',
    title: 'Market Genius',
    tagline: 'High-concurrency community platform for 100K+ forex & equity traders',
    category: 'Fintech',
    role: 'Lead Mobile App Developer',
    company: 'Booming Bulls Academy',
    timeline: 'Sep 2025 – May 2026',
    featured: true,
    impact: 'Optimized production architecture to reliably support 100K+ concurrent users with zero UI lag.',
    description: 'A high-scale social trading and learning network for forex and stock market enthusiasts, featuring live discussion feeds, community rooms, and real-time updates.',
    overview: 'Market Genius was engineered to serve a massive, active trading community requiring real-time market updates, chat streams, and responsive interactions during volatile market hours.',
    myRole: 'Led a distributed engineering team of 5 mobile developers, architecting the state management, offline persistence, and rendering pipelines from scratch using React Native & Expo.',
    keyContributions: [
      'Managed and mentored a 5-developer mobile team across sprint planning, code reviews, and releases.',
      'Transitioned core state layer to Zustand paired with MMKV storage, reducing startup latency by 45%.',
      'Implemented TanStack Query with intelligent cache invalidation and background re-fetching.',
      'Engineered virtualization for nested high-velocity social feeds and reaction cascades.',
      'Achieved a 60 FPS scrolling benchmark on lower-end Android hardware.'
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'MMKV', 'TanStack Query', 'REST APIs', 'EAS Build'],
    challengesAndSolutions: [
      {
        challenge: 'Severe feed frame drops and memory spikes during high-volume market events with 100K+ active users.',
        solution: 'Implemented windowed list virtualization, offloaded heavy JSON serialization to background threads, and utilized MMKV synchronous storage for instant cached state.'
      },
      {
        challenge: 'Real-time reaction and comment synchronization causing unnecessary re-renders across the component tree.',
        solution: 'Built atomic Zustand selector hooks to isolate render boundaries only to individual feed item widgets.'
      }
    ],
    outcomes: [
      'Successfully sustained 100,000+ peak concurrent users with 99.9% crash-free sessions.',
      'Cut initial app launch time from 3.8s down to under 1.4s.',
      'Reduced memory footprint across low-tier Android devices by 38%.'
    ],
    thumbnail: '/projects/market-genius/preview.jpg',
    gallery: [
      '/projects/market-genius/preview.jpg',
      '/projects/zuperior/preview.jpg'
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.marketgenius.app',
    appStoreUrl: undefined,
  },
  {
    slug: 'mother-dairy',
    title: 'Mother Dairy Quick-Commerce',
    tagline: 'Hyperlocal milk & daily essentials subscription delivery app',
    category: 'E-commerce',
    role: 'SDE-1 (Mobile)',
    company: 'Techugo',
    timeline: 'Jun 2026 – Present',
    featured: true,
    impact: 'Implemented 1000m radius geo-caching and modular hooks, revitalizing app store ratings.',
    description: 'A high-frequency daily essentials and dairy subscription app serving thousands of households every morning with automated delivery schedules.',
    overview: 'The Mother Dairy mobile app needed critical overhaul due to location jitter, inaccurate store assignments, and monolithic legacy code causing slow checkout flows.',
    myRole: 'Key mobile engineer responsible for resolving core location accuracy bottlenecks, refactoring monolithic architecture into composable custom hooks, and engineering subscription modules.',
    keyContributions: [
      'Diagnosed and resolved critical GPS location accuracy bugs affecting hyperlocal delivery slot selection.',
      'Architected a 1000-meter radius location caching engine using persistent device storage, slashing reverse geocoding API calls by 60%.',
      'Refactored legacy monolithic controllers into isolated React hooks and decoupled service layers.',
      'Engineered recurring subscription delivery scheduling with pause, modify, and vacation calendar features.',
      'Enhanced app stability, directly contributing to a rebound in Play Store and App Store ratings.'
    ],
    techStack: ['React Native', 'TypeScript', 'Geolocation', 'Google Maps API', 'Redux Toolkit', 'Modular Architecture', 'REST APIs'],
    challengesAndSolutions: [
      {
        challenge: 'Repeated GPS pinging in apartment complexes caused battery drain and inaccurate neighborhood hub assignment.',
        solution: 'Designed an intelligent radius calculation algorithm with 1000m spatial hashing cache, only requesting fresh GPS coordinates when movement threshold exceeded 50 meters.'
      },
      {
        challenge: 'Tightly coupled monolithic screen files made subscription checkout logic error-prone and hard to debug.',
        solution: 'Extracted business logic into pure custom hooks (`useSubscriptionFlow`, `useGeoDeliveryHub`) with comprehensive TypeScript types.'
      }
    ],
    outcomes: [
      'Reduced map and address lookup latency by 70%.',
      'Significantly decreased user drop-offs on morning milk subscription setup.',
      'Improved app store stability score to >99.4% crash-free rate.'
    ],
    thumbnail: '/projects/mother-dairy/preview.jpg',
    gallery: [
      '/projects/mother-dairy/preview.jpg',
      '/projects/yenom/preview.jpg'
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.motherdairy.daily',
    appStoreUrl: undefined,
  },
  {
    slug: 'zuperior',
    title: 'Zuperior Forex Trading',
    tagline: 'Multi-account forex wallet and trading manager with real-time liquidity feeds',
    category: 'Fintech',
    role: 'Mobile App Developer',
    company: 'Booming Bulls Academy',
    timeline: 'Sep 2025 – May 2026',
    featured: true,
    impact: 'Built end-to-end multi-currency wallet management and live trading balance sync.',
    description: 'A sleek, institutional-grade mobile application empowering retail and professional traders to manage trading accounts, deposit/withdraw capital, and monitor open positions.',
    overview: 'Zuperior combines fast financial execution with bank-grade security, allowing traders to seamlessly fund wallets, switch between demo/live accounts, and monitor margin levels.',
    myRole: 'Lead developer for the mobile client, integrating real-time balance WebSockets, custom chart wrappers, and secure KYC/payment flows.',
    keyContributions: [
      'Engineered cross-platform React Native app with biometric authentication and pin validation.',
      'Built multi-currency wallet interface allowing instant top-ups, conversions, and internal transfers.',
      'Optimized real-time chart rendering with smooth pan and zoom gestures.',
      'Integrated payment gateways and transaction history with live status polling and deep linking.',
      'Implemented dark mode first aesthetic inspired by Bloomberg Terminal and modern fintech UX.'
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'Biometrics', 'REST APIs', 'EAS'],
    challengesAndSolutions: [
      {
        challenge: 'Maintaining real-time account equity balance and margin calculations without UI micro-stutters.',
        solution: 'Used memoized selectors and debounced socket listeners to prevent re-rendering unaffected dashboard elements.'
      }
    ],
    outcomes: [
      'Seamless onboarding flow with sub-2 minute KYC and wallet funding.',
      'Zero security incidents reported across financial transactions.'
    ],
    thumbnail: '/projects/zuperior/preview.jpg',
    gallery: ['/projects/zuperior/preview.jpg'],
    playStoreUrl: undefined,
    appStoreUrl: undefined,
  },
  {
    slug: 'yenom',
    title: 'YENOM Budget & Wealth Tracker',
    tagline: 'Smart budget manager with Australian bank feed integration & community goals',
    category: 'Fintech',
    role: 'Mobile Team Lead (3 Devs)',
    company: 'Techugo',
    timeline: 'Jun 2026 – Present',
    featured: true,
    impact: 'Led 3 developers and delivered Australian banking API integration on time for AU market launch.',
    description: 'An all-in-one personal finance, expense tracking, and social savings platform designed for millennial and Gen-Z wealth builders.',
    overview: 'YENOM simplifies personal finance by automatically categorizing expenses, providing visual savings envelopes, and connecting users with accountability circles.',
    myRole: 'Led a 3-developer mobile pod, coordinating sprint milestones, backend API contract definitions, and Australian Open Banking integration.',
    keyContributions: [
      'Directed architecture and code reviews for 3 mobile engineers from design to production rollout.',
      'Integrated third-party Australian Open Banking APIs for automated daily transaction synchronization.',
      'Designed interactive savings goal progress widgets with customizable visual milestones.',
      'Created community discussion and tip-sharing modules with engagement metrics.'
    ],
    techStack: ['React Native', 'TypeScript', 'Australian Bank APIs', 'Zustand', 'React Native Reanimated', 'Tailwind/NativeWind'],
    challengesAndSolutions: [
      {
        challenge: 'Handling diverse Australian banking transaction formats with intermittent webhook syncs.',
        solution: 'Constructed an offline-first reconciliation queue that syncs pending transactions asynchronously once network state stabilizes.'
      }
    ],
    outcomes: [
      'Successful on-schedule launch in the Australian App Store and Google Play.',
      '4.8/5 user satisfaction rating on automated transaction categorization.'
    ],
    thumbnail: '/projects/yenom/preview.jpg',
    gallery: ['/projects/yenom/preview.jpg'],
  },
  {
    slug: 'veromoda',
    title: 'Vero Moda Europe',
    tagline: 'Premium European fashion commerce app with AI-powered recommendations',
    category: 'E-commerce',
    role: 'React Native Developer',
    company: 'Img Global Infotech',
    timeline: 'Apr 2024 – Sep 2025',
    featured: false,
    impact: 'Built complete responsive UI screens and integrated Juspay checkout with AI recommendation engine.',
    description: 'Flagship mobile shopping experience for Vero Moda, bringing runway fashion directly to customers with personalized discovery.',
    overview: 'A high-polish e-commerce application focusing on brand elegance, fluid transitions, and seamless one-click payment processing.',
    myRole: 'Front-end mobile developer building fluid catalog screens, product filters, Juspay payment SDK integration, and personalized AI feed widgets.',
    keyContributions: [
      'Developed 30+ responsive UI screens and custom interactive components across the full app lifecycle.',
      'Integrated the Juspay payment gateway, supporting credit cards, UPI, BNPL, and Apple/Google Pay.',
      'Implemented AI-powered "Style Match" and recommended product carousels based on browsing history.',
      'Configured deep linking for marketing push campaigns and seasonal flash sales.'
    ],
    techStack: ['React Native', 'JavaScript', 'Juspay SDK', 'Redux', 'Deep Linking', 'REST APIs'],
    challengesAndSolutions: [
      {
        challenge: 'High cart abandonment during complex multi-step payment redirection.',
        solution: 'Implemented Juspay Express Checkout headless SDK to maintain in-app native UX and prevent browser bouncing.'
      }
    ],
    outcomes: [
      '22% increase in checkout completion rates after Juspay integration.',
      'Smooth 60 FPS transitions across image-heavy product galleries.'
    ],
    thumbnail: '/projects/veromoda/preview.jpg',
    gallery: ['/projects/veromoda/preview.jpg'],
  },
  {
    slug: 'fabindia',
    title: 'FabIndia Employee & Retail App',
    tagline: 'Enterprise retail & employee perk commerce with location-aware store pickup',
    category: 'E-commerce',
    role: 'React Native Developer',
    company: 'Img Global Infotech',
    timeline: 'Apr 2024 – Sep 2025',
    featured: false,
    impact: 'Engineered employee discount engine, Razorpay checkout, and Google Maps store locator.',
    description: 'An omni-channel retail application providing customized employee cart offers, corporate perks, and customer location-based store pickup.',
    overview: 'FabIndia required a customized mobile purchasing solution that applied dynamic tier-based corporate benefits while supporting mainstream retail purchases.',
    myRole: 'Responsible for cart discount logic, Razorpay gateway integration, Google Maps store locator, and user behavior analytics tracking.',
    keyContributions: [
      'Built automated corporate employee discount algorithms computed dynamically in cart state.',
      'Integrated Razorpay payment gateway with error recovery and retry webhooks.',
      'Implemented Google Maps SDK for closest retail store routing and inventory checks.',
      'Embedded analytics events to track funnel drop-offs and feature engagement.'
    ],
    techStack: ['React Native', 'TypeScript', 'Razorpay', 'Google Maps API', 'Firebase Analytics', 'Redux'],
    challengesAndSolutions: [
      {
        challenge: 'Complex overlapping discounts between seasonal promo codes and employee benefits.',
        solution: 'Created a deterministic pricing rule engine that verifies eligibility in real-time before checkout commit.'
      }
    ],
    outcomes: [
      'Successfully rolled out to all internal employees with 100% discount calculation accuracy.',
      'Zero payment discrepancy incidents during peak festive sales.'
    ],
    thumbnail: '/projects/fabindia/preview.jpg',
    gallery: ['/projects/fabindia/preview.jpg'],
  },
  {
    slug: 'ifi-reality',
    title: 'IFI Reality (Hotstar Reality Show)',
    tagline: 'End-to-end digital audition platform with Aadhaar, PAN & Passport verification',
    category: 'Media',
    role: 'SDE-1 (Mobile)',
    company: 'Techugo',
    timeline: 'Jun 2026 – Present',
    featured: false,
    impact: 'Engineered end-to-end multi-step audition flow supporting domestic & international identity KYC.',
    description: 'The official audition and contestant management app for an upcoming high-profile reality show aired on Disney+ Hotstar.',
    overview: 'Auditioning for high-stakes reality TV requires rigorous background verification, media uploads, and frictionless registration for thousands of applicants.',
    myRole: 'Built the end-to-end profile setup and audition registration funnel, integrating government identity APIs for domestic and international applicants.',
    keyContributions: [
      'Constructed a multi-step audition onboarding flow with draft saving and offline media queuing.',
      'Implemented Aadhaar and PAN verification APIs for Indian applicants with instant validation.',
      'Integrated international Passport OCR and verification flow for global participants.',
      'Optimized video audition upload with compression and resumeable chunking.'
    ],
    techStack: ['React Native', 'TypeScript', 'Aadhaar/PAN KYC APIs', 'Passport Verification', 'Chunked Video Upload', 'REST APIs'],
    challengesAndSolutions: [
      {
        challenge: 'Large 4K audition video uploads failing on unstable mobile network connections.',
        solution: 'Created an in-app background video compression and resumable chunk upload queue that gracefully handles connection drops.'
      }
    ],
    outcomes: [
      'Processed thousands of candidate audition submissions with automated KYC verification.',
      'Zero data leaks or upload failures during nationwide audition windows.'
    ],
    thumbnail: '/projects/ifi-reality/preview.jpg',
    gallery: ['/projects/ifi-reality/preview.jpg'],
  },
  {
    slug: 'arihant-publications',
    title: 'Arihant Publications E-Learning',
    tagline: 'Adaptive cross-platform digital reading & assessment app for tablets and phones',
    category: 'Mobile',
    role: 'React Native Developer',
    company: 'Img Global Infotech',
    timeline: 'Apr 2024 – Sep 2025',
    featured: false,
    impact: 'Delivered pixel-perfect adaptive layouts optimized for both mobile phones and tablets.',
    description: 'An educational publishing and test preparation app delivering interactive eBooks, mock tests, and analytics across mobile and tablet form factors.',
    overview: 'Students study on everything from compact smartphones to 12.9-inch iPads. The app required custom adaptive split-pane views and offline content storage.',
    myRole: 'Designed responsive layouts, tablet split-screen navigation, and offline book caching mechanisms.',
    keyContributions: [
      'Built adaptive design system dynamically adjusting between single-column and multi-pane tablet modes.',
      'Engineered offline reading mode with encrypted local storage.',
      'Created interactive quiz engine with timer and instant answer explanation modals.'
    ],
    techStack: ['React Native', 'Tablet Optimization', 'Offline Storage', 'Redux', 'REST APIs'],
    challengesAndSolutions: [
      {
        challenge: 'Inconsistent rendering of complex math formulas and diagrams across tablet screen aspect ratios.',
        solution: 'Built custom responsive container wrappers with vector rendering to preserve sharpness at any DPI.'
      }
    ],
    outcomes: [
      'Unified single codebase serving both Android & iOS phones and tablets.',
      'Maintained consistent 60 FPS page turns and exam simulation tests.'
    ],
    thumbnail: '/projects/arihant/preview.jpg',
    gallery: ['/projects/arihant/preview.jpg'],
  },
];
