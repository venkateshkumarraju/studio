import Link from "next/link";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export function ContactFooter() {
  return (
    <footer id="contact" className="w-full bg-secondary/50 py-12 md:py-16">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <div className="text-center md:text-left">
            <h3 className="font-headline text-2xl font-bold text-primary">Get in Touch</h3>
            <p className="text-foreground/80">I'm currently available for freelance work and new opportunities.</p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center md:items-end">
            <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contact@geoengine.pro" className="hover:text-primary transition-colors">contact@geoengine.pro</a>
            </div>
            <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
            </div>
            <div className="flex items-center gap-4 mt-2">
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <Linkedin className="h-7 w-7 text-foreground/70 hover:text-primary transition-colors" />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <Github className="h-7 w-7 text-foreground/70 hover:text-primary transition-colors" />
                </Link>
            </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t pt-6 text-center text-sm text-foreground/60">
        <p>© {new Date().getFullYear()} GeoEngine Pro. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
