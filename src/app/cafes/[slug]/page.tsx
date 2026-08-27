import { cafes } from "@/constants/cafes";
import { getNameFromSlug } from "@/utils/getNameSlug";
import { notFound } from "next/navigation";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { photosOfCafe } from "@/constants/photosCafe";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const cafe = cafes.find((item) => (item.slug ?? item.city).toLowerCase() === slug.toLowerCase());

    return {
        title: cafe ? `${cafe.title} | Alex Bar` : "Cafe | Alex Bar",
        description: cafe?.info.description ?? "Discover Alex Bar locations across Poland.",
    };
}

export function generateStaticParams() {
    return cafes.map((cafe) => ({
        slug: (cafe.slug ?? cafe.city).toLowerCase().replace(/\s+/g, "-"),
    }));
}

export default async function CafePage({ params }: Props) {
    const { slug } = await params;

    const cafe = cafes.find((item) => {
        const value = (item.slug ?? item.city).toLowerCase();
        return value === slug.toLowerCase();
    });

    if (!cafe) {
        notFound();
    }

    const displayName = getNameFromSlug(cafe.slug ?? cafe.city);

    return (
        <>
            <NavBar />
            <main className="min-h-screen bg-black text-white pt-20">
                <div className="relative min-h-128 overflow-hidden">
                    <Image
                        src={photosOfCafe[0].photo}
                        alt={`${cafe.title} interior`}
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/65 to-black/30" />
                    <div className="relative mx-auto flex min-h-128 max-w-6xl flex-col justify-center px-6 py-16 md:px-16 lg:px-8">
                        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60">
                            <Link href="/" className="transition hover:text-white">Home</Link>
                            <span className="mx-2">/</span>
                            <Link href="/cafes" className="transition hover:text-white">Cafes</Link>
                            <span className="mx-2">/</span>
                            <span className="text-white">{cafe.city}</span>
                        </nav>

                        <div className="mb-6 inline-block w-fit rounded-full border border-green-400/50 bg-green-400/30 px-4 py-2 text-xs font-bold tracking-widest text-green-300">
                            ● ALEX BAR
                        </div>
                        
                        <h1 className="mb-4 text-5xl font-black leading-tight tracking-tighter md:text-6xl">
                            {cafe.title}
                        </h1>
                        
                        <p className="mb-2 text-xl text-white/80 md:text-2xl">
                            {cafe.city}
                        </p>

                        <p className="mb-8 text-lg text-white/60">
                            {displayName}
                        </p>

                        <div className="mb-8 flex items-center gap-3 text-yellow-400">
                            <span className="text-2xl">★★★★★</span>
                            <span className="text-white text-lg font-semibold">{cafe.info.stars.toFixed(1)} Rating</span>
                        </div>

                        <Link href="/reservation" className="w-fit rounded-lg bg-white px-6 py-3 font-bold text-black transition hover:bg-yellow-300">
                            Reserve a table
                        </Link>
                    </div>
                </div>

                <div className="bg-black py-16 px-6 md:px-16 lg:px-24">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:border-white/20 hover:bg-white/10 transition">
                            <p className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-widest">📍 Location</p>
                            <p className="text-2xl font-bold mb-2">{cafe.city}</p>
                            <p className="text-white/70">{cafe.address}</p>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-sm font-bold text-yellow-300 transition hover:text-white"
                            >
                                Get directions ↗
                            </a>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:border-white/20 hover:bg-white/10 transition">
                            <p className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-widest">🕒 Hours</p>
                            <p className="text-2xl font-bold mb-2">{cafe.time.hours}</p>
                            <p className="text-white/70">{cafe.time.days}</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:border-white/20 hover:bg-white/10 transition">
                            <p className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-widest">📞 Contact</p>
                            <a href={`tel:${cafe.connection.phone}`} className="mb-2 block text-lg font-bold transition hover:text-yellow-300">{cafe.connection.phone}</a>
                            <a href={`mailto:${cafe.connection.email}`} className="block text-sm text-white/70 transition hover:text-white">{cafe.connection.email}</a>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-16"></div>

                    <div className="max-w-6xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                            About This Location
                        </h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                                <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                                    Description
                                </h3>
                                <p className="text-white/80 leading-relaxed mb-6">
                                    {cafe.info.description}
                                </p>
                                <p className="text-white/70 leading-relaxed">
                                    {cafe.info.moreDesc}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                                <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                                    Fun Fact
                                </h3>
                                <p className="text-white/80 leading-relaxed text-lg italic">
                                    {cafe.info.coolFacts}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-16"></div>

                    <div className="max-w-6xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                            Follow Us
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {cafe.socials?.map((social, idx) => {
                                const gradients = [
                                    "from-pink-500 via-red-400 to-yellow-300",
                                    "from-blue-500 via-cyan-400 to-green-300",
                                ];
                                const gradient = gradients[idx % gradients.length];
                                return (
                                    <a
                                        key={social.id}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`px-6 py-3 rounded-full bg-linear-to-br ${gradient} text-black font-bold hover:scale-105 hover:shadow-lg transition-all shadow-md`}
                                    >
                                        {social.labelText}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-16"></div>

                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                            Guest Reviews
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {cafe.comments?.slice(0, 4).map((comment) => (
                                <div
                                    key={comment.id}
                                    className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 hover:bg-white/10 transition"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <p className="font-bold text-lg">{comment.desc.clientName}</p>
                                        <span className="text-yellow-400 font-bold">⭐ {comment.comments.rating}</span>
                                    </div>
                                    <p className="text-white/70 leading-relaxed">
                                        {comment.comments.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}