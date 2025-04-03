import Image from 'next/image';
import styled from 'styled-components';

interface Props {
    placeholder: string;
    icon: string;
    currentTab?: string;
    tab: string;
    callbackAction: (tab: string) => void;
}

const StyledButton = styled.button<{ $active: boolean }>`
    transition: ease-in all 200ms;
    overflow: ${(props) => props.$active ? "none" : "hidden"};
    transform: ${(props) => props.$active ? "scale(1.02)" : "none"};
    div {
        transition: ease-in all 200ms;
        opacity: ${(props) => props.$active ? "1" : "0.65"};
        img {
            transition: ease-in all 200ms;
            filter: ${(props) => props.$active ? "none" : "blur(1px)"};
        }
    }
    &:hover {
        div {
            opacity: 1;
            img {
                filter: none;
            }
        }
        transform: ${(props) => props.$active ? "scale(1.02)" : "scale(1.02)"};
    }
`;

export default function ButtonTab({tab, placeholder, icon, currentTab, callbackAction} : Props) {
    return (
        <StyledButton
            className="w-[160px] min-h-12 bg-background rounded-2xl cursor-pointer"
            onClick={() => callbackAction(tab)}
            $active={tab === currentTab}
        >
            <div className="relative flex items-center w-full z-10 p-4">
                <span className="text-md tracking-wide leading-none">{placeholder}</span>
                <div className="size-[80px] absolute right-0">
                    <Image
                        src={`/game/icon/item/${icon}`}
                        alt={tab}
                        width={80}
                        height={80}
                    />
                </div>
            </div>
        </StyledButton>
    );
}