'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { TiltCard } from "./tilt-card";

const projects = [
    {
        title: "Coral intel",
        description: "A deep learning platform for coral reef monitoring.",
        tags: ["Deep Learning", "Coral Reefs", "Monitoring"],
        link: "https://seamountgeo.com/coral_intel"
    },
    {
        title: "Image Stitching",
        description: "Stitch drone images into panoramic orthomosaics.",
        tags: ["Drone Imagery", "Orthomosaic", "Image Processing"],
        link: "https://github.com/venkateshkumarraju/image-stitching-"
    },
    {
        title: "JPG to GeoTIFF Converter",
        description: "Converts JPG images with GPS data into georeferenced GeoTIFF files.",
        tags: ["GeoTIFF", "JPG", "GPS", "Converter"],
        link: "https://github.com/VenkateshKumarRaju/converting-jpg-to-geotif"
    },
    {
        title: "Virtual Makeup",
        description: "Facial landmark detection using OpenCV and Dlib.",
        tags: ["OpenCV", "Dlib", "Computer Vision"],
        link: "https://github.com/VenkateshKumarRaju/virtual-makeup"
    },
    {
        title: "Object Detection (YOLOv5)",
        description: "Includes ANPR (Automatic Number Plate Recognition) functionality.",
        tags: ["YOLOv5", "Object Detection", "ANPR"],
        link: "https://github.com/venkateshkumarraju/object-dectection-"
    },
];

export function ProjectsSection() {
    return (
        <section 
            id="projects" 
            className="w-full py-20 md:py-32"
            style={{backgroundImage: "linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)"}}
        >
            <div className="container mx-auto max-w-7xl space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                    <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Here are some of the projects I've worked on. Click on a project to view it.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Link key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="flex">
                            <TiltCard>
                                <Card className="flex flex-col w-full h-full bg-background/30 backdrop-blur-sm border-border/30 transition-all hover:border-primary">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle>{project.title}</CardTitle>
                                            {project.link.startsWith("https://github.com") ? (
                                                <Github className="h-5 w-5 text-muted-foreground" />
                                            ) : (
                                                <ExternalLink className="h-5 w-5 text-muted-foreground" />
                                            )}
                                        </div>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary">{tag}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TiltCard>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
