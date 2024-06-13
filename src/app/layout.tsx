import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import ReloadButton from "@/components/ReloadButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Next.js Caching",
  description: "Let's Learn Next.js Caching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between p-3 border-b border-b-teal-500">
          <NavBar />
          <ReloadButton />
        </header>
        <section className="p-4">{children}</section>
      </body>
    </html>
  );
}
