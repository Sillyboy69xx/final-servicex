/** GA4 measurement ID for prvatelierauto.ro — safe to import from server or client */
export const GA_MEASUREMENT_ID = "G-Y8Y2CWHQCB";

/** Google Ads conversion destination for website call tracking (AW-ID/label) */
export const GOOGLE_ADS_CALL_CONVERSION_ID =
  "AW-18376235326/fmfvCLeJnZ4dEL6yvLpE";

/**
 * Phone number passed to phone_conversion_number — must match the exact
 * digits/formatting shown on the site so Google can swap in a forwarding number.
 */
export const GOOGLE_ADS_PHONE_CONVERSION_NUMBER = "+40 722 502 035";

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
