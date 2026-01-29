import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <footer 
        id="contact" 
        className="w-full py-20 md:py-32"
        style={{backgroundImage: "linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)"}}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 justify-items-center">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Contact Me</h2>
            <p className="max-w-md mx-auto text-foreground/80">
              Have a project in mind or just want to say hello? Feel free to reach out. I'm open to remote opportunities and relocation.
            </p>
            <div className="space-y-4 text-foreground">
                <a href="mailto:raju.venkateshkumar@gmail.com" className="flex items-center justify-center gap-4 group">
                    <Mail className="h-5 w-5 text-foreground" />
                    <span className="group-hover:underline">raju.venkateshkumar@gmail.com</span>
                </a>
                 <div className="flex items-center justify-center gap-4">
                    <MapPin className="h-5 w-5 text-foreground" />
                    <span>Chennai, India</span>
                </div>
                <div className="flex justify-center pt-4">
                  <div className="child">
                    <Link href="https://www.linkedin.com/in/venkatesh-kumar-raju/" target="_blank" rel="noopener noreferrer" className="button">
                      <Linkedin className="h-6 w-6 text-foreground" />
                    </Link>
                  </div>
                  <div className="child">
                    <Link href="https://github.com/VenkateshKumarRaju" target="_blank" rel="noopener noreferrer" className="button">
                      <Github className="h-6 w-6 text-foreground" />
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
