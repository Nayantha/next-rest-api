import '@/styles/globals.css'
import React from "react";
import {Inter} from "next/font/google";
import {classNameMerge} from "@/lib/utils";

const inter = Inter({subsets: ["latin"]})
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={classNameMerge()}>
        <body>{children}</body>
        </html>
    )
}
