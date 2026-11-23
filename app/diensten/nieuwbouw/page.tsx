import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata = {
  title: "Nieuwbouw",
  description:
    "Nieuwbouw van particuliere woningen, appartementen en bedrijfspanden. S&C Bouw begeleidt u van ontwerp tot oplevering.",
};

export default function NieuwbouwPage() {
  return (
    <ServiceDetail
      eyebrow="S & C Bouw"
      title="Nieuwbouw"
      intro="Volledige nieuwbouwprojecten van concept tot oplevering: woningen, appartementen, kantoren en bedrijfspanden."
      image1="/images/service-nieuwbouw.jpg"
      image2="/images/projects/05.jpg"
      features={[
        {
          title: "Ontwerp & coördinatie",
          body:
            "Wij werken samen met architecten en ingenieurs voor een ontwerp dat aansluit op uw wensen en budget.",
        },
        {
          title: "Strakke planning",
          body:
            "Heldere mijlpalen, regelmatige voortgangsupdates en een realistische opleverdatum die we ook halen.",
        },
        {
          title: "Sleutelklaar",
          body:
            "Van fundering tot afwerking nemen wij het hele bouwproces uit handen. U krijgt de sleutel.",
        },
      ]}
      body={[
        {
          heading: "Voor particulier én bedrijf",
          paragraphs: [
            "Wij realiseren uiteenlopende nieuwbouwprojecten voor particuliere en zakelijke opdrachtgevers: vrijstaande woningen, twee-onder-een-kapwoningen, appartementen, kantoorruimtes en bedrijfshallen.",
            "Of u nu droomt van uw eerste eigen huis of plannen heeft voor een nieuw bedrijfspand: we begeleiden u door het hele proces.",
          ],
        },
        {
          heading: "Van ontwerp tot oplevering",
          paragraphs: [
            "We coördineren met architecten, ingenieurs en onderaannemers, houden de planning strak en houden u op elk moment op de hoogte van de voortgang.",
            "Hoogwaardige materialen, oog voor energie-efficiëntie en vakmanschap in elk detail vormen de basis van onze projecten.",
          ],
        },
      ]}
    />
  );
}
