import Link from "next/link";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import ReservationForm from "@/components/ReservationForm";
import ReservationHighlights from "@/components/ReservationHighlights";

export default function ReservationPage() {
    return (
        <>
            <NavBar />
            <main className="min-h-screen bg-black pt-28 text-white">
                <section className="border-b border-white/10 bg-linear-to-br from-black via-gray-950 to-gray-900 px-6 py-16 md:px-16 lg:px-24">
                    <div className="mx-auto max-w-6xl">
                        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60">
                            <Link href="/" className="cursor-pointer transition hover:text-white">Home</Link>
                            <span className="mx-2">/</span>
                            <span className="text-white">Reservation</span>
                        </nav>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-300">Alex Bar</p>
                        <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">Make room for a good evening.</h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">Choose your location, tell us when you are coming, and we will prepare your table.</p>
                    </div>
                </section>
                <section className="px-6 py-16 md:px-16 lg:px-24">
                    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
                            <ReservationForm />
                        </div>
                        <ReservationHighlights />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
