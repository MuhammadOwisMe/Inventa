'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center justify-between px-6 md:px-8 py-4 w-full">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="Inventa Logo"
                            width={120}
                            height={32}
                            priority
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-10 items-center">
                    <Link href="/" className="text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors">
                        Home
                    </Link>
                    <Link href="/products" className="text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors">
                        Products
                    </Link>
                    <Link href="/about" className="text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors">
                        Contact
                    </Link>

                    <Button text="Get Started" onClick={() => { }} />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2 transition-transform active:scale-90"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-8 flex flex-col gap-8 absolute top-full left-0 w-full backdrop-blur-xl">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest font-medium text-white/70">
                        Home
                    </Link>
                    <Link href="/products" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest font-medium text-white/70">
                        Products
                    </Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest font-medium text-white/70">
                        About
                    </Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest font-medium text-white/70">
                        Contact
                    </Link>
                    <div className="pt-4 border-t border-white/10">
                        <Button text="Get Started" onClick={() => setIsOpen(false)} />
                    </div>
                </div>
            )}
        </nav>
    );
}