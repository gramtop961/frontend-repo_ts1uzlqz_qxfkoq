import { useState } from 'react'
import { Menu, Moon, Sun, ChevronDown } from 'lucide-react'

const brandBlue = '#0b1c3b'
const gold = '#d4af37'

export default function Header({ onToggleTheme }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-full border backdrop-blur bg-white/70 dark:bg-slate-900/60 shadow-sm" style={{borderColor: gold}}>
          <div className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-3">
              <button className="md:hidden" onClick={()=>setOpen(v=>!v)}><Menu className="text-slate-700 dark:text-white" /></button>
              <div className="font-extrabold tracking-wide" style={{color: gold}}>Adiba’s Luxury Hotel</div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-slate-700 dark:text-white">
              {['Home','Rooms','Services','Gallery','Blog','Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-80 flex items-center gap-1">
                  {item}
                  {item==='Services' && <ChevronDown size={16} />}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button onClick={onToggleTheme} className="rounded-full p-2 border" style={{borderColor: gold}}>
                <Sun className="dark:hidden" size={18} />
                <Moon className="hidden dark:block" size={18} />
              </button>
              <a href="#book" className="px-4 py-2 rounded-full text-slate-900 font-semibold" style={{background: gold}}>Book Now</a>
            </div>
          </div>
          {open && (
            <div className="md:hidden px-5 pb-4 grid gap-2 text-slate-700 dark:text-white">
              {['Home','Rooms','Services','Gallery','Blog','Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="py-2 border-b last:border-none" style={{borderColor: gold}}>{item}</a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
