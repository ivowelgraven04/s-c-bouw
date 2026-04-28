export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://www.scbouw.nl");

export const site = {
  name: "S&C Bouw",
  shortName: "S&C",
  tagline: "Een stabiele ondergrond voor jouw project",
  email: "info@scbouw.nl",
  emailHref: "mailto:info@scbouw.nl",
  phone: "+31 6 22 86 41 25",
  phoneHref: "tel:+31622864125",
  phoneSimon: "+31 6 22 86 41 25",
  phoneSimonHref: "tel:+31622864125",
  phoneCas: "+31 6 30 77 88 39",
  phoneCasHref: "tel:+31630778839",
  whatsapp: "+31622864125",
  whatsappHref: "https://wa.me/31622864125",
  emergency: "+31 6 22 86 41 25",
  emergencyHref: "tel:+31622864125",
  address: "Nederland & België",
  region: "Nederland & België",
  founders: ["Cas Marchal", "Simon Hilgers"],
  url: siteUrl,
};

export const nav = [
  { label: "Startpagina", href: "/" },
  {
    label: "Diensten",
    href: "/diensten",
    children: [
      { label: "Dakwerken", href: "/diensten/dakwerken" },
      { label: "Nieuwbouw", href: "/diensten/nieuwbouw" },
      { label: "Renovatie", href: "/diensten/renovatie" },
      { label: "Stellingbouw", href: "/diensten/stellingbouw" },
    ],
  },
  {
    label: "Over Ons",
    href: "/over-ons",
    children: [
      { label: "Recente Projecten", href: "/projecten" },
      { label: "Werken bij", href: "/werken-bij" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;
