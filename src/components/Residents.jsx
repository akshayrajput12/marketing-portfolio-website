'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Instagram, Twitter, Youtube, Globe, Users, ChevronDown } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import team1 from '../assets/images/teams/team 1.webp'
import team2 from '../assets/images/teams/team 2.webp'
import team3 from '../assets/images/teams/team 3.webp'
import team4 from '../assets/images/teams/team 4.webp'
import team5 from '../assets/images/teams/team 5.webp'
import team6 from '../assets/images/teams/team 6.webp'
import team7 from '../assets/images/teams/team 7.webp'
import team8 from '../assets/images/teams/team 8.webp'
import team9 from '../assets/images/teams/team 9.webp'
import team10 from '../assets/images/teams/team 10.webp'
import team11 from '../assets/images/teams/team 12.webp'
import team12 from '../assets/images/teams/team 13.webp'


const SocialStatistic = ({ platform, count }) => {
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="text-xs opacity-60 mb-1">
        {platform === 'vk' && <Globe className="w-4 h-4" />}
        {platform === 'instagram' && <Instagram className="w-4 h-4" />}
        {platform === 'tiktok' && <Twitter className="w-4 h-4" />}
        {platform === 'youtube' && <Youtube className="w-4 h-4" />}
      </div>
      <div className="text-sm font-medium">{formatNumber(count)}</div>
    </motion.div>
  )
}

const AgentCard = ({ agent, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      <div className="aspect-square overflow-hidden rounded-lg relative">
        <motion.img
          src={agent.image}
          alt={`${agent.name} ${agent.surname}`}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="text-xl font-bold mb-1"
          whileHover={{ x: 10 }}
        >
          {agent.name}
        </motion.h2>
        <motion.h3 
          className="text-lg mb-2 opacity-80"
          whileHover={{ x: 10 }}
        >
          {agent.surname}
        </motion.h3>

        <motion.div 
          className="grid grid-cols-4 gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <SocialStatistic platform="vk" count={agent.stats.vk} />
          <SocialStatistic platform="instagram" count={agent.stats.instagram} />
          <SocialStatistic platform="tiktok" count={agent.stats.tiktok} />
          <SocialStatistic platform="youtube" count={agent.stats.youtube} />
        </motion.div>
      </motion.div>

      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white text-center">
            <Users className="w-8 h-8 mx-auto mb-2" />
            <p className="text-lg font-semibold">Total Followers</p>
            <p className="text-2xl font-bold">
              {Object.values(agent.stats).reduce((a, b) => a + b, 0).toLocaleString()}
            </p>
          </div>
        </motion.div>
      )}

      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          boxShadow: isHovered
            ? '0 0 20px 10px rgba(255, 255, 255, 0.3)'
            : '0 0 0px 0px rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function Component() {
  const [visibleAgents, setVisibleAgents] = useState(6)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  const agents = [
    {
      name: "VERONIKA",
      surname: "ZOLOTOVA",
      image:team1,
      stats: { vk: 101000, instagram: 2300000, tiktok: 20600000, youtube: 52900 }
    },
    {
      name: "VITALY",
      surname: "ANDREEV",
      image: team2,
      stats: { vk: 97000, instagram: 185000, tiktok: 928000, youtube: 133000 }
    },
    {
      name: "MIKHAIL",
      surname: "MEDALIN",
      image: team3,
      stats: { vk: 142000, instagram: 4900000, tiktok: 3800000, youtube: 0 }
    },
    {
      name: "MIKHAIL",
      surname: "MEDALIN",
      image: team4,
      stats: { vk: 142000, instagram: 4900000, tiktok: 3800000, youtube: 0 }
    },
    {
      name: "MIKHAIL",
      surname: "MEDALIN",
      image: team5,
      stats: { vk: 142000, instagram: 4900000, tiktok: 3800000, youtube: 0 }
    },
    {
      name: "MIKHAIL",
      surname: "MEDALIN",
      image: team6,
      stats: { vk: 142000, instagram: 4900000, tiktok: 3800000, youtube: 0 }
    },
    {
      name: "MIKHAIL",
      surname: "MEDALIN",
      image: team7,
      stats: { vk: 142000, instagram: 4900000, tiktok: 3800000, youtube: 0 }
    },
    {
      name: "MIKHAIL",
      surname: "MEDALIN",
      image: team8,
      stats: { vk: 142000, instagram: 4900000, tiktok: 3800000, youtube: 0 }
    },
    {
      name: "MIKHAIL",
      surname: "MEDALIN",
      image: team9,
      stats: { vk: 142000, instagram: 4900000, tiktok: 3800000, youtube: 0 }
    },
    {
      name: "MIKHAIL",
      surname: "MEDALIN",
      image: team10,
      stats: { vk: 142000, instagram: 4900000, tiktok: 3800000, youtube: 0 }
    },
    {
      name: "MIKHAIL",
      surname: "MEDALIN",
      image: team11,
      stats: { vk: 142000, instagram: 4900000, tiktok: 3800000, youtube: 0 }
    },
    {
      name: "MIKHAIL",
      surname: "MEDALIN",
      image: team12,
      stats: { vk: 142000, instagram: 4900000, tiktok: 3800000, youtube: 0 }
    },
    // Add 10 more agents with similar structure
    ...Array(10).fill().map((_, i) => ({
      name: `AGENT`,
      surname: `${i + 4}`,
      image: team4,
      stats: { 
        vk: Math.floor(Math.random() * 500000), 
        instagram: Math.floor(Math.random() * 5000000), 
        tiktok: Math.floor(Math.random() * 10000000), 
        youtube: Math.floor(Math.random() * 1000000) 
      }
    }))
  ]

  const loadMore = () => {
    setVisibleAgents(prevVisible => Math.min(prevVisible + 3, agents.length))
  }

  return (
    <section className="min-h-screen bg-black text-white py-10 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter mb-10 sm:mb-20 text-center"
          style={{
            WebkitTextStroke: '2px white',
            color: 'transparent'
          }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          RAGENTS
        </motion.h1>

        <motion.div
          ref={ref}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {agents.slice(0, visibleAgents).map((agent, index) => (
            <AgentCard key={index} agent={agent} index={index} />
          ))}
        </motion.div>

        {visibleAgents < agents.length && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center"
              whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
            >
              Load More <ChevronDown className="ml-2" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}