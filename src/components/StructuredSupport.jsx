import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

const benefits = [
  'Improving sugar control',
  'Sustainable weight loss',
  'Building habits that actually last'
]

const differentiators = [
  'Regular guidance and monitoring',
  'Personalized adjustments based on your progress',
  'Support to stay consistent—not just motivated',
  'Focus on long-term results, not quick fixes'
]

export default function StructuredSupport() {
  return (
    <section id="program" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="badge bg-teal-100 text-teal-700 text-xs uppercase tracking-wider mb-3 inline-block">
              ✦ 12-Week Program
            </span>
            <h2 className="section-heading">For Those Who Need More Structured Support</h2>
          </div>

          {/* Main Content Card */}
          <div className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 border-2 border-teal-200 rounded-3xl p-8 sm:p-12 shadow-lg">
            
            {/* Introduction */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed text-center mb-10">
              For those patients who feel stuck despite trying multiple approaches, we offer a 12-week structured program focused on:
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm"
                >
                  <CheckCircle size={24} className="text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* What makes it different */}
            <div className="bg-white rounded-2xl p-8 mb-10 shadow-sm">
              <h3 className="font-display font-bold text-slate-800 text-2xl mb-6 text-center">
                What makes it different
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Goal Statement */}
            <div className="text-center mb-8">
              <p className="text-slate-800 text-lg sm:text-xl font-semibold leading-relaxed">
                The goal is to help you move from <span className="text-teal-600">trying things…</span> to actually <span className="text-teal-600">seeing results</span>.
              </p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                Start with a consultation
                <ArrowRight size={20} />
              </a>
              <p className="text-slate-500 text-sm mt-3">
                We'll guide you on the right next step
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
