import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata = {
  title: "Stellingbouw",
  description:
    "Veilige, stabiele en snel geplaatste stellingen voor renovatie-, schilder- of dakwerken. Inclusief montage en demontage.",
};

export default function StellingbouwPage() {
  return (
    <ServiceDetail
      eyebrow="S & C Bouw"
      title="Stellingbouw"
      intro="De juiste stelling die perfect aansluit bij uw project, of het nu gaat om renovatie, nieuwbouw of onderhoud."
      image1="/images/service-stellingbouw.jpg"
      image2="/images/stellingbouw-detail.jpg"
      features={[
        {
          title: "Veiligheid voorop",
          body:
            "Onze stellingen voldoen aan alle veiligheidsnormen en worden door gecertificeerde monteurs opgebouwd.",
        },
        {
          title: "Snel & efficiënt",
          body:
            "Korte doorlooptijd voor montage en demontage, zodat uw project geen onnodige vertraging oploopt.",
        },
        {
          title: "Op maat van het project",
          body:
            "We bekijken uw situatie en kiezen de juiste opbouw, voor kleine en grote werken.",
        },
      ]}
      body={[
        {
          heading: "Stellingbouw als losse dienst",
          paragraphs: [
            "Heeft u alleen een stelling nodig voor renovatie, schilderwerk of dakwerken? Wij bieden stellingbouw als aparte dienst aan, inclusief montage en demontage door ons eigen team.",
            "Een veilige, stabiele stelling is essentieel voor efficiënt en veilig werken op hoogte. Dat begint bij een goede opbouw.",
          ],
        },
        {
          heading: "Inclusief advies",
          paragraphs: [
            "We adviseren over het juiste type en de juiste maatvoering, en zorgen ervoor dat de stelling perfect aansluit bij de werkzaamheden die u of uw aannemer uitvoert.",
            "Combineert u dakwerken of renovatie met stellingbouw? Dan regelen wij alles voor u, onder één dak.",
          ],
        },
      ]}
    />
  );
}
