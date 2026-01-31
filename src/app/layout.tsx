import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Venkatesh Kumar Raju | GIS, Machine Learning, and Computer Vision Expert",
  description: "Explore the portfolio of Venkatesh Kumar Raju, a skilled GIS Engineer, certified Remote Pilot, and Machine Learning specialist with expertise in computer vision, deep learning, and geospatial analysis.",
  keywords: "GIS, Machine Learning, Computer Vision, Remote Sensing, Drone Pilot, Geospatial, Deep Learning, PyTorch, TensorFlow, Python, Portfolio, Venkatesh Kumar Raju",
  authors: [{ name: "Venkatesh Kumar Raju" }],
  openGraph: {
    title: "Venkatesh Kumar Raju | GIS, Machine Learning, and Computer Vision Expert",
    description: "Explore the portfolio of Venkatesh Kumar Raju, a skilled GIS Engineer and Machine Learning specialist.",
    url: "https://raw.githubusercontent.com/venkateshkumarraju/venkateshkumarraju/main/assets/pic%20profile.png",
    siteName: "Venkatesh Kumar Raju Portfolio",
    images: [
      {
        url: "https://raw.githubusercontent.com/venkateshkumarraju/venkateshkumarraju/main/assets/pic%20profile.png",
        width: 300,
        height: 300,
        alt: "Venkatesh Kumar Raju Profile Picture"
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
