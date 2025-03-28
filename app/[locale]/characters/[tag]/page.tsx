// Next
import Image from "next/image";
import {notFound} from "next/navigation";

// Fetch functions
import {getCharacterDataByTag} from "@/data/request";

// Types
import {CharacterType} from "@/utils/types/game";

import { Metadata } from "next";
import {CharacterDataType} from "@/utils/types/character";
import RarityStar from "@/components/character/RarityStar";
export const metadata: Metadata = {
    title: "Numby.moe | Characters",
    description: "Your kind Numby asisstant for you."
};

interface Props {
    params: {
        locale: string;
        tag: string;
    }
}

export default async function CharacterPage({params}: Props) {
    const {locale, tag} = await params;
    // const data : DataType = await getGameData(locale, ["elements", "paths", "characters"], true);

    const data : CharacterDataType | null = await getCharacterDataByTag(locale, tag);
    // if character is null then notFound()
    if (!data) notFound();

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="relative flex gap-4 w-full p-4 bg-background rounded-2xl overflow-hidden">
                <div className="absolute -left-5 -top-14 rotate-45 opacity-3 pointer-events-none">
                    <Image
                        src="/sidebar/bgIconsBottom.svg"
                        alt=""
                        width={256}
                        height={512}
                        priority={true}
                    />
                </div>
                <div className="absolute -bottom-15 -right-15 rotate-15 opacity-25 pointer-events-none">
                    <Image
                        className="max-md:hidden"
                        src="/game/icon/logo/bg.png"
                        alt=""
                        width={512}
                        height={512}
                        priority={true}
                    />
                </div>
                <div className="flex flex-row gap-4 z-10">
                    <div className="rounded-full size-24 pointer-events-none bg-foreground">
                        <Image
                            className="rounded-full"
                            // style={{
                            //     background: data.character.rarity === 4 ? "linear-gradient(180deg, #414169 0%, #9169BE 100%)" : "linear-gradient(180deg, #9B695A 0%, #C8A570 100%)"
                            // }}
                            src={`/game/${data.character.icon}`}
                            alt={data.character.tag}
                            width={96}
                            height={96}
                        />
                    </div>
                    <div className="flex flex-col h-full justify-center gap-1">
                        <h1
                            className="text-2xl text-[#BFBFBF] tracking-wider leading-none"
                            // style={{ color: data.element.color }}
                        >
                            {data.character.name}
                        </h1>
                        <RarityStar rarity={data.character.rarity}/>
                    </div>
                </div>
            </div>
        </div>
    );
}