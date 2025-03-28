import {Link} from "@/i18n/routing";

import Image from "next/image";

import {CharacterType, ElementType, PathType} from "@/utils/types/game";
interface Props {
    character: CharacterType;
    element: ElementType;
    path: PathType;
}

export default function CharacterCard({character, element, path} : Props) {
    return (
        <Link
            href={`/characters/${character.tag}`}
            className="w-32 rounded-t-lg overflow-hidden"
            style={{
                background: character.rarity === 4 ? "linear-gradient(180deg, #414169 0%, #9169BE 100%)" : "linear-gradient(180deg, #9B695A 0%, #C8A570 100%)"
            }}
        >
            <div className="relative size-32">
                <Image
                    className="pointer-events-none"
                    src={`/game/${character.icon}`}
                    alt={character.name}
                    width={128}
                    height={128}
                />
                <div className="bg-background absolute top-1 left-1 rounded-md p-1">
                    <Image
                        className="pointer-events-none"
                        src={`/game/${element.icon}`}
                        alt={element.id}
                        width={24}
                        height={24}
                    />
                </div>
                <div className="bg-background absolute bottom-1 left-1 rounded-md p-1">
                    <Image
                        className="pointer-events-none"
                        src={`/game/${path.icon}`}
                        alt={path.id}
                        width={24}
                        height={24}
                    />
                </div>
            </div>
            <div className="w-full bg-background p-1 text-center">
                <span className="text-md truncate">{character.name}</span>
            </div>
        </Link>
    );
}