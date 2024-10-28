import React from 'react'
import Header from '../components/Header'
import TopNav from '../components/TopNav'
import Skillss from '../components/Skillss'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Header />
      <TopNav />
      <Skillss />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
