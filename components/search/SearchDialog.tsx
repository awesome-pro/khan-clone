"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search, Loader2 } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/components/search/SearchContext";

// Mock search results data
const mockSearchResults = [
  {
    type: "Course",
    title: "Algebra Basics",
    description: "Learn the basics of algebra, including variables, expressions, and equations.",
    href: "/math/algebra-basics",
    category: "Math"
  },
  {
    type: "Course",
    title: "Biology Fundamentals",
    description: "Explore the fundamentals of biology, from cells to ecosystems.",
    href: "/science/biology-fundamentals",
    category: "Science"
  },
  {
    type: "Lesson",
    title: "Introduction to Fractions",
    description: "Learn what fractions are and how to use them.",
    href: "/math/fractions/intro",
    category: "Math"
  },
  {
    type: "Article",
    title: "How to Study Effectively",
    description: "Tips and strategies for effective studying and learning.",
    href: "/resources/study-effectively",
    category: "Resources"
  },
  {
    type: "Video",
    title: "Understanding Photosynthesis",
    description: "A comprehensive explanation of how plants convert light into energy.",
    href: "/science/biology/photosynthesis",
    category: "Science"
  },
  {
    type: "Exercise",
    title: "Quadratic Equations Practice",
    description: "Practice solving quadratic equations with these interactive exercises.",
    href: "/math/algebra/quadratic-equations/practice",
    category: "Math"
  },
];

// Icons for different result types
const typeIcons = {
  Course: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Lesson: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  Article: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  Video: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  Exercise: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
};

// Category colors
const categoryColors = {
  Math: "bg-blue-100 text-blue-800",
  Science: "bg-green-100 text-green-800",
  Resources: "bg-purple-100 text-purple-800",
};

export function SearchDialog() {
  const { isOpen, setIsOpen } = useSearch();
  const [query, setQuery] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [results, setResults] = React.useState(mockSearchResults);
  const commandRef = React.useRef<HTMLDivElement>(null);
  
  // Reset query when dialog closes
  React.useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);
  
  // Filter results based on search query
  React.useEffect(() => {
    if (!query) {
      setResults(mockSearchResults);
      return;
    }
    
    setIsSearching(true);
    
    // Simulate search delay
    const timer = setTimeout(() => {
      const filtered = mockSearchResults.filter(
        item => 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsSearching(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [query]);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden border-none shadow-xl rounded-xl">
        <DialogHeader className="px-4 pt-4 pb-0">
          <DialogTitle className="sr-only">Search Khan Academy</DialogTitle>
        </DialogHeader>
        <CommandPrimitive ref={commandRef} className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-white">
          <div className="flex items-center border-b px-3 py-4">
            <Search className="mr-2 h-4 w-4 shrink-0 text-[#1865f2]" />
            <CommandPrimitive.Input
              className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search Khan Academy..."
              value={query}
              onValueChange={setQuery}
              autoFocus
            />
            <div className="hidden sm:flex items-center gap-1 text-xs text-gray-500">
              <kbd className="rounded border bg-gray-100 px-1.5 py-0.5 font-mono">⌘</kbd>
              <span>+</span>
              <kbd className="rounded border bg-gray-100 px-1.5 py-0.5 font-mono">K</kbd>
            </div>
          </div>
          <div className="max-h-[60vh] md:max-h-[50vh] overflow-y-auto">
            {isSearching ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-[#1865f2]" />
                <p className="text-sm text-gray-500 mt-2">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <CommandPrimitive.List className="max-h-[500px] overflow-y-auto p-2">
                {results.map((result, index) => (
                  <CommandPrimitive.Item
                    key={index}
                    value={result.title}
                    className="flex flex-col px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors"
                    onSelect={() => {
                      window.location.href = result.href;
                      setIsOpen(false);
                    }}
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#1865f2]/10 text-[#1865f2]">
                          {typeIcons[result.type as keyof typeof typeIcons]}
                        </span>
                        <span className="font-medium">{result.title}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[result.category as keyof typeof categoryColors]}`}>
                        {result.category}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600 pl-10">{result.description}</div>
                    <div className="mt-1 text-xs text-gray-400 pl-10 flex items-center gap-1">
                      <span>{result.type}</span>
                      <span className="inline-block w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>Khan Academy</span>
                    </div>
                  </CommandPrimitive.Item>
                ))}
              </CommandPrimitive.List>
            ) : (
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <div className="text-gray-600 font-medium">No results found</div>
                <p className="text-sm text-gray-500 mt-2">Try searching for something else</p>
              </div>
            )}
          </div>
          <div className="border-t p-3 text-xs text-gray-500">
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              <span>Press</span>
              <kbd className="rounded border bg-gray-100 px-1.5 py-0.5 font-mono">↑</kbd>
              <kbd className="rounded border bg-gray-100 px-1.5 py-0.5 font-mono">↓</kbd>
              <span>to navigate,</span>
              <kbd className="rounded border bg-gray-100 px-1.5 py-0.5 font-mono">Enter</kbd>
              <span>to select, and</span>
              <kbd className="rounded border bg-gray-100 px-1.5 py-0.5 font-mono">Esc</kbd>
              <span>to close</span>
            </div>
          </div>
        </CommandPrimitive>
      </DialogContent>
    </Dialog>
  );
}

export function SearchButton({ className }: { className?: string }) {
  const { toggleSearch } = useSearch();
  
  return (
    <Button
      variant="outline"
      className={cn(
        "relative h-9 w-full justify-start rounded-full bg-white/80 hover:bg-white text-sm text-[#0a2a66] border-gray-200 shadow-sm transition-all sm:pr-12 md:w-40 lg:w-64",
        className
      )}
      onClick={toggleSearch}
    >
      <Search className="mr-2 h-4 w-4 shrink-0 text-gray-500" />
      <span className="hidden lg:inline-flex">Search Khan Academy...</span>
      <span className="inline-flex lg:hidden">Search...</span>
      <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-gray-100 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
}