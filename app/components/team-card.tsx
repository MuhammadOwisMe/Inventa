import Image from 'next/image';

interface TeamCardProps {
    name: string;
    role: string;
    description: string;
    image: string;
}

export default function TeamCard({ name, role, description, image }: TeamCardProps) {
    return (
        <div className="bg-[#1A1F24] p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 max-w-xl w-full hover:bg-[#1f252b] transition-colors duration-300">
            <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover rounded-full"
                />
            </div>
            <div className="flex flex-col text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
                <p className="text-[#00ADB5] font-semibold text-sm mb-3">{role}</p>
                <p className="text-white/70 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
