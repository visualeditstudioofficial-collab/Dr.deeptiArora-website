import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Dot } from 'lucide-react'

const struggles = [
  'You’ve tried dieting—but the weight keeps coming back',
  'Your sugar levels fluctuate despite taking medicines',
  'You’ve been told to “just lose weight”—but no one showed you how',
  'You feel confused about what to eat and what to avoid',
  'Reports improve for a while… then everything slips again',
  'You’re tired of trying things that don’t work long-term'
]

const approachPoints = [
  'Insulin resistance and metabolic patterns',
  'Everyday food habits that silently spike sugar',
  'Lifestyle factors affecting weight and metabolism',
  'Sleep and stress—often overlooked, but important',
  'Medications are used with a scientific and evidence-based approach — based on your individual requirement'
]

export default function StartingPoint() {
  return (
    <section id="starting-point" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900">
            If this sounds like you, you’re not alone…
          </h2>

          {/* GRID */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">

            {/* LEFT CARD */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-slate-900">
                Common Struggles
              </h3>

              <ul className="mt-6 space-y-4">
                {struggles.map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <Dot className="text-teal-600 mt-1" size={20} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-slate-600">
                This is exactly where most patients begin.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-slate-900">
                A Better Approach
              </h3>

              <p className="mt-4 text-slate-600">
                Instead of generic plans, we focus on the root cause.
              </p>

              <ul className="mt-6 space-y-4">
                {approachPoints.map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="text-teal-600 mt-1" size={20} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-semibold text-slate-800">
                No confusion. No extremes. Just what works for you.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}