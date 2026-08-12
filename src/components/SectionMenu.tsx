"use client";

import { PropsMenuPage } from "@/types/propsMenu";
import CardMenu from "./CardMenu";

export default function SectionMenu({ id, name, products }: PropsMenuPage) {
    return (
        <section
            id={`section-${id}`}
            className="w-full bg-black text-white py-12 px-4 md:px-8 lg:px-12"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <p className="text-white/60 text-sm font-semibold mb-2 uppercase tracking-widest">Menu</p>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">{name}</h2>
                    <p className="text-white/70 text-base mt-3 max-w-2xl">Explore our finest selection with refined flavors and premium ingredients.</p>
                </div>

                {/* Products Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {products.map((product) => (
                        <CardMenu key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}