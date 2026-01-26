import Image from "next/image";

export function AboutSection() {
    return (
        <section id="about" className="w-full bg-secondary py-20 md:py-32">
            <div className="container mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
                <div className="relative h-[400px] w-full md:h-[500px]">
                     <Image
                        src="https://picsum.photos/seed/about-photo/600/500"
                        alt="Venkatesh Kumar Raju working"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        data-ai-hint="man working laptop"
                    />
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                    <p className="text-foreground/80">
                        I am a passionate and results-driven GIS professional with a love for transforming complex geospatial data into actionable insights. My journey into the world of GeoAI and machine learning was fueled by a desire to push the boundaries of what's possible with location-based data.
                    </p>
                    <p className="text-foreground/80">
                        As a certified drone pilot, I enjoy capturing unique perspectives of the world from above and using that data for detailed 3D mapping and analysis. When I'm not working with maps or training models, you can find me exploring new technologies, contributing to open-source projects, or flying my drone. I am constantly learning and seeking new challenges that allow me to blend my skills in GIS, remote sensing, and computer vision.
                    </p>
                </div>
            </div>
        </section>
    )
}
