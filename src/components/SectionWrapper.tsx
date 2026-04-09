import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
}

const SectionWrapper = ({ children, className = '', id }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`py-20 lg:py-32 ${className}`}
    >
      <div className="section-padding max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  )
}

export default SectionWrapper
