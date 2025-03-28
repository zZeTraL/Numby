// next
import Image from "next/image";

// i18n
import {getTranslations} from "next-intl/server";

// Components
import RichText from "@/components/RichText";
import FooterLink from "@/components/footer/FooterLink";

export default async function Footer() {
    const t = await getTranslations("footer");

    return (
        <footer className="flex flex-col gap-8">
            <RichText className="opacity-65 tracking-wide">{(tags) => t.rich("not-affiliated", tags)}</RichText>
            <div className="flex gap-8">
                <div className="h-full flex items-end size-32 max-sm:hidden">
                    <Image
                        src="/footer/footerLogo.png"
                        alt="Logo"
                        width={96}
                        height={96}
                    />
                </div>
                <div className="flex flex-wrap items-end gap-12 max-md:gap-8 max-sm:gap-5 w-full opacity-65">
                    <div className="flex flex-col gap-4 leading-none">
                        <h2 className="text-md leading-none tracking-wide">{t("discord")}</h2>
                        <div className="flex items-center gap-2 leading-none">
                            <FooterLink href="https://discord.gg/" icon="/footer/discord.svg" title="Discord"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 leading-none">
                        <h2 className="text-md leading-none tracking-wide">{t("official_links")}</h2>
                        <div className="flex items-center gap-4 leading-none flex-wrap">
                            <FooterLink href="https://discord.gg/honkaistarrail" icon="/footer/discord.svg" title="Discord"/>
                            <FooterLink href="https://twitter.com/honkaistarrail" icon="/footer/twitter.svg" title="Twitter"/>
                            <FooterLink href="https://www.reddit.com/r/HonkaiStarRail" icon="/footer/reddit.svg" title="Reddit"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 leading-none">
                        <h2 className="text-md leading-none tracking-wide">{t("credits")}</h2>
                        <div className="flex items-center gap-4 leading-none flex-wrap">
                            <FooterLink href="https://github.com/Mar-7th/StarRailRes" icon="/footer/github.svg" title="StarRailRes"/>
                            <FooterLink href="https://github.com/MetaCubeX/mihomo" icon="/footer/github.svg" title="Mihomo"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}