import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Map,
  Database,
  Code,
  Server,
  BrainCircuit,
  Cloud,
} from "lucide-react";

type Skill = {
  name: string;
};

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
};

const skillData: SkillCategory[] = [
  {
    title: "GIS Software",
    icon: Map,
    skills: [
      { name: "ArcGIS Pro" },
      { name: "QGIS" },
      { name: "ArcGIS Online" },
      { name: "Google Earth Engine" },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Python (ArcPy, GDAL)" },
      { name: "JavaScript / TypeScript" },
      { name: "SQL" },
      { name: "React & Next.js" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostGIS / PostgreSQL" },
      { name: "SQL Server" },
      { name: "File Geodatabases" },
      { name: "SQLite" },
    ],
  },
  {
    title: "Web & Cloud",
    icon: Cloud,
    skills: [
      { name: "Mapbox / Leaflet" },
      { name: "GeoServer" },
      { name: "AWS / Google Cloud" },
      { name: "Docker" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-secondary/50 py-20 md:py-32">
      <div className="container px-4 md:px-6 animate-in fade-in slide-in-from-bottom-12 duration-500">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              My Expertise
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A blend of geospatial science, software development, and data
              management to deliver comprehensive solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-none">
          {skillData.map((category) => (
            <Card key={category.title} className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4">
                <category.icon className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-lg text-foreground/90">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center">
                      <span className="mr-2 text-primary">◆</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
