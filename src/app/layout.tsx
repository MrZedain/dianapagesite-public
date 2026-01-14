"use client";

import "./globals.css";
import Header from "./components/ui/Header";
import NewsletterBubble from "./components/NewsLetterBubble";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      document.startViewTransition(() => {
      });
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return (
    <html lang="en" className="h-full">
      <body className="antialiased min-h-screen flex flex-col">
        <SpeedInsights />
        <Header />

        <main className="flex-1 flex flex-col min-h-screen">
          {children}
        </main>

        <NewsletterBubble />
        <Analytics />
      </body>
    </html>
  );
}
