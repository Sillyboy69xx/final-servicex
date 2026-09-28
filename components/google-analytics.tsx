"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  applyGtagConsent,
  type ConsentChoice,
} from "@/lib/google-analytics";

const COOKIE_NAME = "prv_consent_v1";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Reads and validates the saved consent cookie, if present */
function readSavedConsent(): ConsentChoice | null {
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${COOKIE_NAME}=`));

  if (!cookie) return null;

  try {
    const saved = JSON.parse(
      decodeURIComponent(cookie.slice(COOKIE_NAME.length + 1))
    ) as Partial<ConsentChoice>;

    if (
      saved.v !== 1 ||
      typeof saved.analytics !== "boolean" ||
      typeof saved.ads !== "boolean" ||
      typeof saved.personalization !== "boolean"
    ) {
      return null;
    }

    return {
      v: 1,
      analytics: saved.analytics,
      ads: saved.ads,
      personalization: saved.ads && saved.personalization,
    };
  } catch {
    return null;
  }
}

/**
 * Restores Consent Mode from the cookie and sends SPA page_view events on
 * App Router navigations (skips the first paint to avoid double-counting).
 */
export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Skip the initial config page_view so we do not double-count first load
  const isFirstPath = useRef(true);

  // Restore Consent Mode for returning visitors who already chose preferences
  useEffect(() => {
    const saved = readSavedConsent();
    if (saved) {
      applyGtagConsent(saved);
    }
  }, []);

  // Track client-side route changes as GA4 page_view events
  useEffect(() => {
    if (isFirstPath.current) {
      isFirstPath.current = false;
      return;
    }

    if (typeof window.gtag !== "function") return;

    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag("event", "page_view", {
      page_path: pagePath,
    });
  }, [pathname, searchParams]);

  return null;
}
