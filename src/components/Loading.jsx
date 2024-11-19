import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div 
      className="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="loader-content"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity
        }}
      >
        LOADING
      </motion.div>
    </motion.div>
  );
};

export default Loading; 