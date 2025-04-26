import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '../ui/badge';
import Image from 'next/image';

const Teachers = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Images */}
          <div className="relative">
            <Image
              src="https://cdn.kastatic.org/images/lohp/faces_collage_2@2x.png"
              alt="Teacher"
              className="w-full h-auto object-cover"
              width={400}
              height={300}
            />
          </div>
          
          {/* Right side - Text content */}
          <div>
            <Badge className='mb-6 text-green-600 bg-green-100 rounded-full'>TEACHERS</Badge>
            
            <blockquote className="mb-8">
              <p className="text-4xl font-serif leading-tight mb-4">
                "I'm finally able to truly differentiate my classroom. This has been priceless for my students' engagement."
              </p>
              <footer className="text-sm text-gray-600">
                <p>UDAYA LAKSHMI PALAPALA / Middle school Coordinator / Hyderabad, Telangana</p>
              </footer>
            </blockquote>
            
            <div className="mb-8">
              <p className="text-base text-gray-700 mb-2">
                We empower teachers to support their entire classroom.
              </p>
              <p className="text-base text-gray-700">
                90% of US teachers who have used Khan Academy have found us effective.
              </p>
            </div>
            
            <Button size={'lg'} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md">
              Teachers, start here
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
