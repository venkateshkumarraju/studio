import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden py-20 md:py-32"
    >
      <div className="absolute inset-0 z-0">
        <Globe className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] animate-spin-slow text-primary/5" />
      </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Venkatesh Kumar Raju
            </h1>
            <p className="text-xl font-medium text-primary">
              GIS Engineer | Remote Pilot | Machine Learning Enthusiast | Computer Vision
            </p>
            <p className="max-w-xl text-foreground/80">
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
              src="https://picsum.photos/seed/venkatesh-kumar-raju/500/500"
              alt="Portrait of Venkatesh Kumar Raju"
              width={400}
              height={400}
              className="relative z-10 rounded-full object-cover shadow-2xl"
              data-ai-hint="portrait man professional"
            />
             <div className="absolute top-0 -right-4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
             <div className="absolute bottom-0 -left-4 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
