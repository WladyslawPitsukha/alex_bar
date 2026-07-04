import Image, { StaticImageData } from "next/image";

interface Product {
    id: number;
    name: string;
    price: number;
    info: {
        description: string;
        components: {
            text: string;
            amount: number;
        }[];
        photos: (StaticImageData | string)[];
    };
}

export default function CardMenu(product: Product) {
    const { id, name, cost, detailParams, info } = product;
    const { description, components, photos } = info;

    return (
        <div
            key={id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]"
        >
            <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 via-yellow-400/5 to-green-300/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                <div className="relative z-10 p-4 sm:p-5">
                    {photos.length > 0 && (
                        <div className="mb-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-inner">
                            <div className="relative h-44 w-full overflow-hidden sm:h-48">
                                <Image
                                    src={photos[0]}
                                    alt={`${description} image 1`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            {photos.length > 1 && (
                                <div className="grid grid-cols-2 gap-2 bg-black/30 p-2.5">
                                    {photos.slice(1, 3).map((photo, idx) => (
                                        <div
                                            key={idx}
                                            className="relative h-20 overflow-hidden rounded-xl border border-white/10"
                                        >
                                            <Image
                                                src={photo}
                                                alt={`${description} ${idx + 2}`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <h3 className="text-xl font-extrabold text-white leading-tight sm:text-2xl">
                                {name}
                            </h3>
                            <span className="inline-flex items-center rounded-full bg-linear-to-r from-pink-500 via-yellow-400 to-green-300 px-3 py-1.5 text-xs font-bold text-black whitespace-nowrap sm:text-sm">
                                ${cost.price}
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-[11px] text-white/70">
                            {!detailParams.available && (
                                <span className="rounded-full border border-red-400/30 bg-red-400/10 px-2 py-0.5 text-red-200">
                                    Unavailable
                                </span>
                            )}
                            {detailParams.featured && (
                                <span className="rounded-full border border-yellow-300/30 bg-yellow-300/10 px-2 py-0.5 text-yellow-100">
                                    Featured
                                </span>
                            )}
                            <span>{detailParams.prepTimeMin} min</span>
                        </div>

                        <p className="text-sm text-white/70 leading-relaxed">
                            {description}
                        </p>


                    {components.length > 0 && (
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
                                Ingredients
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {components.map((comp, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/80 transition-colors hover:bg-white/15"
                                    >
                                        {comp.text}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}