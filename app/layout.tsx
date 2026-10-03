import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { personalInfo } from '@/data/personal';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chirag Arora – Mobile Application Developer (React Native)',
  description:
    'Mobile Application Developer with 2+ years of experience building cross-platform apps for iOS & Android. Specialized in React Native, performance optimization, location caching, and scalable architecture.',
  keywords: [
    'Chirag Arora',
    'React Native Developer',
    'Mobile Application Developer',
    'iOS & Android Developer',
    'Expo',
    'TypeScript',
    'Zustand',
    'MMKV',
    'Techugo',
    'Booming Bulls',
    'Img Global Infotech',
    'Jaipur Developer',
  ],
  authors: [{ name: 'Chirag Arora' }],
  creator: 'Chirag Arora',
  metadataBase: new URL('https://chiragarora.dev'),
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chiragarora.dev',
    title: 'Chirag Arora – Mobile Application Developer (React Native)',
    description:
      'I build fast, scalable mobile apps for iOS & Android. 2+ years experience, 7+ projects shipped, supported 100K+ concurrent users.',
    siteName: 'Chirag Arora Portfolio',
    images: [
      {
        url: '/avatar.jpg',
        width: 800,
        height: 800,
        alt: 'Chirag Arora – Mobile App Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chirag Arora – Mobile Application Developer (React Native)',
    description:
      'I build fast, scalable mobile apps for iOS & Android. React Native, Expo, TypeScript & Performance Engineering.',
    images: ['/avatar.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    description: personalInfo.subtext,
    url: 'https://chiragarora.dev',
    image: 'https://chiragarora.dev/avatar.jpg',
    sameAs: [
      personalInfo.linkedin,
      personalInfo.github,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'India',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'SKIT College, Jaipur',
    },
    knowsAbout: [
      'React Native',
      'Expo',
      'TypeScript',
      'iOS Development',
      'Android Development',
      'Redux Toolkit',
      'Zustand',
      'MMKV',
      'Performance Optimization',
      'Mobile Architecture',
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-violet-500 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ScrollProgress />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
