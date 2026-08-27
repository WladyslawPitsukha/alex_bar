import Link from "next/link";

const highlights = [
    { icon: "01", title: "Pick your mood", text: "Choose the city that fits tonight's plans." },
    { icon: "02", title: "Set the moment", text: "We keep the best tables ready for your arrival." },
    { icon: "03", title: "Make it yours", text: "Tell us about birthdays, diets, or special requests." },
];

export default function ReservationHighlights() {
    return (
        <aside className="space-y-5">
            <div className="overflow-hidden rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-7">
                <div className="mb-8 flex items-start justify-between">
                    <p className="text-2xl text-yellow-300">✦</p>
                    <span className="rounded-full border border-yellow-200/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-yellow-100/70">Good to know</span>
                </div>
                <h2 className="text-2xl font-black">A good table matters.</h2>
                <p className="mt-3 leading-relaxed text-white/65">For groups larger than eight, call us directly so we can arrange the right space for your evening.</p>
                <a href="tel:+48221234567" className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-yellow-300 transition hover:text-white">Call the team <span aria-hidden="true">↗</span></a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="mb-6 flex items-end justify-between">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">Your evening</h3>
                        <p className="mt-2 text-xl font-black">Three easy steps</p>
                    </div>
                    <span className="text-3xl font-black text-white/10">03</span>
                </div>
                <div className="space-y-5">
                    {highlights.map((highlight) => (
                        <div key={highlight.icon} className="flex gap-4">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-yellow-200">{highlight.icon}</span>
                            <div>
                                <p className="font-bold text-white">{highlight.title}</p>
                                <p className="mt-1 text-sm leading-relaxed text-white/50">{highlight.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">Opening hours</h3>
                <p className="mt-4 text-xl font-bold">Monday - Sunday</p>
                <p className="mt-1 text-white/65">10:00 - 23:00</p>
                <p className="mt-6 text-sm leading-relaxed text-white/50">Reservations are requests until confirmed by our team.</p>
                <Link href="/cafes" className="mt-5 inline-block cursor-pointer text-sm font-bold text-white underline decoration-white/20 underline-offset-4 transition hover:text-yellow-300">Explore our locations</Link>
            </div>
        </aside>
    );
}