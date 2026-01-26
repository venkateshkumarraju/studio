import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
    return (
        <section 
            id="education" 
            className="w-full py-20 md:py-32"
            style={{backgroundImage: "linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)"}}
        >
            <div className="container mx-auto max-w-7xl space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Education</h2>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <GraduationCap className="h-8 w-8 text-primary"/>
                                <div>
                                    <CardTitle>Master of Engineering – Remote Sensing and Geomatics</CardTitle>
                                    <CardDescription>Anna University , College of Engineering , chennai</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                           <div className="flex items-center gap-4">
                                <GraduationCap className="h-8 w-8 text-primary"/>
                                <div>
                                    <CardTitle>Bachelor of Engineering – Civil Engineering</CardTitle>
                                    <CardDescription>S.A Engineering College, Chennai</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    );
}
