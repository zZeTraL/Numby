// i18n
import {getTranslations, getLocale} from 'next-intl/server';

// Types
import {DataType, ElementType, PathType} from "@/utils/types/game";

// data
import {getGameData} from "@/data/request";

// Components
import CharacterShowcase from "@/components/character/CharacterShowcase";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Numby.moe | Characters",
    description: "Your kind Numby asisstant for you."
};

export default async function Characters() {
    const t = await getTranslations("characters");
    const locale = await getLocale();

    // Fetching data
    const data: DataType = await getGameData(locale, ["elements", "paths", "characters"], true);

    return (
        <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl">{t("title")}</h1>
            <CharacterShowcase data={data} />
        </div>
    );
}