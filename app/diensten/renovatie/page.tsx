import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata = {
  title: "Renovatie",
  description:
    "Totaalrenovaties van woningen: structurele aanpassingen, dakvernieuwing, isolatie en gevelrenovaties op maat door S&C Bouw.",
};

export default function RenovatiePage() {
  return (
    <ServiceDetail
      eyebrow="S & C Bouw"
      title="Renovatie"
      intro="Bij S&C Bouw geloven we dat renovatie meer is dan alleen het repareren van wat kapot is — het is een persoonlijke reis."
      image1="/images/service-renovatie.jpg"
      image2="/images/projects/09.jpg"
      features={[
        {
          title: "Persoonlijke aanpak",
          body:
            "We luisteren goed naar uw wensen en brengen uw woning samen met u naar een hoger niveau.",
        },
        {
          title: "Totaalpakket",
          body:
            "Structurele aanpassingen, dakvernieuwing, isolatie, gevelrenovatie — alles onder één dak.",
        },
        {
          title: "Vergunningen geregeld",
          body:
            "Wij regelen vergunningen en stemmen af met specialisten waar nodig — u heeft één aanspreekpunt.",
        },
      ]}
      body={[
        {
          heading: "Een persoonlijke reis",
          paragraphs: [
            "Een renovatie raakt uw dagelijks leven. Daarom nemen wij vooraf de tijd om naar u te luisteren, uw woning te bezichtigen en samen een plan op te stellen dat klopt.",
            "Wij kijken niet alleen naar wat gerepareerd moet worden, maar ook naar wat uw woning toekomstbestendig en mooier maakt: meer ruimte, meer licht, betere isolatie.",
          ],
        },
        {
          heading: "Het volledige proces",
          paragraphs: [
            "Wij maken een gedetailleerd renovatieplan op maat van uw woning, inclusief planning en heldere offerte. Vergunningen vragen we voor u aan en specialisten stemmen we onderling af.",
            "Tijdens de uitvoering houden wij u op de hoogte van de voortgang en denken we met u mee bij keuzes die onderweg langskomen.",
          ],
        },
      ]}
    />
  );
}
