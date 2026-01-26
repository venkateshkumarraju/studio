import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = PlaceHolderImages;

  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6 animate-in fade-in slide-in-from-bottom-12 duration-500">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I've worked on that showcase my skills
              in GIS and web development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <CardHeader className="p-0">
                <div className="aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.description}
                    width={600}
                    height={400}
                    data-ai-hint={project.imageHint}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <CardTitle className="font-headline text-xl mb-2">
                  Project {project.id.split("-")[1]}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex w-full justify-start gap-4">
                  <Button asChild variant="outline">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
