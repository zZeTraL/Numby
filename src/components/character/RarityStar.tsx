import Image from "next/image";

interface Props {
    rarity: number;
}

export default function RarityStar({rarity}: Props) {

    const getIconNameByRarity = (rarity: number) => {
        switch (rarity) {
            case 1: return "Star1.png";
            case 2: return "Star2.png";
            case 3: return "Star3.png";
            case 4: return "Star4.png";
            case 5: return "Star5.png";
            default: return "Star1.png";
        }
    }

    return (
        <div className="flex gap-1 w-32 h-6 pointer-events-none">
            <Image
                src={`/game/icon/deco/${getIconNameByRarity(rarity)}`}
                alt="Star"
                width={128}
                height={128}
            />
        </div>
    );
}