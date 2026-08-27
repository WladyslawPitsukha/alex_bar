'use client'

import { cafes } from "@/constants/cafes";
import MapBlock from "./MapBlock";

export default function MapSect() {
    return (
        <section 
            className="w-full bg-black text-white py-20 px-4 md:px-8 lg:px-12"
            id="location"
        >
            <div className="max-w-7xl mx-auto">
                {/* Hero Header */}
                <div className="mb-16 text-center">
                    <p className="text-white/50 text-sm font-semibold mb-4 uppercase tracking-[0.2em]">Visit Us</p>
                    <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                        Find Your Nearest <span className="text-white">Alex Bar</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-3xl mx-auto">Three authentic Nordic cafes in Warsaw, Gdansk, and Krakow. Same great vibes, unique local flavors.</p>
                </div>

                {/* Featured Map + First Cafe */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
                    {/* Map - Takes 3 columns */}
                    <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/15 bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm shadow-2xl h-96 lg:h-125">
                        <MapBlock />
                    </div>

                    {/* Featured Cafe - Takes 2 columns */}
                    <div className="lg:col-span-2 flex flex-col justify-center">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-linear-to-br from-white/10 via-transparent to-white/5 rounded-2xl blur-xl opacity-40" />
                            <div className="relative rounded-2xl border border-white/20 bg-linear-to-br from-white/8 to-white/2 backdrop-blur-md p-8 shadow-2xl">
                                <div className="mb-6 pb-6 border-b border-white/10">
                                    <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.15em] mb-3">Featured</p>
                                    <h3 className="text-3xl font-black text-white mb-2">{cafes[0].title}</h3>
                                    <p className="text-white/70 font-semibold">{cafes[0].city}</p>
                                </div>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl mt-1">📍</span>
                                        <div className="flex-1">
                                            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Address</p>
                                            <p className="text-white font-medium">{cafes[0].address}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl mt-1">🕒</span>
                                        <div className="flex-1">
                                            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Hours</p>
                                            <p className="text-white font-medium">{cafes[0].time.hours}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl mt-1">📞</span>
                                        <div className="flex-1">
                                            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Phone</p>
                                            <p className="text-white font-medium">{cafes[0].connection.phone}</p>
                                        </div>
                                    </div>
                                </div>

                                <a 
                                    href={`/cafes/${cafes[0].slug}`}
                                    className="w-full py-3 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-300 border border-white/20 text-center"
                                >
                                    Explore Location
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Locations - 3 Column Grid */}
                <div>
                    <div className="mb-12">
                        <h3 className="text-3xl md:text-4xl font-black mb-3">All Three Locations</h3>
                        <p className="text-white/60 text-lg">Each cafe brings the same Nordic warmth with local character.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cafes.map((cafe, idx) => (
                            <div 
                                key={cafe.id} 
                                className="group relative rounded-2xl overflow-hidden border border-white/15 bg-linear-to-br from-white/8 to-white/2 backdrop-blur-sm hover:border-white/30 hover:bg-white/10 transition-all duration-300 p-8 shadow-xl hover:shadow-2xl"
                            >
                                {/* Accent gradient */}
                                <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-white/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity" />
                                
                                <div className="relative">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.15em] mb-2">Location {idx + 1}</p>
                                            <h4 className="text-2xl font-black text-white">{cafe.city}</h4>
                                        </div>
                                        <div className="text-3xl">⭐ {cafe.info.stars}</div>
                                    </div>

                                    <div className="border-t border-white/10 pt-6 pb-6 space-y-4 mb-6">
                                        <div className="flex items-start gap-3">
                                            <span className="text-white/40 font-bold">📍</span>
                                            <div className="flex-1">
                                                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Address</p>
                                                <p className="text-white text-sm font-medium leading-snug">{cafe.address}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-white/40 font-bold">🕒</span>
                                            <div className="flex-1">
                                                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Hours</p>
                                                <p className="text-white text-sm font-medium">{cafe.time.hours}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-white/40 font-bold">📞</span>
                                            <div className="flex-1">
                                                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Phone</p>
                                                <p className="text-white text-sm font-medium">{cafe.connection.phone}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <a 
                                        href={`/cafes/${cafe.slug}`}
                                        className="w-full py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-300 border border-white/20 text-center text-sm"
                                    >
                                        View Details →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
