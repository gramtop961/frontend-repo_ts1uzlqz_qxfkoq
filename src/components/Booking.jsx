import { useEffect, useMemo, useState } from 'react'
import { api } from '../utils/api'

const gold = '#d4af37'

const roomTypes = ['Deluxe', 'Executive', 'Royal Suite']

export default function Booking() {
  const [roomType, setRoomType] = useState('Deluxe')
  const [guests, setGuests] = useState(1)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [available, setAvailable] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [summary, setSummary] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('Card')

  const canCheck = useMemo(() => roomType && guests && checkIn && checkOut, [roomType, guests, checkIn, checkOut])

  useEffect(() => {
    setAvailable(null)
  }, [roomType, guests, checkIn, checkOut])

  const checkAvailability = async () => {
    if (!canCheck) return
    try {
      setLoading(true)
      setError('')
      const res = await api(`/availability?room_type=${encodeURIComponent(roomType)}&check_in=${encodeURIComponent(checkIn)}&check_out=${encodeURIComponent(checkOut)}&guests=${guests}`)
      setAvailable(res.available)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const book = async () => {
    try {
      setLoading(true)
      setError('')
      const res = await api('/book', {
        method: 'POST',
        body: JSON.stringify({
          customer_name: 'Guest',
          customer_email: 'guest@example.com',
          room_type: roomType,
          guests,
          check_in: checkIn,
          check_out: checkOut,
          payment_method: paymentMethod,
        })
      })
      setSummary({ id: res.booking_id, status: res.status, method: paymentMethod })
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative py-14 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border p-6 bg-white/70 shadow-sm">
            <h3 className="text-xl font-semibold" style={{color: '#0b1c3b'}}>Online Booking</h3>
            <p className="text-slate-600 text-sm mb-6">Secure your stay in a few clicks.</p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Check‑in</label>
                <input type="datetime-local" className="mt-1 w-full rounded-lg border px-3 py-2" value={checkIn} onChange={e=>setCheckIn(e.target.value)} />
              </div>
              <div>
                <label className="text-sm text-slate-600">Check‑out</label>
                <input type="datetime-local" className="mt-1 w-full rounded-lg border px-3 py-2" value={checkOut} onChange={e=>setCheckOut(e.target.value)} />
              </div>
              <div>
                <label className="text-sm text-slate-600">Guests</label>
                <input type="number" min={1} max={4} className="mt-1 w-full rounded-lg border px-3 py-2" value={guests} onChange={e=>setGuests(parseInt(e.target.value||'1'))} />
              </div>
              <div>
                <label className="text-sm text-slate-600">Room</label>
                <select className="mt-1 w-full rounded-lg border px-3 py-2" value={roomType} onChange={e=>setRoomType(e.target.value)}>
                  {roomTypes.map(r => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div className="col-span-2">
                <label className="text-sm text-slate-600">Payment</label>
                <div className="mt-1 grid grid-cols-3 gap-2">
                  {['Card','EasyPaisa','JazzCash'].map(m => (
                    <button type="button" key={m} onClick={()=>setPaymentMethod(m)} className={`px-3 py-2 rounded-lg border ${paymentMethod===m? 'text-slate-900' : 'text-slate-600'}`} style={{ background: paymentMethod===m? gold : 'white', borderColor: gold }}>{m}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button onClick={checkAvailability} disabled={!canCheck || loading} className="px-4 py-2 rounded-lg border" style={{borderColor: gold, color: '#0b1c3b'}}>Check Availability</button>
              <button onClick={book} disabled={!available || loading} className="px-4 py-2 rounded-lg text-slate-900 font-semibold" style={{background: gold}}>Book Now</button>
            </div>

            {loading && <p className="mt-4 text-sm text-slate-500">Processing...</p>}
            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
            {available===false && <p className="mt-4 text-sm text-red-600">Selected dates are not available.</p>}
          </div>

          <div className="rounded-2xl border p-6 bg-white/70 shadow-sm">
            <h3 className="text-xl font-semibold" style={{color: '#0b1c3b'}}>Booking Summary</h3>
            {!summary ? (
              <p className="text-slate-600 mt-2 text-sm">Your summary will appear here after booking.</p>
            ) : (
              <div className="mt-4 space-y-2 text-slate-700">
                <div><span className="font-medium">Booking ID:</span> {summary.id}</div>
                <div><span className="font-medium">Status:</span> {summary.status}</div>
                <div><span className="font-medium">Method:</span> {summary.method}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
