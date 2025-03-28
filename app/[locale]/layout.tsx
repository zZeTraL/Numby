import React from "react";

import {NextIntlClientProvider, Locale, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

// Global CSS styles
import "@/app/globals.css"

// Sidebar provider and trigger
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";

// Components
import AppSidebar from "@/components/sidebar/Sidebar";
import AppBreadcrumb from "@/components/Breadcrumb";
import SideLine from "@/components/SideLine";
import Footer from "@/components/footer/Footer";
import {Separator} from "@/components/ui/separator";

// Metadata
export const metadata = {
    title: "Numby.moe",
    description: "Your kind Numby asisstant for you."
}

export default async function LocaleLayout({children, params}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale as Locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider>
                    <SidebarProvider>
                        <AppSidebar/>
                        <div className="flex relative w-full min-h-[100svh]">
                            <main className="flex flex-col w-full m-4 p-4 bg-foreground rounded-xl gap-4">
                                <div className="flex items-center gap-4">
                                    <SidebarTrigger/>
                                    <Separator orientation="vertical"/>
                                    <AppBreadcrumb/>
                                </div>
                                <div className="flex gap-4 grow-1">
                                    <SideLine/>
                                    {children}
                                </div>
                                <Footer/>
                            </main>
                        </div>
                    </SidebarProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}