import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pixlbyts.com'),
  title: {
    default: "PIXLBYTS | Technology that works. Experiences that connect.",
    template: "%s | PIXLBYTS"
  },
  description: "Multidisciplinary creative technology and physical brand execution company building intelligent digital software and tangible spatial presence.",
  openGraph: {
    title: "PIXLBYTS",
    description: "Technology that works. Experiences that connect.",
    url: 'https://pixlbyts.com',
    siteName: 'PIXLBYTS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PIXLBYTS',
    description: 'Technology that works. Experiences that connect.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} min-h-[100svh] bg-surface-base text-text-primary flex flex-col selection:bg-accent-orange selection:text-white`}
      >
        <LenisProvider>
          <main className="flex-1">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
