import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { ContactForm } from "./consultation-form";

export function ContactSection() {
  return (
    <footer id="contact" className="w-full border-t bg-background py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Me</h2>
            <p className="max-w-md text-foreground/80">
              Have a project in mind or just want to say hello? Feel free to reach out. I'm open to remote opportunities and relocation.
            </p>
            <div className="space-y-4">
                <a href="mailto:venkateshkumar.raju@gmail.com" className="flex items-center gap-4 group">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="group-hover:underline">venkateshkumar.raju@gmail.com</span>
                </a>
                 <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Chennai, India</span>
                </div>
                <div className="flex gap-4 pt-4">
                    <Link href="https://www.linkedin.com/in/venkatesh-kumar-raju/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground"><Linkedin className="h-6 w-6" /></Link>
                    <Link href="https://github.com/VenkateshKumarRaju" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground"><Github className="h-6 w-6" /></Link>
                </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  );
}
