'use client';
import Link from "next/link";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
    return (
        <button
            className="
        bg-[#1AE5D6] 
        text-white 
        px-8 
        py-2 
        rounded-lg 
        font-semibold 
        transition-all 
        hover:opacity-90 
        active:scale-95
        shadow-sm"
            onClick={onClick}>{text}</button>
    );
}