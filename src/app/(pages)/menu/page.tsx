import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import AsideMenu from "@/components/AsideMenu";
import SectionMenu from "@/components/SectionMenu";
import { menu } from "@/constants/menu";

export default function MenuPage() {
    return (
        <>
            <NavBar />
            <main className="min-h-screen bg-neutral-950 text-white">
                <div className="realtive mx-auto flex w-full gap-8 px-4 py-8 lg:px-8">
                    <AsideMenu />

                    <div className="flex-1 lg:pl-64 w-full">
                        {menu.map((section) => (
                            <SectionMenu key={section.id} {...section} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}