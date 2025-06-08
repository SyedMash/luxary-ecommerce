import type {Metadata} from "next";
import {Raleway} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import localFont from "next/font/local";
import {Footer} from "@/components/Footer";
import Navbar from "@/components/Navbar";

const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
    display: "swap",
});

const gambarino = localFont({
    src: "./gambarino.woff2",
    display: "swap",
    variable: "--font-gambarino",
});

export const metadata: Metadata = {
    title: "Cote Royal By Mash",
    description: "A luxury e-commerce website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${raleway.variable} ${gambarino.variable} antialiased`}
        >
        <body className="bg-neutral-950 text-white">
        <main className="pt-14 md:pt-16">
            <Navbar/>
            {children}
            <Footer/>
        </main>
        </body>
        </html>
    );
}
