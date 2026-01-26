import Link from "next/link";
import { MapPin } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <MapPin className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">
            GeoEngine Pro
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="#skills"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
