import Image from "next/image";

import {getTranslations} from "next-intl/server";
import RichText from "@/components/RichText";
import Link from "next/link";

export default async function Footer() {
    const t = await getTranslations("footer");

    return (
        <footer className="flex flex-col gap-4">
            <RichText className="opacity-65 tracking-wide">{(tags) => t.rich("not-affiliated", tags)}</RichText>
            <div className="flex gap-8">
                <Image
                    src="/footer/footerLogo.svg"
                    alt="Logo"
                    width={96}
                    height={96}
                />
                <div className="flex items-end gap-12 w-full">
                    <div className="flex flex-col gap-4 opacity-65 leading-none">
                        <h2 className="text-md leading-none">{t("discord")}</h2>
                        <div className="flex items-center gap-2 leading-none">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/footer/discord.svg"
                                    alt="Discord"
                                    width={24}
                                    height={24}
                                    color="white"
                                />
                                <Link href={"https://www.discord.gg/"} className="text-sm">Numby.moe</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 opacity-65 leading-none">
                        <h2 className="text-md leading-none">{t("official_links")}</h2>
                        <div className="flex items-center gap-4 leading-none">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/footer/discord.svg"
                                    alt="Discord"
                                    width={24}
                                    height={24}
                                    color="white"
                                />
                                <Link href={"https://www.discord.gg/"} className="text-sm">Discord</Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/footer/twitter.svg"
                                    alt="Twitter"
                                    width={24}
                                    height={24}
                                    color="white"
                                />
                                <Link href={"https://www.x.com/"} className="text-sm">Twitter</Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/footer/reddit.svg"
                                    alt="Reddit"
                                    width={24}
                                    height={24}
                                    color="white"
                                />
                                <Link href={"https://www.reddit.com/"} className="text-sm">Reddit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}