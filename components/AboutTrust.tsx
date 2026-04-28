import Image from "next/image";
import Link from "next/link";

const points = [
  "Gelicentieerde vakmensen",
  "Kwaliteitsvakmanschap",
  "Klantgerichte service",
];

export function AboutTrust() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-line">
            <Image
              src="/images/about-cta.png"
              alt="Dakpannen op een hellend dak — vakmanschap S&C Bouw"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="eyebrow">Over Ons</span>
            <h2 className="h-section mt-4">Leer ons better kennen</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-body">
              <p>
                Wij zijn Cas Marchal en Simon Hilgers. Samen zijn wij S&amp;C
                Bouw. Sinds jongs af aan hebben wij een passie ontwikkeld voor
                het renoveren en creëren van leefruimtes. Wij zijn
                gespecialiseerd in het uitvoeren van dakwerken, volledige
                nieuwbouw en renovaties.
              </p>
              <p>
                S&amp;C Bouw legt zich ook toe op de rol van aannemer. Dit
                houdt in dat wij binnen een bouwproject een coördinerende rol
                vervullen — communicatie met klant en vaklieden, een soepel
                werkproces en de eindverantwoordelijkheid voor het project.
                Klik{" "}
                <Link href="/projecten" className="text-primary hover:underline">
                  hier
                </Link>{" "}
                om te zien welke projecten wij al succesvol hebben afgerond.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span
                    className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  <span className="text-base font-semibold text-primary">
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
