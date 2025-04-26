"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';

const ValueProposition = () => {
  const features = [
    {
      title: 'Personalized learning',
      description: 'Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: "https://cdn.kastatic.org/images/lohp/personalized_learning_icon.png"
    },
    {
      title: 'Trusted content',
      description: 'Created by experts, Khan Academys library of trusted, standards-aligned practice and lessons covers math, science, and more.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      image: "https://cdn.kastatic.org/images/lohp/trusted_content_icon.png"
    },
    {
      title: 'Tools for teachers',
      description: 'With Khan Academy, teachers can identify gaps in their students understanding, tailor instruction, and meet the needs of every student.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      image: "https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png"
    },
  ];

  const stats = [
    { value: 150, label: 'Million+ registered users', suffix: 'M+' },
    { value: 190, label: 'Countries with learners', suffix: '+' },
    { value: 50, label: 'Languages available', suffix: '+' },
    { value: 100, label: 'Percent free, always', suffix: '%' },
  ];

  // Define types for Counter props
  interface CounterProps {
    value: number;
    suffix: string;
  }

  // Animation for counter
  const Counter = ({ value, suffix }: CounterProps) => {
    const counterRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const isInView = useInView(counterRef, { once: true, amount: 0.5 });
    const [count, setCount] = React.useState(0);
    
    useEffect(() => {
      if (isInView) {
        let startValue = 0;
        const duration = 2000; // ms
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);
        const easeOutQuad = (t: number): number => t * (2 - t);
        
        let frame = 0;
        const counter = setInterval(() => {
          frame++;
          const progress = easeOutQuad(frame / totalFrames);
          const currentCount = Math.round(value * progress);
          
          if (frame === totalFrames) {
            clearInterval(counter);
          }
          
          setCount(currentCount);
        }, frameDuration);
        
        return () => clearInterval(counter);
      }
    }, [isInView, value]);
    
    return (
      <div ref={counterRef} className="text-4xl md:text-5xl font-bold text-[#1865f2]">
        {count}{suffix}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-3xl font-bold text-center mb-16 text-[#0a2a66]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Why Khan Academy Works
      </motion.h2>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {features.map((feature, index) => (
          <motion.div 
            key={feature.title}
            className="bg-white rounded-xl shadow-none p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image src={feature.image} alt={feature.title} width={100} height={100} />
            <h3 className="text-xl font-bold mb-3 text-[#0a2a66]">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Statistics Section */}
      <motion.div 
        className="bg-gradient-to-r from-[#1865f2]/5 to-[#72c4bf]/10 rounded-2xl p-8 md:p-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-center mb-10 text-[#0a2a66]">Our Impact</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ValueProposition;
