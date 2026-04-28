import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "./PageHeader";
import { MeedenkenCTA } from "./MeedenkenCTA";

export type ServiceDetailProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image1: string;
  image2: string;
  features: { title: string; body: string }[];
  body: { heading: string; paragraphs: string[] }[];
};

export function ServiceDetail(props: ServiceDetailProps) {
  return (
    <>
      <PageHeader eyebrow={props.eyebrow} title={props.title} intro={props.intro} />

      {/* Three feature cards */}
      <section className="section">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-3">
            {props.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-ink">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {f.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-body">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two images */}
      <section className="section-tight">
        <div className="container-wide">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={props.image1}
                alt={`${props.title} — voorbeeld 1`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={props.image2}
                alt={`${props.title} — voorbeeld 2`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed body */}
      <section className="section">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl space-y-12">
            {props.body.map((b) => (
              <div key={b.heading}>
                <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  {b.heading}
                </h2>
                <div className="mt-5 space-y-4">
                  {b.paragraphs.map((p, i) => (
                    <p key={i} className="text-base leading-relaxed text-body">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="border-t border-line pt-10">
              <Link href="/contact" className="btn-primary">
                Vraag offerte aan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MeedenkenCTA />
    </>
  );
}
