import Link from "next/link";
import { ARTIST_NAME, LOCATION, NAV_LINKS, SITE_NAME, STUDIO_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-background/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl text-foreground">
              {SITE_NAME}
            </h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Handcrafted glass art by {ARTIST_NAME}
              <br />
              {STUDIO_NAME}, {LOCATION}
            </p>
          </div>

          <div>
            <h4 className="font-subheading text-sm tracking-widest text-muted mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-subheading text-sm tracking-widest text-muted mb-4">
              Connect
            </h4>
            <p className="text-sm text-foreground/80">
              <a
                href="mailto:cory@goodaleglass.com"
                className="hover:text-accent transition-colors"
              >
                cory@goodaleglass.com
              </a>
            </p>
            <p className="mt-4 text-xs text-muted">
              Each piece is one-of-a-kind. Shipping arranged after purchase.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
