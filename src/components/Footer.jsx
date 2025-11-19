const gold = '#d4af37'

export default function Footer() {
  return (
    <footer className="relative bg-[#0b1c3b] text-white">
      <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(212,175,55,0.08), transparent 40%), radial-gradient(circle at 85% 75%, rgba(212,175,55,0.08), transparent 40%)'}} />
      <div className="relative max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-extrabold" style={{color: gold}}>Adiba’s Luxury Hotel</div>
          <p className="text-white/70 mt-2">Where royalty meets comfort. Follow us for offers and updates.</p>
          <div className="mt-4 flex gap-3">
            {['facebook','twitter','instagram'].map(s => (
              <a key={s} href="#" className="w-10 h-10 rounded-full grid place-items-center border hover:opacity-80 transition" style={{borderColor: gold}}>
                <span className="sr-only">{s}</span>
                <div className="w-4 h-4 rounded-full" style={{background: gold}}></div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3" style={{color: gold}}>Quick Links</div>
          <ul className="space-y-2 text-white/80">
            {['Rooms','Services','Gallery','Blog','Contact'].map(i => <li key={i}><a href={`#${i.toLowerCase()}`}>{i}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3" style={{color: gold}}>Contact</div>
          <ul className="space-y-2 text-white/80">
            <li>+92 300 0000000</li>
            <li>info@adibahotel.com</li>
            <li>Royal Avenue, Karachi</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3" style={{color: gold}}>Newsletter</div>
          <div className="flex gap-2">
            <input placeholder="Your email" className="flex-1 px-3 py-2 rounded-lg text-slate-900" />
            <button className="px-4 py-2 rounded-lg text-slate-900 font-semibold" style={{background: gold}}>Join</button>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-4 text-center text-white/60">© {new Date().getFullYear()} Adiba’s Luxury Hotel</div>
    </footer>
  )
}
