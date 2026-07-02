"use client";

import { useCallback } from "react";
import { menu } from "@/constants/menu";
import { HandleScroll } from "@/utils/handleScroll";
import AsideFuncItems from "./AsideFuncItems";

export default function AsideMenu() {
    const activeSection = HandleScroll();

    const scrollToSection = useCallback((sectionId: number) => {
        document.getElementById(`section-${sectionId}`)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, []);

    return (
        <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 lg:flex justify-center items-center">
            <div className="flex min-h-full w-full flex-col justify-center items-center overflow-y-auto rounded-3xl border border-white/10 bg-linear-to-br from-black via-gray-900 to-gray-800 px-4 py-6 shadow-2xl backdrop-blur">
                <div className="space-y-6 w-full max-w-[260px]">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                            Menu
                        </p>
                        <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 animate-gradient-move" />
                    </div>

                    {menu.map((item) => (
                        <AsideFuncItems
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            onClick={() => scrollToSection(item.id)}
                            isActive={activeSection === `section-${item.id}`}
                        />
                    ))}
                </div>
            </div>
        </aside>
    );
}