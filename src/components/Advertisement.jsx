import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaBullseye, FaRegChartBar, FaRocket, FaCogs } from 'react-icons/fa';

const Advertisement = () => {
  const features = [
    {
      icon: <FaChartLine />,
      title: "Creative Approach",
      description: "We analyze each blogger and their audience, determining overlap percentage with your target audience for maximum ad effectiveness."
    },
    {
      icon: <FaRegChartBar />,
      title: "Performance Reporting",
      description: "Convenient reporting format for both intermediate and final results of advertising campaigns."
    },
    {
      icon: <FaUsers />,
      title: "Audience Engagement",
      description: "Thoughtful and effective warming up of the blogger's audience for maximum engagement with your brand and product."
    },
    {
      icon: <FaBullseye />,
      title: "Continuous Contact",
      description: "Interaction with your target audience using all formats: bloggers, digital placement, targeting, and retargeting."
    },
    {
      icon: <FaRocket />,
      title: "Customer Acquisition",
      description: "Providing contact with potential customers within 8-12 touches to form strong positive brand associations."
    },
    {
      icon: <FaCogs />,
      title: "Performance Marketing",
      description: "Control of all running processes, tracking of ongoing activities and a coordinated plan."
    }
  ];

  return (
    <section className="min-h-screen bg-dark py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="h-full w-full"
          style={{
            backgroundImage: 'linear-gradient(45deg, #066aab 1px, transparent 1px), linear-gradient(-45deg, #066aab 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-monument text-7xl md:text-9xl text-light mb-8 tracking-wider">
            WILLSTAR
          </h1>
          <h2 className="font-monument text-4xl md:text-6xl text-light tracking-wide">
            INFLUENCE
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl text-primary mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-space-grotesk text-2xl font-bold text-light mb-4">
                  {feature.title}
                </h3>
                <p className="font-outfit text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500K+", label: "Audience Reach" },
            { number: "95%", label: "Success Rate" },
            { number: "50+", label: "Active Campaigns" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <h3 className="font-monument text-4xl text-primary mb-2">
                {stat.number}
              </h3>
              <p className="font-outfit text-light/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Advertisement; 