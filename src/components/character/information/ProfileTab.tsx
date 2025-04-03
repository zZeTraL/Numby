// Next
import Image from "next/image";

// Types
import {CharacterDataType} from "@/utils/types/character";

interface Props {
    data: CharacterDataType;
}

export default function ProfileTab({data} : Props) {
    return (
        <div className="grid grid-cols-2 gap-4">
            <Image
                className="w-full pointer-events-none"
                src={`/game/${data.character.portrait}`}
                alt={data.character.name}
                width={1024}
                height={1024}
                priority={true}
            />
            <div className="m-8">
                <div className="flex flex-col w-full gap-4">
                    <div className="flex items-center pr-4">
                        <h1 className="text-4xl text-[#BFBFBF] tracking-wider leading-none grow-1">
                            {data.character.name}
                        </h1>
                        <Image
                            src={`/game/${data.element.icon}`}
                            alt={data.element.id}
                            width={48}
                            height={48}
                        />
                    </div>

                    <div className="flex gap-4 items-center w-full bg-background rounded-2xl">
                        <div className="size-8 m-2 pointer-events-none">
                            <Image
                                src={`/game/${data.path.icon}`}
                                alt={data.element.name}
                                width={32}
                                height={32}
                            />
                        </div>
                        <span className="text-md tracking-wide leading-none">{data.path.name}</span>
                    </div>

                    <div className="flex flex-col gap-1 opacity-65">
                        <h2 className="text-md tracking-widest">Faction</h2>
                        <div className="border-1 border-dashed border-white"></div>
                    </div>

                    <div className="flex flex-col gap-4 my-4">
                        <p className="text-md tracking-wide leading-7">
                            <span className="text-[#BFBFBF]">{data.character.name}</span> is a {data.character.rarity === 4 ? <span className="text-important">4★</span> : <span className="text-ssr">5★</span>} character from the <span style={{color: data.element.color}}>{data.element.name}</span> element who follows the <span style={{color: data.element.color}}>Path of {data.path.name}</span>.
                        </p>
                        {
                            data.descriptions.map((desc, index) => (
                                <p
                                    className="text-md tracking-wide leading-7"
                                    key={index}
                                >
                                        {desc.desc}
                                </p>
                            ))
                        }
                        <p className="text-md tracking-wide leading-7">
                            To learn more about <span className="text-[#BFBFBF]">{data.character.name}</span>, feel free to check each tab above for more information.
                        </p>
                    </div>
                    <div>
                        btn
                    </div>
                </div>
            </div>
        </div>
    );
}