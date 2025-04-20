"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const UserPath = () => {
  const userTypes = [
    {
      title: 'Learners',
      description: 'Master key concepts at your own pace',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      href: '/learners',
      color: 'bg-[#1865f2]',
      hoverColor: 'hover:bg-[#0d4fd6]',
    },
    {
      title: 'Teachers',
      description: 'Empower your students with personalized learning',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      href: '/teachers',
      color: 'bg-[#1aa260]',
      hoverColor: 'hover:bg-[#158f53]',
    },
    {
      title: 'Parents',
      description: 'Support your child\'s learning journey',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      href: '/parents',
      color: 'bg-[#0a2a66]',
      hoverColor: 'hover:bg-[#051d4d]',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-[#0a2a66]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Choose your path
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {userTypes.map((type, index) => (
          <motion.div
            key={type.title}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={type.href}>
              <motion.div 
                className={`h-full p-8 rounded-xl ${type.color} text-white flex flex-col items-center text-center transition-all duration-300 shadow-md`}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-white/20 p-4 rounded-full mb-6">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-white/80">{type.description}</p>
                <div className="mt-6 flex items-center justify-center">
                  <span className="mr-2">Get started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserPath;
