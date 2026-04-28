import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ValueProps } from "@/components/ValueProps";
import { ProcessSteps } from "@/components/ProcessSteps";
import { MaastrichtMap } from "@/components/MaastrichtMap";
import { MeedenkenCTA } from "@/components/MeedenkenCTA";
import { site } from "@/lib/site";

export const metadata = {
  title: "Over Ons",
  description:
    "Over S&C Bouw — opgericht door Cas Marchal en Simon Hilgers. Aannemer voor heel Nederland en België.",
};

export default function OverOnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="S & C Bouw"
        title="Over ons"
        intro="U kunt vertrouwen op de kwaliteit en professionaliteit van ons werk."
      />

      <ValueProps />

      {/* Founders / about */}
      <section className="section bg-surface">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/about-team.jpg"
                alt={`${site.founders.join(" & ")} — oprichters S&C Bouw`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="eyebrow">Wie zijn wij</span>
              <h2 className="h-section mt-4">Cas Marchal &amp; Simon Hilgers</h2>
              <p className="lede mt-5">
                S&amp;C Bouw is opgericht door {site.founders.join(" en ")},
                twee gepassioneerde vakmannen. Met S&amp;C bundelen we
                jarenlange ervaring in dakwerken, nieuwbouw, renovatie en
                stellingbouw.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body">
                Als aannemer coördineren wij het volledige bouwproces — van
                eerste kennismaking tot oplevering. Eén vast aanspreekpunt,
                heldere planning en oog voor detail. We werken in heel Nederland
                en België.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Vraag een offerte aan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* Why choose us */}
      <section className="section">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                t: "Klantgerichte service",
                b: "Wij staan altijd klaar voor onze klanten — van het eerste gesprek tot ver na de oplevering.",
              },
              {
                t: "Vertrouwd & aanbevolen",
                b: "Onze klanten waarderen onze aanpak en bevelen ons aan bij familie, vrienden en collega's.",
              },
              {
                t: "Gecertificeerd & verzekerd",
                b: "Volledig gecertificeerd team en alle benodigde verzekeringen — zekerheid voor u en ons.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <h3 className="font-sans text-xl font-bold text-ink">{x.t}</h3>
                <p className="mt-2 text-base leading-relaxed text-body">{x.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/diensten" className="btn-outline-dark">
              Ontdek onze diensten
            </Link>
          </div>
        </div>
      </section>

      <MaastrichtMap />

      <MeedenkenCTA />
    </>
  );
}
