"use client";

// React
import {useReducer, useState} from "react";

// Components
import AppSortBy from "@/components/SortBy";
import CharacterFilter from "@/components/character/CharacterFilter";
import CharacterCard from "@/components/character/CharacterCard";

// Types
import {DataType, CharacterType} from "@/utils/types/game";
interface Props {
    data: DataType;
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "toggle":
            if (state.includes(action.payload)) return state.filter((item: any) => item !== action.payload);
            else return [...state, action.payload];
        default:
            return state;
    }
};

const availableSortOptions = ["name", "element", "path", "rarity"];
const availableFilters = ["Physical", "Fire", "Ice", "Thunder", "Wind", "Quantum", "Imaginary", "Warrior", "Rogue", "Mage", "Shaman", "Warlock", "Knight", "Priest"];

export default function CharacterShowcase({data}: Props) {
    const [sortOption, setSortOption] = useState<string>("");
    const [state, dispatch] = useReducer(reducer, availableFilters);

    const handleSort = (option: string) => setSortOption(option);

    // sort data.characters based on sortOption
    if (availableSortOptions.includes(sortOption)) {
        data.characters?.sort((a: CharacterType, b: CharacterType) : number  => {
            switch (sortOption) {
                case "name": return a.name.localeCompare(b.name);
                case "element": return a.element.localeCompare(b.element);
                case "path": return a.path.localeCompare(b.path);
                case "rarity": return b.rarity - a.rarity;
                default: return 0;
            }
        });
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                <AppSortBy options={availableSortOptions} callbackAction={handleSort} />
                <CharacterFilter data={data} state={state} callbackAction={dispatch} />
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {
                    data.characters?.map((character: CharacterType, index: number) => {
                        if (character.name === "{NICKNAME}") return null;
                        if (state.length > 0 && (!state.includes(character.element) || !state.includes(character.path))) return null;

                        const path = data.paths?.find((path) => path.id === character.path);
                        const element = data.elements?.find((element) => element.id === character.element);

                        if (!path || !element) return null;

                        return (
                            <CharacterCard
                                character={character}
                                path={path}
                                element={element}
                                key={index}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}