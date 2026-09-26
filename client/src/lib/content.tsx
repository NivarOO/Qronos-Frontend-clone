import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import * as fallback from "./fallback";
import type { SiteData } from "./types";

const ContentContext = createContext<SiteData>(fallback as unknown as SiteData);

interface ContentResponse {
  source: "mongo" | "memory";
  data: SiteData;
}

function isSiteData(value: unknown): value is SiteData {
  if (typeof value !== "object" || value === null) return false;
  const data = value as Record<string, unknown>;
  return (
    Array.isArray(data.NAV_LINKS) &&
    Array.isArray(data.PRICING_PLANS) &&
    Array.isArray(data.TESTIMONIALS) &&
    typeof data.FOOTER_BLURB === "string"
  );
}

/**
 * Loads site content from the Express API once, falling back to the
 * bundled snapshot when the API is unreachable. The page renders
 * immediately from the fallback and upgrades when the API responds.
 */
export function ContentProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(
    () => fallback as unknown as SiteData,
  );

  useEffect(() => {
    let cancelled = false;
    fetch("/api/content")
      .then((response) => {
        if (!response.ok) throw new Error(`content ${response.status}`);
        return response.json() as Promise<ContentResponse>;
      })
      .then((payload) => {
        if (!cancelled && isSiteData(payload.data)) setData(payload.data);
      })
      .catch(() => {
        // Offline / API down — bundled fallback stays in place.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <ContentContext.Provider value={data}>{children}</ContentContext.Provider>
  );
}

export function useContent(): SiteData {
  return useContext(ContentContext);
}
