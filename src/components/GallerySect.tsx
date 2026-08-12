"use client"

import React, { useEffect, useState, useCallback } from "react";
import { photosOfCafe } from "@/constants/photosCafe";
import { PhotosProps } from "@/types/photosProps";
import Image from "next/image";
import Lightbox from "./Lightbox";

export default function GallerySect(): React.JSX.Element {
    const [curPhoto, setCurPhoto] = useState<PhotosProps>(photosOfCafe[0]);
    const [isLightboxOpen, setLightboxOpen] = useState(false);

    const handleClickPrev = useCallback(() => {
        const curIndex = photosOfCafe.findIndex((p) => p.id === curPhoto.id);
        const prevIndex = curIndex > 0 ? curIndex - 1 : photosOfCafe.length - 1;
        setCurPhoto(photosOfCafe[prevIndex]);
    }, [curPhoto]);

    const handleClickNext = useCallback(() => {
        const curIndex = photosOfCafe.findIndex((p) => p.id === curPhoto.id);
        const nextIndex = curIndex < photosOfCafe.length - 1 ? curIndex + 1 : 0;
        setCurPhoto(photosOfCafe[nextIndex]);
    }, [curPhoto]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handleClickPrev();
            if (e.key === "ArrowRight") handleClickNext();
            if (e.key === "Enter") setLightboxOpen(true);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [handleClickPrev, handleClickNext]);

    return (
        <section 
            className="w-full bg-black text-white py-12 px-4 md:px-8 lg:px-12"
            id="gallery"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">Gallery</h2>
                </div>

                {/* Main Content - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Featured Photo - Left */}
                    <div className="lg:col-span-2">
                        <div 
                            className="relative rounded-lg overflow-hidden shadow-lg border border-white/10 group cursor-pointer h-64 md:h-72"
                            onClick={() => setLightboxOpen(true)}
                        >
                            <Image
                                src={curPhoto.photo}
                                alt={curPhoto.description}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                priority
                            />
                            
                            {/* Navigation Arrows */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClickPrev();
                                }}
                                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition text-lg"
                                aria-label="Previous"
                            >
                                ←
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClickNext();
                                }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition text-lg"
                                aria-label="Next"
                            >
                                →
                            </button>

                            {/* Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                                <h3 className="font-bold text-white text-sm">{curPhoto.title}</h3>
                                <p className="text-white/60 text-xs">{curPhoto.description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnails - Right */}
                    <div className="flex flex-col gap-3">
                        {photosOfCafe.slice(0, 4).map((photo) => (
                            <div
                                key={photo.id}
                                onClick={() => setCurPhoto(photo)}
                                className={`relative rounded-lg overflow-hidden border cursor-pointer h-16 transition-all
                                    ${curPhoto.id === photo.id ? 'ring-2 ring-white border-white/50' : 'border-white/10 hover:border-white/30'}
                                `}
                            >
                                <Image
                                    src={photo.photo}
                                    alt={photo.description}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Gallery Grid */}
                <div className="mt-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {photosOfCafe.slice(4).map((photo) => (
                            <div
                                key={photo.id}
                                onClick={() => setCurPhoto(photo)}
                                className={`relative rounded-lg overflow-hidden border cursor-pointer h-24 group transition-all
                                    ${curPhoto.id === photo.id ? 'ring-2 ring-white border-white/50' : 'border-white/10 hover:border-white/30'}
                                `}
                            >
                                <Image
                                    src={photo.photo}
                                    alt={photo.description}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Info */}
                <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/60">
                    <p>Use arrow keys to navigate • Click to expand</p>
                </div>
            </div>

            <Lightbox
                photo={isLightboxOpen ? curPhoto : null}
                onClose={() => setLightboxOpen(false)}
                onPrev={handleClickPrev}
                onNext={handleClickNext}
            />

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