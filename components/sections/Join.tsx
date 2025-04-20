"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Join = () => {
  const userOptions = [
    {
      title: 'Learners',
      description: 'Start learning now',
      href: '/learners',
      color: 'bg-[#1865f2] hover:bg-[#0d4fd6]',
    },
    {
      title: 'Teachers',
      description: 'Empower your classroom',
      href: '/teachers',
      color: 'bg-[#1aa260] hover:bg-[#158f53]',
    },
    {
      title: 'Parents',
      description: 'Support your child',
      href: '/parents',
      color: 'bg-[#0a2a66] hover:bg-[#051d4d]',
    },
    {
      title: 'Give today',
      description: 'Support our mission',
      href: '/donate',
      color: 'bg-[#ff914d] hover:bg-[#f27b30]',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0a2a66]">
          Join Khan Academy today
        </h2>
        
        <p className="text-gray-600 mb-12 text-lg">
          Start learning, teaching, or supporting our mission to provide a free, world-class education for anyone, anywhere.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {userOptions.map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Button 
              className={`w-full h-auto py-6 flex flex-col items-center justify-center text-white ${option.color} rounded-xl shadow-md`}
              asChild
            >
              <Link href={option.href}>
                <div className="text-xl font-bold mb-1">{option.title}</div>
                <div className="text-sm opacity-90">{option.description}</div>
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Join;
