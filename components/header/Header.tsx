"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Search, ChevronDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';

// Subject categories for the dropdown menu
const subjectCategories = [
  {
    name: 'Math',
    subcategories: [
      { name: 'Math (NCERT)', href: '/math-ncert' },
      { name: 'Math (Bridge)', href: '/math-bridge' },
      { name: 'Math (Telangana)', href: '/math-telangana' },
    ]
  },
  {
    name: 'Science',
    subcategories: [
      { name: 'Science (Bridge)', href: '/science-bridge' },
      { name: 'Science (Telangana)', href: '/science-telangana' },
    ]
  },
  {
    name: 'All Boards',
    subcategories: [
      { name: 'Class 1', href: '/class-1' },
      { name: 'Class 2', href: '/class-2' },
      { name: 'Class 3', href: '/class-3' },
      { name: 'Class 4', href: '/class-4' },
      { name: 'Class 5', href: '/class-5' },
      { name: 'Class 6', href: '/class-6' },
      { name: 'Class 7', href: '/class-7' },
      { name: 'Class 8', href: '/class-8' },
      { name: 'Class 9', href: '/class-9' },
      { name: 'Class 10', href: '/class-10' },
      { name: 'Class 11', href: '/class-11' },
      { name: 'Class 12', href: '/class-12' },
    ]
  },
];

export default function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md text-white shadow-md">
      {/* Top Navigation Bar */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-6">
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-[#1c3a76]">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[80%] sm:w-[350px]">
                <div className="flex flex-col h-full py-6">
                  <div className="mb-8 flex items-center">
                    <Link href="/" className="flex items-center">
                      <span className="text-xl font-bold text-[#1865f2]">Khan Academy</span>
                    </Link>
                  </div>
                  
                  <nav className="flex flex-col space-y-1">
                    {subjectCategories.map((category) => (
                      <div key={category.name} className="py-2">
                        <div className="font-medium text-lg mb-2">{category.name}</div>
                        <div className="pl-4 flex flex-col gap-2">
                          {category.subcategories.map((subcategory) => (
                            <Link
                              key={subcategory.name}
                              href={subcategory.href}
                              className="text-gray-700 hover:text-[#1865f2] py-1"
                            >
                              {subcategory.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </nav>
                  
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <div className="flex flex-col gap-3">
                      <Button variant="outline" className="w-full justify-center">
                        Log in
                      </Button>
                      <Button className="w-full bg-[#1865f2] hover:bg-[#0a2a66] text-white">
                        Sign up
                      </Button>
                      <Button variant="outline" className="w-full bg-[#1aa260] hover:bg-[#158f53] text-white border-[#1aa260]">
                        Donate
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            {/* Khan Academy Logo */}
            <Link href="/" className="flex items-center">
              <motion.div 
                className="text-xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Khan Academy
              </motion.div>
            </Link>
            
            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-[#1c3a76] flex items-center gap-1"
                  >
                    Explore <ChevronDown className="w-4 h-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-0" align="start">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {subjectCategories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <h3 className="font-medium text-[#0a2a66]">{category.name}</h3>
                        <div className="space-y-1">
                          {category.subcategories.map((subcategory) => (
                            <Link
                              key={subcategory.name}
                              href={subcategory.href}
                              className="block text-sm text-gray-600 hover:text-[#1865f2] py-1"
                            >
                              {subcategory.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <motion.div 
              className={`flex items-center bg-[#1c3a76] rounded-full overflow-hidden transition-all ${isSearchExpanded ? 'w-64' : 'w-40'}`}
              animate={{ width: isSearchExpanded ? 280 : 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center w-full px-3 py-2">
                <Search className="w-4 h-4 text-gray-300 mr-2 flex-shrink-0" />
                <Input 
                  type="text" 
                  placeholder="Search" 
                  className="border-none bg-transparent text-white placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm h-6 p-0"
                  onFocus={() => setIsSearchExpanded(true)}
                  onBlur={() => setIsSearchExpanded(false)}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button variant="ghost" className="text-white hover:bg-[#1c3a76]">
                Log in
              </Button>
            </div>
            
            <Button className="bg-[#1865f2] hover:bg-[#0d4fd6] text-white hidden md:flex">
              Sign up
            </Button>
            
            <Button className="bg-[#1aa260] hover:bg-[#158f53] text-white">
              Donate
            </Button>
            
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#1c3a76] md:hidden">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}