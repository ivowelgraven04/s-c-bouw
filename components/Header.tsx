"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ease-out ${
          scrolled
            ? "mx-3 mt-3 rounded-full bg-black/95 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md sm:mx-6 sm:mt-4 lg:mx-10"
            : "mx-0 mt-0 rounded-none bg-black shadow-none"
        }`}
      >
        <div
          className={`container-wide flex items-center justify-between gap-6 transition-all duration-300 ease-out ${
            scrolled ? "h-16" : "h-24"
          }`}
        >
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="S&C Bouw — home"
          >
            <Image
              src="/images/logo.png"
              alt="S&C Bouw"
              width={84}
              height={72}
              priority
              className={`w-auto transition-all duration-300 ease-out ${
                scrolled ? "h-10" : "h-16"
              }`}
            />
          </Link>

          <nav
            className="hidden items-center gap-10 lg:flex"
            aria-label="Hoofdmenu"
          >
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              if (!("children" in item) || !item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base transition-colors ${
                      active ? "text-primary" : "text-white hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = openDropdown === item.label;
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-base transition-colors ${
                      active ? "text-primary" : "text-white hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>
                  {isOpen && (
                    <div className="absolute left-1/2 top-full z-10 -translate-x-1/2 pt-3">
                      <div className="min-w-[14rem] rounded-xl border border-white/10 bg-black p-2 shadow-soft">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block rounded-lg px-3 py-2 text-sm text-white transition-colors hover:bg-white/5 hover:text-primary"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Menu openen"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-transparent text-white lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span
                className={`h-[2px] w-5 bg-white transition-transform ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-white transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-white transition-transform ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-x-0 z-40 origin-top transition-all duration-200 ${
            open ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0"
          } ${scrolled ? "top-[5.25rem]" : "top-24"}`}
        >
          <div className="mx-4 rounded-xl border border-white/10 bg-black p-4 shadow-soft">
            <nav className="flex flex-col">
              {nav.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-lg px-3 py-3 text-base text-white hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                  {"children" in item && item.children && (
                    <div className="ml-4 border-l border-white/10 pl-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-primary"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
