import type { Metadata } from "next";
import { Inter, Merriweather, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import React from "react";

// Using Poppins as a substitute for Kievit since Kievit is not available in Google Fonts
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// For testimonial quotes as specified in the PRD
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khan Academy | Free Online Courses, Lessons & Practice",
  description: "For every student, every classroom. Real results. Khan Academy is a nonprofit with the mission of providing a free, world-class education for anyone, anywhere.",
  keywords: "Khan Academy, education, learning, teaching, math, science, free education, nonprofit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${merriweather.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
