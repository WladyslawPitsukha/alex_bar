"use client";

import { photosOfCafe } from "@/constants/photosCafe";
import { photosOfMenu } from "@/constants/photosMenu";
import Image from "next/image";
import { MenuBlockLink } from "./MenuBlockLinks";
import { menuLinks } from "@/constants/menuLinks";

export default function HeroSect() {
    const photosHero = photosOfCafe.concat(photosOfMenu).filter((photo) => photo.id <= 16);
    const featuredPhoto = photosHero[0];
    const galleryPhotos = photosHero.slice(1, 16);

    return (
        <section
            className="relative w-full bg-black text-white overflow-hidden"
            id="home"
        >
            {/* Full-width Hero */}
            <div className="relative w-full h-screen max-h-96 md:max-h-screen md:h-auto">
                <Image
                    src={featuredPhoto.photo}
                    alt={featuredPhoto.description}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/40" />
                
                <div className="relative h-full flex flex-col items-start justify-center px-6 md:px-16 lg:px-24">
                    <div className="max-w-2xl">
                        <div className="mb-4 inline-block px-4 py-2 rounded-full bg-green-400/30 text-green-300 text-xs font-bold tracking-widest border border-green-400/50">
                            ● OPEN NOW
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
                            Welcome to<br />
                            <span className="bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">Alex&apos;s Bar</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-lg leading-relaxed">
                            A taste of Norway in Poland. Authentic Nordic flavors, cozy vibes, unforgettable moments.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <a href="#gallery" className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition">
                                Explore
                            </a>
                            <div className="flex items-center gap-2 text-yellow-400">
                                <span>★★★★★</span>
                                <span className="text-white text-sm">4.8 (200+ reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info & Gallery Section */}
            <div className="relative bg-black pt-16 pb-20 px-6 md:px-16 lg:px-24">
                {/* Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl">
                    <div>
                        <p className="text-white/60 text-sm font-semibold mb-2">LOCATION</p>
                        <p className="text-lg font-semibold">📍 Warsaw, Poland</p>
                        <p className="text-white/70 text-sm">Nowy Świat 10</p>
                    </div>
                    <div>
                        <p className="text-white/60 text-sm font-semibold mb-2">HOURS</p>
                        <p className="text-lg font-semibold">🕒 10:00 – 23:00</p>
                        <p className="text-white/70 text-sm">Mon – Sun</p>
                    </div>
                    <div>
                        <p className="text-white/60 text-sm font-semibold mb-2">CONTACT</p>
                        <p className="text-lg font-semibold">📞 +48 22 123 45 67</p>
                        <p className="text-white/70 text-sm">warsaw@alexbar.com</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-20"></div>

                {/* Gallery Section */}
                <div id="gallery" className="mb-20">
                    <div className="mb-12">
                        <p className="text-white/60 text-sm font-semibold mb-2 uppercase tracking-widest">Discover</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Gallery & Moments</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {/* Large feature image */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
                            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden group border border-white/10 shadow-lg">
                                <Image
                                    src={galleryPhotos[0]?.photo || featuredPhoto.photo}
                                    alt="Gallery highlight"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition flex items-end p-4 opacity-0 group-hover:opacity-100">
                                    <p className="text-sm font-semibold text-white">{galleryPhotos[0]?.title}</p>
                                </div>
                            </div>
                        </div>

                        {/* Grid items */}
                        {galleryPhotos.slice(1, 10).map((photo, idx) => (
                            <div
                                key={idx}
                                className={`relative rounded-xl overflow-hidden group border border-white/10 shadow-md
                                    ${idx % 3 === 0 ? 'md:col-span-1 lg:col-span-1 h-40' : 'md:col-span-1 lg:col-span-1 h-40'}
                                `}
                            >
                                <Image
                                    src={photo.photo}
                                    alt={photo.description}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition flex items-end p-3 opacity-0 group-hover:opacity-100">
                                    <p className="text-xs font-semibold text-white truncate">{photo.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-3xl">
                    <div className="mb-8">
                        <p className="text-white/60 text-sm font-semibold mb-2 uppercase tracking-widest">About</p>
                        <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Why People Love Us</h3>
                        <p className="text-lg text-white/80 leading-relaxed mb-6">
                            Fresh Nordic ingredients sourced directly from Scandinavia. Cozy atmosphere perfect for families, dates, and celebrations. Unforgettable taste that keeps guests coming back. Every dish tells a story of culinary excellence and tradition.
                        </p>
                    </div>

                    {/* Menu Links */}
                    <div className="flex flex-wrap gap-3">
                        {menuLinks.map((link) => (
                            <MenuBlockLink key={link.id} {...link} />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes gradient-move {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
                .animate-gradient-move {
                    background-size: 200% 200%;
                    animation: gradient-move 6s ease-in-out infinite alternate;
                }
            `}</style>
        </section>
    );
}