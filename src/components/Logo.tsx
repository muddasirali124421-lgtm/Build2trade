import { motion } from 'framer-motion'
import logoImg from '../assets/logo.png'

interface LogoProps {
  className?: string
  showText?: boolean // Kept for interface compatibility but we use the physical logo component
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <motion.div
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={logoImg}
        alt="Build2Trade"
        className="h-10 md:h-14 w-auto object-contain drop-shadow-sm"
      />
    </motion.div>
  )
}

export default Logo
