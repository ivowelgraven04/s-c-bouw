import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { MeedenkenCTA } from "@/components/MeedenkenCTA";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Recente Projecten",
  description:
    "Een overzicht van realisaties van S&C Bouw die vakmanschap en oog voor detail uitstralen.",
};

export default function ProjectenPage() {
  return (
    <>
      <PageHeader
        eyebrow="S & C Bouw"
        title="Recente projecten"
        intro="Een overzicht van realisaties die vakmanschap en oog voor detail uitstralen."
      />

      <section className="section">
        <div className="container-wide">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
            {projects.map((p) => (
              <div
                key={p.src}
                className="relative aspect-square overflow-hidden rounded-xl border border-line bg-surface"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <MeedenkenCTA />
    </>
  );
}
