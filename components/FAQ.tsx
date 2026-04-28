"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/faq";

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <li key={item.q}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
            >
              <h4 className="font-display text-lg font-bold text-ink sm:text-xl">
                {item.q}
              </h4>
              <span
                className={`inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-ink transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-6 sm:px-7">
                <p className="text-base leading-relaxed text-body">{item.a}</p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
