import Link from "next/link";

type Props = {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function MeedenkenCTA({
  title = "Klaar voor de volgende stap?",
  body = "Wij denken graag met u mee — neem vrijblijvend contact op voor advies of een offerte.",
  ctaLabel = "Vrijblijvende offerte",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="section bg-surface">
      <div className="container-wide">
        <div className="flex flex-col items-start gap-6 rounded-2xl border border-line bg-white p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              {title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-body">{body}</p>
          </div>
          <Link href={ctaHref} className="btn-primary whitespace-nowrap">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
