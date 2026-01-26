import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Venkatesh Kumar Raju | GIS Engineer & ML Enthusiast",
  description: "Portfolio of Venkatesh Kumar Raju, a GIS Engineer, Remote Pilot, and Machine Learning Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-body text-foreground antialiased",
          inter.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
