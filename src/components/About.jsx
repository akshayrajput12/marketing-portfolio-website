import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [isMounted, setIsMounted] = useState(false);
  const parallaxRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const advantages = [
    { icon: '🚀', title: "Easy start", description: "Perfect for newcomers. We provide all the tools needed to get started." },
    { icon: '⭐', title: "High Quality", description: "Top media ratings ensure your content stands out." },
    { icon: '📢', title: "Bys Troe", description: "Effective promotion strategies tailored to your needs." },
    { icon: '👥', title: "Resourceful", description: "Expertise in content creation and distribution." },
  ];

  const services = ['INFLUENCE MARKETING', 'PR', 'PRODUCING', 'PRODUCTION'];

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scaleSpring = useSpring(1, springConfig);

  return (
    <section className="relative min-h-screen bg-[#10131B] overflow-hidden py-20 font-sans">
      {isMounted && (
        <motion.div 
          ref={parallaxRef}
          className="absolute inset-0 opacity-30"
          style={{ y }}
        >
          <img
            src="https://willstar.ru/wp-content/themes/willstar/assets/images/aboutus-section/color-madness.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1 
            className="text-7xl sm:text-[120px] font-bold text-white leading-none tracking-tighter mb-4"
            whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}
            transition={{ type: "spring", ...springConfig }}
          >
            ABOUT US
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            We provide high-quality turnkey content with seamless shooting and editing.
          </motion.p>
        </motion.div>

        <div className="relative mb-32">
          <motion.div
            className="absolute -top-40 left-0 w-full text-[100px] sm:text-[200px] font-bold text-white/5 pointer-events-none select-none overflow-hidden whitespace-nowrap"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            advantages advantages advantages
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-white/5 rounded-xl"
                  whileHover={{ scale: 1.1, opacity: 0.7 }}
                  transition={{ ...springConfig }}
                />
                <div className="relative bg-white/10 border border-white/20 p-4 rounded-xl hover:border-white/30 transition-colors">
                  <motion.div 
                    className="text-4xl mb-2"
                    whileHover={{ scale: 1.2, rotate: 5, textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
                    transition={{ type: "spring", ...springConfig }}
                  >
                    {advantage.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold text-white mb-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {advantage.title}
                  </motion.h3>
                  <motion.p 
                    className="text-md sm:text-lg text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {advantage.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-[1fr,2fr] gap-12 items-center"
        >
          <div className="space-y-6">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white"
              whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}
              transition={{ type: "spring", ...springConfig }}
            >
              Our Services
            </motion.h2>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="px-4 sm:px-6 py-2 bg-white/10 rounded-full text-white border border-white/20 cursor-pointer text-sm sm:text-base"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
                  transition={{ type: "spring", ...springConfig }}
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", ...springConfig }}
          >
            <img
              src="/placeholder.svg"
              alt="Production Services"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-white mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                AkShay
              </motion.h3>
              <motion.p 
                className="text-lg sm:text-xl text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                production
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default AboutPage;