import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { MeedenkenCTA } from "@/components/MeedenkenCTA";
import { services } from "@/lib/services";

export const metadata = {
  title: "Diensten",
  description:
    "Dakwerken, nieuwbouw, renovatie en stellingbouw. Eén aannemer voor uw project van fundering tot oplevering.",
};

export default function DienstenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Wat bieden wij aan"
        title="Diensten"
        intro="Vier specialismen waarin S&C Bouw al jaren topwerk levert. Vakkundig uitgevoerd, met heldere communicatie en hoogwaardige materialen."
      />

      <section className="section">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h2 className="h-section">Onze diensten</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <MeedenkenCTA />
    </>
  );
}
