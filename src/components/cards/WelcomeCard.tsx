import {useTranslations, useFormatter, useNow} from "next-intl";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

import Image from "next/image";
import RichText from "@/components/RichText";

export default function WelcomeCard() {
    const t = useTranslations("home.welcome_card");
    const now = useNow();
    const format = useFormatter();

    return (
        <Card>
            <div className="absolute -bottom-5 right-0 pointer-events-none">
                <Image
                    className="size-48 opacity-4"
                    src={"/game/stickers/topaz_2.png"}
                    alt="Warp Icon"
                    width={96}
                    height={96}
                />
            </div>
            <CardHeader className="flex flex-col gap-4">
                <CardTitle className="md:text-2xl text-xl bg-gradient-to-r from-space-blue to-space-pink text-transparent bg-clip-text tracking-wider leading-none">{t("title")}</CardTitle>
                <div className="flex gap-4 w-full h-8 bg-welcome-card rounded-xl px-4 items-center overflow-hidden">
                    <Image
                        className="size-12"
                        src="/game/icon/avatar/1112.png"
                        alt="Topaz"
                        width={48}
                        height={48}
                    />
                    <span className="text-xs grow-1 opacity-65 leading-none">{t("subtitle")}</span>
                    <span className="text-xs opacity-65 truncate" suppressHydrationWarning>
                        {format.dateTime(now, {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </span>
                </div>
            </CardHeader>
            <CardContent>
                <RichText>{(tags) => t.rich("content", tags)}</RichText>
            </CardContent>
        </Card>
    );
}