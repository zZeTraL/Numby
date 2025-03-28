"use client";

// React
import {useState} from "react";

// i18n
import {useTranslations} from "next-intl";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Props {
    options: readonly string[];
    callbackAction: (option: string) => void;
}

export default function AppSortBy({options, callbackAction}: Props) {
    const t = useTranslations("sorter");
    return (
        <Select onValueChange={callbackAction}>
            <SelectTrigger className="w-[180px]" size="lg">
                <SelectValue placeholder={t("title")}/>
            </SelectTrigger>
            <SelectContent>
                {
                    options.map((option: string, index: number) => (
                        <SelectItem
                            key={index}
                            value={option}
                        >
                            {t(option)}
                        </SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    );
}