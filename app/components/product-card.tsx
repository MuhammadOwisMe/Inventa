'use client';

import { useState } from "react";
import Image from "next/image";
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Feature {
    icon: IconDefinition;
    text: string;
}

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    features: Feature[];
    reverse?: boolean;
    imageBgColor?: string;
}

export default function ProductCard({
    title,
    description,
    image,
    features,
    reverse = false,
    imageBgColor = "from-zinc-900 to-black"
}: ProductCardProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 w-full bg-[#111] rounded-[2.5rem] p-8 lg:p-12 overflow-hidden`}>
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center items-start gap-6">
                <h3 className="text-3xl font-bold text-white tracking-tight">
                    {title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                    {description}
                </p>

                {/* Features List */}
                <div className="flex flex-wrap gap-8 my-2">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-zinc-300">
                            <FontAwesomeIcon icon={feature.icon} className="w-5 h-5 text-zinc-500" />
                            <span className="text-sm font-medium opacity-80">{feature.text}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-2">
                    <Button text="Learn More" onClick={() => { }} />
                </div>
            </div>

            {/* Image Container */}
            <div className={`flex-1 w-full relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br ${imageBgColor} flex items-center justify-center`}>
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={350}
                    className={`object-contain w-[85%] h-auto shadow-2xl transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setIsLoaded(true)}
                />
            </div>
        </div>
    );
}
