"use client";

import { events } from "@/constants/events";
import React, { useState } from "react";
import { EventBlock } from "./EventBlock";

export default function EventSect(): React.JSX.Element {
    const [page, setPage] = useState<number>(1);
    const pageSize = 2;
    const total = events.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));

    const start = (page - 1) * pageSize;
    const current = events.slice(start, start + pageSize);

    const go = (p: number) => setPage(Math.min(Math.max(1, p), totalPages));
    const prev = () => go(page - 1);
    const next = () => go(page + 1);

    return (
        <section 
            className="w-full bg-black text-white py-16 px-4 md:px-8 lg:px-12"
            id="events"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-white/60 text-sm font-semibold mb-2 uppercase tracking-widest">Events</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">Interactions & Events</h2>
                    <p className="text-white/70 text-lg mt-4 max-w-2xl">Celebrate with us at our latest events and special occasions.</p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {current.map((event) => (
                        <EventBlock key={event.id} {...event} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-3 border-t border-white/10 pt-8">
                    <button
                        onClick={prev}
                        disabled={page === 1}
                        className="px-4 py-2 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Previous page"
                    >
                        ← Prev
                    </button>
                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                            <button
                                key={p}
                                onClick={() => go(p)}
                                aria-current={p === page}
                                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                                    p === page
                                        ? "bg-white/20 border border-white/40 text-white"
                                        : "text-white/70 hover:bg-white/5"
                                }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={next}
                        disabled={page === totalPages}
                        className="px-4 py-2 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Next page"
                    >
                        Next →
                    </button>
                </div>
                <div className="mt-6 text-center text-sm text-white/50">
                    Page {page} of {totalPages}
                </div>
            </div>
        </section>
    );
}