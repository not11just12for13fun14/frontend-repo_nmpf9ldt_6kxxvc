import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const GlowButton = ({ children }) => (
  <button className="relative overflow-hidden rounded-xl bg-teal-500/10 text-teal-200 px-6 py-3 font-semibold tracking-wide shadow-[0_0_20px_rgba(0,206,209,0.25)] ring-1 ring-teal-400/30 hover:ring-teal-300/60 hover:shadow-[0_0_35px_rgba(0,206,209,0.45)] transition-all">
    <span className="relative z-10">{children}</span>
    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,206,209,0.35),transparent_60%)]" />
  </button>
)

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Dark to teal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#061419] to-[#021317]" />

      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth - ensure not blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_20%,rgba(0,206,209,0.08),transparent_60%)]" />

      {/* Subtle particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-1 w-1 rounded-full bg-teal-300/60 blur-[1px] animate-pulse" />
        <div className="absolute left-3/4 top-1/2 h-1 w-1 rounded-full bg-teal-300/60 blur-[1px] animate-pulse [animation-delay:600ms]" />
        <div className="absolute left-1/3 top-2/3 h-1 w-1 rounded-full bg-teal-300/60 blur-[1px] animate-pulse [animation-delay:1200ms]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-32 pb-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-black/30 px-4 py-2 text-sm text-teal-200/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(0,206,209,0.8)]" />
          Futuristic marketing experiences
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-gradient-to-b from-white to-teal-200/80 bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-7xl">
          Edge and Engage
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance text-lg text-teal-100/80">
          We craft immersive, 3D-first brand moments that convert attention into action. Sleek. Dynamic. Measurable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <GlowButton>Start a Project</GlowButton>
          <button className="group relative overflow-hidden rounded-xl border border-teal-500/30 px-6 py-3 text-teal-200/80 transition-colors hover:text-teal-200">
            <span className="relative z-10">See our work</span>
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(0,206,209,0.12),transparent)] opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>

      {/* Bottom soft glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[60vw] -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl" />
    </section>
  )
}
