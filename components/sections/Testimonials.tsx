"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonials = () => {
  const teacherTestimonials = [
    {
      quote: "I'm finally able to truly differentiate my classroom. This has been priceless for my students' engagement.",
      name: "Sarah Johnson",
      role: "High School Math Teacher",
      image: "https://cdn.shopify.com/s/files/1/0259/7876/5396/files/Sal_Khan_Academy.jpg?v=1625681059", // This will be a fallback if image doesn't exist
    },
    {
      quote: "Khan Academy has transformed how I teach. My students are more engaged and take ownership of their learning.",
      name: "Michael Rodriguez",
      role: "Middle School Science Teacher",
      image: "https://cdn.shopify.com/s/files/1/0259/7876/5396/files/Sal_Khan_Academy.jpg?v=1625681059",
    },
  ];

  const studentTestimonials = [
    {
      quote: "When I was a child, I used to fear mathematics. But now, I am in love with mathematics because of Khan Academy.",
      name: "Priya Sharma",
      age: "16 years old",
      image: "https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740",
    },
  ];

  // Fallback image URL for when the local images don't exist
  const fallbackImageUrl = "https://placehold.co/150x150/e2e8f0/1e293b?text=Profile";

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-3xl font-bold text-center mb-16 text-[#0a2a66]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Success Stories
      </motion.h2>

      {/* Teacher Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {teacherTestimonials.map((testimonial, index) => (
          <motion.div 
            key={testimonial.name}
            className="bg-white rounded-xl shadow-md overflow-hidden relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1865f2] to-[#72c4bf]"></div>
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#1865f2]/10">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = fallbackImageUrl;
                  }}
                />
              </div>
              <div>
                <div className="text-4xl text-[#1865f2]/20 font-serif mb-2">"</div>
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <div className="font-medium text-[#0a2a66]">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-4 right-4 opacity-10">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1865f2" strokeWidth="2"/>
                <path d="M8 14C8 14 9 16 12 16C15 16 16 14 16 14" stroke="#1865f2" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 9H9.01" stroke="#1865f2" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 9H15.01" stroke="#1865f2" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Student Testimonial - Full Width */}
      <motion.div 
        className="relative bg-gradient-to-r from-[#1865f2] to-[#0a2a66] rounded-xl shadow-lg overflow-hidden text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-white/30">
            <img 
              src={studentTestimonials[0].image}
              alt={studentTestimonials[0].name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = fallbackImageUrl;
              }}
            />
          </div>
          
          <div className="text-center md:text-left">
            <div className="text-5xl font-serif mb-4 opacity-50">"</div>
            <p className="text-xl md:text-2xl mb-6 font-medium leading-relaxed">
              {studentTestimonials[0].quote}
            </p>
            <div className="font-medium">{studentTestimonials[0].name}</div>
            <div className="text-sm opacity-80">{studentTestimonials[0].age}</div>
          </div>
        </div>
        
        {/* Parallax effect decorative elements */}
        <motion.div 
          className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-white/10"
          animate={{ 
            y: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-10 left-1/2 w-12 h-12 rounded-full bg-white/10"
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
