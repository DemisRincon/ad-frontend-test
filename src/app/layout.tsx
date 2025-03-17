import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import InnerLayout from "@/components/innerLayout";

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
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${area.variable}`}>
        <InnerLayout>{children}</InnerLayout>
      </body>
    </html>
  );
}
