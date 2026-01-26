import Link from "next/link";
import Image from "next/image";
import { SphereAnimation } from "@/components/sphere-animation";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import placeholderImages from "@/app/lib/placeholder-images.json";
import { LowPolyBackground } from "./low-poly-background";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden py-20 md:py-32"
    >
      <LowPolyBackground />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Venkatesh Kumar Raju
            </h1>
            <p className="text-xl font-medium text-primary">
              GIS Engineer | Remote Pilot | Machine Learning Enthusiast | Computer Vision
            </p>
            <p className="max-w-xl text-gray-200">
              I am a dedicated GIS Engineer, DGCA Certified Remote Pilot, and OpenCV Master with strong experience in deep learning using PyTorch, Keras, and TensorFlow. My expertise lies in geospatial analysis, 3D mapping, drone operations, and computer vision.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href="/resume.pdf" download>
                  View Resume <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden h-full min-h-[400px] items-center justify-center lg:flex">
             <Image
                src={placeholderImages.profileSphere.src}
                width={placeholderImages.profileSphere.width}
                height={placeholderImages.profileSphere.height}
                alt={placeholderImages.profileSphere.alt}
                data-ai-hint={placeholderImages.profileSphere.hint}
                className="absolute rounded-full"
            />
            <SphereAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
