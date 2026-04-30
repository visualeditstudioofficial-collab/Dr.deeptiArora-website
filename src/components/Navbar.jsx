import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Navbar({ doctor }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Contact strip */}
      <div className="hidden md:block px-4 sm:px-8 py-1 bg-white/70 backdrop-blur border-b border-white/60">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-end gap-5 text-xs sm:text-sm text-slate-600">
          <a href={`tel:${doctor.phone}`} className="inline-flex items-center gap-2 hover:text-teal-700 transition-colors">
            <Phone size={14} className="text-teal-600" />
            <span className="font-medium">{doctor.phone}</span>
          </a>
          <a
            href={`mailto:${doctor.email}`}
            className="hidden sm:inline-flex items-center gap-2 hover:text-teal-700 transition-colors"
          >
            <Mail size={14} className="text-teal-600" />
            <span className="font-medium">{doctor.email}</span>
          </a>
          <div className="hidden lg:inline-flex items-center gap-2">
            <MapPin size={14} className="text-teal-600" />
            <span className="font-medium truncate max-w-[34ch]">{doctor.address}</span>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <header className="px-4 sm:px-8 py-2 bg-white/60 backdrop-blur border-b border-white/40">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.button
            type="button"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2"
            aria-label="Go to top"
          >
            <img
              src="/assets/clinic.png"
              alt="Clinic logo"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-contain shadow-sm"
              loading="eager"
            />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
          >
            {['About', 'Services', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-teal-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button onClick={() => scrollTo('appointment')} className="btn-primary text-sm px-5 py-2">
              Book Now
            </button>
          </motion.div>

          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => scrollTo('appointment')}
            className="md:hidden btn-primary text-sm px-4 py-2"
          >
            Book Now
          </motion.button>
        </nav>
      </header>
    </div>
  )
}
