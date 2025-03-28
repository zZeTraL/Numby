import {useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"

import Image from "next/image";
import RichText from "@/components/RichText";

export default function ImportWarpCard() {
    const t = useTranslations("home.import_card");

    return (
        <Card>
            <div className="absolute -bottom-5 right-2 pointer-events-none">
                <Image
                    className="size-48 opacity-4"
                    src={"/game/stickers/topaz_5.png"}
                    alt="Warp Icon"
                    width={96}
                    height={96}
                />
            </div>
            <CardHeader className="flex flex-col gap-4">
                <CardTitle className="md:text-2xl text-xl bg-gradient-to-r from-space-blue to-space-pink text-transparent bg-clip-text tracking-wider leading-none">{t("title")}</CardTitle>
            </CardHeader>
            <CardContent>
                <RichText>{(tags) => t.rich("content", tags)}</RichText>
            </CardContent>
            <CardFooter>
                <Link
                    href="/"
                    className="relative transition duration-200 ease-in bg-foreground py-2 pr-2 hover:opacity-65 rounded-e-2xl"
                >
                    <div className="flex items-center px-4 gap-4">
                        <Image
                            src="/game/icon/sign/ShopPaymentIcon.png"
                            alt=""
                            width={32}
                            height={32}
                        />
                        <span className="tracking-wider md:text-sm text-xs">Warp Counter</span>
                    </div>
                </Link>
            </CardFooter>

        </Card>
    );
}