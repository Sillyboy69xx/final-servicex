"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  applyGtagConsent,
  type ConsentChoice,
} from "@/lib/google-analytics";

const COOKIE_NAME = "prv_consent_v1";
const SIX_MONTHS = 60 * 60 * 24 * 180;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const necessaryOnly: ConsentChoice = {
  v: 1,
  analytics: false,
  ads: false,
  personalization: false,
};

function readChoice(): ConsentChoice | null {
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

function removeAccessibleGoogleStorage(choice: ConsentChoice) {
  const cookieNames = document.cookie
    .split(";")
    .map((part) => part.trim().split("=")[0])
    .filter(Boolean);

  const host = window.location.hostname;
  const baseDomain = host.replace(/^www\./, "");
  const domains = ["", `; Domain=${host}`, `; Domain=${baseDomain}`];

  for (const name of cookieNames) {
    const analyticsCookie =
      name === "_ga" || name.startsWith("_ga_") || name === "_gid";
    const adsCookie = name.startsWith("_gcl_");

    if (
      (analyticsCookie && !choice.analytics) ||
      (adsCookie && !choice.ads)
    ) {
      for (const domain of domains) {
        document.cookie =
          `${name}=; Max-Age=0; Path=/${domain}; SameSite=Lax` +
          (window.location.protocol === "https:" ? "; Secure" : "");
      }
    }
  }

  if (!choice.ads) {
    try {
      window.localStorage.removeItem("_gcl_ls");
    } catch {
      // Stocarea locală poate fi indisponibilă în unele browsere.
    }
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>(necessaryOnly);

  useEffect(() => {
    const saved = readChoice();

    if (saved) {
      setChoice(saved);
      // Restore Consent Mode for returning visitors before they open settings
      applyGtagConsent(saved);
    } else {
      setVisible(true);
    }

    function openSettings() {
      setChoice(readChoice() ?? necessaryOnly);
      setCustomizing(true);
      setVisible(true);
    }

    window.addEventListener("prv:open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener(
        "prv:open-cookie-settings",
        openSettings
      );
    };
  }, []);

  function save(next: ConsentChoice) {
    const finalChoice: ConsentChoice = {
      ...next,
      personalization: next.ads && next.personalization,
    };

    document.cookie =
      `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(finalChoice))}; ` +
      `Max-Age=${SIX_MONTHS}; Path=/; SameSite=Lax` +
      (window.location.protocol === "https:" ? "; Secure" : "");

    removeAccessibleGoogleStorage(finalChoice);

    // Sync Google Consent Mode v2 with the visitor's cookie choices
    applyGtagConsent(finalChoice);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "prv_consent_update",
      prvConsent: finalChoice,
    });

    setChoice(finalChoice);
    setCustomizing(false);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-6">
      <section
        aria-label="Preferințe pentru cookie-uri"
        className="pointer-events-auto mx-auto max-h-[78vh] max-w-4xl overflow-y-auto rounded-xl border border-black/20 bg-[#f5efe6] p-5 text-[#191919] shadow-[0_15px_60px_rgba(0,0,0,0.25)] sm:p-7"
      >
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">
          Confidențialitatea ta
        </p>

        <h2 className="mt-2 text-2xl font-black uppercase leading-tight sm:text-3xl">
          Tu alegi cookie-urile
        </h2>

        <p className="mt-3 text-sm leading-6 text-black/75">
          Vercel Web Analytics oferă statistici fără cookie-uri. Google
          Analytics 4 și Google Ads, atunci când sunt activate, pot folosi
          cookie-uri pentru statistici, măsurarea reclamelor și, numai dacă
          alegi, reclame personalizate. Datele aferente pot fi transmise
          către Google. În Advanced Consent Mode, Google poate primi
          semnale limitate fără cookie-uri chiar și când refuzi
          cookie-urile opționale.
        </p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          <Link
            href="/politica-cookies"
            className="underline underline-offset-4 hover:text-red-700"
          >
            Politica de cookie-uri
          </Link>

          <Link
            href="/politica-de-confindentialitate"
            className="underline underline-offset-4 hover:text-red-700"
          >
            Politica de confidențialitate
          </Link>

          <a
            href="https://business.safety.google/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-red-700"
          >
            Cum folosește Google datele
          </a>
        </div>

        {customizing && (
          <div className="mt-5 space-y-3 border-t border-black/15 pt-5">
            <div className="rounded-lg border border-black/15 bg-white/50 p-4">
              <p className="font-semibold">Necesare — mereu active</p>
              <p className="mt-1 text-sm text-black/70">
                Rețin alegerea ta și permit funcționarea de bază a
                site-ului.
              </p>
            </div>

            <label className="flex cursor-pointer gap-3 rounded-lg border border-black/15 bg-white/50 p-4">
              <input
                type="checkbox"
                checked={choice.analytics}
                onChange={(event) =>
                  setChoice((current) => ({
                    ...current,
                    analytics: event.target.checked,
                  }))
                }
                className="mt-1 h-5 w-5 shrink-0 accent-red-700"
              />

              <span>
                <span className="block font-semibold">
                  Statistici — Google Analytics 4
                </span>
                <span className="mt-1 block text-sm text-black/70">
                  Cookie-uri pentru măsurarea vizitelor și utilizării
                  site-ului.
                </span>
              </span>
            </label>

            <label className="flex cursor-pointer gap-3 rounded-lg border border-black/15 bg-white/50 p-4">
              <input
                type="checkbox"
                checked={choice.ads}
                onChange={(event) =>
                  setChoice((current) => ({
                    ...current,
                    ads: event.target.checked,
                    personalization: event.target.checked
                      ? current.personalization
                      : false,
                  }))
                }
                className="mt-1 h-5 w-5 shrink-0 accent-red-700"
              />

              <span>
                <span className="block font-semibold">
                  Publicitate și măsurarea conversiilor
                </span>
                <span className="mt-1 block text-sm text-black/70">
                  Cookie-uri Google Ads și date folosite pentru
                  măsurarea reclamelor.
                </span>
              </span>
            </label>

            <label
              className={`flex gap-3 rounded-lg border border-black/15 bg-white/50 p-4 ${
                choice.ads ? "cursor-pointer" : "opacity-55"
              }`}
            >
              <input
                type="checkbox"
                checked={choice.personalization}
                disabled={!choice.ads}
                onChange={(event) =>
                  setChoice((current) => ({
                    ...current,
                    personalization: event.target.checked,
                  }))
                }
                className="mt-1 h-5 w-5 shrink-0 accent-red-700"
              />

              <span>
                <span className="block font-semibold">
                  Reclame personalizate
                </span>
                <span className="mt-1 block text-sm text-black/70">
                  Permite folosirea datelor pentru personalizarea
                  reclamelor. Această opțiune este separată de
                  măsurarea conversiilor.
                </span>
              </span>
            </label>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-2 border-t border-black/15 pt-5 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={() => save(necessaryOnly)}
            className="min-h-11 rounded-md border border-black/45 px-5 py-2.5 text-sm font-semibold hover:bg-black/5"
          >
            Respinge opționalele
          </button>

          {customizing ? (
            <button
              type="button"
              onClick={() => save(choice)}
              className="min-h-11 rounded-md border border-black/45 px-5 py-2.5 text-sm font-semibold hover:bg-black/5"
            >
              Salvează alegerile
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCustomizing(true)}
              className="min-h-11 rounded-md border border-black/45 px-5 py-2.5 text-sm font-semibold hover:bg-black/5"
            >
              Personalizează
            </button>
          )}

          <button
            type="button"
            onClick={() =>
              save({
                v: 1,
                analytics: true,
                ads: true,
                personalization: true,
              })
            }
            className="min-h-11 rounded-md bg-red-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-800 sm:ml-auto"
          >
            Acceptă toate
          </button>
        </div>
      </section>
    </div>
  );
}
