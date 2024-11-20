import { motion } from 'framer-motion';
import { quantum } from 'ldrs';

quantum.register();

const Loading = () => {
  return (
    <motion.div 
      className="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ rotate: 360 }}
    >
      <l-quantum 
        size="300"
        speed="1.75" 
        color="white" 
      ></l-quantum>
    </motion.div>
  );
};

export default Loading; 