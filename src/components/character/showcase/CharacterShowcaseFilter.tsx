import Image from "next/image";

// Types
import {DataType, ElementType, PathType} from "@/utils/types/game";
interface Props {
    data: DataType;
    state: any;
    callbackAction: (data: any) => void;
}

import styled from "styled-components";
const StyledDiv = styled.div<{ $active: boolean }>`
    transition: ease-in all 200ms;
    background-color: var(--background);
    border-radius: calc(var(--radius) + 4px);
    padding: calc(var(--spacing) * 1);;
    cursor: pointer;
    opacity: ${props => props.$active ? 1 : .5};
    &:hover {
        opacity: ${props => props.$active ? null : 1};
    }
`;

export default function CharacterShowcaseFilter({data, state, callbackAction} : Props) {
    const rarity = [
        {id: 4, icon: "StarBig_WhiteGlow.png"},
        {id: 5, icon: "StarBig.png"},
    ]

    return (
        <div className="flex flex-wrap items-center gap-2">
            {
                data.elements?.slice(0, 7).map((element: ElementType, index: number) => (
                    <StyledDiv
                        onClick={() => {callbackAction({type: "toggle", payload: element.id})}}
                        key={index}
                        $active={state.includes(element.id)}
                    >
                        <Image
                            src={`/game/${element.icon}`}
                            alt={element.name}
                            width={32}
                            height={32}
                        />
                    </StyledDiv>
                ))
            }
            {
                data.paths?.slice(0, 7).map((path: PathType, index: number) => (
                    <StyledDiv
                        onClick={() => {callbackAction({type: "toggle", payload: path.id})}}
                        key={index}
                        $active={state.includes(path.id)}
                    >
                        <Image
                            src={`/game/${path.icon}`}
                            alt={path.name}
                            width={32}
                            height={32}
                        />
                    </StyledDiv>
                ))
            }
            {
                rarity.map((star, index) => (
                    <StyledDiv
                        onClick={() => {callbackAction({type: "toggle", payload: star.id})}}
                        key={index}
                        $active={state.includes(star.id)}
                    >
                        <Image
                            src={`/game/icon/deco/${star.icon}`}
                            alt="Star"
                            width={32}
                            height={32}
                        />
                    </StyledDiv>
                ))
            }
        </div>
    );
}