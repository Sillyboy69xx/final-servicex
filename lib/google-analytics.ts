/** GA4 measurement ID for prvatelierauto.ro — safe to import from server or client */
export const GA_MEASUREMENT_ID = "G-Y8Y2CWHQCB";

/** Consent flags stored in the prv_consent_v1 cookie */
export type ConsentChoice = {
  v: 1;
  analytics: boolean;
  ads: boolean;
  personalization: boolean;
};

/** Maps our cookie banner choices to Google Consent Mode v2 storage flags */
export function consentToGtagParams(choice: ConsentChoice) {
  return {
    analytics_storage: choice.analytics ? "granted" : "denied",
    ad_storage: choice.ads ? "granted" : "denied",
    ad_user_data: choice.ads ? "granted" : "denied",
    ad_personalization: choice.personalization ? "granted" : "denied",
  } as const;
}

/** Updates Google Consent Mode after the visitor saves cookie preferences */
export function applyGtagConsent(choice: ConsentChoice) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("consent", "update", consentToGtagParams(choice));
}
