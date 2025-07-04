import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { ThemeProvider } from "@/utils/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard App",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-text-main dark:bg-dark-background dark:text-dark-text-main transition-colors`}
      >
        <ThemeProvider>
        <div className="fixed top-0 z-50 w-full md:w-[calc(100%-16rem)] md:ml-64">
          <Navbar />
        </div>

        <div className="flex pt-16">
          <div className="hidden md:block fixed top-16 left-0 h-[calc(100vh-4rem)] w-64">
            <Sidebar />
          </div>
          <main className="ml-0 md:ml-64 p-6 w-full min-h-[calc(100vh-4rem)]">
            {children}
          </main>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
