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
      <body className="flex">
        {/* Sidebar */}
        <Sidebar />
        <main>
          {/* Header */}
          {children}
        </main>
      </body>
    </html>
  );
}
