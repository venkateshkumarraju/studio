import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award } from "lucide-react";

export function CertificationsSection() {
    return (
        <section id="certifications" className="w-full py-20 md:py-32">
            <div className="container mx-auto max-w-7xl space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Certifications</h2>
                </div>
                <div className="mx-auto grid max-w-md justify-center">
                     <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Award className="h-8 w-8 text-primary" />
                            <div className="grid gap-1">
                                <CardTitle>DGCA Remote Pilot Certificate</CardTitle>
                                <CardDescription>Issued: Jan 2024</CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    );
}
