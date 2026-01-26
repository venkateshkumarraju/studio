import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skillsData = {
    "Geospatial": ["Photogrammetry", "DTM", "DSM", "GCP", "Topography", "Ortho Map", "3D Mapping"],
    "Image Processing": ["OpenCV", "Computer Vision", "Image Classification"],
    "Data Management": ["Data Analysis", "Asset Management", "Spatial Data"],
    "Software Proficiency": ["ArcGIS Pro", "QGIS", "AutoCAD Map 3D", "Drone2map", "webODM", "Dronelink"],
    "Programming": ["Python", "MATLAB"],
    "Machine Learning": ["PyTorch", "TensorFlow", "Keras"],
    "App Development": ["Flask"],
    "Languages": ["Tamil", "English", "French (A2)"]
};

export function SkillsSection() {
    return (
        <section id="skills" className="w-full py-20 md:py-32" style={{backgroundImage: "linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)"}}>
            <div className="container mx-auto max-w-7xl space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                    <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        A collection of technologies and tools I'm proficient with.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <Card key={category}>
                            <CardHeader>
                                <CardTitle>{category}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <Badge key={skill} variant="default">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
