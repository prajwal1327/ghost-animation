import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBanner from './components/MarqueeBanner'
import Services from './components/Services'
import SelectedWork from './components/SelectedWork'
import About from './components/About'
import Process from './components/Process'
import CtaBand from './components/CtaBand'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Preloader */}
      <div className={`preloader${loaded ? ' done' : ''}`}>
        <div className="preloader__logo">
          <span>Ghost</span>Animation
        </div>
        <div className="preloader__bar">
          <div className="preloader__fill" />
        </div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <Services />
        <SelectedWork />
        <About />
        <Process />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
