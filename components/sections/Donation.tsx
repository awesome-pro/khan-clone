"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Donation = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
              Every child deserves the chance to learn.
            </h2>
            
            <p className=" mb-6 text-lg">
              Right now, over 617 million children worldwide are missing basic math and reading skills. We're a nonprofit delivering the education they need, and we need your help.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">250M+</div>
                <div className="text-sm">Children lack basic reading skills</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">617M+</div>
                <div className="text-sm">Children lack basic math skills</div>
              </div>
            </div>
            
            <Button className="bg-[#1aa260] hover:bg-[#158f53] text-white px-4 py-2 h-auto text-lg rounded-xl w-full md:w-auto">
              <Link href="/donate">
                Give them the chance
              </Link>
            </Button>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a66]/50 to-transparent z-10"></div>
              
              <Image 
                src="https://cdn.kastatic.org/images/lohp/math-unicorn-donate-collage.png" 
                alt="Child learning with Khan Academy" 
                className="w-full h-auto object-cover"
                width={400}
                height={300}
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#1aa260] flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-medium">Your donation makes a difference</div>
                    <div className="text-xs text-white/80">100% goes to education</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#72c4bf] rounded-full opacity-30 z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#1865f2] rounded-full opacity-20 z-0"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
