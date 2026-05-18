import type { Metadata } from "next";
import { Geist, Geist_Mono, Permanent_Marker, Caveat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";
import { CookieBanner } from "@/components/CookieBanner";
import { BackToTop } from "@/components/BackToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-marker",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: ["400", "600"],
  variable: "--font-handwriting",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IMMYO Waitlist",
  description: "Join the waitlist for IMMYO, the ultimate real estate platform. Share your confessions and be the first to know when we launch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-stone-100">
          <div className="immio-container flex items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/IMM.PNG"
                alt="IMMYO"
                width={500}
                height={150}
                priority
                className="h-36 w-auto"
              />
            </Link>
          </div>
        </header>
        <main className="flex-1 pt-16">{children}</main>
        <BackToTop />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
