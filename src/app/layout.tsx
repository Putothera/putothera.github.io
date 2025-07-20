import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import DarkVeil from "@/components/react-bits/DarkVeil";
import ClickSpark from "@/components/react-bits/ClickSpark";
// import { Header } from "@/components/Header"; // DELETE THIS LINE

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PUTRA A | Integration Specialist",
  description: "Putra A Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
          <DarkVeil />
        </div>
        
        <ClickSpark>
          <div className="relative z-10 flex flex-col min-h-screen">
            <main className="flex-grow">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </ClickSpark>
      </body>
    </html>
  );
}