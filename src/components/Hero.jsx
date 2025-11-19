import { motion } from 'framer-motion'

const brandBlue = '#0b1c3b'
const gold = '#d4af37'

export default function Hero({ onBookClick, onExploreClick }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f?q=80&w=2400&auto=format&fit=crop"
        alt="Adiba Luxury Lobby"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{background: `linear-gradient(180deg, rgba(11,28,59,0.65) 0%, rgba(11,28,59,0.85) 100%)`}} />

      {/* Decorative floral border */}
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.15), transparent 40%)'}} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          style={{ color: gold }}
        >
          Adiba’s Luxury Hotel
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 text-lg sm:text-2xl text-white/90"
        >
          Experience Royalty, Comfort & Excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={onBookClick} className="px-6 py-3 rounded-full text-slate-900 font-semibold shadow-lg" style={{background: gold}}>Book Now</button>
          <button onClick={onExploreClick} className="px-6 py-3 rounded-full border text-white" style={{borderColor: gold}}>Explore Rooms</button>
        </motion.div>
      </div>
    </section>
  )
}
