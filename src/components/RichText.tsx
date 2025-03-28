import {ReactNode} from 'react';
import {cn} from "@/src/lib/utils";

type Tag = "b" | "i" | "br" | "important";

type Props = {
    children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode
    className?: string
};

export default function RichText({children, className}: Props) {
    return (
        <p className={cn("md:text-sm md:text-justify text-xs font-normal break-words", className)}>
            {children({
                b: (chunks: ReactNode) => <b className="font-semibold">{chunks}</b>,
                i: (chunks: ReactNode) => <i className="italic">{chunks}</i>,
                important: (chunks: ReactNode) => <span className="text-important">{chunks}</span>,
                br: () => <br />
            })}
        </p>
    );
}