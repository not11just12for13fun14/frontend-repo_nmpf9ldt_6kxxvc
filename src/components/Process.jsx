import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Zap, Workflow, LineChart } from 'lucide-react'

const steps = [
  { icon: Brain, title: 'Discover', text: 'Goals, audience, and competitive landscape.' },
  { icon: Workflow, title: 'Design', text: 'Futuristic visual systems and 3D concepts.' },
  { icon: Zap, title: 'Develop', text: 'Interactive builds with smooth motion and depth.' },
  { icon: LineChart, title: 'Deploy', text: 'Measure, iterate, and scale performance.' },
]

export default function Process() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-[#041216] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Our process</h2>
        <p className="mt-3 text-teal-100/70">Simple, fast, and focused on outcomes.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-teal-500/20 bg-[#061419]/50 p-6">
              <s.icon className="h-7 w-7 text-teal-300" />
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-teal-100/80 text-sm">{s.text}</p>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_-10%,rgba(0,206,209,0.12),transparent_70%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
