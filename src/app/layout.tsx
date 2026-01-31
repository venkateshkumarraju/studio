import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

const title = "Venkatesh Kumar Raju | GIS, Machine Learning, and Computer Vision Expert";
const description = "Explore the portfolio of Venkatesh Kumar Raju, a skilled GIS Engineer, certified Remote Pilot, and Machine Learning specialist with expertise in computer vision, deep learning, and geospatial analysis.";
const imageUrl = "https://raw.githubusercontent.com/venkateshkumarraju/venkateshkumarraju/main/assets/pic%20profile.png";

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: "GIS, Machine Learning, Computer Vision, Remote Sensing, Drone Pilot, Geospatial, Deep Learning, PyTorch, TensorFlow, Python, Portfolio, Venkatesh Kumar Raju",
  authors: [{ name: "Venkatesh Kumar Raju" }],
  openGraph: {
    title: title,
    description: description,
    siteName: "Venkatesh Kumar Raju Portfolio",
    images: [
      {
        url: imageUrl,
        width: 300,
        height: 300,
        alt: "Venkatesh Kumar Raju Profile Picture"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [imageUrl],
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
