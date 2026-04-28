import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/services";

export function ServiceCard({
  service,
  featured = false,
}: {
  service: Service;
  featured?: boolean;
}) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl transition-colors ${
        featured ? "bg-primary text-ink" : "bg-surface text-ink hover:bg-primary"
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-2xl font-bold tracking-tight">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-base leading-relaxed">
          {service.short}
        </p>
        <Link
          href={`/diensten/${service.slug}`}
          className={`mt-7 inline-flex items-center justify-center gap-2 self-start rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
            featured
              ? "bg-white text-ink hover:bg-ink hover:text-white"
              : "bg-primary text-ink group-hover:bg-white"
          }`}
        >
          Meer info
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
