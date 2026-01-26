import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ConsultationForm } from "@/components/consultation-form";
import { Download, Rocket } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 animate-in fade-in slide-in-from-bottom-12 duration-500">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                Precision Mapping, Powerful Insights.
              </h1>
              <p className="max-w-[600px] text-foreground/80 md:text-xl">
                I'm a GIS Engineer transforming complex geospatial data into
                actionable solutions. Let's build something amazing together.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Request a Consultation
                    <Rocket className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="font-headline text-primary">Request a Consultation</DialogTitle>
                    <DialogDescription>
                      Fill out the form below, and I'll get back to you as soon as possible.
                    </DialogDescription>
                  </DialogHeader>
                  <ConsultationForm />
                </DialogContent>
              </Dialog>

              <Button asChild variant="outline" size="lg">
                <a href="/resume.pdf" download>
                  Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-64 w-64 animate-pulse rounded-full bg-primary/10 blur-3xl lg:h-96 lg:w-96">
                <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
