import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Shield, Activity, Heart, Target } from 'lucide-react'

const cards = [
  {
    icon: TrendingUp,
    title: 'Uncontrolled Blood Sugar',
    description: "Struggling with fluctuating sugar levels despite medication? We help identify what's actually causing the instability and how to correct it.",
    color: 'bg-rose-50 border-rose-200 text-rose-600',
    bgColor: 'bg-rose-50'
  },
  {
    icon: Target,
    title: 'Weight That Won\'t Come Down',
    description: "If you've tried dieting but weight keeps returning, we focus on sustainable, practical approaches that actually work for your body.",
    color: 'bg-blue-50 border-blue-200 text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Shield,
    title: 'Pre-Diabetes & Early Intervention',
    description: 'Address rising sugar levels early and prevent progression with the right lifestyle and metabolic approach.',
    color: 'bg-amber-50 border-amber-200 text-amber-600',
    bgColor: 'bg-amber-50'
  },
  {
    icon: Activity,
    title: 'Fatty Liver & Metabolic Issues',
    description: 'Target the root metabolic causes to improve liver health, weight, and overall well-being.',
    color: 'bg-purple-50 border-purple-200 text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Heart,
    title: 'PCOS & Weight Problems',
    description: 'Support for weight, insulin resistance, and hormonal balance through a structured, sustainable plan.',
    color: 'bg-pink-50 border-pink-200 text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: Target,
    title: 'Structured 12-Week Program',
    description: 'For those needing deeper support, a guided program focused on sustainable results and long-term change.',
    color: 'bg-teal-50 border-teal-200 text-teal-600',
    bgColor: 'bg-teal-50'
  }
]

export default function HowWeHelp() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge bg-teal-100 text-teal-700 text-xs uppercase tracking-wider mb-3 inline-block">
            ✦ Our Approach
          </span>
          <h2 className="section-heading">How We Help</h2>
          <p className="section-subtitle mx-auto text-center">
            Personalized solutions for your unique health challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`card p-6 border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${card.color.split(' ')[1]}`}
              >
                <div className={`w-14 h-14 rounded-xl ${card.bgColor} flex items-center justify-center mb-4`}>
                  <IconComponent size={28} className={card.color.split(' ')[2]} />
                </div>
                <h3 className="font-display font-bold text-slate-800 text-xl mb-3">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
