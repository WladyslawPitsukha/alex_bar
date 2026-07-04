"use client";

import { PropsMenuPage } from "@/types/propsMenu";
import CardMenu from "./CardMenu";

export default function SectionMenu({ id, name, products }: PropsMenuPage) {
    return (
        <section
            id={`section-${id}`}
            className="relative scroll-mt-24 mt-6 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-black via-gray-950 to-gray-900/80 px-3 py-6 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.8)] sm:px-4 sm:py-8"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,112,150,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.1),transparent_30%)]" />
            <div className="relative mx-auto w-full max-w-7xl">
                <div className="mb-5 max-w-3xl sm:mb-6">
                    <span className="inline-flex rounded-full bg-white/5 px-2.5 py-1 text-[9px] uppercase tracking-[0.28em] text-white/60 shadow-sm shadow-white/5 sm:text-[10px]">
                        Menu section
                    </span>
                    <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-3xl">
                        {name}
                    </h2>
                    <p className="mt-2 max-w-2xl text-[11px] text-white/70 sm:text-xs">
                        Explore the best dishes in this category with refined flavors, premium ingredients, and a smooth modern presentation.
                    </p>
                    <div className="mt-3 h-1 w-16 rounded-full bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 animate-gradient-move" />
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                    {products.map((product) => (
                        <CardMenu key={product.id} {...product} />
                    ))}
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
            `}
            </style>
        </section>
    );
}