import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import {NextRequest} from "next/server";

// export default createMiddleware(routing);

export async function middleware(request: NextRequest) {
    // add pathname to request object
    const headers = new Headers(request.headers);
    headers.set("x-current-path", request.nextUrl.pathname);

    const newRequest = new NextRequest(request, {
        headers
    });

    const handleI18nRouting = createMiddleware(routing);
    return handleI18nRouting(newRequest);
}

export const config = {
    matcher: ["/", "/(en|fr|kr)/:path*"],
};