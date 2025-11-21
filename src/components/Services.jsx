import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Sparkles, Cpu, Layers } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Launch Strategy',
    desc: 'Full-funnel GTM plans with data-driven positioning and 3D storytelling.'
  },
  {
    icon: Cpu,
    title: 'Interactive 3D',
    desc: 'Spline-powered scenes, microsites, and product demos with real-time motion.'
  },
  {
    icon: Layers,
    title: 'Brand Systems',
    desc: 'Futuristic identity, holographic UI accents, and modular design kits.'
  },
  {
    icon: Sparkles,
    title: 'Performance Creative',
    desc: 'High-contrast ads and content with measurable, conversion-focused motion.'
  }
]

export default function Services() {
  return (
    <section className="relative z-10 w-full bg-gradient-to-b from-black to-[#030f13] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-teal-100/70">Clean, modern execution with soft neon edges and depth-layered visuals.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-teal-400/20 bg-[#061419]/60 p-6 shadow-[0_0_40px_rgba(0,206,209,0.08)] backdrop-blur">
              <div className="absolute inset-px pointer-events-none rounded-2xl bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,206,209,0.12),transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100" />
              <s.icon className="h-8 w-8 text-teal-300 drop-shadow-[0_0_12px_rgba(0,206,209,0.8)]" />
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-teal-100/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
