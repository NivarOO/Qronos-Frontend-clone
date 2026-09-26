import { ArrowUpRight } from "lucide-react";
import { FOOTER_BLURB, FOOTER_COLUMNS, FOOTER_SOCIALS } from "@/src/lib/data";

/**
 * Site footer: brand column (logo, blurb, socials with arrow-reveal
 * hover), four link columns, bottom status bar.
 */
export function Footer() {
  return (
    <footer className="relative bg-black">
      <div className="relative z-10 mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-6 lg:gap-8">
            <div className="col-span-2">
              <a
                href="#"
                aria-label="Qronos home"
                className="mb-6 inline-flex items-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/qronos-logo.svg"
                  alt="Qronos"
                  className="h-6 w-auto"
                />
              </a>
              <p className="mb-8 max-w-xs text-sm leading-relaxed text-white/50">
                {FOOTER_BLURB}
              </p>
              <div className="flex gap-6">
                {FOOTER_SOCIALS.map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="group flex items-center gap-1 text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {social}
                    <ArrowUpRight
                      size={12}
                      aria-hidden="true"
                      className="-translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>

            {FOOTER_COLUMNS.map((column) => (
              <div key={column.heading}>
                <h3 className="mb-6 text-sm font-medium text-white">
                  {column.heading}
                </h3>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
                      >
                        {link.label}
                        {link.badge && (
                          <span className="rounded-full bg-white px-2 py-0.5 text-xs text-black">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 md:flex-row md:items-center">
          <p className="text-sm text-white/30">
            © 2026 Qronos. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/30">
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400" />
              All scheduler systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
