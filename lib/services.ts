export type Service = {
  slug: "dakwerken" | "nieuwbouw" | "renovatie" | "stellingbouw";
  title: string;
  short: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "dakwerken",
    title: "Dakwerken",
    short:
      "Alle werkzaamheden aan daken, zoals plaatsing, herstel, isolatie en onderhoud.",
    image: "/images/service-dakwerken.jpg",
  },
  {
    slug: "nieuwbouw",
    title: "Nieuwbouw",
    short:
      "Het ontwerpen en bouwen van volledig nieuwe constructies vanaf de grond.",
    image: "/images/service-nieuwbouw.jpg",
  },
  {
    slug: "renovatie",
    title: "Renovatie",
    short:
      "Herstellen en moderniseren van bestaande gebouwen om hun waarde en functionaliteit te verbeteren.",
    image: "/images/service-renovatie.jpg",
  },
  {
    slug: "stellingbouw",
    title: "Stellingbouw",
    short:
      "Professioneel opzetten van steigers voor veilige toegang tot werkplekken op hoogte.",
    image: "/images/service-stellingbouw.jpg",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
