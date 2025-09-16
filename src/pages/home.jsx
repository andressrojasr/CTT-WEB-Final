import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Section from '../components/section'
import Stats from '../components/stats'
import CourseSection from '../components/CourseSection'
import Footer from '../components/footer'

export default function home() {
  return (
    <>
        <body className='w-full'>    
            <Header />
            <Nav />
            <Hero />
            <CourseSection />
            <Section />
            <Stats />
            <Footer />
        </body>
    </>
  )
}
