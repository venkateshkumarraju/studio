import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2"
        >
          <span className="text-xl font-bold">Venkatesh Kumar Raju</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="#about"
            className="font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#services"
            className="font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Expertise
          </Link>
          <Link
            href="#experience"
            className="font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            className="font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="#education"
            className="font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Education
          </Link>
          <Link
            href="#contact"
            className="font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="grid gap-4 p-4">
                    <Link
                        href="#about"
                        className="font-medium text-foreground/70 transition-colors hover:text-foreground"
                    >
                        About
                    </Link>
                    <Link
                        href="#services"
                        className="font-medium text-foreground/70 transition-colors hover:text-foreground"
                    >
                        Expertise
                    </Link>
                    <Link
                        href="#experience"
                        className="font-medium text-foreground/70 transition-colors hover:text-foreground"
                    >
                        Experience
                    </Link>
                    <Link
                        href="#skills"
                        className="font-medium text-foreground/70 transition-colors hover:text-foreground"
                    >
                        Skills
                    </Link>
                    <Link
                        href="#projects"
                        className="font-medium text-foreground/70 transition-colors hover:text-foreground"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#education"
                        className="font-medium text-foreground/70 transition-colors hover:text-foreground"
                    >
                        Education
                    </Link>
                    <Link
                        href="#contact"
                        className="font-medium text-foreground/70 transition-colors hover:text-foreground"
                    >
                        Contact
                    </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
