import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site, siteUrl } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "S&C Bouw is uw aannemer voor dakwerken, nieuwbouw, renovatie en stellingbouw in Nederland en België. Vakkundig, persoonlijk en met oog voor detail.",
  applicationName: site.name,
  keywords: [
    "aannemer Maastricht",
    "dakwerken",
    "nieuwbouw",
    "renovatie",
    "stellingbouw",
    "S&C Bouw",
    "Nederland",
    "België",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "Aannemer in Maastricht voor dakwerken, nieuwbouw, renovatie en stellingbouw in Nederland & België.",
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true, address: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  url: siteUrl,
  telephone: site.phone,
  email: site.email,
  founders: site.founders.map((n) => ({ "@type": "Person", name: n })),
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
  },
  areaServed: ["Nederland", "België"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background text-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
