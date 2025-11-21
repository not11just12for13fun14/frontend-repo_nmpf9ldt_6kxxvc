import React from 'react'
import { motion } from 'framer-motion'

const cases = [
  {
    title: 'Neon Grid Launch',
    tag: 'Product Demo',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Quantum Commerce',
    tag: 'Ecommerce',
    img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Holo Finance Suite',
    tag: 'Fintech',
    img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function Portfolio() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#030f13] to-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Work that converts</h2>
            <p className="mt-3 text-teal-100/70">3D cards with soft glow and gradient shadows.</p>
          </div>
          <a href="#" className="text-teal-300 hover:text-teal-200">View all</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-teal-500/20 bg-[#061419]/40 shadow-[0_10px_40px_-10px_rgba(0,206,209,0.25)]">
              <div className="relative h-56 w-full overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-wide text-teal-300">{c.tag}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{c.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
