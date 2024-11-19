'use client'

import { motion, useScroll, useTransform, useAnimation } from 'framer-motion'
import { Music, Video, Users, Share2, CalendarDays, TrendingUp, Code } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const GlowingCard = ({ children, className, glowColor = "bg-white/20" }) => {
  return (
    <motion.div 
      className="relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 ${glowColor}`}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
      />
      <div className={`relative ${className}`}>
        {children}
      </div>
    </motion.div>
  )
}

export default function Component() {
  const containerRef = useRef(null)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const services = [
    {
      title: "Blogger Production",
      description: "Music label, creative 360, photo and video production",
      icon: <Music className="w-8 h-8" />,
      gridClass: "md:col-span-2 row-span-1",
      bgClass: "bg-gradient-to-br from-blue-600/30 to-blue-900/30",
    },
    {
      title: "Production",
      description: "Script development, selection of actors and crew, selection of locations and video editing. A range of services for the organization of production and shooting of advertising videos, corporate films, music videos, TV shows and other video content.",
      icon: <Video className="w-8 h-8" />,
      gridClass: "md:col-span-1 row-span-2",
      bgClass: "bg-gradient-to-br from-purple-600/30 to-purple-900/30",
    },
    {
      title: "Influencer Marketing",
      description: "Selection and management of influencers, creation of strategy and creativity",
      icon: <Users className="w-8 h-8" />,
      gridClass: "md:col-span-1 row-span-1",
      bgClass: "bg-gradient-to-br from-pink-600/30 to-pink-900/30",
    },
    {
      title: "SMM",
      description: "Social media management with full implementation of an individual content strategy",
      icon: <Share2 className="w-8 h-8" />,
      gridClass: "md:col-span-1 row-span-1",
      bgClass: "bg-gradient-to-br from-green-600/30 to-green-900/30",
    },
    {
      title: "Offline Events",
      description: "Organization of events of any format and scale for a product or advertising campaign. Development of an idea and concept suitable for the message of the brand, coordination with government agencies, manufacture, installation and dismantling of structures and decorations of any size. Provide a report with photos, videos, and other consistent metrics.",
      icon: <CalendarDays className="w-8 h-8" />,
      gridClass: "md:col-span-2 row-span-1",
      bgClass: "bg-gradient-to-br from-yellow-600/30 to-yellow-900/30",
    },
    {
      title: "Commercial production",
      description: "Account analysis, building a personal development strategy, creating content and 360 creatives, maintaining a grid plan, PR and organizing participation in specialized events.",
      icon: <TrendingUp className="w-8 h-8" />,
      gridClass: "md:col-span-1 row-span-1",
      bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
    },
    {
      title: "Digital",
      description: "Development of landing pages, websites, logos, mobile applications, pitch-deck",
      icon: <Code className="w-8 h-8" />,
      gridClass: "md:col-span-1 row-span-1",
      bgClass: "bg-gradient-to-br from-indigo-600/30 to-indigo-900/30",
    },
  ]

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  const titleAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05
      }
    }
  }

  const letterAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }

  return (
    <section ref={containerRef} className="relative min-h-screen py-20 bg-black text-white overflow-hidden">
      <motion.div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 relative pl-24" ref={ref}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={itemAnimation}
            className="absolute left-0 top-0 text-xl font-light tracking-widest"
            style={{ writingMode: 'vertical-lr' }}
          >
            SERVICES
          </motion.div>

          <motion.h2
            className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 flex flex-wrap"
            variants={titleAnimation}
            initial="hidden"
            animate={controls}
          >
            {"PRODUCTION".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                className="hover:text-primary transition-colors duration-300 hover:scale-110 inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            variants={itemAnimation}
            initial="hidden"
            animate={controls}
            className="text-gray-300 text-xl max-w-2xl"
          >
            Among our works are music videos, short series, full-length films, viral TikTok videos and bright advertising.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 pl-24"
          variants={containerAnimation}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${service.gridClass}`}
              variants={itemAnimation}
            >
              <GlowingCard
                className={`${service.bgClass} h-full rounded-lg backdrop-blur-sm 
                border border-white/10 hover:border-white/20 transition-all duration-500
                group cursor-pointer overflow-hidden`}
              >
                <div className="relative h-full p-6 flex flex-col">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="text-white relative inline-block mb-4"
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold mb-3"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300 flex-grow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.button 
                    className="mt-4 text-sm font-semibold flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    order
                    <motion.span 
                      className="ml-2 group-hover:ml-3 transition-all duration-300"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}