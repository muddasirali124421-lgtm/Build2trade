import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import About from './sections/About'
import Features from './sections/Features'
import Benefits from './sections/Benefits'
import Testimonials from './sections/Testimonials'
import CTABanner from './sections/CTABanner'
import InviteForm from './sections/InviteForm'
import Newsletter from './sections/Newsletter'
import Footer from './sections/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-brand-black"
        >
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <About />
            <Features />
            <Benefits />
            <Testimonials />
            <CTABanner />
            <InviteForm />
            <Newsletter />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
