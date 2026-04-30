import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Star, Shield, Award, Phone, Mail, MapPin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  })
}

const badgeIcons = [Star, Shield, Award]

export default function Hero({ doctor }) {
  const [imgLoaded, setImgLoaded] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mesh" id="hero">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Contact strip (above navbar) */}
      <div className="absolute top-0 left-0 right-0 z-30 px-4 sm:px-8 py-2 bg-white/70 backdrop-blur border-b border-white/60">
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
      <header className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-8 py-5 mt-10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <img
              src="/assets/clinic.png"
              alt="Clinic logo"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-contain ring-1 ring-white/70 shadow-sm"
              loading="eager"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
          >
            {['About', 'Services', 'Testimonials', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-teal-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo('appointment')}
              className="btn-primary text-sm px-5 py-2"
            >
              Book Now
            </button>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => scrollTo('appointment')}
            className="md:hidden btn-primary text-sm px-4 py-2"
          >
            Book Now
          </motion.button>
        </nav>
      </header>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Doctor image – stacked above on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md shrink-0 order-first lg:order-last"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-400/30 to-cyan-400/20 blur-xl scale-105" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/10 border-4 border-white">
                <img
                  src={doctor.photo}
                  alt={`${doctor.prefix} ${doctor.name}`}
                  loading="eager"
                  className={`w-full object-cover object-top transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ aspectRatio: '4/5', maxHeight: '480px' }}
                  onLoad={() => setImgLoaded(true)}
                />
                {!imgLoaded && (
                  <div className="absolute inset-0 bg-teal-50 animate-pulse" style={{ aspectRatio: '4/5' }} />
                )}
              </div>
              {/* Floating credential badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-teal-100"
              >
                <p className="text-sm font-bold text-teal-700 whitespace-pre-line">{doctor.doctorSpecialization}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Program copy */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-xl mx-auto lg:mx-0"
            >
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 bg-clip-text text-transparent drop-shadow-sm">
                  Struggling with Diabetes or Weight Despite Trying Everything?
                </span>
              </h1>
              <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
                A structured, doctor-led approach to help you improve sugar levels, lose weight, and regain control of your health.
              </p>
              <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed">
                10+ years of helping patients improve sugar control, lose weight, and reduce long-term medication dependence.
              </p>
            </motion.div>

            {/* Badges */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {doctor.badges.map((badge, i) => {
                const Icon = badgeIcons[i]
                const valueText = badge.value || badge.label
                const labelText = badge.value ? badge.label : null
                return (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-sm border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center">
                      <Icon size={16} className="text-teal-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-display font-bold text-xl text-teal-700 leading-none">{valueText}</p>
                      {labelText && <p className="text-xs text-slate-400 mt-0.5">{labelText}</p>}
                    </div>
                  </div>
                )
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollTo('appointment')}
                className="btn-primary w-full sm:w-auto text-center text-base px-8 py-4"
              >
                📅 Book Consultation
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="btn-secondary w-full sm:w-auto text-center text-base px-8 py-4"
              >
                Our Services →
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('details')}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-teal-600 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  )
}
