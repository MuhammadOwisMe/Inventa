'use client';

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/5 py-12 pb-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-8">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left - Privacy */}
                    <Link href="/privacy" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                        Privacy Policy
                    </Link>

                    {/* Middle - Social Icons */}
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-zinc-500 hover:text-white transition-all hover:scale-110">
                            <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-zinc-500 hover:text-white transition-all hover:scale-110">
                            <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-zinc-500 hover:text-white transition-all hover:scale-110">
                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Right - Terms */}
                    <Link href="/terms" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                        Terms of Service
                    </Link>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="text-center pt-4 border-t border-white/5">
                    <p className="text-zinc-600 text-[13px]">
                        © {new Date().getFullYear()} Inventa. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
