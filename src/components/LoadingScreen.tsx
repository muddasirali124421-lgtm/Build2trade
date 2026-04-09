import { motion } from 'framer-motion'
import Logo from './Logo'

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white bg-gradient-to-b from-white to-blue-50/30"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center">
        {/* Glow behind loader */}
        <div className="absolute inset-0 top-[-20px] rounded-full blur-[60px] w-64 h-64 bg-brand-blue/10 pointer-events-none" />

        <div className="relative flex items-center justify-center p-8">
          {/* Outer spinner ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-brand-blue border-b-brand-gold border-opacity-80"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ filter: "drop-shadow(0 0 10px rgba(30, 99, 181, 0.2))" }}
          />
          
          {/* Inner dots/spinner */}
          <motion.div
            className="absolute inset-3 rounded-full border-[2px] border-transparent border-r-brand-gold border-l-brand-blue border-opacity-50"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* The Spinning Logo */}
          <motion.div
            className="w-24 h-24 flex items-center justify-center drop-shadow-xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            {/* If the exact uploaded raster file was intended, it could be <img src="/logo.png" /> */}
            {/* Here we use our scalable Logo SVG component modified for the new corporate theme */}
            <div className="scale-75">
              <Logo />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-8 flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-brand-navy font-semibold tracking-widest uppercase text-sm">
            Build2Trade
          </span>
          <motion.div className="flex gap-1 ml-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full bg-brand-gold"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
