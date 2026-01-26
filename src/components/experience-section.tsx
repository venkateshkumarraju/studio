'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SphereAnimation } from "./sphere-animation";

const experiences = [
    {
        company: "SeaMount Geospatial LLC",
        location: "Remote",
        title: "GIS Developer & ML Engineer",
        date: "Oct 2024 – Present",
        description: "Led development of CORAL INTEL platform:",
        tasks: [
            "Data Acquisition & Preparation",
            "Annotation Pipeline Management",
            "YOLO Model Implementation (v8–v12)",
            "Web Application Development using Flask"
        ]
    },
    {
        company: "MAPe IT SOLUTIONS",
        location: "Internship",
        title: "GIS Digitization Intern",
        date: "Nov 2022",
        description: "Mapped solar panels, swimming pools, and buildings."
    },
    {
        company: "Anna University",
        location: "",
        title: "Placement Representative",
        date: "Aug 2021 – Mar 2023",
        description: "Facilitated communication between students and placement cell."
    },
    {
        company: "Geo Adithya Technologies",
        location: "",
        title: "Junior Photogrammetrist Engineer",
        date: "Mar 2019 – Dec 2019",
        description: "Digitized topographic maps and digital surface models."
    }
];

export function ExperienceSection() {
    return (
        <section 
            id="experience" 
            className="relative w-full py-20 md:py-32 bg-cover bg-center overflow-hidden" 
            style={{backgroundImage: "url(https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg)"}}
        >
            <div className="container relative z-10 mx-auto max-w-7xl space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Work Experience</h2>
                    <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        A summary of my professional journey and key accomplishments.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border/50" />
                    <div className="grid gap-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid items-start gap-4 md:grid-cols-2">
                                <div className={`flex items-center justify-start gap-4 ${index % 2 === 0 ? 'md:order-last md:justify-end' : ''}`}>
                                    <div className="hidden h-px w-full bg-border/50 md:block" />
                                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-transparent">
                                        <SphereAnimation width={56} height={56} dotsAmount={200} dotRadius={0.6} sphereRadius={25} turnSpeed={0.01} />
                                    </div>
                                </div>
                                <Card className={`bg-black/40 backdrop-blur-sm border-gray-500/50 text-gray-200 ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                                    <CardHeader>
                                       <div className="flex items-center justify-between">
                                            <CardTitle className="text-white">{exp.title}</CardTitle>
                                            <time className="text-sm text-gray-400">{exp.date}</time>
                                       </div>
                                        <CardDescription className="text-gray-300">{exp.company} {exp.location && `(${exp.location})`}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-300">{exp.description}</p>
                                        {exp.tasks && (
                                            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-300">
                                                {exp.tasks.map((task, i) => (
                                                    <li key={i}>{task}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
