import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/sections";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Space tourism web site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative w-screen h-[100dvh] ">
          <Header />
          <section className="h-full w-full">{children}</section>
        </main>
      </body>
    </html>
  );
}
