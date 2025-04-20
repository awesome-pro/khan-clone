"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Search, ChevronDown, User, Command } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { SearchDialog } from '@/components/search/SearchDialog';

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
        <div className="flex items-center justify-between h-16 px-2 sm:px-4">
          <div className="flex items-center gap-2 sm:gap-6">
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-[#0a2a66] hover:bg-gray-100 h-8 w-8 sm:h-9 sm:w-9">
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
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
              <Image 
                src="/khan.png" 
                alt="Khan Academy Logo" 
                width={200} 
                height={40}
                className="w-[120px] sm:w-[160px] md:w-[200px] h-auto"
              />
            </Link>
            
            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-[#0a2a66] flex items-center gap-1 hover:bg-gray-100 transition-colors"
                  >
                    Explore <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[600px] p-0 shadow-lg rounded-xl border-none" align="start">
                  <div className="overflow-hidden rounded-xl">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#1865f2]/10 to-[#1aa260]/10 p-4 border-b">
                      <h3 className="text-lg font-bold text-[#0a2a66]">Explore Khan Academy</h3>
                      <p className="text-sm text-gray-600 mt-1">Find the perfect course for your learning journey</p>
                    </div>
                    
                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      {/* Categories */}
                      <div className="col-span-2 p-4 grid grid-cols-2 gap-6 overflow-scroll">
                        {subjectCategories.map((category) => (
                          <div key={category.name} className="space-y-3">
                            <div className="flex items-center gap-2">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${category.name === 'Math' ? 'bg-blue-100 text-blue-700' : category.name === 'Science' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>
                                {category.name === 'Math' ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                  </svg>
                                ) : category.name === 'Science' ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                  </svg>
                                ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                  </svg>
                                )}
                              </div>
                              <h3 className="font-bold text-[#0a2a66]">{category.name}</h3>
                            </div>
                            <div className="space-y-1 pl-10">
                              {category.subcategories.map((subcategory) => (
                                <Link
                                  key={subcategory.name}
                                  href={subcategory.href}
                                  className="block text-sm text-gray-600 hover:text-[#1865f2] hover:bg-blue-50 rounded px-2 py-1.5 transition-colors"
                                >
                                  {subcategory.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Featured content */}
                      <div className="bg-gray-50 p-4 border-l">
                        <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wider mb-3">Featured</h4>
                        <div className="space-y-3">
                          <Link href="/featured/sat" className="block p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
                            <div className="font-medium text-[#0a2a66]">SAT Prep</div>
                            <p className="text-xs text-gray-500 mt-1">Get ready for the SAT with our comprehensive prep course</p>
                          </Link>
                          <Link href="/featured/coding" className="block p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
                            <div className="font-medium text-[#0a2a66]">Intro to Coding</div>
                            <p className="text-xs text-gray-500 mt-1">Learn the basics of programming with our beginner-friendly course</p>
                          </Link>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Link href="/courses" className="text-sm text-[#1865f2] hover:underline flex items-center gap-1">
                            View all courses
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <SearchDialog>
              <Button
                variant="outline"
                className="relative h-9 w-full justify-start rounded-full text-[#0a2a66] border-gray-200 bg-white/80 hover:bg-white text-sm shadow-sm sm:pr-12 md:w-40 lg:w-64 transition-all"
                onClick={() => {}}
              >
                <Search className="mr-2 h-4 w-4 shrink-0 text-gray-500" />
                <span className="hidden lg:inline-flex">Search Khan Academy...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-gray-100 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </SearchDialog>
          </div>
          
          {/* Right Side Controls */}
          <div className="flex items-center gap-1 sm:gap-3">
            <div className="hidden md:block">
              <Link href="/login" className='text-[#0a2a66] hover:text-[#1865f2] transition-colors'>
                Log in
              </Link>
            </div>
            
            <Button className="bg-[#1865f2] hover:bg-[#0d4fd6] text-white hidden md:flex">
              Sign up
            </Button>
            
            <Button className="bg-[#1aa260] hover:bg-[#158f53] text-white text-xs sm:text-sm px-2 sm:px-4">
              Donate
            </Button>
            
            <div className="ml-1 md:hidden">
              <SearchDialog>
                <Button variant="ghost" size="icon" className="text-[#0a2a66] hover:bg-gray-100 h-8 w-8 sm:h-9 sm:w-9">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </SearchDialog>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}