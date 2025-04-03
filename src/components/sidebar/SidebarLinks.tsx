"use client";

import styled from 'styled-components';
import Image from 'next/image';
import {Link} from '@/src/i18n/routing';
import {useSelectedLayoutSegment} from 'next/navigation';

// i18n
import {useTranslations} from "next-intl";

// Types
import {SidebarLinkType} from "@/utils/links";

// Styled Components
const StyledLink = styled(Link)<{ $current: boolean }>`
    opacity: ${props => props.$current ? 1 : .75};
    transform: ${props => props.$current ? "scale(1)" : "none"};
    &:hover {
        opacity: 1;
        transform: ${props => props.$current ? "scale(1)" : "scale(1.05)"};
    }
`;

export default function SidebarLink({props} : {props: SidebarLinkType}) {
    const t = useTranslations("sidebar");
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const current = pathname === props.path;

    return (
        <StyledLink
            className="relative overflow-hidden px-3 py-3 rounded-xl ease-in duration-200"
            href={props.path}
            $current={current}
        >
            {current && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-space-blue from-15% to-space-pink to-95% animate-fade-in -z-10" />
            )}
            <div className="flex items-center gap-4">
                <Image
                    src={"/game/icon/sign/" + props.icon}
                    alt=""
                    width={24}
                    height={24}
                />
                <span className="text-s tracking-wide leading-none">{t(props.tl)}</span>
            </div>
        </StyledLink>
    );
}