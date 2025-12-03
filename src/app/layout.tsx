"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/lib/ReactQueryProvider";
import { AsideBar } from "@/app/AsideBar";
import TitleTimeComponent from "@/app/TitleTimeComponent";
import { usePathname } from "next/navigation";
import RightBar from "./setting/RightBar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const showRightBar = pathname === "/setting";
  const showTitleTimeComponent = pathname != "/";

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-sans`}>
        <div
          className={`grid ${
            showRightBar
              ? "grid-cols-[220px_1fr_300px]"
              : "grid-cols-[220px_1fr]"
          } min-h-screen`}
        >
          <AsideBar />
          <main className="bg-[#f7f9fd] pl-8 pt-10 ">
            {showTitleTimeComponent && <TitleTimeComponent />}

            <ReactQueryProvider>{children}</ReactQueryProvider>
          </main>
          {showRightBar && <RightBar />}
        </div>
      </body>
    </html>
  );
}
