import '@/styles/globals.css'
import React from "react";
import {Inter} from "next/font/google";
import {classNameMerge} from "@/lib/utils";
import Providers from "@/components/Providers";
import NavBar from "@/components/NavBar"

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={classNameMerge(
            "bg-white text-slate-900 antialiased", inter.className
        )}>
        <body className={"min-h-screen bg-slate-50 dark:bg-slate-900 antialiased"}>
        <Providers>
            {children}
            <NavBar/>
        </Providers>
        {/* Allow more height in mobile devices */}
        <div className={"h-40 md:hidden"}></div>
        </body>
        </html>
    )
}
