"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const SubjectCategories = () => {
  const [activeCategory, setActiveCategory] = useState('math-ncert');

  const categories = [
    {
      id: 'math',
      name: 'Math',
      subcategories: [
        { id: 'math-ncert', name: 'Math (NCERT)' },
        { id: 'math-bridge', name: 'Math (Bridge)' },
        { id: 'math-telangana', name: 'Math (Telangana)' },
      ]
    },
    {
      id: 'science',
      name: 'Science',
      subcategories: [
        { id: 'science-bridge', name: 'Science (Bridge)' },
        { id: 'science-telangana', name: 'Science (Telangana)' },
      ]
    },
    {
      id: 'all-boards',
      name: 'All Boards',
      subcategories: []
    },
  ];

  const grades = [
    { id: 'class-1', name: 'Class 1' },
    { id: 'class-2', name: 'Class 2' },
    { id: 'class-3', name: 'Class 3' },
    { id: 'class-4', name: 'Class 4' },
    { id: 'class-5', name: 'Class 5' },
    { id: 'class-6', name: 'Class 6' },
    { id: 'class-7', name: 'Class 7' },
    { id: 'class-8', name: 'Class 8' },
    { id: 'class-9', name: 'Class 9' },
    { id: 'class-10', name: 'Class 10' },
    { id: 'class-11', name: 'Class 11' },
    { id: 'class-12', name: 'Class 12' },
  ];

  // Define the Subject type
  type Subject = {
    name: string;
    icon: string;
  };

  // Define the SubjectsMap type with specific keys
  type SubjectsMap = {
    [key in 'math-ncert' | 'math-bridge' | 'math-telangana' | 'science-bridge' | 'science-telangana']: Subject[];
  };

  const subjects: SubjectsMap = {
    'math-ncert': [
      { name: 'Numbers and Operations', icon: '➗' },
      { name: 'Algebra', icon: '📊' },
      { name: 'Geometry', icon: '📐' },
      { name: 'Measurement', icon: '📏' },
      { name: 'Data Analysis', icon: '📈' },
    ],
    'math-bridge': [
      { name: 'Arithmetic', icon: '🔢' },
      { name: 'Pre-Algebra', icon: '🧮' },
      { name: 'Algebra Basics', icon: '📝' },
      { name: 'Trigonometry', icon: '📚' },
    ],
    'math-telangana': [
      { name: 'Number System', icon: '🔢' },
      { name: 'Algebra', icon: '📊' },
      { name: 'Geometry', icon: '📐' },
      { name: 'Statistics', icon: '📊' },
    ],
    'science-bridge': [
      { name: 'Physics', icon: '⚛️' },
      { name: 'Chemistry', icon: '🧪' },
      { name: 'Biology', icon: '🧬' },
      { name: 'Earth Science', icon: '🌍' },
    ],
    'science-telangana': [
      { name: 'Physical Sciences', icon: '⚗️' },
      { name: 'Life Sciences', icon: '🌱' },
      { name: 'Environmental Science', icon: '🌳' },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-[#0a2a66]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Explore our subjects
      </motion.h2>

      <div className="mb-12">
        <div className="flex overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex space-x-2">
            {categories.flatMap(category => 
              category.subcategories.length > 0 
                ? category.subcategories.map(sub => (
                    <motion.button
                      key={sub.id}
                      className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        activeCategory === sub.id 
                          ? 'bg-[#1865f2] text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveCategory(sub.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {sub.name}
                    </motion.button>
                  ))
                : (
                    <motion.button
                      key={category.id}
                      className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        activeCategory === category.id 
                          ? 'bg-[#1865f2] text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category.name}
                    </motion.button>
                  )
            )}
          </div>
        </div>
      </div>

      {activeCategory === 'all-boards' ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {grades.map((grade) => (
            <motion.div
              key={grade.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-[#0a2a66] mb-2">{grade.name}</h3>
                <p className="text-gray-500 text-sm">All subjects</p>
                <div className="mt-4 flex justify-end">
                  <ChevronRight className="h-5 w-5 text-[#1865f2]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-medium text-[#0a2a66] mb-4">
                {categories.find(c => c.subcategories.some(s => s.id === activeCategory))?.name || 'Subjects'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subjects[activeCategory as keyof SubjectsMap]?.map((subject: Subject, index: number) => (
                  <motion.div
                    key={subject.name}
                    className="bg-gray-50 rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#1865f2]/10 flex items-center justify-center text-xl">
                      {subject.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#0a2a66]">{subject.name}</h4>
                      <p className="text-xs text-gray-500">Multiple lessons</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md overflow-hidden">
              <AccordionItem value="grades" className="border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  <span className="text-lg font-medium text-[#0a2a66]">Available for all grades</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {grades.map((grade) => (
                      <motion.div
                        key={grade.id}
                        className="bg-gray-50 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="font-medium text-[#0a2a66]">{grade.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectCategories;
