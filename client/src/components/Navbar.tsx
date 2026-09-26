
import { ChevronsRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useContent } from "@/src/lib/content";
import { CornerMark } from "@/src/components/SectionDivider";
import { StarButton } from "@/src/components/StarButton";

/**
 * Fixed header: max-w 1344px bar, h-12, hairline top/bottom rules,
 * logo left, links center (md+), StarButton right, hamburger below md.
 */
export function Navbar() {
  const { NAV_LINKS } = useContent();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <header className="fixed top-3 right-0 left-0 z-50 transition-all duration-500">
      <nav
        aria-label="Primary"
        className="relative mx-auto w-full max-w-[1344px] bg-transparent before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-px before:bg-foreground/10 after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-px after:bg-foreground/10 lg:w-[calc(100%-3.5rem)]"
      >
        <CornerMark tone="z-20" className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
        <CornerMark tone="z-20" className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
        <CornerMark tone="z-20" className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
        <CornerMark tone="z-20" className="right-0 bottom-0 translate-x-1/2 translate-y-1/2" />
        <div className="flex h-12 items-center justify-between px-5 transition-all duration-500">
          <a
            href="#"
            aria-label="Qronos home"
            className="inline-flex items-center rounded-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/qronos-logo.svg"
              alt="Qronos"
              className="h-7 w-auto transition-all duration-500"
            />
          </a>

          <div className="hidden items-center gap-12 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link group text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center md:flex">
            <StarButton
              size="sm"
              onClick={() => {
                document.querySelector("#features")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              GET STARTED
              <ChevronsRight size={14} strokeWidth={1.8} aria-hidden="true" />
            </StarButton>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="rounded-sm p-2 text-white transition-colors duration-300 hover:text-white md:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={`mx-4 overflow-hidden transition-all duration-300 ease-out md:hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/95 p-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="nav-link rounded-lg px-3 py-2.5 text-base"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <StarButton
                size="md"
                className="w-full"
                onClick={() => {
                  setOpen(false);
                  document.querySelector("#features")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                GET STARTED
                <ChevronsRight size={14} strokeWidth={1.8} aria-hidden="true" />
              </StarButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
