import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Booking from './components/Booking'
import Rooms from './components/Rooms'
import Footer from './components/Footer'

function App() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const scrollToRooms = () => {
    const el = document.getElementById('rooms')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToBooking = () => {
    const el = document.getElementById('book')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-white">
      <Header onToggleTheme={() => setDark(v=>!v)} />
      <main>
        <Hero onBookClick={scrollToBooking} onExploreClick={scrollToRooms} />
        <div id="book"><Booking /></div>
        <Rooms />
        {/* Placeholders for additional pages/sections */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold" style={{color: '#0b1c3b'}}>Services</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {title:'Spa & Wellness', img:'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1600&auto=format&fit=crop'},
                {title:'Gym & Pool', img:'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1600&auto=format&fit=crop'},
                {title:'Banquet Hall', img:'https://images.unsplash.com/photo-1540175970193-39c8c25dae36?q=80&w=1600&auto=format&fit=crop'},
                {title:'Airport Pickup', img:'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1600&auto=format&fit=crop'},
                {title:'Restaurant & Café', img:'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop'},
                {title:'24/7 Room Service', img:'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop'},
              ].map(card => (
                <div key={card.title} className="rounded-2xl overflow-hidden border bg-white/70 shadow-sm">
                  <img src={card.img} alt={card.title} className="w-full h-44 object-cover" />
                  <div className="p-5">
                    <h3 className="font-semibold" style={{color: '#0b1c3b'}}>{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold" style={{color: '#0b1c3b'}}>Gallery</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600&auto=format&fit=crop',
              ].map((src,i) => (
                <a key={i} href={src} target="_blank" className="relative group rounded-xl overflow-hidden">
                  <img src={src} className="w-full h-56 object-cover group-hover:scale-105 transition" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold" style={{color: '#0b1c3b'}}>From Our Blog</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[1,2,3].map(i => (
                <article key={i} className="rounded-2xl overflow-hidden border bg-white/70 shadow-sm">
                  <img src={`https://picsum.photos/seed/hotel${i}/800/500`} className="w-full h-44 object-cover" />
                  <div className="p-5">
                    <h3 className="font-semibold" style={{color: '#0b1c3b'}}>Luxury Travel Tip #{i}</h3>
                    <p className="text-slate-600 mt-2 text-sm">Discover the finest experiences around our property.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold" style={{color: '#0b1c3b'}}>Contact Us</h2>
              <form className="mt-6 grid gap-4">
                <input placeholder="Full name" className="px-3 py-2 rounded-lg border" />
                <input placeholder="Email" className="px-3 py-2 rounded-lg border" />
                <textarea placeholder="Message" rows="4" className="px-3 py-2 rounded-lg border" />
                <div className="flex gap-3">
                  <a href="https://wa.me/923000000000" target="_blank" className="px-4 py-2 rounded-lg text-slate-900 font-semibold" style={{background: '#d4af37'}}>WhatsApp</a>
                  <button className="px-4 py-2 rounded-lg text-slate-900 font-semibold" style={{background: '#d4af37'}}>Send</button>
                </div>
              </form>
            </div>
            <iframe className="rounded-xl min-h-[320px] w-full border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28956.080829840962!2d67.01034028042331!3d24.860734098339612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dfaf18ce6df%3A0x289987e9e5d1b7a1!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
