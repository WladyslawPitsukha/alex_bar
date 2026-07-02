"use client";

import { useEffect, useState } from "react";

export function HandleScroll() {
    const [activeSection, setActiveSection] = useState<string>("Home");

    useEffect(() => {
        const handleScrollElem = () => {
            const sections = document.querySelectorAll<HTMLElement>('section[id^="section-"]');
            let currentSec = "Home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                
                if (window.scrollY >= sectionTop - 80) {
                    currentSec = section.getAttribute("id") || "Home";
                }
            });

            setActiveSection(currentSec);
        };

        handleScrollElem();
        window.addEventListener("scroll", handleScrollElem);
        return () => window.removeEventListener("scroll", handleScrollElem);
    }, []);

    return activeSection;
}