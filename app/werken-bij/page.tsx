import { PageHeader } from "@/components/PageHeader";
import { MeedenkenCTA } from "@/components/MeedenkenCTA";
import { site } from "@/lib/site";

export const metadata = {
  title: "Werken bij",
  description:
    "Sluit je aan bij het team van S&C Bouw en bouw mee aan de toekomst.",
};

const steps = [
  {
    n: "01",
    title: "Stuur je CV en motivatie",
    body: "Korte motivatie volstaat — we kijken vooral naar wie je bent.",
  },
  {
    n: "02",
    title: "Kennismakingsgesprek",
    body: "Persoonlijk gesprek met Cas of Simon, op kantoor of op locatie.",
  },
  {
    n: "03",
    title: "Aanbod & onboarding",
    body: "Bij een match maken we afspraken en helpen we je goed van start.",
  },
];

const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Open sollicitatie",
)}&body=${encodeURIComponent(
  "Beste Cas en Simon,\n\nIk heb interesse om bij S&C Bouw te werken en wil graag een open sollicitatie versturen.\n\nKorte motivatie:\n\n\nMet vriendelijke groet,",
)}`;

export default function WerkenBijPage() {
  return (
    <>
      <PageHeader
        eyebrow="S & C Bouw"
        title="Werken bij"
        intro="Sluit je aan bij ons team en bouw mee aan de toekomst!"
      />

      <section className="section">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Open sollicitatie</span>
            <h2 className="h-section mt-4">
              Heb je interesse om bij S&amp;C Bouw te werken?
            </h2>
            <p className="lede mt-6">
              We hebben op dit moment geen openstaande vacatures, maar we staan
              altijd open voor gepassioneerde, getalenteerde vakmannen en
              -vrouwen die met ons mee willen bouwen. Stuur ons een open
              sollicitatie met een korte motivatie en je CV, dan kijken we
              samen of er een match is.
            </p>
            <a href={mailto} className="btn-primary mt-10 px-8 py-4 text-base">
              Stuur open sollicitatie
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <p className="mt-4 text-sm text-muted">
              of mail rechtstreeks naar{" "}
              <a
                href={site.emailHref}
                className="font-semibold text-primary hover:underline"
              >
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="eyebrow">Sollicitatieproces</span>
            <h2 className="h-section mt-4">Hoe werkt solliciteren?</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  {s.n}
                </span>
                <h3 className="mt-3 font-sans text-xl font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-body">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href={mailto} className="btn-primary">
              Solliciteer direct
            </a>
          </div>
        </div>
      </section>

      <MeedenkenCTA
        title="Liever eerst even sparren?"
        body="Bel of mail ons gerust — we vertellen graag meer over wie we zijn en hoe we werken."
        ctaLabel="Neem contact op"
      />
    </>
  );
}
