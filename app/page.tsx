import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonial } from "@/components/Testimonial";
import { FAQ } from "@/components/FAQ";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { AboutTrust } from "@/components/AboutTrust";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/testimonials";
import { faqHome } from "@/lib/faq";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Diensten */}
      <section id="diensten" className="section">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Diensten</span>
            <h2 className="h-section mt-4">Bekijk onze diensten</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} featured={i === 1} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/diensten" className="btn-outline-dark">
              Bekijk al onze diensten
            </Link>
          </div>
        </div>
      </section>

      {/* About trust */}
      <AboutTrust />

      {/* Reviews */}
      <section className="section bg-surface">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Ons Werk</span>
            <h2 className="h-section mt-4">Klantrecensies</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Testimonial key={t.name} data={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent work CTA */}
      <section className="section">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="eyebrow">Ons werk</span>
              <h2 className="h-section mt-4">
                Bekijk onze voorgaande projecten
              </h2>
              <p className="lede mt-5">
                Een overzicht van realisaties die vakmanschap en oog voor detail
                uitstralen — van nieuwbouw tot renovatie.
              </p>
              <Link href="/projecten" className="btn-primary mt-8">
                Bekijk onze projecten
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="relative aspect-square overflow-hidden rounded-2xl"
                >
                  <Image
                    src={`/images/projects/${String(n).padStart(2, "0")}.jpg`}
                    alt={`Project ${n}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Veelgestelde vragen</span>
            <h2 className="h-section mt-4">Antwoord op uw vragen</h2>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQ items={faqHome} />
          </div>
        </div>
      </section>

      <EmergencyBanner />
    </>
  );
}
