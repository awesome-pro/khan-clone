"use client";

import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const faqItems = [
  {
    question: "Is Khan Academy really free?",
    answer: "Yes! Khan Academy is 100% free. We're a nonprofit organization with the mission of providing a free, world-class education to anyone, anywhere. All of our content, resources, and tools are available to everyone without a subscription or any fees."
  },
  {
    question: "How does Khan Academy's 30-day free trial work?",
    answer: "Our premium subscription offers additional features like personalized learning paths, advanced progress tracking, and ad-free experience. You can try it for 30 days without any charge. We collect billing information during registration, but you won't be charged until the trial ends. You can cancel anytime before 24 hours of trial expiration to avoid being billed."
  },
  {
    question: "How can teachers use Khan Academy?",
    answer: "Teachers can use Khan Academy to assign practice exercises, videos, and articles to students. Our teacher dashboard provides detailed progress reports to help identify where students need help. We offer comprehensive curriculum aligned to various standards, making it easy to supplement classroom instruction or implement a flipped classroom model."
  },
  {
    question: "Can Khan Academy replace my school curriculum?",
    answer: "Khan Academy is designed to supplement traditional education, not replace it. While our content covers most standard curricula from kindergarten through early college, we believe in the value of classroom learning, peer interaction, and teacher guidance. Many educators use Khan Academy alongside their existing curriculum to enhance learning outcomes."
  },
  {
    question: "How do I track my child's progress on Khan Academy?",
    answer: "Parents can create a parent account and link it to their child's account. This allows you to monitor progress, view completed activities, and see areas where your child might need additional support. You can also set goals and receive weekly progress reports via email."
  },
  {
    question: "Does Khan Academy offer content in languages other than English?",
    answer: "Yes! We're committed to global education. Khan Academy is available in over 40 languages, with varying levels of content translation. Our most comprehensive translations include Spanish, Portuguese, French, and Turkish, with more languages being added regularly."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">FREQUENTLY ASKED QUESTIONS</Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Got questions? We've got answers.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Khan Academy and how we can help you or your child succeed.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-blue-600 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-1 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a href="/help" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            Visit our Help Center
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
