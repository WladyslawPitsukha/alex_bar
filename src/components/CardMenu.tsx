"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PropsMenuPage } from "@/types/propsMenu";

type Product = PropsMenuPage["products"][number];

export default function CardMenu(product: Product) {
    const { id, name, cost, detailParams, dietary, info } = product;
    const { description, shortDescription, components, photos, photoAlts } = info;
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if(!isExpanded) return;

        const timer = setTimeout(() => {
            setIsExpanded(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [isExpanded]);

    return (
        <button
            type="button"
            onClick={() => setIsExpanded((current) => !current)}
            key={id}
            aria-expanded={isExpanded}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-black/60 text-left shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/80"
        >
            <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 via-yellow-400/5 to-green-300/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            <div className="relative z-10 p-4 sm:p-5">
                {photos.length > 0 && (
                    <div className="mb-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-inner">
                        <div className="relative h-44 w-full overflow-hidden sm:h-48">
                            <Image
                                src={photos[0]}
                                alt={photoAlts?.[0] ?? `${description} image 1`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        {photos.length > 1 && (
                            <div className="grid grid-cols-2 gap-2 bg-black/30 p-2.5">
                                {photos.slice(1, 3).map((photo, idx) => (
                                    <div
                                        key={idx}
                                        className="relative h-20 overflow-hidden rounded-xl border border-white/10"
                                    >
                                        <Image
                                            src={photo}
                                            alt={photoAlts?.[idx + 1] ?? `${description} ${idx + 2}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <h3 className="text-xl font-extrabold text-white leading-tight sm:text-2xl">
                            {name}
                        </h3>
                        <span className="inline-flex items-center rounded-full bg-linear-to-r from-pink-500 via-yellow-400 to-green-300 px-3 py-1.5 text-xs font-bold text-black whitespace-nowrap sm:text-sm">
                            ${cost.price}
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-white/70">
                        {!detailParams.available && (
                            <span className="rounded-full border border-red-400/30 bg-red-400/10 px-2 py-0.5 text-red-200">
                                Unavailable
                            </span>
                        )}
                        {detailParams.featured && (
                            <span className="rounded-full border border-yellow-300/30 bg-yellow-300/10 px-2 py-0.5 text-yellow-100">
                                Featured
                            </span>
                        )}
                        <span>{detailParams.prepTimeMin} min</span>
                    </div>

                    <p className="text-sm text-white/70 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-[11px]">
                        <span>{isExpanded ? "Hide details" : "Tap to view more"}</span>
                        <span className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                            ▼
                        </span>
                    </div>

                    {isExpanded && (
                        <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/75">
                            {shortDescription && (
                                <div>
                                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
                                        Extra description
                                    </p>
                                    <p className="leading-relaxed text-white/75">
                                        {shortDescription}
                                    </p>
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-2 text-[11px] sm:grid-cols-4">
                                <div className="rounded-xl border border-white/10 bg-black/30 px-2 py-2">
                                    <p className="text-white/40">Calories</p>
                                    <p className="font-semibold text-white">{detailParams.calories}</p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-black/30 px-2 py-2">
                                    <p className="text-white/40">Weight</p>
                                    <p className="font-semibold text-white">{detailParams.weightGrams} g</p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-black/30 px-2 py-2">
                                    <p className="text-white/40">Spicy</p>
                                    <p className="font-semibold text-white">Level {detailParams.spicyLevel}</p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-black/30 px-2 py-2">
                                    <p className="text-white/40">Dietary</p>
                                    <p className="font-semibold text-white">
                                        {dietary?.vegetarian ? "Veg" : "Std"}
                                        {dietary?.vegan ? " / Vegan" : ""}
                                        {dietary?.glutenFree ? " / GF" : ""}
                                    </p>
                                </div>
                            </div>

                            {detailParams.allergens.length > 0 && (
                                <div>
                                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
                                        Allergens
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {detailParams.allergens.map((allergen) => (
                                            <span
                                                key={allergen}
                                                className="rounded-full border border-red-400/20 bg-red-400/10 px-2.5 py-1 text-[11px] text-red-100"
                                            >
                                                {allergen}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {components.length > 0 && (
                                <div>
                                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
                                        Ingredients
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {components.map((comp, index) => (
                                            <span
                                                key={index}
                                                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/80 transition-colors hover:bg-white/15"
                                            >
                                                {comp.text}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </button>
    );
}