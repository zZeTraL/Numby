"use client";

// React
import {useState} from "react";

// Next
import {usePathname, useRouter, useSearchParams} from "next/navigation";

// Components
import ButtonTab from "@/components/character/information/ButtonTab";
import ProfileTab from "@/components/character/information/ProfileTab";

// Types
import {CharacterDataType} from "@/utils/types/character";

interface Props {
    data: CharacterDataType;
}

// Variables
const availableTabs = ["profile", "skills", "traces", "eidolons", "builds"]

export default function CharacterInformation({data} : Props) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const initialState = availableTabs.includes(searchParams.get("tab") as string) ? searchParams.get("tab") as string : "profile";
    const [currentTab, setCurrentTab] = useState<string>(initialState);

    const handleTabChange = (tab: string) => {
        if (availableTabs.includes(tab)) {
            setCurrentTab(tab);
            const params = new URLSearchParams(searchParams.toString());
            if (tab === "profile") return router.push(`${pathname}`);
            params.set("tab", tab);
            router.push(`${pathname}?${params.toString()}`);
        } else {
            console.error(`Tab ${tab} is not available`);
        }
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="relative flex justify-center">
                <div
                    className="absolute top-1/2 left-0 w-full h-px rounded-full -z-10 transform -translate-y-1/2 max-lg:hidden"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${data.element.color} 50%, transparent)`
                    }}
                ></div>
                <div className="flex justify-center lg:gap-12 md:gap-8 gap-4 flex-wrap transition ease-in duration-200  ">
                    <ButtonTab tab="profile" placeholder="Profile" icon="212.png" callbackAction={handleTabChange} currentTab={currentTab}/>
                    <ButtonTab tab="skills" placeholder="Skills" icon="252.png" callbackAction={handleTabChange} currentTab={currentTab}/>
                    <ButtonTab tab="traces" placeholder="Traces" icon="241.png" callbackAction={handleTabChange} currentTab={currentTab}/>
                    <ButtonTab tab="eidolons" placeholder="Eidolons" icon="261.png" callbackAction={handleTabChange} currentTab={currentTab}/>
                    <ButtonTab tab="builds" placeholder="Builds" icon="71001.png" callbackAction={handleTabChange} currentTab={currentTab}/>
                </div>
            </div>
            {currentTab === "profile" && <ProfileTab data={data}/>}
            {currentTab === "skills" && <div>Skills</div>}
            {currentTab === "traces" && <div>Traces</div>}
            {currentTab === "eidolons" && <div>Eidolons</div>}
            {currentTab === "builds" && <div>Builds</div>}
        </div>
    );
}