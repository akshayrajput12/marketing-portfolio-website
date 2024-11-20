'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, Star, Trophy } from 'lucide-react'
import { useRef } from 'react'
import project1 from '../assets/images/projects/merc-jpg.webp'
import project2 from '../assets/images/projects/alfa-jpg-e1694747173328.webp'
import project3 from '../assets/images/projects/room-jpg-e1694747063529.webp'
import project4 from '../assets/images/projects/bantley-jpg-e1694747011442.webp'
import project5 from '../assets/images/projects/davidoff-jpg-e1694747097761.webp'
import project6 from '../assets/images/projects/beluga-jpg-e1694747132112.webp'


export default function Component() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  const projects = [
    {
      title: "Mercedes-Benz Innovation",
      description: "Luxury automotive exhibition design with immersive lighting and interactive displays",
      icon: <Award className="w-12 h-12" />,
      stats: "10K+ Visitors",
      client: "Mercedes-Benz",
      year: "2023",
      image: project1
    },
    {
      title: "Alfa Bank Digital",
      description: "Revolutionary banking kiosk system with seamless user experience",
      icon: <Star className="w-12 h-12" />,
      stats: "300% Engagement",
      client: "Alfa Bank",
      year: "2023",
      image: project2
    },
    {
      title: "Beluga Experience",
      description: "Premium vodka brand activation with artistic installations",
      icon: <Trophy className="w-12 h-12" />,
      stats: "25+ Markets",
      client: "Beluga",
      year: "2023",
      image: project6
    },
    {
      title: "Bantley",
      description: "Premium vodka brand activation with artistic installations",
      icon: <Trophy className="w-12 h-12" />,
      stats: "25+ Markets",
      client: "Bantley",
      year: "2023",
      image: project4
    },
    {
      title: "Room",
      description: "Premium vodka brand activation with artistic installations",
      icon: <Trophy className="w-12 h-12" />,
      stats: "25+ Markets",
      client: "Room",
      year: "2022",
      image: project3
    },
    {
      title: "Davidoff",
      description: "Premium vodka brand activation with artistic installations",
      icon: <Trophy className="w-12 h-12" />,
      stats: "25+ Markets",
      client: "Davidoff",
      year: "2023",
      image: project3
    }
  ]

  return (
    <section ref={containerRef} id="special-projects" className="relative min-h-screen py-20 bg-black text-white overflow-hidden">
         <motion.div style={{ y }} className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative mb-12 md:mb-32"
        >
          <motion.h2
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold tracking-tighter leading-none text-center"
          >
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              SPECIAL
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block ml-2 md:ml-4"
              style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
            >
              PROJECT
            </motion.span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <motion.div 
                className="relative aspect-[3/4] overflow-hidden"
                whileHover={{ scale: 1.5, zIndex: 50 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/80 p-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-white relative inline-block"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0"
                        whileHover={{ opacity: 0.2, scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                        style={{ filter: 'blur(10px)' }}
                      />
                      {project.icon}
                    </motion.div>
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Client: {project.client}</p>
                      <p className="text-sm text-gray-400">Year: {project.year}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-2xl font-bold">{project.stats}</div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium"
                    >
                      View Project
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}