"use client";

import {useLocale, useTranslations} from "next-intl";
import { usePathname } from "@/i18n/routing";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

export default function AppBreadcrumb() {
    const t = useTranslations();
    const pathname = usePathname();
    const locale = useLocale();

    const pathSegments = pathname.split("/").filter(Boolean);

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/${locale}`}>Numby.moe</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                TO REFACTOR
            </BreadcrumbList>
        </Breadcrumb>
    );
}
