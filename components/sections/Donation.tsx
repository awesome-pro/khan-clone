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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
            
            <Button className="bg-[#1aa260] hover:bg-[#158f53] text-white px-4 py-2 h-auto text-lg rounded-lg w-full md:w-auto">
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
              <Image 
                src="https://cdn.kastatic.org/images/lohp/math-unicorn-donate-collage.png" 
                alt="Child learning with Khan Academy" 
                className="w-full h-auto object-cover"
                width={400}
                height={300}
              />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
