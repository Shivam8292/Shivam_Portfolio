import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import ImageGuard from "@/components/ui/ImageGuard";
import { VelocityWarp } from "@/components/ui/VelocityWarp";

import { Providers } from "@/components/Providers";

const cirka = localFont({
  src: [
    {
      path: "./fonts/cirka-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/cirka-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cirka",
  display: 'swap',
});

const season = localFont({
  src: [
    {
      path: "./fonts/season-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/season-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/season-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/season-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-season",
  display: 'swap',
});

const victor = localFont({
  src: [
    {
      path: "./fonts/victor-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/victor-serif.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-victor",
  display: 'swap',
});

const luna = localFont({
  src: [
    {
      path: "./fonts/luna-heavy.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/luna-light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-luna",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Shivam Yadav | Software Engineer Portfolio",
    template: "%s | Shivam Yadav"
  },
  description: "Software Engineer specializing in Go, TypeScript, and WebAssembly. Explore the portfolio of Shivam Yadav, focused on high-performance systems and cinematic brutalist design.",
  keywords: [
    "Shivam Yadav", "Shivam Yadav Portfolio", "Software Engineer", 
    "Go Developer Varanasi", "TypeScript Specialist India", "WebAssembly Engineer",
    "Chandigarh University Portfolio", "Mappa Brutalist Web Design", 
    "High-Performance Systems", "Full Stack Developer", "Backend Engineer India"
  ],
  authors: [{ name: "Shivam Yadav", url: "https://github.com/Shivam8292" }],
  creator: "Shivam Yadav",
  publisher: "Shivam Yadav",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shivam-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shivam Yadav | Software Engineer Portfolio",
    description: "Constructing High-Performance Systems with Go & WebAssembly. Explore my work.",
    url: "https://shivam-portfolio.vercel.app",
    siteName: "Shivam Yadav Portfolio",
    images: [
      {
        url: "/harshal-0.png",
        width: 1200,
        height: 630,
        alt: "Shivam Yadav Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Yadav | Software Engineer Portfolio",
    description: "Constructing High-Performance Systems with Go & WebAssembly.",
    creator: "@ShivamYadav",
    images: ["/harshal-0.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Shivam Yadav",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${cirka.variable} ${season.variable} ${victor.variable} ${luna.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Providers>
          <ImageGuard />
          {/* JSON-LD Structured Data for Google Search */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "Shivam Yadav",
                  "alternateName": ["Shivam Yadav Portfolio", "Shivam Yadav Engineer"],
                  "url": "https://shivam-portfolio.vercel.app"
                },
                {
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "name": "Shivam Yadav",
                  "url": "https://shivam-portfolio.vercel.app",
                  "jobTitle": "Software Engineer",
                  "alumniOf": {
                    "@type": "CollegeOrUniversity",
                    "name": "Chandigarh University"
                  },
                  "description": "Software Engineer specializing in Go, TypeScript, and WebAssembly.",
                  "sameAs": [
                    "https://github.com/Shivam8292",
                    "https://www.linkedin.com/in/shivamx12/"
                  ]
                }
              ])
            }}
          />
          <div className="halftone-glow" />
          <VelocityWarp />
          {children}
        </Providers>
      </body>
    </html>
  );
}
