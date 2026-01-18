import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactInfoCardProps {
    icon: IconDefinition;
    title: string;
    content: string;
}

export default function ContactInfoCard({ icon, title, content }: ContactInfoCardProps) {
    return (
        <div className="bg-[#1C2226] p-4 rounded-xl flex items-center gap-4 border border-white/5 hover:border-white/10 transition-colors w-full">
            <div className="w-12 h-12 rounded-lg bg-[#15191D] flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={icon} className="text-[#1AE5D6] text-xl" />
            </div>
            <div className="flex flex-col">
                <span className="text-white/50 text-sm">{title}</span>
                <span className="text-white font-medium break-all">{content}</span>
            </div>
        </div>
    );
}
