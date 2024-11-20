'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import case1 from '../assets/images/cases/2-jpg.webp'
import case2 from '../assets/images/cases/3-jpg.webp'
import case3 from '../assets/images/cases/4-jpg.webp'
import case4 from '../assets/images/cases/5-jpg.webp'

const artists = [
  { id: 1, name: "KIRILL KOLESNIKOV", title: "Comedy Club" },
  { id: 2, name: "ANNA PETROVA", title: "Pop Singer" },
  { id: 3, name: "MIKHAIL IVANOV", title: "TV Host" },
  { id: 4, name: "AKSHAY SINGH", title: "TV" },
]

const images = [case1, case2, case3, case4]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredText, setHoveredText] = useState('')

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + artists.length) % artists.length)
  }

  return (
    <div section id="media" className="min-h-screen bg-black text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-10 md:py-24 relative"
      >
        {/* Animated main heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-1 md:mb-2"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block"
            >
              MEDIA
            </motion.span>
          </h1>
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-1 md:gap-2 items-center">
          {/* Left column with text content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Extensive experience in the Media allows us to correctly analyze market and create an individual plan for the
              implementation of the artist. Team professionals draws up a content plan, promotion strategy, calculates PR
              campaigns and reputation development. For our clients, we organize red carpet walks, Appearing on TV,
              participating in shows with millions of views, an implementation plan for every artist, blogger or expert.
            </p>

            {/* Artist section with hover effect and animations */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="pt-6 md:pt-8 border-t border-gray-800"
              >
                <motion.div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl md:text-4xl font-bold">#{artists[currentIndex].id}</span>
                    <div>
                      <motion.h2 
                        className="text-xl md:text-2xl font-bold"
                        onHoverStart={() => setHoveredText(artists[currentIndex].name.split(' ')[0])}
                        onHoverEnd={() => setHoveredText('')}
                        animate={{
                          textShadow: hoveredText === artists[currentIndex].name.split(' ')[0] ? "0 0 8px rgba(255,255,255,0.7)" : "none"
                        }}
                      >
                        {artists[currentIndex].name.split(' ')[0]}
                      </motion.h2>
                      <motion.h2 
                        className="text-xl md:text-2xl font-bold"
                        onHoverStart={() => setHoveredText(artists[currentIndex].name.split(' ')[1])}
                        onHoverEnd={() => setHoveredText('')}
                        animate={{
                          textShadow: hoveredText === artists[currentIndex].name.split(' ')[1] ? "0 0 8px rgba(255,255,255,0.7)" : "none"
                        }}
                      >
                        {artists[currentIndex].name.split(' ')[1]}
                      </motion.h2>
                    </div>
                  </div>
                  <motion.p 
                    className="text-lg md:text-xl text-gray-400"
                    onHoverStart={() => setHoveredText(artists[currentIndex].title)}
                    onHoverEnd={() => setHoveredText('')}
                    animate={{
                      textShadow: hoveredText === artists[currentIndex].title ? "0 0 8px rgba(255,255,255,0.7)" : "none"
                    }}
                  >
                    {artists[currentIndex].title}
                  </motion.p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right column with image slideshow */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9"
              >
                <motion.img
                  src={images[currentIndex]}
                  alt={`Event featuring ${artists[currentIndex].name}`}
                  className="w-full h-full object-cover max-w-[80%] max-h-[80%]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation buttons */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.9 }}
            className="p-2 md:p-4 bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.9 }}
            className="p-2 md:p-4 bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}