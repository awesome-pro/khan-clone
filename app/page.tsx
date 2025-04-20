import React from 'react'
import Header from '@/components/header/Header'
import Hero from '@/components/sections/Hero'
import UserPath from '@/components/sections/UserPath'
import SubjectCategories from '@/components/sections/SubjectCategories'
import ValueProposition from '@/components/sections/ValueProposition'
import Testimonials from '@/components/sections/Testimonials'
import Donation from '@/components/sections/Donation'
import Join from '@/components/sections/Join'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="relative">
        <Hero />
        <UserPath />
        <SubjectCategories />
        <ValueProposition />
        <Testimonials />
        <Donation />
        <Join />
        <Footer />
      </div>
    </main>
  )
}