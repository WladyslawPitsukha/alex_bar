"use client";

import { menu } from "@/constants/menu";
import { HandleScroll } from "@/utils/handleScroll";
import AsideFuncItems from "./AsideFuncItems";

export default function AsideMenu() {
    const activeSection = HandleScroll();
    
    return(
        <aside
            className="flex flex-col sticky top-0 h-screen transition-all duration-300 hover:shadow-xl"
        >
            <section className="flex flex-col items-start justify-between h-full py-9 w-13 bg-gray-800 overflow-y-auto transition-all duration-300">
                <div className="flex flex-col w-full">
                    {menu.map((item, index) => (
                        <AsideFuncItems
                            key={index}
                            name={item.name}
                            onClick={item.onClick}
                            isActive={activeSection === item.name}
                        />
                    ))}
                </div>
            </section>
        </aside>
    )
}