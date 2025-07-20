import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import DarkVeil from "@/components/react-bits/DarkVeil";
import ClickSpark from "@/components/react-bits/ClickSpark";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed top-0 left-0 w-full h-screen -z-10">
            <DarkVeil />
          </div>
          
          <ClickSpark>
            <div className="relative z-10 flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
            </div>
          </ClickSpark>

        </ThemeProvider>
      </body>
    </html>
  );
}