import { Badge } from "@/components/ui/badge";
import React from 'react';
import { Globe, ScanSearch, Database, Laptop, Code, BrainCircuit, AppWindow, Languages as LanguagesIcon } from "lucide-react";

const skillsData = [
    {
        category: "Geospatial",
        skills: ["Photogrammetry", "DTM", "DSM", "GCP", "Topography", "Ortho Map", "3D Mapping"],
        icon: <Globe />
    },
    {
        category: "Image Processing",
        skills: ["OpenCV", "Computer Vision", "Image Classification"],
        icon: <ScanSearch />
    },
    {
        category: "Data Management",
        skills: ["Data Analysis", "Asset Management", "Spatial Data"],
        icon: <Database />
    },
    {
        category: "Software Proficiency",
        skills: ["ArcGIS Pro", "QGIS", "AutoCAD Map 3D", "Drone2map", "webODM", "Dronelink"],
        icon: <Laptop />
    },
    {
        category: "Programming",
        skills: ["Python", "MATLAB"],
        icon: <Code />
    },
    {
        category: "Machine Learning",
        skills: ["PyTorch", "TensorFlow", "Keras"],
        icon: <BrainCircuit />
    },
    {
        category: "App Development",
        skills: ["Flask"],
        icon: <AppWindow />
    },
    {
        category: "Languages",
        skills: ["Tamil", "English", "French (A2)"],
        icon: <LanguagesIcon />
    }
];

export function SkillsSection() {
    return (
        <section 
            id="skills" 
            className="w-full py-20 md:py-32" 
            style={{backgroundImage: "linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)"}}
        >
            <div className="container mx-auto max-w-7xl space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                    <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        A collection of technologies and tools I'm proficient with.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                    {skillsData.map((skillData) => (
                        <div key={skillData.category} className="service-parent">
                            <div className="service-card">
                                <div className="logo">
                                    <span className="circle circle1"></span>
                                    <span className="circle circle2"></span>
                                    <span className="circle circle3"></span>
                                    <span className="circle circle4"></span>
                                    <span className="circle circle5">
                                        {React.cloneElement(skillData.icon, { className: 'service-icon' })}
                                    </span>
                                </div>
                                <div className="glass"></div>
                                <div className="content">
                                    <span className="title">{skillData.category}</span>
                                    <div className="text mt-4 flex flex-wrap justify-center gap-2">
                                        {skillData.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary">{skill}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
