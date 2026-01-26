import Link from "next/link";
import { Facebook, Youtube, Twitter, Mail } from "lucide-react";

export function ContactFooter() {
  return (
    <footer id="contact" className="w-full border-t py-12 md:py-16">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <div className="flex gap-4">
          <Link
            href="#"
            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
          >
            <Facebook className="h-4 w-4" />
            FACEBOOK
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
          >
            <Youtube className="h-4 w-4" />
            YOUTUBE
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
          >
            <Twitter className="h-4 w-4" />
            TWITTER
          </Link>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-foreground/70">
          <Mail className="h-4 w-4" />
          JHON_EINFO@GMAIL.COM
        </div>
      </div>
    </footer>
  );
}
