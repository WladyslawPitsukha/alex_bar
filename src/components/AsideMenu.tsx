"use client";

import { menu } from "@/constants/menu";
import { getIcon } from "@/utils/iconMapper";
import { HandleScroll } from "@/utils/handleScroll";
import AsideFuncItems from "./AsideFuncItems";

export default function AsideMenu() {
    const activeSection = HandleScroll();
    
    return(
        <aside
            className="flex flex-col fixed left-0 top-0 h-full w-64 transition-all duration-300 hover:shadow-xl z-30"
        >
            <section className="flex flex-col items-start w-full justify-between h-full py-9 bg-gray-800 overflow-y-auto transition-all duration-300">
                <div className="flex flex-col w-full">
                    {menu.map((item, index) => (
                        <AsideFuncItems
                            key={index}
                            icon={getIcon(item.icon)}
                            name={item.name}
                            onClick={item.onClick}
                            isActive={activeSection === item.name}
                        />
                    ))}
                </div>
            </section>
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
        </aside>
    )
}