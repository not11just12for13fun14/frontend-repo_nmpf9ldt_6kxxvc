import React from 'react'
import { motion } from 'framer-motion'

const quotes = [
  {
    text: 'They turned our product into an experience. Engagement up 3x.',
    author: 'Maya Chen, CMO @ Fluxwave'
  },
  {
    text: 'Bold, immersive, and measurable. Exactly what we needed.',
    author: 'Ethan Wells, Growth @ Veridian'
  },
  {
    text: 'The 3D interactions made our launch unforgettable.',
    author: 'Priya Nair, Founder @ NovaGrid'
  }
]

export default function Testimonials() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-[#030c0f] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by teams that move fast</h2>
        <p className="mt-3 text-teal-100/70">A few words from teams we partner with.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-teal-400/20 bg-[#061419]/60 p-6">
              <p className="text-teal-100/90">“{q.text}”</p>
              <footer className="mt-4 text-sm text-teal-200">{q.author}</footer>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_-10%,rgba(0,206,209,0.12),transparent_70%)]" />
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
