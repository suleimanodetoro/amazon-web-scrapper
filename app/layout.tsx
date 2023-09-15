import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazon Web Scrapper",
  description: "Web scrapping tool, Suleiman Odetoro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* body should be the height of the screen(Helps the sidebar take up vertical length of screen) */}
      <body className="flex bg-[#F7FBFF] h-screen">
        {/* Sidebar */}
        <Sidebar />
        <main className="p-10 max-w-7xl w-full mx-auto overflow-y-auto">
          {/* Header */}
          {children}
        </main>
      </body>
    </html>
  );
}
