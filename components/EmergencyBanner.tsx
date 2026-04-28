import Image from "next/image";
import { site } from "@/lib/site";

export function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-0">
        <Image
          src="/images/emergency.jpg"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
      </div>
      <div className="container-wide relative py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">24/7 bereikbaar</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Spoedgeval – 24/7 S&amp;C
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
              Heeft u te maken met een daklekkage, stormschade of een plotseling
              probleem dat niet kan wachten? Onze spoedservice staat 24/7 voor u
              klaar.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <a
              href={site.emergencyHref}
              className="btn-primary px-8 py-4 text-base"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
              Bel ons nu {site.emergency}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
