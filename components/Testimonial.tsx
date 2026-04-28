import type { Testimonial as TestimonialType } from "@/lib/testimonials";
import { Stars } from "./Stars";

export function Testimonial({ data }: { data: TestimonialType }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 sm:p-8">
      <Stars rating={data.rating} />
      <blockquote className="mt-5 flex-1 text-base leading-relaxed text-body">
        “{data.quote}”
      </blockquote>
      <figcaption className="mt-6 font-display text-xl font-bold text-ink">
        {data.name}
      </figcaption>
    </figure>
  );
}
