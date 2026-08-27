"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

export default function RegisterPage() {
    const [submitted, setSubmitted] = useState(false);
    const [password, setPassword] = useState("");

    const passwordScore = [
        password.length >= 8,
        /[A-Z]/.test(password),
        /\d/.test(password),
    ].filter(Boolean).length;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <NavBar />
            <main className="min-h-screen bg-black px-6 pb-20 pt-28 text-white md:px-16 lg:px-24">
                <section className="mx-auto grid max-w-6xl items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
                    <div>
                        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60">
                            <Link href="/" className="cursor-pointer transition hover:text-white">Home</Link>
                            <span className="mx-2">/</span>
                            <span className="text-white">Register</span>
                        </nav>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-300">Alex Bar circle</p>
                        <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight md:text-7xl">Keep the good nights close.</h1>
                        <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">Create an account to save your favorite locations and make future reservations faster.</p>
                        <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/70">
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Saved tables</span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Local favorites</span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Event updates</span>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
                        {submitted ? (
                            <div className="flex min-h-105 flex-col items-center justify-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-400/20 text-3xl text-green-300">✓</div>
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">Welcome to the circle</p>
                                <h2 className="mt-3 text-3xl font-black">Your account is ready.</h2>
                                <p className="mt-4 max-w-md leading-relaxed text-white/65">Your profile has been created. The next good table is only a few clicks away.</p>
                                <Link href="/reservation" className="mt-8 cursor-pointer rounded-xl bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 px-6 py-3 font-black text-black transition hover:scale-[1.02]">Make a reservation</Link>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">New account</p>
                                    <h2 className="mt-2 text-3xl font-black">Join Alex Bar</h2>
                                </div>
                                <label className="block space-y-2 text-sm font-semibold text-white/80">Full name
                                    <input required type="text" placeholder="Alex Johnson" className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-yellow-300" />
                                </label>
                                <label className="block space-y-2 text-sm font-semibold text-white/80">Email
                                    <input required type="email" placeholder="alex@example.com" className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-yellow-300" />
                                </label>
                                <label className="block space-y-2 text-sm font-semibold text-white/80">Password
                                    <input required minLength={8} type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="At least 8 characters" className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-yellow-300" />
                                </label>
                                <div aria-live="polite" className="space-y-2">
                                    <div className="flex gap-1">
                                        {[1, 2, 3].map((level) => <span key={level} className={`h-1.5 flex-1 rounded-full transition-colors ${passwordScore >= level ? "bg-yellow-300" : "bg-white/10"}`} />)}
                                    </div>
                                    <p className="text-xs text-white/45">{passwordScore === 3 ? "Strong password" : password ? "Use 8 characters, one uppercase letter, and one number" : "Password strength"}</p>
                                </div>
                                <label className="flex cursor-pointer items-start gap-3 text-sm text-white/60">
                                    <input required type="checkbox" className="mt-1 accent-yellow-300" />
                                    <span>I agree to receive occasional news about Alex Bar events and offers.</span>
                                </label>
                                <button type="submit" className="w-full cursor-pointer rounded-xl bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 px-6 py-4 font-black text-black shadow-lg transition hover:scale-[1.01]">Create account</button>
                                <p className="text-center text-sm text-white/45">Already have an account? <Link href="/reservation" className="cursor-pointer font-bold text-yellow-300 transition hover:text-white">Book a table instead</Link></p>
                            </form>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
