import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="absolute top-0 z-50 w-full py-8">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="text-xl font-bold underline decoration-2 underline-offset-4"
        >
          it's me
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link
            href="#projects"
            className="group transition-colors hover:text-foreground/80"
          >
            <div className="flex items-center gap-1">
              <span className="font-bold">My Projects</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <p className="text-xs text-foreground/60">
              See all of nice project i have done.
            </p>
          </Link>
          <Link
            href="#about"
            className="group transition-colors hover:text-foreground/80"
          >
            <div className="flex items-center gap-1">
              <span className="font-bold">About Me</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <p className="text-xs text-foreground/60">
              Learn about my self what i do
            </p>
          </Link>
          <Link
            href="#contact"
            className="group transition-colors hover:text-foreground/80"
          >
            <div className="flex items-center gap-1">
              <span className="font-bold">Contact me</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <p className="text-xs text-foreground/60">jhone_info@gmail.com</p>
          </Link>
        </nav>
      </div>
    </header>
  );
}
