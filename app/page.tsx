import React from 'react'
import Header from '@/components/header/Header'
import Hero from '@/components/sections/Hero'
import UserPath from '@/components/sections/UserPath'
import SubjectCategories from '@/components/sections/SubjectCategories'
import ValueProposition from '@/components/sections/ValueProposition'
import Donation from '@/components/sections/Donation'
import Join from '@/components/sections/Join'
import Footer from '@/components/sections/Footer'
import Sponsors from '@/components/sections/Sponsors'
import Anjali from '@/components/sections/anjali'
import Teachers from '@/components/sections/Teachers'
import LearnAnything from '@/components/sections/anything'
import FAQ from '@/components/sections/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="relative">
        <Hero />
        <UserPath />
        <SubjectCategories />
        <ValueProposition />
        <Teachers />
        <LearnAnything />
        <Anjali />
        <Donation />
        <Join />
        <Sponsors />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}