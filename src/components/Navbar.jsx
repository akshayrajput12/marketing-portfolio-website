import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Facebook, Instagram, MessageCircle, Phone } from 'lucide-react'

const navLinks = [
  "ABOUT US",
  "MEDIA",
  "RESIDENTS",
  "ADVERTISEMENT",
  "SPECIAL PROJECTS",
  "PRODUCTION",
  "CONTACTS"
]

export default function WillstarNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false) // Close mobile menu after clicking
    }
  }

  const menuVariants = {
    closed: { opacity: 0, y: '-100%' },
    open: { opacity: 1, y: 0 }
  }

  const linkVariants = {
    closed: { opacity: 0, x: -50 },
    open: i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 }
    })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className={`fixed w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="relative z-50">
            <motion.h1 
              className="text-2xl font-bold text-white italic tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              G star
            </motion.h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                className="text-white/90 hover:text-white text-sm tracking-wider transition-colors cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link}
              </motion.a>
            ))}
            <div className="flex items-center space-x-4 ml-8">
              <SocialIcon Icon={Phone} />
              <SocialIcon Icon={MessageCircle} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Facebook} />
            </div>
          </div>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 lg:hidden"
          >
            <motion.div 
              className="grid grid-cols-2 gap-1"
              whileHover={{ rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  initial={false}
                  animate={isOpen ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 lg:hidden"
          >
            <div className="container mx-auto px-6 py-24 h-full flex flex-col">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-7xl font-bold text-white mb-16"
              >
                menu
              </motion.h2>
              
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                    className="text-3xl text-white/90 hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto flex space-x-6">
                <SocialIcon Icon={Phone} size={24} />
                <SocialIcon Icon={MessageCircle} size={24} />
                <SocialIcon Icon={Instagram} size={24} />
                <SocialIcon Icon={Facebook} size={24} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function SocialIcon({ Icon, size = 20 }) {
  return (
    <motion.a
      href="#"
      className="text-white/80 hover:text-white transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={size} />
    </motion.a>
  )
}