'use client';
import { ScanSearch, Spline, Mountain, Map, Navigation, Scan, AppWindow } from "lucide-react";
import React from 'react';
import { TiltCard } from "./tilt-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const services = [
    {
        title: "Object Detection Model",
        description: "Building custom models to detect and classify objects in images and videos.",
        icon: <ScanSearch />
    },
    {
        title: "Image Segmentation Model",
        description: "Developing models for pixel-level classification and precise object masking.",
        icon: <Spline />
    },
    {
        title: "Topographic Mapping",
        description: "Creating detailed maps representing the Earth's surface with elevation and features.",
        icon: <Mountain />
    },
    {
        title: "Planimetric Mapping",
        description: "Producing maps that show the horizontal positions of features without elevation.",
        icon: <Map />
    },
    {
        title: "Drone Operations",
        description: "Certified and experienced in conducting aerial surveys and data acquisition with drones.",
        icon: <Navigation />
    },
    {
        title: "Drone Image Processing",
        description: "Processing aerial imagery to create orthomosaics, 3D models, and more.",
        icon: <Scan />
    },
    {
        title: "Web App Development",
        description: "Developing custom web applications to visualize and interact with geospatial data.",
        icon: <AppWindow />
    }
];

export function ServicesSection() {
    return (
        <section 
            id="services" 
            className="w-full py-20 md:py-32"
            style={{backgroundImage: "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)"}}
        >
            <div className="container mx-auto max-w-7xl space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Expertise</h2>
                    <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Offering a range of specialized services in geospatial and AI domains.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <TiltCard key={service.title}>
                            <Card className="flex flex-col w-full h-full bg-background/30 backdrop-blur-sm border-border/30 transition-all hover:border-primary">
                                <CardHeader>
                                    <div className="flex items-start gap-4">
                                        {React.cloneElement(service.icon, { className: "h-8 w-8 text-primary shrink-0"})}
                                        <CardTitle>{service.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
