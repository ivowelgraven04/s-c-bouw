import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-home.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
      </div>

      <div className="container-wide relative py-28 sm:py-36 lg:py-44">
        <div className="max-w-3xl fade-up">
          <p className="text-base font-medium text-white/90">S&amp;C Bouw</p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {site.tagline}
          </h1>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={site.emergencyHref} className="btn-primary px-8 py-4 text-base">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="font-semibold">
                Spoedgeval?
                <span className="ml-2 font-normal">{site.emergency}</span>
              </span>
            </a>
            <Link
              href="/contact"
              className="btn-outline-yellow px-8 py-4 text-base"
            >
              Vrijblijvende Offerte Aanvragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
