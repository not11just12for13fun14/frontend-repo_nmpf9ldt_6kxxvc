import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: '4k', features: ['Landing + 1 3D scene', 'Basic analytics', '2 weeks'] },
  { name: 'Growth', price: '12k', features: ['Site + 3 3D scenes', 'A/B testing', '6 weeks'], highlight: true },
  { name: 'Scale', price: '24k', features: ['Site + 6 3D scenes', 'Performance suite', '10 weeks'] },
]

export default function Pricing() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#041216] to-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Transparent pricing</h2>
        <p className="mt-3 text-teal-100/70">High-impact deliverables, no fluff.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl border bg-[#061419]/60 p-6 ${t.highlight ? 'border-teal-400/50 shadow-[0_0_50px_rgba(0,206,209,0.2)]' : 'border-teal-400/20'}`}>
              <div className="absolute inset-px pointer-events-none rounded-2xl bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(0,206,209,0.16),transparent_60%)]" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-teal-300">${t.price}</span>
                  <span className="text-sm text-teal-100/70">/ project</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-teal-100/80">
                  {t.features.map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_10px_rgba(0,206,209,0.8)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-xl border border-teal-400/40 bg-teal-500/10 px-4 py-2 text-teal-200 hover:border-teal-300/70 hover:bg-teal-500/20">Choose {t.name}</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
