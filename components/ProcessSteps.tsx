const steps = [
  {
    n: "01",
    title: "Consultatie",
    body:
      "We luisteren naar uw wensen, plannen een vrijblijvend kennismakingsgesprek en brengen uw situatie helder in kaart.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Evaluatie & Planning",
    body:
      "We bezoeken de locatie, beoordelen de mogelijkheden en stellen samen met u een concrete planning en heldere offerte op.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Op maat gemaakte oplossingen",
    body:
      "We voeren het werk vakkundig uit volgens planning. Eén vast aanspreekpunt, hoogwaardige materialen en een nette oplevering.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
      </svg>
    ),
  },
];

export function ProcessSteps() {
  return (
    <section className="section bg-surface">
      <div className="container-wide">
        <div className="max-w-2xl">
          <span className="eyebrow">Onze werkwijze</span>
          <h2 className="h-section mt-4">Van eerste gesprek tot oplevering</h2>
          <p className="lede mt-5">
            Een gestroomlijnd proces zodat u op elk moment weet waar u staat.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-line bg-white p-7">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-ink">
                  <span className="block h-6 w-6">{s.icon}</span>
                </span>
                <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 font-sans text-lg font-bold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
