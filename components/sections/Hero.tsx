"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Decorative geometric elements
  const GeometricElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 right-40 w-16 h-16 rounded-full bg-[#ffda00] opacity-70"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-80 w-12 h-12 rounded-md bg-[#ff914d] opacity-60 rotate-12"
        animate={{
          rotate: [12, 20, 12],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-40 left-20 w-20 h-20 rounded-lg bg-[#72c4bf] opacity-50 rotate-45"
        animate={{
          rotate: [45, 55, 45],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );

  return (
    <div className="relative overflow-hidden">
      <GeometricElements />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content - 40% */}
          <motion.div 
            className="w-full md:w-3/5 mb-10 md:mb-0 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-[#0a2a66] mb-6 leading-tight"
              variants={itemVariants}
            >
              For every student, every classroom. Real results.
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              variants={itemVariants}
            >
              Khan Academy is a nonprofit with the mission of providing a free, world-class education for anyone, anywhere.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Button 
                className="bg-[#1865f2] hover:bg-[#0d4fd6] text-white px-6 py-2 rounded-lg"
                asChild
              >
                <Link href="/learners">
                  Learners
                </Link>
              </Button>
              
              <Button 
                className="bg-[#1aa260] hover:bg-[#158f53] text-white px-6 py-2 rounded-lg"
                asChild
              >
                <Link href="/teachers">
                  Teachers
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-[#0a2a66] text-[#0a2a66] hover:bg-gray-100 px-6 py-2 rounded-lg"
                asChild
              >
                <Link href="/parents">
                  Parents
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Visual Content - 60% */}
          <motion.div 
            className="w-full md:w-2/5 relative rounded-4xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#ffda00] rounded-full opacity-20"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-[#ff914d] rounded-full opacity-30"></div>
              <Image
                width={400}
                height={300}
                src="https://cdn.kastatic.org/images/lohp/hero_student_collage_IN_2x.png" 
                alt="Student learning on Khan Academy" 
                className="rounded-lg w-full h-auto object-cover shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
