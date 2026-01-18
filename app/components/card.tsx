'use client';

import { useState } from "react";
import Image from "next/image";

interface CardProps {
    image: string;
    title: string;
    description: string;
}

export default function Card({ image, title, description }: CardProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className="flex flex-col gap-4 w-full max-w-[350px] group cursor-pointer transition-all duration-300 hover:translate-y-[-5px]">
            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 shadow-2xl">
                {!hasError && (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className={`object-cover transition-all duration-500 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setIsLoaded(true)}
                        onError={() => setHasError(true)}
                    />
                )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-2 px-1">
                <h3 className="text-xl font-semibold text-white tracking-tight">
                    {title}
                </h3>
                <p className="text-zinc-400 text-[15px] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
