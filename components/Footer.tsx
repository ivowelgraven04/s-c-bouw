import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";

const flatNav = nav.map((n) => ({ label: n.label, href: n.href }));

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-wide py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="S&C Bouw — home">
              <Image
                src="/images/logo.png"
                alt="S&C Bouw"
                width={96}
                height={84}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              S&amp;C Bouw — uw aannemer voor dakwerken, nieuwbouw, renovatie
              en stellingbouw.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Adres
            </h4>
            <p className="mt-4 text-sm text-white/80">{site.region}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={site.emailHref}
                  className="text-white/80 hover:text-primary"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="text-white/80 hover:text-primary"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Navigatie
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {flatNav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-white/80 hover:text-primary"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60">
          © Copyright {site.name}. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
