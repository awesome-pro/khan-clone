"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Mock sponsor data with image URLs
const sponsors = [
  {
    name: "Bank of America",
    logo: "https://cdn.kastatic.org/images/supporters-logos/bank-of-america-dark-gray@2x.png",
    tier: "platinum"
  },
  {
    name: "College Board",
    logo: "https://cdn.kastatic.org/images/supporters-logos/college-board-dark-gray@2x.png",
    tier: "platinum"
  },
  {
    name: "Ann & John Doerr",
    logo: "https://cdn.kastatic.org/images/supporters-logos/ann-and-john-doerr-dark-gray@2x.png", // You'll replace this with actual image
    tier: "platinum"
  },
  {
    name: "Bill & Melinda Gates Foundation",
    logo: "https://cdn.kastatic.org/images/supporters-logos/gates-foundation-dark-gray@2x.png",
    tier: "platinum"
  },
  {
    name: "Fundação Lemann",
    logo: "https://cdn.kastatic.org/images/supporters-logos/lemann-foundation-dark-gray@2x.png",
    tier: "gold"
  },
  {
    name: "Carlos Rodriguez-Pastor",
    logo: "https://cdn.kastatic.org/images/supporters-logos/carlos-rodriguez-pastor-dark-gray@2x.png", // You'll replace this with actual image
    tier: "gold"
  },
  {
    name: "Tata Trusts",
    logo: "https://cdn.kastatic.org/images/supporters-logos/tata-trusts-dark-gray@2x.png",
    tier: "gold"
  },
  {
    name: "Valhalla Foundation",
    logo: "https://cdn.kastatic.org/images/supporters-logos/valhalla-dark-gray@2x.png",
    tier: "gold"
  }
];

const Sponsors = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#0a2a66] mb-3">Key Supporters</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khan Academy partners with these visionary organizations and individuals to provide free world-class education for anyone, anywhere.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center"
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              variants={itemVariants}
              className="w-full flex justify-center"
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative h-12 md:h-16 w-full max-w-[180px] grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-opacity opacity-70 hover:opacity-100"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="/supporters" 
            className="text-[#1865f2] hover:text-[#0d4fd6] text-sm font-medium inline-flex items-center gap-1 transition-colors"
          >
            View all supporters
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
