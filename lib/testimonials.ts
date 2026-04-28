export type Testimonial = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Mirko Ensinck",
    rating: 5,
    quote:
      "2 enthousiaste vakmannen, die goed met ons hebben meegedacht, ideeën hebben aangedragen en uiteindelijk voor een perfect eindresultaat hebben gezorgd.",
  },
  {
    name: "Jan Deckers",
    rating: 5,
    quote: "Communicatie vlot en correct.",
  },
  {
    name: "Mahmud Hassani",
    rating: 5,
    quote: "Afspraak = Afspraak!",
  },
];
