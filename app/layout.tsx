import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppChat from "@/src/component/WhatsAppChat/WhatsAppChat";
import StructuredData from "@/src/component/StructuredData/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunteck Realty - Premium Residential & Commercial Properties in Mumbai",
  description: "Discover luxury residential and commercial properties by Sunteck Realty in prime Mumbai locations. Experience world-class amenities, sustainable development, and exceptional investment opportunities.",
  keywords: "Sunteck Realty, luxury properties Mumbai, residential projects, commercial real estate, premium apartments, Mumbai real estate, property investment, luxury homes, sustainable development",
  authors: [{ name: "Sunteck Realty" }],
  creator: "Sunteck Realty",
  publisher: "Sunteck Realty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sunteckrealty.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sunteck Realty - Premium Real Estate Developer in Mumbai",
    description: "Explore Sunteck Realty's portfolio of luxury residential and commercial properties in Mumbai's most sought-after locations.",
    url: "https://sunteckrealty.com",
    siteName: "Sunteck Realty",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sunteck Realty - Luxury Properties in Mumbai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunteck Realty - Premium Real Estate Developer",
    description: "Discover luxury properties by Sunteck Realty in Mumbai. Premium residential and commercial spaces.",
    images: ["/images/twitter-image.jpg"],
    creator: "@sunteckrealty",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="Organization" data={{}} />
        <StructuredData type="RealEstateAgent" data={{}} />
        <StructuredData type="Website" data={{}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}
