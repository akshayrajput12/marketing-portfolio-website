import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { FaArrowRight, FaPlay, FaRocket } from 'react-icons/fa';
import video from '../assets/videos/background.webm';

const Hero = () => {
  const letterAnimation = {
    initial: { y: 400 },
    animate: { y: 0 },
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <ReactPlayer
          url={video}
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      {/* Animated Shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-64 h-64 border border-primary/20 rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="overflow-hidden">
          <motion.h1
            initial="initial"
            animate="animate"
            className="font-orbitron text-7xl md:text-9xl font-bold text-light mb-8 flex flex-wrap"
          >
            {["C", "R", "E", "A", "T", "I", "V", "E"].map((letter, index) => (
              <motion.span
                key={index}
                {...letterAnimation}
                transition={{ delay: index * 0.1 }}
                className="inline-block hover:text-primary transition-colors duration-300"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-light/80 font-rajdhani max-w-xl leading-relaxed"
        >
          Transforming ideas into extraordinary digital experiences through innovative design and cutting-edge technology
        </motion.p>

        <div className="flex gap-6 mt-12">
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-primary text-light font-orbitron inline-flex items-center gap-3 group"
          >
            Explore Work
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 border border-primary/50 text-light font-orbitron inline-flex items-center gap-3 group hover:bg-primary/10"
          >
            Watch Reel
            <FaPlay className="group-hover:scale-110 transition-transform" />
          </motion.button>
        </div>

        {/* Floating Icons */}
        <div className="absolute bottom-20 right-20">
          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-primary text-4xl"
          >
            <FaRocket />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-light/80"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-center"
        >
          <p className="font-rajdhani text-sm mb-2">Scroll Down</p>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-12 bg-primary/50 mx-auto rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 