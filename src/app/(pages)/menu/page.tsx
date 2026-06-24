//TODO: make the page with full-component's structure of menu's page

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import AsideMenu from "@/components/AsideMenu";
import SectionMenu from "@/components/SectionMenu";
import { menu } from "@/constants/menu";

export default function Home() {
    return(
        <>
            <NavBar />
            <main className="flex relative justify-between items-start w-full">
                <AsideMenu />
                <div className="flex flex-col w-full gap-2 ml-64">
                    {menu.map((section, index) => (
                        <SectionMenu key={index} {...section} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}