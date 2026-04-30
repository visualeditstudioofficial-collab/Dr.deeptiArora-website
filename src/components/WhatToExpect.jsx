import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Search, ClipboardCheck, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    number: '1',
    title: 'We understand your situation',
    description: 'A focused discussion on your sugar levels, weight, lifestyle, and what hasn\'t worked so far.'
  },
  {
    icon: Search,
    number: '2',
    title: 'We identify what\'s not working',
    description: 'Simple clarity on why things are stuck or fluctuating.'
  },
  {
    icon: ClipboardCheck,
    number: '3',
    title: 'You leave with a clear plan',
    description: 'Practical next steps you can actually follow.'
  }
]

export default function WhatToExpect({ whatsappNumber }) {
  const waUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like to start a consultation.")}`
    : null

  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge bg-teal-100 text-teal-700 text-xs uppercase tracking-wider mb-3 inline-block">
            ✦ Your Journey
          </span>
          <h2 className="section-heading">What to Expect</h2>
          <p className="section-subtitle mx-auto text-center">
            A simple, clear process to get you the answers you need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="card p-8 text-center relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-teal-600" />
                  </div>
                  <h3 className="font-display font-bold text-slate-800 text-xl mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8">
                    <svg viewBox="0 0 24 24" fill="none" className="text-teal-600">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-2xl p-8">
            <CheckCircle size={48} className="text-teal-600 mx-auto mb-4" />
            <p className="text-slate-800 text-lg font-semibold leading-relaxed">
              By the end of this consultation, you'll have <span className="text-teal-600">clarity—not confusion</span>.
            </p>
            {waUrl && (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center mt-6 px-8 py-4 text-base"
              >
                Start with a Consultation -&gt;
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
