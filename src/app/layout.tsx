import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import ReloadButton from "@/components/ReloadButton";
import UpdateButton from "@/components/UpdateButton";
import Code from "@/components/elements/Code";

const notosans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Next.js Caching",
  description: "Let's Learn Next.js Caching",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const todos = await (
    await fetch("http://localhost:4000/todos", {
      // cache: "no-store",
    })
  ).json();
  return (
    <html lang="en">
      <body className={notosans.className}>
        <header className="flex items-center justify-between gap-3 p-3 border-b border-b-teal-500">
          <NavBar />
          <UpdateButton />
          <ReloadButton />
        </header>
        <section className="p-4">
          <div className="flex gap-8 items-start mt-4 p-6 border border-dashed border-zinc-500 rounded-md relative">
            <span className="inline-block absolute -top-4 left-4 px-3 py-1 rounded-full border bg-zinc-50 border-zinc-500 text-zinc-500 text-sm">
              home
            </span>
            <div>
              <Code>
                (from "/" layout)
                <br />
                {JSON.stringify(todos, null, 2)}
              </Code>
            </div>
            <div>{children}</div>
          </div>
        </section>
      </body>
    </html>
  );
}
