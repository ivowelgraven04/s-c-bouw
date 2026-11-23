export type Testimonial = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
};

// Echte Google-reviews van S&C Bouw (Google Maps, 5,0 uit 7 reviews, gecontroleerd 23-11-2026)
export const testimonials: Testimonial[] = [
  {
    name: "Mirko Ensinck",
    rating: 5,
    quote:
      "S&C Bouw heeft onlangs bij ons een nieuwe dakkapel geplaatst en een dakrenovatie met isolatie uitgevoerd. We zijn zeer tevreden met het resultaat. De communicatie was helder en professioneel vanaf het eerste contact.",
  },
  {
    name: "Jan Deckers",
    rating: 5,
    quote:
      "2 Enthousiaste vakmannen, die goed met ons hebben meegedacht, ideeën hebben aangedragen en uiteindelijk voor een perfect eindresultaat hebben gezorgd. Communicatie vlot en correct. Afspraak = Afspraak!",
  },
  {
    name: "Klaas Stutje",
    rating: 5,
    quote:
      "Simon en Cas hebben ons dak volledig gerenoveerd en daar zijn we heel tevreden over. De communicatie verliep heel soepel, helder en transparant. Ook werkten ze netjes en met een uitstekend resultaat. Vakmannen!",
  },
];
