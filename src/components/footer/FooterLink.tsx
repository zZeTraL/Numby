import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    href: string;
    icon: string;
}

export default function FooterLink({title, href, icon}: Props) {
    return (
        <div className="flex items-center gap-2">
            <div className="flex justify-center md:size-8 size-5">
                <Image
                    src={icon}
                    alt={title}
                    width={24}
                    height={24}
                    color="white"
                />
            </div>
            <Link href={href} target="_blank" className="md:text-sm text-xs">{title}</Link>
        </div>
    );
}