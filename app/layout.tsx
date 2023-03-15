import Navbar from "./components/Navbar";
import "./globals.css";
import { ChampionProvider } from "@/context/ChampionContext";

export const metadata = {
    title: "OP.66",
    description: "self use OP.GG",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ChampionProvider>
                    <Navbar />
                    {children}
                </ChampionProvider>
            </body>
        </html>
    );
}
