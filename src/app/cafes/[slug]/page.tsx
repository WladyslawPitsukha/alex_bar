import { cafes } from "@/constants/cafes";
import { getNameFromSlug } from "@/utils/getNameSlug";
import { notFound } from "next/navigation";

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
        <div className="min-h-screen bg-white text-slate-900">
            <header className="bg-slate-900 p-10 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-yellow-300">
                Alex Bar
                </p>
                <h1 className="mt-4 text-4xl font-bold">{cafe.title}</h1>
                <h2 className="mt-2 text-2xl text-slate-200">{cafe.city}</h2>
                <p className="mt-2 text-sm text-slate-300">{displayName}</p>
            </header>

            <main className="mx-auto max-w-6xl p-8">
                <div className="grid gap-8 md:grid-cols-2">
                <section className="rounded-2xl bg-slate-100 p-6">
                    <h3 className="text-2xl font-bold">About</h3>
                    <p className="mt-4 text-slate-700">{cafe.info.description}</p>
                    <p className="mt-4 text-slate-700">{cafe.info.moreDesc}</p>
                    <p className="mt-4 text-slate-700">{cafe.info.coolFacts}</p>
                </section>

                <section className="rounded-2xl bg-slate-100 p-6">
                    <h3 className="text-2xl font-bold">Details</h3>
                    {[
                        { label: "Address", value: cafe.address },
                        { label: "Hours", value: cafe.time.hours },
                        { label: "Rating", value: `${cafe.info.stars} ⭐` },
                        { label: "Phone", value: cafe.connection.phone },
                        { label: "Email", value: cafe.connection.email },
                    ].map((item) => (
                        <p key={item.label} className="mt-4 text-slate-700">
                            <span className="font-semibold text-slate-900">{item.label}:</span>{" "}
                            {item.value}
                        </p>
                    ))}
                </section>
                </div>

                <section className="mt-10">
                    <h3 className="text-2xl font-bold">Socials</h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                        {cafe.socials?.map((social) => (
                            <a
                                key={social.id}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-700"
                            >
                                {social.labelText}
                            </a>
                        ))}
                    </div>
                </section>

                <section className="mt-10">
                    <h3 className="text-2xl font-bold">Reviews</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                        {cafe.comments?.slice(0, 4).map((comment) => (
                            <div
                                key={comment.id}
                                className="rounded-xl border border-slate-200 p-4"
                            >
                                <p className="font-semibold">{comment.desc.clientName}</p>
                                <p className="mt-1 text-yellow-600">⭐ {comment.comments.rating}</p>
                                <p className="mt-2 text-slate-700">{comment.comments.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
