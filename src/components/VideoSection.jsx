import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Clock, Eye, Tag } from 'lucide-react'

const categoryColors = {
  'Education': 'bg-blue-50 text-blue-700',
  'Procedure': 'bg-rose-50 text-rose-700',
  'Lifestyle': 'bg-green-50 text-green-700',
}

function VideoCard({ item, index }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    setPlaying(true)
    setTimeout(() => videoRef.current?.play(), 100)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="card overflow-hidden w-56 sm:w-64"
    >
      {/* Video / Thumbnail */}
      <div className="relative w-full" style={{ paddingBottom: '150%' }}>
        {!playing ? (
          <>
            <img
              src={item.thumbnail}
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              onLoad={(e) => e.target.classList.add('loaded')}
            />
            <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
              <button
                onClick={handlePlay}
                className="w-12 h-12 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
                aria-label={`Play ${item.title}`}
              >
                <Play size={20} className="text-teal-600 ml-1" fill="currentColor" />
              </button>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded-md flex items-center gap-1">
              <Clock size={8} /> {item.duration}
            </div>
          </>
        ) : (
          <video
            ref={videoRef}
            src={item.videoUrl}
            controls
            autoPlay
            className="absolute inset-0 w-full h-full object-cover bg-black rounded-t-2xl"
            preload="metadata"
          />
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className={`badge text-xs font-medium ${categoryColors[item.category] || 'bg-slate-100 text-slate-600'}`}>
            <Tag size={10} className="mr-1 inline" />{item.category}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Eye size={12} /> {item.views} views
          </span>
        </div>
        <h3 className="font-display font-bold text-slate-800 text-sm leading-snug mb-1">{item.title}</h3>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{item.description}</p>
        {!playing && (
          <button
            onClick={handlePlay}
            className="mt-2 text-teal-600 text-xs font-medium hover:text-teal-700 flex items-center gap-1 transition-colors"
          >
            <Play size={12} fill="currentColor" /> Watch
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default function VideoSection({ videoSection }) {
  return (
    <section id="videos" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge bg-teal-100 text-teal-700 text-xs uppercase tracking-wider mb-3 inline-block">
            ✦ Patient Education
          </span>
          <h2 className="section-heading">{videoSection.heading}</h2>
          <p className="section-subtitle mx-auto text-center">{videoSection.subtitle}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {videoSection.items.map((item, i) => (
            <VideoCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
