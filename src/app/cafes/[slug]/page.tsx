import { cafes } from "@/constants/cafes";
import { getNameFromSlug } from "@/utils/getNameSlug";
import { notFound } from "next/navigation";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return cafes.map((cafe) => ({
        slug: (cafe.slug ?? cafe.city).toLowerCase().replace(/\s+/g, "-"),
    }));
}

export default async function CafePage({ params }: Props) {
    const { slug } = await params;

    const cafe = cafes.find((item) => {
        const value = (item.slug ?? item.city).toLowerCase();
        return value === slug.toLowerCase();
    });

    if (!cafe) {
        notFound();
    }

    const displayName = getNameFromSlug(cafe.slug ?? cafe.city);

    return (
        <>
            <NavBar />
            <main className="min-h-screen bg-black text-white pt-20">
                {/* Hero Header */}
                <div className="relative w-full bg-linear-to-br from-black via-gray-900 to-black py-16 px-6 md:px-16 lg:px-24">
                    <div className="max-w-6xl mx-auto">
                        <div className="inline-block px-4 py-2 rounded-full bg-green-400/30 text-green-300 text-xs font-bold tracking-widest border border-green-400/50 mb-6">
                            ● ALEX BAR
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
                            {cafe.title}
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-2">
                            {cafe.city}
                        </p>

                        <p className="text-lg text-white/60 mb-8">
                            {displayName}
                        </p>

                        <div className="flex items-center gap-3 text-yellow-400">
                            <span className="text-2xl">★★★★★</span>
                            <span className="text-white text-lg font-semibold">{cafe.info.stars.toFixed(1)} Rating</span>
                        </div>
                    </div>
                </div>

                <div className="bg-black py-16 px-6 md:px-16 lg:px-24">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:border-white/20 hover:bg-white/10 transition">
                            <p className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-widest">📍 Location</p>
                            <p className="text-2xl font-bold mb-2">{cafe.city}</p>
                            <p className="text-white/70">{cafe.address}</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:border-white/20 hover:bg-white/10 transition">
                            <p className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-widest">🕒 Hours</p>
                            <p className="text-2xl font-bold mb-2">{cafe.time.hours}</p>
                            <p className="text-white/70">{cafe.time.days}</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:border-white/20 hover:bg-white/10 transition">
                            <p className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-widest">📞 Contact</p>
                            <p className="text-lg font-bold mb-2">{cafe.connection.phone}</p>
                            <p className="text-white/70 text-sm">{cafe.connection.email}</p>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-16"></div>

                    <div className="max-w-6xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                            About This Location
                        </h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                                <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                                    Description
                                </h3>
                                <p className="text-white/80 leading-relaxed mb-6">
                                    {cafe.info.description}
                                </p>
                                <p className="text-white/70 leading-relaxed">
                                    {cafe.info.moreDesc}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                                <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                                    Fun Fact
                                </h3>
                                <p className="text-white/80 leading-relaxed text-lg italic">
                                    `${cafe.info.coolFacts}`
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-16"></div>

                    <div className="max-w-6xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                            Follow Us
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {cafe.socials?.map((social, idx) => {
                                const gradients = [
                                    "from-pink-500 via-red-400 to-yellow-300",
                                    "from-blue-500 via-cyan-400 to-green-300",
                                ];
                                const gradient = gradients[idx % gradients.length];
                                return (
                                    <a
                                        key={social.id}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`px-6 py-3 rounded-full bg-linear-to-br ${gradient} text-black font-bold hover:scale-105 hover:shadow-lg transition-all shadow-md`}
                                    >
                                        {social.labelText}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-16"></div>

                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                            Guest Reviews
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {cafe.comments?.slice(0, 4).map((comment) => (
                                <div
                                    key={comment.id}
                                    className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 hover:bg-white/10 transition"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <p className="font-bold text-lg">{comment.desc.clientName}</p>
                                        <span className="text-yellow-400 font-bold">⭐ {comment.comments.rating}</span>
                                    </div>
                                    <p className="text-white/70 leading-relaxed">
                                        `${comment.comments.text}`
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}