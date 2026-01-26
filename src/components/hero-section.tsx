import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ArrowDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ConsultationForm } from "@/components/consultation-form";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-x-clip pt-32 pb-20 md:pt-48 md:pb-32"
    >
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-pink-400 via-yellow-300 to-sky-400 opacity-20 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="text-2xl">👋</span>
            <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
              Hello! I'm Madhu
            </h1>
            <div className="flex items-center gap-4">
              <hr className="w-16 border-t-2 border-primary" />
              <p className="text-xl font-medium">Product Designer</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>

            <p className="max-w-lg text-foreground/80">
              Hello! I'm Madhu. I'm a{" "}
              <span className="font-bold text-foreground">
                UX leader, design thinker, product designer
              </span>
              , experience strategist, generative artist & human-loving
              introvert.
            </p>

            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Product must be authentic</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Solve pain points elegantly</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>User testing, feedback, and validation</span>
              </li>
            </ul>

            <div className="flex items-center gap-4 pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
                  >
                    Let's Talk
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="font-headline">
                      Let's Talk
                    </DialogTitle>
                    <DialogDescription>
                      Fill out the form below, and I'll get back to you as soon
                      as possible.
                    </DialogDescription>
                  </DialogHeader>
                  <ConsultationForm />
                </DialogContent>
              </Dialog>

              <Button
                asChild
                variant="link"
                size="lg"
                className="group text-foreground"
              >
                <a href="/resume.pdf" download>
                  Download CV{" "}
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative hidden h-full min-h-[500px] items-center justify-center lg:flex">
            <Image
              src="https://picsum.photos/seed/madhu-portrait/400/550"
              alt="Portrait of Madhu"
              width={400}
              height={550}
              className="relative z-10 rounded-lg object-cover shadow-2xl"
              data-ai-hint="portrait man glasses"
            />
            <div className="absolute bottom-20 -left-20 z-20 flex h-32 w-32 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <p className="text-2xl font-bold">Hello</p>
            </div>
            <div className="absolute top-10 right-10 z-0 h-16 w-0.5 -rotate-45 bg-black" />
            <div className="absolute top-24 right-16 z-0 h-10 w-0.5 -rotate-45 bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
