import Image from "next/image";
import Link from "next/link";

const points = [
  "Eigen team en lokale vakmensen",
  "Eén vast aanspreekpunt",
  "Afspraak is afspraak",
];

export function AboutTrust() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-line">
            <Image
              src="/images/about-cta.png"
              alt="Dakpannen op een hellend dak, gelegd door S&C Bouw"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="eyebrow">Over Ons</span>
            <h2 className="h-section mt-4">Leer ons beter kennen</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-body">
              <p>
                Wij zijn Cas Marchal en Simon Hilgers, samen S&amp;C Bouw. Het
                bouwen en opknappen van huizen trok ons al van jongs af aan.
                Inmiddels doen we met ons team dakwerken, nieuwbouw en
                renovaties.
              </p>
              <p>
                Daarnaast werken we als aannemer. Dan coördineren wij het
                project: we houden contact met u en met de vaklieden, zorgen dat
                het werk goed doorloopt en zijn eindverantwoordelijk voor het
                resultaat. Bekijk{" "}
                <Link href="/projecten" className="text-[#8a6700] hover:underline">
                  hier
                </Link>{" "}
                welke projecten we al hebben afgerond.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span
                    className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  <span className="text-base font-semibold text-[#8a6700]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <Link href="/over-ons" className="btn-primary mt-10">
              Meer over ons
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
