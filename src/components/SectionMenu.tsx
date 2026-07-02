"use client";

import { PropsMenuPage } from "@/types/propsMenu";
import CardMenu from "./CardMenu";

export default function SectionMenu({ id, name, products }: PropsMenuPage) {
    return (
        <section
            id={`section-${id}`}
            className="scroll-mt-24 mt-10 rounded-3xl border border-white/10 bg-linear-to-br from-black via-gray-900 to-gray-800 px-6 py-12 shadow-2xl"
        >
            <div className="mx-auto w-full">
                <div className="mb-8">
                    <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
                        {name}
                    </h2>
                    <div className="mt-4 h-1 w-20 rounded-full bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 animate-gradient-move" />
                </div>
            <div className="grid gap-6 md:grid-cols-2">
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