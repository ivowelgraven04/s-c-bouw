type Item = { title: string; body: string; icon: React.ReactNode };

const items: Item[] = [
  {
    title: "Expertise",
    body:
      "Onze vakmannen brengen jarenlange ervaring en doorlopende bijscholing mee voor elk project — groot of klein.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 21h18" />
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Betrouwbaarheid",
    body:
      "24/7 bereikbaar voor spoedklussen, en altijd met heldere afspraken. Afspraak = Afspraak.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Veiligheid",
    body:
      "Gecertificeerde, ervaren medewerkers werken volgens de strengste veiligheidsnormen — voor uzelf én ons team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z" />
      </svg>
    ),
  },
  {
    title: "Transparantie",
    body:
      "Heldere prijzen, duidelijke planning en open communicatie — zonder verrassingen achteraf.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

export function ValueProps() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {items.map((item) => (
            <div key={item.title}>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-ink">
                <span className="block h-7 w-7">{item.icon}</span>
              </span>
              <h3 className="mt-5 font-sans text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-body">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
