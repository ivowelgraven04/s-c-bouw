import { PageHeader } from "@/components/PageHeader";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Neem contact op met S&C Bouw. Wij staan 24/7 voor u klaar voor spoedgevallen aan dakwerken, nieuwbouw, renovatie en stellingbouw.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="S & C Bouw"
        title="Neem contact met ons op"
        intro="Heeft u vragen, wilt u een offerte aanvragen of even kennismaken? Wij staan voor u klaar."
      />

      <section className="section">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">
                Direct contact
              </h2>

              <dl className="mt-8 space-y-7">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Telefoon — Simon
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.phoneSimonHref}
                      className="font-display text-xl font-bold text-ink hover:text-primary"
                    >
                      {site.phoneSimon}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Telefoon — Cas
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.phoneCasHref}
                      className="font-display text-xl font-bold text-ink hover:text-primary"
                    >
                      {site.phoneCas}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    E-mail
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.emailHref}
                      className="font-display text-lg font-bold text-ink hover:text-primary"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Adres
                  </dt>
                  <dd className="mt-1 text-base text-body">{site.address}</dd>
                </div>
              </dl>

            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <EmergencyBanner />
    </>
  );
}

function ContactForm() {
  return (
    <form
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
      className="card p-7 sm:p-8"
    >
      <h2 className="font-display text-2xl font-bold text-ink">
        Stuur ons een bericht
      </h2>
      <p className="mt-2 text-sm text-body">
        We nemen meestal binnen 24 uur contact op.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-[0.16em] text-ink"
          >
            Naam
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 block w-full rounded-md border border-line bg-white px-4 py-3 text-base text-ink shadow-soft outline-none transition-colors focus:border-primary"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-[0.16em] text-ink"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 block w-full rounded-md border border-line bg-white px-4 py-3 text-base text-ink shadow-soft outline-none transition-colors focus:border-primary"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-[0.16em] text-ink"
            >
              Telefoon
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-2 block w-full rounded-md border border-line bg-white px-4 py-3 text-base text-ink shadow-soft outline-none transition-colors focus:border-primary"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-[0.16em] text-ink"
          >
            Bericht
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 block w-full rounded-md border border-line bg-white px-4 py-3 text-base text-ink shadow-soft outline-none transition-colors focus:border-primary"
          />
        </div>
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Verstuur bericht
        </button>
      </div>
    </form>
  );
}
