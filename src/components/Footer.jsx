import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaLinkedin />, url: "#" },
    { icon: <FaInstagram />, url: "#" }
  ];

  return (
    <footer className="bg-dark border-t border-gray-800">
      <div className="container mx-auto px-4 py-20">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="font-syncopate text-3xl font-bold">LOGO</h3>
            <p className="font-outfit text-gray-400 leading-relaxed">
              Creating exceptional digital experiences through innovative design and technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="font-space-grotesk text-xl font-bold">Quick Links</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Projects', 'Contact'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="font-space-grotesk text-xl font-bold">Newsletter</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-dark border border-gray-800 rounded-lg px-4 py-3 focus:border-primary transition-colors outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary"
              >
                →
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-outfit text-gray-400">
            © {currentYear} Your Company. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                whileHover={{ scale: 1.2, color: '#066aab' }}
                className="text-xl text-gray-400 hover:text-primary transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 