import { useEffect, useState } from 'react'
import Cursor from './components/Cursor'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBanner from './components/MarqueeBanner'
import SelectedWork from './components/SelectedWork'
import Services from './components/Services'
import Statement from './components/Statement'
import About from './components/About'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  // Optional: smooth scroll with CSS (Lenis is an NPM dep — we'll use lightweight native approach)
  useEffect(() => {
    if (!loaded) return
    // Re-initialise cursor after load so it picks up dynamic elements
    window.dispatchEvent(new Event('resize'))
  }, [loaded])

  return (
    <>
      <Cursor />
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease 0.2s',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <MarqueeBanner />
          <SelectedWork />
          <Statement />
          <Services />
          <About />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
