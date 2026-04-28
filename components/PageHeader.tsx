type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="bg-black">
      <div className="container-wide pb-16 pt-32 sm:pb-20 sm:pt-36">
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
