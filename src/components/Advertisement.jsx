import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import dodopizza from '../assets/videos/1.webm'

const cases = [
  {
    id: 1,
    title: "DODO PIZZA AD INTEGRATION",
    subtitle: "Digital Marketing Campaign",
    image: dodopizza,
    client: "Dodo Pizza",
    stats: "150% increase in engagement"
  },
  {
    id: 2,
    title: "SPOTIFY CAMPAIGN",
    subtitle: "Music Promotion",
    image: "/api/placeholder/400/800",
    client: "Spotify",
    stats: "2M+ new subscribers"
  },
  {
    id: 3,
    title: "NETFLIX SERIES PROMOTION",
    subtitle: "Content Marketing",
    image: "/api/placeholder/400/800",
    client: "Netflix",
    stats: "500K+ social shares"
  }
];

const features = [
  {
    title: "Creative and thoughtful approach",
    description: "We analyze each blogger and their audience, determine the percentage of overlap with your target audience for the required number of touches to make the ad as effective as possible.",
    color: "#FF6B6B"
  },
  {
    title: "Convenient reporting format",
    description: "Convenient reporting format for both intermediate and final results of an advertising campaign.",
    color: "#4ECDC4"
  },
  {
    title: "Thoughtful audience engagement",
    description: "Thoughtful and effective warming up of the blogger's audience for maximum engagement in advertising with your brand and product.",
    color: "#45B7D1"
  },
  {
    title: "Continuous contact",
    description: "We will ensure interaction with your target audience using all formats and tools that we will determine and agree with you: these are bloggers, digital placement, targeting by our target audience, and retargeting by look-alike audience.",
    color: "#96CEB4"
  },
  {
    title: "Strategic customer acquisition",
    description: "Providing contact with potential customers within 8-12 touches to form strong positive associations with the brand in the consumer and maximize the effectiveness of the advertising campaign.",
    color: "#4EA5D9"
  },
  {
    title: "Performance marketing",
    description: "Continuous performance marketing: control of all running processes, tracking of ongoing activities and a coordinated plan.",
    color: "#2D82B7"
  }
];

const PhoneMockup = ({ currentCase, videoRef }) => (
  <div section id="advertisement" className="relative rounded-[3rem] overflow-hidden border-8 border-gray-800 bg-gray-800 shadow-2xl" onClick={() => videoRef.current.play()}>
    <AnimatePresence mode="wait">
      <motion.div
        key={currentCase}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        className="aspect-[9/19.5] relative"
      >
        <video ref={videoRef} src={cases[currentCase].image} className="absolute inset-0 w-full h-full object-cover" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-sm font-bold mb-2">{cases[currentCase].subtitle}</h3>
          <p className="text-xs opacity-80">{cases[currentCase].stats}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </div>
);

const InfluenceLanding = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-black text-white overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated background grid */}
      <motion.div 
        style={{ 
          y: backgroundY,
          backgroundImage: 'linear-gradient(45deg, #666 1px, transparent 1px), linear-gradient(-45deg, #666 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 opacity-10"
      />

      {/* Floating particles */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      />

      <div className="container mx-auto px-4 py-10 md:py-20 relative z-10">
        {/* Main title with animated stroke */}
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center"
            style={{
              WebkitTextStroke: '2px white',
              color: 'transparent',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            INFLUENCE
          </motion.h1>
          <motion.div
            className="w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-20">
          {/* Left column - Features */}
          <div className="space-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.h3
                  className="text-xl md:text-2xl font-bold mb-3"
                  whileHover={{ x: 10 }}
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-base md:text-lg leading-relaxed text-gray-300"
                  whileHover={{ x: 20 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.description}
                </motion.p>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Right column - Phone mockup */}
          <div className="relative lg:block">
            <motion.div
              className="relative w-full max-w-[400px] mx-auto lg:absolute lg:right-0 lg:top-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <PhoneMockup currentCase={currentCase} videoRef={videoRef} />
            </motion.div>
          </div>
        </div>

        {/* Bottom case study section */}
        <motion.div 
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center md:space-x-8 text-center md:text-left">
            <motion.span 
              className="text-6xl sm:text-8xl font-bold mb-4 md:mb-0"
              animate={{ scale: isHovered ? 1.1 : 1 }}
            >
              #{cases[currentCase].id}
            </motion.span>
            <div>
              <motion.h2 
                className="text-2xl sm:text-4xl font-bold mb-2"
                animate={{ x: isHovered ? 20 : 0 }}
              >
                {cases[currentCase].title}
              </motion.h2>
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {cases[currentCase].client}
              </motion.p>
            </div>
          </div>

          <div className="flex space-x-4">
            <motion.button
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevCase}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              onClick={nextCase}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InfluenceLanding;