import {NextRequest, NextResponse} from "next/server";
import {getGameData} from "@/data/request";

// Types
import {DataType} from "@/utils/types/game";

export async function GET(request: NextRequest, { params }: { params: { locale: string } }) : Promise<NextResponse> {
    const locale = params.locale;
    const files = await fetch("http://localhost:3000/data/manifest.json").then(res => res.json());

    const response : DataType = await getGameData(locale, files, true);

    return NextResponse.json(response);
}
