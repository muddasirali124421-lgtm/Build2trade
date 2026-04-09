import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Users, Shield, TrendingUp, Building2, HardHat } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  const floatingCards = [
    { icon: Building2, label: '10K+ Builders', color: 'from-brand-blue to-brand-blue-light' },
    { icon: HardHat, label: 'Quality Tradies', color: 'from-brand-gold to-brand-gold-light' },
    { icon: Zap, label: 'Instant Match', color: 'from-brand-blue to-brand-gold' },
    { icon: Shield, label: 'Verified Pros', color: 'from-brand-gold to-brand-blue' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-32 left-10 w-20 h-20 rounded-full bg-brand-blue/10"
        animate={{ y: [0, -20, 0], rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-48 right-20 w-16 h-16 rounded-lg bg-brand-gold/20 rotate-45"
        animate={{ y: [0, 15, 0], rotate: [45, 135, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 rounded-full border-4 border-brand-blue/20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-padding relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                <span className="text-sm font-medium text-brand-blue">Australia's #1 Construction Network</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="heading-xl mb-6 text-brand-navy"
              >
                Connecting{' '}
                <span className="gradient-text">Builders</span>{' '}
                to Quality{' '}
                <span className="text-brand-gold">Trades</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-body text-lg mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Australia's premier digital platform connecting builders with verified, 
                quality tradespeople. Streamline your projects, save time, and build with confidence.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <motion.button
                  className="btn-primary flex items-center justify-center space-x-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  className="btn-secondary flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector('#features')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-brand-gray-dark"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span>Free to Join</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span>Verified Tradies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span>35K+ Members</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - App Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-blue/10 to-brand-gold/10 blur-3xl" />
                
                {/* Main Phone/App Mockup */}
                <motion.div
                  className="relative glass rounded-3xl p-6 h-full border-brand-blue/20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Mock Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-blue-light" />
                      <span className="text-sm font-semibold text-brand-navy">Build2Trade</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-brand-blue" />
                      <div className="w-2 h-2 rounded-full bg-brand-gray" />
                      <div className="w-2 h-2 rounded-full bg-brand-gray" />
                    </div>
                  </div>

                  {/* Mock Content */}
                  <div className="space-y-4">
                    <div className="glass-card p-4 rounded-xl border-brand-blue/10">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-light" />
                        <div>
                          <div className="text-sm font-medium text-brand-navy">Elite Construction</div>
                          <div className="text-xs text-brand-gray">Looking for electricians</div>
                        </div>
                      </div>
                      <div className="text-xs text-brand-gray">Posted 2 hours ago • Sydney, NSW</div>
                    </div>

                    <div className="glass-card p-4 rounded-xl border-brand-blue/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-brand-navy">New Quote Request</span>
                        <span className="text-xs text-brand-gold font-semibold">$15,000</span>
                      </div>
                      <div className="text-xs text-brand-gray mb-2">Residential Project • 3 quotes received</div>
                      <div className="w-full h-2 bg-brand-gray-light rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-brand-blue to-brand-gold rounded-full" />
                      </div>
                    </div>

                    <div className="glass-card p-4 rounded-xl border-brand-blue/10">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-brand-blue" />
                        <span className="text-sm font-medium text-brand-navy">Weekly Stats</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-2 rounded-lg bg-brand-gray-light/50">
                          <div className="text-lg font-bold text-brand-blue">12</div>
                          <div className="text-xs text-brand-gray">New Leads</div>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-brand-gray-light/50">
                          <div className="text-lg font-bold text-brand-gold">$45K</div>
                          <div className="text-xs text-brand-gray">Quotes Sent</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Cards */}
                {floatingCards.map((card, index) => (
                  <motion.div
                    key={card.label}
                    className="absolute glass px-4 py-2 rounded-xl flex items-center space-x-2 border-brand-blue/10"
                    style={{
                      top: index === 0 ? '10%' : index === 1 ? '60%' : index === 2 ? '30%' : '80%',
                      left: index === 0 ? '-10%' : index === 1 ? '-5%' : index === 2 ? '85%' : '80%',
                    }}
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 3, -3, 0]
                    }}
                    transition={{ 
                      duration: 4 + index, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                      <card.icon className="w-4 h-4 text-brand-navy" />
                    </div>
                    <span className="text-sm font-medium text-brand-navy whitespace-nowrap">{card.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
