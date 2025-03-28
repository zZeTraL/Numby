

import Image from "next/image";

// i18n
import {useTranslations} from "next-intl";

// Images
import bgIconsTop from "@/public/sidebar/bgIconsTop.svg";
import bgIconsBottom from "@/public/sidebar/bgIconsBottom.svg";
import flare from "@/public/sidebar/flare.svg";

import {SidebarLinkType, sidebarLinks} from "@/utils/links";

// Components
import SidebarLink from "@/components/sidebar/SidebarLinks";
import LocaleSwitcher from "@/components/sidebar/LocaleSwitcher";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
} from "@/components/ui/sidebar"

export default function AppSidebar() {
    const t = useTranslations("sidebar");

    return (
        <Sidebar>
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    className="absolute top-0 left-0 w-full h-48 bg-no-repeat bg-center opacity-3"
                    src={bgIconsTop}
                    alt=""
                    priority={true}
                />
                <Image
                    className="absolute w-full h-full bg-no-repeat bg-center"
                    src={flare}
                    alt=""
                    priority={true}
                />
                <Image
                    className="absolute bottom-0 left-0 w-full h-48 bg-no-repeat bg-center opacity-3"
                    src={bgIconsBottom}
                    alt=""
                    priority={true}
                />
            </div>
            <SidebarHeader>
                <Image
                    src={"/logo.svg"}
                    alt={"logo"}
                    width={256}
                    height={256}
                    priority={true}
                />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>{t("menu")}</SidebarGroupLabel>
                    <SidebarMenu>
                        {
                            sidebarLinks.slice(0, 6).map((link: SidebarLinkType, index: number) => (
                                <SidebarLink props={link} key={index}/>
                            ))
                        }
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>{t("database")}</SidebarGroupLabel>
                    <SidebarMenu>
                        {
                            sidebarLinks.slice(6).map((link: SidebarLinkType, index: number) => (
                                <SidebarLink props={link} key={index}/>
                            ))
                        }
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <LocaleSwitcher />
            </SidebarFooter>
        </Sidebar>
    )
}
