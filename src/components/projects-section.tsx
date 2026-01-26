import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "SeaMount Geospatial Labs",
        description: "A deep learning platform for coral reef monitoring.",
        tags: ["Deep Learning", "Coral Reefs", "Monitoring"],
    },
    {
        title: "Image Stitching",
        description: "Stitch drone images into panoramic orthomosaics.",
        tags: ["Drone Imagery", "Orthomosaic", "Image Processing"],
    },
    {
        title: "JPG to GeoTIFF Converter",
        description: "Converts JPG images with GPS data into georeferenced GeoTIFF files.",
        tags: ["GeoTIFF", "JPG", "GPS", "Converter"],
    },
    {
        title: "Virtual Makeup",
        description: "Facial landmark detection using OpenCV and Dlib.",
        tags: ["OpenCV", "Dlib", "Computer Vision"],
    },
    {
        title: "Object Detection (YOLOv5)",
        description: "Includes ANPR (Automatic Number Plate Recognition) functionality.",
        tags: ["YOLOv5", "Object Detection", "ANPR"],
    },
];

export function ProjectsSection() {
    return (
        <section id="projects" className="w-full py-20 md:py-32">
            <div className="container mx-auto max-w-7xl space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                    <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Here are some of the projects I've worked on.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
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
                    ))}
                </div>
            </div>
        </section>
    );
}
