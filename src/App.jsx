import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Site background gradient */}
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(0,206,209,0.07),transparent_70%)]" />

      {/* Navbar */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-teal-400/20 ring-1 ring-teal-400/50 shadow-[0_0_12px_rgba(0,206,209,0.6)]" />
            <span className="text-lg font-semibold tracking-wide text-teal-200">EDGE AGENCY</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-teal-100/80">
            <a href="#services" className="hover:text-teal-200">Services</a>
            <a href="#work" className="hover:text-teal-200">Work</a>
            <a href="#process" className="hover:text-teal-200">Process</a>
            <a href="#pricing" className="hover:text-teal-200">Pricing</a>
            <a href="#testimonials" className="hover:text-teal-200">Testimonials</a>
          </nav>
          <button className="rounded-xl border border-teal-400/40 bg-teal-500/10 px-4 py-2 text-teal-200 hover:border-teal-300/70 hover:bg-teal-500/20">Contact</button>
        </div>
      </header>

      {/* Sections */}
      <main className="relative z-10">
        <Hero />
        <div id="services"><Services /></div>
        <div id="work"><Portfolio /></div>
        <div id="process"><Process /></div>
        <div id="pricing"><Pricing /></div>
        <div id="testimonials"><Testimonials /></div>

        {/* Footer */}
        <footer className="relative w-full bg-gradient-to-b from-black to-[#01090b] py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-teal-100/70">© {new Date().getFullYear()} Edge Agency. All rights reserved.</p>
            <div className="flex items-center gap-6 text-teal-100/70">
              <a href="#" className="hover:text-teal-200">LinkedIn</a>
              <a href="#" className="hover:text-teal-200">Dribbble</a>
              <a href="#" className="hover:text-teal-200">Behance</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
