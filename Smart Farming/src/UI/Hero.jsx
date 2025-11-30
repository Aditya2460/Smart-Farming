
import { motion, AnimatePresence } from "framer-motion";

const Hero=()=>{
    return <> 
<section className="text-center py-16 bg-green-100">
    <motion.h2
      className="text-4xl font-bold text-green-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Discover How Crops Grow
    </motion.h2>
    <p className="mt-4 text-gray-700 max-w-xl mx-auto">
      Explore detailed information about different crops, their growing
      conditions, and farming techniques.
    </p>
  </section>
  </>
}
export default Hero;
