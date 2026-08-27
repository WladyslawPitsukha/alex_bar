"use client";

import { FormEvent, useState } from "react";
import { cafes } from "@/constants/cafes";

const times = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

export default function ReservationForm() {
    const [submitted, setSubmitted] = useState(false);
    const [location, setLocation] = useState("");
    const [guests, setGuests] = useState("2");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const selectedCafe = cafes.find((cafe) => cafe.city === location);
    const formattedDate = date
        ? new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric" }).format(new Date(`${date}T12:00:00`))
        : "Choose a date";

    if (submitted) {
        return (
            <div className="flex min-h-105 flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-400/20 text-3xl text-green-300">✓</div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">Request received</p>
                <h2 className="mt-3 text-3xl font-black">Your table is on our list.</h2>
                <p className="mt-4 max-w-md leading-relaxed text-white/65">We will contact you shortly to confirm your reservation at {selectedCafe?.title ?? "Alex Bar"}.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-8 cursor-pointer rounded-lg border border-white/20 px-5 py-3 text-sm font-bold transition hover:border-white/50 hover:bg-white/10">Make another reservation</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">Reservation details</p>
                <h2 className="mt-2 text-3xl font-black">Find your table</h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-white/80">Location
                    <select required value={location} onChange={(event) => setLocation(event.target.value)} className="w-full cursor-pointer rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-yellow-300">
                        <option value="" disabled>Select a location</option>
                        {cafes.map((cafe) => <option key={cafe.id} value={cafe.city}>{cafe.city}</option>)}
                    </select>
                </label>
                <label className="space-y-2 text-sm font-semibold text-white/80">Guests
                    <select required value={guests} onChange={(event) => setGuests(event.target.value)} className="w-full cursor-pointer rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-yellow-300">
                        {Array.from({ length: 8 }, (_, index) => index + 1).map((count) => <option key={count} value={count}>{count} {count === 1 ? "guest" : "guests"}</option>)}
                    </select>
                </label>
                <label className="space-y-2 text-sm font-semibold text-white/80">Date
                    <input required type="date" value={date} onChange={(event) => setDate(event.target.value)} min={new Date().toISOString().split("T")[0]} className="w-full cursor-pointer rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-yellow-300" />
                </label>
                <label className="space-y-2 text-sm font-semibold text-white/80">Time
                    <select required value={time} onChange={(event) => setTime(event.target.value)} className="w-full cursor-pointer rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-yellow-300">
                        <option value="" disabled>Select a time</option>
                        {times.map((slot) => <option key={slot}>{slot}</option>)}
                    </select>
                </label>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Live summary</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/75">
                    <span>{selectedCafe?.city ?? "Location pending"}</span>
                    <span>{guests} {Number(guests) === 1 ? "guest" : "guests"}</span>
                    <span>{formattedDate}</span>
                    <span>{time || "Time pending"}</span>
                </div>
            </div>

            <div className="h-px bg-white/10" />
            <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-white/80">Full name
                    <input required type="text" placeholder="Alex Johnson" className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-yellow-300" />
                </label>
                <label className="space-y-2 text-sm font-semibold text-white/80">Email
                    <input required type="email" placeholder="alex@example.com" className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-yellow-300" />
                </label>
            </div>
            <label className="block space-y-2 text-sm font-semibold text-white/80">Special requests <span className="font-normal text-white/40">(optional)</span>
                <textarea rows={4} placeholder="Birthday, dietary requirements, preferred seating..." className="w-full resize-none rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-yellow-300" />
            </label>
            <button type="submit" className="w-full cursor-pointer rounded-xl bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 px-6 py-4 font-black text-black shadow-lg transition hover:scale-[1.01] hover:shadow-yellow-300/20">Request reservation</button>
        </form>
    );
}