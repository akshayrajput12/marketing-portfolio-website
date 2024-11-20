import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView, useAnimation } from 'framer-motion'
import { Rocket, Users, Zap, CircleDot, CheckCircle, MoveRight } from 'lucide-react'

export default function AboutUs() {
  const sectionRef = useRef(null)
  const aboutUsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const controls = useAnimation()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  const scaleSpring = useSpring(1, { stiffness: 100, damping: 30 })

  useEffect(() => {
    if (isInView) {
      scaleSpring.set(1.1)
      controls.start("visible")
    } else {
      scaleSpring.set(1)
      controls.start("hidden")
    }
  }, [isInView, scaleSpring, controls])

  const advantages = [
    { icon: Rocket, title: 'Easy start', subtitle: 'newcomers to the media field' },
    { icon: Users, title: 'high', subtitle: 'Media Rating' },
    { icon: Zap, title: 'Bys Troe', subtitle: 'Promotion and development' },
    { icon: CircleDot, title: 'Powerful', subtitle: 'PR campaign' },
    { icon: CheckCircle, title: 'Found', subtitle: 'content creation resources' },
    { icon: MoveRight, title: 'You move', subtitle: 'on large advertisers' }
  ]

  const letters = " ".split("")

  return (
    <div className="relative">
      {/* Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
        `}
      </style>

      {/* Rainbow Effect */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 z-50" />
      
      {/* Combined Hero and Advantages Section with Background */}
      <section 
        ref={sectionRef}
        id="about-us"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://willstar.ru/wp-content/themes/willstar/assets/images/aboutus-section/color-madness.webp')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        
        {/* Vertical "ABOUT US" Text */}
        <motion.div 
          ref={aboutUsRef}
          className="fixed left-8 top-1/2 -translate-y-1/2 rotate-90 origin-left text-8xl font-bold tracking-widest text-white pointer-events-none"
          style={{ opacity: isInView ? opacity : 0 }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="inline-block hover:text-purple-400 transition-colors duration-300 cursor-default"
              style={{ fontFamily: 'Roboto, sans-serif', fontStyle: 'normal' }} // Using Roboto font
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white mb-20"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            style={{ scale: scaleSpring }}
          >
            G Star
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We close the need for shooting and editing the highest-quality turnkey content
          </motion.p>
        </motion.div>

        {/* Advantages Content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="relative z-10 w-full"
        >
          <motion.h2 
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-center mb-20 tracking-wider text-white"
            style={{
              WebkitTextStroke: '1px white',
              WebkitTextFillColor: 'transparent'
            }}
          >
            ADVANTAGES
          </motion.h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
              {advantages.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 }
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-16 h-16 text-purple-400 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-lg leading-relaxed mb-20 text-white"
          >
            <p>
              Our team has gained tremendous experience in all types of advertising for more than 20 years on the market 
              and has carried out more than a thousand successful advertising campaigns. Our possibilities in marketing 
              are endless - we work in the 360 format and cover all the needs of our clients, because in our arsenal there are: 
              Outdoor advertising, Digital advertising, Offline events, Influence marketing, PR and our own video production, 
              organizing turnkey filming in the shortest possible time.
            </p>
          </motion.div>

          <div className="flex justify-between items-center flex-wrap gap-8">
            {['INFLUENCE MARKETING', 'PR', 'PRODUCING', 'PRODUCTION'].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, color: '#a855f7', fontStyle: 'italic' }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, color: '#a855f7' }}
                className="text-2xl font-bold tracking-wider text-white cursor-pointer relative group"
              >
                {service}
                <motion.div
                  className="absolute -inset-0.5 bg-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  layoutId="serviceBg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white">
                We create the most successful advertising campaigns and find the most profitable advertising contracts
              </h3>
              <p className="text-gray-400">
                We develop and bring bloggers and artists to new levels of popularity in our production center
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div 
                className="relative h-[400px] overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://willstar.ru/wp-content/themes/willstar/assets/images/aboutus-section/color-madness.webp"
                  alt="Artistic visual"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-0"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}