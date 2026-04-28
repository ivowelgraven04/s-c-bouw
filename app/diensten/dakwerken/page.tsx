import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata = {
  title: "Dakwerken",
  description:
    "Plaatsing, herstel, isolatie en onderhoud van platte en hellende daken. Bij S&C Bouw zorgen wij voor alles wat met daken te maken heeft.",
};

export default function DakwerkenPage() {
  return (
    <ServiceDetail
      eyebrow="S & C Bouw"
      title="Dakwerken"
      intro="Bij S&C Bouw zorgen wij voor alles wat met daken te maken heeft: van platte daken tot hellende daken."
      image1="/images/service-dakwerken.jpg"
      image2="/images/projects/01.jpg"
      features={[
        {
          title: "Onderhoud",
          body:
            "Periodiek onderhoud houdt uw dak in topconditie en voorkomt dure schade op termijn.",
        },
        {
          title: "Renovatie",
          body:
            "Vakkundige oplossingen voor verouderde of beschadigde daken — modern, duurzaam en strak afgewerkt.",
        },
        {
          title: "Spoedgeval",
          body:
            "24/7 reactie op daklekkage, stormschade of acute problemen die niet kunnen wachten.",
        },
      ]}
      body={[
        {
          heading: "Plat dak",
          paragraphs: [
            "Voor platte daken werken wij met hoogwaardige materialen zoals EPDM, bitumen en PVC. Deze systemen zijn waterdicht, duurzaam en uitermate geschikt voor moderne woningen, garages, aanbouwen en bedrijfspanden.",
            "Wij beoordelen vooraf de staat van de onderconstructie, adviseren over de juiste keuze en zorgen voor een nette afwerking rondom randen, afvoeren en detailleringen.",
          ],
        },
        {
          heading: "Hellend dak",
          paragraphs: [
            "Hellende daken voorzien wij van traditionele materialen zoals dakpannen van klei of beton, of natuurlijke leien. De helling zorgt voor een natuurlijke waterafvoer en een lange levensduur.",
            "Of het nu gaat om een complete dakvernieuwing, het vervangen van losse pannen of een grondige inspectie — wij werken met aandacht voor detail en oog voor de uitstraling van uw woning.",
          ],
        },
      ]}
    />
  );
}
