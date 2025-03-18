import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import InnerLayout from "@/components/innerLayout";
import GameContexProvider from "@/utils/context/provider";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-archivo",
});

const area = localFont({
  src: [{ path: "../utils/fonts/fonnts.com-Area_Normal_Regular.otf" }],
  variable: "--font-area",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_VERCEL_URL || "https://example-videogame-store.com"
  ),
  title: "Example Videogame Store - Your One-Stop Shop for Games",
  description:
    "Example Videogame Store offers a wide selection of video games for all platforms, including the latest releases and classic favorites.",
  keywords: [
    "Example Videogame Store",
    "Video Games",
    "Game Store",
    "Buy Video Games",
    "Latest Releases",
    "Classic Games",
    "PC Games",
    "Console Games",
    "Gaming Accessories",
    "PlayStation",
    "Xbox",
    "Nintendo",
    "Steam",
    "Epic Games",
    "Game Reviews",
    "Gaming News",
    "Game Trailers",
    "Game Deals",
    "Online Game Store",
    "Gaming Community",
  ],
  openGraph: {
    title: "Example Videogame Store - Your One-Stop Shop for Games",
    description:
      "Example Videogame Store offers a wide selection of video games for all platforms, including the latest releases and classic favorites.",
    url:
      process.env.NEXT_PUBLIC_VERCEL_URL ||
      "https://example-videogame-store.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Example Videogame Store - Your One-Stop Shop for Games",
    description:
      "Example Videogame Store offers a wide selection of video games for all platforms, including the latest releases and classic favorites.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${area.variable}`} role="main">
        <GameContexProvider>
          <InnerLayout>{children}</InnerLayout>
        </GameContexProvider>
      </body>
    </html>
  );
}
