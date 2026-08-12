import { EventProps } from "@/types/eventProps";
import Image from "next/image";

export function EventBlock({
    id, title, date, description, images
}: EventProps): React.JSX.Element {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <article
            aria-labelledby={`event-${id}-title`}
            className="flex flex-col gap-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition"
        >
            {/* Gallery Grid */}
            <div className="grid grid-cols-3 gap-3">
                {images.map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                            src={image.src}
                            alt={image.alt || `Event image ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
                <h2
                    id={`event-${id}-title`}
                    className="text-2xl font-bold text-white"
                >
                    {title}
                </h2>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">{formattedDate}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </article>
    );
}