import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    "About us", "Media", "Residents", "Advertisement", 
    "Special Projects", "Production", "Services", "Contacts"
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-light"
        >
          Portfolio
        </motion.div>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-light">
            Menu
          </button>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase().replace(' ', '-')}
              smooth={true}
              duration={500}
              className="relative text-light transition duration-300 hover:text-primary"
              onClick={() => window.scrollTo(0, 0)}
            >
              {link}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="fixed top-0 left-0 w-full h-full bg-dark/90 flex flex-col items-center justify-center"
        >
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-light">
            Close
          </button>
          {navLinks.map((link) => (
            <motion.div
              key={link}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.1 * navLinks.indexOf(link) }}
              className="text-2xl text-light mb-4 transition duration-300 hover:text-primary"
            >
              <Link
                to={link.toLowerCase().replace(' ', '-')}
                smooth={true}
                duration={500}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsOpen(false);
                }}
              >
                {link}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar; 