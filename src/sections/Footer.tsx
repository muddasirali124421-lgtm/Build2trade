import { motion } from 'framer-motion'
import { ArrowUp, Mail, FileText, Facebook, Youtube } from 'lucide-react'
import Logo from '../components/Logo'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Giveaway', href: '#' },
  { name: 'Contact Us', href: '#contact' },
]

const legalLinks = [
  { name: 'Terms Of Use', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
]

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative pt-20 pb-8 bg-white border-t border-brand-blue/10">
      <div className="section-padding max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Left Side: Logo & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <Logo />

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-brand-navy">
                <Mail className="w-5 h-5 text-brand-blue" />
                <a href="mailto:admin@build2trade.com.au" className="hover:text-brand-blue transition-colors">
                  admin@build2trade.com.au
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-brand-navy">
                <FileText className="w-5 h-5 text-brand-blue" />
                <span>ABN: 82 688 987 948</span>
              </div>
            </div>
          </motion.div>

          {/* Middle Column 1: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-brand-navy font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-gray-dark hover:text-brand-blue font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Middle Column 2: Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-brand-navy font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-gray-dark hover:text-brand-blue font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-brand-navy font-bold mb-6 text-lg">Subscribe To Newsletter</h4>
            <p className="text-sm text-brand-gray-dark mb-4">
              Stay updated with the latest news, updates, and exclusive offers.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 rounded-lg border border-brand-blue/20 bg-brand-gray-light text-brand-navy placeholder-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-brand-blue to-brand-blue-light text-white font-semibold hover:shadow-lg hover:shadow-brand-blue/30 transition-all transform hover:-translate-y-0.5"
              >
                Sign up
              </button>
            </form>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-blue/10 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-brand-gray-dark text-center md:text-left"
          >
            © All Rights Reserved 2026 Designed And Developed by Graphica Pro Artistry
          </motion.p>

          <div className="flex items-center space-x-4">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-brand-blue/20 flex items-center justify-center text-brand-gray-dark hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-brand-blue/20 flex items-center justify-center text-brand-gray-dark hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <Youtube className="w-5 h-5" />
            </motion.a>

            <div className="h-6 w-px bg-brand-blue/20 mx-2 hidden sm:block"></div>

            <motion.button
              onClick={scrollToTop}
              className="hidden sm:flex group items-center space-x-2 text-sm text-brand-gray-dark hover:text-brand-blue transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 rounded-full border border-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <ArrowUp className="w-5 h-5" />
              </div>
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
