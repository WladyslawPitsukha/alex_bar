"use client"

import React from 'react';
import { linksFot } from '@/constants/linksFot'
import { IconType } from 'react-icons'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 w-full border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* Brand */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-black tracking-tight">Alex Bar</h3>
                        <p className="text-white/60 text-sm">Cozy cafe & bar — good vibes only</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-white/70">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-white/60 hover:text-white">
                            <li><a href="/#home" className="hover:text-white transition">Home</a></li>
                            <li><a href="/#location" className="hover:text-white transition">Locations</a></li>
                            <li><a href="/#menu" className="hover:text-white transition">Menu</a></li>
                            <li><a href="/#events" className="hover:text-white transition">Events</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-white/70">Follow Us</h4>
                        <div className="flex items-center gap-3">
                            {linksFot.map((link) => {
                                const Icon = link.icon as IconType;
                                return (
                                    <a
                                        key={link.id}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.labelText}
                                        className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 py-6">
                    <div className="text-sm text-white/50 text-center">
                        © {new Date().getFullYear()} Alex Bar. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}