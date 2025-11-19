import { useEffect, useState } from 'react'
import { api } from '../utils/api'

const gold = '#d4af37'

export default function Rooms() {
  const [rooms, setRooms] = useState([])
  useEffect(() => { (async () => setRooms(await api('/rooms')))() }, [])

  return (
    <section id="rooms" className="relative py-16 bg-[#0b1c3b]">
      <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(212,175,55,0.08), transparent 40%), radial-gradient(circle at 90% 90%, rgba(212,175,55,0.08), transparent 40%)'}} />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{color: gold}}>Our Rooms</h2>
        <p className="text-white/80 text-center mt-2">Choose from our curated collection</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.type} className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur border border-white/20 shadow-xl">
              <img src={room.images?.[0]} alt={room.type} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{room.type}</h3>
                  <span className="text-white/90">${room.price}/night</span>
                </div>
                <ul className="mt-3 text-sm text-white/80 list-disc pl-5 space-y-1">
                  {room.amenities.slice(0,4).map(a => <li key={a}>{a}</li>)}
                </ul>
                <button className="mt-4 w-full px-4 py-2 rounded-lg text-slate-900 font-semibold" style={{background: gold}}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
