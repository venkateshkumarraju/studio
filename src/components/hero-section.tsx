import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { LiquidGradientBackground } from "./liquid-gradient-background";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden py-20 md:py-32"
    >
      <LiquidGradientBackground />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Venkatesh Kumar Raju
            </h1>
            <p className="max-w-2xl mx-auto text-xl font-medium text-foreground/90">
              GIS Engineer | Remote Pilot | Machine Learning Enthusiast | Computer Vision
            </p>
            <p className="max-w-3xl mx-auto text-foreground/80">
              I am a dedicated GIS Engineer, DGCA Certified Remote Pilot, and OpenCV Master with strong experience in deep learning using PyTorch, Keras, and TensorFlow. My expertise lies in geospatial analysis, 3D mapping, drone operations, and computer vision.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
