'use client';

import { useState } from "react";
import Image from "next/image";
import Button from "./button";

interface HeroProps {
    image: string;
    heading: string | React.ReactNode;
    description: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

export default function Hero({
    image,
    heading,
    description,
    buttonText,
    onButtonClick
}: HeroProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
                {!hasError && (
                    <Image
                        src={image}
                        alt=""
                        fill
                        className={`object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-80' : 'opacity-0'}`}
                        priority
                        onLoad={() => setIsLoaded(true)}
                        onError={() => setHasError(true)}
                    />
                )}
                {/* Gradient Overlay (10% to 40% black) */}
                <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/40" />
            </div>
            {/* Content Container */}
            <div className="relative z-10 w-full max-w-5xl px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up">
                    {heading}
                </h1>

                <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                    {description}
                </p>

                {buttonText && (
                    <div className="animate-fade-in-up delay-400">
                        <Button
                            text={buttonText}
                            onClick={onButtonClick || (() => { })}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}