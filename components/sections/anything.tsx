import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '../ui/badge';
import Image from 'next/image';

const LearnAnything = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Right side - Text content */}
          <div className='relative'>
            <Badge className='mb-6 text-blue-600 bg-blue-100 rounded-full'>LEARNERS</Badge>
            
            <div className="mb-8">
              <h1 className="text-3xl leading-tight mb-4">You can learn anything.</h1>
              <p className="text-base text-gray-700 mb-2">Build a deep, solid understanding in math, science, grammar, history, SAT®, and more.</p>
            </div>
            
            <Button size={'lg'} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
              Learners, start here
            </Button>
          </div>
          
          {/* Left side - Images */}
          <div className="relative">
            <Image
              src="https://cdn.kastatic.org/images/lohp/laptop_collage@2x.png"
              alt="Teacher"
              className="w-full h-auto object-cover"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnAnything;
