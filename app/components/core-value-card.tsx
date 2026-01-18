import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CoreValueCardProps {
    icon: IconDefinition;
    description: string;
}

export default function CoreValueCard({ icon, description }: CoreValueCardProps) {
    return (
        <div className="border border-white/10 rounded-2xl p-8 flex flex-col gap-6 bg-transparent hover:border-white/30 transition-colors duration-300 h-full">
            {/* Icon Container */}
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00ADB5] to-[#005F63] flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={icon} className="text-white text-2xl" />
            </div>

            {/* Description */}
            <p className="text-white/80 text-lg leading-relaxed font-medium">
                {description}
            </p>
        </div>
    );
}
